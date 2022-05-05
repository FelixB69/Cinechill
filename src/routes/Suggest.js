import '../Css/Suggest.css';

import Quotes from '../components/Quotes';
import MovieGifs from '../components/MovieGifs';
import { useState } from 'react';

function Suggest() {
  const [displaySuggest, setDisplaySuggest] = useState(true);

  const buttonDisplayQuote = () => {
    setDisplaySuggest(true);
  };

  const buttonDisplayGifs = () => {
    setDisplaySuggest(false);
  };

  return (
    <>
      <div className="buttons-suggest">
        <button
          className="button-quote"
          type="button"
          onClick={buttonDisplayQuote}
          style={{ backgroundColor: displaySuggest ? '#32474d' : 'inherit' }}
        >
          QUOTES
        </button>
        <button
          className="button-quote"
          type="button"
          onClick={buttonDisplayGifs}
          style={{ backgroundColor: !displaySuggest ? '#32474d' : 'inherit' }}
        >
          GIFS
        </button>
      </div>
      <div>{displaySuggest ? <Quotes /> : <MovieGifs />}</div>
    </>
  );
}

export default Suggest;
