import React from 'react'
import style from './NavBar.module.css'


function NavBar() {
  return (
  <div className={style.navbar}>
    <div className={style.active} ><i className='fa fa-fw fa-home'></i> Home</div>
    <div ><i className='fa fa-fw fa-search'></i> Search</div>
    <div ><i className='fa fa-fw fa-envelope'></i> Contact</div>
    <div ><i className='fa fa-fw fa-user'></i> Login</div>
  </div>
  )
}

export default NavBar