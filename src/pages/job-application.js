import React from 'react'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import ProgressBar from '../components/progress-bar'
import '../components/layout.css'
import '../styles/job-application.scss'
import Image from '../components/take-surveys'
import SurveyExplained from '../images/survey-explained.png'

const url =
  'https://www.mb01.com/lnk.asp?o=9851&c=918277&a=367983&k=FDE879D5DC06C6C79D1DEC3DA81434E5&l=9540&s1=cl-link'

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
            <div className="job-application">
              <SEO
                title="Get Paid $300+ sharing your opinion"
                description="Start Today"
              />

              <div class="bg">
                <div class="header">
                  <h1>
                    Get Paid <span>$300+</span> sharing your opinion. It's that
                    simple{' '}
                  </h1>
                </div>

                <div className="page">
                  <div class="leftside">
                    <img src={SurveyExplained} />
                  </div>
                  <div class="rightside">
                    <a
                      href={url}
                      title="CLICK HERE TO GET STARTED"
                      className="btn-blue orange"
                    >
                      CLICK HERE TO GET STARTED
                    </a>
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
