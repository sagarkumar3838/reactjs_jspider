import React from 'react'
import Logo from './navbar_component/Logo';
import Navlink from './navbar_component/Navlink';
import Input from './navbar_component/Input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='relative flex items-center justify-start mt-4 h-7 min-w-6xl p-6 border'>
     <div className='flex '>
     <Logo/>
     </div>

     <div >
     <Navlink/>
     </div>
     <div >
      <Input/>
     </div>
     <div className='ml-[9rem] gap-9 flex items-center justify-between'>
     <FontAwesomeIcon icon={faCartPlus}  size='md'/>
     <FontAwesomeIcon icon={faUserPlus} size='md' />
     </div>
    </div>
  )
}

export default Navbar
