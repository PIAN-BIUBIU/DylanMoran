import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>lear to<br/>dsign and code React apps</h1>
    <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    // gives an error because the tag isn't closed.
  </Layout>
)

export default IndexPage
