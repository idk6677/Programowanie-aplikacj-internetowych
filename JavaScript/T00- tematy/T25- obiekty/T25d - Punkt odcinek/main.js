class Punkt{
    constructor(nazwa, x, y) {
        this.nazwa = nazwa;
        this.x = x;
        this.y = y;
    }
    info(){
        return `Nazwa punktu: ${this.nazwa}, x = ${this.x}, y = ${this.y}`
    }
}

class Odcinek{
    constructor(punkt_p, punkt_k){
        this.punkt_p = punkt_p;
        this.punkt_k = punkt_k;
    }

    dlugosc_odcinka(){
        return `Długość odcinka: ${Math.sqrt(Math.pow(this.punkt_k.x - this.punkt_p.x, 2) + Math.pow(this.punkt_k.y -this.punkt_p.y, 2)).toFixed(2)}`;
    }

    info(){
        return `Punkt początkowy odcinka ${this.punkt_p.nazwa}${this.punkt_k.nazwa}  to ${this.punkt_p.nazwa} (${this.punkt_p.x};${this.punkt_p.y}), a końcowy to ${this.punkt_k.nazwa} (${this.punkt_k.x};${this.punkt_k.y})`;
    }
}

let p = new Punkt("A", -4, 3);
let p1= new  Punkt("B", -1, 7);
let o = new Odcinek(p, p1);

wynik.innerHTML = `${p.info()} <br><br> ${o.dlugosc_odcinka()} <br><br> ${o.info()}`;


