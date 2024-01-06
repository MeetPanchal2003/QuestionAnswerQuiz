import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface MyContextData {
  attemptAns: number;
  correctAns: number;
  incorrectAns: number;
}

const MyContext = createContext<
  | { datas: MyContextData; setDatas: Dispatch<SetStateAction<MyContextData>> }
  | undefined
>(undefined);

export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [contextData, setContextData] = useState<MyContextData>({
    attemptAns: 1,
    correctAns: 0,
    incorrectAns: 0,
  });

  const value = {
    datas: contextData,
    setDatas: setContextData,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useContext Error..");
  }

  return context;
};
