import React from 'react'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import '../styles/starbucks-gift-card.scss'
import BackgroundImage from 'gatsby-background-image'

const url =
  'https://www.mb102.com/lnk.asp?o=11964&c=918277&a=367983&k=BFD2058767BE27F81C974DC2CBE75986&l=12176 '

const StarbucksGiftCard = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg-starbucks-gift-card.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid

      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
          className="starbucks-gift-card"
        >
          <SEO
            title="Free Diapers Samples| GB Offers"
            keywords={[`free diapers`, `diapers samples`, `best samples`]}
          />
          <div className="content-page">
            <div className="wrapper">
              <div className="main">
                <div className="box">
                  <h1>How many cups of coffe do you drink every day?</h1>
                  <h3>
                    YOUR CHANCE TO WIN A <strong>£150 STARBUCKS</strong> GIFT
                    CARD
                  </h3>

                  <a
                    href={url}
                    title="1 Cup of coffe"
                    className="btn-blue orange"
                  >
                    1
                  </a>

                  <a
                    href={url}
                    title="3 Cups of coffe"
                    className="btn-blue orange"
                  >
                    3
                  </a>
                  <a
                    href={url}
                    title="5+ Cups of coffe"
                    className="btn-blue orange"
                  >
                    5+
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </BackgroundImage>
      )
    }}
  />
)
export default StarbucksGiftCard
