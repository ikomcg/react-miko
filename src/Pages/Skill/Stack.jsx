import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Stack(props) {
    const {skill, heading} = props
    return (
       
        <div>
            <div className='flex items-center justify-center'>
                <h3 className='skill-heading w-fit'>{heading}</h3>
            </div>
            <div className="card-row flex flex-wrap my-20">
            { skill.map((items, index) => (
                <div key={index}  className="card-row flex  w-1/4 bg-red mb-3 hover:">
                    <a href={items.link} rel="noreferrer" className='shadow-2md' target="_blank">
                        <div className="content flex gap-3 items-center">
                        <LazyLoadImage src={items.image} alt="" effect='blur'/>
                        
                            <h4 className='font-bold '>{items.name}</h4>
                        </div>
                    </a>
                   
                 </div>
            ))}
            </div>
        </div>
    )
}

export default Stack
