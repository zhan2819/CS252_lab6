// DOM elements
const tipList = document.querySelector('.tips');

// setup guides
const setupTips = (data) => {

  if (data.length) {
    let html = '';
    const lab = `
    <a href="../lab1.html" class="waves-effect waves-light btn-small red darken-1">Lab 01: Malloc</a>
    <a href="../lab2.html" class="waves-effect waves-light btn-small red darken-1">Lab 02: Bashg</a>
    <a href="../lab3.html" class="waves-effect waves-light btn-small red darken-1">Lab 03: Shell</a>
    <a href="../lab4.html" class="waves-effect waves-light btn-small red darken-1">Lab 04: Threads</a>
    <a href="../lab5.html" class="waves-effect waves-light btn-small red darken-1">Lab 05: Web Server</a>
    <a href="../lab6.html" class="waves-effect waves-light btn-small red darken-1">Lab 06: Web App</a>
    `; 
    html += lab;
    data.forEach(doc => {
      const tip = doc.data();
      const li = `
        <li>
          <div class="collapsible-header red lighten-2"> Lab ${tip.lab} - ${tip.topic} </div>
          <div class="collapsible-body white"> ${tip.content} </div>
        </li>
      `;
      html += li;
    });
    tipList.innerHTML = html
  } else {
    let html = '';
    const li = `
        
  <div class="row">
    <div class="col s12 m12">
      <div class="card large">
        <div class="card-image">
          <img src="../logo/grr.jpg">
          <span class="card-title"></span>
        </div>
        <div class="card-content">
          <p>A place to upload your study tip for CS252 labs! Log in to view and post tips.</p>
        </div>
        <div class="card-action">
          <a href="https://www.cs.purdue.edu/homes/cs252/">Course Page</a>
        </div>
      </div>
    </div>
  </div>
      
    `;
    html += li;
    tipList.innerHTML = html;
  }
  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

$(document).ready(function(){
  $('select').formSelect();
})