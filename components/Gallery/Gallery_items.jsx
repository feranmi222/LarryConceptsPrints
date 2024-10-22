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
                <CloseIcon onClick={() => setModel(false)}/>
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