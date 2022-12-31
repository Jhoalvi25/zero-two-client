
import { useAuth0 } from "@auth0/auth0-react";
import { getUserResource, getUserResourceWithGoogle } from "../../redux/actions";
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function Profile (): JSX.Element | null {
    const dispatch = useAppDispatch();
    const userAccounnt = useAppSelector(state => state.user)
    const { 
      user,
      getAccessTokenSilently
    } = useAuth0();
    
    if (!user) {
      return null;
    }

    const emailUser = user.email? user.email : '';

    const getToken = async() => {
      const accesToken = await getAccessTokenSilently();
      dispatch(getUserResourceWithGoogle(accesToken, emailUser))
  }

    useEffect(() => {
      getToken()
    }, [getAccessTokenSilently])
    console.log(user)
    return (
      <div>
        {userAccounnt.rol === 'Admin' && 
        <div className="admin">
        <Link to='/admin'>Admin</Link>
        </div>}
        
        <div className="row align-items-center profile-header">
          <p>{userAccounnt.nickname}</p>
          <p>{userAccounnt.email}</p>
        </div>
      </div>
    );
};