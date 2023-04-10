import Installments from "./Installments"
//EMPRESTIMO

class Loan{
    #interestRate
    constructor(valueLoan){
        this.valueLoan = valueLoan
        this.date = new Date()
        this.installments = new Installments()
    }
    static #interestRate = 1.5 

    static get interestRate(){
        return this.#interestRate
    }

    static set interestRate(interestRate){
        return this.#interestRate = interestRate
    }
}