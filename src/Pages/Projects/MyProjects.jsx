import React, { useState } from 'react'

import motoRC from '../../images/home/motorcwide.png'
import emed from '../../images/home/e-medlearning.png'
import kodego from '../../images/home/kodegoelms.png'
 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




const Myprojects = () => {
    const [btn_Link, set_Link] = useState(false);
    const projects = [
        {id: 1,  img: motoRC, title: 'motoRC', description: 'Is an online motorcycle shop that   can find an enormous selection of gear, parts, and accessories, and   to help riders community in the Philippines', information: 'e-commerce', Projetlink: 'https://ikomcg.github.io/motorc/'},
    
        {id: 2, img: emed, title:'e-MedLearning', description: 'Online medical sources provide general, easily understandable information  about symptoms, treatment options', information: 'Information & Education web site', Projetlink:'https://ikomcg.github.io/e-medlearning/'},
    
        {id: 3, img: kodego, title: 'kodeGo learning Management System', description: 'Introducing the online and onsite Education at KodeGo Bootcamp. The kodeGo Bootcamp Learning Model is an educational framework to enable students to continue their studies, move up to the next level and graduate', information: 'Education Learning Management System' , Projetlink:'http://kodegoelms.ml'}
    ]

    return (
        projects.map((items) => 
        <div key={items.id} className='project-card flex flex-row mb-5 flex-nowrap items-start'>
            <div className="home-projects flex flex-col image-left p-2 overflow-hidden w-7/12" >

                <LazyLoadImage 
                 className='w-full' 
                 src={items.img} 
                 alt={items.title} 
                 effect="blur"
                />
                {
                    btn_Link? 
                    <a href={items.Projetlink} rel="noreferrer" target='_blank' className='bg-kodego font-bold rounded-xl  px-5 py-1.5 text-bgviol w-max hover:scale-105'>{items.title}</a>
                    : <a href='https://kodego.ph/' rel="noreferrer" target='_blank' className='text-bgviol w-max hover:scale-105'>Kodego.ph</a>
                }
            </div>
            <div className="right-info w-9/12">
                <div>
                    <h4 className='font-bold' >{items.title}</h4>
                    <span>{items.information}</span>
                </div>
                <p className='font-medium'>{items.description}</p>
            </div>
        </div>
        )
    )
}
export default Myprojects;