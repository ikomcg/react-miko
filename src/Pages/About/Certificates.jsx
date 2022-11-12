import React, { useState } from 'react'
import {hr} from '../Home/Projects/Projects'
import oracle from '../../images/about/1.png'
import network from '../../images/about/2.png'
import sap from '../../images/about/3.png'
import Modal from './components/Modal'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const images = [
    {id: 1, imagesCertificate: oracle},
    {id: 2, imagesCertificate: network},
    {id: 3, imagesCertificate: sap}
] 
const Certificates = () =>{

    const [showImg, setShowImg] = useState(false);
    const [certificate, setCertificate] = useState(null);

    const OpenModal = (id) => {
        const certificateModal = certificateModal.find(pic =>  pic.id === id)
        setCertificate(certificateModal.imagesCertificate)
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
                            <LazyLoadImage src={items.imagesCertificate} alt="" effect='blur'/>
                        </button>
                    </div>
                ))}
            </div>
            {showImg && <Modal certificate={certificate} view={setShowImg}/>}
        </section>
    )
}

export default Certificates
