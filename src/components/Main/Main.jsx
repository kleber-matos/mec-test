/** @format */

import React from "react";
import bigMac from "../../assets/bigmac.svg";
import batata from "../../assets/batata.svg";
import sorvete from "../../assets/sorvete.svg";
import sofa from "../../assets/sofa.png";
import loja from "../../assets/loja.png";
import juntos from "../../assets/juntos.png";

import * as S from "./main_style";
import Card from "./Card";

export default function Main() {
  return (
    <S.Main>
      <S.Section>
        <div>
          <img src={bigMac} alt="" />
          <h2>BATEU AQUELA #FOME DE MÉQUI?</h2>
        </div>
        <S.Elements>
          <img src={bigMac} alt="" />
          <img src={batata} alt="" />
          <img src={sorvete} alt="" />
        </S.Elements>
      </S.Section>

      <S.Promocao>
        <h2>Promoção</h2>

        <S.Center>
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"} />
          <Card imagem={loja} texto={"venha conhecer nossa nova loja"} />
          <Card
            imagem={juntos}
            texto={"Confira as medidas que o Méqui adotou!"}
          />
        </S.Center>
      </S.Promocao>
    </S.Main>
  );
}
