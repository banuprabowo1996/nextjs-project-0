import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import styles from './Slider.module.css'
import React from 'react'
import Link from 'next/link';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

export default function Slider({ buildings }) {

    console.log(buildings, '<<<<< dari components');

    return (
        <Carousel responsive={responsive}>
            {buildings?.map(el => {
                return (
                    <Link href={`/buildings/${el.id}`} key={el.id}>
                        <div className={styles.imageContainer} >
                            <img src={el.url} alt={el.name} height={400} width={600} />
                        </div>
                    </Link>
                )
            })}
        </Carousel >
    )
}



