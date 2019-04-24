// DOM elements
const tipList = document.querySelector('.tips');

// setup guides
const setupTips = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const tip = doc.data();
      const li = `
        <li>
          <div class="collapsible-header orange lighten-4"> ${tip.topic} </div>
          <div class="collapsible-body white"> ${tip.content} </div>
        </li>
      `;
      html += li;
    });
    tipList.innerHTML = html
  } else {
    let html = '';
    const li = `
        
    <div class="card">
    <div class="card-header">
    <h5 class="card-title">A place to upload your study tip for CS252!</h5>
    <p class="card-text">Log in to view and post tips.</p>
    </div>
    <div class="card-body">
    <img src="../logo/grr.jpg" class="card-img-top" alt="...">
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