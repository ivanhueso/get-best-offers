import React from 'react'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import ProgressBar from '../components/progress-bar'
import '../components/layout.css'
import '../styles/starbucks-gift-card.scss'
import BackgroundImage from 'gatsby-background-image'

const url =
  'https://www.mb103.com/lnk.asp?o=14786&c=918277&a=367983&k=80953CC098748A416936B003561D898F&l=15591'

export default class OfertaLaboral extends React.Component {
  state = {
    step: '33%',
  }
  nextStep = data => {
    this.setState({
      step: data,
    })
  }
  render() {
    return (
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
                title="Coffee Store Gift Card | GB Offers"
                description="Get a FREE £5 Starbucks Gift Card"
              />
              <div className="content-page">
                <div className="wrapper">
                  <div className="main">
                    <div className="box">
                      <h1 className={this.state.step !== '33%' ? `hide` : ``}>
                        How Did You Hear About This Offer?
                      </h1>
                      <h1 className={this.state.step !== `66%` ? `hide` : ``}>
                        What Is The Most Important Aspect Of Your Coffee?
                      </h1>
                      <h1 className={this.state.step !== `100%` ? `hide` : ``}>
                        How Much Do You Usually Spend When Going Out For Coffee?
                      </h1>

                      <h3> GET A FREE £5 STARBUCKS GIFT CARD</h3>
                      <ProgressBar step={this.state.step} />

                      <a
                        nohref="true"
                        onClick={event => this.nextStep(`66%`)}
                        title="Instagram"
                        className="btn-blue orange"
                        className={
                          this.state.step !== `33%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        Instagram
                      </a>
                      <a
                        nohref="true"
                        onClick={event => this.nextStep(`66%`)}
                        title="Facebook"
                        className="btn-blue orange"
                        className={
                          this.state.step !== `33%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        Facebook
                      </a>
                      <a
                        nohref="true"
                        onClick={event => this.nextStep(`66%`)}
                        title="Google"
                        className="btn-blue orange"
                        className={
                          this.state.step !== `33%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        Google
                      </a>

                      <a
                        nohref="true"
                        onClick={event => this.nextStep(`100%`)}
                        title="Price"
                        className={
                          this.state.step !== `66%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        Price
                      </a>
                      <a
                        nohref="true"
                        onClick={event => this.nextStep(`100%`)}
                        title="Taste"
                        className={
                          this.state.step !== `66%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        Taste
                      </a>
                      <a
                        nohref="true"
                        onClick={event => this.nextStep(`100%`)}
                        title="Temperature"
                        className={
                          this.state.step !== `66%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        Temperature
                      </a>

                      <a
                        href={url}
                        title="£3 or less"
                        className={
                          this.state.step !== `100%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        £3 or less
                      </a>
                      <a
                        href={url}
                        title="£3 - £10"
                        className={
                          this.state.step !== `100%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        £3 - £10
                      </a>
                      <a
                        href={url}
                        title="£10 or more"
                        className={
                          this.state.step !== `100%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        £10 or more
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
  }
}
