const dzien = document.querySelector('#d')
const btn = document.querySelector('button')
btn.addEventListener('click', function (){

    let d = dzien.value.toLowerCase()

    function ang(d){

        switch (d){
            case `poniedziałek`:
                return `Monday`
            case `wtorek`:
                return `Tuesday`
            case `środa`:
                return `Wednesday`
            case `czwartek`:
                return `Thursday`
            case `piątek`:
                return `Friday`
            case `sobota`:
                return `Saturday`
            case `niedziela`:
                return `Sunday`
            case `monday`:
                return `Poniedziałek`
            case `tuesday`:
                return `Wtorek`
            case `wednesday`:
                return `Środa`
            case `thursday`:
                return `Czwartek`
            case `friday`:
                return `Piątek`
            case `saturday`:
                return `Sobota`
            case `sunday`:
                return `Niedziela`
        }

    }

    wynik.innerHTML = `${d.charAt(0).toUpperCase() + d.substr(1)} = ${ang(d)}`

})