import { useEffect } from 'react';
import { useForm, useAuthStore } from '../../hooks/';
import Swal  from 'sweetalert2';
import './LoginPage.css';

const loginFormFields = {
  loginEmail:'',
  loginPassword:'',
}

const registerFormFields = {
  registerName:'',
  registerEmail:'',
  registerPassword:'',
  registerPassword2:'',
}

export const LoginPage = () => {

  const { startLogin, errorMessage } = useAuthStore();

  const { loginEmail, loginPassword, onInputChange: onLoingInputChange } = useForm( loginFormFields );
  const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange: onRegisterInputChange } = useForm( registerFormFields)

  const loginSubmit = async( event ) =>{
    event.preventDefault();
    startLogin({email: loginEmail, password:loginPassword});

  }

  const registeSubmit = (event) =>{
    event.preventDefault();
    console.log('====================================');
    console.log({ registerName, registerEmail, registerPassword, registerPassword2 });
    console.log('====================================');
  }

  useEffect(() => {
    if( errorMessage !== undefined){
      Swal.fire('Error en login', errorMessage, 'error' )
    }

  }, [errorMessage])
  

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Login</h3>
          <form onSubmit={ loginSubmit }>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name='loginEmail'
                value={ loginEmail }
                onChange = {onLoingInputChange }
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name='loginPassword'
                value={ loginPassword }
                onChange = {onLoingInputChange }
              />
            </div>
            <div className="d-grid gap-2">
              <input
                type="submit"
                className="btnSubmit"
                value="Login"
              />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={ registeSubmit }>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name='registerName'
                value={ registerName }
                onChange={ onRegisterInputChange }
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name='registerEmail'
                value={ registerEmail }
                onChange={ onRegisterInputChange }
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name='registerPassword'
                value={ registerPassword }
                onChange={ onRegisterInputChange }
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name='registerPassword2'
                value={ registerPassword2 }
                onChange={ onRegisterInputChange }
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="submit"
                className="btnSubmit"
                value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}