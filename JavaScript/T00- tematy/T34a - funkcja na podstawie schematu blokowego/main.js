const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){

    a = parseInt(liczba_a.value)
    b = parseInt(liczba_b.value)

    function algorytm(a, b){

        while (a !== b){
            if (a > b)
                a = a - b;
            else
                b = b - a;
        }
        return a;
    }

    wynik.innerHTML = `${algorytm(a, b)}`;

})