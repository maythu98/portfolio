//1. angle bracket syntax
let name1: any = "any";
let length1: number = (<string>name1).length;

//2. as syntax
let name2: any = "testing";
let length2: number = (name2 as string).length;

//3. Asserting with union type
let name3: string | number = "43";
let length3: number = (<string>name3).length;

type Person = { name: string };
type Employee = { department: string };
let may: Person & Employee = {
  name: "May Thu Aung",
  department: "IT",
};
let name4: string = (<Person>may).name;

console.log(name1, length1, length2, name4);
