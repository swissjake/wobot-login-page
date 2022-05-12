import React from 'react'
import logo from '../../assets/logo.svg'

const Nav = () => {
  return (
    <nav className='fixed md:sticky z-50 top-0 '>
        <div className=' pl-[30px] md:pl-[60px]  pt-[30px] md:pt-[60px]'>
            <img className='w-[160px] h-[36.02px] ' src={logo} alt="/" />
        </div>
    </nav>
  )
}

export default Nav