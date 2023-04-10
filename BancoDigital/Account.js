class Account {
    #balance;
    constructor(deposit, installments, transfers, accountOwner) {
        // this.deposits = [];
        this.deposit = deposit;
        this.installments = installments;
        this.transfers = transfers;
        this.accountOwner = new Account();
    }

    makeADeposit(valueDeposit, target) {
        this.#balance += valueDeposit;
    }

    makeAInstallment(valueInstallment, target) {
        this.#balance += valueInstallment;
    }
    makeATransfer(valueTransfer, target) {
        this.#balance += valueTransfer;
    }
}
