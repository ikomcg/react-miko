import React from 'react'

function Card(prop) {

    const {title, span1, span2, description, Icons} = prop
    return (
        <div className='card-experience flex justify-center w-1/3'>
            <div className="card shadow-2md w-95">
                <Icons className='text-bgviol text-3xl'/>
                <div className='my-5'>
                    <h4 className='font-bold text-xl '>
                        {title}
                    </h4>
                    <span className='font-normal text-lg'>
                        {span1}
                    </span>
                    <br />
                    <span className='font-normal text-sm'>
                        {span2}
                    </span>
                </div>            
                    <p className='fonts-medium text-lg'>
                        {description}
                    </p>
            </div>
        </div>
        
    )
}

export default Card
