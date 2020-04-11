let balls = []

function setup () {
    createCanvas(400, 400)
    angleMode(DEGREES)
    background(0)
    frameRate(60)
    colorMode(HSB, 255, 255, 255)
}

function draw () {
    background(0)

    balls.forEach(ball => ball.update())
    translate(width/2, height/2)
    
    let mx = mouseX - width/2
    let my = mouseY - height/2
    let pmx = pmouseX - width/2
    let pmy = pmouseY - height/2
}

function mouseClicked () {
    let pmx = pmouseX
    let pmy = pmouseY
    ball = new Ball(pmx, pmy)
    ball.draw()
    balls.push(ball)
}
function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        console.log(balls)
        balls.forEach(ball => ball.moveX(30))
    }
}