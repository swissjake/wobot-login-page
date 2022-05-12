import Login from '../../components/login/Login'
import Nav from '../../components/navbar/Nav'
import styles from './Login.module.css'

const LoginPage = () => {
  return (
   <div className={styles.container}>
        <Nav />
        <Login />
   </div>
  )
}

export default LoginPage