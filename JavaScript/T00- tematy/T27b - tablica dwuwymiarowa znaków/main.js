const btn = document.querySelector('button');

btn.addEventListener('click', function (){

    const k = 7;
    const w = 7;
    const tab = [];
    let p = "";

    for(let i = 0; i < w; i++)
        tab[i] = [];

    function wypelnij(tab){
        for (let j = 0; j < w; j++){
            for (let i = 0; i < k; i++){
                tab[i][j] = String.fromCharCode(Math.floor(Math.random() * (70 - 65) + 65)).toLowerCase();
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
        let counter = 0;

        for (let j = 0; j < w; j++){
            for (let i = 0; i < k; i++){
                if(tab[i][j] === 'a')
                    counter += 1;
            }
        }
        return counter;
    }

    function ile_b(tab){
        let counter = 0;
        let w = 0;

        for (let j = 0; j < w; j++){
            for (let i = 0; i < k; i++){
                if(tab[i][j] === 'b')
                    counter += 1;
            }
            w += 1;
        }
        return counter;
    }

    wypelnij(tab);

    wynik.innerHTML = `${wyswietl(tab, p)} <br>
                        Litera a wystąpiła ${policz(tab)} razy <br>
                        ${ile_b(tab)}`;

})