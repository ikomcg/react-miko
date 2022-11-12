import { useEffect, useRef } from 'react'

const Contact = () =>{

    const link_loc = useRef(false);

    useEffect(() =>{
       
        const loc = window.location.pathname
        switch(loc) {
            case '/home':
                link_loc.current = false
                break;
            case '/project':
                link_loc.current = true
                break;
            default:
                link_loc.current = false
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
        </div>
    )
}

export default Contact
