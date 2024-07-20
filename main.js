#! /usr/bin/env node
import inquirer from "inquirer";
const students = [];
const addStudents = () => inquirer
    .prompt([
    {
        type: "input",
        name: "name",
        message: "Enter student name: ",
    },
    {
        type: "input",
        name: "id",
        message: "Enter student ID: ",
    },
    {
        type: "input",
        name: "grade",
        message: "Enter student grade: ",
    },
    {
        type: "input",
        name: "address",
        message: "Enter student address: ",
    },
    {
        type: "input",
        name: "contactNumber",
        message: "Enter student contactNumber ",
    },
])
    .then((answers) => {
    students.push({
        name: answers.name,
        id: parseInt(answers.id),
        grade: answers.grade,
        address: answers.address,
        contactNumber: answers.contactNumber,
    });
    console.log("\t \t \t Student added successfully!");
    promptUser();
});
const displayStudents = () => {
    console.log("List of students:");
    students.forEach((student) => console.log(`Name: ${student.name}, ID: ${student.id}, Grade: ${student.grade},
        Address: ${student.address}, contactNumber: ${student.contactNumber}`));
    promptUser();
};
const promptUser = () => inquirer
    .prompt({
    type: "list",
    name: "action",
    message: "Choose an action:",
    choices: ["Add Student", "Display Students", "Exit"],
})
    .then((answer) => {
    if (answer.action === "Add Student")
        addStudents();
    else if (answer.action === "Display Students")
        displayStudents();
    else {
        console.log("Exiting program!!!");
        process.exit(0);
    }
});
console.log("\t \t \t Welcome To Student Management!!");
promptUser();
