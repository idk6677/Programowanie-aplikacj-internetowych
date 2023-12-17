const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    function kolor(a, b){

        if (a > b){
            return `${a} > ${b} <style> #a {color: red;} #b {color: green;}</style>`
        }
        if (a < b){
            return `${a} > ${b} <style> #a {color: green;} #b {color: red;}</style>`
        }
        if (a === b){
            return `${a} > ${b} <style> #a {color: blue;} #b {color: blue;}</style>`
        }

    }

    wynik.innerHTML = `${kolor(a, b)}`;

})