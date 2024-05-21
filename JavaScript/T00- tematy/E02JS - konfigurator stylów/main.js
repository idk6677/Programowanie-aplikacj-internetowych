const btn_i = document.querySelector('#indigo')
const btn_s = document.querySelector('#steelblue')
const btn_o = document.querySelector('#olive')
let p_b = document.querySelector('#prawy_blok')

btn_i.addEventListener('click', function (){

    let new_bg = document.createElement('div')
    new_bg.style.backgroundColor = 'indigo';
    p_b.appendChild(new_bg);

})