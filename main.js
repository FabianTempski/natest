const divs = document.getElementsByClassName('dodaj');
const koszyk = document.getElementById("k");
let ogolnaCena = 0;
let item = 0;

for(let i=0;i<divs.length; i++) {
  divs[i].addEventListener('click', dodajDoKoszyka);
}

function dodajDoKoszyka(){
    let cena = parseFloat(this.value) + ogolnaCena;
  item++
  koszyk.innerHTML = `${cena} Z ${item}`;
  ogolnaCena += parseFloat(this.value);
}