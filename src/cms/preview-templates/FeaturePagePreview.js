import React from 'react'
import PropTypes from 'prop-types'
import { FeatureTemplate } from '../../templates/feature-page'
import Helmet from 'react-helmet'

const FeaturePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <FeatureTemplate
        feature={data}
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

FeaturePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FeaturePagePreview
