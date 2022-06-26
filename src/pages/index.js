import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Menu from "../components/menu"
import Header from "../components/header"

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      description={"This is a sample website for the Gatsby crash course"}
    />
    <Header siteTitle="Gatsby Project" />
    <Menu />
    <div className={styles.textCenter}>
      <h1>
        Welcome to my website
      </h1>
      <p>This is a sample site for the Gatsby Crash Course</p>
    </div>
  </Layout>
)

export default IndexPage
