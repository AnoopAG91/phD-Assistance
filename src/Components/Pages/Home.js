import React from 'react'
import './Home.css'
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { TiArrowForwardOutline } from "react-icons/ti";



function Home() {
  return (
    <div className='home'>
      <section className='banner'>
        <div className='banner-content'>
          <div className='banner-text'>
            <h1>Succesfully Mentored</h1>
            <h5>Research Scholars & Authors Across The Globe</h5>
            <p>Ph.D. Assistance serves as an external mentor to brainstorm your idea <br /> and translate that into research model.</p>
          </div>
          <button>About Us</button>
        </div>
      </section>

      <section className='services mt-5'>
        <div className='container'>
          <div className='services-icon'><IoSettingsSharp /></div>
          <div className='services-title'>
            <h1>Why PhD Assistance</h1>
            <h1>A Trusted & Academically Sound Mentors representing various Countries </h1>
          </div>

          <div className='row'>
            <div className='col-md-4'>
            <div className='card-title'>
                  <h4>Research Guidance / Mentoring</h4>
                </div>
              <div className='services-cards'>
               <div className='card-image'>
                  <a href='https://www.facebook.com'><img src='https://www.phdassistance.com/wp-content/uploads/2021/03/home4.jpg' alt='Research Guidance' /></a>
                </div>

                <div className='card-description'>
                  <p>
                    Research Mentoring at all stages of your Research & Publications – Rewriting, Translating your ideas, copyediting, formatting or plagiarism check.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
            <div className='card-title'>
                  <h4>Research Guidance / Mentoring</h4>
                </div>
              <div className='services-cards'>
                <div className='card-image'>
                  <a href='https://www.facebook.com'><img src='https://www.phdassistance.com/wp-content/uploads/2022/09/home5.jpg' alt='Research Guidance' /></a>
                </div>

                <div className='card-description'>
                  <p>
                    Research Mentoring at all stages of your Research & Publications – Rewriting, Translating your ideas, copyediting, formatting or plagiarism check.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
            <div className='card-title'>
                  <h4>Research Guidance / Mentoring</h4>
                </div>
              <div className='services-cards'>
                <div className='card-image'>
                  <a href='https://www.facebook.com'><img src='https://www.phdassistance.com/wp-content/uploads/2022/09/home6.jpg' alt='Research Guidance' /></a>
                </div>

                <div className='card-description'>
                  <p>
                    Research Mentoring at all stages of your Research & Publications – Rewriting, Translating your ideas, copyediting, formatting or plagiarism check.
                  </p>
                </div>
              </div>
            </div>
          </div>



        </div>
      </section>

      <section className='mentors'>
        <div className='mentor-title'>
          <h1>Our Mentors</h1>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 mb-3'>
              <div className="card">
                <img className="card-img-top" src="https://www.phdassistance.com/wp-content/uploads/2014/11/home_languageschool_course1.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">RESEARCH MENTORING, DATA ANALYTICS & CONSULTING SERVICES</h5>
                  <p className="card-text">For Students, Research Scholars, Authors & Publishers across the domain</p>
                  <a href="/" class="btn btn-primary">Know More</a>
                </div>
              </div>
            </div>

            <div className='col-md-4 mb-3'>
              <div className="card">
                <img className="card-img-top" src="https://www.phdassistance.com/wp-content/uploads/2020/09/home_languageschool_course4.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Our Core lies in Tutoring and Mentoring</h5>
                  <p className="card-text">We translate our knowledge & Skills to students across the world.</p>
                  <a href="/" class="btn btn-primary">Know More</a>
                </div>
              </div>

            </div>

            <div className='col-md-4 mb-3'>
              <div className="card">
                <img className="card-img-top" src=" https://www.phdassistance.com/wp-content/uploads/2014/11/home_languageschool_course3.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title"> Highly Commendable PhD Research</h5>
                  <p className="card-text">We work to help you prepare at every stage of your research, to ensure that you’re capable to deliver high quality Thesis / Dissertation.</p>
                  <a href="/" class="btn btn-primary">Know More</a>
                </div>
              </div>
             


            </div>
          </div>
        </div>
      </section>
      
      <section className='guarantee my-5'>
        <div className='guarantee-title'>
          <h1>Our Guarantee</h1>
          <h4>What We Deliver, What We Promise</h4>
        </div>

        <div className='container gap-2 mt-5'>
          <div className='row mb-5'>
            <div className='col-md-6 d-flex justify-content-start gap-3 align-items-center'>
              <div className='icon'><a href='/'><IoIosTimer /></a></div>
              <div className='text'>
                <h5>On Time Delivery</h5>
                <p>Thereby you can be assured of your submission.</p>
              </div>
            </div>
            <div className='col-md-6 d-flex justify-content-start gap-3 align-items-center'>
              <div className='icon'><a href='/'><AiOutlineLike /></a></div>
              <div className='text'>
                <h5>100% Originality Guarantee</h5>
                <p>All our writing works are scanned through plagiarism software and <br/>ensure that the document is delivered with 95-100% plagiarism free.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 d-flex justify-content-start gap-3 align-items-center'>
              <div className='icon'><a href='/'><FaBook /></a></div>
              <div className='text'>
                <h5>On Time Delivery</h5>
                <p>Thereby you can be assured of your submission.</p>
              </div>
            </div>
            <div className='col-md-6 d-flex justify-content-start gap-3 align-items-center'>
              <div className='icon'><a href='/'><TiArrowForwardOutline /></a></div>
              <div className='text'>
                <h5>On Time Delivery</h5>
                <p>Thereby you can be assured of your submission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home