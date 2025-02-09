import { createContext, useContext, useState } from "react";
import TRs from "../pages/TR/TRs";
import Users from "../pages/login/Users";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [tRList, setTRList] = useState(TRs);
  const [currentUser, setCurrentUser] = useState();
  const [tempUser, setTempUser] = useState(Users[1]);
  const [isSideMenuExpanded, setIsSideMenuExpanded] = useState(false);
  const [isEditingForm, setIsEditingForm] = useState(true);
  const [isFileSelected, setIsFileSelected] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        tRList,
        setTRList,
        currentUser,
        setCurrentUser,
        tempUser,
        setTempUser,
        isSideMenuExpanded,
        setIsSideMenuExpanded,
        isEditingForm,
        setIsEditingForm,
        isFileSelected,
        setIsFileSelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
