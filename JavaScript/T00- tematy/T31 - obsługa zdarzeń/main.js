const d = document.querySelector('div')

function data(){
    d.innerHTML = new Date().toLocaleDateString();
}

function text(){
    d.innerHTML = `Data już była`;
}

d.addEventListener('mouseover', data);

d.addEventListener('mouseleave', function (){
    d.innerHTML = ``;
    d.removeEventListener('mouseover', data)
    d.addEventListener('mouseover', text);
})