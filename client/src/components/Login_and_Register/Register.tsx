import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "../../style/Login_and_Register/Register.module.css";
import { Link } from "react-router-dom";
import validationSchema from "./validations/validationRegister";

export default function Register(): JSX.Element {
  interface FormValues {
    nickname: string;
    age: number;
    email: string;
    password: string;
    changePasword: string;
  }
  const initialValues: FormValues = {
    nickname: "",
    age: 0,
    email: "",
    password: "",
    changePasword: "",
  };

  const onSubmit = (values: FormValues) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };
  return (
    <div>
      <h2>Create Account</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={style["form"]}>
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
          <button type="submit" className={style["btn"]}>
            Create Account
          </button>
          <p>
            Already have an account?{" "}
            <Link to={"login"} className={style["link"]}>
              <span>Log In</span>
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
