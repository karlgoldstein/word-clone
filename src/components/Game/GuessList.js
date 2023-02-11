import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../game-helpers'

export default function GuessList({ guesses, answer }) {
  return (
      <div className="guess-results">
      {guesses.slice(0, NUM_OF_GUESSES_ALLOWED).map(({ key, guess }) => 
	  <p key={key} className="guess">
	  {checkGuess(guess, answer).map(({letter, status}, i) => <span key={i} className={`cell ${status}`}>{letter}</span>)}
	  </p>
      )}
    </div>
  );
}
