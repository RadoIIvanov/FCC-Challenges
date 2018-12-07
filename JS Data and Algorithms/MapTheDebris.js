function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    return arr.map( ({name, avgAlt}) => {
        let orbitalPeriod = Math.round(Math.sqrt((earthRadius + avgAlt)**3/GM)*2*Math.PI);
        return {name, orbitalPeriod};
    });
}

console.log(orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
}]));

