import React, { useState } from 'react'
import './gallery_items.css'
import CloseIcon from '@mui/icons-material/Close';

import Img1 from '../../src/assets/gallery-image/design-1.jpg'
import Img2 from '../../src/assets/gallery-image/design-2.jpg'
import Img3 from '../../src/assets/gallery-image/design-3.jpg'
import Img4 from '../../src/assets/gallery-image/design-4.jpg'
import Img5 from '../../src/assets/gallery-image/design-5.jpg'
import Img6 from '../../src/assets/gallery-image/design-6.jpg'
import Img7 from '../../src/assets/gallery-image/design-7.jpg'
import Img8 from '../../src/assets/gallery-image/design-8.jpg'
import Img9 from '../../src/assets/gallery-image/design-9.jpg'
import Img10 from '../../src/assets/gallery-image/design-10.jpg'
import Img11 from '../../src/assets/gallery-image/design-11.jpg'
import Img12 from '../../src/assets/gallery-image/design-12.jpg'
import Img13 from '../../src/assets/gallery-image/design-13.jpg'
import Img14 from '../../src/assets/gallery-image/design-14.jpg'
import Img15 from '../../src/assets/gallery-image/design-15.jpg'
import Img16 from '../../src/assets/gallery-image/design-16.jpg'
import Img17 from '../../src/assets/gallery-image/design-17.jpg'
import Img18 from '../../src/assets/gallery-image/design-18.jpg'
import Img19 from '../../src/assets/gallery-image/design-19.jpg'
import Img20 from '../../src/assets/gallery-image/design-20.jpg'

const Gallery_items = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
        {
            id: 9,
            imgSrc: Img9,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
        {
            id: 11,
            imgSrc:Img11
        },
        {
            id: 12,
            imgSrc: Img12,
        }, 
        {
            id: 13,
            imgSrc: Img13,
        }, 
        {
            id: 14,
            imgSrc: Img14,
        }, 
        {
            id: 15,
            imgSrc: Img15,
        }, 
        {
            id: 16,
            imgSrc: Img16,
        },  
        {
            id: 17,
            imgSrc: Img17,
        }, 
        {
            id: 18,
            imgSrc: Img18,
        }, 
        {
            id: 19,
            imgSrc: Img19,
        }, 
        {
            id: 20,
            imgSrc: Img20,
        }
    ]

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <h1 className='text-center font-bold text-defOrange text-testiFont p-2'>Some Of Our Projects</h1>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{ width: '100%' }} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Gallery_items