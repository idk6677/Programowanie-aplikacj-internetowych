const btn = document.querySelector('button')
const zdj = document.querySelector('#b_img')
const kolor = document.querySelector('#b_color')
const szerokosc = document.querySelector('#b_width')

btn.addEventListener('click', function (){

    let k = kolor.value;
    let sz = szerokosc.value;

    zdj.style.border = sz + "px solid" + k;

})