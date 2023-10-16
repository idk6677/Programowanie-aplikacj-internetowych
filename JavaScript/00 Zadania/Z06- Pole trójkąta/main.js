const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const liczba_c = document.querySelector('#c');
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);
    let c = parseInt(liczba_c.value);

    let p = (a + b + c) / 2;
    let s = p * (p - a) * (p - b) * (p - c);
})