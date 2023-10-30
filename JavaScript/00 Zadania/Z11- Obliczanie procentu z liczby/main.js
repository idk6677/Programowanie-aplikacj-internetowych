const wartosc = document.querySelector('#w');
const procent = document.querySelector('#p');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let w = parseInt(wartosc.value);
    let p = parseInt(procent.value);

    let result = w * p / 100;

    wynik.innerHTML = `${p}% z ${w} to ${result}`;
})