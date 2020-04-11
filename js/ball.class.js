class Ball {

    constructor(x, y) {
        this.x = x
        this.y = y
        this.velX = Math.random()*10
        this.velY = Math.random()*10
        this.hue = 0
    }

    draw () {
        fill(frameCount % 255, 255, 255)
        circle(this.x, this.y, 50)
    }

    update () {
        this.hue += 1
        this.moveX(this.velX)
        this.moveY(this.velY)
        fill(this.hue % 255, 255, 255)
        circle(this.x, this.y, 50)
    }

    moveX(n) {
        this.x += n
        if (this.x > width) {
            this.x = width - this.x % width
            this.velX = -1 * this.velX
        } else if (this.x < 0) {
            this.x = this.x % width
            this.velX = -1 * this.velX
        }
    }
    moveY(n) {
        this.y += n
        if (this.y > height) {
            this.y = height - this.y % height
            this.velY = -1 * this.velY
        } else if (this.y < 0) {
            this.y = this.y % height
            this.velY = -1 * this.velY
        }
    }
}