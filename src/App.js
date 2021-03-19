import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import AppRoute from './components/AppRoute';
import routes from './Config/routes.js';
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const { state, createService, deleteService } = useApplicationData();
  // console.log(state);
  return (
    <div className="App font-body">
      <Router>
        <Navigation />
          <Switch>
            <Route exact path = '/'
              render={() => {
                return (
                  <Redirect to ="/home"/>
                )
              }} />
            {routes.map((route) => (
              <AppRoute
                key={route.path}
                path={route.path}
                component={route.component}
                isPrivate={route.isPrivate}
                state={state}
                createService={createService}
                deleteService={deleteService}
              />
            ))}
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;