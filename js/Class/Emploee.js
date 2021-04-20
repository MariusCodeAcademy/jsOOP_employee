"use strict";
class Emploee extends Person {
  #hourlyPay;
  #hoursWorked = 0;
  constructor(personData, hourlyPay) {
    super(personData);
    this.hourlyPay = hourlyPay;
  }
  //#hourlyPay; setteris
  set hourlyPay(num) {
    this.#hourlyPay = num;
  }
  // metodas work() priima kiek valadu issdirbta ir padina tuo skaiciu #hoursWorked
  work(valSk) {
    this.#hoursWorked += valSk;
  }

  // calcPay() - aprasyti metododa kuris apskaiciuoja
  // kokia suma sumoketi ir nunulina isdirbtas valandas
  calcPay() {
    let toPayAmount = this.#hourlyPay * this.#hoursWorked;
    this.#hoursWorked = 0;
    return toPayAmount;
  }
}

const e1 = new Emploee(p1Data, 10);
console.log("e1", e1);

e1.work(50);
e1.work(100);
console.log("e1", e1);
console.log("atlyginimas", e1.calcPay());
