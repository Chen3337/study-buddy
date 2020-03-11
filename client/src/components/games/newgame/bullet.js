class Powerups {
    constructor(mainChar) {
        this.x = mainChar.x;
        this.y = mainChar.y;
        this.direc = mainChar.direction;
        this.timer = null;
    }
    collisionwithLetter(letterCir) {
        if (12 > Math.sqrt((letterCir.x - this.x) * (letterCir.x - this.x) + (letterCir.y - this.y) * (letterCir.y - this.y))) {
            return true;
        } else {
            return false;
        }
    }
    move() {
        var newtimer;
        if (this.direc === "left") {
            if (this.x > 0) {
                newtimer = setInterval(() => this.x -= 1, 5);
            }
        } else if (this.direc === "right") {
            if (this.x < 400) {
                newtimer = setInterval(() => this.x += 1, 5);
            }
        } else if (this.direc === "up") {
            if (this.y > 0) {
                newtimer = setInterval(() => this.y -= 1, 5);
            }
        } else if (this.direc === "down") {
            if (this.y < 400) {
                newtimer = setInterval(() => this.y += 1, 5);
            }
        }
        this.timer = newtimer
    }
    render(state) {
        if(this.x < 0 || this.x > 400 || this.y < 0 || this.y > 400){
            clearInterval(this.timer);
        }
        const context = state.context;
        context.save();
        context.translate(this.x, this.y);
        context.beginPath();
        context.arc(0, 0, 2, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.fill();
        context.closePath();
        context.restore();
    }
}
export default Powerups;