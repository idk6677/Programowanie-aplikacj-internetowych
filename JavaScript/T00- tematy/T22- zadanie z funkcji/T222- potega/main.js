const liczba = document.querySelector('#l')
const potega = document.querySelector('#p')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let l = parseInt(liczba.value)
    let p = parseInt(potega.value)

    function potegowanie(l, p){

        return Math.pow(l, p);
    }

    wynik.innerHTML = `x = ${l} <br>
                        y = ${p} <br>
                        x <sup>y</sup> = ${l} <sup>${p}</sup> = ${potegowanie(l, p)}`;
})