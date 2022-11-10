import React from "react";
import "./Quote.css";

const Quote = ({ quoteData: { text, author }, getNewQuote, bgColor }) => {
  const styleText = {
    color: bgColor,
  };
  const styleBtn = {
    backgroundColor: bgColor,
  };
  return (
    <div id="quote-box">
      <div id="text" style={styleText}>
        {text}
      </div>
      <div id="author" style={styleText}>
        - <span>{author}</span>
      </div>
      <div className="btn-wrapper">
        <div
          id="new-quote"
          className="btn"
          style={styleBtn}
          onClick={getNewQuote}
        >
          New quote
        </div>
        <a href="twitter.com/intent/tweet" target="_blank">
          <div id="tweet-quote" className="btn" style={styleBtn}>
            Tweet quote
          </div>
        </a>
      </div>
    </div>
  );
};

export default Quote;
