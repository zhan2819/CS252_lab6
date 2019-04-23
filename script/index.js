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
          <div class="collapsible-header grey lighten-4"> ${tip.topic} </div>
          <div class="collapsible-body white"> ${tip.content} </div>
        </li>
      `;
      html += li;
    });
    tipList.innerHTML = html
  } else {
    tipList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }
  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});