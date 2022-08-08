import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: undefined,
    };
  }

  render() {
    return (
      <div id="quote-box">
        <p id="text"></p>
        <p id="author"></p>
        <div id="buttons">
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faSquareTwitter} />
          </a>
          <button id="new-quote"></button>
        </div>
      </div>
    );
  }
}

export default App;
