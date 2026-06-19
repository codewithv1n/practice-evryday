// Gumawa ng variables gamit ang const at let.
let age = 20; 
const name = "Vin"; 

// Gumawa ng Object na naglalaman ng info tungkol sa iyong sarili (e.g., { pangalan: "Vin", taon: 3, course: "BSIT" }).
let student = {
    name: "Vin",
    year: 3,
    course: "BSIT"
};

// Gumawa ng Array ng mga paborito mong bagay.
const favorites = ["Programming", "Sakamoto Days", "Orange Cat"];

// Challenge: I-access ang isang item sa object at i-update ang value nito. I-log sa console gamit ang console.log().
student.year = 4;
console.log(student);
console.log("Updated Year:", student.year);