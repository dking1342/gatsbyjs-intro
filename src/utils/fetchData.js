const { graphql, useStaticQuery } = require("gatsby")


const fetchData = async () => {
  const data = await useStaticQuery(graphql`
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
  `)
  return data;
}

export default fetchData;
