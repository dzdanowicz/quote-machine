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
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  getRandomQuote() {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * quotes.length);
    } while (randomNum === this.state.quoteIndex);
    this.setState({
      text: quotes[randomNum].text,
      quoteIndex: randomNum,
    });
  }

  render() {
    return (
      <div id="quote-box">
        <p id="text">{this.state.text}</p>
        <p id="author"></p>
        <div id="buttons">
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faSquareTwitter} />
          </a>
          <button id="new-quote" onClick={this.getRandomQuote}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default App;
