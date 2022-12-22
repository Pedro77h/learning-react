import { ReactNode } from "react";
import * as S from "./styles";
import {Header} from '../Header'

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Area>
        <Header />
        <S.Steps>
          <S.Sidebar>
            ...
          </S.Sidebar>
          <S.Page>{children}</S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
};

