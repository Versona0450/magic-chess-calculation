// eslint-disable-next-line no-unused-vars
import { useState } from 'react'


function App() {

  const [selectedPlayer, setSelectedPlayer] = useState('player 1');
  const [players, setPlayers] = useState({
    player1: 'player 1',
    player2: 'player 2',
    player3: 'player 3',
    player4: 'player 4',
    player5: 'player 5',
    player6: 'player 6',
    player7: 'player 7',
    player8: 'player 8',
  });

  return (
    <>
      <div className='block  p-4 h-screen bg-gray-800 text-white'>
        <div className='mb-4'>
          You Are : {selectedPlayer}
        </div>
       {/* <div className='w-1/12'>
        <div className='flex flex-col mb-4'>
            <label htmlFor="player-1">
              Player 1
            </label>
            <input type="text" id='player-1' placeholder='Player 1' className='input border' value={players['player1']} />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="player-1">
              Player 2
            </label>
            <input type="text" id='player-1' placeholder='Player 2' className='input border' value={players['player2']}  />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="player-1">
              Player 3
            </label>
            <input type="text" id='player-1' placeholder='Player 3' className='input border' value={players['player3']}  />
            </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="player-1">
              Player 4
            </label>
            <input type="text" id='player-1' placeholder='Player 4' className='input border' value={players['player4']}  />
            </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="player-1">
              Player 5
            </label>
            <input type="text" id='player-1' placeholder='Player 5' className='input border' value={players['player5']}  />
            </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="player-1">
              Player 6
            </label>
            <input type="text" id='player-1' placeholder='Player 6' className='input border' value={players['player6']}  />
            </div> 
          <div className='flex flex-col mb-4'>
            <label htmlFor="player-1">
              Player 7
            </label>
            <input type="text" id='player-1' placeholder='Player 7' className='input border' value={players['player7']}  />
            </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="player-1">
              Player 8
            </label>
            <input type="text" id='player-1' placeholder='Player 8' className='input border' value={players['player8']}  />
            </div>
        </div> */}
        <div className='w-1/12'>
          {
          Object.keys(players).map((playerKey, index) => (
            <div className='flex flex-row mb-4 gap-4' key={index}>
              {/* <label htmlFor={`player-${index + 1}`}>
                {`Player ${index + 1}`}
              </label> */}
              <input type="radio" name={selectedPlayer} className="radio" onChange={() => setSelectedPlayer(players[playerKey])} defaultChecked={index === 0} />
              <input
                type="text"
                id={`player-${index + 1}`}
                placeholder={`Player ${index + 1}`}
                className='input border'
                value={players[playerKey]}
                onChange={(e) => setPlayers({ ...players, [playerKey]: e.target.value })}
              />
            </div>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default App
