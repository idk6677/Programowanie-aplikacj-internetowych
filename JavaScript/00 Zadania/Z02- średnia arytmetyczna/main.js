const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const liczba_c = document.querySelector('#c');
const liczba_d = document.querySelector('#d');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let c = parseFloat(liczba_c.value);
    let d = parseFloat(liczba_d.value);

    let srednia = (a + b + c + d)/4;

    wynik.innerHTML = `Średnia: ${srednia} <br>
                        Zaokrąglona średnia: ${srednia.toFixed(3)}`;
})