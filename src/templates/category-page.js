import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import TopicsGrid from '../components/TopicsGrid';

export const FeatureTemplate = ({
  feature,
  helmet,
}) => {
  const { description, title, featuredimage, topics } = feature;
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            { featuredimage ?
            <PreviewCompatibleImage imageInfo={{...feature, image: featuredimage}} />
            : ''}
            <p className="content">{description}</p>
            <div className="columns">
            {
              topics && topics.length ? topics.map(topic => (
                <div className="column is-half">
                <TopicsGrid {...topic} />
                </div>
              )) : ''
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeatureTemplate.propTypes = {
  helmet: PropTypes.object,
  feature: PropTypes.object
}

const Feature = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FeatureTemplate
        feature={post.frontmatter}
        helmet={
          <Helmet titleTemplate="%s | Feature">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

Feature.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Feature

export const pageQuery = graphql`
  query CategoryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage{
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description,
        topics{
          heading,
          topic{
            title,
            slug
          }
        }
      }
    }
  }
`
