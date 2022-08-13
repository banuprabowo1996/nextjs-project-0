import React from 'react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import style from '../styles/Home.module.css'

export default function Blog({ posts }) {

    return (
        <>
            <Header />
            <h1 className={style.titleBlog}>Blog Page</h1>
            {
                posts.map(el => {
                    return (
                        <div key={el.id} className={style.blog}>
                            <p>{el.body}</p>
                            <p>{el.title}</p>
                        </div>
                    )
                })
            }
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data,
        },
    }
}


