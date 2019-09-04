import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const CategoriesGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.title} className="column is-one-quarter">
        <section className="section" style={{ padding: "5px" }}>
          <div className="has-text-centered">
              <PreviewCompatibleImage imageInfo={item} />
              <p>{item.title}</p>
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
