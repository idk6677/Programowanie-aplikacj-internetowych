const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    function wspolny_dzielnik(a, b){

        while (a !== b){
            if(a > b)
                a = a - b;
            else
                b = b - a;
        }
        return b;
    }

        wynik.innerHTML = `Wspólnym dzielnikiem ${a} i ${b} jest ${wspolny_dzielnik(a, b)}`;

})