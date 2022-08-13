import React, { useEffect, useState } from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import styles from '../styles/Home.module.css'

export default function Blog() {

    const [dataBlog, setDataBlog] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) throw { name: "error fetch" }
                return response.json()
            })
            .then(data => {
                // console.log(data);
                setDataBlog(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Header />
            <p className='container'>Blog Page</p>
            <style jsx>{`
            .container {
            text-align: center
            }
            `}</style>
            {/* {dataBlog ? dataBlog.map(blog => {
                return (
                    <div className={styles.blog} key={blog.id}>
                        <p>{blog.id}</p>
                        <p>{blog.title}</p>
                    </div>
                )
            }) : null} */}
            <Footer />
        </>
    )
}


