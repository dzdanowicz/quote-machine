import React from "react";
import ReactDOM from "react-dom";
import quotes from "./quotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    const randomNum = Math.floor(Math.random() * quotes.length);
    this.state = {
      text: quotes[randomNum].text,
      quoteIndex: randomNum,
    };
    this.handleClick = this.handleClick.bind(this);
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  getRandomQuote() {
    let randomNum;
    while (randomNum === this.state.quoteIndex) {
      randomNum = Math.floor(Math.random() * quotes.length);
    }
    return quotes[randomNum];
  }

  handleClick() {}

  render() {
    return (
      <div id="quote-box">
        <p id="text">{this.state.text}</p>
        <p id="author"></p>
        <div id="buttons">
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faSquareTwitter} />
          </a>
          <button id="new-quote" onClick={this.handleClick}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default App;
