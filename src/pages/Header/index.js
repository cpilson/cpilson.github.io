import React from 'react'
import Link from 'gatsby-link'
import '../../scss/index.scss'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{color: 'white', textDecoration: 'none'}} to={props.to}>
      {props.children}
    </Link>
  </li>

const HeaderPage = ({ data }) => (
  <div
    style={{
      background: '#4682B4',
      marginBottom: '1.5rem',
      paddingLeft: '2.5rem',
      paddingRight: '2.5rem',
      paddingBottom: '1.45rem',
      paddingTop: '1.0875rem',
    }}
  >
    <header>  
      {/* style={{ margin: '0 auto', maxWidth: 960, padding: '1.45rem 1.0875rem', }}> */}
      <Link to="/" style={{ color: 'white', textDecoration: 'none', textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Home</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        {/* <ListLink to="/">Home</ListLink> */}
        <ListLink to="/about/">About</ListLink>
        {/* <ListLink to="/contact/">Contact</ListLink> */}
      </ul>
    </header>
  </div>
  // <div
  //   style={{
  //     background: '#4682B4',
  //     marginBottom: '1.45rem',
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: '0 auto',
  //       maxWidth: 960,
  //       padding: '1.45rem 1.0875rem',
  //     }}
  //   >
  //   <Link style={{color: 'white', float: 'right', textDecoration: 'none',}} to={`/about/`}>About</Link>
  //     <h1 style={{ margin: 0, textAlign: 'center' }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: 'white',
  //           textDecoration: 'none',
  //         }}
  //       >
  //         asfsff
  //       </Link>
  //     </h1>
  //   </div>
  // </div>
)

export const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default HeaderPage