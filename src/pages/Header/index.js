import Link from 'gatsby-link';
import React from 'react';
import '../../scss/index.scss';

const ListLink = props => (
  <li style={{
    display: `inline-block`,
    marginRight: `1rem`
  }}
  >
    <Link
      style={{
        color: 'white',
        textDecoration: 'none'
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
);

const HeaderPage = ({ data }) => (
  <div
    style={{
      background: '#4682B4',
      marginBottom: '1.5rem',
      paddingLeft: '2.5rem',
      paddingRight: '2.5rem',
      paddingBottom: '1.45rem',
      paddingTop: '1.0875rem'
    }}
  >
    <header>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          textShadow: `none`,
          backgroundImage: `none`
        }}
      >
        <h3 style={{
          display: `inline`
        }}
        >Home
        </h3>
      </Link>
      <ul style={{
        listStyle: `none`,
        float: `right`
      }}
      >
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/blog/">Tech Blog</ListLink>
      </ul>
    </header>
  </div>
);

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default HeaderPage;
