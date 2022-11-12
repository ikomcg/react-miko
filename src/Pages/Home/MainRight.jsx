import React from 'react'
import  Me  from '../../images/home/me.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MainRight = () => {
    return (
        <div className='right-home  w-1/2'>
            <div className='circle c1 w-1 '>
                <div className='circle c2'>
                    <div className='circle c3'>
                        <div className='circle c4 bg-white relative'>
                            <div className='circle c5'>
                                <LazyLoadImage
                                height={450}
                                width={200}
                                effect="blur"
                                    src={Me}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainRight
