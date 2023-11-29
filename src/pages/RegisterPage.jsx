import { useState, useEffect } from 'react'
import '../assets/css/App.css'
import iconRegister from '../assets/images/ajuste.png'

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const users = localStorage.getItem("users");

    if (users) {
      setUsers(JSON.parse(users));
      alert("Entro");
    }
  }, []);

  const login = (e) => { // DECLARACION - FUNCION DE FLECHA
    e.preventDefault();

    if (validateInput()) { // VALIDA QUE LA FUNCION RETORNE TRUE
      setSpinner(true);

      const objUser = {
        correo: email,
        nombre: name,
        apellido: lastName,
        direccion: address,
        password: password
      };

      setUsers([...users, objUser]);

      setTimeout(() => {
        setSpinner(false);
        console.log(users)
        localStorage.setItem("users", JSON.stringify(users));
      }, 3000);
    }
  }

  const validateInput = () => {
    if (email === "") {
      alert("El campo email es requerido");
      return false;
    }

    if (name === "") {
      alert("El campo name es requerido");
      return false;
    }

    if (lastName === "") {
      alert("El campo Last Name es requerido");
      return false;
    }

    if (address === "") {
      alert("El campo Address es requerido");
      return false;
    }

    if (password === "") {
      alert("El campo Password es requerido");
      return false;
    }

    return true;
  }

  return (
    <>
      <div className='container'>
        <h1>Sing up</h1>
        <img src={iconRegister} alt="" />
        <form>
          <input type="email" name='' placeholder='Email' onChange={e => setEmail(e.target.value)} />
          <input type="text" name='' placeholder='Nombre' onChange={e => setName(e.target.value)} />
          <input type="text" name='' placeholder='Apellido' onChange={e => setLastName(e.target.value)} />
          <input type="text" name='' placeholder='Direccion' onChange={e => setAddress(e.target.value)} />
          <input type="password" name='' placeholder='Contrañeda' onChange={e => setPassword(e.target.value)} />
          {
            spinner ?
              <div className="lds-hourglass"></div> :
              <button onClick={(e) => login(e)}>Register</button>
          }
        </form>
        <p>Log in <a href="/">Here</a></p>
      </div>
    </>
  )
}

export default RegisterPage
