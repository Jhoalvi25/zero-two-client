
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { getUserResource } from "../../redux/actions";

export default function Profile (): JSX.Element | null {
    const { 
      user,
      getAccessTokenSilently
    } = useAuth0();
    
    if (!user) {
      return null;
    }

    const emailUser = user.email? user.email : '';
    let token;
    const getToken = async () => {
      token = await getAccessTokenSilently();
      getUserResource(token, emailUser);
    };

    return (
      <div>
        <div className="row align-items-center profile-header">
          <div className="col-md-2 mb-3">
            <img
              src={user.picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </div>
          <div className="col-md text-center text-md-left">
            <h2>{user.name}</h2>
            <p className="lead text-muted">{user.email}</p>
          </div>
        </div>
        <div className="row">
          <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    );
};