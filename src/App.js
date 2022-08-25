import React from "react";
// import ReactDOM from "react-dom";
import quotes from "./quotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
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
      <div id="quote-box" className="container">
        <blockquote className="blockquote">
          <p id="text">
            <FontAwesomeIcon icon={faQuoteLeft} />
            {" " + this.state.text + " "}
            <FontAwesomeIcon icon={faQuoteRight} />
          </p>
          <footer id="author" className="blockquote-footer">
            {this.state.author}
          </footer>
        </blockquote>
        <div className="row">
          <div className="col-6">
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
              className="twitter-link"
            >
              <FontAwesomeIcon icon={faSquareTwitter} />
            </a>
          </div>
          <div className="col-6">
            <button
              id="new-quote"
              className="btn btn-primary"
              onClick={this.getRandomQuote}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
