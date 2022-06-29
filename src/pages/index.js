import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/home.module.css"

const Home = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Delopy</h3>
          <p>UX designer & web developer based in London</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="./gatsby-icon.png" alt="site banner" style={{maxWidth:'100%'}} />
      </section>
    </Layout>
  )
}

export default Home