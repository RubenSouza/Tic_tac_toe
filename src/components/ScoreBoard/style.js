import styled from "styled-components";

export const S = styled.div`
  width: 60%;
  height: 40px;
  color: white;
  #container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .player--X {
    background-color: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .player--O {
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .inactive {
    visibility: hidden;
  }

  .btn {
    padding: 5px;
    background-color: transparent;
    color: white;
    border: 1px solid #91b7c7;
    border-radius: 8px;
  }

  .btn:hover {
    font-weight: bold;
    color: #333;
    background-image: linear-gradient(160deg, #91b7c7 0%, #1171b0 100%);
  }
  .placar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
