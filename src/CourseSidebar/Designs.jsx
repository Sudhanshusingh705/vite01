import { useState } from "react";
import "./Designs.css";
import "../components/TopcourseSidebar/CourseSidebar.css";
const Designs = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
    <h2
      style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
    >
      Top Design Course in India 2023
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
            <h1>Design Full Course </h1>
            <h2>
              Design Full Course 2023 National, State &amp; University Level
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
                  There are many Designing courses in India that students can
                  pursue. These Design degree courses deal with concepts
                  related to aesthetics, fine arts, history of design and
                  advertising. All Designing courses are typically
                  job-oriented courses that are offered at Undergraduate,
                  Postgraduate and Doctorate levels. In addition to this,
                  there are numerous diploma courses and online certificates
                  in India to train students in specific skills they need.
                </p>
                <p>
                  Students can pursue Design courses with placement through
                  various streams that are available in India such as Computer
                  Design courses, Electrical Design Courses, VLSI Design
                  courses, Industrial Design courses, CAD Design Courses, and
                  Dress Designing courses. During the Designing course
                  duration, students learn about typography, branding,
                  aesthetics, fashion design, trends and design
                  software.&nbsp;
                </p>
                <p>
                  <strong>Table Of Contents:</strong>
                </p>
                <ul>
                  <li>
                    <a href="#courses-list">Courses List</a>
                  </li>
                  <li>
                    <a href="#eligibility-for-design-courses">
                      Eligibility for Design Courses
                    </a>
                  </li>
                  <li>
                    <a href="#admission">Admission</a>
                  </li>
                  <li>
                    <a href="#entrance-exams">Entrance Exams</a>
                  </li>
                  <li>
                    <a href="#types-of-design-courses">
                      Types of Design Courses
                    </a>
                  </li>
                  <li>
                    <a href="#top-10-design-courses-in-demand">
                      Top 10 Design Courses in Demand
                    </a>
                  </li>
                  <li>
                    <a href="#syllabus-and-subjects">Syllabus and Subjects</a>
                  </li>
                  <li>
                    <a href="#top-design-colleges-in-india">
                      Top 10 Design Colleges in India
                    </a>
                  </li>
                  <li>
                    <a href="#jobs-and-salaries">Jobs and Salaries</a>
                  </li>
                  <li>
                    <a href="#scope-of-design-course-in-india">
                      Scope of Design Course in India
                    </a>
                  </li>
                  <li>
                    <a href="#top-recruiters">Top Recruiters</a>
                  </li>
                  <li>
                    <a href="#skills-required-in-design-courses">
                      Skills Required
                    </a>
                  </li>
                </ul>
                <h2 id="courses-list">
                  <strong>Design Courses List</strong>
                </h2>
                <p>
                  The Designing course details can be accessed by the students
                  by visiting the college’s official websites and researching
                  about the specific course. Students can apply for Design
                  courses after 10th and 12th, under graduation or
                  post-graduation based on the Design course qualification
                  they are applying for.
                </p>
                <p>
                  Given below are different types of Design courses that the
                  students can pursue:
                </p>
                <ul>
                  <li>
                    <a href="#undergraduate-design-courses">
                      Undergraduate Courses
                    </a>
                  </li>
                  <li>
                    <a href="#postgraduate-design-courses">
                      Postgraduate Courses
                    </a>
                  </li>
                  <li>
                    <a href="#diploma/pg-diploma-design-courses">
                      Diploma/PG Diploma Courses
                    </a>
                  </li>
                  <li>
                    <a href="#certificate-design-courses">
                      Certificate Courses
                    </a>
                  </li>
                  <li>
                    <a href="#doctorate-design-courses">Doctorate Courses</a>
                  </li>
                </ul>
                <h3 id="undergraduate-design-courses">
                  <strong>Undergraduate Design Courses</strong>
                </h3>
                <p>
                  There are many different types of design courses in India
                  that can be pursued by students. Undergraduate courses are
                  designing courses after 12th that introduce students to the
                  basic but essential principles of design. The undergraduate
                  courses tend to be around 4 years long and are design
                  courses with a placement year. These types of designing
                  courses in India are provided to students in a wide range of
                  specialisations and topics such as Website Design Courses,{" "}
                  <a href="https://www.getmyuni.com/articles/automobile-designing-courses">
                    Automobile Design Courses
                  </a>
                  , Instructional Design Courses, and Car Design Courses.
                </p>
                <p>Some of the Design courses after 12th include:</p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bdes-course">B.Des</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/fashion-design-course">
                      B.Des in Fashion Design
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bdes-interior-design-course">
                      B.Des in Interior Design
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>B.Des in Graphic Design</li>
                  <li style={{ fontWeight: 400 }}>B.Des in Animation</li>
                  <li style={{ fontWeight: 400 }}>
                    B.Des in Industrial Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    B.Des in Jewellery and Accessory Design
                  </li>
                  <li style={{ fontWeight: 400 }}>B.Des in Textile Design</li>
                  <li style={{ fontWeight: 400 }}>
                    B.Des in Ceramic and Glass Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    B.Des in Fashion Communication
                  </li>
                </ul>
                <h3 id="postgraduate-design-courses">
                  <strong>Postgraduate Design Courses</strong>
                </h3>
                <p>
                  Along with the undergraduate Designing courses list, there
                  are many postgraduate courses that can be undertaken by the
                  students. These designing courses after graduation aim to
                  provide the students with an in-depth understanding and
                  analysis of the specialisations that they pursue at the
                  undergraduate level. Most master’s courses tend to be of two
                  years duration/
                </p>
                <p>
                  Given below are some of the popular postgraduate Designing
                  courses list that the students can enrol in:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/mdes-course">M.Des</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    M.Des in Fashion Designing
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    M.Des in Graphic Designing
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    M.Des in Interior and Furniture Design
                  </li>
                  <li style={{ fontWeight: 400 }}>M.Des in Animation</li>
                  <li style={{ fontWeight: 400 }}>
                    M.Des in Industrial Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    M.Des in Jewellery and Accessory Design
                  </li>
                  <li style={{ fontWeight: 400 }}>M.Des in Textile Design</li>
                  <li style={{ fontWeight: 400 }}>
                    M.Des in Ceramic and Glass Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    M.Des in Fashion Communication
                  </li>
                </ul>
                <h3 id="diploma/pg-diploma-design-courses">
                  <strong>Diploma/PG Diploma Design Courses</strong>
                </h3>
                <p>
                  Many students may opt to apply for diploma courses over an
                  undergraduate or postgraduate course, as diploma courses are
                  short, quick and money-saving courses. There are plenty of
                  Diploma Design courses that can be accessed by the students
                  that aim to help students learn about topics in great
                  detail.
                </p>
                <p>
                  Some of the best diploma Design courses, universities in
                  India provided are listed below:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>Diploma in Design</li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/diploma-in-interior-design-course">
                      Diploma in Interior Design
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/diploma-in-fashion-design-course">
                      Diploma in Fashion Design
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/diploma-in-graphic-design-course">
                      Diploma in Graphic Design
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Diploma in Jewellery Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Diploma in Animation and Multimedia
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Advanced Diploma in Fashion Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Advanced Diploma in Interior Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/pg-diploma-fashion-designing-course">
                      PG Diploma in Fashion Designing
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    PG Diploma in Interior Designing
                  </li>
                </ul>
                <h3 id="certificate-design-courses">
                  <strong>Certificate Design Courses</strong>
                </h3>
                <p>
                  There are many Design certificate courses that the students
                  can enrol in. The primary purpose of a certificate course is
                  to help the students gain in-depth knowledge in a
                  specialised field in a short period of time. The certificate
                  courses are often provided by industry-relevant employers or
                  educational institutions. Given below are some of the top
                  certificate courses in Design that the students can take:
                </p>
                <p>
                  <strong>Offline Design Courses:</strong>
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Graphic Design Workshop
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Computer Aided Jewellery Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Computer Aided Graphic Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Computer Aided Fashion Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Fashion Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Jewellery Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Interior Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Furniture Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Product Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Set Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Fashion Styling and Draping
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Professional Certificate in Fashion Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Professional Certificate in Advertising and Graphics
                  </li>
                </ul>
                <p>
                  <strong>Online Design Course:</strong>
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    Graphic Design Certification
                  </li>
                  <li style={{ fontWeight: 400 }}>Interaction Design</li>
                  <li style={{ fontWeight: 400 }}>UI/UX Design</li>
                  <li style={{ fontWeight: 400 }}>Intro to Cinema 4D</li>
                  <li style={{ fontWeight: 400 }}>
                    Visual and Graphic Design
                  </li>
                  <li style={{ fontWeight: 400 }}>Web Design Course</li>
                  <li style={{ fontWeight: 400 }}>Graphic Design Bootcamp</li>
                  <li style={{ fontWeight: 400 }}>UX and Web Design</li>
                  <li style={{ fontWeight: 400 }}>Illustrator CC</li>
                  <li style={{ fontWeight: 400 }}>Design Fundamentals</li>
                </ul>
                <h3 id="doctorate-design-courses">
                  <strong>Doctorate Design Courses</strong>
                </h3>
                <p>
                  When pursuing design courses, students also have the scope
                  to apply for doctorate courses. Doctorate courses are
                  courses that the students can apply for after graduation.
                  These are advanced research-oriented courses. The doctorate
                  courses give the students a chance to learn about topics in
                  great detail and learn about different research methods and
                  techniques. By utilising all the research methodologies,
                  students can further develop their own research skills on a
                  specific topic.&nbsp;
                </p>
                <p>
                  <strong>PhD in Design: </strong>A PhD in Design combines
                  creativity with practical skills to form a versatile degree
                  program. The specific areas you study will depend on which
                  fields and disciplines are related to your personal goals.
                  It is possible to study everything from painting or lighting
                  to animation or graphic design.
                </p>
                <h2 id="eligibility-for-design-courses">
                  <strong>Eligibility for Design Courses</strong>
                </h2>
                <p>
                  Admission in Designing courses depends on the type of course
                  that the students are applying for.
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    The eligibility for undergraduate courses is that the
                    students should ensure that they obtain a minimum of 50%
                    in their 10+2 from a recognised board.&nbsp;
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    For the Postgraduate courses, it is vital that the
                    students receive a minimum of 60% in their Undergraduate
                    degree.&nbsp;
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    For the Doctorate courses, it is vital that the students
                    receive a minimum of 60% in their postgraduate
                    degree.&nbsp;
                  </li>
                </ul>
                <p>
                  Hence it is vital that the students research about the
                  Designing course eligibility when applying for the course of
                  their choice. Integrated Design courses may have slightly
                  more relaxed eligibility than others.
                </p>
                <h2 id="admission">
                  <strong>Design Courses Admission</strong>
                </h2>
                <p>
                  For admission to a Design course in India, students need to
                  research both the merit-based selection process and the
                  entrance requirements. Many institutes in India conduct
                  entrance exams to select their final list of students. The
                  students can avail themselves of admissions through both
                  online and offline methods.
                </p>
                <p>
                  For the online method, students must enquire at the official
                  website of the colleges they are applying to. For offline
                  means, they would be required to visit the colleges
                  admission office in person.
                </p>
                <h2 id="entrance-exams">
                  <strong>Design Courses Entrance Exams</strong>
                </h2>
                <p>
                  Entrance exams play an important role for the students when
                  applying for Design courses in India. Entrance exams are a
                  means for colleges to select the best candidates for their
                  courses. These entrance exams can be conducted at a national
                  level, state level or college level.&nbsp;
                </p>
                <p>
                  Given below are some of the top exams that are conducted for
                  admissions to the different Design colleges in India:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/nift">NIFT</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/uceed">UCEED</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/ceed">CEED</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/nid">NID DAT</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/seed">SEED</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/aieed">AIEED</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/pearl-academy-entrance-exam">
                      PAF
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>FDDI AIST</li>
                  <li style={{ fontWeight: 400 }}>IIAD</li>
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
                          <a href="https://www.getmyuni.com/exams/design-exams-in-india">
                            Design Exams in India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/best-books-to-study-for-design-entrance-exams">
                            Best Books to Study for Design Entrance Exams
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="types-of-design-courses">
                  <strong>Types of Design Courses (Specialisations)</strong>
                </h2>
                <p>
                  Design is a broad and diverse subject of study, and hence
                  the students have the scope to study a wide range of topics
                  in it. Jewellery Design Courses, Game Design Courses,
                  Product Design Courses, Textile Design Courses, and System
                  Design courses are a few of the many specialisations that
                  can be pursued by the students under design.
                </p>
                <p>
                  These broad topics are further divided into several
                  branches, which are then divided into disciplines that the
                  students can study. Below are some of the popular fields
                  under Design that can help students decide what they want to
                  pursue in their careers.
                </p>
                <h3>
                  <strong>Fashion Design</strong>
                </h3>
                <p>
                  Fashion Designing is one of the most popular Design
                  specialisations among students. Every year thousands of
                  candidates apply at different Fashion Design colleges across
                  the country with an aspiration to become a successful
                  fashion designers in the future.
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
                          <strong>Average Fees (INR)</strong>
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
                          <a href="https://www.getmyuni.com/fashion-design-course">
                            BDes in Fashion Design
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
                          4 Years
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
                          <a href="https://www.getmyuni.com/ba-fashion-design-course">
                            BA Fashion Design
                          </a>
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
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/mfm-course">
                            MFM
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
                          <a href="https://www.getmyuni.com/bftech-course">
                            BFTech
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
                          4 Years
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
                          <a href="https://www.getmyuni.com/bsc-fashion-design-course">
                            BSc Fashion Design
                          </a>
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
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          MDes Fashion Design
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
                          MFTech
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
                          MA Fashion Design
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
                    </tbody>
                  </table>
                </div>
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
                          <a href="https://www.getmyuni.com/articles/fashion-designing-courses-after-12th">
                            Fashion Designing Courses after 12th
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/entrance-exam-for-fashion-designing-after-12th">
                            Fashion Designing Entrance Exam After 12th
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>Graphic Design</strong>
                </h3>
                <p>
                  Graphic design is a craft where professionals create visual
                  content to communicate messages. By applying visual
                  hierarchy and page layout techniques, designers use
                  typography and pictures to meet users specific needs and
                  focus on the logic of displaying elements in interactive
                  designs, to optimise the user experience.
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
                          <strong>Average Fees (INR)</strong>
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
                          <a href="https://www.getmyuni.com/diploma-in-graphic-design-course">
                            Diploma in Graphic Design
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          15,000
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
                          BDes in Graphic Design
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
                          4 Years
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
                          BA in Graphic Design
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
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          MDes in Graphic Design
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
                          MA in Graphic Design
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
                          BSc in Graphic Design
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
                          <a href="https://www.getmyuni.com/diploma-in-graphic-design-syllabus-subjects">
                            Diploma in Graphic Design Syllabus and Subjects
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/diploma-in-graphic-design-jobs-scope-salary">
                            Diploma in Graphic Design Salary, Jobs, Scope in
                            India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>Interior Design</strong>
                </h3>
                <p>
                  Interior designing deals with making interior spaces more
                  attractive and smart with structure, colour schemes,
                  furnishings, and decorations. Through the courses, students
                  are taught all techniques and materialistic knowledge of
                  interior design.
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
                          <strong>Average Fees (INR)</strong>
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
                          <a href="https://www.getmyuni.com/bdes-interior-design-course">
                            BDes in Interior Design
                          </a>
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          2 Lakhs
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          4 Years
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/bsc-interior-design-course">
                            BSc in Interior Design
                          </a>
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          50,000
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          3 Years
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/barch-interior-design-course">
                            B.Arch Interior Design
                          </a>
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          15,000&nbsp;
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
                          BA in Interior Design
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          50,000
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          3 Years
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          MDes in Interior Design
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          2 Lakhs
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
                          MA in Interior Design
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          2 Lakhs
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          2 Years
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                          <a href="https://www.getmyuni.com/articles/interior-designing-courses-after-12th">
                            Interior Designing Courses after 12th
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/top-10-interior-design-schools-in-india">
                            Top Interior Design Schools in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>Web Design</strong>
                </h3>
                <p>
                  A Web Designing course belongs to the field of Computer
                  Science and IT. It enables students to learn various
                  techniques, tools and programming languages in order to
                  create and maintain web pages.
                </p>
                <div className="table-responsive">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "99%",
                      height: "111.938px",
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
                          <strong>Average Fees (INR)</strong>
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
                          BDes in Web Design
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
                          4 Years
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
                          Diploma in Web Designing
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          15,000
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
                          MDes in Web Design
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
                          Certificate Course in Web Designing
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          10,000
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          6 Months
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>UI UX Design</strong>
                </h3>
                <p>
                  The UI/UX Design Specialisation brings a design-centric
                  approach to user interface and user experience design and
                  offers practical, skill-based instruction centred around a
                  visual communications perspective, rather than one focused
                  on marketing or programming alone. There is only a
                  certificate course provided in this stream.
                </p>
                <div className="table-responsive">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "99%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      height: "111.938px",
                    }}
                    border={1}
                  >
                    <tbody>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "32.6385%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <strong>Name of Course</strong>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <strong>Average Fees (INR)</strong>
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          <strong>Duration</strong>
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "32.6385%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          BA in UI/UX Design&nbsp;
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          50,000
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          3 Years
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "32.6385%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          Diploma in UI/UX Design course
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          50,000
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          1 Year
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "32.6385%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          PG Diploma in UI/UX Design course
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          2 Lakhs
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          2 Years
                        </td>
                      </tr>
                      <tr style={{ height: "22.3875px" }}>
                        <td
                          style={{
                            width: "32.6385%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          Google Certificate Course in UX Design
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          10,000
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            textAlign: "center",
                            height: "22.3875px",
                          }}
                        >
                          6 Months
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="top-10-design-courses-in-demand">
                  <strong> Top 10 Design Courses in Demand</strong>
                </h2>
                <p>
                  Design courses can be pursued by students at all levels of
                  education. They can decide to pursue it at Diploma,
                  Certificate, Undergraduate or Postgraduate level. Given
                  below are the top ten Design courses that are in demand
                  along with their duration.
                </p>
                <div className="table-responsive">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "99%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      height: "223.875px",
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
                          <a href="https://www.getmyuni.com/bachelor-of-fashion-design-course">
                            Bachelor Of Fashion Design
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
                          <a href="https://www.getmyuni.com/ba-interior-design-course">
                            BA Interior Design
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
                          <a href="https://www.getmyuni.com/diploma-in-graphic-design-course">
                            Diploma in Graphic Design
                          </a>
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
                          <a href="https://www.getmyuni.com/diploma-in-interior-design-course">
                            Diploma in Interior Design
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
                          <a href="https://www.getmyuni.com/ba-fashion-design-course">
                            BA Fashion Design
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
                          BA Visual Communication
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
                          BA Animation
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
                          BDes Graphic Design
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
                          Diploma in Visual Communication
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
                          Google Certificate Course in UX Design
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          6 Months
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="syllabus-and-subjects">
                  <strong> Design Course Syllabus and Subjects</strong>
                </h2>
                <p>
                  The Design course syllabus is designed to ensure that the
                  students gain all the vital knowledge they need to get to
                  build a rewarding career path for themselves. Although the
                  detailed syllabus of every design course will vary a bit as
                  they are of different duration and value, they all contain
                  the important Design course subjects.
                </p>
                <p>
                  The curriculum integrates a variety of management, research
                  and scientific knowledge that will enable the students to
                  learn about concepts in detail. Given below are some of the
                  generic topics that the students may be taught during their
                  Design course education:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>Design Process</li>
                  <li style={{ fontWeight: 400 }}>History of Design</li>
                  <li style={{ fontWeight: 400 }}>Typography</li>
                  <li style={{ fontWeight: 400 }}>
                    Introduction To Image Making
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Introduction To Colour Theory
                  </li>
                  <li style={{ fontWeight: 400 }}>Trend Forecasting</li>
                  <li style={{ fontWeight: 400 }}>
                    Introduction to Fashion Design &amp; Fashion Technology
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Image Layout &amp; Grids
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Visual Communication Theory
                  </li>
                  <li style={{ fontWeight: 400 }}>Print Media and Design</li>
                  <li style={{ fontWeight: 400 }}>Web Design</li>
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
                          <a href="https://www.getmyuni.com/bdes-syllabus-subjects">
                            B.Des Syllabus and Subjects
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/mdes-syllabus-subjects">
                            M.Des Syllabus and Subjects
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="top-design-colleges-in-india">
                  <strong>&nbsp;Top 10 Design Colleges in India</strong>
                </h2>
                <p>
                  Many top colleges such as NID, IIT etc provide design
                  courses in India. Given below are the top colleges along
                  with their Design course fees in India:
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
                          <a href="https://www.getmyuni.com/college/world-university-of-design-wud-sonipat">
                            World University of Design
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2.8 Lakhs
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
                          <a href="https://www.getmyuni.com/college/national-institute-of-design-nid-ahmedabad">
                            NID Ahmedabad
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
                          3
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/national-institute-of-fashion-technology-nift-delhi">
                            NIFT Delhi
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
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
                          <a href="https://www.getmyuni.com/college/srishti-institute-of-art-design-and-technology-siadt-bangalore">
                            Srishti Institute of Art, Design and Technology
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2.8 Lakhs
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
                          <a href="https://www.getmyuni.com/college/indian-institute-of-art-and-design-new-delhi">
                            Indian Institute Of Art and Design
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2.4 Lakhs
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
                          <a href="https://www.getmyuni.com/college/pearl-academy-new-delhi">
                            Pearl Academy
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3.3 Lakhs
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
                          <a href="https://www.getmyuni.com/college/arch-college-of-design-and-business-jaipur">
                            ARCH College of Design and Business
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
                          8
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/raffles-design-international-rdi-mumbai">
                            Raffles Design Institute
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
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
                          MIT School of Art
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3.7 Lakhs
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          10
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          Bombay College of Design
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          2.3 Lakhs
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                          <a href="https://www.getmyuni.com/design-colleges">
                            Top Design Colleges in India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/best-design-colleges-apart-from-nift-nid">
                            Best Design Colleges apart from NIFT &amp; NID
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="jobs-and-salaries">
                  <strong>Design Course Jobs and Salaries</strong>
                </h2>
                <p>
                  The Design course job opportunities in India are very
                  rewarding and promising for the students. There is a high
                  demand for designers in the country and since the education
                  provided to the students is very industry-relevant, the
                  Design course salary is also very attractive for aspiring
                  Designers.
                </p>
                <p>
                  Listed below are some of the popular job roles along with
                  their average salaries:
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
                          <strong>Job Profile</strong>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Average Salary (INR)</strong>
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
                          Graphic Designer
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3.5 LPA
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
                          UI Designer
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3.5 LPA
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
                          Video Editor
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
                          Fashion Designer
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
                          Media Manager
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          8 LPA
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
                          Interior Designer
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2.3 LPA
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
                          Production Assistant
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2.5 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                          <a href="https://www.getmyuni.com/bdes-jobs-scope-salary">
                            B.Des Jobs and Salary
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/mdes-jobs-scope-salary">
                            M.Des Jobs and Salary
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="scope-of-design-course-in-india">
                  <strong>Scope of Design Course in India</strong>
                </h2>
                <p>
                  The Design course scope is very attractive and promising in
                  India. With the growing media industry in India, design
                  students have a number of career options. From graphic
                  designers to UI consultants and the likes of a Media
                  Manager, there are plenty of options to choose from.&nbsp;
                </p>
                <p>
                  Design is a popular career option in India that provides
                  aspirants with the opportunity to work in a wide number of
                  fields including advertising agencies, news channels, print
                  media, and start-ups. Additionally, freelancing is quite
                  popular amongst design students.
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
                          <a href="https://www.getmyuni.com/bdes-jobs-scope-salary">
                            B.Des Scope in India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/mdes-jobs-scope-salary">
                            M.Des Scope in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="top-recruiters">
                  <strong>Top Recruiters</strong>
                </h2>
                <p>
                  Design courses in India provide students with ample job
                  opportunities with a very bright future. Listed below are
                  some of the top recruiters in India.
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>FoxyMoron</li>
                  <li style={{ fontWeight: 400 }}>Dentsu International</li>
                  <li style={{ fontWeight: 400 }}>SocialBeat</li>
                  <li style={{ fontWeight: 400 }}>Ogilvy</li>
                  <li style={{ fontWeight: 400 }}>Edelman</li>
                  <li style={{ fontWeight: 400 }}>NDTV News</li>
                  <li style={{ fontWeight: 400 }}>WION</li>
                  <li style={{ fontWeight: 400 }}>Hindu News</li>
                  <li style={{ fontWeight: 400 }}>Times Of India</li>
                </ul>
                <h2 id="skills-required-in-design-courses">
                  <strong>Skills Required in Design Courses</strong>
                </h2>
                <p>
                  Owing to the relevance of the education, the students have
                  access to all the Skills Required in Design Courses and
                  hence they have a promising scope for themselves.
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>Communication Skills</li>
                  <li style={{ fontWeight: 400 }}>Interpersonal Skills</li>
                  <li style={{ fontWeight: 400 }}>Management Skills</li>
                  <li style={{ fontWeight: 400 }}>Multitasking</li>
                  <li style={{ fontWeight: 400 }}>Patient Counselling</li>
                  <li style={{ fontWeight: 400 }}>Gaining Knowledge</li>
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
      </div>
    </div>
  </div>
  );
};

export default Designs;
