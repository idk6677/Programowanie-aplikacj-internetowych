const rok = document.querySelector('#r')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let r = parseInt(rok.value)

    if (r % 4 === 0 && r % 100 !== 0 || r % 400 === 0){
        wynik.innerHTML = `Rok ${r} jest przestępny`
    }
    else{
        wynik.innerHTML = `Rok ${r} nie jest przestępny`
    }
})