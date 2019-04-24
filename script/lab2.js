// DOM elements
const tipList = document.querySelector('.tips');

db.collection('tips').where('lab','==','2').get().then((snapshot) => {
    let html = '';
    if (snapshot.length) {
    snapshot.docs.forEach(doc => {
        const tip = doc.data();
      const li = `
        <li>
          <div class="collapsible-header orange lighten-4"> ${tip.topic} </div>
          <div class="collapsible-body white"> ${tip.content} </div>
        </li>
      `;
      html += li;
    })
    tipList.innerHTML = html
    console.log(snapshot.docs);
    }else{
        let html = '';
        const li = `
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">;(</span>
              <h5>No one has posted tips about lab2</h5>
            </div>
          </div>
        </div>
      </div>
        `;
        html += li;
        tipList.innerHTML = html;
    }
})



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