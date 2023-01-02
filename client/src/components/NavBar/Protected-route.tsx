//TYPESCRIPT
// import { withAuthenticationRequired } from "@auth0/auth0-react";
// import React from "react";
// import { Route} from "react-router-dom";
// import { PageLoader } from "./Page-loader";

import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import { Route, RouteProps } from "react-router-dom";
import { PageLoader } from "./Page-loader";

interface ProtectedRouteProps extends RouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
  ...args
}) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div className="page-layout">
          <PageLoader />
        </div>
      ),
    })}
    {...args}
  />
);