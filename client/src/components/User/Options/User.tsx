import { FormEvent, useState } from 'react';
import { changeUserSettings } from '../../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import style from '../../../style/User/Options/UserSettings.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../../Login_and_Register/validations/validationRegister";

export default function User() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const [UserSettings, setUserSettings] = useState({
    nickname: user.nickname,
    image: user.image || '',
    age: user.age,
    password: '',
    confirmPassword: ''
  })
  // const [errorForm, setErrorForm] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newUserSettings = {...UserSettings};
    const inputName = e.target.name;
    const inputValue = e.target.value;

    newUserSettings = {...newUserSettings, [inputName]: inputValue}
    setUserSettings(newUserSettings);
    
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(changeUserSettings(user.id, UserSettings)).then(()=> alert('Settings saved successfully'))
 
  }
  return (
    <>
    <h1 className={style['user-settings-title']}>User settings</h1>
    <Formik
      initialValues={UserSettings}
     onSubmit={handleSubmit}
     validationSchema={validationSchema}>

      <Form className={style['form-user-settings']} onChange={handleChange} onSubmit={handleSubmit}>

        <div  className={style['form-user-option']}>
          <label>Nickname</label>
          <Field type={'text'} placeholder={'Nickname...'}
          value={UserSettings.nickname} name='nickname'
         />
        </div>
        <ErrorMessage
          name="nickname"
          component="span"
          className={style["form__error"]}
        />
 
        <div className={style['form-user-option']}>
          <label>Image</label>
          <Field type={'url'} placeholder={'Url image...'}
          value={UserSettings.image} name='image'
          />
        </div>

        <div className={style['form-user-option']}>
          <label>Age</label>
          <Field type={'number'} placeholder={'Your age...'}
          value={UserSettings.age} name='age'
          />  
        </div>
        <ErrorMessage
            name="age"
            component="span"
            className={style["form__error"]}
        />

        <div className={style['form-user-option']}>
          <label>Change password</label>
          <Field type={'password'} placeholder={'Password...'}
          value={UserSettings.password} name='password'
          />
        </div>
        <ErrorMessage
            name="password"
            type="password"
            className={style["form__input"]}
          />

        <div className={style['form-user-option']}>
          <label>Confirm password</label>
          <Field type={'password'} placeholder={'Confirm password...'}
          value={UserSettings.confirmPassword} name='confirmPassword'
          />
        </div>
        <ErrorMessage
            name="confirmPassword"
            type="password"
            className={style["form__input"]}
          />

      <button type='submit' className={style['save-changes-btn']}>Save settings</button>
      </Form>
    </Formik>
    

    
  </>
  );
}
