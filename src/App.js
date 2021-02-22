import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import AppRoute from './components/AppRoute';
import routes from './Config/routes.js';
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const { state } = useApplicationData();
  // console.log(state);
  return (
    <div className="App font-body">
      <Router>
        <Navigation />
          <Switch>
            {routes.map((route) => (
              <AppRoute
                key={route.path}
                path={route.path}
                component={route.component}
                isPrivate={route.isPrivate}
                state={state}
              />
            ))}
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;