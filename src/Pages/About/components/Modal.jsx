import React from 'react'

function Modal(props) {
    

    const CloseModal = () => {
        props.view(i => false);
    };

    return (
        <div className='show-image flex justify-center items-center fixed top-0 left-0 z-10 w-full h-full bg-slate-500 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-40'
            onClick={CloseModal}>
                <div className='flex justify-center items-center w-full mx-2 md:mx-0 md:w-6/12 md:h-6/12 relative'>
                    <LazyLoadImage src={props.certificate} className='h-480' alt="Certificate Image" effect='blur'/>
                </div>
            </div>
    )
}

export default Modal
