import {useNavigate} from 'react-router-dom'


import * as S from './styles'
import {useForm , formAction} from '../../contexts/FormContext'
import {Theme} from '../../components/Theme'



export const FormStep1 = () => {

  const navigate = useNavigate()
  const {state , dispatch} = useForm()


  const handleNextStep = () => {
    navigate('/step2')
  }
  
  
  return (
    <Theme>
      <S.Container>
        <p>Passo 1/3</p>
        <h1>Vamos Começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr />
      
        <label >
          Seu nome completo
          <input
            type="text"
            autoFocus
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      
      </S.Container>
    </Theme>
  )
}
