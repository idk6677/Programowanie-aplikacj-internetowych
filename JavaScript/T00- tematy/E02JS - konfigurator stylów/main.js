const btn_i = document.querySelector('#indigo')
const btn_s = document.querySelector('#steelblue')
const btn_o = document.querySelector('#olive')
let p_b = document.querySelector('#prawy_blok')
let kolor = document.querySelector('#kolor')
let p_p = document.querySelector('#prawy_p')
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
function kolor_czcionki(){
    p_p.style.color = kolor.value;
}
function rozmiar_czcionki(){
    p_p.style.fontSize = rozmiar.value;
}
