const matma = document.querySelector('#m')
const polski = document.querySelector('#p')
const ang = document.querySelector('#a')
const fizyka = document.querySelector('#f')
const inf = document.querySelector('#i')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let m = parseFloat(matma.value)
    let p = parseFloat(polski.value)
    let a = parseFloat(ang.value)
    let f = parseFloat(fizyka.value)
    let i = parseFloat(inf.value)
    function oblicz(m,p,a,f,i){

        if ((m + p + a + f + i)/5 > 4)
            return `Przyjęty`
        else
            return `Nie przyjęty`

    }

    srednia = (m + p + a + f + i)/5;

    wynik.innerHTML = `srednia = ${srednia}, ${oblicz(m,p,a,f,i)}`;

})
