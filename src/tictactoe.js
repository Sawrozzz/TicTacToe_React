import React from "react";
import Rectangle from "./rectangle";
import { useState } from "react";

const Tictactoe = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [xturn, setXturn] = useState(true);
    console.log("state", state);
    const onClickrecatnagle=(pos) =>{
        console.log("Clicked on ", pos)
    }
  return (
    <>
      <div className="gameboard">
        <div className="row">
          <Rectangle onClick={()=>onClickrecatnagle(0)} value ={state[0]} />
          <Rectangle onClick={()=>onClickrecatnagle(1)} value ={state[1]}/>
          <Rectangle  onClick={()=>onClickrecatnagle(2)} value ={state[2]}/>
        </div>
        <div className="row">
          <Rectangle  onClick={()=>onClickrecatnagle(3)} value ={state[3]}/>
          <Rectangle onClick={()=>onClickrecatnagle(4)}value ={state[4]}/>
          <Rectangle  onClick={()=>onClickrecatnagle(5)} value ={state[5]}/>
        </div>
        <div className="row">
          <Rectangle  onClick={()=>onClickrecatnagle(6)} value ={state[6]}/>
          <Rectangle  onClick={()=>onClickrecatnagle(7)} value ={state[7]}/>
          <Rectangle  onClick={()=>onClickrecatnagle(8)} value ={state[8]}/>
        </div>
      </div>
    </>
  );
};

export default Tictactoe;
