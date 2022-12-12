import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { useUI } from '../../context/ConfigProvider/ConfigProvider'
import { Link } from 'react-router-dom'
import { Password } from 'primereact/password'

const Login = () => {
  const { layoutColorMode } = useUI()
  return (
    <div className='bg-container'>
      <div className='card p-fluid'>
        <div className='p-fluid'>
          <img
            src={
              layoutColorMode === 'light'
                ? 'assets/layout/images/logo-dark.svg'
                : 'assets/layout/images/logo-white.svg'
            }
            alt='logo'
          />
          <h3>Welcome!</h3>
          <h5>Log in for continue</h5>
          <p>
            ¿No tienes una cuenta? <Link to='/register'>Crear una cuenta</Link>
          </p>
          <br />
        </div>
        <div className='field'>
          <label htmlFor='mail'>E-mail</label>
          <InputText id='mail' type='text' />
        </div>
        <div className='field'>
          <label htmlFor='password'>Contraseña</label>
          <Password
            id='password'
            toggleMask
            feedback={false}
          />
        </div>
        <Button label='Ingresar' />
      </div>
    </div>
  )
}
export default Login
