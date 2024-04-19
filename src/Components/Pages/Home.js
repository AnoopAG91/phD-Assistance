import React, { useEffect } from 'react'
import './Home.css'
import img1 from '../../images/testimonial/1.jpg'
import img2 from '../../images/testimonial/2.jpg'
import img3 from '../../images/testimonial/3.jpg'
import img4 from '../../images/testimonial/4.jpg'
// import img5 from '../../images/testimonial/5.jpg'
// import img6 from '../../images/testimonial/6.jpg'

import { IoSettingsSharp } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { TiArrowForwardOutline } from "react-icons/ti";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";



import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='home'>
      <section className='banner'>
        <div className='banner-content'>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" className='banner-text'>
            <h1>Succesfully Mentored</h1>
            <h5>Research Scholars & Authors Across The Globe</h5>
            <p>Ph.D. Assistance serves as an external mentor to brainstorm your idea <br /> and translate that into research model.</p>
          </div>
          <button>About Us</button>
        </div>
      </section>

      <section className='services mt-5'>
        <div className='container'>
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" className='services-icon'><IoSettingsSharp /></div>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" className='services-title'>
            <h1>Why PhD Assistance</h1>
            <h1>A Trusted & Academically Sound Mentors representing various Countries </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className='row'>
            <div className='col-md-4'>
              <div className='card-title'>
                <h4>Research Guidance / Mentoring</h4>
              </div>
              <div className='services-cards'>
                <div className='card-image'>
                  <a href='/'><img src='https://www.phdassistance.com/wp-content/uploads/2021/03/home4.jpg' alt='Research Guidance' /></a>
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
                  <a href='/'><img src='https://www.phdassistance.com/wp-content/uploads/2022/09/home5.jpg' alt='Research Guidance' /></a>
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
                  <a href='/'><img src='https://www.phdassistance.com/wp-content/uploads/2022/09/home6.jpg' alt='Research Guidance' /></a>
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

      <section className='services-mobile'>
      <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" className='services-icon'><IoSettingsSharp /></div>
        <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" className='services-title'>
          <h1>Why PhD Assistance</h1>
          <h1>A Trusted & Academically Sound Mentors representing various Countries </h1>
        </div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='col-md-4'>
                <div className='card-title'>
                  <h4>Research Guidance / Mentoring</h4>
                </div>
                <div className='services-cards'>
                  <div className='card-image'>
                    <a href='/'><img src='https://www.phdassistance.com/wp-content/uploads/2021/03/home4.jpg' alt='Research Guidance' /></a>
                  </div>

                  <div className='card-description'>
                    <p>
                      Research Mentoring at all stages of your Research & Publications – Rewriting, Translating your ideas, copyediting, formatting or plagiarism check.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className="carousel-item">
              <div className='col-md-4'>
                <div className='card-title'>
                  <h4>Research Guidance / Mentoring</h4>
                </div>
                <div className='services-cards'>
                  <div className='card-image'>
                    <a href='/'><img src='https://www.phdassistance.com/wp-content/uploads/2022/09/home5.jpg' alt='Research Guidance' /></a>
                  </div>

                  <div className='card-description'>
                    <p>
                      Research Mentoring at all stages of your Research & Publications – Rewriting, Translating your ideas, copyediting, formatting or plagiarism check.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='col-md-4'>
                <div className='card-title'>
                  <h4>Research Guidance / Mentoring</h4>
                </div>
                <div className='services-cards'>
                  <div className='card-image'>
                    <a href='/'><img src='https://www.phdassistance.com/wp-content/uploads/2022/09/home6.jpg' alt='Research Guidance' /></a>
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
        </div>
      </section>

      <section className='mentors'>
        <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" className='mentor-title'>
          <h1>Our Mentors</h1>
        </div>
        <div className='container'>
          <div className='row'>
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" className='col-md-4 mb-3'>
              <div className="card">
                <img className="card-img-top" src="https://www.phdassistance.com/wp-content/uploads/2014/11/home_languageschool_course1.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">RESEARCH MENTORING, DATA ANALYTICS & CONSULTING SERVICES</h5>
                  <p className="card-text">For Students, Research Scholars, Authors & Publishers across the domain</p>
                  <a href="/" class="btn btn-primary">Know More</a>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className='col-md-4 mb-3'>
              <div className="card">
                <img className="card-img-top" src="https://www.phdassistance.com/wp-content/uploads/2020/09/home_languageschool_course4.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Our Core lies in Tutoring and Mentoring</h5>
                  <p className="card-text">We translate our knowledge & Skills to students across the world.</p>
                  <a href="/" class="btn btn-primary">Know More</a>
                </div>
              </div>

            </div>

            <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" className='col-md-4 mb-3'>
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
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className='guarantee-title'>
          <h1>Our Guarantee</h1>
          <h4>What We Deliver, What We Promise</h4>
        </div>

        <div className='container gap-2 mt-5'>
          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" className='row'>
            <div className='guarantee-column col-md-6 d-flex justify-content-start gap-3 align-items-center'>
              <div className='icon'><a href='/'><IoIosTimer /></a></div>
              <div className='text'>
                <h5>On Time Delivery</h5>
                <p>Thereby you can be assured of your submission.</p>
              </div>
            </div>
            <div className='guarantee-column col-md-6 d-flex justify-content-start gap-3 align-items-center'>
              <div className='icon'><a href='/'><AiOutlineLike /></a></div>
              <div className='text'>
                <h5>100% Originality Guarantee</h5>
                <p>All our writing works are scanned through plagiarism software and <br />ensure that the document is delivered with 95-100% plagiarism free.</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" className='row  mb-5'>
            <div className='guarantee-column col-md-6 d-flex justify-content-start gap-3 align-items-center'>
              <div className='icon'><a href='/'><FaBook /></a></div>
              <div className='text'>
                <h5>On Time Delivery</h5>
                <p>Thereby you can be assured of your submission.</p>
              </div>
            </div>
            <div className='guarantee-column col-md-6 d-flex justify-content-start gap-3 align-items-center'>
              <div className='icon'><a href='/'><TiArrowForwardOutline /></a></div>
              <div className='text'>
                <h5>On Time Delivery</h5>
                <p>Thereby you can be assured of your submission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='testimonials'>
        <div className='testimonial-title'>
          <h1>What Our Clients Says</h1>
        </div>

        <div className='testimonial-wrapper'>
          <div id="carouselExampleCaptions" class="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='carousel-image'>
                  <img src={img1} alt="..." />
                </div>

                <div className="carousel-caption d-md-block">
                  <h5>John Voghley</h5>
                  <p><FaQuoteLeft /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime facere eius vel asperiores sapiente
                    architecto iste error numquam hic perferendis consequuntur nulla temporibus id quibusdam ipsa! Obcaecati, hic quibusdam.<FaQuoteRight /></p>
                </div>
              </div>
              <div className="carousel-item ">
                <div className='carousel-image'>
                  <img src={img1} alt="..." />
                </div>

                <div className="carousel-caption d-md-block">
                  <h5>John Voghley</h5>
                  <p><FaQuoteLeft /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime facere eius vel asperiores sapiente
                    architecto iste error numquam hic perferendis consequuntur nulla temporibus id quibusdam ipsa! Obcaecati, hic quibusdam.<FaQuoteRight /></p>
                </div>
              </div>
              <div className="carousel-item">
                <div className='carousel-image'>
                  <img src={img1} alt="..." />
                </div>

                <div className="carousel-caption d-md-block">
                  <h5>John Voghley</h5>
                  <p><FaQuoteLeft /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maxime facere eius vel asperiores sapiente
                    architecto iste error numquam hic perferendis consequuntur nulla temporibus id quibusdam ipsa! Obcaecati, hic quibusdam. <FaQuoteRight /></p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home