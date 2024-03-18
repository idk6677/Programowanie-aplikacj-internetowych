const dzis = new Date();
function data(dzis){
    let d = String(dzis.getDate().padStart(2, '0'));
    let m = String(dzis.getMonth() + 1).padStart(2, '0');
    let r = dzis.getFullYear();

    return `${r} ${m} ${d}`;
}

function rzymska(dzis){

    const m = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

    let d = dzis.getDate();

}