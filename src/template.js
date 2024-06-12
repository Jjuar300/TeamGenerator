const { engineers, interns, managers } = require("../index");

function createManager(manager) {
  return `
     <div class="item">
        <div class="top-section">
          <h1>${manager.getName()}</h1>
          <h2><i class="fa-solid fa-mug-hot"></i> Manager</h2>
        </div>
        <div class="lower">
          <div class="center">
            <p>ID: ${manager.getId()}</p>
            <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p>Office number: ${manager.getOfficeNumber()}</p>
          </div>
        </div>
      </div>
    `;
}

function createEngineer(engineer) {
  return `
     <div class="item">
        <div class="top-section">
          <h1>${engineer.getName()}</h1>
          <h2><i class="fa-solid fa-glasses"></i> Engineer</h2>
        </div>
        <div class="lower">
          <div class="center">
            <p>ID: ${engineer.getId()}</p>
            <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p>GitHub: <a href="http://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></p>
          </div>
        </div>
      </div>
    `;
}

function createInter(intern) {
  return `
     <div class="item">
        <div class="top-section">
          <h1>${intern.getName()}</h1>
          <h2><i class="fa-solid fa-graduation-cap"></i> Intern</h2>
        </div>
        <div class="lower">
          <div class="center">
            <p>ID: ${intern.getId()}</p>
            <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
            <p>School: ${intern.getSchool()}</p>
          </div>
        </div>
      </div>
    `;
}

function generateHtml(...items) {
  return `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Generator</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="./css/index.css" />
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>

    <main>
      ${items}
    </main>
  </body>
</html>

      `;
}

function getName(name) {
  return name;
}

function getId(id) {
  return id;
}

function getEmail(email) {
  return email;
}

function getGitHub(gitLink) {
  return gitLink;
}

function getOfficeNumber(officeNumber) {
  return officeNumber;
}

function getSchool(school) {
  return school;
}

function getEngineer(engineer) {
  engineer.map((data) => {
    getName(data.name);
    getId(data.id);
    getEmail(data.email);
    getGitHub(data.github);
  });
}

function getManager(manager) {
  manager.map((data) => {
    getName(data.name);
    getId(data.id);
    getEmail(data.email);
    getOfficeNumber(data.officeNumber);
  });
}

function getIntern(intern) {
  intern.map((data) => {
    getName(data.name);
    getId(data.id);
    getEmail(data.email);
    getSchool(data.school)
  });
}

const engineer = getEngineer(engineers);
const manager = getManager(managers);
const intern = getIntern(interns); 

const newManager = createManager(manager); 
const newEngineer = createEngineer(engineer); 
const newIntern = createInter(intern); 

const newHtml = generateHtml(newEngineer, newIntern, newManager); 

document.querySelector('main').innerHTML = newHtml; 