const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    const k = 3;
    const w = 3;
    const tab = [];
    let p = "";

    for(let i = 0; i < w; i++)
        tab[i] = [];

    function wypelnij(tab){
        for (let j = 0; j < w; j++){
            for (let i = 0; i < k; i++){
                tab[i][j] =  Math.floor(Math.random() * 10);
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

    function oblicz(tab){
        let w;
        let LG_PD = tab[0][0] + tab[1][1] + tab[2][2];
        let LD_PG = tab[0][2] + tab[1][1] + tab[2][0]

        if(LG_PD > LD_PG)
            w = `LG_PD > LD_PG`;
        else if(LD_PG > LG_PD)
            w = `LD_PG > LG_PD`;
        else
            w = `LD_PG = LG_PD`

        return `LG_PD = ${LG_PD} <br>
                LD_PG = ${LD_PG} <br>
                ${w}`;
    }


    wypelnij(tab);

    wynik.innerHTML = `${wyswietl(tab, p)} <br> 
                       ${oblicz(tab)}` ;
})