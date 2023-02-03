import { MouseEventHandler } from "react";
import { HeaderWrapper, Button } from "./styles";

export const Header = ({currentTheme, handleThemeSwitch}: {currentTheme: string, handleThemeSwitch: MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <HeaderWrapper>
      <Button onClick={handleThemeSwitch} type="button">
        {currentTheme === 'light' ? 'Light mode' : 'Dark mode'}
      </Button>
    </HeaderWrapper>
  );
};
