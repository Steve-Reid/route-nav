import * as React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

interface RouteWrapperProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<RouteComponentProps<any>>;
  isPrivate?: boolean;
  path?: string;
  exact?: boolean;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}: RouteWrapperProps) => {
  const signed = false;

  /**
   * Redirect user to SignIn page if they try to access a private route
   * without authentication.
   */

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }
  /**
   * Redirect user to Main page if they try to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */

  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />;
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */

  return <Route {...rest} component={Component} />;
};

export default RouteWrapper;
