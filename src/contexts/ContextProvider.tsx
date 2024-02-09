import { createContext, useContext, useState, PropsWithChildren } from 'react';

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export type MenuIsClickedType = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

interface IStateContext {
  isClicked: MenuIsClickedType;
  setIsClicked?: React.Dispatch<React.SetStateAction<MenuIsClickedType>>;
  activeMenu?: boolean;
  setActiveMenu?: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick?: (clicked: MenuType) => void;
  screenSize?: number;
  setScreenSize?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export type MenuType = keyof MenuIsClickedType;

const StateContext = createContext<IStateContext>({ isClicked: initialState });

export const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  const handleClick = (clicked: MenuType) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
