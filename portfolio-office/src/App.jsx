import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import gsap from 'gsap';

function App() {
  const viteRef = useRef();

  useEffect(() => {
    // gsap.from(viteRef.current, {x: window.innerWidth/2, xPercent: -50, y: window.innerHeight/2, yPercent: -50, duration: 2, position: "fixed"})
    gsap.from(viteRef.current, {
      y: window.innerHeight / 2,
      yPercent: -50,
      opacity: 0,
      scale: 2,
      duration: 1,
      ease: "expo.in"
    })

  },[]);

  return (
    <div className="App">
      <div ref={viteRef}>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  )
}

export default App
