import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.container}>
            <ul className={styles.list}>
                <h2 className={styles.logo}>Grast<span className={styles.dot}>.</span></h2>
                <li className={styles.item}><Link href='/'><a>Home</a></Link></li>
                <li className={styles.item}><Link href='/blog'><a>Blog</a></Link></li>
                <li className={styles.item}><Link href='/about'><a>About</a></Link></li>
                <button className={styles.button} >Get Started</button>
            </ul>
        </header>
    )
}
