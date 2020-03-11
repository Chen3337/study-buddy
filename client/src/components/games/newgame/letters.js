class Letter {
    constructor(letter) {
        this.x = Math.floor(Math.random() * 400);
        this.y = Math.floor(Math.random() * 400);
        this.letter = letter;
        this.direc = true;
        this.times = 0;
    }
    collisionwithMain(mainChar){
        if (20 > Math.sqrt((mainChar.x - this.x)*(mainChar.x - this.x) + (mainChar.y - this.y)*(mainChar.y - this.y))) {
            return true;
          } else {
            return false;
          }
    }
    move(){
        if(this.direc === true){
            var direct = Math.floor(Math.random() * 4);
            this.direc = direct;
        }
        else{
            this.times += 1;
        }
        if(this.direc === 0){
            if(this.x > 0){
                this.x -= 1;
            }
        }else if(this.direc === 1){
            if(this.x < 400){
                this.x += 1;
            }
        }else if (this.direc === 2){
            if(this.y > 0){
                this.y -= 1;
            }
        }else if (this.direc === 3){
            if(this.y < 400){
                this.y += 1;
            } 
        }
        if(this.times === 20){
            this.times = 0;
            this.direc = true;
        }
    }
    render(state) {
        this.move();
        const context = state.context;
        context.save();
        context.translate(this.x, this.y);
        context.beginPath();
        context.arc(0, 0, 10, 0, 2 * Math.PI);
        context.fillStyle = "white";
        context.fill();
        context.closePath();
        context.font = "15px Arial";
        context.textAlign = "center";
        context.fillStyle = "black";
        context.fillText(this.letter, 0, 5);
        context.restore();
    }
}
export default Letter;