
class MainChar {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.r = 10;
        this.rect = {
            x : -1,
            y: -15,
            w: 3,
            h: 15
        }
        this.direction = "up";
    }
    up() {
        if (this.y > 0) {
            this.y -= 1;
        }
        this.rect = {
            x : -1,
            y: -15,
            w: 3,
            h: 15
        }
        this.direction = "up"
    }
    down() {
        if (this.y < 400) {
            this.y += 1;
        }
        this.rect = {
            x : -1,
            y: 0,
            w: 3,
            h: 15
        }
        this.direction = "down"
    }
    left() {
        if (this.x > 0) {
            this.x -= 1;
        }
        this.rect = {
            x : -15,
            y: -1,
            w: 15,
            h: 3
        }
        this.direction = "left"
    }
    right() {
        if (this.x < 400) {
            this.x += 1;
        }
        this.rect = {
            x : 0,
            y: -1,
            w: 15,
            h: 3
        }
        this.direction = "right"
    }
    render(state) {
        const context = state.context;
        context.save();
        context.translate(this.x, this.y);
        context.beginPath();
        context.arc(0, 0, 10, 0, 2 * Math.PI);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
        context.beginPath();
        context.rect(this.rect.x,this.rect.y,this.rect.w,this.rect.h);
        context.fillStyle = "black";
        context.fill();
        context.closePath();
        context.stroke();
        context.restore();
    }
}
export default MainChar