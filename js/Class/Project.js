"use strict";
class Project {
  static projectCount = 0;
  #id;
  #done = false;
  #title;
  #price;
  constructor(prTitle, prPrice, prBonus = 0) {
    this.#title = prTitle;
    this.#price = prPrice;
    this.bonus = prBonus;
    // ++ prideda vieneta ir tada skaiciuoja savybe
    this.#id = "prcj_" + ++Project.projectCount;
  }
}
const pr1 = new Project("Headeris", 100);
const pr2 = new Project("Mobile menu", 100, 30);
console.log(pr1, pr2);
