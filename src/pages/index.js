import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const Index = () => (
  <Layout>
    <SEO
      title="Latest Offers"
      keywords={[`free diapers`, `diapers samples`, `best samples`]}
    />
    <div className="wrapper">
      <div className="main" style={{ width: '300px', margin: '0 auto 40px' }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default Index
