import { ChangeEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm, formAction } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";

import * as S from "./styles";

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  
  useEffect(() => {
    if (state.name === "") navigate("/");

    dispatch({
      type: formAction.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') console.log(state);
    
    else alert('preencha os dados')
    
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: formAction.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: formAction.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <S.Container>
        <p>Passo 3/3 </p>
        <h1>Legal {state.name} , onde te achamos?</h1>
        <p>Preencha com seus dados para conseguirmos entrar em contato</p>
        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu Github?
          <input
            type="text"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </S.Container>
    </Theme>
  );
};
