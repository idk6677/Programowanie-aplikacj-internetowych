const minimalna = document.querySelector('#min');
const maksymalna = document.querySelector('#max');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let min = parseInt(minimalna.value);
    let max = parseInt(maksymalna.value);

    let p1 = Math.floor(Math.random() * (max - min + 1) + min);
    let p2 = Math.floor(Math.random() * (max - min + 1) + min);
    let p3 = Math.floor(Math.random() * (max - min + 1) + min);
    let p4 = Math.floor(Math.random() * (max - min + 1) + min);
    let p5 = Math.floor(Math.random() * (max - min + 1) + min);

    let suma = p1 + p2 + p3 + p4 + p5;
    let iloczyn = p1 * p2 * p3 * p4 * p5;
    let srednia = (p1 + p2 + p3 + p4 + p5) / 5;

    wynik.innerHTML = `Wylosowane liczby: ${p1} <br> ${p2} <br>`
})