const imie = document.querySelector('#i').value.toLowerCase()
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let plec;

    if(imie.endsWith("a") && imie !== "kuba" && imie !== "barnaba")
        plec = `Kobieta`;
    else
        plec = `Mężczyzna`

    wynik.innerHTML = `${plec}`;

})