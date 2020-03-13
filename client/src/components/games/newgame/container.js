import React, { Component } from 'react';
import Mainchar from './mainChar';
import Letter from './letters';
import Guessline from './guessline';
import Powerups from './powerups';
import Bullet from './bullet';
var ABCLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
class Game extends Component {
    constructor(props) {
        super();
        this.state = {
            mainchar: new Mainchar(),
            context: null,
            timer: null,
            vocabs: props.vocab.slice(),
            Letters: [],
            vocabNow: {},
            keyonPressed: false,
            guessingStatus: [],
            guessLetter: [],
            startNewWord: false,
            score: 0,
            restartgame: true,
            powerupCir: [],
            extraLetters: [],
            bullet: null,
            rules: "none"
        }
    }
    componentDidMount() {
        window.addEventListener('keyup', this.keyup, true);
        window.addEventListener('keydown', this.keypressed, true);
        const context = this.refs.canvas.getContext('2d');
        this.setState({ context: context });
        requestAnimationFrame(() => { this.update() });
    }
    update = () => {
        if (this.state.context) {
            this.checkIfScore();
            this.state.context.clearRect(0, 0, 400, 400);
            this.state.mainchar.render(this.state);
            for (var a = 0; a < this.state.powerupCir.length; a++) {
                this.state.powerupCir[a].render(this.state);
                var powerupCollision = this.state.powerupCir[a].collisionwithMain(this.state.mainchar);
                if (powerupCollision) {
                    var newpowerupCir = this.state.powerupCir.slice();
                    var color = newpowerupCir[a].color;
                    newpowerupCir.splice(a, 1);
                    this.PowerupFunc(newpowerupCir, color);
                }
            }
            for (var i = 0; i < this.state.Letters.length; i++) {
                this.state.Letters[i].render(this.state);
                var isCollision = this.state.Letters[i].collisionwithMain(this.state.mainchar);
                if (this.state.bullet) {
                    var destory = this.state.bullet.collisionwithLetter(this.state.Letters[i]);
                    if (destory) {
                        this.destoryLetters(this.state.Letters[i].letter, i);
                    }
                }
                if (isCollision) {
                    this.wordCheck(this.state.Letters[i].letter, i);
                }
            }
            if (this.state.bullet) {
                this.state.bullet.render(this.state);
            }
        }
        requestAnimationFrame(() => { this.update() });
    }

