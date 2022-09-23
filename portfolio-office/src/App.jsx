import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import {createContext, useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import "./App.css";
import gsap from "gsap";
import {Header} from "./Components/Header/Header";
import ThemeModeState from "./Context/ThemeMode/ThemeModeState";

function App() {
  const [themeMode, setThemeMode] = useState(false);
  const darkThemeMode = true;
  const iconsWrapper = useRef();
  let timelineDemo = gsap.timeline();
  
  useLayoutEffect(() => {
    timelineDemo.from(iconsWrapper.current, {x: -100, duration: 1, delay: 1});
  }, []);

  const reverseAnimation = () => {
    timelineDemo.reverse();
  };

  const darkMode = () => {
    setThemeMode(!themeMode);
  };

  return (
    <>
      <ThemeModeState>
        <div className={darkThemeMode ? "dark" : "dsfs"}>
          <Header />
          <div className={`App`}>
            <div className="home-page dark:bg-black dark:text-white">
              <div className="icon-wrapper" ref={iconsWrapper}>
                <a className="link" href="https://vitejs.dev" target="_blank">
                  <img src={reactLogo} className="logo" alt="Vite logo" />
                </a>
                <a className="link" href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
              </div>
              <div className="hover-details">
                <h2>Vite</h2>
                <h2>React</h2>
              </div>
              <button onClick={darkMode}>{themeMode ? "LightMode" : "DarkMode"}</button>
              <br />
              <button onClick={reverseAnimation}>Reverse</button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti nisi facere ducimus repellat temporibus earum. Officia officiis facilis
                vel. Laborum iste delectus corporis optio vel quia soluta recusandae temporibus?
              </p>
            </div>
          </div>
        </div>
      </ThemeModeState>
    </>
  );
}

export default App;
