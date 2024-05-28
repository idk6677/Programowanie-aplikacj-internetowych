const btn_i = document.querySelector('#indigo')
const btn_s = document.querySelector('#steelblue')
const btn_o = document.querySelector('#olive')
let p_b = document.querySelector('#prawy_blok')
let kolor = document.querySelector('#kolor')
let rozmiar = document.querySelector('#rozmiar')

btn_i.addEventListener('click', function (){

    p_b.style.backgroundColor = "indigo"

})
btn_s.addEventListener('click', function (){

    p_b.style.backgroundColor = "steelblue"

})
btn_o.addEventListener('click', function (){

    p_b.style.backgroundColor = "olive"

})

let k = kolor.value;
p_b.style.color = k;

let r = rozmiar.value;
p_b.style.fontStyle = r;
