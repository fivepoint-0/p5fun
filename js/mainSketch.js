
function setup () {
  createCanvas(400, 400)
  angleMode(DEGREES)
  background(0)
  colorMode(HSB, height, height, height)
  frameRate(60)
}

let hue = 1
function draw () {
  ball.update()
  translate(width/2, height/2)

  if (frameCount % 60 == 0) {
    hue += 15
    hue = hue % 255
  }
  let mx = mouseX - width/2
  let my = mouseY - height/2
  let pmx = pmouseX - width/2
  let pmy = pmouseY - height/2

  if (mouseIsPressed) {
    let h = map(hue,0, 255, 255, 1)
    stroke(mx + my, height, height)
    let angle = 30
    for (let i = 0; i < 12; i++) {
      rotate(i * angle)
      let distance = dist(mx, my, pmx, pmy)
      let sw = map(distance, 0, 10, 10, 1)
      strokeWeight(sw)
      line(mx, my, pmx, pmy)
    }
  }
}