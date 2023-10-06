let a = prompt("Podaj a = ","");
a = parseInt(a);
let b = prompt("Podaj b = ","");
b = parseInt(b);
let c = prompt("Podaj c = ","");
c = parseInt(c);
let d = prompt("Podaj d = ","");
d = parseInt(d);

let iloczyn = a*b*c*d;
let srednia_geometryczna = Math.pow(iloczyn, 0.25);

console.log("a = "+a);
console.log("b = "+b);
console.log("c = "+c);
console.log("d = "+d);
document.write("srednia="+srednia_geometryczna)

document.write(`a = ${a} <br>`);
document.write(`b = ${b} <br>`);
document.write(`c = ${c} <br>`);
document.write(`d = ${d} <br>`);

document.write(`Średnia geometryczna bez zaokroglenia = <b> ${srednia_geometryczna}`);
document.write(`Średnia geometryczna z zaokrogleniem =<b> ${srednia_geometryczna.toFixed(3)}</b>`);