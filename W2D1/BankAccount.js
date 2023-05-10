class BankAccount{
    #accoutName;
    #balance;

    static accountInfoList = [];
    
    constructor(accoutName, balance){
        this.accoutName = accoutName;
        this.balance = balance;
    }

    toString(){
        return `Account Name: ${this.accoutName} Balance: ${this.balance}`;
    }

    getAccountName(){
        return this.accoutName;
    }
}
