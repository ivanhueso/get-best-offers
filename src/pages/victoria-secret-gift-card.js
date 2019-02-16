import React from 'react'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import ProgressBar from '../components/progress-bar'
import '../components/layout.css'
import '../styles/victoria-secret-gift-card.scss'
import BackgroundImage from 'gatsby-background-image'

const url =
  'https://www.mb103.com/lnk.asp?o=13469&c=918277&a=367983&k=2A310CAE4F1F7D6CDA5DB67FD60E4533&l=14072'

export default class VictoriaSecret extends React.Component {
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
            desktop: file(relativePath: { eq: "bg-victoria-secrets.png" }) {
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
                title="Victoria Secret Gift Card | GB Offers"
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
                        Do You Use Any Victoria’s Secret Products?
                      </h1>
                      <h1 className={this.state.step !== `100%` ? `hide` : ``}>
                        How Much Do You Spend A Year On Lingerie?
                      </h1>

                      <h3>WIN A $500 VICTORIA'S SECRET GIFT CARD</h3>
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
                        title="Most of the time"
                        className={
                          this.state.step !== `66%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        Most of the time
                      </a>
                      <a
                        nohref="true"
                        onClick={event => this.nextStep(`100%`)}
                        title="Sometimes"
                        className={
                          this.state.step !== `66%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        Sometimes
                      </a>
                      <a
                        nohref="true"
                        onClick={event => this.nextStep(`100%`)}
                        title="Not really"
                        className={
                          this.state.step !== `66%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        Not really
                      </a>

                      <a
                        href={url}
                        title="Less than $200"
                        className={
                          this.state.step !== `100%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        Less than $200
                      </a>
                      <a
                        href={url}
                        title="$200-$500"
                        className={
                          this.state.step !== `100%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        $200-$500
                      </a>
                      <a
                        href={url}
                        title="More than $500"
                        className={
                          this.state.step !== `100%`
                            ? `btn-blue orange hide`
                            : `btn-blue orange`
                        }
                      >
                        More than $500
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
