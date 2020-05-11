import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby';
import { routes } from './constants';

const FeatureGrid = ({ gridItems,description }) => (
  <div className="columns is-multiline feature-grid ">
    {gridItems.map(item => (
      <div key={item.title} className="column is-4">
        <Link to={`${routes.features}/${item.slug}`}>
        <section className="section feature-grid-item" style={{ padding: "5px" }}>
          <div className="has-text-centered feature-grid-box">
              <div className="feature-grid-img-box">
                <PreviewCompatibleImage imageInfo={item} className="feature-grid-img"/>
              </div>
              <div className="feature-grid-content-box">
                <a className="feature-link-text base-text">{item.title}</a>
                <p className="feature-content-text para-text">{description}</p>
              </div>
          </div>
        </section>
        </Link>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
