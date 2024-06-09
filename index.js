const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const {
  Employee, 
  Engineer, 
  Inter, 
  Manager, 
} = require('./lib/index')

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
  console.log(asnwers);
  showMenu()
})

function showMenu() {
  prompt([
    {
      type: "list",
      name: "action",
      message: "Select action",
      choices: ["add an engineer", "add an intern", "finish building team"],
    },
  ])
  .then((asnwers) => {
     console.log(asnwers)

     if(asnwers.action === 'add an engineer'){
        showEngineer()
     }else if(asnwers.action === 'add an intern'){
         showIntern();  
     }else{
        
     }
     
  })
}


function showEngineer(){
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
    ])
    .then(() => {
        showMenu(); 
    })
}

function showIntern(){
    prompt([
        {
            message: "Enter Inters name",
            name: "name",
            type: "input",
          },
          {
            type: "input",
            message: "Enter Inters id",
            name: "id",
          },
          {
            type: "input",
            message: "Enter Inters email",
            name: "email",
          },
        
          {
            type: "input",
            message: "Enter Inters Github username",
            name: "githubUsername",
          },
    ])
    .then(() => {
        showMenu(); 
    })
}