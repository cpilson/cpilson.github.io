import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

// import '../css/index.css'; // add some style if you want!
const excerptLength = 50;

export default function Index ({ data }) {
  const { edges: posts } = data ? data.allMarkdownRemark : [];
  return (
    <div className="blog-posts">
      <Helmet title="Chris Pilson - Tech Blog" />
      {data && (
          posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.timeToRead} {post.timeToRead !== 1 ? 'minutes' : 'minute'} to read</p>
                <p>{post.excerpt}</p>
              </div>
            ))
      )}
    </div>
  );
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date] order: DESC}) {
      edges {
        node {
          id
          excerpt(pruneLength: 50)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            path
            title
          }
          timeToRead
        }
        previous {
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            path
            title
          }
          timeToRead
        }
        next {
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            path
            title
          }
          timeToRead
        }
      }
      pageInfo {
        hasNextPage
      }
      totalCount
    }
  }
` || [];

Index.propTypes = {
  data: PropTypes.object.isRequired
};
