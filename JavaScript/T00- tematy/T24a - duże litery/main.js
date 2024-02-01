const name = document.querySelector('#n')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let n = name.value.toLowerCase()

    let imie = n.slice(0, n.indexOf(" "))
    let nazwisko = n.slice(n.indexOf(" "), n.length)

    wynik.innerHTML = `Twoje imię to: ${imie.charAt(0).toUpperCase() + imie.substr(1)},
    a nazwisko: ${nazwisko.charAt(1).toUpperCase() + nazwisko.substr(2)}`

})