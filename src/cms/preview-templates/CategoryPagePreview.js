import React from 'react'
import PropTypes from 'prop-types'
import { CategoryTemplate } from '../../templates/category-page'
import Helmet from 'react-helmet'

const CategoryPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <CategoryTemplate
        feature={data}
        content={widgetFor('body')}
        helmet={
          <Helmet titleTemplate="%s | Feature">
            <title>{`${data.title}`}</title>
            <meta
              name="description"
              content={`${data.description}`}
            />
          </Helmet>
        }
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CategoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CategoryPagePreview
