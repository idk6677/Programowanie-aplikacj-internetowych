const a = document.querySelector(`#dzielna`);
const b = document.querySelector(`#dzielnik`);
const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector(`button`);

btn.addEventListener('click', function() {
    let liczba_a = parseFloat(a.value);
    let liczba_b = parseFloat(b.value);

    console.log(liczba_a);
    console.log(liczba_b);

    let iloraz = liczba_a/liczba_b;
    // wynik.innerHTML = 'Iloraz liczb wynosi: '+iloraz;
    wynik.innerHTML = `Iloraz liczb dla dzielnej równej ${liczba_a} i dzielnika równego ${liczba_b} wynosi ${iloraz.toFixed(2)}`


})