import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

export const query = graphql`
  query AllSortedMarkdownRemark {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            slug
            stack
            title
            thumb {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          id
        }
      }
    }
    site {
      siteMetadata {
        contact
      }
    }
  }
`

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.edges
  const { contact } = data.site.siteMetadata

  console.log(projects)

  return (
    <Layout>
      <section className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {
            projects.map(project => {
              return (
                <Link
                  to={`/projects/${project.node.frontmatter.slug}`}
                  key={`${project.node.id}`}
                >
                  <div>
                    <img
                      src={project.node.frontmatter.thumb.childImageSharp.fluid.src}
                      alt={project.node.frontmatter.title}
                      style={{ 
                        borderRadius:6, 
                        aspectRatio: 10 / 8,
                        width:250,
                        height:"100%",
                        objectFit:"cover",
                        objectPosition:"center",
                      }}
                    />
                    <h3>{project.node.frontmatter.title}</h3>
                    <p>{project.node.frontmatter.stack}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
        <p>Like what you see? Email me at {contact} for a quote</p>
      </section>
    </Layout>
  )
}

export default Projects
