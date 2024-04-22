import React from 'react'
import './AboutUs.css'
import { Link } from 'react-router-dom'
import { FaPencil } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";



function AboutUs() {
    return (
        <div className='about-wrapper'>
            <div className="header-image">
                <img src='https://www.phdassistance.com/wp-content/uploads/2017/11/about-us.jpg' />
            </div>

            <div className="about-content container my-5">
                <div className='about-content1'>
                    <h1>About PhD Assistance</h1>
                    <p>PhD Assistance, is world’s reputed academic guidance provider for the past 15 years have guided more than
                        4,500 Ph.D. scholars and 10,500 Masters Students across the globe. We support students, research scholars,
                        entrepreneurs, and professionals from various organizations in providing consistently high-quality writing
                        and data analytical services every time. We value every client and make sure their requirements are identified
                        and understood by our specialized professionals and analysts, enriched in experience to deliver technically
                        sound output within the requested timeframe. Writers at PhD Assistance are best referred as 'Researchers'
                        since every topic they handle unique and challenging.
                        <br /><br />
                        We specialize in handling text and data, i.e., content development and Statistical analysis where the latest statistical applications
                        are exhausted by our expert analysts for determining the outcome of the data analysed. Qualified and experienced researchers including
                        Ph.D. holders, statisticians, and research analysts offer cutting edge research consulting and writing services to meet your business
                        information or academic project requirement. Our expertise has passion towards research and personal assistance as we work closely
                        with you for a very professional and quality output within your stipulated time frame. Our services cover vast areas, and we also
                        support either part or entire research paper/service as per your requirement at competitive prices.</p>
                </div>

                <div className='about-content2'>
                    <h1>Vision & Mission</h1>
                    <p>PhD Assistance aspires to the best research guidance provider in the world through its holistic approach irrespective of subjects, countries, and specializations.

                        PhD Assistance aspires to the best research guidance provider in the world through its holistic approach irrespective of subjects, countries, and
                        specializations. To achieve this vision, PhD Assistance approaches each research work through
                        unique methodology and after a lot of discussion between research expertise, professors, data management experts, industry professionals and language & technical
                        editors; we develop the research work. We handle the research works of all the subjects from various countries across the globe.
                        We guide a wide range of researchers who include Research Scholars, Professors and Heads of various departments in prestigious universities, Working Professionals, Entrepreneurs, Industrialists, and students.
                    </p>
                </div>

                <div className='about-content3'>
                    <h1>Confidentiality and Privacy</h1>
                    <p>We ensure that your research data, like your concept, collected data, interview transcripts, printed copies of these works,
                        soft copies, research articles and every document related to your research is confidential and
                        strictly handled only for the internal purposes. We get Non-Disclosure Agreement signed from our expertise who is going to work on your project so that you can
                        be free from hassles in the future. Your data will be kept with us up to six months so that in case if you accidently lost your
                        data (thesis copies, excel sheets) you can get in touch with us for the secured research work of yours. We never use your research works in future from our company or our professional writers or expertise since the copyright of the work is totally for yours because payment dues clearance.</p>
                </div>

                <div className='about-content4'>
                    <h1>Infrastructure and Security</h1>
                    <p>Our team of research expertise is providing this research support for the past 15 years. With an excellent infrastructure
                        equipped with 24-hours power back-up and high-speed internet connectivity, we have access to
                        online databases for accessing the best research sources all over the world. We have an in-house library with a collection of various international standard books
                        which are updated every month as per the curriculum. With specific reference to journal articles, our in-house and online journal
                        databases are at par excellent with some of the popular libraries in Chennai. Our secured CRM software with password protected access ensures your research files are accessed by a limited person. We protect your data from internet phishing or spamming. Thus your research work done at PhD Assistance is secured and safe forever.</p>
                </div>
            </div>

            <div className="about-box container-fluid my-5">
                <div className="row">
                <div className="col-md-4 box1">
                    <p>Our team heads have rich experience in the field of research for more than 15 years especially in
                         the development of questionnaire, research design, quantitative and qualitative study designs, and 
                         statistical analysis. The technical heads will guide you through your research journey and drive you 
                         to achieve your PhD completion dream. 
                        There is complete support at every stage from the identification of PHD topic to the final document.</p>
                </div>

                <div className="col-md-4 box2">
                    <p>The motive of PhD Assistance is to enable scholars and take them out of tough situations along with 
                        providing them full satisfaction. In addition, we also offer university (only UGC recognized) admission 
                        support for various national and international universities, selection of guides/supervisor (UGC recognized),
                         job placement for scholars who have successfully completed and pursuing their PhDs.</p>
                </div>

                <div className="col-md-4 box3">
                    <p>We have state of art infrastructure especially our exclusive library facility has wide range of books and
                         journals to support both scholars and staffs and class room facility to provide tutoring and conduct programs.
                          We provide end to end services from PhD admission to Job placement. 
                        To know more about our services, contact exclusive coordinators from Help Desk.</p>
                </div>
                </div>
                
            </div>

            <div className="about-links container my-5">
                <div className="link">
                    <div className="link-icon ">
                    <FaPencil />
                    </div>
                    <Link to={'/'}>Our Writers</Link>
                </div>
                <div className="link">
                <div className="link-icon ">
                    <BiSolidLike />
                    </div>
                    <Link to={'/'}>Our Guarantee</Link>
                </div>
                <div className="link">
                <div className="link-icon ">
                <HiMiniShoppingBag />
                    </div>
                    <Link to={'/'}>How We Work</Link>
                </div>
                <div className="link">
                <div className="link-icon ">
                <BiSolidQuoteAltRight />
                    </div>
                    <Link to={'/'}>Customer Testimonials</Link>
                </div>
                <div className="link">
                <div className="link-icon ">
                <IoCheckmarkSharp />
                    </div>
                    <Link to={'/'}>Quality Procedures</Link>
                </div>
                <div className="link">
                <div className="link-icon ">
                <IoIosPeople />
                    </div>
                    <Link to={'/'}>Work With Us</Link>
                </div>
                <div className="link">
                <div className="link-icon ">
                <FaQuestionCircle />
                    </div>
                    <Link to={'/'}>FAQ</Link>
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs