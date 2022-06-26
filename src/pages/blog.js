import { useStaticQuery, graphql, Link } from 'gatsby'
import React from 'react'
import "../components/layout.css"


const Blog = () => {
  const data = useStaticQuery(graphql`
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

  const blogs = data.allMarkdownRemark.edges;

  return (
    <div style={{backgroundColor:"#eee",width:"100vw",height:"100vh",padding:"25px"}}>
      <h1 style={{width:"100%",textAlign:"center"}}>Latest Posts</h1>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
        gap:"15px",
        padding:"20px",
        textAlign:"center"
      }}>
        {
          blogs.map(blog => {
            let id = blog.node.id;
            let path = blog.node.frontmatter.path;
            let title = blog.node.frontmatter.title;
            let date = blog.node.frontmatter.date;
            let author = blog.node.frontmatter.author;

            return (
              <div key={id}
                style={{
                  display:"flex",
                  flexDirection:"column",
                  padding:"10px 20px",
                  width:"300px",
                  border:"1px solid #eee",
                  borderRadius:"6px",
                  boxShadow:"1px 1px 5px rgba(0,0,0,0.2)",
                  justifySelf:"center",
                }}
              >
                <h3 style={{margin:"0 0 10px 0"}}>{ title }</h3>
                <small style={{marginBottom:"10px"}}>Posted by { author } on { date }</small>
                <Link to={path}>See More</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Blog