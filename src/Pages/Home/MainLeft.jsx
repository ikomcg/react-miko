import React from 'react'
import { Link } from 'react-router-dom'

const MainLeft = () => {
    
    return (
        <div className='left-home  px-8 w-1/2'>
            <hr className='text-bgviol h-1.5 w-1/4 bg-bgviol' />
            <div className='my-10'>
                <h2 className='text-5xl font-extrabold'>Hello, I'm Miko <br/> Future <span className='text-bgviol' >Web Developer</span></h2>
                <p className='text-xl my-10 font-semibold'>
                    I am a motivated Junior Web Developer that has an experience in developing projects that solves specific problem.
                </p>
            </div>
            <div className='btn-home flex items-center justify-center'>
                <button>
                    <Link to='/project'>My Projects</Link>
                </button>
                <button className='shadow-md'>
                    <Link to='/contact'>Contact me</Link>
                </button>
            </div>       
        </div>
    )
}

export default MainLeft