    spaceHit = () => {
        var freshBullet = new Bullet(this.state.mainchar);
        freshBullet.move();
        this.setState({
            bullet: freshBullet,
        });
    }
    PowerupFunc = (newpowerupCir, color) => {
        var extraLetters = this.state.extraLetters.slice();
        var Letters = this.state.Letters.slice();
        if (color === "yellow") {
            var firstSpaceLet;
            for (var i = 0; i < this.state.guessingStatus.length; i++) {
                if (this.state.guessingStatus[i] === "__") {
                    firstSpaceLet = this.state.guessLetter[i];
                    i = this.state.guessingStatus.length;
                }
            }
            for (var j = 0; j < this.state.Letters.length; j++) {
                if (firstSpaceLet === this.state.Letters[j].letter) {
                    firstSpaceLet = this.state.Letters[j];
                    j = this.state.Letters.length;
                }
            }
            firstSpaceLet.x = this.state.mainchar.x;
            firstSpaceLet.y = this.state.mainchar.y;
        }
        else if (color === "red") {
            if (extraLetters.length) {
                for (var k = 0; k < this.state.Letters.length; k++) {
                    if (extraLetters[0] === this.state.Letters[k].letter) {
                        extraLetters.splice(0, 1);
                        Letters.splice(k, 1);
                        k = this.state.Letters.length;
                    }
                }
            }
            else {
                this.setState({
                    guessingStatus: this.state.guessLetter.slice(),
                    Letters: [],
                });
            }
        }
        this.setState({
            Letters: Letters,
            extraLetters: extraLetters,
            powerupCir: newpowerupCir,
        });
    }
    destoryLetters = (letter, i) => {
        var lettersColid = this.state.Letters.slice();
        var extraLetter = this.state.extraLetters.slice();
        lettersColid.splice(i, 1);
        if (extraLetter.length) {
            for (var k = 0; k < extraLetter.length; k++) {
                if (letter === extraLetter[k]) {
                    extraLetter.splice(k, 1);
                    k = extraLetter.length;
                }
            }
            if (extraLetter.length === this.state.extraLetters.length) {
                this.makeLetters(this.state.vocabNow, this.state.vocabs);
            }
            else {
                this.setState({
                    Letters: lettersColid,
                    extraLetters: extraLetter,
                    bullet: null,
                });
            }
        }
    }
    wordCheck = (letter, j) => {
        var lettersColid = this.state.Letters;
        lettersColid.splice(j, 1);
        for (var i = 0; i < this.state.guessLetter.length; i++) {
            if (this.state.guessLetter[i] !== this.state.guessingStatus[i]) {
                if (letter === this.state.guessLetter[i]) {
                    var a = this.state.guessingStatus.slice();
                    a[i] = letter;
                    i = this.state.guessLetter.length;
                    this.setState({
                        guessingStatus: a,
                        Letters: lettersColid
                    });
                }
                else {
                    this.makeLetters(this.state.vocabNow, this.state.vocabs);
                }
                i = this.state.guessLetter.length;
            }
        }
    }
    move = (run, direc) => {
        if (this.state.mainchar) {
            var newtimer;
            if (run && !this.state.keyonPressed) {
                if (direc === "up") {
                    newtimer = setInterval(() => this.state.mainchar.up(), 10);
                } else if (direc === "down") {
                    newtimer = setInterval(() => this.state.mainchar.down(), 10);
                } else if (direc === "left") {
                    newtimer = setInterval(() => this.state.mainchar.left(), 10);
                } else if (direc === "right") {
                    newtimer = setInterval(() => this.state.mainchar.right(), 10);
                }
                this.setState({
                    timer: newtimer
                })
            }
            else if (!run) {
                clearInterval(this.state.timer);
            }

        }
    }
    startgame = () => {
        if (this.state.vocabs.length !== 0) {
            var vocableft = this.state.vocabs.slice();
            var whichWord = Math.floor(Math.random() * vocableft.length);
            var vocabNow = vocableft[whichWord];
            vocableft.splice(whichWord, 1);
            this.makeLetters(vocabNow, vocableft);
        }
    }
    makeLetters = (vocabNow, vocableft) => {
        var vocabword = vocabNow.word.trim();
        var guessingStatus = [];
        for (var i = 0; i < vocabword.length; i++) {
            guessingStatus.push("__");
        }
        var guessLetter = vocabword.split("");
        var letters = [];
        for (var j = 0; j < guessLetter.length; j++) {
            var newLetter = new Letter(guessLetter[j]);
            letters.push(newLetter);
        }
        var extraletter = [];
        for (var k = 0; k < 3; k++) {
            var number = Math.floor(Math.random() * ABCLetters.length);
            var extraLetter = new Letter(ABCLetters[number]);
            extraletter.push(ABCLetters[number]);
            letters.push(extraLetter);
        }
        var powerupArray = [];
        var redPowerup = new Powerups("red");
        var yellowPowerup = new Powerups("yellow");
        powerupArray.push(redPowerup);
        powerupArray.push(yellowPowerup);
        this.setState({
            vocabs: vocableft,
            vocabNow: vocabNow,
            Letters: letters,
            guessLetter: guessLetter,
            guessingStatus: guessingStatus,
            startNewWord: true,
            powerupCir: powerupArray,
            extraLetters: extraletter,
        });
    }
    keypressed = (keydown) => {
        var dirc = keydown.key;
        if (dirc === "ArrowUp") {
            this.move(true, "up");
        } else if (dirc === "ArrowDown") {
            this.move(true, "down");
        } else if (dirc === "ArrowLeft") {
            this.move(true, "left");
        } else if (dirc === "ArrowRight") {
            this.move(true, "right");
        }
        this.setState({
            keyonPressed: true
        });
    }
    keyup = (keyup) => {
        if (keyup.code === "Space") {
            this.spaceHit();
        }
        var dirc = keyup.key;
        if (dirc === "ArrowUp") {
            this.move(false, "up");
        } else if (dirc === "ArrowDown") {
            this.move(false, "down");
        } else if (dirc === "ArrowLeft") {
            this.move(false, "left");
        } else if (dirc === "ArrowRight") {
            this.move(false, "right");
        }
        this.setState({
            keyonPressed: false
        });
    }
    checkIfScore = () => {
        if (this.state.guessingStatus.length !== 0) {
            if (JSON.stringify(this.state.guessingStatus) === JSON.stringify(this.state.guessLetter)) {
                this.setState({
                    score: (this.state.score + 1),
                    startNewWord: false,
                    guessLetter: [],
                    Letters: [],
                    powerupCir: [],
                    extraLetters: [],
                })
            }
        }
        var restart;
        if (this.state.score === this.props.vocab.length) {
            restart = false;
        } else {
            restart = true;
        }
        this.setState({
            restartgame: restart,
        })
    }
    restartGame = () => {
        this.setState({
            vocabs: this.props.vocab.slice(),
            Letters: [],
            vocabNow: {},
            keyonPressed: false,
            guessingStatus: [],
            guessLetter: [],
            startNewWord: false,
            score: 0,
            restartgame: true,
            powerupCir: [],
            extraLetters: [],
        });
    }
    ruleSwitch = () => {
        if(this.state.rules === "none"){
            this.setState({
                rules: "inline-block"
            })
        }
        else{
            this.setState({
                rules: "none"
            })
        }
    }
    render() {
        return (
                <div style={{ textAlign: "center", border: "1px solid black", width: "401px", height: "640px", margin: "auto", backgroundColor: "white" }}>
                    <div style={{ width: "100%", height: "30px" }}>
                        <p>{this.state.vocabNow.definition}</p>
                    </div>
                    <div style={{ display: "inline-block", border: "1px solid  black", width: "400px", height: "400px" }}>
                        <canvas ref="canvas"
                            width={400}
                            height={400}
                            style={{ backgroundColor: "skyblue" }}
                        />
                    </div>
                    <Guessline guessStatus={this.state.guessingStatus} />
                    <div>
                        <button className="btn btn-primary" onMouseDown={() => this.move(true, "up")} onMouseUp={() => this.move(false)}>up</button>
                        <button className="btn btn-primary" onMouseDown={() => this.move(true, "down")} onMouseUp={() => this.move(false)}>down</button>
                        <button className="btn btn-primary" onMouseDown={() => this.move(true, "left")} onMouseUp={() => this.move(false)}>left</button>
                        <button className="btn btn-primary" onMouseDown={() => this.move(true, "right")} onMouseUp={() => this.move(false)}>right</button>
                        <button className="btn btn-primary" onMouseUp={() => this.spaceHit()}>shoot</button>
                        <br />
                        <button className="btn btn-success" disabled={this.state.startNewWord} onClick={() => this.startgame()}>new word</button>
                        <button className="btn btn-secondary" disabled={this.state.restartgame} onClick={() => this.restartGame()}>restart</button>
                    </div>
                    <b>score: {this.state.score}/{this.props.vocab.length}</b>
                    <div>
                    <button className="btn btn-info" onClick={() => this.ruleSwitch()} >rules</button>
                        <ol style={{backgroundColor:"white", display: this.state.rules}}>
                            <li>click on the buttons to move or use the keyboard arrowkeys and space</li>
                            <li>move character to eat the letter bubbles and it have to be in order</li>
                            <li>there is three extra letter other than the word you can shoot them to destory it</li>
                            <li>powerups green will help you eat the next right letter, red will destory one of the extra letters if all extra letters destory it you will win this round</li>
                        </ol>
                        
                    </div>
                </div>
        );
    }
}

export default Game