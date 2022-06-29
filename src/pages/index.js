import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/home.module.css"
import { GatsbyImage } from 'gatsby-plugin-image'

export const query = graphql`
  query SiteInfo{
    file(relativePath: {eq: "gatsby-icon.png"}) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;



const Home = ({ data }) => {

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Delopy</h3>
          <p>UX designer & web developer based in London</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="banner image" style={{aspectRatio:1/3}} />
      </section>
    </Layout>
  )
}

export default Home