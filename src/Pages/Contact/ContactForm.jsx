import React from 'react'
import { BsFacebook } from 'react-icons/bs';

function contactform(props) {
    const {contact} = props;
    return (
        <div className='w-full'>
            <form action="" className='w-full flex flex-col '>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input className="appearance-none block w-full bg-gray-200 border text-viol-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white " id="grid-first-name" type="text" placeholder="Full Name"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <input type='email' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white " id="grid-last-name" placeholder="Email"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input className="appearance-none block w-full bg-gray-200 text-viol-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Company"/>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <input className="appearance-none block w-full bg-gray-200 text-viol-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Subject"/>
                    </div>
                </div>
                <textarea name="" id="" cols="30" rows="10" className='resize-none border bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' placeholder='Message'></textarea>
                <button className='bg-bgviol fonts-12 text-white font-semibold w-max py-2 px-5 my-5 rounded hover:scale-105'>Send Message</button>
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

export default contactform
