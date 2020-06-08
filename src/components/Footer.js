import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/assets/swasth-logo-dark.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <>
      <div className="pre-footer-div" />
      <div className="footer-wrapper">
      <footer className="footer has-swasth-background has-text-white-ter">
        <div className="content has-text-centered has-text-white-ter footer-content">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-3">
                <div className="title is-size-5 navbar-item footer-logo">
                  <img
                    src={logo}
                    alt="swasth"
                  />
                </div>
              </div>
              <div className="column is-3">
              <h1 className="title is-size-5 navbar-item footer-section-title base-text">
                Swasth
              </h1>
                  <ul className="menu-list">
                    <li className="navbar-item base-text">
                      Clinicians
                    </li>
                    <li className="navbar-item base-text">
                      Members
                    </li>
                  </ul>
              </div>
              <div className="column is-3">
              <h1 className="title is-size-5 navbar-item base-text footer-section-title">
                Mobile Apps
              </h1>
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <a href="https://swasth.co/dbt-coach" className="navbar-item base-text">
                        DBT Coach
                      </a>
                    </li>
                    {/*<li>
                      <a href="http://swasth.co/dbt-daily" className="navbar-item base-text">
                        DBT Daily
                      </a>
                    </li>*/}
                    <li>
                      <a href="https://swasth.co/cbt-companion" className="navbar-item base-text">
                        CBT Companion
                      </a>
                    </li>
                    <li>
                      <a href="https://swasth.co/act-coach" className="navbar-item base-text" to="/contact/examples">
                        ACT Coach
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item base-text"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
              <h1 className="title is-size-5 navbar-item base-text footer-section-title">
               Support
              </h1>
                <section>
                  <ul className="menu-list">
                    <li>
                      <a href="http://help.swasth.co" className="navbar-item base-text">
                       Help Center
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item base-text" to="/contact">
                        Contact Support
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              {/* <div className="column is-2 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
      </div>
      <div className="after-footer-container">
        <div className="container after-footer">
        <div className="after-footer-left">
          <p className="after-footer-text">
            Privacy & Terms
          </p>
          <p className="after-footer-text">
            Contact Us
          </p>
        </div>
        <div className="after-footer-center">
          <p className="after-footer-text">
            Copyrights © 2019 All Rights Reserved by Swasth Inc.
          </p>
        </div>
        <div className="after-footer-right social">
          <a title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a title="twitter" href="https://twitter.com">
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
          <a title="vimeo" href="https://vimeo.com">
            <img
              src={vimeo}
              alt="Vimeo"
              style={{ width: '1em', height: '1em' }}
            />
          </a>
        </div>
        </div>
      </div>
      </>
    )
  }
}

export default Footer
