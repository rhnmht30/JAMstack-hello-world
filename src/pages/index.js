import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World!</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>My name is Rohan Mehta and I am here to build something here!.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
