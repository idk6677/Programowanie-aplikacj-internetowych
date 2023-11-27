const liczba = document.querySelector('#a');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let a = parseInt(liczba.value);

    if (a < 10 || a > 100){
        wynik.innerHTML = `Liczba a = ${a} <br> Liczba nie jest dwucyfrowa`
    }

    if (a > 10 && a < 99){
        if (a % 2 === 0){
            wynik.innerHTML = `Liczba a = ${a} <br> Liczba jest dwucyfrowa i parzysta <br>`
        }
        else{
            wynik.innerHTML = `Liczba a = ${a} <br> Liczba jest dwucyfrowa i nieparzysta <br>`
        }
    }




})