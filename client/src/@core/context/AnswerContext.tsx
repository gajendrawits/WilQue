import { createContext } from "react";

interface AnsProp {
  getAnsValue: any;
  setAnsValue: React.Dispatch<React.SetStateAction<{}>>;
}

const defaultState = {
  getAnsValue: {},
  setAnsValue: () => null,
};

export const AnsContext = createContext<AnsProp>(defaultState);
