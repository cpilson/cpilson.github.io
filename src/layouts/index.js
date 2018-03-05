import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import Header from '../pages/Header';
import Footer from '../pages/Footer';
import './index.scss';
import '../scss/index.scss';

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Chris Pilson - GitHub Pages"
      meta={[
        {
          name: 'description',
          content: 'GitHub Pages of Chris Pilson'
        }, {
          name: 'keywords',
          content: 'Chris Pilson, Development, ReactJS, Gatsby, GitHub, JavaScript, Redux, Inferno, React Native'
        }
      ]} 
    />
    <Header />
    <div style={{
      padding: '0px 2.5rem',
      paddingTop: 0
    }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
