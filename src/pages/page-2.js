import * as React from "react"
import { Link } from "gatsby"
import Post from "../components/Post";

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/Footer"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the Post page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Back to the homepage</Link>
    <br />
    <div className="Container">
    <Post title="VerdaPress Post Title" excerpt = "This is the Excerpt text that appears in the body">
</Post>
    </div>
    <Footer></Footer>
  </Layout>
)

export default SecondPage
