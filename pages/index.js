import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Slider from '../components/slider/slider'
// import NextJsCarousel from '../components/slider/slider'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles['section-first']}>
            <div className={styles.titleContainer}>
              <h1>Find A New Place<br />
                Where You Will Live</h1>
            </div>
            <div className={styles.contactContainer}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis atque praesentium? Maiores fuga molestiae perspiciatis libero blanditiis quo voluptatibus iusto cum iure consequuntur? In odio enim nesciunt harum</p>
              <button className={styles.buttonExplore}>Explore Now</button>
              <button className={styles.buttonLearn}>Learn More</button>
            </div>

          </div>
        </div>
        <div className={styles.section}>
          <Slider />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionThird}>
            <div className={styles.collageImage}>
              <Image src='/build1.jpg' width={600} height={400} />
              <br />
              <Image src='/build1.jpg' width={300} height={200} style={{ marginRight: "5px" }} />
              <Image src='/build1.jpg' width={300} height={200} />
            </div>
            <div className={styles.containerThird}>
              <h2 className={styles.informationTitle}>Your Comfort Is Our Priority</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis atque praesentium? Maiores fuga
                molestiae perspiciatis libero blanditiis quo voluptatibus iusto cum iure consequuntur? In odio enim nesciunt
                harum, vitae minus quod alias aperiam </p>
              <div className={styles.informationContainer}>
                <div className={styles.informationItem}>
                  <h4 className={styles.informationHeader}>10.976<span className={styles.plus}>+</span></h4>
                  <p>Happy Customers</p>
                </div>
                <div className={styles.informationItem}>
                  <h4 className={styles.informationHeader}>224<span className={styles.plus}>+</span></h4>
                  <p>Available Apartment</p>
                </div>
              </div>
              <div className={styles.informationContainer}>
                <div className={styles.informationItem}>
                  <h4 className={styles.informationHeader}>976<span className={styles.plus}>+</span></h4>
                  <p>Available house</p>
                </div>
                <div className={styles.informationItem}>
                  <h4 className={styles.informationHeader}>103<span className={styles.plus}>+</span></h4>
                  <p>Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
