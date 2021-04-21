"use strict";

/**
 * Turesim savybe issaugoti Employee arba Parter objektus.
 * ir generuosim lenteles arba saraso pavidalu html
 */
class GenHtml {
  constructor() {
    this.personsArray = [];
    this.generatedHtmlString = "";
  }
  // patikrtinti ar tinkami ir prideti jei tinkami, jei ne atspausdinti klaida
  addObjects(obj) {}
  // is saraso personsArray sugeneruojam lentele
  generateTable() {
    let lentelesEilutes = "";
    let tableString = `
        <table>
        <thead>
        <tr>
            <th>id</th>
            <th>Vardas, Pavarde</th>
            <th>Atlygis (Eur)</th>
        </tr>
        </thead>
        <tbody>
            ${lentelesEilutes}
        </tbody>
        </table>
        `;
  }
  outPutHtml(whereToOutput) {}
}
