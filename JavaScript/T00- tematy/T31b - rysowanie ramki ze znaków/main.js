const szerokosc = document.querySelector('#a')
const wysokosc = document.querySelector('#b')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let a = parseInt(szerokosc.value)
    let b = parseInt(wysokosc.value)

    function rysuj (a, b){
        let ramka = ``;

        for(let i = 0; i < b; i++){
            for(let j = 0; j < a; j++){
                if (i === 0 || i === b - 1 || j === 0 || j === a - 1)
                    ramka += `|`;
                else
                    ramka += `&nbsp`;
            }
            ramka += `<br>`;
        }
        return ramka;
    }

    wynik.innerHTML = `${rysuj(a, b)}`;
})