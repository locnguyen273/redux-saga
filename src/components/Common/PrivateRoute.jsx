import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = (props) => {
  //check user is logged in
  //if yes, show route
  //Otherwise, redirect to login page

  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if(!isLoggedIn) return <Redirect to="/login"/>;

  return (
    <Route {...props}/>
  )
};