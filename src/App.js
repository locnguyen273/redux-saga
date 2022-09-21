import { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import cityApi from './api/cityApi';
import './App.css';
import { NotFound, PrivateRoute } from './components/Common';
import { Admin } from './components/Layout';
import LoginPage from './features/auth/pages/LoginPage';

function App() {

  useEffect(() => {
    cityApi.getAll().then((response) => console.log("response", response));
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <PrivateRoute path="/admin">
          <Admin/>
        </PrivateRoute>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
