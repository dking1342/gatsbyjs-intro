exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    query {
      allMarkdownRemark {
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
            html
          }
        }
      }
    }
  `).then(res => {
    res.data.allMarkdownRemark.edges.forEach(project => {
      createPage({
        path:`/projects/${project.node.frontmatter.slug}`,
        component: require.resolve("./src/templates/project-details.js"),
        context:{ project },
        defer: true,        
      })
    })
  })  


  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/project-details.jsx"),
  //   context: {},
  //   defer: true,
  // })
}
