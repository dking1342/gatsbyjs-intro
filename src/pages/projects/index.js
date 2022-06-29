import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

export const query = graphql`
  query AllMarkdownRemark {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            stack
            title
          }
          id
        }
      }
    }
  }
`

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <section className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link
              to={`/projects/${project.node.frontmatter.slug}`}
              key={`${project.node.id}`}
            >
              <div>
                <h3>{project.node.frontmatter.title}</h3>
                <p>{project.node.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Projects
