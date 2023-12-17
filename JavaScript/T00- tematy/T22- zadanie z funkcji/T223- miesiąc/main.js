const liczba = document.querySelector('#l')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let l = parseInt(liczba.value)

    function miesiac(l){

        if (l === 1)
            return "styczeń";
        if (l === 2)
            return "luty";
        if (l === 3)
            return "marzec";
        if (l === 4)
            return "kwiecień";
        if (l === 5)
            return "maj";
        if (l === 6)
            return "czerwiec";
        if (l === 7)
            return "lipiec";
        if (l === 8)
            return "sierpień";
        if (l === 9)
            return "wrzesień";
        if (l === 10)
            return "pażdziernik";
        if (l === 11)
            return "listopad";
        if (l === 12)
            return "grudzień";
        else
            return "nie ma takiego miesiąca"

    }

    wynik.innerHTML = `${l} = ${miesiac(l)}`

})