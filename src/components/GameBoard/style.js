import styled from "styled-components";
import img from "./assets/velha.png";
import mobileImg from "./assets/mobilevelha.png";

export const Board = styled.div`
  position: absolute;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-color: black;
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  .title {
    font-family: "Quicksand", sans-serif;
  }
  .positions {
    width: 450px;
    height: 450px;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 33% 33% 33%;
    grid-gap: 5px;
  }
  .lista {
    display: flex;
    /* background-color: #333; */
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media only screen and (max-width: 450px) {
    background-image: url(${mobileImg});
    background-repeat: no-repeat;
    background-position: center;
    .positions {
      width: 330px;
      height: 330px;
      display: grid;
      grid-template-columns: 33% 33% 33%;
    }
  }
`;
