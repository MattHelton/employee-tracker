const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Flylisa08',
      database: 'employee'
    },
  );

// questions here
const promptMenu = () => {
    inquirer
    .prompt([
    {
        type: "list",
        name: "options",
        message: "Please select an option",
        choices: [
            {
                name: "View all departments",
                value: "VIEW_DEPARTMENTS"
            }, 
            {
                name: "View all employees",
                value: "VIEW_EMPLOYEES"
            }, 
            {
                name: "View all roles",
                value: "VIEW_ROLES"
            }, 
            {
                name: "Add a department",
                value: "ADD_DEPARTMENT"
            }, 
            {
                name: "Add an employee",
                value: "ADD_EMPLOYEE"
            }, 
            {
                name: "Add an employee role",
                value: "ADD_ROLE"
            },
            {
                name:"Update an employee role",
                value: "UPDATE_ROLE"
            } ]
      }
    ]),
};

// initialize app here
const init = () => {
  inquirer.prompt(menu)
    .then((selection) => {
        console.log(selection)
        const choice = selection.options
        switch(choice) {
            case "VIEW_DEPARTMENTS":
                viewDepartments()
                break;
            default:
            case "VIEW_EMPLOYEES":
                viewEmployees()
                break;
            default:
            case "VIEW_ROLES":
                viewRoles()
                break;
            default:
            case "ADD_DEPARTMENT":
                addDepartment()
                break;
            default:
                case "ADD_EMPLOYEE":
                addEmployee()
                break;
            default:
            case "ADD_ROLE":
                addRole()
                break;
            default:
            case "UPDATE_ROLE":
                updateRole()
                break;
            default:
                
              
          }
    })
    .catch((error) => {
      console.log(error);
    });
};
function viewDepartments() {
    const sql = `SELECT * FROM department`;
  
    return db.query(sql)
}
function viewEmployees() {
    const sql = `SELECT * FROM employee`;
  
    return db.query(sql)
}
function viewRoles() {
    const sql = `SELECT * FROM role`;
  
    return db.query(sql)
}
function addDepartment() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please provide the name of the Team Manager.",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the Team Manager's employee ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is Team Manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Team Manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
      teamMembers.push(manager)
      console.log(answers);
      promptMenu();
    });

}
function addEmployee() {
    const sql = `SELECT * FROM role`;
  
    return db.query(sql)
}
function addRole() {
    const sql = `SELECT * FROM role`;
  
    return db.query(sql)
}
function updateRole() {
    const sql = `SELECT * FROM role`;
  
    return db.query(sql)
}

init();
