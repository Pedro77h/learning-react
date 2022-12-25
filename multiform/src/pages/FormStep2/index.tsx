import { useNavigate, Link } from "react-router-dom";
import { ChangeEvent, useEffect } from "react";

import * as S from "./styles";

import { useForm, formAction } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { SelectOption } from "../../components/SelectOption";



export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") navigate("/");

    dispatch({
      type: formAction.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name != "") navigate("/step3");
    else alert("Preencha seus dados");
  };

  const setLevel = (level: number) => {
    dispatch({
      type: formAction.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <S.Container>
        <p>Passo 2/3 </p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual
          profissionalmente
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo a há 2 anos ou mais"
          icon="🤑"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </S.Container>
    </Theme>
  );
};
