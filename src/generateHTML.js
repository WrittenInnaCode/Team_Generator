
const generateHTML = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
  <link rel="stylesheet" href="style.css">
  <title>Team Generator</title>
</head>

<body>
  <header class="continer-fluid text-center p-5 bg-danger text-white">
    <h1>My Team</h1>
  </header>

  <main class="container p-5">
    <section class="row d-flex justify-content-center">
      ${generateTeam(team)}
    </section>

  </main>

</body>

</html>
    `;
};


const generateTeam = team => {
    let html = '';

    team.managers.forEach(function (manager) {
        html += `
    <article class="col-md-4">
    <div id="card">
      <div class="card bg-light">
        <div class="card-header p-2 bg-primary text-white">
          <h4>${manager.getName()}</h4>
          <h5><i class="fas fa-mug-hot"></i> Manager</h5>
        </div>
        <div class="card bg-light m-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
    </div>
  </article>
        `;
    });

    team.engineers.forEach(function (engineer) {
        html += `
    <article class="col-md-4">
        <div id="card">
          <div class="card bg-light">
            <div class="card-header p-2 bg-primary text-white">
              <h4>${engineer.getName()}</h4>
              <h5><i class="fas fa-glasses"></i> Engineer</h5>
            </div>
            <div class="card bg-light m-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}/">${engineer.getGitHub()}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    `;
    });


    team.interns.forEach(function (intern) {
        html += `
    <article class="col-md-4">
        <div id="card">
          <div class="card bg-light">
            <div class="card-header p-2 bg-primary text-white">
              <h4>${intern.getName()}</h4>
              <h5><i class="fas fa-user-graduate"></i> Intern</h5>
            </div>
            <div class="card bg-light m-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
    `;
    });

    return html;
}


module.exports = generateHTML;