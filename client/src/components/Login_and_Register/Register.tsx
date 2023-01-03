import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "../../style/Login_and_Register/Register.module.css";
import { Link } from "react-router-dom";
import validationSchema from "./validations/validationRegister";
import { useAppDispatch } from "../../redux/hooks";
import { registerUser } from "../../redux/actions";
import sideAnimeImg from '../../img/animeImg1.png'
interface FormValues {
  nickname: string;
  age: number;
  email: string;
  password: string;
  changePasword: string;
}
export default function Register(): JSX.Element {
  const dispatch = useAppDispatch();

  const initialValues: FormValues = {
    nickname: "",
    age: 0,
    email: "",
    password: "",
    changePasword: "",
  };

  const [user, setUser] = useState(initialValues);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {

    const inputName = e.target.name;
    const inputValue = e.target.value;
    
    setUser({...user, [inputName]: inputValue })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(user));
    alert('Check your email for account verification!')
    setUser({
      nickname: "",
      age: 0,
      email: "",
      password: "",
      changePasword: "",
    }
  )
  };
  return (
    <div className={style['form-signup-container']}>
     
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={style["form-signup"]} onChange={handleChange} onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <label htmlFor="nickname" className={style["form__label"]}>
            Nickname
          </label>
          <Field name="nickname" type="text" className={style["form__input"]} />

          <ErrorMessage
            name="nickname"
            component="span"
            className={style["form__error"]}
          />

          <label htmlFor="age" className={style["form__label"]}>
            Age
          </label>
          <Field name="age" type="number" className={style["form__input"]} />

          <ErrorMessage
            name="age"
            component="span"
            className={style["form__error"]}
          />

          <label htmlFor="email" className={style["form__label"]}>
            Email
          </label>
          <Field name="email" type="text" className={style["form__input"]} />

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

          <label htmlFor="changepassword" className={style["form__label"]}>
            Confirm Password
          </label>
          <Field
            name="changepassword"
            type="password"
            className={style["form__input"]}
          />

          <ErrorMessage
            name="changepassword"
            component="span"
            className={style["form__error"]}
          />
          <button type="submit" className={style["signup-btn"]}>
            Sign up
          </button>
          <p style={{marginBottom: '2em'}}> 
            Already have an account?{" "}
            <Link to={"login"} className={style["link"]}>
              <span>Log In</span>
            </Link>
          </p>
          
        </Form>
      
      </Formik>
      <div className={style['aside-background']}>
          <img src={sideAnimeImg} alt="anime img" className={style['anime-img']}/>
      </div>
    </div>
  );
}
