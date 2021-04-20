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
  finishOneOfProjects(norimoPabaigtiProjektoId) {}
  // pasiziureti i musu turimu darbu sarasa. pasiimti visus darbu kurie yra baigti
  // paskaiciuoti pinigus ir istrinti darbus
  calcPay() {}
}
