import React, { useEffect, useRef } from 'react'

const Contact = () =>{
    const bol = useRef(false)

    useEffect(()=> {

        const location  = window.location.pathname;

        switch(location){
            case '/contact':
                bol.current = true
                break;
            case '/home':
                bol.current = false
                break;
            default:
                bol.current = true
        }

    },[])
    return (
        <div className='contact-home flex flex-row justify-between px-8 mb-40'>
            <div className="left-form w-1/2 flex flex-col pr-10">
                <div>
                  
                    <h3 className='font-black my-10'>
                    let's talk about your thoughts
                    </h3>
                    <p className='font-medium'>
                    This is my contacts and you can reach me out in many ways. You can  direct message me if you want, book a meeting so we can talk about your thoughts
                    </p>
                </div>
                
            </div>
            <div className="right-form w-1/2 rounded-xl shadow-2md p-10">
          
            </div>
        </div>
    )
}

export default Contact
