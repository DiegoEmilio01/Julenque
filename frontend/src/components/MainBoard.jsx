import React, {useEffect} from "react";
import Dice from "./Dice";




function MainBoard({ players }) {
  useEffect(()=> {
    console.log(players)
  }, [players])


  return(
    <div className={'MainBoard'}>
      {players.map((player, i) =>
        <div key={i} className={'PlayerDices'}>
          <Dice number={player.dices.dice1}/>
          <Dice number={player.dices.dice2}/>
        </div>
      )}
    </div>
  )
}

export default MainBoard;