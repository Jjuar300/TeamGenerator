const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const { Engineer, Intern, Manager } = require("./lib/index");

const engineers = []; 
const interns = []; 
const managers = []; 

prompt([
  {
    message: "Enter Mangers name",
    name: "name",
    type: "input",
  },
  {
    type: "input",
    message: "Enter Managers id",
    name: "id",
  },
  {
    type: "input",
    message: "Enter Managers email",
    name: "email",
  },

  {
    type: "input",
    message: "Enter office number",
    name: "officeNumber",
  },
]).then((asnwers) => {
  
  const manager = new Manager(
    asnwers.name, 
    asnwers.id, 
    asnwers.email, 
    asnwers.officeNumber, 
  )
  
  managers.push(manager)
  showMenu();
});

function showMenu() {
  prompt([
    {
      type: "list",
      name: "action",
      message: "Select action",
      choices: ["add an engineer", "add an intern", "finish building team"],
    },
  ]).then((asnwers) => {

    if (asnwers.action === "add an engineer") {
      showEngineer();
    } else if (asnwers.action === "add an intern") {
      showIntern();
    } else {
      
    }
  });
}

function showEngineer() {
  prompt([
    {
      message: "Enter Engineers name",
      name: "name",
      type: "input",
    },
    {
      type: "input",
      message: "Enter Engineers id",
      name: "id",
    },
    {
      type: "input",
      message: "Enter Engineers email",
      name: "email",
    },

    {
      type: "input",
      message: "Enter Engineers Github username",
      name: "githubUsername",
    },
  ]).then((asnwers) => {
    const engineer = new Engineer(
      asnwers.name,
      asnwers.id,
      asnwers.email,
      asnwers.githubUsername
    );
    engineers.push(engineer)
    showMenu();
  });
}

function showIntern() {
  prompt([
    {
      message: "Enter Intern name",
      name: "name",
      type: "input",
    },
    {
      type: "input",
      message: "Enter Intern id",
      name: "id",
    },
    {
      type: "input",
      message: "Enter Intern email",
      name: "email",
    },

    {
      type: "input",
      message: "Enter Intern  school name",
      name: "school",
    },
  ]).then((asnwers) => {
    const intern = new Intern(
      asnwers.name, 
      asnwers.id, 
      asnwers.email, 
      asnwers.school, 
    )
    interns.push(intern)
    showMenu();
  });
}

module.exports = {
  engineers,
  interns,  
  managers, 
}