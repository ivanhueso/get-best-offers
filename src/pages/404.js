import React from 'react'
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ width: '300px', margin: '0 auto 80px' }}>
      <Link to="/">
        <Image />
      </Link>
    </div>
    <div style={{ textAlign: 'center' }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
