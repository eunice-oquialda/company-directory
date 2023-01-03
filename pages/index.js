import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Home</h1>
         <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum perspiciatis voluptas et quia voluptatum, labore rem minima doloremque at tempore, fugit quam, similique in impedit deleniti quis. Blanditiis, officiis rerum!</p>
        <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis labore voluptatum numquam quasi optio tempora dolorem velit repudiandae ipsa voluptatibus, accusantium illum ex laudantium impedit iste earum totam fugiat.</p>

        <Link  className={styles.btn} href='/directory'>See Directory</Link>
      </div>
    </>
  )
}
