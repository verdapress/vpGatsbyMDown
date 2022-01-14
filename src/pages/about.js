import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Footer from "../components/Footer";

const About = () => (
  <Layout>
    <h1>About Us</h1>
    <p>
      <Link to="/page-2/">Go to Post Page</Link> <br />
    </p>
    <Footer></Footer>
  </Layout>
)

export default About
