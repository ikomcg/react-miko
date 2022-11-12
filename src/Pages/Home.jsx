import React from 'react'
import MainLeft from './Home/MainLeft'
import MainRight from './Home/MainRight'

// import Projects from './home/projects/Projects'
// import Forms from './contact/Contact'

const Home = () => {
    return (
        <div>
            <main className='main-home flex justify-between items-center mb-32'>
                <MainLeft/>
                <MainRight/>
            </main>
            {/* <Projects/>
            <Forms/> */}
        </div>
         
    )
}

export default Home
