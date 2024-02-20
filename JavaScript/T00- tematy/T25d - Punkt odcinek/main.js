class Punkt{
    constructor(nazwa, x, y) {
        this.nazwa = nazwa;
        this.x = x;
        this.y = y;
    }
    info(){
        wynik.innerHTML = `Nazwa punktu: ${this.nazwa}, x = ${this.x}, y = ${this.y}`;
    }
}

class Odcinek{
    constructor(){

    }
}

let p = new Punkt("A", 3, 4);
let p1= new  Punkt("B", 5, 6);

p.info();
