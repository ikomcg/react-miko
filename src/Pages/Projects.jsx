import React from 'react'
import SideCard from './components/SideCard'
import {Myprojects, PsdProjects } from './Projects/MyProjects'
import {hr} from './Home/Projects/Projects'

const Project = () => {
    return (
        <section>
        <SideCard/>
        <div className='my-32'>
            <div className="card-projects mb-20 px-8">
                <div className=' mb-20'>
                    {hr}
                    <h3>BootCamp</h3>
                </div>
                <div>
                    <Myprojects/>
                </div>
            </div>
            <div className="psd-projects px-8"> 
                <div className=' mb-20'>
                    {hr}
                    <h3>PSD</h3>
                </div>
                <div className='flex flex-wrap flex-wrap'>
                    <PsdProjects/>
                </div>
            </div>
        </div>
        
    </section>
    )
}

export default Project
