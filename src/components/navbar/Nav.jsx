import React from 'react'
import logo from '../../assets/logo.svg'

const Nav = () => {
  return (
<section className=''>
    <nav className='fixed md:static z-20 top-0 '>
        <div className=' pl-[30px] md:pl-[60px]  pt-[30px] md:pt-[60px]'>
            <img className='w-[160px] h-[36.02px] ' src={logo} alt="/" />
        </div>
    </nav>
</section>
  )
}

export default Nav