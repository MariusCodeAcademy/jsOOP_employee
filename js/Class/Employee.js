"use strict";
class Employee extends Person {
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
