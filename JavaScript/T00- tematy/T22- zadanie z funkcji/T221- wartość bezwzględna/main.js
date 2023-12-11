const liczba = document.querySelector('#l')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let l = parseInt(liczba.value)
    function wartosc_bezwzgledna1(l) {
        if (l > 0)
            return l;
        else
            return l * (-1);
    }
    function wartosc_bezwzgledna2(l) {
        l = (l > 0)? l:(l * (-1));
        return l;
    }

    wynik.innerHTML = `wariant 1: ${wartosc_bezwzgledna1(l)} <br>
                    wariant 2: ${wartosc_bezwzgledna2(l)}`
});
