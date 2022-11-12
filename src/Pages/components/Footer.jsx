import React from 'react';
import jb from '../../images/footer/jobstreet.png'
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='p-8'>
            <hr className='bg-bgviol text-viol h-.1' />
            <div className='flex justify-between pt-3'>
                <span className='text-viol font-medium text-lg'>Miko Cabuhat Gurrobat </span>
                <ul className='flex'>
                    <li className='mx-1'>
                        <a href="https://www.facebook.com/miko.gurrobat/" rel="noreferrer" target='_blank'>
                            <BsFacebook className='text-fb text-2xl hover:scale-105' />
                        </a>
                    </li >
                    <li className='mx-1'>
                        <a href="https://www.linkedin.com/in/miko-gurrobat-4b621a256/" rel="noreferrer"  target='_blank'>
                            <AiFillLinkedin className='text-fb text-2xl hover:scale-105'/>
                        </a>
                    </li>
                    <li className='mx-1'>
                        <a href="https://myjobstreet.jobstreet.com.ph/resume/preview-resume.php?x=3uv9mcjt1a8l0qdhc61ffpf4v7" rel="noreferrer"  target='_blank'>
                            <img src={jb} alt="jobstreet" className='max-w-xxs' />
                        </a>
                    </li>
                </ul>
                
            </div>
            
        </footer>
    )
}

export default Footer
