function Klient(naziwsko_k, imie_k, zawod_k){
    this.nazwisko = naziwsko_k
    this.imie = imie_k
    this.zawod = zawod_k
    this.wypisz = function (){
        alert(this.nazwisko + " " + this.imie);
    }
    this.info = function (){
        wynik.innerHTML = `Mama na imię ${this.imie}. Mój zawód to ${this.zawod} <br>`
    }
}

function Zwierze(imie_z, gatunek_z, wlasciciel_z){
    this.imie = imie_z
    this.gatunek = gatunek_z
    this.wlasciciel = wlasciciel_z

    this.info1 = function (){
        wynik.innerHTML = `To jest ${this.imie}, gatunek to ${this.gatunek}, właścicielem jest ${this.wlasciciel.imie} ${this.wlasciciel.nazwisko} <br>`;

    }
}

let osoba1 = new Klient('Nowacki', 'Marek', 'strażak')
let osoba2 = new Klient('Dąbrowska', 'Maja', 'kelnerka')
let kot1 = new Zwierze('Łatka', 'Kot', osoba2)

osoba1.wypisz;
osoba2.info;
kot1.info1();
