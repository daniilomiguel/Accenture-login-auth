import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import NavBar from '../components/NavBar';
import { useAuth } from '../hooks/contexts/AuthProvider';
import { Styled } from './styles';

function Routes() {
  const { auth } = useAuth()
  return (
    <Styled.AppLayout>
      {auth && <NavBar />}
      <Styled.PageLayout>
        <Switch>
          <Route path="/" exact component={Login} />
          {auth && <Route path="/home" component={Home} />}
          <Redirect from="*" to={NotFound} />
        </Switch>
      </Styled.PageLayout>
    </Styled.AppLayout>

  );
}

export default Routes;