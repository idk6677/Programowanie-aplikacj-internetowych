const sekundy = document.querySelector('#s');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let s = parseInt(sekundy.value)

    let h = s / 3600;
    let m = s / 60;

    wynik.innerHTML = ` ${h.toFixed(0)} g ${m.toFixed(0)} m ${s.toFixed(0)} s`;
})