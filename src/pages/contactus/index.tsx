import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
interface FormData {
  cont_name: string;
  cont_company: string;
  cont_email: string;
  cont_phone: string;
  message: string;
}
const ContactFooorm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  //DATABASE
  const [formData, setFormData] = useState<FormData>({
    cont_name: "",
    cont_company: "",
    cont_email: "",
    cont_phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("DATTTTTTTTTAAAAAAAAAA:", formData);
    
// try {
    //   const response = await fetch("/api/dataSaver", {
    //     method: "POST",
    //     body: JSON.stringify(formData),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   const data = await response.json();
    //   console.log("Data sent to database:", data);
    // } catch (error) {
    //   console.error("Error sending data to database:", error);
    // }
    // EMAIL JS
    if (form.current) {
      emailjs
        .sendForm(
          "service_yy3l708",
          "template_aotn73l",
          form.current,
          "eGq8AwmDPBcyl1lJV"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Message sent successfully");
          },
          (error) => {
            console.log(error.text);
            console.log("Error sending message");
          }
        );
    }
  };
   

  return (
    <>
      <style>
        {`
        .wrapper{
          width: 100%;
        }
        .bg{
          background-color: orange
        }
        
        .row {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px; }
       
        .boxtop{
          display: flex;
max-width: 17.8125rem;
padding: 0rem 0.9375rem;
flex-direction: column;
align-items: flex-start;
flex: 1 0 0;
        }
        .dbox{
          display: flex;
width: 15.9375rem;
flex-direction: column;
align-items: center;
gap: 1.1875rem;
        }
        .icon{
          display: flex;
height: 3.75rem;
padding: 1.25rem 1.5175rem;
justify-content: center;
align-items: center;
        }
        .text{
          display: flex;
width: 15.9375rem;
padding: 0rem 0.36313rem 0.03688rem 1.01188rem;
flex-direction: column;
align-items: center;
        }
        @media only screen and (max-width: 426px) {
          .row {
            flex-direction: column;
    align-items: center;
          }
        }
      `}
      </style>
      <div>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper ">
                  <div className="row no-gutters mb-5 bg  mt-5">
                    <div className="col-md-7">
                      <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">Contact Us</h3>
                        <div
                          className="position-fixed bottom-0 end-0 p-3"
                          style={{ zIndex: 11 }}
                        >
                          <div
                            id="liveToast"
                            className="toast hide"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                          >
                            <div className="toast-header">
                              <img
                                src="..."
                                className="rounded me-2"
                                alt="..."
                              />
                              <strong className="me-auto">Bootstrap</strong>
                              <small>11 mins ago</small>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="toast-body">
                              Hello, world! This is a toast message.
                            </div>
                          </div>
                        </div>
                        {/* <div id="form-message-warning" className="mb-4"></div>
                        <div id="form-message-success" className="mb-4">
                          Your message was sent, thank you!
                        </div> */}
                        <form onSubmit={handleSubmit} ref={form}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="name">
                                  Name
                                </label>
                                <input
                                  value={formData.cont_name}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="form-control"
                                  name="cont_name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="label" htmlFor="email">
                                  Email Address
                                </label>
                                <input
                                  value={formData.cont_email}
                                  onChange={handleInputChange}
                                  type="email"
                                  className="form-control"
                                  name="cont_email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="companyname">
                                  Company Name
                                </label>
                                <input
                                  value={formData.cont_company}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="form-control"
                                  name="cont_company"
                                  placeholder="Company Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="number">
                                  Phone Number
                                </label>
                                <input
                                  value={formData.cont_phone}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="form-control"
                                  name="cont_phone"
                                  placeholder="Phone Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="label" htmlFor="msg">
                                  Message
                                </label>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  value={formData.message}
                                  onChange={handleInputChange}
                                  cols={30}
                                  rows={4}
                                  placeholder="Message"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12 mt-2">
                              <div className="form-group">
                                <input
                                  id="liveToastBtn"
                                  type="submit"
                                  value="Send Message"
                                  className="btn btn-primary "
                                />
                                <div className="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-stretch pe-0">
                      <div id="map" className="w-100">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6935849343668!2d72.51338867510106!3d23.071692714493736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cae72a11ff9%3A0x61f53a71c0a19197!2sScience%20City%2C%20Bhuyang%20Dev%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1693763615428!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: "0" }}
                          // loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-between">
                    <div className="col-md-3 boxtop">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <img src='location.svg' alt="location"/>
                        </div>
                        <div className="text">
                          <p>
                            <span>Address:</span> 198 West 21th Street, Suite
                            721 New York NY 10016
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 boxtop">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                         <img src='call.svg' alt="Phone Number"/>
                        </div>
                        <div className="text">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://+91 9512154200">+91 9512154200</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 boxtop">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <img src='mail.svg' alt="Mail Id"/>
                        </div>
                        <div className="text">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:jkexports0220@gmail.com">
                            jkexports0220@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 boxtop">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                        <img src='website.svg' alt="Website"/>
                        </div>
                        <div className="text">
                          <p>
                            <span>Website</span> <a href="#">yoursite.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactFooorm;
