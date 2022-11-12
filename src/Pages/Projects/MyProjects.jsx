import React, { useEffect, useState } from 'react'

import motoRC from '../../images/home/motorcwide.png'
import emed from '../../images/home/e-medlearning.png'
import kodego from '../../images/home/kodegoelms.png'

import tanatos from '../../images/project/psd/tanatos.png'
import uranos from '../../images/project/psd/uranos.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { GoArrowSmallRight } from 'react-icons/go';


const projects = [
    {img: motoRC, title: 'motoRC', description: 'Is an online motorcycle shop that   can find an enormous selection of gear, parts, and accessories, and   to help riders community in the Philippines', information: 'e-commerce', link: 'https://ikomcg.github.io/motorc/'},

    {img: emed, title:'e-MedLearning', description: 'Online medical sources provide general, easily understandable information  about symptoms, treatment options', information: 'Information & Education web site', link:'https://ikomcg.github.io/e-medlearning/'},

    {img: kodego, title: 'kodeGo learning Management System', description: 'Introducing the online and onsite Education at KodeGo Bootcamp. The kodeGo Bootcamp Learning Model is an educational framework to enable students to continue their studies, move up to the next level and graduate', information: 'Education Learning Management System' , link:'http://kodegoelms.ml'}
]

const PSD_projects = [
    {img: uranos, title: 'Uranos', link:'https://uranusph.tk/'},

    {img: tanatos, title:'Tantos', link:'https://tanatosph.ml/'}
]
export const Myprojects = () => {
    const [btn_Link, set_Link] = useState(false);
 

    useEffect(() =>{
        const URL = window.location.pathname
        switch(URL){
            case '/home':
                set_Link(val => val = false)
                break;
            case '/project':
                set_Link(val => val = true)
                break;
        }
        

    },[])

    return (
        projects.map((items, index) => 
        <div key={index} className='project-card flex flex-row mb-5 flex-nowrap items-start '>
            <div className="home-projects flex flex-col image-left p-2 overflow-hidden w-7/12" >
                <LazyLoadImage 
                 className='w-full' 
                 src={items.img} 
                 alt={items.title} 
                 effect="blur"
                />
                {
                    btn_Link? 
                    <a href={items.link} rel="noreferrer" target='_blank' className='bg-kodego font-bold rounded-xl  px-5 py-1.5 text-bgviol w-max hover:scale-105'>{items.title}</a>
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


export const PsdProjects = () => {

    return (
        PSD_projects.map((items, index) => 
        <div key={index} className='psd-card w-1/3 '>
            <div className='shadow-2md w-95 mx-auto'>
                <div className="flex flex-col image-left p-2 overflow-hidden w-full" >
                    <LazyLoadImage 
                    className='w-full'
                    src={items.img} 
                    alt={items.title} 
                    effect="blur"
                    />
                </div>
                <div className="flex flex-col items-center justify-between w-full p-2 mt-2 ">
                    <h4 className='font-bold text-2xl' >{items.title}</h4>
                    <div className='flex items-center justify-center my-2'>
                        <ul>
                            <li className='flex items-center justify-center underline'>
                                <a href={items.link} rel="noreferrer" target='_blank' className='text-bgviol '>
                                VIEW 
                                </a>
                                <GoArrowSmallRight className='text-xl text-bgviol'/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    )
}
