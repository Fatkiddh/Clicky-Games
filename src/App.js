import React, { Component } from 'react';
import CharacterCard from "./components/characterCards/characterCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/navbar/navbar";
import characters from "./characters.json";
// import footer from "./components/footer/footer";
import './App.css';
var shuffle = require("shuffle-array");

let currentScore = 0;
let clickedCharactersArray = [];
let topScore = 0;


class App extends Component {
  state = {
    characters,
    currentScore,
    topScore
  };

  clickedCard = id => {
    clickedCharactersArray.push(id);
    const filtered = clickedCharactersArray.filter(idCheck => idCheck === id);
    console.log(filtered);
    if (filtered.length > 1) {
      clickedCharactersArray=[];
      if (currentScore > topScore) {
        topScore=currentScore;
      }
      currentScore=0;
      this.setState({topScore});
    }
    else {
      currentScore++;
      this.setState({currentScore});
    }
    shuffle(characters);
    this.setState({characters,topScore,currentScore});
  };


  render() {
    return (
      <Wrapper>
        <Navbar>
        Current score= {currentScore} |
        Top Score= {topScore}
        </Navbar>
        <div className="title">
          <h1>Clicky Game!</h1>
          <h2>lets see your skills!</h2>
        </div>
        <div className="cardSections">
          {this.state.characters.map(character => (
            <CharacterCard
            clickedCard={this.clickedCard}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
          </div>
      </Wrapper>
    );
  }
}



export default App;
