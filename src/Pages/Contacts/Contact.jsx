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
           
        </div>
    )
}

export default Contact
