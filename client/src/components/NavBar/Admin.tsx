import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { getUserResource, getUserResourceWithGoogle } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function Admin () {
    
    const {getAccessTokenSilently, user} = useAuth0();
    const admin = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    console.log('sss', user?.email)
    const getToken = async() => {
        const accesToken = await getAccessTokenSilently();
        dispatch(getUserResourceWithGoogle(accesToken, user.email))
    }
    useEffect(()=> {
        getToken();
    },[getAccessTokenSilently])
    
    // if(admin.error.message) return(
    //     <div>Ooops... nothing to show here</div>
    // );
    // else if(!(admin.nickname === 'admin')) return(
    //     <div>You don't have permissions to access this page {admin.nickname}</div>
    // )
    if (!admin) return (
        <div>Nothing to show here</div>
    ) 
    else if(!(admin.rol === 'Admin')) {
        return (
            <div>You don't have permission to access this page</div>
        )
    } 
    else {
        return (
            <div>
                <h1>Admin</h1>
                <p>{admin.nickname}</p>
                <p>{admin.email}</p>
            </div>
        )
    }
    
}