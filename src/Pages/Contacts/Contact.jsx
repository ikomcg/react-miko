import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm';
import { hr } from '../Home/Projects/Projects';
import gmail from '../../images/contact/gmail.png'
import schedule from '../../images/contact/schedule.png'
import { CgPhone } from 'react-icons/cg'

const Contact = () =>{

    const [bol, setBol] = useState(false);

    useEffect(() =>{
       
        const loc = window.location.pathname

        switch(loc) {
            case '/home':
                setBol(false)
                break;
            case '/contact':
                setBol(true)
                break;
            default:
                setBol(false)
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
                            <li className='shadow-md'>
                                <img src={gmail} alt="" />
                                mikogurrobat0@gmail.com
                            </li>
                            <li className='shadow-md'>
                                <CgPhone className='text-2xl text-bgviol'/>
                                09269244053
                            </li>
                        </ul>
                        <div className='book-meeting mt-20'>
                            <ul>
                               <li className='hover:scale-105'>
                                    <a href="https://calendly.com/mikogurrobat0" className='shadow-md'>
                                        <img src={schedule} alt="" />
                                        Book a Meeting
                                    </a>
                                </li>    
                            </ul>
                        </div>
                    </div>
                }
            </div>
            <div className="right-form w-1/2 rounded-xl shadow-md p-10">
            <ContactForm contact={bol}/>
            </div>
        </div>
    )
}

export default Contact
