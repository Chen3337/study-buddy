import React, { Component } from 'react';
import Letters from './letters';
import Guessline from './guessingline';
class Container extends Component {
    state = {
        wrong: 0,
        score: 0,
        definition: "",
        word: "",
        vocableft: this.props.vocab.slice(),
        vocab: this.props.vocab.slice(),
        startGame: false,
        guessLetter: [],
        guessStatus: [],
        restartGame: true,
        pointerEvent: "none"
    }
    startnewvocab = () => {
        var vocableft = this.state.vocableft;
        var whichWord = Math.floor(Math.random() * vocableft.length);
        var { word, definition } = vocableft[whichWord];
        vocableft.splice(whichWord, 1);
        word = word.toLowerCase().trim();
        var guessLines = [];
        for (var i = 0; i < word.length; i++) {
            guessLines.push("__");
        }
        var guessLetter = word.split("");
        this.setState({
            word: word,
            definition: definition,
            startGame: true,
            vocableft: vocableft,
            guessStatus: guessLines,
            guessLetter: guessLetter,
            pointerEvent: "auto"
        });
    }
    canvasStyle = () => {
        this.refs.canvas.style.width = "100%";
        this.refs.canvas.style.height = "100%";
    }
    componentDidMount() {
        this.canvasStyle();
        this.hangman();
    }
    hangman = () => {
        if (this.refs.canvas) {
            const ctx = this.refs.canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(30, 270);
            ctx.lineTo(30, 30);
            ctx.lineTo(150, 30);
            ctx.lineTo(150, 50);
            ctx.stroke();
            if (this.state.wrong === 1) {
                ctx.beginPath();
                ctx.arc(150, 70, 20, 0, 2 * Math.PI);
                ctx.stroke();
            } else if (this.state.wrong === 2) {
                this.drawline(ctx, 150, 90, 150, 180);
            } else if (this.state.wrong === 3) {
                this.drawline(ctx, 150, 115, 120, 160);
            } else if (this.state.wrong === 4) {
                this.drawline(ctx, 150, 115, 180, 160);
            } else if (this.state.wrong === 5) {
                this.drawline(ctx, 150, 180, 120, 230);
            } else if (this.state.wrong === 6) {
                this.drawline(ctx, 150, 180, 180, 230);
                this.setState({
                    restartGame: false,
                    wrong: 0,
                    pointerEvent: "none",
                    guessStatus: this.state.guessLetter
                });
            }
            console.log(this.state);
        }
    }
    drawline = (ctx, loc1x, loc1y, loc2x, loc2y) => {
        ctx.beginPath();
        ctx.moveTo(loc1x, loc1y);
        ctx.lineTo(loc2x, loc2y);
        ctx.stroke();
    }
    handleClick = (letter) => {
        var compareArray = this.state.guessStatus.slice();
        for (var i = 0; i < this.state.guessLetter.length; i++) {
            if (letter === this.state.guessLetter[i]) {
                compareArray[i] = letter;
            }
        }
        if (JSON.stringify(compareArray) === JSON.stringify(this.state.guessStatus)) {
            var wrong = this.state.wrong + 1;
            this.setState({
                wrong: wrong
            });
        }
        else if (JSON.stringify(compareArray) === JSON.stringify(this.state.guessLetter)) {
            if (this.state.vocableft.length) {
                this.setState({
                    startGame: false,
                    score: (this.state.score + 1),
                    guessStatus: compareArray,
                    pointerEvent: "none"
                });
            }
            else {
                this.setState({
                    restartGame: false,
                    score: (this.state.score + 1),
                    guessStatus: compareArray,
                    pointerEvent: "none"
                });
            }
        }
        else {
            this.setState({
                guessStatus: compareArray
            });
        }
    }
    restart = () => {
        const c = this.refs.canvas;
        const ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        this.setState({
            wrong: 0,
            score: 0,
            definition: "",
            word: "",
            vocableft: this.props.vocab.slice(),
            startGame: false,
            guessLetter: [],
            guessStatus: [],
            restartGame: true,
            pointerEvent: "none"
        });
    }
    render() {
        return (
            <div>
                <div style={{ textAlign: "center", width: "400px", height: "530px", border: "solid black 2px", margin: "auto", backgroundColor: "white"}}>
                    <div style={{ width: "100%", height: "30px" }}>
                        <p>{this.state.definition}</p>
                    </div>
                    <div style={{ width: "300px", height: "300px", margin: "auto" }}>
                        <canvas ref="canvas" width={300} height={300} />
                        {this.hangman()}
                    </div>
                    <Guessline guessStatus={this.state.guessStatus} />
                    <Letters handleClick={this.handleClick} pointerEvent={this.state.pointerEvent} />
                    <br />
                    <div>
                        <b>score: {this.state.score}/{this.state.vocab.length}</b>
                        <br />
                        <button disabled={this.state.startGame} className="btn btn-primary" onClick={() => this.startnewvocab()}>new vocabulary</button>
                        <button disabled={this.state.restartGame} className="btn btn-primary" onClick={() => this.restart()}>restart</button>

                    </div>
                </div>
            </div>
        );
    }
}
export default Container;