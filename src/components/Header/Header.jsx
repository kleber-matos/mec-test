/** @format */

import React from "react";
import logo from "../../assets/logo.png";
import app from "../../assets/app.svg";
import cellApp from "../../assets/cell.svg";
import * as S from "./header_style";

export default function Header() {
  return (
    <S.Header>
      <img src={logo} alt="" />

      <S.BtnApp color="red">
        <div color>
          <img src={cellApp} alt="" />
          <p>Baixe o App</p>
        </div>
        <div className="mequi">
          <p>Peça seu Méqui</p>
          <img src={app} alt="" />
        </div>
      </S.BtnApp>
    </S.Header>
  );
}
