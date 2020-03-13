import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Hangman from './hangman/container';
import Newgame from './newgame/container';
import axios from 'axios';
class Game extends Component {
    state = {
        game: "",
    }
    componentDidMount() {
        var game;
        if (this.props.match.params.game === "hangman") {
            axios.get(`/api/vocablistinfo/${this.props.match.params.id}`)
                .then((results) => {
                    if(results.data.vocab.length === 0){
                        window.location.href = `/vocabulary/${this.props.match.params.id}`;
                    }
                    game = <Hangman vocab={results.data.vocab} />;
                    this.setState({
                        game: game
                    })
                })
        }
        else if (this.props.match.params.game === "newgame") {
            axios.get(`/api/vocablistinfo/${this.props.match.params.id}`)
                .then((results) => {
                    if(results.data.vocab.length === 0){
                        window.location.href = `/vocabulary/${this.props.match.params.id}`;
                    }
                    game = <Newgame vocab={results.data.vocab} />
                    this.setState({
                        game: game
                    })
                })
        }
        this.setState({
            game: game
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                {this.state.game}
            </div>
        )
    }
}

export default Game;