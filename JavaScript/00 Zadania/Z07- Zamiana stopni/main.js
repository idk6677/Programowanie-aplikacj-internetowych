const celsjusz = document.querySelector('#c');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let c = parseFloat(celsjusz.value)

    let k = c + 273.15;
    let f = (c * 9 / 5) + 32;

    wynik.innerHTML = `T <sub> Celsjusz </sub> = ${c} <br>
                        T <sub> Kelvin </sub> = ${k.toFixed(2)} <br>
                        T <sub> Fahrenheit </sub> = ${f.toFixed(2)}`;
})