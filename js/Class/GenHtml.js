"use strict";
/**
 * Turesim savybe issaugoti Employee arba Partner objektus.
 * ir generuosim lenteles arba saraso pavidalu html
 */
class GenHtml {
  constructor() {
    this.personsArray = [];
    this.generatedHtmlString = "<h2>Yes it Does!!!</h2>";
  }
  // patikrtinti ar tinkami ir prideti jei tinkami, jei ne atspausdinti klaida
  addObject(obj) {
    if (!(obj instanceof Employee) && !(obj instanceof Partner)) throw new Error("netinkamas objektas");
    this.personsArray.push(obj);
  }
  // is saraso personsArray sugeneruojam lentele
  generateTable() {
    let lentelesEilutes = "";
    // let lentelesHeaderiai = ['id', 'Vardas, Pavarde', "Atlygis (Eur)"].
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
  }
  outPutHtml() {
    let divEl = document.createElement("div");
    divEl.id = "generated";
    divEl.innerHTML = this.generatedHtmlString;
    document.body.append(divEl);
  }
}
