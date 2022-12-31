import React, { useState } from "react";
import { getUserResource } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";

export default function LoginPage() {
    
    const dispatch = useAppDispatch();

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = e.target.name; 
        const inputValue = e.target.value;

        setUser({...user, [inputName]: inputValue })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(getUserResource(user))
        setUser({email: '', password: ''})
        //dispatch
    }
    return(
        <form onSubmit={(e)=> handleSubmit(e)}>
            <label>
                Email:
                <input type="text" value={user.email} onChange={handleChange} name={'email'}/>
            </label>
            <label>
                Password:
                <input type="password" value={user.password} onChange={handleChange} name={'password'}/>
            </label>
            <button type="submit">Login</button>
        </form>
    )
}