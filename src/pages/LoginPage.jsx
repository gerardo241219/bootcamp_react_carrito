import {useState} from 'react'
import '../assets/css/App.css'
import iconUser from '../assets/images/perfil-del-usuario.png'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [spinner, setSpinner] = useState(false);


  const login = (e) => { // DECLARACION - FUNCION DE FLECHA
    e.preventDefault();

    if(validateInput()) { // VALIDA QUE LA FUNCION RETORNE TRUE
      setSpinner(true);

      setTimeout(() => {
        setSpinner(false);
      }, 3000);
    }
  }

  const validateInput = () => {
    if(email === "") {
      alert("El campo email es requerido");
      return false;
    }

    if(password === "") {
      alert("El campo password es requerido");
      return false;
    }

    return true;
  }

  return (
    <>
      <div className='container'>
        <h1>Log In</h1>
        <img src={iconUser} alt="" />
        <form>
          <input type="email" name='' placeholder='Email' onChange={e => setEmail(e.target.value)  } />
          <input type="password" name='' placeholder='Contrañeda' onChange={e => setPassword(e.target.value)  } />
          {
            spinner ? 
              <div className="lds-hourglass"></div> : 
                <button onClick={(e) => login(e)}>Iniciar sesión</button>
          }
        </form>
        <p>Sing up <a href="/register">Here</a></p>
      </div>
    </>
  )
}

export default LoginPage
