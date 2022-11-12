import React, { useEffect, useRef } from 'react'
import {hr} from '../Home/Projects/Projects'
import about from  '../../images/about/IMG-6346755e366ad9.97123377.jpg'
import skill from '../../images/skill/me2.gif'
import working from '../../images/project/Freelance-jobs.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';


const SideCard = () => {
 
    const heading = useRef()
    const paragraph = useRef();
    const btn = useRef();
    const image = useRef();
    

    useEffect(()=>{
        const loc_url = window.location.pathname;

        switch(loc_url){
            case '/about':
                heading.current = "about me";
                paragraph.current = "I am a motivated Junior Web Developer that has experience in creating projects that address specific issues such as the Learning Management System, presently pursuing my long-term career goal is to become a Web Developer, and always eager to learn about coding and I'am currently studying at Balagtas STI."
                btn.curren = <div className='flex item-center justify-center mt-10'>
                <a href='https://drive.google.com/file/d/10Y01DIfvM5Bm-NGq-v2Csu9ul2EyMJJI/view?usp=share_link' className='bg-bgviol text-white font-medium text-lg py-1 px-5 rounded-lg hover:scale-105 hover:cursor-pointer' rel="noreferrer" target='_blank'>my resume</a>
            </div>;
                image.current = about;
                break;
            case '/project':
                heading.current = "my projects";
                paragraph.current = "This are some my projects that I built while I'm on bootcamp and also using psd template this is was my first time I build website while practice and study the HTML CSS and JS, while I'm in bootcamp my skill has imporve and I embed other tools that will help me to achieve my desired project."
                image.current =working;
                break;
            case '/skill':
                heading.current = "my skills";
                paragraph.current = "The tech stacks listed below are what I've been using to build real-world projects. HTML, CSS, JavaScript, and PHP are used in web development. Along with other tools that will enable me to complete my desired project.";
                image.current = skill ;
                break;
            default:
                heading.current = null;
                paragraph.current = null ;
                btn.current = null;
                image.current = null; 
            
        }


    },[])

    return (
        <main className='about px-8 flex felx-row flex-nowrap justify-end items-center'>
            <div className='flex flex-col flex-nowrap shadow-md w-2/4 py-10 px-10 relative left-5 bg-white rounded-xl ml-5 z-10'>
                {hr}
                <h1 className='text-5xl font-extrabold my-8'>{heading.current}</h1>
                <p className='text-lg'>{paragraph.current}</p>
                {btn.current}
            </div>
            <div className='image overflow-hidden'>
                <LazyLoadImage src={image.current} alt="" effect='blur'/>
            </div>
        </main>
    )
}

export default SideCard
