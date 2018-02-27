import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

import Header from '../pages/Header'
import Footer from '../pages/Footer'
import '../scss/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      meta={[
        { name: 'title', content: 'Chris Pilson - About'},
        { name: 'description', content: 'GitHub Pages of Chris Pilson' },
        { name: 'keywords', content: 'Chris Pilson, Development, ReactJS, Gatsby, GitHub, JavaScript, Redux, Inferno, React Native' },
      ]}
    />
    <Header />
    {/* <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    > */}
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
