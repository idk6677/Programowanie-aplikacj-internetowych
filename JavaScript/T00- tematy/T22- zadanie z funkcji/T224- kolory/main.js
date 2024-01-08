const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    function kolor(a, b){

        if (a > b){
            return `<span id="wieksza">${a}</span> > <span id="mniejsza">${b}</span>`
        }
        if (a < b){
            return `<span id="mniejsza">${a}</span> < <span id="wieksza">${b}</span>`
        }
        if (a === b){
            return `<span id="rowna">${a}</span> = <span id="rowna">${b}</span>`
        }

    }

    wynik.innerHTML = `${kolor(a, b)}`;

})