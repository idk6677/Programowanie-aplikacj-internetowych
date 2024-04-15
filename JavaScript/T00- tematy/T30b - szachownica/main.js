const btn = document.querySelector('button');
const size = document.querySelector('#s');
let container_div = document.querySelector('#container');

btn.addEventListener('click', function (){

    let s = parseInt(size.value);
    container_div.innerHTML = '';

    for(let i = 0; i < s; i++){
        let row = document.createElement('div');
        row.style.display = 'flex';
        row.style.width = '100%';
        container_div.appendChild(row);


        for(let j = 0; j < s; j++){
            let pole = document.createElement('div');
            pole.style.width = 'calc(100% / ' + s + ')';
            pole.style.paddingBottom = 'calc(100% / ' + s + ')';
            pole.style.backgroundColor = (i + j) % 2 === 0 ? 'black' : 'white';
            row.appendChild(pole);
        }
    }

})