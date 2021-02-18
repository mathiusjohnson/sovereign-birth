import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, Services } from "./components";
// import Home from './components/Home'
function App() {
  return (
    <div className="App font-body">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/services" exact component={() => <Services />} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;