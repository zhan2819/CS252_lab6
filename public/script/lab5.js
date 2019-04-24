// DOM elements
const tipList = document.querySelector('.tips');

db.collection('tips').where('lab','==','5').get().then((snapshot) => {
    let html = '';
    const lab = `
    <a class="waves-effect waves-light btn grey darken-2"><i class="material-icons left">collections_bookmark</i>Lab05 Tips</a>
    <br></br>
    `; 
    html += lab; 
    snapshot.docs.forEach(doc => {
        const tip = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${tip.topic} </div>
          <div class="collapsible-body white"> ${tip.content} </div>
        </li>
      `;
      html += li;
    })
    tipList.innerHTML = html
    console.log(snapshot.docs);
    
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