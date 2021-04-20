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

  calcPay() {} // ipareigojam vaikines klases aprasyti darbo apmokejimo logika
}
let p1Data = {
  name: "bob",
  surname: "Smith",
  idCode: 32432344,
  age: 38,
  sex: "male",
};
let p2Data = {
  name: "James",
  surname: "Smith",
  idCode: 345345345,
  age: 38,
  sex: "male",
};
const p1 = new Person(p1Data);
const p2 = new Person({
  name: "James",
  surname: "Smith",
  idCode: 345345345,
  age: 38,
  sex: "male",
});
console.log(p1, p2);
