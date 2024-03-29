import React, { createContext, useContext } from "react";

const FormInputContext = createContext();

export const useFormInputContext = () => useContext(FormInputContext);

export const FormInputContextProvider = ({ children, register, errors }) => (
  <FormInputContext.Provider value={{ register, errors }}>
    {children}
  </FormInputContext.Provider>
);
