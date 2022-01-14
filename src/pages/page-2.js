import * as React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post";
import Layout from "../components/layout"
import Footer from "../components/Footer"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      {data.allMarkdownRemark.nodes.map(node => (
        <Post
          title={node.frontmatter.title}
          excerpt={node.excerpt}
        />
      ))}
    </div>
  )
}


export const query = graphql ` 
{

  allMarkdownRemark {
  
  nodes{
  
  frontmatter {
  
  title
  date
  keywords}
  excerpt
  html}}
  }
`
