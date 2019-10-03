import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import FeaturePagePreview from './preview-templates/FeaturePagePreview'
import CategoryPagePreview from './preview-templates/CategoryPagePreview'
import TopicsPagePreview from './preview-templates/TopicsPagePreview'
import VideoPlayer from './custom-component/VideoPlayer'
import Note from './custom-component/Note'
import QuickTip from './custom-component/QuickTip'


CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
CMS.registerEditorComponent(VideoPlayer);
CMS.registerEditorComponent(Note);
CMS.registerEditorComponent(QuickTip);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('features', FeaturePagePreview)
CMS.registerPreviewTemplate('categories', CategoryPagePreview)
CMS.registerPreviewTemplate('topics', TopicsPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
