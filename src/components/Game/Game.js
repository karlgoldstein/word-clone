import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import GuessInput from './GuessInput';
import GuessList from './GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    const draft = [...guesses, { key: crypto.randomUUID(), guess }];
    setGuesses(draft);
  }

  const isWon = guesses.length > 0 && guesses[guesses.length - 1].guess === answer;
  const isLost = guesses.length > NUM_OF_GUESSES_ALLOWED;
  
  return <>
	   {isWon && <div className="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in
    {' '}
    <strong>3 guesses</strong>.
  </p>
		     </div>}

	   {isLost && <div className="sad banner">
			<p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
		      </div>}
	   
	   <GuessList answer={answer} guesses={guesses} />
	   <GuessInput addGuess={addGuess} />
	 </>;
}

export default Game;
