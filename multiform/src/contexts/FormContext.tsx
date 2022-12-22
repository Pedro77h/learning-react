import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

type Action = {
  type: formAction;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action:Action) => void;
}

type FormProviderProps = {
  children: ReactNode
}


const initialData: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

const FormContext = createContext<ContextType | undefined>(undefined);

export enum formAction {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const formReducer = (state: State, action:Action) => {
  switch (action.type) {
    case formAction.setCurrentStep:
      return { ...state, curentStep: action.payload };
    case formAction.setName:
      return { ...state, name: action.payload };
    case formAction.setLevel:
      return { ...state, level: action.payload };
    case formAction.setEmail:
      return { ...state, email: action.payload };
    case formAction.setGithub:
      return { ...state, github: action.payload };
    default: {
      return state;
    }
  }
};

export const useForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useForm must be used within a FormContext");
  }
  return context;
};

export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
