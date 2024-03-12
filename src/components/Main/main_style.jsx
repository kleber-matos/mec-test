/** @format */

import styled from "styled-components";

export const Main = styled.main`
  border: solid 2px red;
  background-color: #ffbc0d;
`;

export const Section = styled.section`
  background-color: #ffbc0d;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* border: solid; */
    width: 80%;
  }

  img {
    width: 30%;
  }
`;

export const Elements = styled.figure`
  /* border: solid; */
  width: 20%;
  display: flex;
  justify-content: space-between;

  img {
    width: 50px;
  }
`;

export const Promocao = styled.section`
  border: solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60vh;
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Card = styled.div`
  border: solid;
  border-radius: 10px;
  width: 30vw;

  img {
    width: 100%;
  }
`;
