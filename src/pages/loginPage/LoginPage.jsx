import Login from '../../components/login/Login'
import Nav from '../../components/navbar/Nav'
import Terms from '../../components/terms/Terms'
import styles from './Login.module.css'

const LoginPage = () => {
  return (
   <div className={`${styles.container}`}>
     <div>
        <Nav />
        <Login />
      </div>
        <div className=' mt-[121px] mb-[57px]'><Terms /></div>
        
   </div>
  )
}

export default LoginPage