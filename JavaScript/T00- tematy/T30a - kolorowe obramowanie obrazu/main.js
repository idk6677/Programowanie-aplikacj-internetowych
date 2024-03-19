let container_div = document.querySelector('.container')
let btn = document.querySelector('button')
let img = document.querySelector('img')
btn.addEventListener('click', function (){

    color = document.querySelector('#color')
    width = document.querySelector('#suwak')

    img.style.borderColor = color;
    img.style.borderWidth = width;

})