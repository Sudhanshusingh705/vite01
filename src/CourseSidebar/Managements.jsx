import { useState } from "react";
import "./Managements.css";
import "../components/TopcourseSidebar/CourseSidebar.css";

const Managements = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h2
        style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
      >
        Top Management Course in India 2023
      </h2>
      <div className="container p-3 my-3 border border-dark ">
        <div className="row">
          {/* <nav className="col-sm-3 col-4" id="myScrollspy">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#section1">
                  Section 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#section2">
                  Section 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#section3">
                  Section 3
                </a>
              </li>
            </ul>
          </nav>*/}
          {/* SECTION 1 */}
          <div className="col-md-9">
            <div className="pageDescription" style={{ marginBottom: 0 }}>
              {/* ... content ... */}
              <h1>Management Full Course </h1>
              <h2>
                Management Full Course 2023 National, State &amp; University
                Level
              </h2>
              {showContent ? (
                <>
                  {/* ... full content ... */}
                  {/* ... truncated for brevity ... */}
                  <div className="readMoreDiv">
                    <p
                      className="readMoreButton"
                      onClick={toggleContent}
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Show Less
                    </p>
                  </div>
                  <p>
                    Management courses are commerce oriented courses that aim to
                    introduce students to all the vital information related to
                    the broad foundations of business principles such as
                    Finance, Economics, Human Resource, Marketing and more. The
                    Management courses duration tend to be between one to four
                    year long depending on the nature and type of the course.
                  </p>
                  <p>
                    The Management course details differ according to the type
                    of course that the students apply for. Some of the types of
                    Management degree courses include BBA, MBA, PGDM and Diploma
                    courses. These Management courses in India are available in
                    specialisations such as Hospital Management, Hotel
                    Management, Aviation Management, Event Management, etc.
                    These Management course lists are offered at Certificate,
                    Diploma, and Degree levels (Bachelors, Masters, Doctorate).
                  </p>
                  <p>
                    <strong>Table Of Contents</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_6127651392491664875693532">
                        Management Courses List
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_2426793814581664875697896">
                        Eligibility for Management Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_1241961816571664875703348">Admission</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_7385381118591664875708241">Entrance Exams</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_47719850910611664875717417">
                        Types of Management Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_22457918712661664875724586">
                        Top 10 Management Courses in Demand
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_32256680114771664875732342">
                        Syllabus and Subjects
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_39311136216751664875740405">
                        Top Management Colleges in India
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_69938114618721664875748661">
                        Jobs and Salaries
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_61101293820681664875755138">
                        Scope of Management in India
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_37447835822711664875761783">Top Recruiters</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_99902821424651664875767052">
                        Skills Required
                      </a>
                    </li>
                  </ul>
                  <h2 id="h_6127651392491664875693532">
                    <strong>Management Courses List</strong>
                  </h2>
                  <p>
                    Management courses in India can be pursued by students in
                    different stages of their education journey. All Management
                    courses listed below are considered to be relevant and
                    useful as the education provided to the students is of
                    industry standard.&nbsp;
                  </p>
                  <p>
                    Management courses are diverse and flexible, students can
                    pursue some Management courses after 10th and 12th
                    education, while other courses after their UG degree.
                  </p>
                  <p>
                    Given below are different types of Management courses that
                    the students can pursue:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_63916207826561664875774024">
                        Undergraduate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_19407241428481664875784984">
                        Postgraduate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_41395216530391664875789610">
                        Diploma / PG Diploma Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_95057280832291664875795370">
                        Certificate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_24268770634181664875803859">
                        Doctorate Courses
                      </a>
                    </li>
                  </ul>
                  <h3 id="h_63916207826561664875774024">
                    <strong>Undergraduate Management Courses</strong>
                  </h3>
                  <p>
                    For Management courses after 12th, full-time programmes
                    include BBA, BHA, BHM, and BMS. The majority of UG
                    Management Courses have a 3 year duration. Many management
                    colleges offer UG-PG combined courses, such as BBA+PGDITM
                    and BBA+MBA.
                  </p>
                  <p>
                    Given below are some of the top Undergraduate Management
                    Courses in India:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bba-course">BBA</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bbm-course">BBM</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bhm-course">BHM</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bhmct-course">BHMCT</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bachelor-of-hospital-management-course">
                        Bachelor of Hospital Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bms-course">BMS</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-banking-management-course">
                        B.Com Banking Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-management-studies-course">
                        B.Com Management Studies
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-tourism-and-travel-management-course">
                        B.Com Tourism and Travel Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bba-tour-travel-management-course">
                        BBA Tour and Travel Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bba-airport-management-course">
                        BBA Airport Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bsc-hotel-management-course">
                        B.Sc Hotel Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bachelor-of-tourism-management-btm-course">
                        Bachelor of Tourism Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bba-hospital-management-course">
                        BBA Hospital Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bba-hotel-management-course">
                        BBA Hotel Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bba-in-event-management-course">
                        BBA Event Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bba-human-resource-management-course">
                        BBA Human Resource Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>BTTM</li>
                  </ul>
                  <h3 id="h_19407241428481664875784984">
                    <strong>Postgraduate Management Courses</strong>
                  </h3>
                  <p>
                    There is scope of pursuing many Management courses after
                    graduation as well. Some of these courses include MBA and
                    MIB. The benefits of Management courses at a postgraduate
                    level is that it provides students with a very rewarding
                    career path owing to the relevance of the education that the
                    students obtain.&nbsp;
                  </p>
                  <p>
                    Given below are some of the top Postgraduate Management
                    Courses in India:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mba-course">MBA</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/master-in-hospital-management-course">
                        Masters in Hospital Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mhm-course">MHM</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mms-course">MMS</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mam-course">MAM</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mtm-course">MTM</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mcm-course">MCM</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mmm-course">MMM</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mfm-course">
                        Master of Fashion Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/master-of-human-resource-management-mhrm-course">
                        MHRM
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mba-hr-course">
                        MBA HR
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mba-operations-management-course">
                        MBA Operations Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mba-systems-management-course">
                        MBA Systems Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mba-financial-management-course">
                        MBA Financial Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mba-retail-management-course">
                        MBA Retail Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Master of Financial Management
                    </li>
                    <li style={{ fontWeight: 400 }}>MSc in Management</li>
                  </ul>
                  <h3 id="h_41395216530391664875789610">
                    <strong>Diploma / PG Diploma Management Courses</strong>
                  </h3>
                  <p>
                    Courses in banking and finance, supply chain management,
                    operation management, marketing management, retail
                    management, and event management are among the top diploma
                    and PG Management Diploma courses offered. These are time
                    and money-saving, short-term career-focused courses. The
                    diploma courses are ideal Management courses for working
                    professionals.
                  </p>
                  <p>
                    Given below are some of the top Diploma and Postgraduate
                    Management Courses in India:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-management-course">
                        Diploma in Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-business-management-dbm-course">
                        Diploma in Business Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-retail-management-course">
                        Diploma in Retail Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-hotel-management-course">
                        Diploma in Hotel Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-fire-safety-management-course">
                        Diploma in Fire &amp; Safety Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-event-management-course">
                        Diploma in Event Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-cooperative-management-course">
                        Diploma in Cooperative Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-human-resource-management-course">
                        Diploma in Human Resource Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-financial-management-course">
                        Diploma In Financial Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-supply-chain-management-course">
                        Diploma in Supply Chain Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pgdm-course">PGDM</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pgdbm-course">PGDBM</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pgdm-marketing-course">
                        PGDM in Marketing
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pgdm-finance-course">
                        PGDM in Finance
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pgdm-hr-course">
                        PGDM in HR
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pgdlscm-course">
                        PG Diploma in Logistics &amp; Supply Chain Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pgdfm-course">
                        PG Diploma Financial Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pgdhhm-course">
                        PG Diploma Hospital Health Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>PGDHRM</li>
                  </ul>
                  <h3 id="h_95057280832291664875795370">
                    <strong>Certificate Management Courses</strong>
                  </h3>
                  <p>
                    Numerous universities, autonomous institutes, and
                    freestanding training facilities also provide Management
                    certification courses. Finance, Human Resources (HR),
                    Marketing, IT, International Business, Operations, and
                    Supply Chain Management are the main management streams.
                  </p>
                  <p>
                    Given below are some of the top Certificate Management
                    Courses in India:
                  </p>
                  <p>
                    <strong>Offline Management Courses:</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      Certificate Course in Human Resource Management
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate Program in Supply Chain Management
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate Courses in Sales and Marketing
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate Courses in Travel and Tourism Management
                    </li>
                  </ul>
                  <h3 id="h_24268770634181664875803859" />
                  <p>
                    <strong>Online Management Courses:</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      Innovation Management- Coursera
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Financial Accounting- Coursera
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Business Management- MICA
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Operations Management- University of Oxford
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Project Management- Udemy
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Risk Management in Banking and Financial Markets- edX
                    </li>
                  </ul>
                  <h3 id="h_24268770634181664875803859">
                    <strong>Doctorate Management Courses</strong>
                  </h3>
                  <p>
                    Students seeking careers in research and education can
                    choose from among the several PhD or Doctorate programmes
                    offered by universities. Accounting, marketing, finance, and
                    human resource management are typical specialisations for
                    the best Management courses at Doctorate level.
                  </p>
                  <p>
                    Given below are some of the top Doctorate Management Courses
                    in India:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/phd-business-management-course">
                        PhD Business Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/phd-marketing-course">
                        PhD Marketing
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/phd-human-resource-management-course">
                        PhD Human Resource Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>PhD Management Studies</li>
                  </ul>
                  <h2 id="h_2426793814581664875697896">
                    <strong>Eligibility for Management Courses</strong>
                  </h2>
                  <p>
                    The eligibility for Management courses depends on the type
                    of course that the aspirant is applying to. Undergraduate
                    courses would require students to obtain a minimum of 50% in
                    their 10+2 from a recognised board. For Management courses
                    admission to the postgraduate courses, students must focus
                    on their undergraduate marks to gain admission.
                  </p>
                  <p>
                    Almost all management courses in India require students to
                    give entrance examinations to get admitted to top colleges.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <strong>UG Courses</strong>: Some of the top entrance
                      exams for the admission of UG Management Courses include
                      DU JAT, SET, NPAT, IPU CET, and IPMAT. A candidate must
                      have completed 10+2 from a school that is affiliated to a
                      recognized board with good marks.
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <strong>PG Courses</strong>: CAT is conducted for
                      admission in master management programs of top management
                      colleges in India.A candidate should have completed their
                      bachelors in any subject along with 55% or 60% marks to
                      be eligible for master computer course.
                    </li>
                  </ul>
                  <h2 id="h_1241961816571664875703348">
                    <strong>Management Courses Admission</strong>
                  </h2>
                  <p>
                    Management course admission is possible by both entrance
                    examination and merit-based selection.&nbsp;
                  </p>
                  <p>
                    Candidates applying for the Management degree might have
                    their results from the respective entrance exams boards
                    required by the selected/opted universities. The students
                    can avail themselves of admissions through both online and
                    offline methods. Listed below are the admission links to the
                    most popular management colleges in India:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        height: "156.712px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Colleges</strong>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Admission Link</strong>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/gandhi-institute-of-technology-management-gitam-bhubaneswar">
                              GITAM, Bhubaneswar
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/gandhi-institute-of-technology-management-gitam-bhubaneswar/admission">
                              GITAM, Bhubaneswar Admissions
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/jamnalal-bajaj-institute-of-management-studies-jbims-mumbai">
                              JBIMS, Mumbai
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/jamnalal-bajaj-institute-of-management-studies-jbims-mumbai/admission">
                              JBIMS, Mumbai Admissions
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-management-iim-ahmedabad">
                              IIM Ahmedabad
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-management-iim-ahmedabad/admission">
                              IIM Ahmedabad Course Admissions
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-management-iim-calcutta">
                              IIM Calcutta{" "}
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-management-iim-calcutta/admission">
                              IIM Calcutta Admissions
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/bharati-vidyapeeths-institute-of-management-studies-research-bvimsr-mumbai">
                              Bharati Vidyapeeth Institute of Management and
                              Research
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/bharati-vidyapeeths-institute-of-management-studies-research-bvimsr-mumbai/admission">
                              Bharati Vidyapeeth Institute of Management and
                              Research Admissions
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/institute-of-engineering-and-management-iem-kolkata">
                              Institute of Engineering and Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/institute-of-engineering-and-management-iem-kolkata/admission">
                              Institute of Engineering and Management Admissions
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    For the online method, students must enquire at the official
                    website of the colleges they are applying to. For offline
                    means, they would be required to visit the colleges
                    admission office in person.
                  </p>
                  <h2 id="h_7385381118591664875708241">
                    <strong>Management Courses Entrance Exams</strong>
                  </h2>
                  <p>
                    Entrance exams play an essential role in the final merit
                    list of the selected candidates for admission to the
                    colleges. The entrance exams are a screening process through
                    which the colleges can determine if the students would be a
                    right fit for the course.
                  </p>
                  <p>
                    These exams are conducted at the national, state, and
                    college levels. Hence, the students need to research the
                    proper exam before enrolling. Given below are some of the
                    top exams that are conducted for admissions to the different
                    Management courses in India:
                  </p>
                  <p>
                    <strong>Post graduate entrance exams:</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/cat">CAT</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/mat">MAT</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/xat">XAT</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/cmat">CMAT</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/gmat">GMAT</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/snap">SNAP</a>
                    </li>
                  </ul>
                  <p>
                    <strong>Undergraduate entrance exams:</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/uptu">UPSEE</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/du-jat">DU JAT</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ipu-cet">
                        IPU CET
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/set-exam">SET</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/npat">NPAT</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ipmat">IPMAT</a>
                    </li>
                  </ul>
                  <p>
                    <strong>Read More</strong>:{" "}
                    <a href="https://www.getmyuni.com/exams/management-exams-in-india">
                      Management Entrance Exams in India
                    </a>
                  </p>
                  <h2 id="h_47719850910611664875717417">
                    <strong>Types of Management Courses (Branches)</strong>
                  </h2>
                  <p>
                    Management is a diverse and flexible discipline that
                    students can pursue at different stages of life. There are
                    many streams available for the students to pursue Management
                    courses in India. The stream is concerned with commerce,
                    business management, and related fields, further divided
                    into several branches. These branches are then divided into
                    many more subfields, making it easy for the students to
                    study a particular discipline they are interested in.
                  </p>
                  <p>
                    When it comes to the types of courses available to the
                    students, the scope is very wide. Some of the
                    specialisations that the students can pursue are
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        height: "179.1px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      <tbody>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "50.9309%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="#h_7879887842881665133381873">
                              Hospital Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.093%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="#h_3105005875751665133400175">
                              Event Management
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "50.9309%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="#h_1677154117361665133408087">
                              Project Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.093%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="#h_1573940698961665133423380">
                              Product Management
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "50.9309%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="#h_76774831310551665133436846">
                              Business Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.093%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-healthcare-management-courses">
                              Healthcare Management
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "50.9309%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-marketing-management-courses">
                              Marketing Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.093%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-hospitality-management-courses">
                              Hospitality Management
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "50.9309%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-human-resource-management-courses">
                              Human Resource Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.093%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-aviation-management-courses">
                              Aviation Management
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "50.9309%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-fashion-management-courses">
                              Fashion Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.093%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-strategic-management-courses">
                              Strategic Management
                            </a>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "50.9309%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            Financial Management
                          </td>
                          <td
                            style={{
                              width: "49.093%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            Sports Management
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "50.9309%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            Supply Chain Management
                          </td>
                          <td
                            style={{
                              width: "49.093%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            Material Management
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Owing to the diversity and flexibility of the branches
                    presented to the students, graduates can expect to earn a
                    good salary upon completing the course. Hence, most colleges
                    in India provide management courses to students.
                  </p>
                  <p>
                    Below are some of the popular fields under management that
                    can help students decide what they want to pursue in their
                    careers.
                  </p>
                  <h3 id="h_7879887842881665133381873">
                    <strong>Hotel Management Courses</strong>
                  </h3>
                  <p>
                    Students looking for a professional career in the
                    hospitality industry (hotels, resorts, tourism) pursue hotel
                    management courses. The students can pursue these courses
                    after their 10th, 12th, undergraduate, or postgraduate
                    degrees. Given below are some of the courses that the
                    students can undertake:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        height: "201.487px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Name of Course</strong>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Average Fee Structure (INR)</strong>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Duration</strong>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/bsc-hotel-management-course">
                              B.Sc Hotel Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            1 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            3 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/mhm-course">
                              Master Of Hotel Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/bhm-course">
                              Bachelor of Hotel Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            3 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/mba-hotel-management-course">
                              MBA Hotel Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            5 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/diploma-in-hotel-management-course">
                              Diploma In Hotel Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            1 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/bba-hotel-management-course">
                              BBA Hotel Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            3 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            3 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/pgdhm-course">
                              Post Graduate Diploma in Hotel Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            5 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            BA Hotel Management
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            50,000
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            3 Years
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    There is scope for students to pursue this course in a wide
                    variety of universities and colleges. To ensure that the
                    students get admitted to college of their choice, it is
                    vital that they do online research regarding all criteria.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "50.6988%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-university-for-hotel-management-in-india">
                              Best Universities for Hotel Management in India
                            </a>
                          </td>
                          <td
                            style={{ width: "49.3105%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-hotel-management-courses-after-12th">
                              Best Hotel Management Courses after 12th
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 id="h_3105005875751665133400175">
                    <strong>Event Management Courses</strong>
                  </h3>
                  <p>
                    Event management is a growing field that involves planning
                    large-scale events such as festivals, trade shows, and
                    product launches. Students can pursue this specialisation
                    through many different courses, given below are some of
                    them:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "33.3686%", textAlign: "center" }}
                          >
                            <strong>Name of Course</strong>
                          </td>
                          <td style={{ width: "33.182%", textAlign: "center" }}>
                            <strong>Average Fee Structure (INR)</strong>
                          </td>
                          <td
                            style={{ width: "33.4116%", textAlign: "center" }}
                          >
                            <strong>Duration</strong>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "33.3686%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/mba-event-management-course">
                              MBA Event Management
                            </a>
                          </td>
                          <td style={{ width: "33.182%", textAlign: "center" }}>
                            15 Lakhs
                          </td>
                          <td
                            style={{ width: "33.4116%", textAlign: "center" }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "33.3686%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/bba-in-event-management-course">
                              BBA in Event Management
                            </a>
                          </td>
                          <td style={{ width: "33.182%", textAlign: "center" }}>
                            6 Lakhs
                          </td>
                          <td
                            style={{ width: "33.4116%", textAlign: "center" }}
                          >
                            3 Years
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "33.3686%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/diploma-in-event-management-course">
                              Diploma in Event Management
                            </a>
                          </td>
                          <td style={{ width: "33.182%", textAlign: "center" }}>
                            50,000&nbsp;
                          </td>
                          <td
                            style={{ width: "33.4116%", textAlign: "center" }}
                          >
                            1 Year
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "33.3686%", textAlign: "center" }}
                          >
                            BA Event Management
                          </td>
                          <td style={{ width: "33.182%", textAlign: "center" }}>
                            50,000&nbsp;
                          </td>
                          <td
                            style={{ width: "33.4116%", textAlign: "center" }}
                          >
                            3 Years
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    There are many courses available to students when applying
                    for an Event Management course. Hence, students should
                    ensure that they research about the exact details of the
                    course when applying for it.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        height: "22.3875px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "50.005%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="https://www.getmyuni.com/articles/event-management-courses-after-12th">
                              Event Management Courses After 12th
                            </a>
                          </td>
                          <td
                            style={{
                              width: "50.005%",
                              textAlign: "center",
                              height: "22.3875px",
                            }}
                          >
                            <a href="https://www.getmyuni.com/mba-event-management-colleges">
                              Top MBA Event Management Colleges in India
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 id="h_1677154117361665133408087">
                    <strong>Project Management Courses</strong>
                  </h3>
                  <p>
                    A project management course helps explain how successful
                    projects are organised and administered. Students learn
                    about project life cycles. They are given tools and
                    techniques for structured planning, managing change and
                    risks, and managing stakeholder expectations.
                  </p>
                  <p>
                    Given below are the top Project Management Courses in India
                    along with their duration and average fee structure that the
                    students can choose:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            <strong>Name of Course</strong>
                          </td>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            <strong>Average Fee Structure (INR)</strong>
                          </td>
                          <td
                            style={{ width: "32.6393%", textAlign: "center" }}
                          >
                            <strong>Duration</strong>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/mba-project-management-course">
                              MBA Project Management
                            </a>
                          </td>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            15 Lakhs
                          </td>
                          <td
                            style={{ width: "32.6393%", textAlign: "center" }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            BBA Project Management
                          </td>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            6 Lakhs
                          </td>
                          <td
                            style={{ width: "32.6393%", textAlign: "center" }}
                          >
                            3 Years
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Project management is a popular choice amongst students when
                    thinking about a Management course. Students have a scope of
                    studying this course in a wide variety of colleges and
                    courses. Hence students must ensure that they research well.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "50.9126%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-project-management-courses">
                              List of Project Management Courses in India
                            </a>
                          </td>
                          <td
                            style={{ width: "49.0572%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/mba-project-management-colleges">
                              Top MBA Project Management Colleges in India
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 id="h_1573940698961665133423380">
                    <strong>Product Management Courses</strong>
                  </h3>
                  <p>
                    Product Management courses are predominately offered to
                    students in a certification or diploma format. The key
                    topics the students learn about are Market Analysis,
                    Communication, Strategy, Marketing Management, Strategy and
                    Operations, Product Management, Marketing, Leadership and
                    Management, and Entrepreneurship.
                  </p>
                  <p>
                    Given below are the top Product Management Courses in India
                    along with their duration and average fee structure that the
                    students can choose:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            <strong>Name of Course</strong>
                          </td>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            <strong>Average Fee Structure (INR)</strong>
                          </td>
                          <td
                            style={{ width: "32.6393%", textAlign: "center" }}
                          >
                            <strong>Duration</strong>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            Certificate In Digital Product Management
                          </td>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            5,000&nbsp;
                          </td>
                          <td
                            style={{ width: "32.6393%", textAlign: "center" }}
                          >
                            1 Year
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            Diploma In Product Management
                          </td>
                          <td
                            style={{ width: "32.6385%", textAlign: "center" }}
                          >
                            50,000&nbsp;
                          </td>
                          <td
                            style={{ width: "32.6393%", textAlign: "center" }}
                          >
                            1 Year
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    When students are thinking about becoming product
                    managements, often times they might get confused about how
                    to start their career in the field. If they do proper
                    research it will ensure that they are able to build a
                    successful and rewarding career for themselves.&nbsp;
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "99.2545%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/articles/how-to-become-a-product-manager">
                              How to Become a Product Manager?
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 id="h_76774831310551665133436846">
                    <strong>Business Management Courses</strong>
                  </h3>
                  <p>
                    Given below are the top Business Management Courses in India
                    along with their duration and average fee structure that the
                    students can choose:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        height: "134.325px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Name of Course</strong>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Average Fee Structure (INR)</strong>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Duration</strong>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/diploma-in-business-management-dbm-course">
                              Diploma in Business Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            50,000&nbsp;
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            1 Year
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/mba-business-management-course">
                              MBA in Business Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            15 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/pgdbm-course">
                              PGDBM
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            15 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/mcom-business-management-course">
                              M.Com Business Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            6 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            3 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/phd-business-management-course">
                              PhD Business Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            6 Lakhs
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            3 Years
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Business management focuses on the organising, planning and
                    analysing of business activities that are required to
                    efficiently manage and run a business.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/bbm-business-management-colleges">
                              Top BBM Business Management Colleges in India
                            </a>
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/mba-business-management-colleges">
                              Top MBA Business Management Colleges in India
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_22457918712661664875724586">
                    <strong>Top 10 Management Courses in Demand</strong>
                  </h2>
                  <p>
                    Management courses in India can be pursued by students at
                    all levels of education. They can decide to pursue it at
                    Diploma, Certificate, Undergraduate or Postgraduate level.
                    There are many specialisations that students can pursue.
                    Given below are the top ten Management courses that are in
                    demand along with their duration.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        height: "223.875px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Course</strong>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Duration</strong>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/mba-marketing-management-course">
                              MBA Marketing Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/mms-course">
                              MMS
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/mba-hr-course">
                              MBA in HR
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/mmm-course">
                              Master In Marketing Management (MMM)
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/mba-supply-chain-management-course">
                              MBA Supply Chain Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/pgdm-course">
                              PGDM
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/diploma-in-hotel-management-course">
                              Diploma In Hotel Management
                            </a>
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            3 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            Master Of Financial Management (MFM)
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            PGDM In International Business
                          </td>
                          <td
                            style={{
                              width: "49.2928%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Years
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            Project Management Professional Certification
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            2 Years
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    All management courses present students with a wide range of
                    possibilities for a rewarding career, as the curriculum is
                    designed to cater the needs of the industry. Some of the
                    specialisations that the students can pursue include Risk
                    Management, Construction Management, Operations Management,
                    Brand Management, Office Management, Retail Management,
                    Aviation Management, Social Media Management, and Tourism
                    Management.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-luxury-brand-management-courses">
                              Luxury Brand Management Courses in India
                            </a>
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/articles/best-retail-management-courses">
                              Retail Management Courses in India
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_32256680114771664875732342">
                    <strong>Management Course Syllabus and Subjects</strong>
                  </h2>
                  <p>
                    The courses primary focus is the study of finance, human
                    resources, management, and marketing techniques. Numerous
                    topics are covered throughout the course, including
                    research, testing, sales, consulting, administration, and
                    distribution. It integrates a variety of management,
                    research, and business tactics.&nbsp;
                  </p>
                  <p>
                    The exact syllabus and duration of the course depend on the
                    type of course that the student wishes to enrol in. For
                    example, Diploma and Undergraduate courses may not focus on
                    a topic at the same depth level as a postgraduate course.
                  </p>
                  <p>
                    Given below are some of the generic topics that the students
                    may be taught during their Management course education:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Marketing Management</li>
                    <li style={{ fontWeight: 400 }}>Financial Management</li>
                    <li style={{ fontWeight: 400 }}>Strategic Management</li>
                    <li style={{ fontWeight: 400 }}>
                      Legal Aspects of Pharmaceutical Business
                    </li>
                    <li style={{ fontWeight: 400 }}>Entrepreneurship</li>
                    <li style={{ fontWeight: 400 }}>Human Resource</li>
                  </ul>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/articles/ugc-net-management-syllabus">
                              UGC NET Management Syllabus 2022
                            </a>
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/mba-syllabus-subjects">
                              MBA Subjects and Syllabus
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_39311136216751664875740405">
                    <strong>Top Management Colleges in India</strong>
                  </h2>
                  <p>
                    Given below are the top colleges along with their Management
                    course fees in India:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        height: "246.262px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>SI.No</strong>
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>College Name</strong>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <strong>Fees (INR)</strong>
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            1
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/xaviers-labour-relation-institue-xlri-jamshedpur">
                              XLRI Jamshedpur
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2.7 Lakhs
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/sp-jain-institute-of-management-and-research-spjimr-mumbai">
                              SPJIMR, Mumbai
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            1.5 Lakhs
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            3
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-management-iim-calcutta">
                              IIM Calcutta
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Lakhs
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            4
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-management-iim-indore">
                              IIM Indore
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            50,000
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            5
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/narsee-monjee-institute-of-management-studies-nmims-mumbai">
                              NMIMS Mumbai
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            3 Lakhs
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            6
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/symbiosis-institute-of-business-management-sibm-pune">
                              SIBM, Pune
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            40,000
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            7
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/lovely-professional-university-lpu-jalandhar">
                              LPU, Jalandhar
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Lakhs
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            8
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/nims-university-nimsu-jaipur">
                              NIMS University
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            42,000
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            9
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-delhi">
                              IIT Delhi
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Lakh
                          </td>
                        </tr>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            10
                          </td>
                          <td
                            style={{
                              width: "32.6385%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-kanpur">
                              IIT Kanpur
                            </a>
                          </td>
                          <td
                            style={{
                              width: "32.6393%",
                              height: "22.3875px",
                              textAlign: "center",
                            }}
                          >
                            2 Lakhs
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_69938114618721664875748661">
                    <strong>Management Course Jobs and Salaries</strong>
                  </h2>
                  <p>
                    When pursuing Management courses in India students are
                    presented with a diverse range of job opportunities and
                    scope. The curriculum is designed keeping the demands of the
                    industry in mind. Listed below are some of the popular job
                    roles along with their average salaries:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <strong>Job Role</strong>
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <strong>Average Salary (INR)</strong>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            HR Manager
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            3 LPA
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            Sales Manager
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            2.5 LPA
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            Digital Marketing Manager
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            4 LPA
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            Event Manager
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            2.5 LPA
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            Project Manager
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            6 LPA
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            Product Manager
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            5 LPA
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    All the positions in management field pay well while they
                    are attainable and within reach. But they also depend upon
                    every individuals interests, talents and affinities.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/mba-jobs-scope-salary">
                              MBA Jobs and Salary
                            </a>
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/pgdm-jobs-scope-salary">
                              PGDM Jobs and Salary
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_61101293820681664875755138">
                    <strong>Scope of Management Courses in India</strong>
                  </h2>
                  <p>
                    Management is an integral part of functioning for most
                    businesses around the world. When pursuing a management
                    course, students don’t need to worry about the scope and
                    reach of the course, as they will always be presented with a
                    wide range of career opportunities.
                  </p>
                  <p>
                    A management degree provides graduates with a broad
                    understanding of business, finance, economics, and
                    marketing, as well as a variety of practical skills and work
                    experience, making them highly sought after by graduate
                    employers and graduate training schemes.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "99%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/mba-jobs-scope-salary">
                              MBA Scope in India
                            </a>
                          </td>
                          <td
                            style={{ width: "49.2928%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/pgdm-jobs-scope-salary">
                              PGDM Scope in India
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_37447835822711664875761783">
                    <strong>Top Recruiters</strong>
                  </h2>
                  <p>
                    Management courses in India provide students with ample job
                    opportunities with a very bright future. Listed below are
                    some of the top recruiters in India.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>EY</li>
                    <li style={{ fontWeight: 400 }}>KPMG</li>
                    <li style={{ fontWeight: 400 }}>Deloitte</li>
                    <li style={{ fontWeight: 400 }}>Flipkart</li>
                    <li style={{ fontWeight: 400 }}>ShopClues</li>
                    <li style={{ fontWeight: 400 }}>Reliance Group</li>
                    <li style={{ fontWeight: 400 }}>Tata Group</li>
                    <li style={{ fontWeight: 400 }}>Indigo</li>
                    <li style={{ fontWeight: 400 }}>Byju’s</li>
                    <li style={{ fontWeight: 400 }}>Vedantu</li>
                    <li style={{ fontWeight: 400 }}>Bank of America</li>
                    <li style={{ fontWeight: 400 }}>NatWest Group</li>
                    <li style={{ fontWeight: 400 }}>GSK</li>
                  </ul>
                  <h2 id="h_99902821424651664875767052">
                    <strong>Skills Required in Management Courses</strong>
                  </h2>
                  <p>
                    Owing to the relevance of the education, the students have
                    access to all the Skills Required in Management Courses and
                    hence they have a promising scope for themselves.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Leadership</li>
                    <li style={{ fontWeight: 400 }}>Time Management</li>
                    <li style={{ fontWeight: 400 }}>Personal Productivity</li>
                    <li style={{ fontWeight: 400 }}>Communication Skills</li>
                    <li style={{ fontWeight: 400 }}>Human Resources</li>
                    <li style={{ fontWeight: 400 }}>Lean</li>
                    <li style={{ fontWeight: 400 }}>Microsoft Project</li>
                    <li style={{ fontWeight: 400 }}>Management Coaching</li>
                  </ul>{" "}
                </>
              ) : (
                <>
                  {/* ... condensed content ... */}
                  <div className="readMoreDiv">
                    <p
                      className="readMoreButton"
                      onClick={toggleContent}
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Show More
                    </p>
                  </div>
                </>
              )}
            </div>
            <aside className="horizontalRectangle">
              <div className="appendAdDiv">
                <div
                  className="lazy-ad"
                  data-slot={0}
                  id="div-gpt-ad-1614408539431-0"
                  style={{ height: 90 }}
                />
              </div>
            </aside>
          </div>

          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                BBA [Bachelor of Business Administration]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 10,000 - 3 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 3 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
               BBA + MBA
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 1 - 17 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 5 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                BBM [Bachelor of Business Management]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 10,000 - 3 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 3 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                BMS [Bachelor of Management Studies]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 10,000 - 2 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 3 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                Executive MBA
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 8 - 30 Lakhs</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 1 Year</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                MHA [Master Hospital Administration]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 3 - 5 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                MIB [Master International Business]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 60,000 -15 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                MMS [Master Management Studies]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 50,000 - 3 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                MMM [Master Marketing Management]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 50,000 PA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                MAM [Master of Applied Management]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 70,000 - 1.5 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                MCM [Master of Computer Management]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 4500 - 20,000 PA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                M.Com in Business Management
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 50,000- 2 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                MTM [Master of Tourism Management]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 10,000 to 50,000 PA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                Distance MBA
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 20,000- 1.5 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                MBA [Master of Business Administration]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 2 - 40 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
               MBA in Sports Management
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 60,000 - 8 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
              MBA in Pharmaceutical Management
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 2 - 16 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                Distance BBA
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 10,000 - INR 25,000 PA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 3 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                PGDM [Post Graduate Diploma Management]
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 3- 12 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
               BBA Marketing
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 1 - 3 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 3 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                BBA (Hons)
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 5K - 1 Lakhs Per Annum</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 3 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                Diploma in Retail Management
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 17,000 to 80,000 PA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 1 Year</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                MBA Logistics Management
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 3 - 24 Lakhs</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                BBA Finance
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 2 - 5 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 3 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                MBA in Data Analytics
              </h5>
              <div className="applyClg desktopOnly">
                <button
                  style={{
                    marginLeft: "1070px",
                    color: "blue",
                    border: "groove",
                  }}
                  type="button"
                  className="primaryBtn applyNow getLeadForm leadCourseCapture js-open-lead-form"
                  data-platform="web"
                  data-entity="course_stream"
                  data-entityid="193"
                  data-ctalocation="courses_category_web_bsc-animation_card_cta1"
                  data-ctatext="Apply Now"
                  data-leadformtitle="REGISTER TO APPLY"
                  data-subheadingtext="B.Sc Animation"
                  data-image="https://media.getmyuni.com/yas/images/gmu-icon.svg"
                >
                  Apply Now
                </button>
              </div>
              <p className="card-text">
                Government colleges have an average fee ranging from INR 10K, to
                INR 75K per annum while private colleges have fees in the range,
                INR 50K to INR 5 Lakhs Per Annum.
              </p>
              <p className="card-text">
                <small className="text-muted">💰Avarage fees: 1 - 11 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years</small>
              </p>
            </div>
            <div className="courseLinks">
              <a
                href="/bsc-animation-syllabus-subjects"
                title="Syllabus &amp; Subjects"
                style={{ textDecoration: "none" }}
              >
                Syllabus &amp; Subjects
              </a>
              <a
                href="/bsc-animation-jobs-scope-salary"
                title="Job, Scope &amp; Salary"
                style={{ textDecoration: "none" }}
              >
                Job, Scope &amp; Salary
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managements;
