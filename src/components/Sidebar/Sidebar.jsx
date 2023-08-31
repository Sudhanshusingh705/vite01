import React,{ useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div>
      <button
        className="toggle-button btn btn-outline-dark"
        style={{marginLeft: '13px', marginTop: '41px',backgroundColor: '#007bff', color:'white'}}
        onClick={toggleModal}
      >
        {modalVisible ? "Close" : "Select Goal"}
      </button>

      {modalVisible && (
        <div className="fullscreen-modal-overlay">
          <div className="fullscreen-modal">
            <div className="modal-content">
              <div className="jsx-4118074806 jsx-2362063205 modal-content">
                <div className="jsx-4118074806 jsx-2362063205 modal-body p-0">
                  <div className="jsx-2003058024 d-flex align-items-center cd-main-header">
                    <div className="jsx-2003058024 container d-flex align-items-center">
                      <div className="jsx-2003058024 pr-3">
                        <div className="jsx-2003058024 d-flex align-items-center justify-content-center">
                          <h2 className="jsx-2003058024 heading font-weight-bold mb-0">
                            You have selected{" "}
                            <span className="jsx-2003058024 text-primary">
                              B.Ed{" "}
                            </span>
                            in{" "}
                            <span className="jsx-2003058024 text-primary">
                              New Delhi
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-2003058024 container">
                    <div className="jsx-2003058024 cd-main_container">
                      <ul className="jsx-2003058024 list">
                        <li className="jsx-2003058024">
                          <a
                            href="/agriculture"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Agriculture
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/animation"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Animation
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/architecture"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Architecture
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/arts"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Arts
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="aviation"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Aviation
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="commerce"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Commerce{" "}
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/computerapplication"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Computer Application
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/dental"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Dental
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/design"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Design
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="education"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Education
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/engineering"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Engineering
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/hotelmanagement"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Hotel Management
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/law"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Law
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/management"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Management
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/masscommunication"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Mass Communication
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/medical"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Medical
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/paramedical"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Para Medical
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/phamasy"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Pharmacy
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/science"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Science
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/veterinary"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Veterinary Science
                          </a>
                        </li>
                        <li className="jsx-2003058024">
                          <a
                            href="/vocationalcourse"
                            style={{ color: "black", textDecoration: "none" }}
                          >
                            Vocational Courses
                          </a>
                        </li>
                      </ul>
                      <div className="jsx-2003058024 exam_list_container">
                        <div className="jsx-2379161319 search d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 451 451"
                            xmlSpace="preserve"
                            loading="lazy"
                          >
                            <path
                              fill="#adb5bd"
                              d="m447.05 428-109.6-109.6c29.4-33.8 47.2-77.9 47.2-126.1C384.65 86.2 298.35 0 192.35 0 86.25 0 .05 86.3.05 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126.1-47.2L428.05 447c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.2-5.2 5.2-13.8 0-19zM26.95 192.3c0-91.2 74.2-165.3 165.3-165.3 91.2 0 165.3 74.2 165.3 165.3s-74.1 165.4-165.3 165.4c-91.1 0-165.3-74.2-165.3-165.4z"
                            />
                          </svg>
                          <input
                            type="text"
                            placeholder="Search your Course"
                            className="jsx-2379161319"
                          />
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={10}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                              loading="lazy"
                            >
                              <path
                                fill="#3B61AD"
                                d="M-198.4 396.3c3.7-2.3 6.2-6.4 6.2-11.1 0-.4 0-.8-.1-1.3h5.1c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1h-5.5l-2.7-11.1c-.3-1.1-.9-2-1.9-2.5-1-.6-2.1-.7-3.2-.4l-4.8 1.4-4.8-1.4c-1.1-.3-2.2-.2-3.2.3s-1.7 1.4-1.9 2.5l-2.8 11.1h-5.6c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h5.1c0 .4-.1.8-.1 1.3 0 7.2 5.9 13.1 13.1 13.1 2.7.1 5.1-.6 7.1-1.9M-212 370c.4-.2.9-.3 1.4-.1l5.1 1.5c.2.1.4.1.7 0l5.1-1.5c.5-.1.9-.1 1.4.1.4.2.7.6.8 1.1l2.5 10.5h-20.4l2.7-10.5c0-.4.3-.8.7-1.1zm17.5 15.2c0 5.9-4.8 10.8-10.8 10.8-5.9 0-10.8-4.8-10.8-10.8 0-.4 0-.8.1-1.3h21.4c0 .5.1.9.1 1.3z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-189.5 407.5c-.1-.1-.2-.1-.2-.2-2-1.6-4.2-2.9-6.6-3.8-.1 0-.1-.1-.2-.1-2.5-.9-5.1-1.5-7.9-1.6-.2-.3-.5-.5-.9-.5s-.7.2-.9.5c-2.8.1-5.4.7-7.9 1.6-.1 0-.1 0-.2.1-2.4.9-4.6 2.2-6.6 3.8-.1.1-.2.1-.2.2-5.6 4.6-9.2 11.5-9.2 19.3 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-6.2 2.5-11.8 6.6-15.9V426.8c.1.5.6.9 1.1.9.5 0 1-.4 1.1-.9v-17.9c1.3-1 2.7-1.9 4.2-2.6v9.6c0 .6.5 1.1 1.1 1.1h17c.6 0 1.1-.5 1.1-1.1v-9.6c1.5.7 2.9 1.6 4.2 2.6v17.9c.1.5.6.9 1.1.9.5 0 1-.4 1.1-.9V410.9c4.1 4.1 6.6 9.7 6.6 15.9 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c.4-7.8-3.2-14.7-8.8-19.3zm-8.5 7.2h-14.7v-9.4c2-.7 4-1.1 6.2-1.2v3c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-3c2.2.1 4.2.5 6.2 1.2v9.4zm2.3 5.8c0 .6-.5 1.1-1.1 1.1h-9.4c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h9.4c.6-.1 1.1.4 1.1 1.1zm-13.9 0c0 .6-.5 1.1-1.1 1.1h-3.1c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1h3.1c.6-.1 1.1.4 1.1 1.1z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Engineering
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="BE/B.Tech"
                              data-csm-href="/engineering"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              BE/B.Tech
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="Diploma in Engineering"
                              data-csm-href="/engineering"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              Diploma in Engineering
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="ME/M.Tech"
                              data-csm-href="/engineering"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              ME/M.Tech
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={13}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                              loading="lazy"
                            >
                              <path
                                fill="#3D61AC"
                                d="M-225.9 405.5v11.3c0 .4-.3.8-.8.8h-1.5c-.4 0-.8-.3-.8-.8v-11.3c0-.4.3-.8.8-.8h1.5c.5.1.8.4.8.8zm8.4-.7h-1.5c-.4 0-.8.3-.8.8v11.3c0 .4.3.8.8.8h1.5c.4 0 .8-.3.8-.8v-11.3c-.1-.5-.4-.8-.8-.8zm9.1-8.2h-1.5c-.4 0-.8.3-.8.8v19.5c0 .4.3.8.8.8h1.5c.4 0 .8-.3.8-.8v-19.5c0-.5-.4-.8-.8-.8zm9.1-6.4h-1.5c-.4 0-.8.3-.8.8v25.9c0 .4.3.8.8.8h1.5c.4 0 .8-.3.8-.8V391c0-.5-.3-.8-.8-.8zm9.2 6.4h-1.5c-.4 0-.8.3-.8.8v19.5c0 .4.3.8.8.8h1.5c.4 0 .8-.3.8-.8v-19.5c-.1-.5-.4-.8-.8-.8zm9.1-10.1h-1.5c-.4 0-.8.3-.8.8v29.5c0 .4.3.8.8.8h1.5c.4 0 .8-.3.8-.8v-29.5c0-.4-.4-.8-.8-.8z"
                                style={{ fill: "rgb(61, 97, 172)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-181.8 376.3c-1.2 0-2.2 1-2.2 2.2 0 .5.1.9.4 1.2l-6.7 9.6c-.2-.1-.4-.1-.7-.1-.5 0-1 .2-1.4.5l-5.6-4.1c0-.2.1-.3.1-.5 0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2 0 .2 0 .4.1.6l-6.1 4.8c-.3-.1-.6-.2-.9-.2-1.2 0-2.2 1-2.2 2.2l-5.5 2.9c-.4-.3-.9-.5-1.4-.5-.8 0-1.5.5-1.9 1.1l-5.1-.8c-.2-1-1.1-1.7-2.1-1.7-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2.8 0 1.5-.5 1.9-1.1l5.1.8c.2 1 1.1 1.7 2.1 1.7 1.2 0 2.2-1 2.2-2.2v-.3l5.3-2.8c.4.5 1 .7 1.6.7 1.2 0 2.2-1 2.2-2.2 0-.3-.1-.6-.2-.9l5.9-4.6c.3.2.8.4 1.2.4.5 0 .9-.2 1.3-.4l5.7 4.1v.4c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.4-.1-.8-.3-1.1l6.7-9.6c.2 0 .4.1.5.1 1.2 0 2.2-1 2.2-2.2 0-1.5-1-2.4-2.2-2.4z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Management
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="MBA/PGDM"
                              data-csm-href="/management"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              MBA/PGDM
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="BBA/BBM"
                              data-csm-href="/management"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              BBA/BBM
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="Executive MBA"
                              data-csm-href="/management"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              Executive MBA
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={5}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                              loading="lazy"
                            >
                              <path
                                fill="#3B61AD"
                                d="m-189.7 379-5.9 5.9H-228l6.2 9.1 5.5 8h15.4l-1.6 5.2H-215c-1.7.1-3 1.5-3 3.3 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3 0-.7-.2-1.3-.5-1.8h5.5c-.3.5-.5 1.1-.5 1.8 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3 0-.8-.3-1.6-.8-2.1l7-22.7 5.2-5.2h6.1V379h-6.9zm-25.8 21.5-4.1-6h16.2V393h-17.2l-4.5-6.6h29.1l-4.3 14.1h-15.2zm2.5 10c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8.8-1.8 1.8-1.8 1.8.8 1.8 1.8zm9.3 1.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8c-.1 1-.9 1.8-1.8 1.8z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-215 407.2c-1.7.2-3 1.6-3 3.3 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3 0-.7-.2-1.3-.5-1.8h5.5c-.3.5-.5 1.1-.5 1.8 0 1.8 1.5 3.3 3.3 3.3 1.8 0 3.3-1.5 3.3-3.3 0-.8-.3-1.6-.8-2.1l-13.9-1.2zm2 3.3c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8.8-1.8 1.8-1.8 1.8.8 1.8 1.8zm9.3 1.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Commerce
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="B.Com"
                              data-csm-href="/commerce"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              B.Com
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="M.Com"
                              data-csm-href="/commerce"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              M.Com
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={3}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              x={0}
                              y={0}
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <style
                                dangerouslySetInnerHTML={{
                                  __html: ".st0{fill:#22b1bc}",
                                }}
                              />
                              <path
                                className="st0"
                                fill="#3B61AD"
                                d="M-192.2 401.8c.9 0 1.8-.4 2.5-1s1-1.6 1-2.5c0-.9-.4-1.8-1-2.5-.7-.7-1.6-1-2.5-1s-1.8.4-2.5 1c-.7.7-1 1.6-1 2.5 0 .9.4 1.8 1 2.5.6.6 1.5 1 2.5 1zm-1.4-4.9c.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.4.4.6.9.6 1.4 0 .5-.2 1-.6 1.4-.7.7-2 .7-2.8 0-.4-.4-.6-.9-.6-1.4 0-.6.2-1.1.6-1.4zM-197.3 410.7c.9 0 1.8-.4 2.5-1 .7-.7 1-1.6 1-2.5 0-.9-.4-1.8-1-2.5-.7-.7-1.6-1-2.5-1s-1.8.4-2.5 1c-.7.7-1 1.6-1 2.5 0 .9.4 1.8 1 2.5.7.6 1.6 1 2.5 1zm-1.3-4.9c.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.4.4.6.9.6 1.4 0 .5-.2 1-.6 1.4-.7.7-2 .7-2.8 0-.4-.4-.6-.9-.6-1.4 0-.6.2-1.1.6-1.4zM-208.6 409.6c-.7.7-1 1.6-1 2.5s.4 1.8 1 2.5c.7.7 1.6 1 2.5 1s1.8-.4 2.5-1c1.4-1.4 1.4-3.6 0-5-.7-.7-1.6-1-2.5-1-1 0-1.9.3-2.5 1zm3.8 3.9c-.7.7-2 .7-2.8 0-.4-.4-.6-.9-.6-1.4 0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.8.8.8 2 0 2.8zM-214.9 403.7c-.9 0-1.8.4-2.5 1-.7.7-1 1.6-1 2.5s.4 1.8 1 2.5c.7.7 1.6 1 2.5 1s1.8-.4 2.5-1c1.4-1.4 1.4-3.6 0-5-.7-.7-1.6-1-2.5-1zm1.3 4.9c-.7.7-2 .7-2.8 0-.4-.4-.6-.9-.6-1.4 0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.8.8.8 2 0 2.8zM-217.6 395.6c-.7-.7-1.6-1-2.5-1-.9 0-1.8.4-2.5 1-.7.7-1 1.6-1 2.5s.4 1.8 1 2.5c.7.7 1.6 1 2.5 1 .9 0 1.8-.4 2.5-1 1.4-1.4 1.4-3.6 0-5zm-1.2 3.9c-.7.7-2 .7-2.8 0-.4-.4-.6-.9-.6-1.4 0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6.8.8.8 2 0 2.8zM-211.4 383c-.9-.9-2-1.4-3.2-1.4-.9 0-1.7.3-2.3.9-1.4 1.4-1.2 3.8.5 5.5.9.9 2 1.4 3.2 1.4.9 0 1.7-.3 2.3-.9.7-.7 1-1.7.9-2.7-.1-1.1-.6-2-1.4-2.8zm-.6 4.4c-.4.4-.9.5-1.2.5-.7 0-1.5-.3-2-.9-1-1-1.2-2.5-.5-3.2.4-.4.9-.5 1.2-.5.7 0 1.5.3 2 .9.5.5.8 1.2.9 1.8.1.5-.1 1-.4 1.4z"
                              />
                              <path
                                fill="#ff6c00"
                                d="M-179.1 373.2c-.2-.2-.5-.3-.7-.2l-3.6.8c-.2.1-1.5.4-2.1 1-.9.9-1.2 2.3-.8 3.5-.2 0-.5 0-.7.1l-5.7 4.5c-.2.1-.3.4-.3.6-.2 0-.4.1-.6.3l-3.5 3.8c-1.2.5-2.3 1.2-3.2 2.1-.6.6-1.5 1-2.4 1-.9 0-1.7-.3-2.4-1s-1-1.6-1-2.6v-.7c-.1-2.4-1.1-4.6-2.8-6.3-1.8-1.8-4.1-2.8-6.7-2.8-2 0-3.8.6-5.4 1.7-.5.3-.9.7-1.2 1-.1.1-.2.3-.4.4v.1l-.1.1c-8.8 8.8-8.8 23 0 31.8 4.2 4.3 9.9 6.6 15.9 6.6s11.7-2.3 15.9-6.6c4.3-4.3 6.7-10.1 6.6-16.3v-.2c-.1-2.4-1.1-4.6-2.8-6.3-.9-.9-1.9-1.6-3-2l.1-.1c.2-.1.3-.4.3-.6.2 0 .4-.1.6-.3l4.6-5.7c.1-.2.2-.4.2-.6.4.1.7.2 1.1.2.9 0 1.8-.4 2.4-1 .4-.5 1-2.4 1.8-5.7.2-.1.1-.4-.1-.6zm-13.8 12.4 1.4 1.4-13.4 12.3-.4.1.1-.4 9.3-10.1 3-3.3zm5 5.2c1.4 1.4 2.2 3.3 2.3 5.4v.2c0 5.6-2.1 10.9-6.1 14.9-3.9 3.9-9.2 6.1-14.8 6.1s-10.8-2.2-14.8-6.1c-8.1-8.1-8.2-21.3-.1-29.5.1 0 .1-.1.2-.1l.1-.1.3-.3c.3-.3.6-.6 1-.9 1.3-.9 2.9-1.4 4.5-1.4 2.1 0 4.1.8 5.5 2.3 1.4 1.4 2.2 3.3 2.3 5.3V387.2c0 1.3.5 2.6 1.4 3.6.9.9 2.2 1.4 3.5 1.4.5 0 1-.1 1.5-.2l-5.5 6c-.1.1-.2.2-.2.4l-.3 1.8c0 .3 0 .5.2.7.1.1.2.1.2.2.1 0 .2.1.3.1h.1l1.8-.3c.1 0 .3-.1.4-.2l12.8-11.7c1.4.3 2.5 1 3.4 1.8zm-1.7-5.8-1.4-1.4 4.4-3.5.5.5-3.5 4.4zm7.8-6.5c-.7.7-1.9.7-2.5 0-.7-.7-.7-1.9 0-2.6.2-.2.8-.4 1.3-.6l2.3-.5c-.4 1.8-.9 3.4-1.1 3.7z"
                                style={{ fill: "rgb(61, 97, 172)" }}
                              />
                            </svg>
                          </div>
                          Arts
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="BA"
                              data-csm-href="/arts"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              BA
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="MA"
                              data-csm-href="/arts"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              MA
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="BFA"
                              data-csm-href="/arts"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              BFA
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="BSW"
                              data-csm-href="/arts"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              BSW
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={15}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3B61AD"
                                d="M-183.4 386.9c-.1-.2-.3-.3-.5-.3-.4-.1-.9.2-.9.6-.1.3-.3 1.1-.9 2l-.3.5-12-12 .5-.3c1.2-.7 2-.9 2.1-.9.4-.1.7-.5.6-.9-.1-.4-.5-.7-1-.6-.1 0-11.5 3.1-9.4 19.5l.1.5h-.5c-.9-.1-1.8-.1-2.6-.1-13.3 0-18.4 8.3-18.6 8.7-.2.3-.1.7.1 1 0 0 .1.1.2.1.3.2.9 0 1.1-.3.1-.2.6-1 1.6-2l.3-.3 13.2 13.2-.3.3c-1.1 1-1.9 1.5-2 1.6-.4.2-.5.7-.3 1.1 0 .1.1.1.1.2.1.1.4.2.6.2.1 0 .3 0 .4-.1.4-.2 9.7-6 8.6-21.2v-.5l.5.1c1.4.2 2.7.3 4 .3 13.2 0 15.6-9.6 15.6-9.6-.2-.4-.2-.6-.3-.8zm-22.7 21.3c-.6 1.8-1.5 3.5-2.5 5l-.8 1-13-13 .9-.7c1.5-1.1 3.2-1.9 5-2.6l.8-.3 9.9 9.9-.3.7zm.9-3.5-.1.8-8.4-8.4.8-.1c2.4-.4 5-.5 7.7-.3h.3v.3c.2 2.7.1 5.3-.3 7.7zm8.6-9.2c-2 .2-4.3.1-6.7-.2h-.3v-.3c-.3-2.4-.4-4.7-.2-6.7l.1-1.4 8.5 8.5-1.4.1zm8.9-3.8c-1.4 1.4-3.2 2.4-5.2 3l-.5.1-9.8-9.8.2-.5c.6-2.1 1.7-3.8 3-5.2l.6-.6 12.4 12.2-.7.8z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="m-209.5 414 .3.3-.2.2-.9.9-13.3-13.2 1.1-1.1 13 12.9zm23.4-24.5-12.2-12.1-1.3 1.3 12.4 12.3 1.1-1.1.2-.2-.2-.2z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Medical
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="MBBS"
                              data-csm-href="/medical"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              MBBS
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="PG Medical"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              PG Medical
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={8}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              x={0}
                              y={0}
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <style
                                dangerouslySetInnerHTML={{
                                  __html: ".st1{fill:#22b1bc}",
                                }}
                              />
                              <path
                                fill="#3B61AD"
                                d="m-180.1 395.6-8.8-9.1c-.5-.5-1.3-.8-2-.8H-193.1v-1.5c0-.6-.4-.9-.5-.9-.1 0-.2-.1-.3-.1-.2 0-.4.1-.7.4l-.3.4-6.2-6.4c-.5-.5-1.3-.8-2-.8h-3c-.8 0-1.5.6-1.6 1.5-.3 2.4-2 5.9-3.6 5.9s-3.2-3.5-3.5-5.9c-.1-.8-.8-1.5-1.6-1.5h-1.9c-.7 0-1.5.4-2 .8l-8.8 9.1c-.6.6-.6 1.6-.1 2.2l3.6 4.2c.3.3.7.5 1.1.5.4 0 .8-.2 1.1-.5l4.3-4.6v16.8c0 .9.7 1.6 1.6 1.6h10.7v4.8c0 .8.6 1.6 1.3 1.8l6 2s.9.3 1.4.3c.5 0 1.4-.3 1.4-.4l5.2-2c.7-.3 1.3-1.1 1.3-1.8v-14.7l6 3.5c.2.1.5.2.9.2.5 0 1-.2 1.4-.6l2-2.2c.4-.6.4-1.6-.2-2.2zm-26.7 9.8h-10.7c-.1 0-.2-.1-.2-.2v-17.7c0-.8-.4-1-.6-1.1-.1 0-.2-.1-.3-.1-.2 0-.5.1-.9.4l-5 5.2h-.1l-3.6-4.2c-.1-.1-.1-.2 0-.3l8.8-9.1c.2-.2.7-.4 1-.4h1.9c.1 0 .2.1.2.2.4 3 2.4 7.1 5 7.1s4.5-4.1 4.9-7.1c0-.2.1-.2.2-.2h3c.3 0 .8.2 1 .4l6.3 6.5-2.7 3.1-4.1-4.6c-.4-.5-.8-.4-1-.3-.1 0-.5.3-.5.9l.1 1.5h-2c-.7 0-1.5.4-2 .8l-8.8 9.1c-.6.6-.6 1.6-.1 2.2l2 2.3c.5.6 1.5.7 2.2.4l6-3.5v8.7zm25.7-8.5-2 2.2c-.1.1-.3.1-.4.1l-6.3-3.7c-.2-.1-.4-.2-.7-.2-.7 0-1.1.5-1.1 1.2v15.1c0 .2-.2.4-.4.5l-5.2 2c-.4.2-.8.3-.9.3-.1 0-.5-.1-.9-.2l-6-2c-.2-.1-.3-.3-.3-.5v-15.1c0-.7-.5-1.2-1.1-1.2h-.2c-.1 0-.3.1-.5.2l-6.3 3.7c-.1.1-.4 0-.4-.1l-2-2.3c-.1-.1-.1-.2 0-.3l8.8-9.1c.2-.2.7-.4 1-.4h1.9c.3 0 .9.2 1.2.4l3.4 2.2c.6.4 1.6.4 2.2 0l3.4-2.2c.3-.2.9-.4 1.2-.4h1.9c.3 0 .8.2 1 .4l8.8 9.1c-.1.1-.1.2-.1.3z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                className="st1"
                                fill="#ff6c00"
                                d="M-198.7 391.5c-.6 0-1 .5-1 1 0 .6.5 1 1 1 .6 0 1-.5 1-1s-.4-1-1-1zm0 1.5c-.2 0-.4-.2-.4-.4s.2-.4.4-.4.4.2.4.4-.2.4-.4.4zM-198.7 396.9c-.6 0-1 .5-1 1 0 .6.5 1 1 1 .6 0 1-.5 1-1s-.4-1-1-1zm0 1.5c-.2 0-.4-.2-.4-.4s.2-.4.4-.4.4.2.4.4-.2.4-.4.4zM-198.7 402.3c-.6 0-1 .5-1 1 0 .6.5 1 1 1 .6 0 1-.5 1-1s-.4-1-1-1zm0 1.5c-.2 0-.4-.2-.4-.4s.2-.4.4-.4.4.2.4.4-.2.4-.4.4zM-198.7 407.7c-.6 0-1 .5-1 1 0 .6.5 1 1 1 .6 0 1-.5 1-1s-.4-1-1-1zm0 1.5c-.2 0-.4-.2-.4-.4s.2-.4.4-.4.4.2.4.4-.2.4-.4.4z"
                              />
                            </svg>
                          </div>
                          Design
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="B.Des"
                              data-csm-href="/design"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              B.Des
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="M.Des"
                              data-csm-href="/design"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              M.Des
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={18}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3C61AC"
                                d="M-198.9 388.6v-14h2v-2h-16v2h2v14s-14 20-14 26 6 6 6 6h28s6 0 6-6-14-26-14-26zm8 30h-28c-.7 0-4-.2-4-4 0-3.9 8.4-17.3 13.6-24.8l.4-.5v-14.6h8v14.6l.4.5c5.3 7.5 13.6 20.9 13.6 24.8 0 3.6-3 3.9-4 4z"
                                style={{ fill: "rgb(60, 97, 172)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-210.8 411c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c1.1.1 2 .9 2 2zm9.3.2c-1.5 0-2.7 1.2-2.7 2.7 0 1.5 1.2 2.7 2.7 2.7 1.5 0 2.7-1.2 2.7-2.7 0-1.5-1.2-2.7-2.7-2.7zm-4.6-3.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5c0-1.3-1.1-2.5-2.5-2.5zm3.2-4.4c0-2.1-1.7-3.7-3.7-3.7-2.1 0-3.7 1.7-3.7 3.7 0 2.1 1.7 3.7 3.7 3.7 2.1.1 3.7-1.6 3.7-3.7zm3.9-1.7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1.1 5.4c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.6-1.3-1.3-1.3z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Science
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="B.Sc"
                              data-csm-href="/science"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              B.Sc
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="M.Sc"
                              data-csm-href="/science"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              M.Sc
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={17}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3B61AD"
                                d="M-203.1 370.8c-6.3 0-11.5 5.1-11.5 11.5v29.1c0 6.3 5.1 11.5 11.5 11.5 6.3 0 11.5-5.1 11.5-11.5v-29.1c-.1-6.3-5.2-11.5-11.5-11.5zm0 2c5.2 0 9.5 4.2 9.5 9.5v13.5h-18.9v-13.5c-.1-5.2 4.1-9.5 9.4-9.5zm0 48c-5.2 0-9.5-4.3-9.5-9.5v-13.5h18.9v13.5c0 5.3-4.2 9.5-9.4 9.5zm5.8-27.5v-7.7c0-.6.4-1 1-1s1 .4 1 1v7.7c0 .6-.4 1-1 1s-1-.4-1-1z"
                                style={{ fill: "rgb(61, 98, 174)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-197.3 393.3v-7.7c0-.6.4-1 1-1s1 .4 1 1v7.7c0 .6-.4 1-1 1s-1-.4-1-1z"
                                style={{ fill: "rgb(36, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Pharmacy
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="B.Pharm"
                              data-csm-href="/pharmacy"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              B.Pharm
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="M.Pharm"
                              data-csm-href="/pharmacy"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              M.Pharm
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={16}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3B61AD"
                                d="M-179.6 423.2c-.3-4.5-3.2-8.2-7.2-9.7 1.8-6.5 2.1-13.5.9-20.4-1-5.5-2.7-9.3-3.1-10l4.2-4.2c.5-.5.8-1.3.8-2.1s-.4-1.5-1-2c-5.5-4.6-12.4-7.1-19.6-7.1s-14.1 2.5-19.6 7.1c-.6.5-.9 1.2-1 2 0 .8.3 1.5.8 2.1l4.3 4.3c-.5.9-2.1 4.6-3.1 9.9-1.2 6.8-.9 13.9.9 20.3-4.1 1.5-7.1 5.3-7.3 9.8v.7c0 .2 0 .3.1.4.4 1.6 1.8 2.8 3.5 2.8h42.6c1.7 0 3.1-1.2 3.5-2.8.1-.1.1-.3.1-.4v-.5c.2-.1.2-.1.2-.2zm-8-29.8c.8 4.6 1.3 11.8-.9 19.6-.7-.1-1.4-.2-2.1-.2-.2-.4-.6-.7-1-.9l-4.6-1.7c-.2-.1-.3-.1-.5-.1-.5-1.1-.5-2.5-.5-3.7v-.2c.6-.6 1.3-1.3 1.9-2 2.9-3.5 4.6-7.8 4.6-11.5 0-2.8-1.2-4.3-4.3-5.5-1.7-.6-3.8-.8-5.9-.9-4-.2-8.1-.4-11.1-4.1 2.3-1.1 4.8-1.7 7.4-1.7 4.5 0 8.7 1.7 12 4.8.2.2.4.2.6.2.2 0 .4-.1.6-.3l1-1c.6 1.4 2 4.7 2.8 9.2zm-12.5 31.9c1.3-5 2.7-10.6 3.3-13.4h.1l4.6 1.7c-1.4 3.5-3.3 7.9-5.2 11.7h-2.8zm-7.4 0c-.9-3.6-1.9-7.5-2.6-10.5 1.5 1.2 3.4 1.9 5.5 1.9 2 0 3.9-.6 5.3-1.7-.7 3-1.7 6.8-2.6 10.3h-5.6zm-4.5 0c-1.6-3.2-3.4-7.1-5.3-11.7l4.6-1.7c.6 2.8 2 8.4 3.3 13.4h-2.6zm-4.7-39.8s0-.1 0 0c1-.9 2-1.7 3.1-2.3 3.5 4.6 8.4 4.8 12.6 5 2 .1 3.9.2 5.4.8 2.7 1 3.1 2 3.1 3.8 0 3.3-1.6 7.1-4.2 10.4-2.5 3.1-5.6 5-7.9 5s-5.4-1.9-7.9-5c-2.6-3.2-4.2-7.1-4.2-10.4v-7.3zm12.1 24.4c1.8 0 3.8-.8 5.7-2.2 0 1 .2 2.1.6 3.1-.1.1-.1.2-.2.3-.7 2.2-3.3 3.8-6.1 3.8-2.9 0-5.4-1.6-6.1-3.8 0-.1-.1-.2-.2-.3.5-1 .6-2.1.7-3.1 1.9 1.4 3.8 2.2 5.6 2.2zm-18.8-33c0-.3.1-.5.3-.7 5.2-4.3 11.7-6.7 18.5-6.7 6.7 0 13.3 2.4 18.5 6.7.2.2.3.4.3.7 0 .3-.1.6-.3.8l-5.9 5.9c-3.5-3-8-4.7-12.6-4.7s-9.1 1.7-12.6 4.7l-5.9-5.9c-.2-.2-.3-.5-.3-.8zm2 16.5c.8-4.4 2.1-7.6 2.7-8.9l.3.3v8c0 3.6 1.7 7.9 4.6 11.5.6.8 1.3 1.4 1.9 2.1v.1c0 1.2 0 2.6-.5 3.7-.2 0-.5 0-.7.1l-4.6 1.7c-.4.2-.8.5-1 .9-.6 0-1.2.1-1.8.2-2.3-8-1.8-15.1-.9-19.7zm-6.5 30.1c.2-4.9 4.2-8.9 9.1-9 1.7 4.1 3.3 7.8 4.8 10.8h-12c-1 0-1.8-.8-1.9-1.8zm44.6 1.8h-12.1c1.7-3.6 3.4-7.6 4.7-10.8 5 0 9.1 4 9.3 9 0 1-.8 1.8-1.9 1.8z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-207.4 375.1h1.9v1.9c0 .5.4.9.9.9s.9-.4.9-.9v-1.9h1.9c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-1.9v-1.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v1.9h-1.9c-.5 0-.9.4-.9.9s.4.9.9.9z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Paramedical
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="B.Sc (Nursing)"
                              data-csm-href="/paramedical"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              B.Sc (Nursing)
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="M.Sc (Nursing)"
                              data-csm-href="/paramedical"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              M.Sc (Nursing)
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={6}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3B61AD"
                                d="M-224.2 407.6h38.4c.9 0 1.6-.7 1.6-1.6v-22.4c0-.9-.7-1.6-1.6-1.6h-38.4c-.9 0-1.6.7-1.6 1.6V406c0 .9.7 1.6 1.6 1.6zm0-23.2c0-.4.4-.8.8-.8h36.8c.4 0 .8.4.8.8v20.8c0 .4-.4.8-.8.8h-36.8c-.4 0-.8-.4-.8-.8v-20.8zm42.4 24.8h-46.4c-.4 0-.8.4-.8.8s.4.8.8.8h46.4c.4 0 .8-.4.8-.8s-.4-.8-.8-.8z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-181.8 409.2h-46.4c-.4 0-.8.4-.8.8s.4.8.8.8h46.4c.4 0 .8-.4.8-.8s-.4-.8-.8-.8z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Computer Applications
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="BCA"
                              data-csm-href="/computerapplication"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              BCA
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="MCA"
                              data-csm-href="/computerapplication"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              MCA
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={9}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3B61AD"
                                d="M-199.2 411.3c-.4-.7-3.1-5.3-.1-8.3.3-.3.4-.7.2-1-.1-.3-.5-.6-.9-.6h-28.6c-.5 0-.9.4-.9.9v9.6c0 .5.4.9.9.9h28.7c.5 0 .9-.4.9-.9 0-.2-.1-.4-.2-.6zm-29-.2v-8h27c-.6 1.1-.8 2.2-.8 3.4h-20.4c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h20.5c.2 1.3.6 2.5 1 3.3h-27.3zm-.5-11.3h28.7c.5 0 .9-.4.9-.9 0-.2-.1-.4-.2-.6-.4-.7-3-5.4-.1-8.3.3-.3.3-.7.2-1-.1-.3-.5-.6-.9-.6h-28.6c-.5 0-.9.4-.9.9v9.6c0 .5.4.9.9.9zm.4-9.7h27c-.6 1.1-.8 2.2-.8 3.4h-20.4c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h20.5c.2 1.3.6 2.5 1 3.3h-27.3v-8.1z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="m-180.4 407.9-7.6-27.6c-.1-.5-.7-.8-1.2-.7-.2.1-.4.2-.5.4-.5.6-4.4 4.4-8 2.3-.3-.2-.7-.2-1 .1-.3.2-.4.6-.3 1l7.6 27.6c.1.5.7.8 1.1.7l9.2-2.5c.5-.2.8-.8.7-1.3zm-9.5 2.3-7.1-26c1.2.3 2.4.2 3.4-.1l5.4 19.7c.1.4.5.6.8.5.4-.1.6-.5.5-.8l-5.4-19.7c1.2-.5 2.2-1.3 3-1.9l7.2 26.3-7.8 2z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Education
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="B.Ed"
                              data-csm-href="/education"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              B.Ed
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="M.Ed"
                              data-csm-href="/education"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              M.Ed
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="B.P.Ed"
                              data-csm-href="/education"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              B.P.Ed
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={1}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3C61AC"
                                d="M-201.6 402.2h-.8v-.1h-1.2v.1h-2.2v-.2h-1.1v.2h-.8c-.3 0-.6.3-.6.6v15.3c0 2 1.6 3.6 3.6 3.6s3.6-1.6 3.6-3.6v-15.3c.1-.4-.1-.6-.5-.6zm-5.4 1.1h4.9v.8h-4.9v-.8zm4.9 14.8c0 1.3-1.1 2.4-2.4 2.4-1.3 0-2.4-1.1-2.4-2.4v-12.8h4.9v12.8z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-197.7 377.6c-1.4-3-4.7-5.1-6.7-5.8h-.4c-1.9.7-5.3 2.7-6.7 5.8-3.5 7.8-2.6 19.4-2.5 19.9 0 .3.3.5.6.5h6.2c.4 0 .7.4.9.9-.3 0-.5.3-.5.6v2.6h5.3-.8v-2.6c0-.3-.2-.5-.5-.6.2-.5.5-.9.9-.9h6.2c.3 0 .6-.2.6-.5 0-.5.9-12.1-2.6-19.9zm-4.4 25.7v.8h-4.9v-.8h4.9zm-3.6-1.2v-2h2.2v2h-2.2zm1.6-3.2h-1c-.3-.7-.8-1.6-1.6-1.9.1-1.5.5-4.3 2.1-4.9 1.5.5 2 3.4 2.1 4.9-.8.3-1.3 1.2-1.6 1.9zm7.8-2h-5.1c-.1-1.5-.6-5.3-3.1-5.9h-.3c-2.5.6-3 4.5-3.1 5.9h-5.1c-.1-2.4-.5-12.2 2.5-18.8 1.1-2.6 4.1-4.5 5.8-5.1 1.7.6 4.7 2.5 5.8 5.1 3.1 6.6 2.8 16.4 2.6 18.8z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Agriculture
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="B.Sc (Agriculture)"
                              data-csm-href="/agriculture"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              B.Sc (Agriculture)
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="M.Sc (Agriculture)"
                              data-csm-href="/agriculture"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              M.Sc (Agriculture)
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={1113}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              width={56}
                              height={56}
                              viewBox="0 0 56 56"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.42 44.553a.566.566 0 0 1-.565-.565c0-.34.227-.566.566-.566h3.165l2.938-5.877H11.413A1.4 1.4 0 0 1 10 36.132V13.413A1.4 1.4 0 0 1 11.413 12h33.174A1.4 1.4 0 0 1 46 13.413v22.719a1.4 1.4 0 0 1-1.413 1.413H31.532l2.939 5.877h3.165c.282 0 .565.227.565.566 0 .339-.226.565-.565.565H18.42Zm14.808-1.13-2.94-5.878h-4.52l-2.94 5.877h10.4ZM11.13 36.131c0 .17.17.34.34.34h33.174c.17 0 .339-.17.339-.34v-2.091H11.13v2.091Zm33.796-3.165V13.413c0-.17-.17-.34-.339-.34H11.413c-.17 0-.34.17-.34.34v19.554h33.853Z"
                                fill="#24A7D0"
                              />
                              <path
                                d="M22.772 30.707c-.17 0-.339-.17-.339-.396 0-.113-.226-12.716-8.081-14.185-.226-.057-.34-.226-.283-.452.057-.17.17-.283.396-.283h.056c5.99 1.13 7.856 8.421 8.42 11.699.396-1.696 1.64-6.443 3.674-6.443 1.922 0 2.826 4.465 3.165 7.178l.057.339.113-.34c.565-1.356 1.582-2.995 3.39-3.22h.057c.17 0 .34.112.396.338 0 .226-.113.396-.34.396-2.712.339-3.39 4.804-3.447 4.973 0 .17-.17.34-.339.34-.226 0-.339-.17-.395-.34-.226-3.673-1.244-8.93-2.657-8.93-1.638 0-2.938 5.483-3.39 8.93-.057.226-.227.396-.453.396Z"
                                fill="#48639E"
                              />
                              <path
                                d="M37.353 28.842c-2.543 0-4.634-2.091-4.634-4.634 0-2.544 2.09-4.635 4.634-4.635 2.543 0 4.634 2.091 4.634 4.635.057 2.543-2.034 4.634-4.634 4.634Zm0-8.364a3.666 3.666 0 0 0-3.673 3.673 3.666 3.666 0 0 0 3.673 3.674 3.666 3.666 0 0 0 3.673-3.674c.057-2.035-1.638-3.673-3.673-3.673Z"
                                fill="#48639E"
                              />
                            </svg>
                          </div>
                          Animation
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="Bachelor of Animation"
                              data-csm-href="/animation"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              Bachelor of Animation
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="Diploma in Animation"
                              data-csm-href="/animation"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              Diploma in Animation
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="Certificate in Animation"
                              data-csm-href="/animation"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              Certificate in Animation
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"  
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={2}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              x={0}
                              y={0}
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <style
                                dangerouslySetInnerHTML={{
                                  __html: ".st1{fill:#22b1bc}",
                                }}
                              />
                              <path
                                fill="#3B61AD"
                                d="M-184 420.5h-5.6V398c0-.4-.2-.7-.5-.9l-6.2-3.9v-21.3c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v6l-8.2 5.1-6.3-5.3c-.3-.3-.8-.3-1.1-.2-.4.2-.6.6-.6 1V396l-5-3.2c-.3-.2-.7-.2-1.1 0-.3.2-.5.5-.5.9v26.7h-5.6c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h42.9c.6 0 1.1-.5 1.1-1.1s-.5-1-1.1-1zm-30.6 0h-4.5v-24.8l4.5 2.8v22zm2.1-39.8 4 3.4-4 2.5v-5.9zm14.1 13.1v26.7h-14v-31.4l6.3-4 7.7-4.8v13.5zm6.7 26.7h-4.5v-24.8l4.5 2.8v22z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                className="st1"
                                fill="#ff6c00"
                                d="M-207.1 409.1v2.5c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1v-2.5c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1zM-208.2 392.9c-.6 0-1.1.5-1.1 1.1v2.5c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1V394c0-.7-.5-1.1-1.1-1.1zM-208.2 400.5c-.6 0-1.1.5-1.1 1.1v2.5c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-2.5c0-.7-.5-1.1-1.1-1.1zM-202.7 397.5c.6 0 1.1-.5 1.1-1.1v-2.5c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.5c0 .6.5 1.1 1.1 1.1zM-202.7 412.7c.6 0 1.1-.5 1.1-1.1v-2.5c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.5c0 .6.5 1.1 1.1 1.1zM-202.7 405.1c.6 0 1.1-.5 1.1-1.1v-2.5c0-.6-.5-1.1-1.1-1.1-.6 0-1.1.5-1.1 1.1v2.5c0 .6.5 1.1 1.1 1.1z"
                              />
                            </svg>
                          </div>
                          Architecture
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="B.Arch"
                              data-csm-href="/architecture"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              B.Arch
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="M.Arch"
                              data-csm-href="/architecture"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              M.Arch
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={11}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3B61AD"
                                d="M-193.2 384.7c-2.2 2.7.4 6.8.4 6.8.2.4.1.9-.2 1.1-.1.1-.3.1-.4.1-.3 0-.5-.1-.7-.4-.1-.2-3.2-5-.3-8.7 2-2.5-.8-6-.9-6.1-.3-.3-.2-.9.1-1.2.3-.3.9-.2 1.2.1 0 0 .9 1.1 1.5 2.6.7 2.3.5 4.2-.7 5.7zm5.5 0c1.2-1.5 1.4-3.4.6-5.5-.6-1.5-1.5-2.6-1.5-2.6-.3-.3-.8-.4-1.2-.1-.3.3-.4.8-.1 1.2 0 0 2.9 3.5.9 6.1-2.9 3.7.2 8.5.3 8.7.2.2.4.4.7.4.2 0 .3 0 .4-.1.4-.2.5-.8.2-1.1.1-.2-2.4-4.3-.3-7zm-33.9-5.2c-.6-1.5-1.5-2.6-1.5-2.6-.3-.3-.8-.4-1.2-.1-.3.3-.4.8-.1 1.2 0 0 2.9 3.5.9 6.1-2.9 3.7.2 8.5.3 8.7.2.2.4.4.7.4.2 0 .3 0 .4-.1.4-.2.5-.8.2-1.1 0 0-2.6-4.1-.4-6.8 1.3-1.6 1.5-3.6.7-5.7zm5.5 0c-.6-1.5-1.5-2.6-1.5-2.6-.3-.3-.8-.4-1.2-.1-.3.3-.4.8-.1 1.2 0 0 2.9 3.5.9 6.1-2.9 3.7.2 8.5.3 8.7.2.2.4.4.7.4.2 0 .3 0 .4-.1.4-.2.5-.8.2-1.1 0 0-2.6-4.1-.4-6.8 1.3-1.6 1.5-3.6.7-5.7z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-183 411h-1.7c-.4-10.3-8.5-18.6-18.6-19.5v-.8c1-.6 1.7-1.7 1.7-3 0-1.9-1.5-3.4-3.4-3.4h-.1c-1.9 0-3.4 1.5-3.4 3.4 0 1.2.6 2.3 1.7 2.9v.8c-10.1.9-18.2 9.2-18.6 19.5h-1.7c-1.5 0-2.7 1.2-2.7 2.7v1c0 1.5 1.2 2.7 2.7 2.7h44.3c1.5 0 2.7-1.2 2.7-2.7v-1c-.1-1.4-1.4-2.6-2.9-2.6zm-24-23.3c0-1 .8-1.8 1.8-1.8h.1c1 0 1.8.8 1.8 1.8 0 .7-.5 1.4-1.1 1.7-.3.1-.5.4-.5.8v1.3h-.3v-1.3c0-.3-.2-.6-.5-.8-.8-.3-1.3-1-1.3-1.7zm25.1 27c0 .6-.5 1.1-1.1 1.1h-44.3c-.6 0-1.1-.5-1.1-1.1v-1c0-.6.5-1.1 1.1-1.1h31c.5 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8h-27.6c.4-9.9 8.6-17.9 18.7-17.9h.2c10 0 18.2 8 18.7 17.9h-4.7c-.5 0-.8.4-.8.8 0 .5.4.8.8.8h8.1c.6 0 1.1.5 1.1 1.1v1z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                            </svg>
                          </div>
                          Hotel Management
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="BHM"
                              data-csm-href="/hotelmanagement"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              BHM
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={12}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3B61AD"
                                d="M-195.5 395.4v4.4l-.3.4c-.5.7-.6 1.7-.2 2.5.4.8 1.2 1.3 2.1 1.3h9.4c.9 0 1.7-.5 2.1-1.3.4-.8.3-1.7-.2-2.5l-.3-.4v-13.5l.3-.4c.5-.7.6-1.7.2-2.5s-1.2-1.3-2.1-1.3h-9.4c-.9 0-1.7.5-2.1 1.3-.4.8-.3 1.7.2 2.5l.3.4v4.4h-12.7c-.3-.5-.8-.8-1.3-.8h-16.3c-1.5 0-2.9 1.1-3.2 2.5-.2.9.1 1.9.6 2.6.6.7 1.5 1.1 2.4 1.1h16.4c.6 0 1.1-.3 1.3-.8l12.8.1zm.9-11.3c.1-.3.4-.4.7-.4h9.4c.3 0 .6.2.7.4.1.3.1.6-.1.8l-.2.3h-5.9c-.4 0-.8.4-.8.8s.3.8.8.8h5.5v12.5h-5.5c-.4 0-.8.4-.8.8s.3.8.8.8h5.9l.2.3c.2.2.2.5.1.8-.1.3-.4.4-.7.4h-9.4c-.3 0-.6-.2-.7-.4-.1-.3-.1-.6.1-.8l.2-.3h1.2c.4 0 .8-.4.8-.8s-.4-.8-.8-.8h-.8v-12.5h.8c.4 0 .8-.4.8-.8s-.4-.8-.8-.8h-1.2l-.2-.3c-.2-.2-.2-.5-.1-.8zm-.9 9.7H-208v-1.6h12.5v1.6zm-30.4.8c-.5 0-.9-.2-1.2-.6-.3-.4-.4-.8-.3-1.3.1-.7.8-1.2 1.6-1.2h16.3v3.1h-16.4z"
                                style={{ fill: "rgb(60, 97, 172)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-181.4 407.1H-197c-1.3 0-2.3 1.1-2.3 2.3v1.5c0 .5.4.9.9.9h18.5c.5 0 .9-.4.9-.9v-1.5c-.1-1.3-1.1-2.3-2.4-2.3zm.8 3.1h-17.2v-.8c0-.4.3-.8.8-.8h15.6c.4 0 .8.4.8.8v.8z"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Law
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="LLB"
                              data-csm-href="/law"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              LLB
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="LLM"
                              data-csm-href="/law"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              LLM
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={7}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3B61AD"
                                d="M-183.8 377.5c-2.6-2.9-6.2-4.5-10-4.5-3 0-6.3 1.8-8.7 3.1-.9.5-2.1 1.1-2.4 1.2-.4 0-1.5-.7-2.4-1.2-2.4-1.3-5.7-3.1-8.7-3.1-3.9 0-7.5 1.6-10 4.5-2.5 2.8-3.8 6.4-3.8 10.2 0 5.5 2 13.3 5.3 20.9 1.5 3.4 3 6.3 4.5 8.4 1.8 2.5 3.3 3.8 4.6 3.8.6 0 1.7-.3 2.3-2 .6-1.7 1.1-3.6 1.7-5.6 1.5-5.4 3.4-12 6.4-12h.2c1.3 0 2.6 1.2 3.7 3.5 1.1 2.4 2 5.5 2.8 8.5.5 2 1.1 3.9 1.6 5.5.6 1.7 1.7 2 2.3 2 1.3 0 2.9-1.3 4.6-3.8 1.5-2.2 3.1-5.1 4.5-8.5 3.3-7.6 5.3-15.4 5.3-20.7 0-3.8-1.4-7.5-3.8-10.2m-11 3.9s-3.2-.2-6-.9c-1.3-.3-2.8-1-2.8-1.2 0-.2 1.7-1.2 2.1-1.4 2.2-1.2 5.2-2.9 7.7-2.9 7.4 0 11.8 6.5 11.8 12.7 0 5-2 12.6-5.1 19.9-1.4 3.2-2.9 6.1-4.3 8.2-1.6 2.3-2.6 3-3 3-.2 0-.2-.2-.4-.6-.6-1.6-1.1-3.4-1.6-5.4-.9-3.1-1.7-6.3-2.9-8.9-1.5-3.2-3.3-4.7-5.5-4.7h-.2c-2.1 0-3.9 1.5-5.4 4.7-1.2 2.5-2.1 5.7-3 8.8-.6 2-1.1 3.9-1.7 5.5-.1.4-.2.6-.4.6s-1 0-3-2.9c-1.4-2-2.9-4.9-4.3-8.1-3.1-7.2-5.1-14.9-5.1-20 0-6.2 4.4-12.7 11.8-12.7 1.9 0 4.5.9 6.8 2.3.3.2.8.6 1.3.9.2.1.4.3.5.4.5.4 1.3.9 2.1 1.4.4.2.8.5 1.3.7 1.9.8 3.8 1.2 5.8 1.2 2.1 0 3.4-.4 3.5-.4 0 0 .3-.1.3-.2h-.3z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-217 378.3c-2.2.8-7.8 6.6-6.4 13.8"
                                style={{ fill: "rgb(34, 177, 188)" }}
                              />
                            </svg>
                          </div>
                          Dental
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="BDS"
                              data-csm-href="/dental"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              BDS
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading='lazy'
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="MDS"
                              data-csm-href="/dental"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              MDS
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={19}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="-255 347 100 100"
                              xmlSpace="preserve"
                            >
                              <path
                                fill="#3B61AD"
                                d="M-214.8 392.5c1.2.7 2.5 1.1 3.9 1.1s2.7-.4 3.9-1.1c2.7-1.6 4.2-4.7 4.2-8.6v-8.1c0-2.1-1.7-3.7-3.7-3.7h-8.8c-2.1 0-3.7 1.7-3.7 3.7v6.2s-.1 2.3 0 2.7c.2 3.5 1.7 6.3 4.2 7.8zm-2.5-17.3c0-.9.7-1.6 1.6-1.6h9.7c.9 0 1.6.7 1.6 1.6v6.8h-12.9v-6.8zm12.8 9c-.1 3.2-1.3 5.8-3.4 7.1-1.8 1.1-4.1 1.1-6 0-2.1-1.3-3.3-3.8-3.4-7.1h12.8zm-3.9-6.1c0 .6-.5 1.1-1.1 1.1h-.4v.4c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1v-.4h-.4c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1h.4v-.4c0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1v.4h.4c.6 0 1.1.5 1.1 1.1zm6.1 24.1c-.5.3-1.2.1-1.5-.5-1.7-3.1-5.7-4-8.7-3.5-3.3.5-5.6 2.5-6.1 5.3l-2.4 12.9h14.7c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1h-16c-.3 0-.6-.1-.9-.4-.2-.3-.3-.6-.2-.9l2.6-14.2c.7-3.7 3.7-6.4 8-7.1 2.1-.3 4.3-.1 6.2.6 2.1.8 3.8 2.2 4.7 4 .3.6.1 1.3-.4 1.6z"
                                style={{ fill: "rgb(59, 97, 173)" }}
                              />
                              <path
                                fill="#ff6c00"
                                d="M-197.9 406.7c0-1.1.8-1.9 1.5-1.9s1.5.8 1.5 1.9c0 1.1-.8 1.9-1.5 1.9-.7.1-1.5-.7-1.5-1.9zm-5.8.9h-.2c-.3 0-.5.2-.7.4-.3.4-.4 1.1-.2 1.7.3 1.1 1.3 1.7 2.1 1.7h.2c.3 0 .5-.2.7-.4.3-.4.4-1.1.2-1.7-.4-1.1-1.4-1.7-2.1-1.7zm15.4.4c-.2-.2-.4-.3-.6-.3h-.2c-.7 0-1.6.5-1.9 1.4-.2.5-.1 1 .2 1.3.2.2.4.3.6.3h.2c.7 0 1.6-.5 1.9-1.3.2-.6.1-1.1-.2-1.4zm-8 5c-1.5 0-2.8 1.4-2.8 3.1 0 1.7 1.3 3.1 2.8 3.1 1.5 0 2.8-1.4 2.8-3.1 0-1.7-1.2-3.1-2.8-3.1z"
                                style={{
                                  fill: "rgb(34, 177, 188)",
                                  stroke: "rgb(34, 177, 188)",
                                  strokeMiterlimit: 10,
                                }}
                              />
                            </svg>
                          </div>
                          Veterinary Sciences
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="Veterinary Sciences"
                              data-csm-href="/veterinary"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              Veterinary Sciences
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading='lazy'
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={14}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              width={48}
                              height={48}
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.973 20.24c.346-.2.671-.44.965-.717 2.116-1.982 2.221-5.327.235-7.456a5.237 5.237 0 0 0-7.439-.266c-2.115 1.983-2.22 5.327-.234 7.457a5.237 5.237 0 0 0 6.473.981Zm-6.813-4.728a4.146 4.146 0 0 1 1.316-2.915 4.149 4.149 0 0 1 5.507-.16l-6.036 5.654a4.175 4.175 0 0 1-.787-2.579Zm1.53 3.376 6.034-5.655c1.207 1.685 1.017 4.046-.528 5.494a4.15 4.15 0 0 1-5.506.16Z"
                                fill="#48639E"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M34.279 29.751c-.128-.632-.517-1.303-1.158-1.993l-7.806-9.491-.023-.026a3.425 3.425 0 0 0-.477-.42.542.542 0 0 0-.83.255 5.32 5.32 0 0 1-1.398 2.142 5.358 5.358 0 0 1-2.227 1.253.54.54 0 0 0-.392.576.546.546 0 0 0 .08.237c.12.19.258.368.413.53l8.926 8.442c1.586 1.694 2.837 1.52 3.608 1.075.031-.018.062-.042.094-.062l2.379 2.55a.543.543 0 0 0 .766.027.544.544 0 0 0 .024-.768l-2.378-2.55a2.19 2.19 0 0 0 .398-1.776h.001Zm-1.064.211c.09.442-.05.817-.437 1.18-.108.1-.218.183-.327.246-.235.136-.948.547-2.285-.885a1.084 1.084 0 0 0-.024-.024l-8.705-8.233a6.455 6.455 0 0 0 3.245-3.041l7.614 9.256a.478.478 0 0 0 .022.025c.508.545.81 1.041.897 1.476Z"
                                fill="#24A7D0"
                              />
                            </svg>
                          </div>
                          Mass Communications
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="BMM"
                              data-csm-href="/masscommunication"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              BMM
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading='lazy'
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                            <button
                              type="button"
                              data-csm-title="MMC"
                              data-csm-href="/masscommunication"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              MMC
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={4}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              width={56}
                              height={56}
                              viewBox="0 0 56 56"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M40.864 30.956 46 22.447l-3.804-.963-3.922 3.826c-2.667-.96-18.411-6.546-23.415-6.386-3.042.097-4.526.609-4.812 1.66-.227.835.373 1.708 1.837 2.667 2.17 1.42 7.482 2.837 8.602 3.126l8.34 10.336h4.63l-.213-7.058 7.621 1.302Zm-11.453 4.496-8.228-10.197-.2-.051c-.062-.015-6.222-1.568-8.429-3.013-1.297-.85-1.313-1.27-1.313-1.272.002-.007.307-.63 3.658-.737l.185-.003c5.383 0 22.957 6.382 23.134 6.447l.36.13 3.982-3.884 1.5.38-3.814 6.32-8.288-1.417.22 7.297H29.41Zm.841-16.175 3.273.72-.82 1.743 1.115.545 1.499-3.182L30.306 18l-7.067.924.158 1.25 6.855-.897Z"
                                fill="#48639E"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m41.042 33.354-5.368-.555-.125 1.254 5.369.555.124-1.254Zm-5.322 3.29 8.031.83.125-1.254-8.031-.83-.125 1.255Z"
                                fill="#24A7D0"
                              />
                            </svg>
                          </div>
                          Aviation
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="BBA (Aviation)"
                              data-csm-href="/aviation"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              BBA (Aviation)
                              <svg
                                fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="jsx-3136676245 exam_container">
                          <p
                            id="para"
                            data-id={20}
                            className="jsx-3136676245 d-flex align-items-center mb-2"
                          />
                          <div className="jsx-3136676245 exam_img">
                            <svg
                              width={48}
                              height={48}
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M39.428 13.715v6.022h-1.405v-3.656L22.758 31.57l-4.864-4.936-8.328 8.451-.995-1.008 9.323-9.46 4.864 4.936 14.204-14.41h-3.469v-1.428h5.936-.001Z"
                                fill="#48639E"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m18.408 34.076.995 1.009 2.191-2.224-.994-1.008-2.192 2.223Zm15.325.02.994 1.008 4.347-4.41-.994-1.01-4.347 4.411Zm-5.183 0 .994 1.008 9.68-9.822-.994-1.008-9.68 9.822Zm7.97-13.348L23.364 34.096l.995 1.008 13.153-13.346-.994-1.009Zm-18.278 8.316-4.959 5.031.994 1.009 4.96-5.032-.995-1.008Z"
                                fill="#24A7D0"
                              />
                            </svg>
                          </div>
                          Vocational Courses
                          <p />
                          <div className="jsx-3136676245 inner_exam_container">
                            <button
                              type="button"
                              data-csm-title="Vocational Courses"
                              data-csm-href="/vocationalcourse"
                              className="jsx-3136676245 exam_card w-100 text-left d-flex align-items-center justify-content-between"
                            >
                              Vocational Courses
                              <svg
                                 fill="#666"
                                xmlns="http://www.w3.org/2000/svg"
                                width="451.846"
                                height="451.847"
                                viewBox="0 0 451.846 451.847"
                                xmlSpace="preserve"
                                style={{ width: 10, height: 10 }}
                                loading="lazy"
                              >
                                <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
