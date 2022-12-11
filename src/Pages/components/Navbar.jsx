import React from 'react'
import { Link} from 'react-router-dom'

const navlink = [
    {id:1, link: '/', nav: 'Home'},
    {id:2, link: '/about', nav: 'About'},
    {id:3, link: '/project', nav: 'Project'},
    {id:4, link: '/skill', nav: 'Skill'},
]

const Navbar = () => {
    return (
        <>
        <nav>
            <ul className='flex gap-10 text-xl font-semibold'>
                {
                    navlink.map(nav => 
                        <li key={nav.id} >
                            <Link to={nav.link} className='block cursor-pointer hover:bg-bgviol/20 p-1 px-5 rounded hover:text-bgviol'>{nav.nav}</Link>
                        </li>
                    )
                }
            </ul>
        </nav>
        </>       
    )
}
export default Navbar