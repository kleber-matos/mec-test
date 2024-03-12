/** @format */

import styled, { createGlobalStyle } from "styled-components";

export const GlobalSyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`;

export const Header = styled.header`
  /* border: solid 2px red; */
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const BtnApp = styled.div`
  /* border: solid 2px green; */
  display: flex;
  justify-content: space-between;
  width: 30vw;

  div {
    display: flex;
    /* border: solid red 2px; */
    display: flex;
    align-items: center;
    padding: 5px;
  }

  .mequi {
    background-color: #ffbc0d;
    border-radius: 5px;
  }
`;
