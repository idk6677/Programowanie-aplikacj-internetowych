// Funkcja generująca liczbę pseudolosową z zakresu <0,1>
function random() {
    return Math.floor(Math.random() * 2);
}

// Funkcja tworząca dwuwymiarową tablicę o wymiarach 4x4 i wypełniająca ją liczbami pseudolosowymi z zakresu <0,1>
function createArray() {
    let array = [];
    for (let i = 0; i < 4; i++) {
        let row = [];
        for (let j = 0; j < 4; j++) {
            row.push(random());
        }
        array.push(row);
    }
    return array;
}

// Funkcja znajdująca wiersze tablicy, w których suma liczb jest największa
function findMaxSumRows(array) {
    let maxSum = 0;
    let maxSumRows = [];
    for (let i = 0; i < array.length; i++) {
        let sum = array[i].reduce((acc, val) => acc + val, 0);
        if (sum > maxSum) {
            maxSum = sum;
            maxSumRows = [i];
        } else if (sum === maxSum) {
            maxSumRows.push(i);
        }
    }
    return maxSumRows;
}

// Funkcja tworząca "odwróconą" tablicę
function createReversedArray(array) {
    let reversedArray = [];
    for (let i = 0; i < array.length; i++) {
        let row = [];
        for (let j = 0; j < array.length; j++) {
            row.push(array[j][i]);
        }
        reversedArray.push(row);
    }
    return reversedArray;
}

// Tworzenie tablicy
let array = createArray();

// Wyświetlanie tablicy
console.log("Tablica początkowa:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i].join(" "));
}

// Znajdowanie indeksów wierszy z największą sumą
let maxSumRows = findMaxSumRows(array);
wynik.innerHTML = `\nIndeksy wierszy o największej sumie: ${maxSumRows.map(index => index + 1)}`;

// Tworzenie "odwróconej" tablicy
let reversedArray = createReversedArray(array);

// Wyświetlanie odwróconej tablicy
console.log("\nTablica po obróceniu o 90 stopni:");
for (let i = 0; i < reversedArray.length; i++) {
    console.log(reversedArray[i].join(" "));
}