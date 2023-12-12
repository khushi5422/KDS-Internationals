import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
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
    // if (form.current) {
    //   emailjs
    //     .sendForm(
    //       "service_te7i92q",
    //       "template_iopy4qn",
    //       form.current,
    //       "KunU0tXpaWQjLQJX4"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         console.log("Message sent successfully");
    //       },
    //       (error) => {
    //         console.log(error.text);
    //         console.log("Error sending message");
    //       }
    //     );
    // }
  };

  return (
    <>
      <style>
        {`
        .wrapper{
          width: 100%;
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
                  <div className="row no-gutters mb-5 bg-info mt-5">
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
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  id="liveToastBtn"
                                  type="submit"
                                  value="Send Message"
                                  className="btn btn-primary"
                                />
                                <div className="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-5 d-flex align-items-stretch">
                      <div id="map">
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
                          <svg
                            width="61"
                            height="61"
                            viewBox="0 0 61 61"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.780029"
                              width="60"
                              height="60"
                              rx="30"
                              fill="#2553B8"
                            />
                            <g clip-path="url(#clip0_1_384)">
                              <path
                                d="M38.3571 34.6193C38.3571 34.8202 38.3199 35.0825 38.2455 35.4061C38.1711 35.7298 38.093 35.9846 38.0111 36.1706C37.8549 36.5427 37.401 36.937 36.6495 37.3537C35.9501 37.7331 35.2582 37.9229 34.5736 37.9229C34.3727 37.9229 34.1756 37.9099 33.9821 37.8838C33.7887 37.8578 33.5747 37.8113 33.3404 37.7443C33.106 37.6773 32.9311 37.6234 32.8158 37.5825C32.7005 37.5416 32.494 37.4653 32.1964 37.3537C31.8988 37.2421 31.7165 37.1751 31.6495 37.1528C30.9204 36.8924 30.2693 36.5836 29.6964 36.2265C28.7515 35.6387 27.7693 34.8351 26.75 33.8157C25.7306 32.7964 24.927 31.8143 24.3393 30.8693C23.9821 30.2964 23.6733 29.6454 23.4129 28.9162C23.3906 28.8492 23.3236 28.6669 23.212 28.3693C23.1004 28.0717 23.0241 27.8652 22.9832 27.7499C22.9423 27.6346 22.8884 27.4597 22.8214 27.2253C22.7544 26.991 22.7079 26.777 22.6819 26.5836C22.6558 26.3901 22.6428 26.193 22.6428 25.9921C22.6428 25.3076 22.8326 24.6156 23.212 23.9162C23.6287 23.1647 24.023 22.7108 24.3951 22.5546C24.5811 22.4727 24.8359 22.3946 25.1596 22.3202C25.4832 22.2458 25.7455 22.2086 25.9464 22.2086C26.0506 22.2086 26.1287 22.2198 26.1808 22.2421C26.3147 22.2867 26.5119 22.5695 26.7723 23.0903C26.8541 23.2317 26.9657 23.4326 27.1071 23.693C27.2485 23.9534 27.3787 24.1896 27.4977 24.4017C27.6168 24.6137 27.7321 24.8128 27.8437 24.9988C27.866 25.0285 27.9311 25.1215 28.039 25.2778C28.1469 25.434 28.2269 25.5661 28.279 25.674C28.3311 25.7819 28.3571 25.8879 28.3571 25.9921C28.3571 26.1409 28.2511 26.3269 28.039 26.5501C27.827 26.7733 27.5963 26.9779 27.3471 27.164C27.0978 27.35 26.8672 27.5471 26.6551 27.7555C26.443 27.9638 26.337 28.1349 26.337 28.2689C26.337 28.3358 26.3556 28.4195 26.3928 28.52C26.43 28.6204 26.4616 28.6967 26.4877 28.7488C26.5137 28.8009 26.5658 28.8901 26.6439 29.0166C26.7221 29.1431 26.7648 29.2138 26.7723 29.2287C27.3378 30.248 27.9851 31.1223 28.7143 31.8515C29.4434 32.5806 30.3177 33.2279 31.337 33.7934C31.3519 33.8009 31.4226 33.8436 31.5491 33.9218C31.6756 33.9999 31.7648 34.052 31.8169 34.078C31.869 34.1041 31.9453 34.1357 32.0457 34.1729C32.1462 34.2101 32.2299 34.2287 32.2968 34.2287C32.4308 34.2287 32.6019 34.1227 32.8102 33.9106C33.0186 33.6986 33.2157 33.4679 33.4018 33.2186C33.5878 32.9694 33.7924 32.7387 34.0156 32.5267C34.2388 32.3146 34.4248 32.2086 34.5736 32.2086C34.6778 32.2086 34.7838 32.2346 34.8917 32.2867C34.9996 32.3388 35.1317 32.4188 35.2879 32.5267C35.4442 32.6346 35.5372 32.6997 35.5669 32.722C35.7529 32.8336 35.952 32.9489 36.164 33.068C36.3761 33.187 36.6123 33.3172 36.8727 33.4586C37.1332 33.6 37.334 33.7116 37.4754 33.7934C37.9962 34.0538 38.279 34.251 38.3236 34.3849C38.3459 34.437 38.3571 34.5151 38.3571 34.6193Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_384">
                                <rect
                                  width="15.72"
                                  height="20"
                                  fill="white"
                                  transform="matrix(1 0 0 -1 22.6399 40.78)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
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
                          <svg
                            width="61"
                            height="61"
                            viewBox="0 0 61 61"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.780029"
                              width="60"
                              height="60"
                              rx="30"
                              fill="#2553B8"
                            />
                            <g clip-path="url(#clip0_1_384)">
                              <path
                                d="M38.3571 34.6193C38.3571 34.8202 38.3199 35.0825 38.2455 35.4061C38.1711 35.7298 38.093 35.9846 38.0111 36.1706C37.8549 36.5427 37.401 36.937 36.6495 37.3537C35.9501 37.7331 35.2582 37.9229 34.5736 37.9229C34.3727 37.9229 34.1756 37.9099 33.9821 37.8838C33.7887 37.8578 33.5747 37.8113 33.3404 37.7443C33.106 37.6773 32.9311 37.6234 32.8158 37.5825C32.7005 37.5416 32.494 37.4653 32.1964 37.3537C31.8988 37.2421 31.7165 37.1751 31.6495 37.1528C30.9204 36.8924 30.2693 36.5836 29.6964 36.2265C28.7515 35.6387 27.7693 34.8351 26.75 33.8157C25.7306 32.7964 24.927 31.8143 24.3393 30.8693C23.9821 30.2964 23.6733 29.6454 23.4129 28.9162C23.3906 28.8492 23.3236 28.6669 23.212 28.3693C23.1004 28.0717 23.0241 27.8652 22.9832 27.7499C22.9423 27.6346 22.8884 27.4597 22.8214 27.2253C22.7544 26.991 22.7079 26.777 22.6819 26.5836C22.6558 26.3901 22.6428 26.193 22.6428 25.9921C22.6428 25.3076 22.8326 24.6156 23.212 23.9162C23.6287 23.1647 24.023 22.7108 24.3951 22.5546C24.5811 22.4727 24.8359 22.3946 25.1596 22.3202C25.4832 22.2458 25.7455 22.2086 25.9464 22.2086C26.0506 22.2086 26.1287 22.2198 26.1808 22.2421C26.3147 22.2867 26.5119 22.5695 26.7723 23.0903C26.8541 23.2317 26.9657 23.4326 27.1071 23.693C27.2485 23.9534 27.3787 24.1896 27.4977 24.4017C27.6168 24.6137 27.7321 24.8128 27.8437 24.9988C27.866 25.0285 27.9311 25.1215 28.039 25.2778C28.1469 25.434 28.2269 25.5661 28.279 25.674C28.3311 25.7819 28.3571 25.8879 28.3571 25.9921C28.3571 26.1409 28.2511 26.3269 28.039 26.5501C27.827 26.7733 27.5963 26.9779 27.3471 27.164C27.0978 27.35 26.8672 27.5471 26.6551 27.7555C26.443 27.9638 26.337 28.1349 26.337 28.2689C26.337 28.3358 26.3556 28.4195 26.3928 28.52C26.43 28.6204 26.4616 28.6967 26.4877 28.7488C26.5137 28.8009 26.5658 28.8901 26.6439 29.0166C26.7221 29.1431 26.7648 29.2138 26.7723 29.2287C27.3378 30.248 27.9851 31.1223 28.7143 31.8515C29.4434 32.5806 30.3177 33.2279 31.337 33.7934C31.3519 33.8009 31.4226 33.8436 31.5491 33.9218C31.6756 33.9999 31.7648 34.052 31.8169 34.078C31.869 34.1041 31.9453 34.1357 32.0457 34.1729C32.1462 34.2101 32.2299 34.2287 32.2968 34.2287C32.4308 34.2287 32.6019 34.1227 32.8102 33.9106C33.0186 33.6986 33.2157 33.4679 33.4018 33.2186C33.5878 32.9694 33.7924 32.7387 34.0156 32.5267C34.2388 32.3146 34.4248 32.2086 34.5736 32.2086C34.6778 32.2086 34.7838 32.2346 34.8917 32.2867C34.9996 32.3388 35.1317 32.4188 35.2879 32.5267C35.4442 32.6346 35.5372 32.6997 35.5669 32.722C35.7529 32.8336 35.952 32.9489 36.164 33.068C36.3761 33.187 36.6123 33.3172 36.8727 33.4586C37.1332 33.6 37.334 33.7116 37.4754 33.7934C37.9962 34.0538 38.279 34.251 38.3236 34.3849C38.3459 34.437 38.3571 34.5151 38.3571 34.6193Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_384">
                                <rect
                                  width="15.72"
                                  height="20"
                                  fill="white"
                                  transform="matrix(1 0 0 -1 22.6399 40.78)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">+ 1235 2355 98</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 boxtop">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <svg
                            width="61"
                            height="61"
                            viewBox="0 0 61 61"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.780029"
                              width="60"
                              height="60"
                              rx="30"
                              fill="#2553B8"
                            />
                            <g clip-path="url(#clip0_1_384)">
                              <path
                                d="M38.3571 34.6193C38.3571 34.8202 38.3199 35.0825 38.2455 35.4061C38.1711 35.7298 38.093 35.9846 38.0111 36.1706C37.8549 36.5427 37.401 36.937 36.6495 37.3537C35.9501 37.7331 35.2582 37.9229 34.5736 37.9229C34.3727 37.9229 34.1756 37.9099 33.9821 37.8838C33.7887 37.8578 33.5747 37.8113 33.3404 37.7443C33.106 37.6773 32.9311 37.6234 32.8158 37.5825C32.7005 37.5416 32.494 37.4653 32.1964 37.3537C31.8988 37.2421 31.7165 37.1751 31.6495 37.1528C30.9204 36.8924 30.2693 36.5836 29.6964 36.2265C28.7515 35.6387 27.7693 34.8351 26.75 33.8157C25.7306 32.7964 24.927 31.8143 24.3393 30.8693C23.9821 30.2964 23.6733 29.6454 23.4129 28.9162C23.3906 28.8492 23.3236 28.6669 23.212 28.3693C23.1004 28.0717 23.0241 27.8652 22.9832 27.7499C22.9423 27.6346 22.8884 27.4597 22.8214 27.2253C22.7544 26.991 22.7079 26.777 22.6819 26.5836C22.6558 26.3901 22.6428 26.193 22.6428 25.9921C22.6428 25.3076 22.8326 24.6156 23.212 23.9162C23.6287 23.1647 24.023 22.7108 24.3951 22.5546C24.5811 22.4727 24.8359 22.3946 25.1596 22.3202C25.4832 22.2458 25.7455 22.2086 25.9464 22.2086C26.0506 22.2086 26.1287 22.2198 26.1808 22.2421C26.3147 22.2867 26.5119 22.5695 26.7723 23.0903C26.8541 23.2317 26.9657 23.4326 27.1071 23.693C27.2485 23.9534 27.3787 24.1896 27.4977 24.4017C27.6168 24.6137 27.7321 24.8128 27.8437 24.9988C27.866 25.0285 27.9311 25.1215 28.039 25.2778C28.1469 25.434 28.2269 25.5661 28.279 25.674C28.3311 25.7819 28.3571 25.8879 28.3571 25.9921C28.3571 26.1409 28.2511 26.3269 28.039 26.5501C27.827 26.7733 27.5963 26.9779 27.3471 27.164C27.0978 27.35 26.8672 27.5471 26.6551 27.7555C26.443 27.9638 26.337 28.1349 26.337 28.2689C26.337 28.3358 26.3556 28.4195 26.3928 28.52C26.43 28.6204 26.4616 28.6967 26.4877 28.7488C26.5137 28.8009 26.5658 28.8901 26.6439 29.0166C26.7221 29.1431 26.7648 29.2138 26.7723 29.2287C27.3378 30.248 27.9851 31.1223 28.7143 31.8515C29.4434 32.5806 30.3177 33.2279 31.337 33.7934C31.3519 33.8009 31.4226 33.8436 31.5491 33.9218C31.6756 33.9999 31.7648 34.052 31.8169 34.078C31.869 34.1041 31.9453 34.1357 32.0457 34.1729C32.1462 34.2101 32.2299 34.2287 32.2968 34.2287C32.4308 34.2287 32.6019 34.1227 32.8102 33.9106C33.0186 33.6986 33.2157 33.4679 33.4018 33.2186C33.5878 32.9694 33.7924 32.7387 34.0156 32.5267C34.2388 32.3146 34.4248 32.2086 34.5736 32.2086C34.6778 32.2086 34.7838 32.2346 34.8917 32.2867C34.9996 32.3388 35.1317 32.4188 35.2879 32.5267C35.4442 32.6346 35.5372 32.6997 35.5669 32.722C35.7529 32.8336 35.952 32.9489 36.164 33.068C36.3761 33.187 36.6123 33.3172 36.8727 33.4586C37.1332 33.6 37.334 33.7116 37.4754 33.7934C37.9962 34.0538 38.279 34.251 38.3236 34.3849C38.3459 34.437 38.3571 34.5151 38.3571 34.6193Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_384">
                                <rect
                                  width="15.72"
                                  height="20"
                                  fill="white"
                                  transform="matrix(1 0 0 -1 22.6399 40.78)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@yoursite.com">
                              info@yoursite.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 boxtop">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <svg
                            width="61"
                            height="61"
                            viewBox="0 0 61 61"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.780029"
                              width="60"
                              height="60"
                              rx="30"
                              fill="#2553B8"
                            />
                            <g clip-path="url(#clip0_1_384)">
                              <path
                                d="M38.3571 34.6193C38.3571 34.8202 38.3199 35.0825 38.2455 35.4061C38.1711 35.7298 38.093 35.9846 38.0111 36.1706C37.8549 36.5427 37.401 36.937 36.6495 37.3537C35.9501 37.7331 35.2582 37.9229 34.5736 37.9229C34.3727 37.9229 34.1756 37.9099 33.9821 37.8838C33.7887 37.8578 33.5747 37.8113 33.3404 37.7443C33.106 37.6773 32.9311 37.6234 32.8158 37.5825C32.7005 37.5416 32.494 37.4653 32.1964 37.3537C31.8988 37.2421 31.7165 37.1751 31.6495 37.1528C30.9204 36.8924 30.2693 36.5836 29.6964 36.2265C28.7515 35.6387 27.7693 34.8351 26.75 33.8157C25.7306 32.7964 24.927 31.8143 24.3393 30.8693C23.9821 30.2964 23.6733 29.6454 23.4129 28.9162C23.3906 28.8492 23.3236 28.6669 23.212 28.3693C23.1004 28.0717 23.0241 27.8652 22.9832 27.7499C22.9423 27.6346 22.8884 27.4597 22.8214 27.2253C22.7544 26.991 22.7079 26.777 22.6819 26.5836C22.6558 26.3901 22.6428 26.193 22.6428 25.9921C22.6428 25.3076 22.8326 24.6156 23.212 23.9162C23.6287 23.1647 24.023 22.7108 24.3951 22.5546C24.5811 22.4727 24.8359 22.3946 25.1596 22.3202C25.4832 22.2458 25.7455 22.2086 25.9464 22.2086C26.0506 22.2086 26.1287 22.2198 26.1808 22.2421C26.3147 22.2867 26.5119 22.5695 26.7723 23.0903C26.8541 23.2317 26.9657 23.4326 27.1071 23.693C27.2485 23.9534 27.3787 24.1896 27.4977 24.4017C27.6168 24.6137 27.7321 24.8128 27.8437 24.9988C27.866 25.0285 27.9311 25.1215 28.039 25.2778C28.1469 25.434 28.2269 25.5661 28.279 25.674C28.3311 25.7819 28.3571 25.8879 28.3571 25.9921C28.3571 26.1409 28.2511 26.3269 28.039 26.5501C27.827 26.7733 27.5963 26.9779 27.3471 27.164C27.0978 27.35 26.8672 27.5471 26.6551 27.7555C26.443 27.9638 26.337 28.1349 26.337 28.2689C26.337 28.3358 26.3556 28.4195 26.3928 28.52C26.43 28.6204 26.4616 28.6967 26.4877 28.7488C26.5137 28.8009 26.5658 28.8901 26.6439 29.0166C26.7221 29.1431 26.7648 29.2138 26.7723 29.2287C27.3378 30.248 27.9851 31.1223 28.7143 31.8515C29.4434 32.5806 30.3177 33.2279 31.337 33.7934C31.3519 33.8009 31.4226 33.8436 31.5491 33.9218C31.6756 33.9999 31.7648 34.052 31.8169 34.078C31.869 34.1041 31.9453 34.1357 32.0457 34.1729C32.1462 34.2101 32.2299 34.2287 32.2968 34.2287C32.4308 34.2287 32.6019 34.1227 32.8102 33.9106C33.0186 33.6986 33.2157 33.4679 33.4018 33.2186C33.5878 32.9694 33.7924 32.7387 34.0156 32.5267C34.2388 32.3146 34.4248 32.2086 34.5736 32.2086C34.6778 32.2086 34.7838 32.2346 34.8917 32.2867C34.9996 32.3388 35.1317 32.4188 35.2879 32.5267C35.4442 32.6346 35.5372 32.6997 35.5669 32.722C35.7529 32.8336 35.952 32.9489 36.164 33.068C36.3761 33.187 36.6123 33.3172 36.8727 33.4586C37.1332 33.6 37.334 33.7116 37.4754 33.7934C37.9962 34.0538 38.279 34.251 38.3236 34.3849C38.3459 34.437 38.3571 34.5151 38.3571 34.6193Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_384">
                                <rect
                                  width="15.72"
                                  height="20"
                                  fill="white"
                                  transform="matrix(1 0 0 -1 22.6399 40.78)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
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
