import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import styles from './Slider.module.css'
import React from 'react'

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

export default function Slider() {
    return (
        <Carousel responsive={responsive}>
            <div className={styles.imageContainer}>
                <Image src='/build1.jpg' width={600} height={400} />
            </div>
            <div className={styles.imageContainer}>
                <Image src='/build2.jpg' width={600} height={400} />
            </div>
            <div className={styles.imageContainer}>
                <Image src='/build3.jpg' width={600} height={400} />
            </div>
            <div className={styles.imageContainer}>
                <Image src='/build4.jpeg' width={600} height={400} />
            </div>
            <div className={styles.imageContainer}>
                <Image src='/build5.jpg' width={600} height={400} />
            </div>
        </Carousel>
    )
}



