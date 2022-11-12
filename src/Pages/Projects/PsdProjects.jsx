
import tanatos from '../../images/project/psd/tanatos.png'
import uranos from '../../images/project/psd/uranos.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { GoArrowSmallRight } from 'react-icons/go';


const PSD_projects = [
    {id: 1, img: uranos, title: 'Uranos', Projetlink:'https://uranusph.tk/'},

    {id: 2, img: tanatos, title:'Tantos', Projetlink:'https://tanatosph.ml/'}
]

const PsdProjects = () => {

    return (
        PSD_projects.map((items) => 
        <div key={items.id} className='psd-card w-1/3 '>
            <div className='shadow-2md mx-auto'>
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
                                <a href={items.Projetlink} rel="noreferrer" target='_blank' className='text-bgviol '>
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
export default PsdProjects