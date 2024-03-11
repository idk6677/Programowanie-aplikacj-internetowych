const btn = document.querySelector('button');

btn.addEventListener('click', function (){

    const k = 4;
    const w = 4;
    const tab = [];
    let p = "";

    for(let i = 0; i < w; i++)
        tab[i] = [];

    function wypelnij(tab){
        for (let j = 0; j < w; j++){
            for (let i = 0; i < k; i++){
                tab[i][j] = Math.floor(Math.random() * 2);
            }
        }
    }

    function wyswietl(tab, p){
        for (let j = 0; j < w; j++){
            for (let i = 0; i < k; i++){
                p += `<span id="l">${tab[i][j]}</span>`;
            }
            p += '<br>';
        }
        return p;
    }

    function policz(tab){
        let max_s = 4;
        let max_i = 3;

        for(let i = 0; i < w; i++){
            let suma = tab[i].reduce((acc, curr) => acc + curr, 0);
            if(suma > max_s){
                max_s = suma;
                max_i = i;
            }
        }
        return max_i;
    }

    function odwroc(tab){


    }


    wypelnij(tab);

    wynik.innerHTML = `Tablica przed odwróecniem: <br> ${wyswietl(tab, p)} <br> Suma liczb jest największa w wierszu/wierszach: ${policz(tab)}`;

})