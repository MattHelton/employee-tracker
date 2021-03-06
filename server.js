const inquirer = require("inquirer");
const mysql = require('mysql2');
require("console.table");

init ();

function init() {

    const logo = "========EMPLOYEE====="
                "========TRACKER=======";

  console.log(logo);

  promptMenu();
}

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '',
      database: 'employee'
    },
  );

// menu here
function promptMenu () {
    inquirer
    .prompt([
    {
        type: "list",
        name: "options",
        message: "Welcome to employee tracker! Please select an option below to get started.",
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
            },
            {
                name:"Quit",
                value: "QUIT"
            },
        ]
      }
    ]).then(res => {
        let choice = res.choice;
        switch(choice) {
            case "VIEW_DEPARTMENTS":
                viewDepartments()
                break;
            case "VIEW_EMPLOYEES":
                viewEmployees()
                break;
            case "VIEW_ROLES":
                viewRoles()
                break;
            case "ADD_DEPARTMENT":
                addDepartment()
                break;
            case "ADD_EMPLOYEE":
                addEmployee()
                break;
            case "ADD_ROLE":
                addRole()
                break;
            case "UPDATE_ROLE":
                updateRole()
                break;
            case "QUIT":
                
                break;    
            default:
            // quit();     
          }
    })      
};

// view all departments
function viewDepartments() {
    const sql = `SELECT * FROM department;`;
        db.query(sql, (err, rows) => {
            if (err) {
                console.log(err.message);
                return;
            } else {
                console.table(rows);
            }
            promptMenu();
        });
    }

// Exit the application 
// function quit() {
//     console.log("Thank you for using the employee tracker, goodbye!");
//     process.exit();
//   }
