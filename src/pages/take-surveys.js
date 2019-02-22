import React from 'react'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import ProgressBar from '../components/progress-bar'
import '../components/layout.css'
import '../styles/take-surveys.scss'
import Image from '../components/take-surveys'

const url =
  'https://www.mb01.com/lnk.asp?o=9851&c=918277&a=367983&k=FDE879D5DC06C6C79D1DEC3DA81434E5&l=9540'

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
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <div className="get-paid-surveys">
              <SEO
                title="Take Surveys | Get Paid"
                description="HAVE FUN AND GET PAID FOR DOING SURVEYS"
              />
              <div className="content-page">
                <div className="wrapper">
                  <div className="main">
                    <div className="box">
                      <h1>How Did You Hear About This Offer?</h1>

                      <h3>TAKE SURVEYS. GET PAID. IT'S FREE</h3>

                      <a
                        href={url}
                        title="Facebook"
                        className="btn-blue orange"
                      >
                        Facebook
                      </a>
                      <a
                        href={url}
                        title="Instagram"
                        className="btn-blue orange"
                      >
                        Instagram
                      </a>
                      <a href={url} title="Google" className="btn-blue orange">
                        Google
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          )
        }}
      />
    )
  }
}
