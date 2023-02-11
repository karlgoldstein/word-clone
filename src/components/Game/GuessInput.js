import React from 'react';

export default function GuessInput({ addGuess }) {

  const [guess, setGuess] = React.useState('');

  const doSubmit = (event) => {
    event.preventDefault();
    if (guess.length === 5) {
      addGuess(guess);
      setGuess('');
    }
  }

  const doChange = (event) => {
    setGuess(event.target.value.substring(0, 5).toUpperCase());
  }
  
  return (
      <form className="guess-input-wrapper" onSubmit={doSubmit}>
  <label htmlFor="guess-input">Enter guess:</label>
	<input id="guess-input" type="text" value={guess} onChange={doChange}/>
      </form>
  )
}
