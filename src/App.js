import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import AppRoute from './components/AppRoute';
import routes from './Config/routes.js';
import useApplicationData from "./hooks/useApplicationData";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ScrollToTop from "./helpers/ScrollToTop";

console.log(routes);
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#02C1CB',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  const { state, createService, deleteService } = useApplicationData();
  return (
    <MuiThemeProvider theme={theme}>

      <div className="App font-body relative">
        <Router>
          <Navigation />
          <ScrollToTop />
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
    </MuiThemeProvider>
  );
}

export default App;