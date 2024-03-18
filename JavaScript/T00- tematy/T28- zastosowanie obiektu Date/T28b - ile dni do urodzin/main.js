const data_urodzin = document.querySelector('#u')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let data_u = data_urodzin.value
    function ile(data_u){

        const dzis = new Date();
        const urodziny = new Date(data_u);

        urodziny.setFullYear(dzis.getFullYear());

        if(urodziny < dzis)
            urodziny.setFullYear(dzis.getFullYear() + 1);

        let roznica = urodziny.getTime() - dzis.getTime();
        let ile_d = Math.ceil(roznica / (1000 * 60 * 60 * 24));

        return ile_d;
    }

    wynik.innerHTML = `Do twoich urodzin zostało: ${ile(data_u)} dni`;

})

