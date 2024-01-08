const liczba = document.querySelector('#l')
const potega = document.querySelector('#p')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let l = parseInt(liczba.value)
    let p = parseInt(potega.value)

    function potegowanie(l, p){

        let wynik = 1;

        for(let i = 1; i <= p; i++){
            wynik = wynik * l;
        }
        return wynik;
    }

    wynik.innerHTML = `x = ${l} <br>
                        y = ${p} <br>
                        x <sup>y</sup> = ${l} <sup>${p}</sup> = ${potegowanie(l, p)}`;
})