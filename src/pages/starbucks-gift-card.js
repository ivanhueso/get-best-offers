import React from 'react'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import ProgressBar from '../components/progress-bar'
import '../components/layout.css'
import '../styles/starbucks-gift-card.scss'
import BackgroundImage from 'gatsby-background-image'

const url =
  'https://www.mb102.com/lnk.asp?o=11964&c=918277&a=367983&k=BFD2058767BE27F81C974DC2CBE75986&l=12176'

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
                title="Coffe Store Gift Card | GB Offers"
                description="Your chance to win a £150 starbucks gift card"
              />
              <div className="content-page">
                <div className="wrapper">
                  <div className="main">
                    <div className="box">
                      <h1 className={this.state.step !== '33%' ? `hide` : ``}>
                        How Did You Hear About This Offer?
                      </h1>
                      <h1 className={this.state.step !== `66%` ? `hide` : ``}>
                        How Many Cups Of Coffee Do You Drink Every Day?
                      </h1>
                      <h1 className={this.state.step !== `100%` ? `hide` : ``}>
                        How Much Do You Usually Spend When Going Out For Coffee?
                      </h1>

                      <h3> YOUR CHANCE TO WIN A £150 COFFEE STORE GIFT CARD</h3>
                      <ProgressBar step={this.state.step} />

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
                        title="Facebook"
                        className={
                          this.state.step !== `66%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        1 - 2
                      </a>
                      <a
                        nohref="true"
                        onClick={event => this.nextStep(`100%`)}
                        title="Facebook"
                        className={
                          this.state.step !== `66%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        3 - 4
                      </a>
                      <a
                        nohref="true"
                        onClick={event => this.nextStep(`100%`)}
                        title="Google"
                        className={
                          this.state.step !== `66%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        5 or more
                      </a>

                      <a
                        href={url}
                        title="Facebook"
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
                        title="Facebook"
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
                        title="Google"
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
