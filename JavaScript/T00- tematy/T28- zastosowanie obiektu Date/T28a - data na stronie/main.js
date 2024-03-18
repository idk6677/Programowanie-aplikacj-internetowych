function domyslna(){
    const dzis = new Date();
    let d = String(dzis.getDate()).padStart(2, '0');
    let m = String(dzis.getMonth() + 1).padStart(2, '0');
    let r = dzis.getFullYear();

    return `${d}.${m}.${r}`;
}

function rzymska(){
    const dzis = new Date();
    const miesiac = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

    let d = dzis.getDate();
    let m = miesiac[dzis.getMonth()];
    let r = dzis.getFullYear();

    return `${d}.${m}.${r}`;
}

function polska(){
    const dzis = new Date();
    const miesiac = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "pażdziernik", "litopad", "grudzień"];

    let d = dzis.getDate();
    let m = miesiac[dzis.getMonth()];
    let r = dzis.getFullYear();

    return `${d} ${m} ${r}`;
}

wynik.innerHTML = `${domyslna()} <br> ${rzymska()} <br> ${polska()}`;