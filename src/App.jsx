/** @format */

import React from "react";
import Header from "./components/Header/Header";
import * as S from "./components/Header/header_style";
import Main from "./components/Main/Main";

export default function App() {
  return (
    <div>
      <S.GlobalSyles />
      <Header />
      <Main />
    </div>
  );
}
