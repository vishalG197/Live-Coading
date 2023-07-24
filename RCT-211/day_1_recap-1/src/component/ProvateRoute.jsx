import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
   const isAuthenticated=false;
  return (
    <Route
     
      render={(props) =>
        isAuthenticated ? (
         <> {props.children}</>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
