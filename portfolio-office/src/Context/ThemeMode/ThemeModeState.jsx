import { useState } from "react"
import { ThemeModeContext } from "./ThemeModeContext"

const ThemeModeState = (props) => {
  const [darkThemeMode, setDarkThemeMode] = useState(false)

  const update = () => {
    setDarkThemeMode(!darkThemeMode);
    console.log("called")
  }

  return (
    <ThemeModeContext.Provider value={{darkThemeMode, update}}>
        {props.children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeModeState;