let RADIUS = 25

class Ball { 

    constructor(x, y) {
        this.x = x
        this.y = y
        this.velX = Math.random()*20
        this.velY = Math.random()*20
        this.hue = 0
    }

    draw () {
        fill(frameCount % 255, 255, 255)
        circle(this.x, this.y, RADIUS)
    }

    update () {
        this.hue += 1
        this.moveX(this.velX)
        this.moveY(this.velY)
        fill(this.hue % 255, 255, 255)
        circle(this.x, this.y, RADIUS)
    }

    updateCollisions(balls) {
        balls.forEach(ball => {
            let d = dist(this.x, this.y, ball.x, ball.y)
            if (d < RADIUS) {
                console.log('TOUCHING')
                this.velX = this.velX * -1
                ball.velX = ball.velX * -1
                this.velY = this.velY * -1
                ball.velY = ball.velY * -1
                this.moveX(RADIUS)
                this.moveY(RADIUS)
                ball.moveX(RADIUS)
                ball.moveY(RADIUS)
            }
        })
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