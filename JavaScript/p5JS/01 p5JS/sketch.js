let angle = 0
x = 255
z = 50

function setup() {
    createCanvas(500, 500)
    background(234)
    angleMode(DEGREES)
}

function draw() {
    background(51)

    line(0, 20, z++, 20)

    fill(x)
    translate(100, 100)
    rotate(angle)
    scale(mouseX/ 100)
    rectMode(CENTER)
    rect(0, 0, 20, 20)

    angle = angle + 1

}


function mouseClicked() {
    if (x === 255) {
        x =  51
    }
    else if (x === 51) {
        x =  255
    }
}

