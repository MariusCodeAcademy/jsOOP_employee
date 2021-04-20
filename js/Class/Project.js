"use strict";
class Project {
  static projectCount = 0;
  #id;
  #projectDone = false;
  #title;
  #price;
  constructor(prTitle, prPrice, prBonus = 0) {
    this.#title = prTitle;
    this.#price = prPrice;
    this.bonus = prBonus;
    // ++ prideda vieneta ir tada skaiciuoja savybe
    this.#id = "prcj_" + ++Project.projectCount;
  }
  // id getteris
  get id() {
    return this.#id;
  }
  get title() {
    return this.#title;
  }
  get price() {
    return this.#price + this.bonus;
  }
  get projectDone() {
    return this.#projectDone;
  }
  // metodas uzbaigti darbui
  finishProject() {
    this.#projectDone = true;
  }
}
const pr1 = new Project("Headeris", 100);
const pr2 = new Project("Mobile menu", 100, 30);
// pr1.finishProject();
console.log(pr1, pr2);
