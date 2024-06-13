const fs = require('fs'); 
const path = require('path'); 

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

function generateHtml(manager, engineers, interns) {
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
      ${manager}
      ${engineers}
      ${interns}
    </main>
  </body>
</html>

      `;
}

function makeManager(managers) {
  return managers.map((manager) => {
     return createManager(manager)
  });  
}

function makeEngineers(engineers) {
 return engineers.map((engineer) => {
    return createEngineer(engineer)
  });
}

function makeIntern(interns) {
  return interns.map((intern) => {
   return createInter(intern); 
  });
}

function buildTeam(managers, engineers, interns){
  const managerHtml = makeManager(managers);
  const engineerHtml = makeEngineers(engineers); 
  const internHtml = makeIntern(interns);  
  const newHtml = generateHtml(managerHtml, engineerHtml, internHtml);  
  fs.writeFileSync( path.resolve( __dirname, '../dist/index.html'), newHtml); 
}

module.exports = buildTeam; 