class Czolg{
    constructor(nazwa,kolor,amunicja) {
        this.nazwa = nazwa;
        this.kolor = kolor;
        this.amunicja = amunicja;
    }

    info(){
        return`Czołg nazywa się ${this.nazwa}. Jego kolor to ${this.kolor}. Ma ${this.amunicja} sztuk amunicji`;
    }
    wystrzal(){
        if (this.amunicja > 0){
            this.amunicja -= 1;
            return `Strzał!`;
        }
        else {
            return `Brak amunicji`;
        }
    }
    doladuj(){
        this.amunicja += 1;
        return `Doładowano 1 pocisk`;
    }

}

let czolg = new Czolg("Leopard", "szary", 4);

wynik.innerHTML = `${czolg.info()} <br><br> ${czolg.wystrzal()} <br><br> ${czolg.wystrzal()} <br><br> ${czolg.doladuj()} <br><br> ${czolg.info()}`;




