function checkCashRegister(price, cash, cid) {
    
    /// create an object to look up the worth of 1 unit of coin/bill 
    let objOfCoinBillValue = {
        PENNY : 0.01,
        NICKEL : 0.05,
        DIME : 0.1,
        QUARTER : 0.25,
        ONE : 1,
        FIVE : 5,
        TEN : 10,
        TWENTY : 20,
    }
    objOfCoinBillValue['ONE HUNDRED'] = 100;
    
    let change = cash - price;
    ////  cover the case where change = total cash register amount
    if (change === cid.reduce((total, [currency, amount]) => total + amount, 0)) {   
        return {
            status: "CLOSED",
            change: cid
        };
    }

    /// cover the case where 1. total cash register amount > change AND 2. exact change can be given
    let changeToCoinsAndBills = [];
    for (let i = cid.length - 1; i >= 0 ; --i) {
        let valueOfCurrentCoinBill = objOfCoinBillValue[cid[i][0]];
        let maxUnitsOfRespectiveCoinBill = Math.floor(change/valueOfCurrentCoinBill);
        if (maxUnitsOfRespectiveCoinBill === 0) {
            continue;
        }
        let amountToInArr = maxUnitsOfRespectiveCoinBill*valueOfCurrentCoinBill > cid[i][1] ? cid[i][1] : maxUnitsOfRespectiveCoinBill*valueOfCurrentCoinBill;
        changeToCoinsAndBills.push([cid[i][0], amountToInArr]);
        change = parseFloat(parseFloat(change - amountToInArr).toFixed(2));
        if (!change) {
            return {
                status: "OPEN",
                change: changeToCoinsAndBills,
            }
        }
    }
    //// cover every other case - either total cash register amount < change OR exact change CANNOT be given 
    return {
        status : "INSUFFICIENT_FUNDS",
        change : [],
    }
}
console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));