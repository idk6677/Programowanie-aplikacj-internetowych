const imie = document.querySelector('#i')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let i = imie.value.toLowerCase()
    let plec;

    if(i.endsWith("a") && i !== "kuba" && i !== "barnaba")
        plec = `Kobieta`;
    else
        plec = `Mężczyzna`

    wynik.innerHTML = `${plec}`;

})