import React from 'react'
import './Footer.css'
import { IoIosSearch } from 'react-icons/io'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='footer-logo-div'>
              <div className='logo'>
                <img src='https://www.phdassistance.com/wp-content/uploads/2017/11/logo.png' />
              </div>
              <div className='about-us'>
                <h4>About Us</h4>
                <p>About us
                  Ph.D. Assistance serves as an external mentor to brainstorm your idea and translate that into research model.
                  Hiring a mentor or tutor is common and therefore let your research committee known about the same.
                  We do not offer any writing services without the involvement of the researcher, and therefore we’re merely a translator
                  for non-native English speakers and our services are merely restricted to research scholars to hasten their research process.
                  We offer following services to research scholars across the globe: ideas to translating in writing, editing,
                  proofreading, plagiarism correction, statistical analysis, coding and algorithm, illustration and formatting.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='main-services'>
              <h4>Main Services</h4>
              <ul>
                <li><a href='/'>PhD Dissertation</a></li>
                <li><a href='/'>Coursework</a></li>
                <li><a href='/'>Literature Review</a></li>
                <li><a href='/'>Phd Research Methodology</a></li>
                <li><a href='/'>Data Analysis</a></li>
                <li><a href='/'>Manuscript</a></li>
                <li><a href='/'>Editing Services</a></li>
                <li><a href='/'>Animation</a></li>
                <li><a href='/'>Courses</a></li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='links'>
              <h4>Links</h4>
              <ul>
                <li><a href='/'>Blog</a></li>
                <li><a href='/'>Industries</a></li>
                <li><a href='/'>Pricing Details</a></li>
                <li><a href='/'>Insights</a></li>
                <li><a href='/'>Help-Guide</a></li>
                <li><a href='/'>Our Sample Work</a></li>
                <li><a href='/'>FAQ</a></li>
                <li><a href='/'>Career</a></li>
                <li><a href='/'>Contact us</a></li>
              </ul>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='contact-us'>
              <h4>Contact Us</h4>
              <h6>UK: +44-7537 144372</h6>
              <h6>India : +91-9176966446</h6>
              <h6>Landline : +91-44-42124284 <br />
                (Between 9.00 am – 6.00 pm IST)</h6>
              <h6>For existing clients: +91-8754446693</h6>
              <h6>Customer Care: +91-9384672299</h6>
              <h6>Email: info@phdassistance.com</h6>

              <div className='search-div'>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit"><IoIosSearch /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

<hr/>
      <div className='copy-right'>
        <p>© 2024 PhDassistance. All Rights Reserved.</p>
        <div className='social-icons'>
        <FaFacebookF href='/'/>
        <FaTwitter href='/'/>
        <FaYoutube href='/'/>
        <FaLinkedin href='/'/>
        <AiFillInstagram href='/'/>
        </div>
      </div>
    </div>
  )
}

export default Footer