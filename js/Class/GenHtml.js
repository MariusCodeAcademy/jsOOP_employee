"use strict";
/**
 * Turesim savybe issaugoti Employee arba Partner objektus.
 * ir generuosim lenteles arba saraso pavidalu html
 */
class GenHtml {
  constructor() {
    this.personsArray = [];
    this.generatedHtmlString = "";
  }
  // patikrtinti ar tinkami ir prideti jei tinkami, jei ne atspausdinti klaida
  addObject(obj) {
    if (!(obj instanceof Employee) && !(obj instanceof Partner)) throw new Error("netinkamas objektas");
    this.personsArray.push(obj);
  }
  // is saraso personsArray sugeneruojam lentele
  generateTable() {
    let lentelesEilutes = this.genElutes();
    let lentelesHeaderiai = ["id", "Vardas, Pavarde", "Atlygis (Eur)"].map((el) => `<th>${el}</th>`).join("");
    // let lentelesHeaderiai = "";
    let tableString = `
        <table>
        <thead>
        <tr>
            ${lentelesHeaderiai}
        </tr>
        </thead>
        <tbody>
            ${lentelesEilutes}
        </tbody>
        </table>
        `;
    // console.log("tableString", tableString);
    this.generatedHtmlString = tableString;
    this.outPutHtml();
    // return "All is good";
  }
  genElutes() {
    /**
       * <tr>
            <td>prs1</td>
            <td>Jonas jonauskas</td>
            <td>500 Eur</td>
        </tr>
       */
    let resultString = "";
    this.personsArray.forEach((personObj) => {
      resultString += `
      <tr>
        <td>${personObj.id}</td>
        <td>${personObj.fullName}</td>
        <td>${personObj.calcPay()}</td>
      </tr>
      `;
    });
    return resultString;
  }
  outPutHtml() {
    let divEl = document.createElement("div");
    divEl.id = "generated";
    divEl.innerHTML = this.generatedHtmlString;
    document.body.append(divEl);
  }
}
