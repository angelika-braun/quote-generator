import { useState, useEffect } from "react";

export default function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
      })
      .catch((error) => {
        console.error("Fehler:", error);
        setQuotes([]);
      });
  }, []);

  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  };

  return (
    <>
      <div className="quotebox">
        <h3>{currentQuote.quote}</h3>
        <p>-{currentQuote.author}</p>
      </div>
      <button className="Btn" onClick={getRandomQuote}>
        new quote
      </button>
    </>
  );
}
