import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="content">
      <ul className="nav">
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <span>|</span>
        </li>
        <li>
          <Link to="/terms-of-service">Terms of Services</Link>
        </li>
        <p>
          © {new Date().getFullYear()}, All Rights Reserved. Getbestoffers.net{' '}
        </p>

        <p>
          This site is not a part of the Facebook App. or Facebook, Inc.
          Additionally this website is in no way sponsored, endorsed,
          administered by, or associated with Facebook Inc.
        </p>
      </ul>
    </div>
  </footer>
)

export default Footer
