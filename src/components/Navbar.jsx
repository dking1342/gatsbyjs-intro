import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query SiteMetaData{
      site { 
        siteMetadata{
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata;

  return (
    <nav>
      <h1><Link to="/"><strong>{ title }</strong></Link></h1>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar