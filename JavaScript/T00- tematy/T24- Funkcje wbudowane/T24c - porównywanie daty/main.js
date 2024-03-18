const nazwa1 = document.querySelector('#n1')
const nazwa2 = document.querySelector('#n2')
const urodziny1 = document.querySelector('#u1')
const urodziny2 = document.querySelector('#u2')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let n1 = nazwa1.value
    let n2 = nazwa2.value
    let u1 = new Date(urodziny1.value)
    let u2 = new Date(urodziny2.value)

    if(u1 < u2)
        wynik.innerHTML = `${n1} jest starszy od ${n2}`
    else if (u1 > u2)
        wynik.innerHTML = `${n2} jest starszy od ${n1}`
    else
        wynik.innerHTML = `${n1} i ${n2} są w równym wieku`

})