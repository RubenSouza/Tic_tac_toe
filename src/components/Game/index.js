// Game.js é onde está localizada toda lógica do jogo,
// que são passadas aos seus filho através de propriedades.
import GameBoard from "../GameBoard";
import { useState } from "react";

export default function Game() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //Todos os estados do jogo estão aqui
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlaying, setIsPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0, tied: 0 });
  const [gameOver, setGameOver] = useState(false);

  //função responsável por atualizar o tabuleiro após acontecer um evento de click
  const handleClick = box1 => {
    const updatedBoard = board.map((value, i) => {
      if (i === box1) {
        return isPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    //Função responsável por adicionar no contador o jogador vencedor
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
    setBoard(updatedBoard);
    setIsPlaying(!isPlaying);
  };

  //Função responsável por verificar o vencedor
  const checkWinner = board => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };
  //Função responsável por dar um reset no tabuleiro.
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };
  return (
    //Componente tabuleiro e suas propriedades
    <div>
      <GameBoard
        positions={board}
        scores={scores}
        xPlaying={isPlaying}
        onClick={gameOver ? resetBoard : handleClick}
        resetBoard={resetBoard}
      />
    </div>
  );
}
