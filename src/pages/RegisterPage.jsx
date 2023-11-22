import '../assets/css/App.css'
import iconRegister from '../assets/images/ajuste.png'

function RegisterPage() {

  return (
    <>
      <div className='container'>
        <h1>Sing up</h1>
        <img src={iconRegister} alt="" />
        <form>
          <input type="email" name='' placeholder='Email' />
          <input type="text" name='' placeholder='Nombre' />
          <input type="text" name='' placeholder='Apellido' />
          <input type="text" name='' placeholder='Direccion' />
          <input type="password" name='' placeholder='Contrañeda' />
          <button type='submit'>Register</button>
        </form>
        <p>Log in <a href="/">Here</a></p>
      </div>
    </>
  )
}

export default RegisterPage
