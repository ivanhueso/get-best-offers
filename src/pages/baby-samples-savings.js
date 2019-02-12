import React from 'react'
import Layout from '../components/layout-offer'
import SEO from '../components/seo'
import $ from 'jquery'

const url =
  'https://www.mb102.com/lnk.asp?o=12088&c=918277&a=367983&k=18C219D555218DF6260B6A9C28EC5F5D&l=12366'

const BabySamplesSavings = () => (
  <Layout>
    <SEO
      title="Free Diapers Samples| GB Offers"
      keywords={[`free diapers`, `diapers samples`, `best samples`]}
    />
    <div className="wrapper">
      <div className="main">
        <div className="box">
          <h1>How Did You Hear About This Offer?</h1>
          <h3>RECEIVE A FREE BOX OF BABY SAMPLES</h3>

          <a href={this.goTo(url, loc)} title="Instagram" className="btn-blue">
            INSTAGRAM
          </a>
          <a href={this.goTo(url, loc)} title="Facebook" className="btn-blue">
            FACEBOOK
          </a>
          <a href={this.goTo(url, loc)} title="Google" className="btn-blue">
            GOOGLE
          </a>
        </div>
      </div>
    </div>
  </Layout>
)
export default BabySamplesSavings
