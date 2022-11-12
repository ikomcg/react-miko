import React from 'react'
import Certificates from './About/Certificates'
import Experience from './About/Experience'
import SideCard from './components/SideCard'

function About() {
    return (
        <section className='flex flex-col '>
            <SideCard/>
            <Experience/>
            <Certificates/>
        </section>
    )
}

export default About
 