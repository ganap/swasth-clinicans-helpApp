import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Link } from 'gatsby';
import { routes } from './constants';

const CategoriesGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.title} className="column is-one-quarter">
        <section className="section" style={{ padding: "5px" }}>
          <div className="has-text-centered category-grid-box">
              <PreviewCompatibleImage imageInfo={item} style={{ maxWidth: "150px", margin: "35px"}}/>
              <Link to={`${routes.categories}/${item.slug}`} className="category-link-text">{item.title}</Link>
          </div>
        </section>
      </div>
    ))}
  </div>
)

CategoriesGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      slug: PropTypes.string,
    })
  ),
}

export default CategoriesGrid
