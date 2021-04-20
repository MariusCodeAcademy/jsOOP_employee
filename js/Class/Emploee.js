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

  // calcPay() - aprasyti metododa kuris apskaiciuoja
  // kokia suma sumoketi ir nunulina isdirbtas valandas
}

const e1 = new Emploee(p1Data, 10);
console.log("e1", e1);
