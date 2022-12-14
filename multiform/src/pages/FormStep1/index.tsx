import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useForm, formAction } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { SelectOption } from "../../components/SelectOption";

import * as S from "./styles";

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: formAction.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    if (state.name != "") navigate("/step2");
    else alert("Preencha seus dados");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: formAction.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <S.Container>
        <p>Passo 1/3 </p>
        <h1>Vamos Começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </S.Container>
    </Theme>
  );
};
