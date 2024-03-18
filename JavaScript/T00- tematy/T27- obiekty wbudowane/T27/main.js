const ilosc = document.querySelector('#n');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){

    let n = parseInt(ilosc.value);

    const tab = [];

    for (let i = 0; i < n; i++)
        tab.push(Math.floor(Math.random() * 2));

    let max = tab[0]

    for(let i = 0; i < n; i++)
        if(tab[i] > max)
            max = tab[i];

    wynik.innerHTML = `Tablica: [${tab}] <br> Wartość maksymalna: ${max}`;
})