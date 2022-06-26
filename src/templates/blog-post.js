import React from 'react'
import { Link } from 'gatsby'

const BlogPost = ( blog ) => {

  let title = blog.pageContext.blog.node.frontmatter.title;
  let body = blog.pageContext.blog.node.excerpt;

  return (
    <div style={{
      width:"100vw",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <Link to='/blog'>Go Back</Link>
      <div
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
          <p>{ body }</p>
        </div>
    </div>
  )
}

export default BlogPost