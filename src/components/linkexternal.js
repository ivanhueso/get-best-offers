import React from 'react'

const LinkExternal = ({ url, title }) => (
  <a href={'https://www.google.com'} title="Google" className="btn-blue">
    {url}
  </a>
)

export default LinkExternal
