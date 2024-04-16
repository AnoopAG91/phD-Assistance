import React from 'react'
import './Home.css'
import { IoSettingsSharp } from "react-icons/io5";



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
            <div className='col-md-4'>
              <div className="card">
                <img className="card-img-top" src="https://www.phdassistance.com/wp-content/uploads/2014/11/home_languageschool_course1.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">RESEARCH MENTORING, DATA ANALYTICS & CONSULTING SERVICES</h5>
                  <p className="card-text">For Students, Research Scholars, Authors & Publishers across the domain</p>
                  <a href="/" class="btn btn-primary">Know More</a>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className="card">
                <img className="card-img-top" src="https://www.phdassistance.com/wp-content/uploads/2020/09/home_languageschool_course4.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Our Core lies in Tutoring and Mentoring</h5>
                  <p className="card-text">We translate our knowledge & Skills to students across the world.</p>
                  <a href="/" class="btn btn-primary">Know More</a>
                </div>
              </div>

            </div>

            <div className='col-md-4'>
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
    </div>
  )
}

export default Home