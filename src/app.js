import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, SignUp, SignIn } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          path={ROUTES.SIGNIN}
          user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          path={ROUTES.SIGNUP}
          user={user}
          loggedInPath={ROUTES.BROWSE}
        >
          <SignUp />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInpath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
