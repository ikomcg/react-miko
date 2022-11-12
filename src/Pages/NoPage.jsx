import React from 'react'
import { Link } from 'react-router-dom'
import TopRight from './Home/MainRight'

const NoPage = () => {
    return (
        <section className='no-page flex align-center justify-center'>
            <div className='w-3/4 text-center'>
                <div className='page404 flex flex-row items-center justify-center'> 
                    <span>4</span>
                        <TopRight />
                    <span>4</span>
                </div>
               <span className='text-2xl font-semibold'> OOPS, SORRY WE CAN'T FIND THAT PAGE!</span>
                <br />
                <hr className='text-bgviol  bg-bgviol' />
                <button className='bg-bgviol py-1 px-5 rounded shadow-2md my-4 text-white font-bold text-normal'>
                    <Link to='/'>
                        Home
                    </Link>
                </button>
            </div>
        </section>
    )
}

export default NoPage
