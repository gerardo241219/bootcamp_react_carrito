import '../assets/css/App.css'
import iconUser from '../assets/images/perfil-del-usuario.png'

function LoginPage() {

  return (
    <>
      <div className='container'>
        <h1>Log In</h1>
        <img src={iconUser} alt="" />
        <form>
          <input type="email" name='' placeholder='Email' />
          <input type="password" name='' placeholder='Contrañeda' />
          <button type='submit'>Iniciar sesión</button>
        </form>
        <p>Sing up <a href="/register">Here</a></p>
      </div>
    </>
  )
}

export default LoginPage
