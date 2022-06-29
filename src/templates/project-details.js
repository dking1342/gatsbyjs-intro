import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"

const ProjectDetails = ( project ) => {
  console.log(project)
  const title = project.pageContext.project.node.frontmatter.title;
  const stack = project.pageContext.project.node.frontmatter.stack;
  const { src } = project.pageContext.project.node.frontmatter.thumb.childImageSharp.fluid;
  const html = project.pageContext.project.node.html;

  function createMarkup() {
    return {__html: html};
  }

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{ title }</h2>
        <h3>{ stack }</h3>
        <div className={styles.featured}>
          <img src={ src } alt={title} />
        </div>
        <div dangerouslySetInnerHTML={createMarkup()} />
        {/* { html } */}
      </div>
    </Layout>
  )
}

export default ProjectDetails