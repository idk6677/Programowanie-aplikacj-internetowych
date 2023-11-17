/*
console.log('Witaj Świecie')
console.warn('Teraz zwróć uwagę')
console.error('To jest bardzo poważny Błąd!!!!')
let tabela={imie:"Tomasz",nazwisko:"Nowak",wiek:"23"}
tabela = [12,5,33,45,123,'rower',null,'end'];
console.table(tabela)
console.group('pojedyncza')
console.log('Witaj w grupie')
console.warn('Teraz zwróć uwagę, że jesteś zgrupowany')
console.error('To jest bardzo poważny Błąd, ale w grupie damy radę')
console.groupEnd()


let imie = "Jan";
let nazwisko = "Kowalski";
const wiek = 30;

var zawod = "programista";

//wiek = 31;

console.log(imie);
console.log(nazwisko);

imie = "Tomasz";

console.log(imie);

const firstName = "Jan";
const lastName = 'Kowalski';


const bookTitle = "\"Władca Pierścieni\"";

console.log(bookTitle);

const multiline = "Linijka pierwsza\nLinijika druga";
const multiline2 = `Tytuł książki to: ${bookTitle}`;

console.log(multiline2);


const number = 20;
const price = 20.5;

// Infinity => 1.797693134862315E+308
// -Infinity => -1.797693134862316E+308
// NaN

console.log ('Stała number = ' + number)
console.log('Typ zmiennej number to:' + typeof number)

let maksymalnaLiczba = Number.MAX_VALUE;
console.log(maksymalnaLiczba);
maksymalnaLiczba = maksymalnaLiczba + 10e1000;
console.log(maksymalnaLiczba);


let firstName;

const elem = document.querySelector(".section-1");

console.log(firstName);
console.log(elem);
*/

const isLoggedIn = false;

if(isLoggedIn) {
    console.log("Zalogowano");
} else {
    console.log("Nie zalogowano");
}

// Wartości fałszywe
// false, 0, "", null, undefined, NaN

const value = "";

if(value) {
    console.log("Ta wartość nie jest fałszywa");
}