import React from 'react';
import Helmet from 'react-helmet';
const moment = require('moment');

// import '../css/blog-post.css'; // no need for styles here.

export default function Template ({ data }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet title={`Chris Pilson - Tech Blog - ${post ? post.frontmatter.title : ''}`} />
        {post &&
        (
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <h3>{moment(post.frontmatter.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}, {moment(post.frontmatter.date).fromNow()}</h3>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{__html: post.html}}
                />
            </div>
        )
        }
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
` || [];
