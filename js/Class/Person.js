"use strict";

class Person {
  static personCount = 0;
  constructor({ name, surname, idCode, age, sex }) {
    //   let { name, surname, idCode, age, sex } = personObj
    this.id = "prsn_" + ++Person.personCount;
    this.name = name;
    this.surname = surname;
    this.idCode = idCode;
    this.age = age;
    this.sex = sex;
  }

  get fullName() {
    return this.name + " " + this.surname;
  }

  calcPay() {} // ipareigojam vaikines klases aprasyti darbo apmokejimo logika
}
