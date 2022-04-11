import React, { useContext } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Intro from "./Components/Intro";
import ProductList from "./Components/ProductList";
import Toggle from "./Components/Toggle";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from "./context";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import './App.css'

import Technologylist from "./Components/Technologies/Technologylist";
function App() {
   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Router>
        <GlobalStyle />

        <Navbar />
        <Toggle />
        <Switch>
          <Route path="/" exact component={Intro} />
        </Switch>
        <ProductList />
        <Technologylist />

        <About />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
