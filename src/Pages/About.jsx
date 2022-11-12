import React from 'react'

import Experience from './About/Experience'
import SideCard from './components/SideCard'

function About() {
    return (
        <section className='flex flex-col '>
            <SideCard/>
            <Experience/>
        </section>
    )
}

export default About
 