import React, { useState } from 'react'
import {hr} from '../Home/Projects/Projects'
import oracle from '../../images/about/1.png'
import network from '../../images/about/2.png'
import sap from '../../images/about/3.png'
import Modal from './components/Modal'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const images = [
    {id: 1, img: oracle},
    {id: 2, img: network},
    {id: 3, img: sap}
] 
const Certificates = () =>{

    const [showImg, setShowImg] = useState(false);
    const [img, setImg] = useState(null);

    const OpenModal = (id) => {
        const image = images.find(img =>  img.id === id)
        setImg(image.img)
        setShowImg(i => true);   
    };

    return (
        <section className='certificates px-8 '>
            {hr}
            <h3>Certifications</h3>
            <div className='row-certificate my-20 flex flex-wrap'>
                {images.map((items, index)=> (
                    <div key={index} >
                        <button className='w-11/12' onClick={() => {OpenModal(items.id);}}>    
                            <LazyLoadImage src={items.img} alt="" effect='blur'/>
                        </button>
                    </div>
                ))}
            </div>
            {showImg && <Modal images={img} view={setShowImg}/>}
        </section>
    )
}

export default Certificates
