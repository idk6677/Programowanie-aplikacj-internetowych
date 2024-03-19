let container_div = document.querySelector('.container')

let new_h1 = document.createElement('h1')
new_h1.textContent = "Zadanie T29 - Obiekty DOM";

container_div.appendChild(new_h1);
new_h1.style.color = "red";

let new_h2 = document.createElement('h2');
new_h2.textContent = "Autor: Kaja Biczkowska 2p";

container_div.appendChild(new_h2);