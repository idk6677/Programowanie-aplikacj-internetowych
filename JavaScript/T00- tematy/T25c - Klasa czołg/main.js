class Czolg{
    constructor(nazwa,kolor,amunicja) {
        this.nazwa = nazwa;
        this.kolor = kolor;
        this.amunicja = amunicja;
    }

    info = function(){
        wynik.innerHTML = `Czołg nazywa się ${this.nazwa}. Jego kolor to ${this.kolor}. Ma ${this.amunicja} sztuk amunicji <br>`;
    }
    wystrzal = function (){
        if (this.amunicja > 0){
            wynik.innerHTML = `Strzał! <br>`;
            this.amunicja -= 1;
        }
        else {
            wynik.innerHTML = `Brak amunicji <br>`;
        }
    }
    doladuj = function (){
        this.amunicja += 1;
        wynik.innerHTML = `Doładowano 1 pocisk <br>`;
    }

}

let czolg = new Czolg("Leopard", "szary", 4);

czolg.info();
czolg.wystrzal();
czolg.wystrzal();
czolg.doladuj();
czolg.info();
