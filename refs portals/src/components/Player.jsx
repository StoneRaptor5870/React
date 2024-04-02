import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value='';
  }
  return (
    <section id="player" className="text-center">
      <h2 className="text-54a339 mb-4">Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p className="flex justify-center items-center">
        <input className="font-inherit border border-54a399 bg-192f2b rounded-l-md py-1 px-1 text-d1f0ec" type="text" ref={playerName}/>
        <button className="cursor-pointer bg-54a399 border border-54a399 py-1 px-4 text-061e1a rounded-r-md" onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
