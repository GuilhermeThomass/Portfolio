import React, {useState} from "react";
import GlobalStyle from "./styles/global";
import styled, { ThemeProvider } from 'styled-components';
import Home from "./Page/Home"

import ParticlesComponent from "./components/Particle";
import {darkTheme,ligthTheme} from "./styles/Theme"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }

`

function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () =>{
    theme === "dark" ? setTheme("ligth") : setTheme("dark");
  }
  return (
      
      <ThemeProvider theme={theme==="dark" ? darkTheme : ligthTheme }>
        <Container>
          <ParticlesComponent id="particles" options={theme}/>
          <GlobalStyle/>
          <Home/>
        </Container>
      </ThemeProvider>
  );
}

export default App;
