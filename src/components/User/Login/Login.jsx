import React, { useState, useContext} from "react";
import {useHistory} from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from "components/UI/Button/Button";

import "./Login.css";

function initalState() {
  return {
    user: '',
    password: ''
  };
}

function login({user, password}){
  if(user === 'admin' && password === 'admin'){
    return { token: '1234'}
  }else{
    return {error: 'Usuario ou senha invalidos!'}
  }
}
const UserLogin = () => {

  const [values, setValues] = useState(initalState);
  const {setToken} = useContext(StoreContext);
  const history = useHistory();
  
  function onChange(event) {
    const { value, name } = event.target;
    
    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event){
    event.preventDefault();

    const {token} = login(values);

    if(token){
      setToken(token);
      return history.push('/');
    }

    setValues(initalState);
  }

  return (
    <form autoComplete="nope" onSubmit={onSubmit}>
      <div className="user-login">
        <h1 className="user-login__title">Acessar o Sistema</h1>
        <div className="form-group">
          <div className="row">
            <div className="col-md-12">
              <div className="user-login__form-control">
                <label htmlFor="user">Usuario</label>
                <input
                  id="user"
                  type="text"
                  name="user"
                  autoComplete="off"
                  onChange={onChange}
                  value={values.user}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-12">
              <div className="user-login__form-control">
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={values.password}
                />
              </div>
            </div>
          </div>
        </div>
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </div>
    </form>
  );
};

export default UserLogin;
