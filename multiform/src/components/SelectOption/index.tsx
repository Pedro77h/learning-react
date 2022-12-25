import React from "react";
import * as S from "./styles";

interface props {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void
}

export const SelectOption = ({ title, description, icon , selected , onClick }: props) => {
  return (
    <S.Container selected={selected} onClick={onClick}>
      <S.Icon>{icon}</S.Icon>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
    </S.Container>
  );
};
