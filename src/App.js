import React from "react";
// import ReactDOM from "react-dom";
import quotes from "./quotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    const randomNum = Math.floor(Math.random() * quotes.length);
    this.state = {
      quoteIndex: randomNum,
      text: quotes[randomNum].text,
      author: quotes[randomNum].author,
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  getRandomQuote() {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * quotes.length);
    } while (randomNum === this.state.quoteIndex);
    this.setState({
      quoteIndex: randomNum,
      text: quotes[randomNum].text,
      author: quotes[randomNum].author,
    });
  }

  render() {
    return (
      <div id="quote-box">
        <p id="text">{this.state.text}</p>
        <p id="author">{this.state.author}</p>
        <div id="buttons">
          <a
            href={
              "https://twitter.com/intent/tweet?text=" +
              this.state.text +
              "%0a%0a-" +
              this.state.author +
              "%0a&hashtags=quote"
            }
            target="_blank"
            rel="noreferrer"
          >
              <FontAwesomeIcon icon={faTwitter} />
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
