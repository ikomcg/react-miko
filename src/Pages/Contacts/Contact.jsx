import React, { useEffect, useRef } from 'react'

const Contact = () =>{

    const bol = useRef(false);

    useEffect(() =>{
       
        const loc = window.location.pathname
        switch(loc) {
            case '/home':
                bol.current = false
                break;
            case '/project':
                bol.current = true
                break;
            default:
                bol.current = false
        }
        

    },[])
    
    return (
        <div className='contact-home flex flex-row justify-between px-8 mb-40'>
            <div className="left-form w-1/2 flex flex-col pr-10">
                <div>
                    {hr}
                    <h3 className='font-black my-10 '>
                    let's talk about your thoughts
                    </h3>
                    <p className='fonts-medium'>
                    This is my contacts and you can reach me out in many ways. You can  direct message me if you want, book a meeting so we can talk about your thoughts
                    </p>
                </div>
                {bol &&
                    <div className='flex flex-col justify-center mt-10'>
                        <ul className='flex flex-col '>
                            <li className='shadow-2md'>
                                <img src={gmail} alt="" />
                                mikogurrobat0@gmail.com
                            </li>
                            <li className='shadow-2md'>
                                <CgPhone className='text-2xl text-bgviol'/>
                                09269244053
                            </li>
                        </ul>
                        <div className='book-meeting mt-20'>
                            <ul>
                               <li className='hover:scale-105'>
                                    <a href="https://calendly.com/mikogurrobat0" className=''>
                                        <img src={schedule} alt="" />
                                        Book a Meeting
                                    </a>
                                </li>    
                            </ul>
                        </div>
                    </div>
                }
            </div>
            <div className="right-form w-1/2 rounded-xl  p-10">
               
            </div>
        </div>
    )
}

export default Contact
