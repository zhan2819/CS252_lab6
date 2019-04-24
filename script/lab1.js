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
  } 
}