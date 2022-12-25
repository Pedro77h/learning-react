import { ReactNode } from "react";
import * as S from "./styles";
import { Header } from "../Header";
import { SidebarItem } from "../Siderbaritem";
import { useForm } from "../../contexts/FormContext";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

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
              active={state.currentStep === 1}
            />

            <SidebarItem
              title="Profissional"
              description="Seu nivel"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SidebarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </S.Sidebar>

          <S.Page>{children}</S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
};
