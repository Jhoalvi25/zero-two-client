import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "../../style/Login_and_Register/Login.module.css";
import { Link } from "react-router-dom";
import validationSchema from "./validations/validationLogin";

export default function Login(): JSX.Element {
  interface FormValues {
    email: string;
    password: string;
  }
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: FormValues) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };
  return (
    <div>
      <h2>Log In</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={style["form"]}>
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
          <Link to={"restore"} className={style["restore"]}>
            <span>Forgot pasword?</span>
          </Link>
          <button type="submit" className={style["btn"]}>
            Log In
          </button>
          <p>
            No acount?{" "}
            <Link to={"register"} className={style["link"]}>
              <span>Create One</span>
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
