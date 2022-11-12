import React from 'react'
import {hr} from '../Home/Projects/Projects'
import Card from './components/Card'
import {RiComputerFill} from 'react-icons/ri'
import {FaUserGraduate} from 'react-icons/fa'
import {MdOutlineDeveloperMode} from 'react-icons/md'

function Experience() {
    return (
        <section className="experience my-32 ">
            <div className="px-8">
                <div>
                    {hr}
                    <h3>my Life</h3>
                </div>
                <div className='card-row my-20'>
                    <div className="card-life flex flex-row flex-wrap">
                        <Card Icons={FaUserGraduate} title='Student' span1='Balagtas National Agricultural High School' span2='June-2018 | March-2020' description='ICT - Computer System Servicing. I am one of the top student in our class and upon graduation, I got With Honors'/>

                        <Card Icons={RiComputerFill} title='Student' span1='STI College Balagtas' span2='June-2020 | Present' description="I'm a scholar who is still pursuing a bachelor's degree in information and technology."/>

                        <Card Icons={MdOutlineDeveloperMode} title='Trainee' span1='KodeGo Bootcamp' span2='June-2022 | October-2022' description='The leader of the team that won best Mini Project 2. I improved my web development abilities, enabling me to finish projects on schedule.'/>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default Experience
