import { createContext, useContext, useReducer } from "react";

const initialData = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

const FormContext = createContext(undefined);

enum formAction {
  setCurrentStep,
  setName,
  setLevel,
  setEmail,
  setGithub,
}

const formReducer = (state, action) => {
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


const useForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useForm must be used within a FormContext");
  }
}


export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
