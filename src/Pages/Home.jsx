import React from 'react'
import Contact from 'c:/Users/miko/my-react-porfolio/public/Contact/Contact'
import MainLeft from './Home/MainLeft'
import MainRight from './Home/MainRight'
import Projects from './Home/Projects/Projects'


const Home = () => {
    return (
        <div>
            <main className='main-home flex justify-between items-center mb-32'>
                <MainLeft/>
                <MainRight/>
            </main>
            <Projects/>
            <Contact/>
        </div>
         
    )
}

export default Home
