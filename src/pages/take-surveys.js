import React from 'react'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Footer from '../components/footer'
import ProgressBar from '../components/progress-bar'
import '../components/layout.css'
import '../styles/take-surveys.scss'
import Image from '../components/take-surveys'

const url =
  'https://www.mb102.com/lnk.asp?o=2634&c=918277&a=367983&k=57B38677C15CEC10441BA7761FF66E42&l=2051'

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
                      <h1>Make Money Online</h1>

                      <h3>HAVE FUN AND GET PAID FOR DOING SURVEYS</h3>

                      <a href={url} title="Get Started - FREE">
                        <Image />
                      </a>

                      <h3 style={{ marginTop: '40px' }}>
                        HOW DO YOU PARTICIPATE?
                      </h3>

                      <p>
                        Membership is always free and you can join by filling
                        out the <a href={url}>registration form</a>. Once
                        membership is confirmed, you can start earning points by
                        completing online surveys anytime and anywhere via PC,
                        Laptop, Tablet, Cell Phone or Mobile App. After
                        accumulating a certain amount of points, members are
                        able to redeem them for items within our rewards
                        catalog. Join now and get paid to take surveys!
                      </p>
                      <a
                        href={url}
                        title="Get Started - FREE"
                        className="btn-blue orange"
                      >
                        Get Started - FREE
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
