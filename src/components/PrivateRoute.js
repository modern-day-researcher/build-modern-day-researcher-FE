import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );

export default PrivateRoute;

