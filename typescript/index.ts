interface Song {
    artistName: string
}
interface Employee {
    name: string;
    code: number;
    getInfo: (id:number)=> string;
}
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (a:number) => number; // arrow function
    getManagerName(a:number): string; 
}
interface Person {

}
type Person2 = [number | string | boolean];
type Category = "ABC" | "XYZ";
interface Citizen {
    name: string;
    readonly SSN: number;
}

// coding test
let personObj: Citizen  = { SSN: 110555444, name: 'James Bond' }
// personObj.SSN = '333666888'; 
const newEmployee2:IEmployee = {
    empCode: 123,
    empName: "nahid",
    getSalary(sal) {
        return sal
    },
    getManagerName(nm) {
        return "nm" + nm
    },
}
const category:Category = 'XYZ';
const person: Person2 = ["12"]
const authorName = (name: Song) => {
    console.log(name)
}

const newEmployee: Employee = {
    name: "nahid",
    code: 123,
    getInfo(id) {
        return `id--${id}`;
    },
}
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
console.log(newEmployee);


// authorName("Maaya");