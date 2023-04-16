const User = require("./User"); // Importar corretamente a classe User

class App {
    static users = [];

    constructor() {}

    static createUser(email, fullName, account) {
        const user = new User(fullName, email, account);
        App.users.push(user);
        let userEmail = App.users.find((u) => u.email === user.email);
        if (userEmail) {
            console.log(`existe`);
        } else {
            console.log(`nao existe`);
        }
        return App.users;
    }

    static findUser(user) {
        // Encontrar o usuário pelo email

        let userEmail = App.users.find((u) => u.email === user.email);
        if (userEmail === true) {
            console.log(userEmail);
        } else {
            console.log(userEmail);
        }
    }

    // //fazer deposito
    // static makeADeposit(userReceiving, value) {
    //     return new Deposit(value);
    // }
    // //fazer transferencia
    // static makeATransfer(userTransfer, userReceiving, value) {
    //     return new Transfer(userTransfer, userReceiving, value);
    // }

    // //fazer emprestimo
    // static makeALoan(valueLoan, userReceiving, installments) {
    //     new Loan(valueLoan);
    // }

    // static changeLoanRate(newRate) {
    //     // this.#interestRate += newRate;
    // }
}
const david = App.createUser(`david`, `david@david`, 4);
const david1 = App.createUser(`david`, `dav2id@david`, 2);
const david2 = App.createUser(`david`, `dav3213213123212id1@david`, 3);

console.log(david2);
console.log(App.findUser(`dav3213213123212id1@david`));
