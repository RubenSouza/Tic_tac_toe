import { S } from "./style";

export default function Points({ scores, xPlaying, resetBoard }) {
  const { xScore, oScore } = scores;
  return (
    <S>
      <div id="container">
        <div className="placar">
          <div>1p</div>
        </div>
        <div className="placar">
          <div className={`player--X ${!xPlaying && "inactive"} `}></div>
          <p>Player(X)</p>
          <p>{xScore}</p>
        </div>
        <div className="placar">
          <div className={`player--O ${xPlaying && "inactive"}`}></div>
          <p>Player(O)</p>
          <p>{oScore}</p>
        </div>
        <div className="placar">
          <div className="reset"></div>
          <button className="btn" onClick={resetBoard}>
            Reset
          </button>
        </div>
      </div>
    </S>
  );
}
