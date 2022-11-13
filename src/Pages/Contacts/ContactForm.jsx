import React, {useRef} from 'react';
import { BsFacebook } from 'react-icons/bs';
import swal from 'sweetalert';

import emailjs from '@emailjs/browser';


const Contactform = (props) =>{
  
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
      emailjs.sendForm('service_97zm88b', 'template_bajmsuj', form.current, '8A9VfCWgMh5-xD_NP')
        .then((result) => {
            switch (result.text){
                case 'OK':
                    swal({
                        title: "Email",
                        text: "THANKS FOR YOUR EMAIL",
                        icon: "success",
                        buttons: "OK",
                        dangerMode: true,
                      }).then((ok) => {
                        if (ok) {
                            window.location.reload();
                        } 
                    })
                    default:
                        swal({
                            title: "Email",
                            text: result.text,
                            icon: "info",
                            buttons: "OK",
                        })
            }
        }, (error) => {
                swal({
                    title: "Email",
                    text: error.text,
                    icon: "warning",
                    buttons: "OK",
                })
        });
    };

    const {contact} = props;
    return (
        <div className='w-full'>
            <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col '>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input className="appearance-none block w-full bg-gray-200 border text-viol-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="from_name" required id="grid-first-name" type="text"  placeholder="Full Name"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <input type='email' name="from_email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" required id="grid-last-name" placeholder="Email"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input className="appearance-none block w-full bg-gray-200 text-viol-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="from_company" type="text" placeholder="Company"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input className="appearance-none block w-full bg-gray-200 text-viol-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name="subject_email" required type="text" placeholder="Subject"/>
                    </div>
                </div>
                <textarea name="message" id="" cols="30" rows="10" className='resize-none border bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' required placeholder='Message'></textarea>
                <button type='submit' className='bg-bgviol fonts-12 text-white font-semibold w-max py-2 px-5 my-5 rounded hover:scale-105'>Send Message</button>
            </form>
            {contact &&
                <div>
                    <ul className='flex justify-between'>
                        <li>
                            follow me on facebook
                        </li>
                        <li>
                            <a href="https://www.facebook.com/miko.gurrobat/" rel="noreferrer" target='_blank'>
                            <BsFacebook className='text-fb text-3xl hover:scale-105' />
                            </a>
                        </li>
                    </ul>
                </div>
            }
        </div>
      
    )
}

export default Contactform
