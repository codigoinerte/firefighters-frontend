import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { Icons } from "./Icons"
import { useState } from "react";
import { themeStore } from "../store/theme.store";

export const ButtonTheme = () => {

  const { setTheme } = themeStore();

  const themeDefault = themeStore((state) => state.isDarkMode);

  const [isDark, setIsDark] = useState(themeDefault);

  const onChangeDarkMode = () => {
    setIsDark(!isDark);
    setTheme(!isDark);
  }
  return (
    <>
        <button onClick={onChangeDarkMode}>
            <Icons icon={isDark ? Moon02Icon : Sun03Icon} />
        </button>
    </>
  )
}
