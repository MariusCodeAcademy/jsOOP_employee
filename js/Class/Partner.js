"use strict";
class Partner extends Person {
  #currentProjects = [];

  addProject(project) {
    // patikrinti kad butu sukurtas pagal Project Klase
    if (project instanceof Project) {
      this.#currentProjects.push(project);
    }
  }
  //   finishProject() - pabaigia konkretu darba
  finishOneOfProjects(norimoPabaigtiProjektoId) {
    // surasti projekta kurio id yra norimoPabaigtiProjektoId
    let iFoundThis = this.#currentProjects.find((projectObj) => projectObj.id === norimoPabaigtiProjektoId);
    if (iFoundThis === undefined) throw new Error("projekto su tokiu id nera: " + norimoPabaigtiProjektoId);
    // console.log("iFoundThis", iFoundThis);
    // cia mes jau turim rade konkretu objekta
    // iskviesti jam finisjProject metoda
    iFoundThis.finishProject();
  }
  // pasiziureti i musu turimu darbu sarasa. pasiimti visus darbu kurie yra baigti
  // paskaiciuoti pinigus ir istrinti darbus
  calcPay() {
    //filter
    // gaunu sarasa kuriame yra tik done projektai
    let doneProjektai = this.#currentProjects.filter((prObj) => prObj.projectDone === true);
    // console.log("doneProjektai", doneProjektai);

    // paskaiciuoju bendra visu projektu kaina
    let moketinaSuma = doneProjektai.reduce((total, prObj) => total + prObj.price, 0);
    // console.log("moketinaSuma", moketinaSuma);

    // gale turi likti currentProjects tik tie el kuriu done yra lygu false
    // console.table(this.#currentProjects);
    this.#currentProjects = this.#currentProjects.filter((prObj) => prObj.projectDone === false);
    // console.table(this.#currentProjects);
    // grazinti moketina suma
    return moketinaSuma;
  }
}
