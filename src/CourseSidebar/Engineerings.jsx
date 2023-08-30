import { useState } from "react";
import "./Engineerings.css";
import "../components/TopcourseSidebar/CourseSidebar.css";
const Engineerings = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
    <h2
      style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
    >
      Top Engineering Course in India 2023
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
            <h1>Engineering Full Course </h1>
            <h2>
              Engineering Full Course 2023 National, State &amp; University
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
                  Engineering is one of the most popular majors in the nation.
                  The best engineering courses in India are offered by several
                  prestigious institutions and colleges, and 80% of the
                  nations youth study engineering. The engineering programmes
                  are concentrated on different facets of the nations
                  development and provide a wide range of employment
                  opportunities in both the public and private sectors.&nbsp;
                </p>
                <p>
                  With numerous prestigious institutions offering Certificate
                  programmes, Diplomas, and Degree programmes (Bachelors,
                  Masters, and Doctorate), India has some of the best
                  engineering courses available. Engineering course duration
                  can range from 3 or 4 years of undergraduate to 2 or 3 years
                  of post-graduation while some diplomas can take a year.
                </p>
                <p>
                  <strong>Table of Contents</strong>
                </p>
                <ul>
                  <li>
                    <a href="#h_41829833613601664866831862">
                      Engineering Courses list
                    </a>
                  </li>
                  <li>
                    <a href="#h_82859079615511664866842731">
                      Eligibility for Engineering Courses
                    </a>
                  </li>
                  <li>
                    <a href="#h_72291882617411664866848345">Admission</a>
                  </li>
                  <li>
                    <a href="#h_29934920119301664866856484">Entrance Exam</a>
                  </li>
                  <li>
                    <a href="#h_20342015321181664866864486">
                      Types of Engineering Courses
                    </a>
                  </li>
                  <li>
                    <a href="#h_98755224323221664866874705">
                      Top 10 Engineering Courses in demand
                    </a>
                  </li>
                  <li>
                    <a href="#h_88840722625091664866882211">
                      Syllabus and Subjects
                    </a>
                  </li>
                  <li>
                    <a href="#h_21452036726761664866906607">
                      Top 10 Engineering Colleges in India
                    </a>
                  </li>
                  <li>
                    <a href="#h_95012616128601664866914368">
                      Job Opportunities and Salaries
                    </a>
                  </li>
                  <li>
                    <a href="#h_1620171930431664866920240">
                      Scope of Engineering in India
                    </a>
                  </li>
                  <li>
                    <a href="#h_75279750932251664866926998">Top Recruiters</a>
                  </li>
                </ul>
                <h2 id="h_41829833613601664866831862">
                  <strong>Engineering Courses List</strong>
                </h2>
                <p>
                  The nation offers a wide range of top engineering courses,
                  including diplomas, B.techs, and even PhDs. Numerous
                  additional engineering-related courses and certifications
                  are offered by some of the top engineering colleges,
                  including IITs, VITs, BITS, and NITs. A candidate choosing
                  to study for an engineering course should be aware that
                  almost all engineering courses in India are entrance exam
                  based. Candidates can select from various types of
                  engineering courses; the list of engineering course details
                  offered in the nation is broken down as follows:
                </p>
                <ul>
                  <li>
                    <a href="#h_7979930392421664866792039">
                      Undergraduate Courses
                    </a>
                  </li>
                  <li>
                    <a href="#h_818727214381664866799463">
                      Postgraduate Courses
                    </a>
                  </li>
                  <li>
                    <a href="#h_2095316996331664866805262">Diploma Courses</a>
                  </li>
                  <li>
                    <a href="#h_2631908758271664866810957">
                      Certification Courses
                    </a>
                  </li>
                  <li>
                    <a href="#h_49993878211611664866818539">
                      Doctorate Courses
                    </a>
                  </li>
                </ul>
                <h3 id="h_7979930392421664866792039">
                  <strong>Undergraduate Courses</strong>
                </h3>
                <p>
                  The course is a full-time course for a span of three years
                  with integrated studies leading up to five years. These
                  engineering courses after 12th which the candidates pursue
                  although they need to make sure they stand eligible for the
                  criteria set by the university. There are various UG
                  engineering courses such as&nbsp;
                </p>
                <ul>
                  <li>
                    <a href="https://www.getmyuni.com/btech-course">B.Tech</a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/be-course">B.E</a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/biotech-engineering-course">
                      B.Tech Biotechnology
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/btech-computer-science-course">
                      B.Tech CSE
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/food-technology-engineering-course">
                      B.Tech Food Technology
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/information-technology-course">
                      B.Tech IT
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/civil-engineering-course">
                      B.Tech Civil Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/mechanical-engineering-course">
                      B.Tech Mechanical Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/electrical-engineering-course">
                      B.Tech Electrical Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/aerospace-engineering-course">
                      B.Tech Aerospace Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/be-mechanical-engineering-course">
                      BE Mechanical Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/be-civil-engineering-course">
                      BE Civil Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/be-computer-engineering-course">
                      BE Computer Engineering
                    </a>
                  </li>
                </ul>
                <h3 id="h_818727214381664866799463">
                  <strong>Postgraduate Courses</strong>
                </h3>
                <p>
                  After completion of a bachelors degree, students can desire
                  to pursue postgraduate courses such as M.Tech and ME to
                  advance their skills in the field of engineering and
                  research. Some of the Postgraduate engineering courses are
                </p>
                <ul>
                  <li>
                    <a href="https://www.getmyuni.com/mtech-course">M.Tech</a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/me-course">M.E</a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/mtech-civil-engineering-course">
                      M.Tech Civil Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/mtech-mechanical-engineering-course">
                      M.Tech Mechanical Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/mtech-electrical-engineering-course">
                      M.Tech Electrical Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/mtech-structural-engineering-course">
                      M.Tech Structural Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/mtech-thermal-engineering-course">
                      M.Tech Thermal Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/mtech-software-engineering-course">
                      M.Tech Software Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/me-mechanical-engineering-course">
                      M.E Mechanical Engineering
                    </a>
                  </li>
                  <li>M.E Civil Engineering</li>
                  <li>M.E Electrical Engineering</li>
                  <li>M.E Structural Engineering</li>
                  <li>M.E instrumentation and Control Engineering</li>
                </ul>
                <h3 id="h_2095316996331664866805262">
                  <strong>Diploma Courses</strong>
                </h3>
                <p>
                  There are certain engineering courses after 12th that are
                  available to candidates as diplomas which they can pursue
                  right after graduation from high school. Some of the diploma
                  courses also act as a lateral entry to the bachelors
                  program. After graduating with a bachelors, there are
                  post-graduate diploma programs available to students who are
                  looking for courses that are short-term and more
                  professionally structured. Here is a list of engineering
                  diploma courses available to the candidates:&nbsp;
                </p>
                <ul>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-mechanical-engineering-course">
                      Diploma in Mechanical Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-civil-engineering-course">
                      Diploma in Civil Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-electronics-and-communication-engineering-course">
                      Diploma in Electronics and Communication Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-electrical-engineering-course">
                      Diploma in Electrical Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-computer-science-engineering-course">
                      Diploma in Computer Science Engineering
                    </a>
                    &nbsp;
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-architecture-engineering-course">
                      Diploma in Architecture Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-automobile-engineering-course">
                      Diploma in Automobile Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-marine-engineering-course">
                      Diploma in Marine Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-biomedical-engineering-course">
                      Diploma In Biomedical Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-chemical-engineering-course">
                      Diploma in Chemical Engineering
                    </a>
                  </li>
                  <li>Diploma in Production Engineering</li>
                  <li>Diploma in Agricultural Engineering</li>
                </ul>
                <h3 id="h_2631908758271664866810957">
                  <strong>Certification Courses</strong>
                </h3>
                <p>
                  One can also pursue certification courses in engineering.
                  There are many certifications available in the field of
                  sound engineering and software engineering. These are
                  short-term courses to provide fundamentals for the students.
                  Certain certifications are engineering courses after 10th
                  that a candidate can pursue. Below are some of the
                  certificate courses for engineering:
                </p>
                <ul>
                  <li>Certificate in Civil Engineering</li>
                  <li>Certificate in Mechanical Engineering</li>
                  <li>Certificate in Computer Science Engineering</li>
                  <li>
                    Certificate in Electronics and Communication Engineering
                  </li>
                  <li>Certificate in IT</li>
                </ul>
                <h3 id="h_49993878211611664866818539">
                  <strong>Doctorate Courses</strong>
                </h3>
                <p>
                  There are doctoral degree programs available for engineering
                  to pursue after graduation. These include the field of
                  mechanics, aerospace engineering, aeronautical, civil
                  engineering, and many more. Here is a list of PhD courses in
                  engineering:
                </p>
                <ul>
                  <li>
                    <a href="https://www.getmyuni.com/phd-engineering-course">
                      PhD in Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/phd-civil-engineering-course">
                      PhD in Civil Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/phd-mechanical-engineering-course">
                      PhD in Mechanical Engineering
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/phd-electrical-engineering-course">
                      PhD in Electrical Engineering
                    </a>
                  </li>
                  <li>PhD in Aerospace Engineering</li>
                  <li>PhD in Chemical Engineering</li>
                  <li>PhD in Environmental Engineering&nbsp;</li>
                  <li>PhD in Computer Science Engineering&nbsp;</li>
                  <li>PhD in Energy Engineering&nbsp;</li>
                  <li>PhD in Information Technology</li>
                  <li>PhD in Petroleum Engineering</li>
                </ul>
                <p>
                  The scope for pursuing engineering courses in India is very
                  wide. There are several branches that the students can
                  pursue. Additionally, students can study in the best
                  colleges if they ensure that they work hard during their
                  education and entrance exams.
                </p>
                <div className="table-responsive">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "100.004%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    border={1}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/best-engineering-courses-in-india">
                            Best Engineering Courses In India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/best-engineering-branch">
                            Best Engineering Branches in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_82859079615511664866842731">
                  <strong>Eligibility for Engineering Courses</strong>
                </h2>
                <p>
                  Depending on the course type the applicant is applying to,
                  an individual may be eligible for engineering courses.
                  Students must have a minimum of 50% in their 10+2 from an
                  approved board with PCBM in order to enroll in undergraduate
                  programmes. Students must concentrate on their undergraduate
                  grades to gain admission for engineering courses to the
                  postgraduate programmes.
                </p>
                <p>
                  To enroll in top colleges offering engineering programmes,
                  almost all students must take entrance exams. Here is
                  engineering course eligibility based on the degrees of
                  graduation:&nbsp;
                </p>
                <ul>
                  <li>
                    <strong>Undergraduate Degree:</strong> Candidates for
                    undergraduate degrees must have a PCBM combination in
                    their 10+2 exam. A candidate must additionally receive a
                    combined total of 50% of the PCBM marks. They also have to
                    sit for entrance exams.
                  </li>
                  <li>
                    <strong>Postgraduate Degree:</strong> Candidates for
                    postgraduate degrees should have a Bachelor’s degree with
                    a minimum of 50% of the total aggregate. They also have to
                    sit for entrance exams.
                  </li>
                  <li>
                    <strong>Diploma: </strong>For a diploma, the candidate
                    needs to have a 10+2 graduation certificate with a PCBM
                    combination. There may be an entrance exam for certain
                    subjects, but for most diplomas, admission is granted on a
                    merit basis. For a postgraduate diploma, the candidate
                    needs to sit for entrance exams.
                  </li>
                  <li>
                    <strong>PhD:</strong> Candidates wishing to pursue a
                    doctorate in the field of engineering need to hold a
                    masters degree in the relevant field. Along with it, they
                    should have a minimum of 60% total aggregate. Students
                    need to pass entrance exams.
                  </li>
                </ul>
                <p>
                  <strong>Read More</strong> on{" "}
                  <a href="https://www.getmyuni.com/articles/what-is-engineering">
                    What is Engineering?
                  </a>
                </p>
                <h2 id="h_72291882617411664866848345">
                  <strong>Engineering Courses Admission</strong>
                </h2>
                <p>
                  Engineering course admission is based on both merit and
                  entrance exam. The chosen/opted universities may require
                  applicants for the Engineering degree to submit their
                  results from the relevant entrance exam boards. The students
                  have the option of applying for admission offline or online.
                  Listed below are the admission links to the most popular
                  engineering colleges in India:
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
                          <strong>Colleges</strong>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <strong>Admission Link</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/rv-college-of-engineering-rvce-bangalore">
                            RV College of Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/rv-college-of-engineering-rvce-bangalore/admission">
                            RV College of Engineering Admissions
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/college-of-engineering-coe-pune">
                            College of Engineering Pune
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/college-of-engineering-coe-pune/admission">
                            College of Engineering Pune Admissions
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/thiagarajar-college-of-engineering-tce-madurai">
                            Thiagarajar College of Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/thiagarajar-college-of-engineering-tce-madurai/admission">
                            Thiagarajar College of Engineering Admissions
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/rajalakshmi-engineering-college-rec-chennai">
                            Rajalakshmi Engineering College
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/rajalakshmi-engineering-college-rec-chennai/admission">
                            Rajalakshmi Engineering College Admissions
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/noida-institute-of-engineering-and-technology-niet-noida">
                            Noida Institute of Engineering and Technology
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/noida-institute-of-engineering-and-technology-niet-noida/admission">
                            Noida Institute of Engineering and Technology
                            Admissions
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Students must check the official website of the colleges
                  they are applying to for information on the online
                  application process. They would have to go in person to the
                  colleges admission office for offline methods.
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
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/top-government-engineering-colleges-in-india">
                            Top Government Engineering Colleges in India 2022
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/top-private-engineering-colleges-in-india">
                            Top Private Engineering Colleges in India 2022
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_29934920119301664866856484">
                  Engineering Courses Entrance Exam
                </h2>
                <p>
                  The final merit list of candidates chosen for engineering
                  course admission to colleges heavily weighs on entrance
                  exams. The colleges use the entrance exams as a screening
                  tool to determine whether the applicants are a good fit for
                  the programme.
                </p>
                <p>
                  These tests are given at the college, state, and national
                  levels. Therefore, it is crucial that students do their
                  research on the appropriate exam before enrolling. Below is
                  a breakdown of entrance exams based on their degree:
                </p>
                <p>
                  <strong>UG Entrance Exams</strong>
                </p>
                <p>
                  Here is a list of undergraduate entrance exams for
                  engineering candidates:
                </p>
                <ul>
                  <li>
                    <a href="https://www.getmyuni.com/exams/jee-main">
                      JEE Main
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/jee-advanced">
                      JEE Advanced
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/nata">NATA</a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/iiser">IISER</a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/duet">DUET</a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/amet">AMET</a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/imucet">
                      IMU CET
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/uni-gauge">
                      Uni Gauge
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/cucet">CUCET</a>
                  </li>
                </ul>
                <p>
                  <strong>PG Entrance Exams</strong>
                </p>
                <p>
                  Here is a list of postgraduate entrance exams for
                  engineering candidates:
                </p>
                <ul>
                  <li>
                    <a href="https://www.getmyuni.com/exams/gate-exam">
                      GATE&nbsp;
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/imucet">
                      IMU CET
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/ipu-cet">
                      IPU CET
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/tancet">TANCET</a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/pgcet">
                      Karnataka PGCET
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/ap-pgecet">
                      AP PGECET&nbsp;
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/gujarat-pgcet">
                      Gujarat PGCET
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/pu-cet">PU CET</a>
                  </li>
                  <li>MET M.Tech Entrance Exam</li>
                  <li>IIT Delhi M.Tech Entrance Exam</li>
                </ul>
                <p>
                  <strong>Doctorate Entrance Exams</strong>
                </p>
                <p>
                  Here is a list of entrance exam for PhD in engineering
                  fields:
                </p>
                <ul>
                  <li>
                    <a href="https://www.getmyuni.com/exams/ugc-net">
                      UGC Net
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/csir-net">
                      CSIR NET
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/scholarships/dbt-jrf-fellowship">
                      DBT JRF BET
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/icmr-jrf">
                      ICMR JRF
                    </a>
                  </li>
                  <li>
                    Joint Graduate Entrance Examination for Biology and
                    Interdisciplinary Life Sciences (JGEEBILS)
                  </li>
                  <li>TIFR Graduate School Admission Entrance Test</li>
                </ul>
                <p>
                  There are many such entrance exams that are conducted.
                  Entrance exams play a vital role when applying for an
                  engineering course, and hence it is important that the
                  students research about these entrance exams.
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
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/top-engineering-entrance-exam-apart-from-jee-main">
                            Top Engineering Entrance Exams Apart from JEE Main
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/engineering-colleges-without-jee-mains">
                            Top&nbsp;Engineering Colleges Without JEE Mains
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/top-private-engineering-colleges-in-india-without-entrance-exam">
                            Private Engineering Colleges in India without
                            Entrance Exam
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/government-engineering-colleges-without-jee-mains">
                            Government Engineering Colleges without JEE Mains
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_20342015321181664866864486">
                  <strong>Types of Engineering Courses</strong>
                  <strong> (Branches)</strong>
                </h2>
                <p>
                  It is challenging to select a specific field because
                  engineering courses in India are varied in nature and cover
                  many broad concepts. Drafting, designing, and putting new
                  ideas into practice for machines, structures, and devices
                  constitute the main focus of engineering courses.
                  Engineering programmes are extremely well-liked across the
                  nation due to their wide range of applications.
                </p>
                <p>
                  After graduation, a candidate can anticipate finding a
                  well-paying job in both the public and private sectors, and
                  since math and science are stressed, all engineering courses
                  are regarded as lucrative fields for school graduates to
                  study. Let’s have a look at a few types of engineering
                  courses:
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
                          <a href="#h_810137985172551665050027770">
                            Software Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="#h_64531203315121665054944654">
                            Civil Engineering
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="#h_648563747187861665050473090">
                            Computer Science Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="#h_32821255420071665054957146">
                            Mechanical Engineering
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="#h_64639457124811665054968900">
                            Data Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="#h_648563747187861665050473090">
                            Electrical Engineering
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Sound Engineering
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Marine Engineering
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Automotive Engineering
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Biotechnology Engineering
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Chemical Engineering
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Aeronautical Engineering
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Biomedical Engineering
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Robotics Engineering
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  The engineering course fees vary from university to
                  specialization of the course. Candidates should make a note
                  of the fee structure of the engineering specialization they
                  are planning to pursue before filling out the form.
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
                          <a href="https://www.getmyuni.com/articles/top-universities-in-india-for-engineering">
                            Top Universities in India for Engineering 2022
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/engineering-colleges-accepting-kcet">
                            Top Engineering Colleges Accepting KCET
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 id="h_810137985172551665050027770">
                  <strong>Software Engineering Courses</strong>
                </h3>
                <p>
                  One of the most pursued courses after graduation from high
                  school is Software Engineering courses. The goal of the
                  subject is to familiarize students with the advancement of
                  software technologies and study the design, testing and
                  building of software. Below are some of the software
                  engineering courses offered:
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
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <strong>Average Fees (INR)</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/msc-software-engineering-course">
                            M.Sc Software Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          8.92 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/btech-software-engineering-course">
                            B.Tech in Software Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          8.91 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/mtech-software-engineering-course">
                            M.Tech in Software Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          2.99 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Diploma in Software Engineering
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          13,000 PA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          PhD Software Engineering
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          25,000 PA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  The software engineering courses are offered as
                  certifications, diplomas, bachelors, masters and doctoral
                  degrees. Some of the premier colleges are IIT Allahabad, IIT
                  Madras, Madras Christain College, DTU, BITS Pilani, etc to
                  name a few.&nbsp;
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
                          <a href="https://www.getmyuni.com/btech-software-engineering-colleges">
                            B.Tech Software Engineering Colleges in India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/mtech-software-engineering-colleges">
                            MTech Software Engineering Colleges in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 id="h_64531203315121665054944654">
                  <strong>Civil Engineering Courses</strong>
                </h3>
                <p>
                  Civil Engineering is a course which deals with the
                  development of the practical skills required to plan, design
                  and execute the construction of public infrastructure. There
                  are a lot of scopes for graduates to build a rewarding
                  career for themselves, owing to the relevance of education.
                  Given below are a few courses that the students can pursue
                  in Civil Engineering courses:
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
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <strong>Average fees (INR)</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/civil-engineering-course">
                            B.Tech in Civil Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          1.2 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/be-civil-engineering-course">
                            BE in Civil Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          1 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/phd-civil-engineering-course">
                            PhD in Civil Engineering
                          </a>
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
                          <a href="https://www.getmyuni.com/diploma-in-civil-engineering-course">
                            Diploma in Civil Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          1 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Certificate Course in Advanced Foundation in Civil
                          Engineering
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          50,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Civil engineering courses are often offered at the UG level
                  and PG level. There are many colleges around the country
                  that provide students with Engineering colleges including
                  both private and public colleges.
                </p>
                <div className="table-responsive">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "99.0136%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    border={1}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{ width: "100.024%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/civil-engineering-colleges">
                            Top Civil Engineering Colleges in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>Computer Science Engineering Courses</strong>
                </h3>
                <p>
                  Another most pursued engineering field in the country is
                  computer science engineering. The course deals with
                  programming languages, computation, hardware software and
                  design applications. The course ranges from diploma to PhD
                  with many universities such as IIT, MIT and PU to name a
                  few. Below are a few courses offered in Computer Sc.
                  Engineering along with their average fees.
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
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <strong>Average fees (INR)</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/diploma-in-computer-science-engineering-course">
                            Diploma in CSE
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          1.2 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/btech-computer-science-course">
                            B.Tech in Computer Science Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          8.33 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/mtech-computer-science-engineering-course">
                            M.Tech in Computer Science Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          4.30 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          PhD in Computer Science Engineering
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          72,000 PA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          PG Diploma in CSE
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          1.8 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 id="h_32821255420071665054957146">
                  <strong>Mechanical Engineering Courses</strong>
                </h3>
                <p>
                  Mechanical engineering is the application of the principles
                  and problem-solving techniques of engineering from design to
                  manufacturing to the marketplace for any object. Given below
                  are the top courses in the Mechanical Engineering field that
                  the students can pursue:
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
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Average fees (INR)</strong>
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
                          <a href="https://www.getmyuni.com/mechanical-engineering-course">
                            B.Tech in Mechanical Engineering
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          1.2 LPA
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
                          <a href="https://www.getmyuni.com/be-mechanical-engineering-course">
                            BE in Mechanical Engineering
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          1 LPA
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
                          <a href="https://www.getmyuni.com/phd-mechanical-engineering-course">
                            PhD in Mechanical Engineering
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 LPA
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
                          <a href="https://www.getmyuni.com/diploma-in-mechanical-engineering-course">
                            Diploma in Mechanical Engineering
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          1 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Mechanical engineering provides students with the scope to
                  learn and develop their skills a lot. Due to which students
                  have the scope to build a very promising and diverse career
                  path for themselves.
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
                          <a href="https://www.getmyuni.com/articles/courses-and-career-options-after-btech-mechanical-engineering">
                            Courses and Career Options After B.Tech Mechanical
                            Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/courses-and-career-options-after-diploma-mechanical-engineering">
                            Courses and Career Options After Diploma in
                            Mechanical Engineering
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 id="h_64639457124811665054968900">
                  <strong>Data Engineering Courses</strong>
                </h3>
                <p>
                  This is one of the fastest-growing branches in the field of
                  engineering which has gained momentum over the past few
                  years. Data engineering courses are often confused with data
                  science engineering, the former deals with the creation of
                  database and processing systems, while the latter is focused
                  on organizing data and creating models that can predict
                  models. Below are a few courses offered in Data Engineering
                  along with their average fees.
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
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <strong>Average Fees (INR)</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/bsc-data-science-course">
                            B.Sc Data Science
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          4.56 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          BCA Data Science
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
                          MCA Data Science
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          1.73 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          M.Tech Data Science
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          3.8 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          PG Diploma in Data Science
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          1.75 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Students can pursue a postgraduate degree diploma course to
                  master this field. Many famous colleges such as SSPU, SCIT,
                  MIT WUPS and HITS to name a few of the Data Engineering
                  courses.&nbsp;
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
                          <a href="https://www.getmyuni.com/btech-data-science-colleges">
                            B.Tech Data Science Colleges in India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/mtech-data-science-colleges">
                            M.Tech Data Science Colleges in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 id="h_648563747187861665050473090">
                  <strong>Electrical Engineering Courses</strong>
                </h3>
                <p>
                  The electrical engineering course is based on the study of
                  electromagnetism, electronics and electricity. The course is
                  also pursued as a vocational course in the country as is
                  much more popular for students who wish to pursue a
                  career-oriented course. The course is offered as a diploma
                  program and a doctorate program. Below are a few courses
                  offered in Electrical Engineering along with their average
                  fees.
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
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <strong>Average fees (INR)</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/electrical-engineering-course">
                            B.Tech in Electrical Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          8.56 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/mtech-electrical-engineering-course">
                            M.Tech in Electrical Engineering
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          1.96 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          M.Sc in Electrical Engineering&nbsp;
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          1.06 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Diploma in Electrical Engineering&nbsp;
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          8750 PA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          PhD in Electrical Engineering&nbsp;
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          1.94 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_98755224323221664866874705">
                  <strong>Top 10 Engineering Courses in Demand</strong>
                </h2>
                <p>
                  Since engineering is a popular stream in India, there is a
                  high demand for the courses offered by the stream in the
                  country. The popular courses range from diploma to
                  postgraduate to even doctorate. Here are some of the popular
                  courses in engineering that are in demand:
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
                          <strong>Courses</strong>
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
                          <a href="https://www.getmyuni.com/diploma-in-mechanical-engineering-course">
                            Diploma in Mechanical Engineering
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
                          <a href="https://www.getmyuni.com/aerospace-engineering-course">
                            B.Tech in Aerospace Engineering
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          4 Years
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
                          <a href="https://www.getmyuni.com/mtech-civil-engineering-course">
                            M.Tech in Civil Engineering
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
                          <a href="https://www.getmyuni.com/btech-marine-engineering-course">
                            B.Tech Marine Engineering
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          4 Years
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
                          PG Diploma in Civil Engineering
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
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
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Diploma in Computer Engineering
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
                          B.Sc Sound Engineering
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
                          M.Sc in Electrical Engineering
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
                          M.Tech in Avionics
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
                          M.Tech in Intelligent Automation and Robotics
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
                <h3>
                  <strong>Engineering Courses without Maths</strong>
                </h3>
                <p>
                  Most engineering students struggle in math, making it
                  difficult to graduate. Engineering courses without math are
                  often less well-known. These programmes place less emphasis
                  on math and more on other engineering-related topics.
                </p>
                <p>
                  AICTE has set new rules for certain engineering courses
                  under Diploma and UG courses which can be pursued without
                  maths. Here are some engineering courses without math:
                </p>
                <div className="table-responsive">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "99%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      height: "179.1px",
                    }}
                    border={1}
                  >
                    <tbody>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "62.0555%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{
                            width: "37.9683%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <strong>Average Fees (INR)</strong>
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "62.0555%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/be-mining-engineering-course">
                            BE Mining Engineering
                          </a>
                        </td>
                        <td
                          style={{
                            width: "37.9683%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          82,400 PA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "62.0555%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/computer-engineering-course">
                            B.Tech Computer Engineering
                          </a>
                        </td>
                        <td
                          style={{
                            width: "37.9683%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          1.09 LPA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "62.0555%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/mtech-biotechnology-course">
                            M.Tech Biotechnology
                          </a>
                        </td>
                        <td
                          style={{
                            width: "37.9683%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          2.12 LPA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "62.0555%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          M.Tech Biochemical Engineering
                        </td>
                        <td
                          style={{
                            width: "37.9683%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          51,000 PA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "62.0555%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          B.Tech Bioinformatics
                        </td>
                        <td
                          style={{
                            width: "37.9683%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          1.98 LPA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "62.0555%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          BE Biochemical Engineering
                        </td>
                        <td
                          style={{
                            width: "37.9683%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          75,116 PA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "62.0555%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          B.Tech Genetic Engineering
                        </td>
                        <td
                          style={{
                            width: "37.9683%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          25,000 PA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>Engineering Courses Online</h3>
                <p>
                  Given below are some of the top engineering courses that
                  students can pursue online:
                </p>
                <div className="table-responsive">
                  <table
                    className="table table-striped style_table"
                    style={{
                      borderCollapse: "collapse",
                      width: "99%",
                      height: "246.262px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <tbody>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Course Name</strong>
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Provider</strong>
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
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
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Nano at Stanford
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Stanford University
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          10 weeks
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Quantum Mechanics for Scientists and Engineers
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Stanford University
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          9 weeks
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          A Hands-on Introduction to Engineering Simulations
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          EdX
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          6 weeks
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          CS50s Introduction to Computer Science
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          EdX
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          12 weeks
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Engineering Calculus and Differential Equations
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          EdX
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          6 weeks
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Chemometrics in Air Pollution
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Futurelearn
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 weeks
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Principles of Engineering
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Futurelearn
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          4 weeks
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Construction Safety and Health
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Alison
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 - 4 hours
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Diploma in Electrical Studies
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Alison
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          10 - 15 hours
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "61.8353%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Diploma in Marine Diesel Engines
                        </td>
                        <td
                          style={{
                            width: "22.3859%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          Alison
                        </td>
                        <td
                          style={{
                            width: "15.6545%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          10 - 15 hours
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 id="h_49993878211611664866818539" />
                <h2 id="h_88840722625091664866882211">
                  <strong>Engineering Course Syllabus and Subjects</strong>
                </h2>
                <p>
                  The courses primary emphasis is on the study of mechanics,
                  electricity, and software designs and techniques. The course
                  covers a wide range of topics, including distribution,
                  administration, testing, consulting, and research. Numerous
                  research and design strategies are incorporated.
                </p>
                <p>
                  The following are some engineering course subjects that
                  students may learn about in their engineering courses:
                </p>
                <ul>
                  <li>Communication Engineering</li>
                  <li>Mechanics</li>
                  <li>Application Design</li>
                  <li>Hardware Application Design</li>
                  <li>Programming&nbsp;</li>
                  <li>Structural Design and engineering</li>
                  <li>Environmental Engineering&nbsp;</li>
                  <li>Nanotechnology</li>
                </ul>
                <p>
                  Depending on the kind of course, the student wants to enrol
                  in, the exact curriculum and length of the course will vary.
                  For instance, a topic may not be covered as thoroughly in a
                  diploma or undergraduate course as it is in a postgraduate
                  course.
                </p>
                <div className="table-responsive">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "99%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      height: "44.775px",
                    }}
                    border={1}
                  >
                    <tbody>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "49.2928%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/btech-syllabus-subjects">
                            B.Tech Subjects and Syllabus
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/mtech-syllabus-subjects">
                            M.Tech Syllabus and Subjects
                          </a>
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "49.2928%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/be-syllabus-subjects">
                            BE Subjects and Syllabus
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/me-syllabus-subjects">
                            ME Subjects and Syllabus
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_21452036726761664866906607">
                  <strong>Top 10 Engineering Colleges in India</strong>
                </h2>
                <p>
                  India, is home to many reputed universities which have ties
                  with universities such as MIT, IITs, and NITs to name a few.
                  There are a plethora of colleges offering engineering
                  courses to candidates wishing to pursue a career in
                  engineering. Here are some of the best universities
                  providing engineering courses in the country:
                </p>
                <div className="table-responsive">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "99%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      height: "246.262px",
                    }}
                    border={1}
                  >
                    <tbody>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <strong>NIRF Ranking</strong>
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <strong>Colleges</strong>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <strong>Fees (INR)</strong>
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          1
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-chennai">
                            IIT Madras
                          </a>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          75000 PA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          2
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-delhi">
                            IIT Delhi
                          </a>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          2.2 LPA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          3
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-bombay">
                            IIT Bombay
                          </a>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          2.28 LPA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          4
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-kanpur">
                            IIT Kanpur
                          </a>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          2.42 LPA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          5
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-kharagpur">
                            IIT Kharagpur
                          </a>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          2.31 LPA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          6
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-roorkee">
                            IIT Roorkee
                          </a>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          6.5 LPA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          7
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-guwahati">
                            IIT Guwahati
                          </a>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          2.17 LPA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          8
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-hyderabad">
                            IIT Hyderabad
                          </a>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          5 LPA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          9
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/college-of-engineering-anna-university-chennai">
                            CEG Guindy
                          </a>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          50,000 PA
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "15.7194%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          10
                        </td>
                        <td
                          style={{
                            width: "60.8874%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/national-institute-of-technology-nit-thiruchirapalli">
                            NIT Trichy
                          </a>
                        </td>
                        <td
                          style={{
                            width: "23.3687%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          1.6 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>IGNOU Engineering Courses</strong>
                </h3>
                <p>
                  Students can pursue engineering courses on IGNOU via
                  distance and online modes. Given below is some general
                  information regarding the IGNOU Engineering courses that the
                  students can pursue:
                </p>
                <div className="table-responsive">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "99.0136%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    border={1}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{ width: "55.3744%", textAlign: "center" }}
                        >
                          <strong>Course Name</strong>
                        </td>
                        <td
                          style={{ width: "21.1809%", textAlign: "center" }}
                        >
                          <strong>Duration</strong>
                        </td>
                        <td style={{ width: "23.455%", textAlign: "center" }}>
                          <strong>Fees (INR)</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "55.3744%", textAlign: "center" }}
                        >
                          B.Tech in Civil Engineering (Construction
                          Management) (BTCM)
                        </td>
                        <td
                          style={{ width: "21.1809%", textAlign: "center" }}
                        >
                          4 years
                        </td>
                        <td style={{ width: "23.455%", textAlign: "center" }}>
                          20,000
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "55.3744%", textAlign: "center" }}
                        >
                          Diploma in Dairy Management
                        </td>
                        <td
                          style={{ width: "21.1809%", textAlign: "center" }}
                        >
                          1 year
                        </td>
                        <td style={{ width: "23.455%", textAlign: "center" }}>
                          15,200
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "55.3744%", textAlign: "center" }}
                        >
                          Diploma in Civil Engineering
                        </td>
                        <td
                          style={{ width: "21.1809%", textAlign: "center" }}
                        >
                          3 years
                        </td>
                        <td style={{ width: "23.455%", textAlign: "center" }}>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "55.3744%", textAlign: "center" }}
                        >
                          Ph.D in Dairy Science and Technology
                        </td>
                        <td
                          style={{ width: "21.1809%", textAlign: "center" }}
                        >
                          3 years
                        </td>
                        <td style={{ width: "23.455%", textAlign: "center" }}>
                          50,400
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "55.3744%", textAlign: "center" }}
                        >
                          Post Graduate Certificate in Industrial Safety
                        </td>
                        <td
                          style={{ width: "21.1809%", textAlign: "center" }}
                        >
                          6 months
                        </td>
                        <td style={{ width: "23.455%", textAlign: "center" }}>
                          6,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  IGNOU is a well-recognised open university with more than 3
                  million students pursuing their education. IGNOU offers many
                  courses online. Likewise, there are many colleges in India
                  that students can study in. Hence it is vital that the
                  students research about the courses well.
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
                          <a href="https://www.getmyuni.com/articles/nirf-ranking-engineering-colleges">
                            NIRF Ranking 2022: Best Engineering Colleges in
                            India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/private-engineering-colleges-with-best-placements">
                            Private Engineering Colleges With Best Placements
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>IIT Engineering Courses</strong>
                </h3>
                <p>
                  Studying engineering at IIT is every aspirants dream. There
                  are many engineering streams that students can study at IITs
                  in India. Given below are the top courses that the students
                  can enrol into:
                </p>
                <div className="table-responsive">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "99%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      height: "134.325px",
                    }}
                    border={1}
                  >
                    <tbody>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "55.332%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Course Name</strong>
                        </td>
                        <td
                          style={{
                            width: "21.1369%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Duration</strong>
                        </td>
                        <td
                          style={{
                            width: "23.5066%",
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
                            width: "55.332%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          B.Tech Computer Science Engineering&nbsp;
                        </td>
                        <td
                          style={{
                            width: "21.1369%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          4 Years
                        </td>
                        <td
                          style={{
                            width: "23.5066%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          1 Lakhs
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "55.332%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          B.Tech Software Engineering&nbsp;
                        </td>
                        <td
                          style={{
                            width: "21.1369%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          4 Years
                        </td>
                        <td
                          style={{
                            width: "23.5066%",
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
                            width: "55.332%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          B.Tech Civil Engineering
                        </td>
                        <td
                          style={{
                            width: "21.1369%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          4 Years
                        </td>
                        <td
                          style={{
                            width: "23.5066%",
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
                            width: "55.332%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          M.Tech CSE
                        </td>
                        <td
                          style={{
                            width: "21.1369%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2 Years
                        </td>
                        <td
                          style={{
                            width: "23.5066%",
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
                            width: "55.332%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          M.Tech Software Engineering&nbsp;
                        </td>
                        <td
                          style={{
                            width: "21.1369%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2 Years
                        </td>
                        <td
                          style={{
                            width: "23.5066%",
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
                <p>
                  When deciding what college to get admission to, it is
                  recommended to the students that they research the admission
                  process and the requirements. This will ensure that they are
                  able to get admission to the top colleges in India.
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
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/tier-1-engineering-colleges-in-india">
                            Tier 1 Engineering Colleges in India 2022
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/ranking-of-engineering-colleges-in-india">
                            Ranking of Engineering Colleges in India 2022
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_95012616128601664866914368">
                  <strong>
                    Engineering Courses Job Opportunities and Salaries
                  </strong>
                </h2>
                <p>
                  Students who enrol in engineering programmes in India are
                  exposed to a wide variety of career options. They work in
                  the private sector as well as the public sector. The demands
                  of the industry are taken into consideration when creating
                  the curriculum. The following popular job roles are listed
                  along with their typical salaries:
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
                          Site Manager
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
                          Civil Engineering
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          3.5 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Software Developer
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
                          Electrical Engineer
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          4.5 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Telecommunications Engineer
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          5 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          Structural Engineer
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          8 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  The engineering career salary and remuneration are dependent
                  solely on the skills of a professional and their rank. Skill
                  gaps should be bridged to make new graduates of engineering
                  aware of the latest tools and technologies used in the
                  industry.
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
                          <a href="https://www.getmyuni.com/btech-jobs-scope-salary">
                            B.Tech Jobs and Salary
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/mtech-jobs-scope-salary">
                            M.Tech Jobs and Salary
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_1620171930431664866920240">
                  <strong>Scope of Engineering Course in India</strong>
                </h2>
                <p>
                  For the majority of developing nations around the world,
                  engineering is essential to daily operations. Students who
                  choose to major in engineering need not be concerned about
                  the courses breadth and depth because they will constantly
                  be exposed to a variety of career options.
                </p>
                <p>
                  Graduates with engineering degrees are highly sought after
                  by graduate employers and graduate training programmes
                  because they have a broad understanding of mechanics,
                  structure, design, and implementation in addition to a
                  variety of practical skills and work experience.
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
                          <a href="https://www.getmyuni.com/btech-jobs-scope-salary">
                            B.Tech Scope in India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/mtech-jobs-scope-salary">
                            M.Tech Scope in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_75279750932251664866926998">
                  <strong>Top Recruiters</strong>
                </h2>
                <p>
                  Engineering courses in India provide students with ample job
                  opportunities with a very bright future. Listed below are
                  some of the top recruiters in India.
                </p>
                <ul>
                  <li>Government of India</li>
                  <li>TATA consultancy services</li>
                  <li>Godrej&nbsp;</li>
                  <li>Flipkart</li>
                  <li>IBM</li>
                  <li>Indigo</li>
                  <li>Amazon</li>
                  <li>Microsoft</li>
                  <li>ISRO</li>
                  <li>NASA</li>
                  <li>Space X</li>
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
              M.Tech Process Engineering
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
              <small className="text-muted">💰Avarage fees: 40,000 - 2.5 LPA</small>
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
              BE [Bachelor of Engineering]
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
              <small className="text-muted">💰Avarage fees: 25,000 - 3 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              B.Tech + MBA
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
              <small className="text-muted">💰Avarage fees: 10 - 20 LPA</small>
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
              B.Tech + M.Tech
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
              <small className="text-muted">💰Avarage fees: 75,000 - 5 LPA
</small>
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
              ME [Master of Engineering]
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
              <small className="text-muted">💰Avarage fees: 40,000 - 2.5 LPA</small>
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
              B.Tech Food Science and Technology
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
              <small className="text-muted">💰Avarage fees: 60000 to 3.5 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
             B.Tech [Bachelor of Technology]
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
              <small className="text-muted">💰Avarage fees: 55,000 - 4.9 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              M.Tech [Master of Technology]
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
              <small className="text-muted">💰Avarage fees: 50,000 - 4 LPA</small>
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
              BE Instrumentation Engineering
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
              <small className="text-muted">💰Avarage fees: 50,000 - 5 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              Distance B.Tech
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
              <small className="text-muted">💰Avarage fees: 12,500 - 1.5 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              BE Aeronautical Engineering
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
              <small className="text-muted">💰Avarage fees: 25,000 - 2 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              BE Automobile Engineering
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
              <small className="text-muted">💰Avarage fees: 20,000 - 4 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              BE Biomedical Engineering
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
              <small className="text-muted">💰Avarage fees: 60,000 - 3 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              BE Biotechnology
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
              <small className="text-muted">💰Avarage fees: 25K - 1.5 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              BE Chemical Engineering
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
              <small className="text-muted">💰Avarage fees: 4 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              BE Civil Engineering
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
              <small className="text-muted">💰Avarage fees: 1 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              BE Computer Engineering
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
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              BE Computer Science
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
              <small className="text-muted">💰Avarage fees: 25K - 5 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              BE Computer Science and Engineering
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
              <small className="text-muted">💰Avarage fees: 25,000 - 5 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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
              BE Electrical and Electronics Engineering
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
              <small className="text-muted">💰Avarage fees: 25,000 - 2 LPA</small>
            </p>
            <p className="card-text">
              <small className="text-muted">⌛Duration: 4 Years</small>
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

export default Engineerings;
