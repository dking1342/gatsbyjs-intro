exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    query {
      allMarkdownRemark{
        edges{
          node{
            id
            frontmatter{
              path
              title
              date
              author
            }
            excerpt
          }
        }
      }
    }
  `).then(res => {
    res.data.allMarkdownRemark.edges.forEach(blog => {
      createPage({
        path:`${blog.node.frontmatter.path}`,
        component: require.resolve("./src/templates/blog-post.js"),
        context:{ blog },
        defer: true,        
      })
    })
  })


  // blogs data fetch

  // blogs.forEach(blog => {
  //   createPage({
  //     path:`${blog.node.frontmatter.path}`,
  //     component: require.resolve("./src/templates/blog-post.js"),
  //     context:{ blog },
  //     defer: true,
  //   })
  // })
}
