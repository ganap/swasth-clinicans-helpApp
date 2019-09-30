import React from 'react'
import PropTypes from 'prop-types'
import { TopicsTemplate } from '../../templates/topic-page'
import Helmet from 'react-helmet'

const FeaturePagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <TopicsTemplate
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

FeaturePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default FeaturePagePreview
