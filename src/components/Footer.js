import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-swasth-background has-text-white-ter">
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
              <h1 className="title is-size-5 navbar-item footer-section-title">
                About Swasth
              </h1>
                  <ul className="menu-list">
                    <li className="navbar-item">
                    Driving towards better Behavioral Health.
                    </li>
                    <li className="navbar-item">
                    Email: info@swasth.co
                    </li>
                  </ul>
              </div>
              <div className="column is-3">
              <h1 className="title is-size-5 navbar-item footer-section-title">
                Mobile Apps
              </h1>
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        DBT Coach
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        DBT Daily
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        CBT Companion
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        ACT Coach
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
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
              <h1 className="title is-size-5 navbar-item footer-section-title">
               Support
              </h1>
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                       Help Center
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact Support
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-2 social">
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
        </div>
      </footer>
    )
  }
}

export default Footer
