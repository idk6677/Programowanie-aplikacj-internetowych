function setup() {
    createCanvas(900, 700)
    background(234)
}

let x = 100
let y = 100

function draw() {
    background(234)
    point(100, 100)
    ellipse(x++, random(10, 100), 80, 80)
    ellipse(200, 300, 80, 100)
    ellipse(mouseX, mouseY, 80, 80)
}

// przeslac sam sketch