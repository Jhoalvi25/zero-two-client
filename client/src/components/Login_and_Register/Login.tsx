import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "../../style/Login_and_Register/Login.module.css";
import { Link } from "react-router-dom";
import validationSchema from "./validations/validationLogin";
import { useAppDispatch } from "../../redux/hooks";
import { getUserResource } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

interface FormValues {
  email: string;
  password: string;
}
export default function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const {loginWithRedirect} = useAuth0();
  

  const handleLoginWithGoogle = async () => {
    await loginWithRedirect({
      prompt: "login",
      appState: {
        returnTo: "/home",
      },
    });
  };
  const initialValues: FormValues = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialValues);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

    const inputName = e.target.name;
    const inputValue = e.target.value;
    
    setUser({...user, [inputName]: inputValue })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(getUserResource(user));
    setUser(initialValues)
  };
  return (
    <div className={style['form-container']}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        
        <Form className={style["form-login"]} onChange = {handleChange} onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <label htmlFor="email" className={style["form__label"]}>
            Email
          </label>
          <Field 
          name="email" 
          type="text" 
          className={style["form__input"]}  
          />
        
          <ErrorMessage
            name="email"
            component="span"
            className={style["form__error"]}
          />

          <label htmlFor="password" className={style["form__label"]}>
            Password
          </label>
          <Field
            name="password"
            type="password"
            className={style["form__input"]}
           
          />

          <ErrorMessage
            name="password"
            component="span"
            className={style["form__error"]}
          />
          <Link to={"restore"} className={style["restore"]}>
            <span>Forgot pasword?</span>
          </Link>
          <button type="submit" className={style["login-btn"]}>
            Sign in
          </button>
          
          <div className={style["create-reference"]}>
            <span>No account?</span>
            <Link to={'register'}>
              <span className={style['link-create']}> Create One</span>
            </Link>
          </div>
          <button type="button" className={style["login-google-btn"]} onClick={handleLoginWithGoogle}>
            <FontAwesomeIcon icon={faGoogle}/>
             Sign in with Google
          </button>
        </Form>
      </Formik>
      <div className={style['aside-background']}>
        
      </div>
    </div>
  );
}
