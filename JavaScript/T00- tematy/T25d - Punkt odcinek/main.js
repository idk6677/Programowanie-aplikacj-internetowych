class Punkt{
    constructor(nazwa, x, y) {
        this.nazwa = nazwa;
        this.x = x;
        this.y = y;
    }
    info = function (){
        return `Nazwa punktu: ${this.nazwa}, x = ${this.x}, y = ${this.y}`;
    }
}

let p = new Punkt("A", 3, 4);
let p1= new  Punkt("B", 5, 6);

p.info();
