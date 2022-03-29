
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if(htmlElement.children.length === 0) {
    let p = document.createElement('p');
    p.innerText = string;
    htmlElement.appendChild(p);
  } else {
    let p = htmlElement.children[0];
    p.innerText = string;
  }
};

// htmlGenerator('Party Time.', partyHeader);