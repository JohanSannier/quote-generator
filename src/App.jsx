import React, { useEffect, useState } from "react";
import "./App.css";
import Quote from "./components/Quote";

const App = () => {
  const getNewQuote = () => {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
      .then((res) => res.json())
      .then((quotes) => setQuoteData(quotes.quotes[0]))
      .then(changeBgColor());
  };

  const changeBgColor = () => {
    let tmpData = [];
    for (let i = 0; i < 3; i++) {
      const newBgColor = Math.floor(Math.random() * 255);
      tmpData.push(newBgColor);
    }
    setBgColor(`rgb(${tmpData[0]}, ${tmpData[1]}, ${tmpData[2]})`);
    document.body.style.backgroundColor = `rgb(${tmpData[0]}, ${tmpData[1]}, ${tmpData[2]})`;
  };

  const [quoteData, setQuoteData] = useState({});
  const [bgColor, setBgColor] = useState();

  useEffect(() => {
    getNewQuote();
  }, []);
  return (
    <main>
      <Quote
        quoteData={quoteData}
        getNewQuote={getNewQuote}
        bgColor={bgColor}
      />
    </main>
  );
};

export default App;
