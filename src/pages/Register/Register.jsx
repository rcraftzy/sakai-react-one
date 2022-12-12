import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { useUI } from '../../context/ConfigProvider/ConfigProvider'
import { Link } from 'react-router-dom'

const Register = () => {
  const { layoutColorMode } = useUI()

  const header = <h6>Pick a password</h6>

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
            className='flex justify-content-center'
          />
          <h5 className='flex justify-content-center'>Crear una nueva cuenta</h5>
        </div>
        <p>
          ¿Ya tienes una cuenta? <Link to='/login'>Iniciar sesión</Link>
        </p>
        <div className='field'>
          <label htmlFor='mail'>Nombre</label>
          <InputText id='mail' type='text' />
        </div>
        <div className='field'>
          <label htmlFor='mail'>Apellido</label>
          <InputText id='mail' type='text' />
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
            promptLabel='Ingresa la contraseña'
            mediumLabel='Medio'
            strongLabel='Fuerte'
            weakLabel='Debil'
          />
        </div>
        <Button label='Crear cuenta' />
      </div>
    </div>
  )
}
export default Register
