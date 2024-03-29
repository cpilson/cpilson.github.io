import React from 'react';
import Helmet from 'react-helmet';
import { FaCalendar } from 'react-icons/lib/fa';
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
                <h3><span className="fa pull-left"><FaCalendar className="fa pull-left"/></span>&nbsp; {moment(post.frontmatter.date).parseZone().format("dddd, MMMM Do YYYY, h:mm:ss a")}, {moment(post.frontmatter.date).parseZone().fromNow()}</h3>
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
        date
        path
        title
      }
    }
  }
` || [];
