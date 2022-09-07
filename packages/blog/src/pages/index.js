import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Home = () => {
  return (
    <StaticQuery 
      query={graphql`
      query MetadataQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
      render={data => (
        <div>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.description}</p>
        </div>
      )}
    />
  )
}

export default Home;