import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Link from "gatsby-link"

export default function Blog() {
  return (
    <StaticQuery
      query={graphql`
      query MyQuery {
        blog: allMarkdownRemark {
          posts: nodes {
            fields {
              slug
            }
            frontmatter {
              date(fromNow: true)
              title
              author
            }
            excerpt
            id
          }
        }
      }
    `}
      render={data => (
        <div>
          <h1>My blog posts</h1>
    
          {data.blog.posts.map(post => (
            <article key={post.id}>
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <small>
                {post.frontmatter.author}, {post.frontmatter.date}
              </small>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    />
  )
}
