import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

export default function PrivatRoute({component: Component, ...rest}) {

    const {currentUser} = useContext(AuthContext)
  return (
    <Route
    {...rest}
    render={() => {
        return currentUser? <Component /> : <Redirect to="/" />
    }}
    >

    </Route>
  );
}
