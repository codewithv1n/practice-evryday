// Gumawa ng variables gamit ang const at let.
// Gumawa ng Object na naglalaman ng info tungkol sa iyong sarili (e.g., { pangalan: "Vin", taon: 3, course: "BSIT" }).
// Gumawa ng Array ng mga paborito mong bagay.
// Challenge: I-access ang isang item sa object at i-update ang value nito. I-log sa console gamit ang console.log().

let age = 20; 
const name = "Vin"; 

let student = {
    name: "Vin",
    year: 3,
    course: "BSIT"
};

const favorites = ["Programming", "Sakamoto Days", "Orange Cat"];
student.year = 4;

console.log(student);
console.log("Updated Year:", student.year);