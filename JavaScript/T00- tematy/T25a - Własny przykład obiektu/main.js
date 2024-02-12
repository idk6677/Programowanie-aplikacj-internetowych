var kot = {
    rasa: "Brytyjski",
    wiek: "4",
    waga: "4,5kg",
    kolor: "Szary",
    pokaz: function (){
        wynik.innerHTML = `${this.kolor + " " + this.rasa}`
    }
}

kot.pokaz();