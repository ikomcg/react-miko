import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { HiMenu } from 'react-icons/hi';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { useState } from 'react';



const  Header = () => {
    const style = {
       display: 'fixed'
      };

    const [menu, setMenu] = useState(false)
    const body =  document.querySelector('body')

    useEffect(() => {
        if(menu){
           body.style.overflowY = 'hidden'
        }
        else{
           body.style.overflowY = 'auto'
        }
    }, [menu])

    function showMenu(){
            setMenu(val => !val)
    }
    document.addEventListener("mousedown", () => {
        if(menu){
            setMenu(false)
        }
    })

    let menu_class = menu ? 'active-menu' : '';

    return (
        <header className='flex flex-nowrap justify-between p-8 items-center text-viol'> 
            <h1 className='w-fit font-extrabold text-2xl'>Miko.</h1>
            <div className={`nav-bar ${menu_class} flex flex-nowrap justify-between w-70`}>
                <Navbar/>
                <button className='btn-contact bg-bgviol p-2 pr-3 pl-3 w-fit text-white rounded-lg hover:scale-105'>
                    <Link to='/contact'>Contact</Link>
                </button>
            </div>
            <button onClick={showMenu} className='menu-mobile outline-none text-bgviol'>
                {menu ? <AiOutlineCloseCircle className='text-3xl' /> : <HiMenu className='text-3xl'/>}
            </button>
            
        </header>
    )
}

export default Header
