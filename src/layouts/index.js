import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'
import './repos.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Chris Pilson - GitHub Pages"
      meta={[
        { name: 'description', content: 'GitHub Pages of Chris Pilson' },
        { name: 'keywords', content: 'Chris Pilson, Development, ReactJS, Gatsby, GitHub, JavaScript, Redux, Inferno, React Native' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
