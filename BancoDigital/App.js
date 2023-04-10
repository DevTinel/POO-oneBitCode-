const installments = require("./Installments");

class App {
    #users = [];
    constructor() {}

    static createUser(fullName, email, account) {
        new User(fullName, email, account);
        //verificar se o email ja existe,se exister mostrar erro
    }
    static findUser(user) {
        //encontrar o usuario pelo  email
    }

    //fazer deposito
    static makeADeposit(userReceiving, value) {
        return new Deposit(value);
    }
    //fazer transferencia
    static makeATransfer(userTransfer, userReceiving, value) {
        return new Transfer(userTransfer, userReceiving, value);
    }

    //fazer emprestimo
    static makeALoan(valueLoan, userReceiving, installments) {
        new Loan(valueLoan);
    }

    static changeLoanRate(newRate) {
        this.#interestRate += newRate;
    }
}
