// DOM elements
const tipList = document.querySelector('.tips');

db.collection('tips').where('lab','==','3').get().then((snapshot) => {
    let html = '';
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