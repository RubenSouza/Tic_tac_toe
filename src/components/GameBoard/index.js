// import { useState } from "react";
import { Board } from "./style";
import ScoreBoard from "../ScoreBoard";
import Square from "../Square";

export default function GameBoard({
  positions,
  onClick,
  scores,
  xPlaying,
  resetBoard,
}) {
  return (
    <Board>
      <h1 className="title">Jogo da velha</h1>
      <div className="positions">
        {positions.map((position, i) => {
          return (
            <Square
              key={i}
              id={position}
              value={position}
              onClick={() => position === null && onClick(i)}
            />
          );
        })}
      </div>
      <ScoreBoard scores={scores} xPlaying={xPlaying} resetBoard={resetBoard} />
    </Board>
  );
}
