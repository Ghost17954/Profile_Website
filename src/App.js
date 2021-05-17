import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Globalstyle from "./components/Globalstyle";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Globalstyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />{" "}
          <Route path="/contact" exact component={Contact} />{" "}
          <Route path="/about" exact component={About} />{" "}
          {/* <Route path="/work/:id" exact component={MovieDetail} />{" "} */}
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
