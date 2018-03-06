import React from 'react';

const AboutPage = ({ data }) => (
  <div>
    <p>Placeholder page for now; rolled content into the main index page</p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        name
      }
    }
  }
`;

export default AboutPage;
