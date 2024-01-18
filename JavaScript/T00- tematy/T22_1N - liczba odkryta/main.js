const liczba = document.querySelector('#l')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){

    let l = parseInt(liczba.value)

    function odkryta(l){

       while (l > 0){
           if (l % 10 === 0 || l % (l % 10) !== 0)
               return false
           return true
       }
    }

    wynik.innerHTML = `${odkryta(l)}`

})