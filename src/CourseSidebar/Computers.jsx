import { useState } from "react";
import "./Computers.css";
import "../components/TopcourseSidebar/CourseSidebar.css";
const Computers = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h2
        style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
      >
        Top Computer Courses in India 2023
      </h2>
      <div className="container p-3 my-3 border border-dark ">
        <div className="row">
          {/*<nav className="col-sm-3 col-4" id="myScrollspy">
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
              <h1>Computer Full Course </h1>
              <h2>
                Computer Full Course 2023 National, State &amp; University Level
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
                    Computer Courses in India are related to the field of
                    software, computer science and technology. Computer courses
                    ensures that the students have access to all the vital
                    information they need to learn about the changing
                    technologies, IT, Software engineering and technology.
                  </p>
                  <p>
                    Under all computer courses, students have a plethora of
                    specialisations to choose from. These specialisations are
                    subfields that introduce students to more in depth knowledge
                    on a specific field.
                  </p>
                  <p>
                    Some of the best computer courses include Computer Software
                    Courses, Computer Coding Courses, Computer Hacking Courses,
                    Computer Operator Courses, Computer Repairing Courses,
                    Computer Graphics Courses and Computer Technology Courses.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{ borderCollapse: "collapse", width: "100.019%" }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td style={{ width: "49.2928%" }}>
                            <a href="#h_72710169316461664893098274">
                              Computer Courses Admission
                            </a>
                          </td>
                          <td style={{ width: "49.2928%" }}>
                            <a href="#h_92465622418291664893103391">
                              Computer Courses Entrance Exams
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <strong>Table Of Contents:</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_69689443712721664893088703">
                        Top Computer Courses List
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_33494535714621664893093455">
                        Eligibility for Computer Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_72710169316461664893098274">Admission</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_92465622418291664893103391">Entrance Exams</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_22165973820111664893107902">
                        Syllabus and Subjects
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_67742883821921664893112870">
                        Top Computer Courses Colleges in India
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_42245176823721664893118792">
                        Jobs and Salaries
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_13643289825511664893124396">
                        Scope of Computer Courses in India
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_66937464927291664893129004">Top Recruiters</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_73297649229061664893133869">
                        Skills Required
                      </a>
                    </li>
                  </ul>
                  <h2 id="h_69689443712721664893088703">
                    <strong>Top Computer Courses List</strong>
                  </h2>
                  <p>
                    There are many computer courses for{" "}
                    <a href="#h_42245176823721664893118792">
                      job oriented opportunities
                    </a>{" "}
                    for the students. The list of courses available to the
                    students is diverse and flexible, making it possible for
                    everyone to pursue their dream career path. Students have
                    the opportunity to pursue Computer Courses after 10th,{" "}
                    <a href="https://www.getmyuni.com/articles/computer-courses-after-12th">
                      Computer Courses after 12th
                    </a>
                    , UG and PG.&nbsp;
                  </p>
                  <p>
                    Given below are different types of Computer courses that the
                    students can pursue:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_99435285331951664893157103">
                        Undergraduate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_5188749333701664893162126">
                        Postgraduate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_86268980835441664893166823">
                        Diploma Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_4454790237171664893171798">
                        Certificate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_78361811938891664893177471">
                        Doctorate Courses
                      </a>
                    </li>
                  </ul>
                  <h3 id="h_99435285331951664893157103">
                    <strong>Undergraduate Computer Courses</strong>
                  </h3>
                  <p>
                    Undergraduate computer degree courses which aim to provide
                    some crucial knowledge, skills, and related tools and
                    techniques. UG Computer Courses are of three to four years
                    duration and is offered across different Academies,
                    Institutes, and colleges all over India.
                  </p>
                  <p>
                    Given below is a list of some popular undergraduate computer
                    courses that can be pursued by the students:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bca-course">BCA</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcs-course">
                        Bachelor of Computer Science [BCS]
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/ba-computer-applications-course">
                        BA Computer Applications
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/ba-computer-science-course">
                        BA Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bsc-computer-science-course">
                        B.Sc Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bsc-computer-applications-course">
                        B.Sc Computer Applications
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-computer-applications-course">
                        B.Com Computer Applications
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-computer-science-course">
                        B.Com Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bed-computer-science-course">
                        B.Ed Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/be-computer-science-course">
                        BE Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bba-computer-application-course">
                        BBA Computer Application
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/btech-computer-science-course">
                        B.Tech Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>BCA (Hons.)</li>
                    <li style={{ fontWeight: 400 }}>BCA Data Science</li>
                    <li style={{ fontWeight: 400 }}>BCA Computer Science</li>
                    <li style={{ fontWeight: 400 }}>BCA Data Analytics</li>
                  </ul>
                  <h3 id="h_5188749333701664893162126">
                    <strong>Postgraduate Computer Courses</strong>
                  </h3>
                  <p>
                    A variety of universities and institutions across the nation
                    provide 2-year PG computer courses that are mostly offered
                    in offline and distance learning formats. These computer
                    courses after graduation are a great means for the students
                    to learn about the detailed concepts relating to their
                    specialisations.
                  </p>
                  <p>
                    Given below is a list of some popular computer courses after
                    graduation that can be pursued by the students:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mca-course">MCA</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mcm-course">
                        Master of Computer Management [MCM]
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mba-computer-science-course">
                        MBA Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/msc-computer-science-course">
                        M.Sc Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mphil-computer-science-course">
                        M.Phil Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mcom-computer-applications-course">
                        M.Com Computer Applications
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mtech-computer-science-engineering-course">
                        M.Tech Computer Science and Engineering
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      M Tech. Computer Courses in Industrial Drives
                    </li>
                  </ul>
                  <h3 id="h_86268980835441664893166823">
                    <strong>Computer Diploma&nbsp;Courses</strong>
                  </h3>
                  <p>
                    Computer Diploma courses are 12 to 18 Months long programs
                    in which the candidate gains skills, knowledge, and some
                    handy tips regarding different Chemicals, related tools, and
                    techniques to work thereon. It is important and necessary to
                    learn it with a focused mindset so that one can easily
                    execute the same in real life with ease.
                  </p>
                  <p>
                    Given below is a list of Diploma courses in Computer
                    Courses:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/dca-course">
                        Diploma in Computer Applications [DCA]
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-computer-science-course">
                        Diploma in Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-computer-science-engineering-course">
                        Diploma in Computer Science and Engineering
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/adca-course">
                        Advanced Diploma in Computer Application
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pgdca-course">
                        Post Graduate Diploma in Computer Applications
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Diploma In Computer Programming
                    </li>
                  </ul>
                  <p>
                    <strong>Read More</strong>:{" "}
                    <a href="https://www.getmyuni.com/articles/best-computer-diploma-courses">
                      Computer Diploma Courses in India
                    </a>
                  </p>
                  <h3 id="h_4454790237171664893171798">
                    <strong>Certificate Computer Courses</strong>
                  </h3>
                  <p>
                    Computer certificate courses are short-term programmes with
                    an average duration of 8 to 12 months. The institutes
                    prepare desired students for the investigation of the
                    subject of Computer Courses by imparting some fundamental
                    knowledge to them in order to meet the demand for
                    professional knowledge from the population.
                  </p>
                  <p>
                    Given below are the top Online computer certificate courses:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      Certificate Course in Java
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate Course In Computer Courses
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate Course In C++
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate Course in Computer Operation and Application
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate in Computer Courses and Programming
                    </li>
                  </ul>
                  <div className="table-responsive">
                    <table
                      style={{ borderCollapse: "collapse", width: "98.3915%" }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td style={{ width: "49.2928%" }}>
                            <a href="https://www.getmyuni.com/articles/best-short-term-computer-courses">
                              Short Term Computer Courses
                            </a>
                          </td>
                          <td style={{ width: "49.2928%" }}>
                            <a href="https://www.getmyuni.com/articles/computer-courses-after-12th">
                              Computer Courses after 12th
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 id="h_78361811938891664893177471">
                    <strong>Doctorate Computer Courses</strong>
                  </h3>
                  <p>
                    The Ph.D. programme in computer courses lasts three to five
                    years and is primarily offered offline.
                  </p>
                  <p>
                    Students who desire professionalism and the best education
                    possible in the fields of computer courses, software
                    development, and design pursue this degree.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/phd-computer-science-course">
                        Ph.D in Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Ph.D in Computer Applications
                    </li>
                  </ul>
                  <h2 id="h_33494535714621664893093455">
                    <strong>Eligibility for Computer Courses</strong>
                  </h2>
                  <p>
                    To obtain admission to the top computer courses in India, it
                    is vital that the students are aware of the eligibility for
                    the course. The computer course eligibility differs
                    according to the type of course that the students apply for.
                  </p>
                  <p>
                    Almost all the best Computer courses list require students
                    to give entrance examinations to get admitted to top
                    colleges. Given below are the general requirements for the
                    admission to the top 10 computer courses in demand in India:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <strong>UG Courses</strong>: Desired Students must have to
                      complete their Schooling under the 10+2, a system in any
                      Stream from a recognized Board of Education, securing at
                      least 50% aggregate marks. Additionally students must give
                      the entrance exams.
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <strong>PG Courses</strong>: Candidates who have completed
                      their Graduation in any stream or have any other
                      equivalent certification or degree from a recognized
                      College/Institute of the country, in the same field with a
                      minimum of 45% to 50% aggregate marks are eligible to
                      secure the admission in this course. Additionally,
                      entrance exams are very important for the students to get
                      admission in their desired college.
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <strong>Doctorate Courses</strong>: Candidates who have
                      completed their Post-Graduation, MPhil, or Pre Ph.D. in
                      any stream from a recognized College/Institute of the
                      country, in the relevant subject matter. Students must
                      undergo Entrance Exams and several rounds of Interviews to
                      secure their admission into the Best IITs, Private
                      Colleges in the Country.
                    </li>
                  </ul>
                  <p>
                    <strong>Also Read</strong> on{" "}
                    <a href="https://www.getmyuni.com/articles/computer-applications">
                      Computer Applications
                    </a>
                  </p>
                  <h2 id="h_72710169316461664893098274">
                    <strong>Computer Courses Admission</strong>
                  </h2>
                  <p>
                    Computer course admission is possible by both{" "}
                    <strong>entrance examination</strong> and{" "}
                    <strong>merit-based selection</strong>. Candidates applying
                    for the Computer Courses might have their results from the
                    respective entrance exams boards required by the
                    selected/opted universities. The students can avail
                    themselves of admissions through both online and offline
                    methods.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{ borderCollapse: "collapse", width: "98.3915%" }}
                      border="1"
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            Colleges
                          </td>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            Admission Link
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/vit-university-vit-vellore">
                              VIT Vellore
                            </a>
                          </td>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/vit-university-vit-vellore/admission">
                              VIT Vellore Admission
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-delhi">
                              IIT Delhi
                            </a>
                          </td>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-delhi/admission">
                              IIT Delhi Admission
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-roorkee">
                              IIT Roorkee
                            </a>
                          </td>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-roorkee/admission">
                              IIT Roorkee Admission
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-guwahati">
                              IIT Guwahati
                            </a>
                          </td>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-guwahati/admission">
                              IIT Guwahati Admission
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-hyderabad">
                              IIT Hyderabad
                            </a>
                          </td>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-hyderabad/admission">
                              IIT Hyderabad Admission
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/birla-institute-of-technology-and-science-bits-pilani">
                              BITS Pilani
                            </a>
                          </td>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/birla-institute-of-technology-and-science-bits-pilani/admission">
                              BITS Pilani Admission
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/some-other-college">
                              Some Other College
                            </a>
                          </td>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/some-other-college/admission">
                              Some Other College Admission
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/yet-another-college">
                              Yet Another College
                            </a>
                          </td>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/yet-another-college/admission">
                              Yet Another College Admission
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/guru-gobind-singh-indraprastha-university-ggsiu-new-delhi">
                              GGSIPU
                            </a>
                          </td>
                          <td
                            style={{ width: "49.9812%", textAlign: "center" }}
                          >
                            <a href="https://www.getmyuni.com/college/guru-gobind-singh-indraprastha-university-ggsiu-new-delhi/admission">
                              GGSIPU Admission
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
                  <h2 id="h_92465622418291664893103391">
                    <strong>Computer Courses Entrance Exams</strong>
                  </h2>
                  <p>
                    Entrance exams play an essential role in the final merit
                    list of the selected candidates for admission to the
                    colleges These exams are conducted at the{" "}
                    <strong>national, state, and college levels</strong>. Hence,
                    the students need to research the proper exam before
                    enrolling.
                  </p>
                  <p>
                    Given below are some of the top exams that are conducted for
                    admissions to the different Computer courses in India:
                  </p>
                  <p>
                    <strong>Undergraduate Entrance Exams</strong>:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/lpunest">
                        LPUNEST
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ipu-cet">
                        IPU CET
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/cucet">CUET</a>
                    </li>
                  </ul>
                  <p>
                    <strong>Postgraduate Entrance Exams</strong>:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/nimcet">NIMCET</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/jnuee">JNUEE</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/tancet">TANCET</a>
                    </li>
                  </ul>
                  <div className="table-responsive">
                    <table
                      style={{
                        borderCollapse: "collapse",
                        width: "98.3915%",
                        height: "22.3875px",
                      }}
                      border={1}
                    >
                      <tbody>
                        <tr style={{ height: "22.3875px" }}>
                          <td
                            style={{ width: "49.2928%", height: "22.3875px" }}
                          >
                            <a href="https://www.getmyuni.com/articles/bca-entrance-exams">
                              BCA Entrance Exams
                            </a>
                          </td>
                          <td
                            style={{ width: "49.2928%", height: "22.3875px" }}
                          >
                            <a href="https://www.getmyuni.com/articles/mca-entrance-exams">
                              MCA Entrance Exams
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_22165973820111664893107902">
                    <strong>Computer Courses Syllabus and Subjects</strong>
                  </h2>
                  <p>
                    Computer course syllabus differs according to the
                    specialisation that the students choose to pursue. The
                    aspirants are always advised to invest in Computer course
                    books as it can help the students learn about concepts and
                    topics in great depth and detail.
                  </p>
                  <p>
                    Given below are some of the generic computer course subjects
                    that the students may be taught during their Computer
                    Courses education:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Word Processing</li>
                    <li style={{ fontWeight: 400 }}>Spreadsheets</li>
                    <li style={{ fontWeight: 400 }}>Databases</li>
                    <li style={{ fontWeight: 400 }}>Desktop Publishing</li>
                    <li style={{ fontWeight: 400 }}>The Internet</li>
                    <li style={{ fontWeight: 400 }}>
                      Windows Operating Systems
                    </li>
                  </ul>
                  <div className="table-responsive">
                    <table
                      style={{ borderCollapse: "collapse", width: "98.3915%" }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td style={{ width: "32.6385%" }}>
                            <a href="https://www.getmyuni.com/bca-syllabus-subjects">
                              BCA Subjects and Syllabus
                            </a>
                          </td>
                          <td style={{ width: "32.6385%" }}>
                            <a href="https://www.getmyuni.com/mca-syllabus-subjects">
                              MCA Syllabus and Subjects
                            </a>
                          </td>
                          <td style={{ width: "32.6393%" }}>
                            <a href="https://www.getmyuni.com/dca-syllabus-subjects">
                              DCA Syllabus and Subjects
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_67742883821921664893112870">
                    <strong>Top Computer Courses Colleges in India</strong>
                  </h2>
                  <p>
                    There are many colleges that provide computer courses to the
                    students with placements. This enables the students to build
                    a rewarding career for themselves.
                  </p>
                  <p>
                    Given below are the top colleges along with their Computer
                    Courses fees in India:
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.3915%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>SI.No</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>College Name</p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>Fees (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>1</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/christ-university-bangalore">
                                Christ University, Bangalore
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>3,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>2</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/lovely-professional-university-lpu-jalandhar">
                                LPU, Jalandhar
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>3</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/maharaja-sayajirao-university-of-baroda-gujarat">
                                MSU Baroda, Vadodara
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>3,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>4</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/srm-university-srm-kanchipuram">
                                SRM IST, Kanchipuram
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>5</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/bennett-university-bu-noida">
                                Bennett University, Noida
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>3,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>6</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/sharda-university-noida">
                                Sharda University, Noida
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>7</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-delhi">
                                IIT Delhi, New Delhi
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>1.2 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>8</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/national-institute-of-technology-nit-thiruchirapalli">
                                NIT Trichy, Tiruchirapalli
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>2 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>9</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/ms-ramaiah-institute-of-technology-msrit-bangalore">
                                Ramaiah Institute of Technology, Bangalore
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "11.8244%" }}>
                            <p>10</p>
                          </td>
                          <td style={{ width: "71.529%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/jawaharlal-nehru-university-jnu-new-delhi">
                                JNU, New Delhi
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.6008%" }}>
                            <p>3,000</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_42245176823721664893118792">
                    <strong>Computer Courses Jobs and Salaries</strong>
                  </h2>
                  <p>
                    When pursuing Computer Courses in India students are
                    presented with a diverse range of job opportunities and
                    scope. The curriculum is designed keeping the demands of the
                    industry in mind. Listed below are some of the popular job
                    roles along with their average salaries:
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.535%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "53.3065%" }}>
                            <p>Job Role</p>
                          </td>
                          <td style={{ width: "46.7549%" }}>
                            <p>Average Salary (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "53.3065%" }}>
                            <p>UX UI Designer</p>
                          </td>
                          <td style={{ width: "46.7549%" }}>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "53.3065%" }}>
                            <p>Web Designer</p>
                          </td>
                          <td style={{ width: "46.7549%" }}>
                            <p>2.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "53.3065%" }}>
                            <p>Computer Programmer</p>
                          </td>
                          <td style={{ width: "46.7549%" }}>
                            <p>4 LPA</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_13643289825511664893124396">
                    <strong>Scope of Computer Courses in India</strong>
                  </h2>
                  <p>
                    One of the computer course benefits include the scope of a
                    rewarding career for the students. The computer courses
                    scope in India is very high and rewarding making it possible
                    to build a promising career for the students. Computer
                    Courses is an upcoming field with ample opportunities for
                    graduates.
                  </p>
                  <p>
                    Upon completing the course, students can easily get jobs as
                    Mobile App Developer, Computer Programmer, Computer
                    Operator, Computer Courses Tutor, Senior Application Support
                    Analyst, etc.
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{ borderCollapse: "collapse", width: "98.3915%" }}
                      border={1}
                    >
                      <tbody>
                        <tr>
                          <td style={{ width: "32.6385%" }}>
                            <a href="https://www.getmyuni.com/bca-jobs-scope-salary">
                              BCA Scope in India
                            </a>
                          </td>
                          <td style={{ width: "32.6385%" }}>
                            <a href="https://www.getmyuni.com/mca-jobs-scope-salary">
                              MCA Scope in India
                            </a>
                          </td>
                          <td style={{ width: "32.6393%" }}>
                            <a href="https://www.getmyuni.com/dca-jobs-scope-salary">
                              DCA Scope in India
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_66937464927291664893129004">
                    <strong>
                      Top Recruiters for Computer Course Graduates
                    </strong>
                  </h2>
                  <p>
                    Computer Courses in India provide students with ample job
                    opportunities with a very bright future. Listed below are
                    some of the top recruiters in India.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Wipro</li>
                    <li style={{ fontWeight: 400 }}>Cognizant</li>
                    <li style={{ fontWeight: 400 }}>IBM</li>
                    <li style={{ fontWeight: 400 }}>Infosys</li>
                    <li style={{ fontWeight: 400 }}>Accenture</li>
                    <li style={{ fontWeight: 400 }}>Adobe</li>
                    <li style={{ fontWeight: 400 }}>Oracle</li>
                    <li style={{ fontWeight: 400 }}>TCS</li>
                    <li style={{ fontWeight: 400 }}>Micromax</li>
                  </ul>
                  <h2 id="h_73297649229061664893133869">
                    <strong>
                      Skills Required For Computer Courses In India
                    </strong>
                  </h2>
                  <p>
                    Given below are the top computer courses skills required to
                    succeed in the course:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Analytical Skills</li>
                    <li style={{ fontWeight: 400 }}>
                      Critical Thinking Skills
                    </li>
                    <li style={{ fontWeight: 400 }}>Communication Skills</li>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
                B.Sc Animation
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
                <small className="text-muted">💰Avarage fees: ---</small>
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
        </div>
      </div>
    </div>
  );
};

export default Computers;
