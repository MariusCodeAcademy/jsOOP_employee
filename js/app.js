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
console.clear();
console.log(part1);

part1.finishOneOfProjects("prcj_2");
// part1.finishOneOfProjects("prcj_22323");
