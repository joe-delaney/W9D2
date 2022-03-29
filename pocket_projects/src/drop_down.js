
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let dogArray = [];
  for(let type in dogs) {
    let a = document.createElement('a');
    a.innerHTML = type;
    a.href = dogs[type];
    let li = document.createElement('li');
    li.classList.add("dog-link");
    li.appendChild(a);
    dogArray.push(li);
  }
  return dogArray;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  let ul = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach((dogLink) => {
    ul.appendChild(dogLink);
  });
}

function handleEnter(e) {
  let nav = e.target;
  let children = Array.from(nav.children);
  children.forEach(ele => {
    if (ele.tagName === "UL"){
      Array.from(ele.children).forEach(li => {
        li.classList.remove("dog-link");
      });
    }
  });

}

function handleLeave(e) {
  let nav = e.target;
  let children = Array.from(nav.children);
  children.forEach(ele => {
    if (ele.tagName === "UL") {
      Array.from(ele.children).forEach(li => {
        li.classList.add("dog-link");
      });
    }
  });
}

let nav = document.querySelector(".drop-down-dog-nav");
nav.addEventListener("mouseenter", handleEnter);
nav.addEventListener("mouseleave", handleLeave);
attachDogLinks();

