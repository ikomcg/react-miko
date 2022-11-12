import React from 'react'
// import Myprojects from './Projects/MyProjects';

export const hr = <hr className='text-bgviol h-1.5 w-40 bg-bgviol' />

const  Projects = () =>{
    return (
        <div className='px-8 mb-40'>
            <div>
                {hr}
                <h3>My Projects</h3>
            </div>
            <div className="projects flex flex-col my-20">
                {/* <Myprojects/> */}
            </div>
        </div>
    )
}

export default Projects
