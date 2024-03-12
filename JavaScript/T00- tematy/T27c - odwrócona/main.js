const btn = document.querySelector('button');

btn.addEventListener('click', function (){

    const tab = [];
    let p = "";

    function wypelnij(tab){
        for (let i = 0; i < 4; i++){
            let w = [];
            for (let j = 0; j < 4; j++){
                w.push(Math.floor(Math.random() * 2));
            }
            tab.push(w)
        }
        return tab;
    }

    function wyswietl(tab, p){

        for (let i = 0; i < 4; i++){
            for (let j = 0; j < 4; j++){
                p += `<span id="l">${tab[i][j]}</span>`;
            }
            p += '<br>';
        }
        return p;
    }

    function policz(tab){
        let max_suma = 0;
        let max_i = [];

        for (let i = 0; i < 4; i++) {
            let suma = tab[i].reduce((acc, val) => acc + val, 0);
            if (suma > max_suma) {
                max_suma = suma;
                max_i = [i]
            }
             else if (suma === max_suma) {
                max_i.push(i);
            }
        }
        return max_i;
    }

    function odwroc(tab){
        let odwrocona = [];

        for (let i = 0; i < tab.length; i++) {
            let w = [];
            for (let j = tab.length - 1; j >= 0; j--)
                w.push(tab[j][i]);
            odwrocona.push(w);
        }
        return odwrocona;
    }

    wypelnij(tab);

    wynik.innerHTML = `Tablica przed odwróceniem: <br> <br> ${wyswietl(tab, p)} <br> 
    Suma liczb jest największa w wierszu/wierszach: ${policz(tab).map(index => index + 1)} <br> <br>
    Tablica po odwróceniu: <br> <br> ${wyswietl(odwroc(tab), p)}`;

})