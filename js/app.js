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
// Employee =========================================================================
const e1 = new Emploee(p1Data, 10);
const e2 = new Emploee(p2Data, 20);
console.log("e1", e1);

e2.work(50);
e1.work(50);
e1.work(100);
console.log("e1", e1);
// console.log("atlyginimas", e1.calcPay());

// Project =========================================================================

const pr1 = new Project("Headeris", 100);
const pr2 = new Project("Mobile menu", 100, 30);
const newProjects = [
  new Project("Footer html", 130),
  new Project("Contact form", 330, 39),
  new Project("Main aside", 150),
  new Project("About us page", 430, 50),
];
// pr1.finishProject();
console.log(pr1, pr2);

// Partner =========================================================================

const part1 = new Partner({
  name: "Jane",
  surname: "Doe",
  idCode: 34532453425,
  age: 40,
  sex: "female",
});
// prideti projektus pr1 ir pr2
part1.addProject(pr1);
part1.addProject(pr2);

// part1.addProject(newProjects[0]);
// part1.addProject(newProjects[1]);
// part1.addProject(newProjects[2]);
// part1.addProject(newProjects[3]);

newProjects.forEach((pr) => part1.addProject(pr));

console.clear();
console.log(part1);

part1.finishOneOfProjects("prcj_2");
part1.finishOneOfProjects("prcj_3");
part1.finishOneOfProjects("prcj_4");
// part1.finishOneOfProjects("prcj_22323");
// console.log(part1.calcPay());
console.clear();
[e1, e2, part1].forEach((drb) => {
  //   debugger;
  console.log(`${drb.fullName} atlyginimas: ${drb.calcPay()}`);
});
