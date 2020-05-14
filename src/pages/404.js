import React from 'react'
import Layout from '../components/Layout'
import UnderConstruction from '../img/assets/under_construction.png'


const NotFoundPage = () => (
  <Layout>
    <section className='coming-soon-section'>
      <div>
        <h2 className='bottom-space base-text'>Coming Soon <br/> </h2>
        <img src={UnderConstruction} className='custom-image'/>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
