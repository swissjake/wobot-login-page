import React from 'react'
import loginLogo from '../../assets/loginLogo.svg'
import styles from './Login.module.css'
import Form from '../form/Form'

const Login = () => {
  return (
    <section className='max-w-[1440px] mx-auto pb-[197px] mt-[200px] md:mt-[93px]'>
        

        {/* Login container */}
        <div className={`${styles.loginContainer} bg-white w-[355px] md:w-[560px]  rounded-[15px] mx-auto md:h-[611px]`}>
          <div className='text-center'>
              <img className='w-[51px] mx-auto h-[48px] inline-block mt-[40px] ' src={loginLogo} alt="/" />
              <p className='w-[378px] h-[60px] mt-[24px] mx-auto font-roboto font-medium text-[26px] leading-[30px] text-[#212121] tracking-wider'>It’s a delight to have you onboard</p>
            <div className=' w-[373px] md:w-[378px] mx-auto h-[37px] mt-[16px] font-roboto font-normal text-[#545454] text-[14px] leading-[18px]'>
              <p>Help us know you better.</p>
              <p>(This is how we optimize Wobot as per your business needs)</p>
            </div>
          </div>
          <Form/>
        </div>
       
    </section>
  )
}

export default Login