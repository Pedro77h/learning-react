import { ReactNode } from "react";
import * as S from "./styles";
import { Header } from "../Header";
import { SidebarItem } from "../Siderbaritem";

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

            <SidebarItem
              title="Pessoal"
              description="Se indentifique"
              icon="profile"
              path="/"
            />

            <SidebarItem
              title="Profissional"
              description="seu nivel"
              icon="book"
              path="/step2"
            />

            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
            />
          </S.Sidebar>
          
          <S.Page>{children}</S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
};
