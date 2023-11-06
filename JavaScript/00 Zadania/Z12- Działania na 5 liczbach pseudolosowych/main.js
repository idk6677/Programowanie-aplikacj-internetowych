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

    wynik.innerHTML = `Wylosowane liczby: <br> p1 = ${p1} <br> p2 = ${p2} <br> p3 = ${p3} <br> p4 = ${p4} <br> p5 = ${p5} <br>
                        Suma liczb: ${p1} + ${p2} + ${p3} + ${p4} + ${p5} = ${suma} <br>
                        Iloczyn liczb: ${p1} * ${p2} * ${p3} * ${p4} * ${p5} = ${iloczyn} <br>
                        Średnia liczb: ${srednia}`
})