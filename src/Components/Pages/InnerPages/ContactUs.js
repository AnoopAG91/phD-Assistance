import React, { useState } from 'react'
import './ContactUs.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { countries } from 'countries-list';
import Select from 'react-select';


function ContactUs() {

    // for mobilenumber
    const [number, setNumber] = useState('in')


    // for countries
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    // for options 
    const options = [
        { value: 'Literature Review', label: 'Literature Review' },
        { value: 'Research Methodology', label: 'Research Methodology' },
        { value: 'Data Collection', label: 'Data Collection' },
        { value: 'Systematic Review', label: 'Systematic Review' },
        { value: 'Questionaire Development', label: 'Questionaire Development' },
        { value: 'Coding and Algorithm Implementation', label: 'Coding and Algorithm Implementation' },
        { value: 'Meta Analysis', label: 'Meta Analysis' },
        { value: 'Discussion & Conclusions', label: 'Discussion & Conclusions' },
        { value: 'Powerpoint Presentation', label: 'Powerpoint Presentation' },
        { value: 'Online Tutoring / Consultation', label: 'Online Tutoring / Consultation' },
        { value: 'PhD Topic Selection', label: 'PhD Topic Selection' },
        { value: 'Problem Identification', label: 'Problem Identification' },
        { value: 'PhD Research Proposal', label: 'PhD Research Proposal' },
        { value: 'PhD Thesis', label: 'PhD Thesis' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='contact-wrapper container-fluid'>
            <div className="row">
                <div className="contact-left col-md-9">
                    <div className="contact-header">
                        <div className="contact-header-content">
                            <h1>Contact Us</h1>
                            <h5>Authors Are Ready To Collaborate With You</h5>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form>
                            <div className="form-group" >
                                <label for="exampleInputName">Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                            </div>
                            <div className="form-group" >
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Mobile Number</label>
                                <PhoneInput
                                    country={number}
                                    placeholder='Enter Your Mobile Number'
                                    onChange={(value) => setNumber(value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select" id="country" value={selectedCountry} onChange={handleChange}>
                                    <option value="">--select--</option>
                                    {Object.keys(countries).map((countryCode) => (
                                        <option key={countryCode} value={countryCode}>
                                            {countries[countryCode].name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">

                                <Select
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="floatingTextarea2">Requirements</label>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "15vh" }}></textarea>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

                <div className="contact-sidebar col-md-3">
                    <div className="sidebar-inner p-3 text-start">
                        <div className='location '>
                            <h2>Location</h2>
                            <h5>UK</h5>
                            <p>10 Park Place, <br />
                                Manchester M4 4EY <br />
                                UK: +44 7537144372</p>
                        </div>
                        <div className='location mt-4'>

                            <h5>INDIA</h5>
                            <p>10, Kutty Street,
                                <br />
                                Nungambakkam
                                Chennai – 600 034 
                                <br />
                                India: +91-9176966446</p>
                        </div>
                        <div className='location mt-4'>
                           
                            <p>Timings:Monday – Saturday : 09:00 – 21:00 (BST) <br />
                            Sunday : 10:00 – 18: 00 (BST) <br />
                                UK: +44 7537144372</p>
                             <p><strong>Skype:</strong> PhD Assistance</p> 
                             <p><strong>Landline: </strong> +91-44-4212 4284</p> 
                             <p>(Between 9.00 am – 6.00 pm IST)</p>  

                                    <hr />

                             <p><strong>For existing clients: </strong> +91-87544 46693</p>  
                             <p><strong>For existing clients: </strong> +91-87544 46693</p>  
                             <p><strong>Email: </strong> info@phdassistance.com</p>  
                             <p><strong>Email: </strong> info@phdassistance.com</p>  
                             <p><strong>For New Enquiries:</strong> Mr. Vinoth,</p>  
                             <p>info@phdassistance.com</p>
                             <p><strong>For Feedback:</strong> feedback@phdassistance.com</p>
                             <p><strong> Customer Care: </strong>+91-9384672299</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContactUs