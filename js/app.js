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
const e1 = new Employee(p1Data, 10);
const e2 = new Employee(p2Data, 20);
const e3 = new Employee(
  {
    name: "Bob",
    surname: "Marley",
    idCode: 3455333,
    age: 54,
    sex: "male",
  },
  17
);
console.log("e1", e1);

e3.work(75);
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
// console.log(pr1, pr2);

// Partner =========================================================================

const part1 = new Partner({
  name: "Jane",
  surname: "Doe",
  idCode: 34532453425,
  age: 40,
  sex: "female",
});

const part2 = new Partner({
  name: "Michell",
  surname: "Brooks",
  idCode: 110191818,
  age: 37,
  sex: "female",
});
// prideti projektus pr1 ir pr2
part1.addProject(pr1);
newProjects.forEach((pr) => part1.addProject(pr));

// part1.addProject(newProjects[0]);
// part1.addProject(newProjects[1]);
// part1.addProject(newProjects[2]);
// part1.addProject(newProjects[3]);

part2.addProject(pr2);
newProjects.forEach((pr, i) => (i > 1 ? part2.addProject(pr) : false));

console.clear();
console.log(part1);
console.log(part2);

part1.finishOneOfProjects("prcj_1");
part1.finishOneOfProjects("prcj_3");

part2.finishOneOfProjects("prcj_2");
part2.finishOneOfProjects("prcj_5");
part2.finishOneOfProjects("prcj_6");
// part1.finishOneOfProjects("prcj_22323");
// console.log(part1.calcPay());
// console.clear();
[e1, e2, e3, part1, part2].forEach((drb) => {
  //   debugger;
  console.log(`${drb.fullName} atlyginimas: ${drb.calcPay()}`);
});

const html1 = new GenHtml();

// html1.addObject(e1);
// html1.addObject(part1);
// html1.addObject({ name: "James" });
[e1, e2, e3, part1, part2].forEach((prsn) => html1.addObject(prsn));
console.log("html1", html1);
