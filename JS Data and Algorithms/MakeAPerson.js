var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let arrOfNameComponents = firstAndLast.split(' ');
    this.__proto__._firstName = arrOfNameComponents[0];
    this.__proto__._lastName = arrOfNameComponents[1];
    this.__proto__._fullName = firstAndLast;

    this.getFirstName = () => {
        return this._firstName;
    }

    this.getLastName = () => {
        return this._lastName;
    }

    this.getFullName = () => {
        return this._fullName;
    }

    this.setFirstName = (first) => {
        this._firstName = first;
        this._fullName = `${this._firstName} ${this._lastName}`;
    }

    this.setLastName = (last) => {
        this._lastName = last;
        this._fullName = `${this._firstName} ${this._lastName}`;
    } 

    this.setFullName = (firstAndLast) => {
        this._fullName = firstAndLast;
        let arrOfNameComponents = firstAndLast.split(' ');
        this._firstName = arrOfNameComponents[0];
        this._lastName = arrOfNameComponents[1];
    }
};


