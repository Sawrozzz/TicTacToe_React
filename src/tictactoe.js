import React from "react";
import Rectangle from "./rectangle";
import { useState } from "react";

const Tictactoe = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [xturn, setXturn] = useState(true);
  console.log("state", state);
  const checkWinner = () => {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i of winnerlogic) {
      const [a, b, c] = i;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };
  const iswinner = checkWinner();
  const onClickrecatnagle = (pos) => {
    if(state[pos]!==null){
      return ;
    }
    const copystate = [...state];
    copystate[pos] = xturn ? "X" : "O";
    setState(copystate);
    setXturn(!xturn);
  };
  const onClickReset =() =>{
  setState(Array(9).fill(null));
  };
  return (
    <>
      <div className="gameboard">
        {iswinner ? (<>{iswinner}game over
          <button onClick={onClickReset} >Play Again</button>
          </>
        ) : (
          <>
          <h3 className = "whichturn">Its {xturn? "X": "O"} turn</h3>
            <div className="row">
              <Rectangle
                onClick={() => onClickrecatnagle(0)}
                value={state[0]}
              />
              <Rectangle
                onClick={() => onClickrecatnagle(1)}
                value={state[1]}
              />
              <Rectangle
                onClick={() => onClickrecatnagle(2)}
                value={state[2]}
              />
            </div>
            <div className="row">
              <Rectangle
                onClick={() => onClickrecatnagle(3)}
                value={state[3]}
              />
              <Rectangle
                onClick={() => onClickrecatnagle(4)}
                value={state[4]}
              />
              <Rectangle
                onClick={() => onClickrecatnagle(5)}
                value={state[5]}
              />
            </div>
            <div className="row">
              <Rectangle
                onClick={() => onClickrecatnagle(6)}
                value={state[6]}
              />
              <Rectangle
                onClick={() => onClickrecatnagle(7)}
                value={state[7]}
              />
              <Rectangle
                onClick={() => onClickrecatnagle(8)}
                value={state[8]}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tictactoe;
