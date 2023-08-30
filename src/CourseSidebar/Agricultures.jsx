import { useState } from "react";
import "../components/TopcourseSidebar/CourseSidebar.css";
import "./Agricultures.css";

const Agricultures = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h2
        style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
      >
        Top Agriculture Courses in India 2023
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
          <div className="col-md-9 container mt-3">
            <div className="pageDescription" style={{ marginBottom: 0 }}>
              {/* ... content ... */}
              <h1>Agriculture Full Course </h1>
              <h2>
                Agriculture Full Course 2023 National, State &amp; University
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
                    An architects profession is dynamic and ever-evolving. In
                    recent years, India has seen a surge in the Architecture
                    courses in India. The growth of the abilities necessary to
                    become an architect is a major focus of Architecture degree
                    courses. The disciplines and topics covered in Architecture
                    course details include the process of building structures,
                    airport terminals, highways, malls, complexes, and other
                    types of civil construction employing a variety of creative
                    concepts and other critical thinking abilities.
                  </p>
                  <p>
                    All Architecture courses are typically job-oriented courses
                    that are offered at Undergraduate, Postgraduate and
                    Doctorate levels. In addition to this, there are numerous
                    diploma courses and online certificates in India to train
                    students in specific skills they need. During the
                    Architecture course duration students can specialise in
                    different fields of architecture such as Naval Architecture
                    Courses, Architectural Journalism Courses, Cloud
                    Architecture Courses, Architectural CAD Courses,
                    Architectural Model Making Course, Architectural
                    Visualisation Course.
                  </p>
                  <p>
                    <strong>Table Of Contents:</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_88212891718001664890731377">
                        Architecture Courses List
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_69379524420291664890735824">
                        Eligibility for Architecture Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_49296093622521664890742093">Admission</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_48272932626171664890753135">Entrance Exams</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_21025994728511664890762546">
                        Types of Architecture Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_58938351232991664890786403">
                        Syllabus and Subjects
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_58364013335181664890793853">
                        Top Architecture Colleges in India
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_67939149037361664890801824">
                        Jobs and Salaries
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_40199530339541664890809495">
                        Scope of Architecture Course in India
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_20463512641861664890816887">Top Recruiters</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_69369968744011664890825845">
                        Skills Required
                      </a>
                    </li>
                  </ul>
                  <h2 id="h_88212891718001664890731377">
                    <strong>Architecture Courses List</strong>
                  </h2>
                  <p>
                    The best architecture courses in India are available at
                    undergraduate, postgraduate and diploma levels. Students
                    must ensure that they research about the kind of courses
                    they are interested in pursuing, to ensure that they get
                    admission to a college of their choice. Students can opt for
                    Architecture courses after 10th through diploma programmes
                    up until doctoral level.
                  </p>
                  <p>
                    Given below are different types of Architecture courses that
                    the students can pursue:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_46022436347551664890858438">
                        Undergraduate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_3765199749681664890864840">
                        Postgraduate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_22588497951801664890869511">
                        Diploma/PG Diploma Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_46318261853911664890875091">
                        Certificate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_74262501556011664890880320">
                        Doctorate Courses
                      </a>
                    </li>
                  </ul>
                  <h3 id="h_46022436347551664890858438">
                    <strong>Undergraduate Architecture Courses</strong>
                  </h3>
                  <p>
                    Aspirants can pursue Architecture courses after 12th by
                    enrolling into undergraduate courses. These UG courses are
                    designed to introduce students to all the vital and key
                    concepts of the field. Undergraduate Architecture degrees
                    are the programs that impart knowledge to the students
                    interested in Architecture from the entry till you get into
                    the professional Architecture field. From planning to
                    construction entire work can be learnt through the
                    Undergraduate programs.
                  </p>
                  <p>Some of the Architecture courses after 12th include:</p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/barch-course">B.Arch</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/barch-interior-design-course">
                        B.Arch Interior Design
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/btech-architecture-engineering-course">
                        B.Tech Architecture Engineering
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/b-planning-course">
                        B.Planning
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      B.E Construction Technology
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      B.Sc Residential Space Design and Management
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      B.Tech Urban and Regional Planning
                    </li>
                  </ul>
                  <h3 id="h_3765199749681664890864840">
                    <strong>Postgraduate Architecture Courses</strong>
                  </h3>
                  <p>
                    For the continuation of Under Graduation students can study
                    the Master’s. It is the advanced level of Architecture that
                    deals with major work of construction. These Architecture PG
                    courses give an in-depth understanding of the
                    specialisations that the students may choose to pursue. This
                    further results in the students getting exposure to many
                    more industry relevant information and career scope.
                  </p>
                  <p>
                    Given below are some of the popular postgraduate
                    Architecture courses list that the students can enrol in:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/march-course">M.Arch</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mplan-course">M.Plan</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      ME Construction Technology
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      M.Sc Residential Space Design and Management
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      M.Tech Urban and Regional Planning
                    </li>
                  </ul>
                  <h3 id="h_22588497951801664890869511">
                    <strong>Diploma / PG Diploma Architecture Courses</strong>
                  </h3>
                  <p>
                    Architecture Diploma courses are one to three year duration
                    programs through which students can study all the basics of
                    major subjects of Architecture. Various specialisations are
                    Architectural Assistantship, Architectural Engineering,
                    Foundation, Construction Management and Construction
                    Technology. These Architecture Diploma courses in India can
                    be pursued at both pre undergraduate and postgraduate
                    levels.
                  </p>
                  <p>
                    Some of the best diploma Architecture courses, university in
                    India provided are listed below:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-architecture-engineering-course">
                        Diploma in Architectural Engineering
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Diploma in Architectural Assistantship
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Diploma in Construction Management
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Diploma in Construction Technology
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Foundation Diploma in Architecture and Design
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Construction Management
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Town Country Planning
                    </li>
                  </ul>
                  <h3 id="h_46318261853911664890875091">
                    <strong>Certificate Architecture Courses</strong>
                  </h3>
                  <p>
                    Certificate courses are the best programs that help students
                    increase their potential and skills within a short period of
                    time. It may be either offline or architecture online
                    courses. Students can choose either a part-time or full-time
                    course. These Architecture Certificate courses help you
                    study and gain knowledge about the basic details regarding
                    Architecture. You can get to know the subjects involved
                    along with the topics and methods.
                  </p>
                  <p>
                    Given below are some of the top certificate courses in
                    Architecture that the students can take:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      Certificate in Architecture
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate in Interior Architecture
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate in Set Architecture
                    </li>
                  </ul>
                  <h3 id="h_74262501556011664890880320">
                    <strong>Doctorate Architecture Courses</strong>
                  </h3>
                  <p>
                    When pursuing Architecture courses, students also have the
                    scope to apply for doctorate courses. Doctorate courses are
                    courses that the students can apply for after graduation.
                    These are advanced research oriented courses. The doctorate
                    courses give the students a chance to learn about topics in
                    a great detail and learn about different research methods
                    and techniques. By utilising all the research methodologies,
                    students can further develop their own research skills on a
                    specific topic. The Doctorate course that the students can
                    apply for is{" "}
                    <a href="https://www.getmyuni.com/phd-architecture-course">
                      PhD in Architecture
                    </a>
                  </p>
                  <p>
                    PhD in Architecture is a three year doctorate program that
                    deals with the research degree and collection,
                    interpretation, and presentation of bibliographic resources
                    and other databases, and specific computer skills.
                  </p>
                  <h2 id="h_69379524420291664890735824">
                    <strong>Eligibility for Architecture Courses</strong>
                  </h2>
                  <p>
                    The architecture courses eligibility depends on the type of
                    the course that the students are applying for. The
                    Architecture course admission criteria requires students to
                    focus on both entrance exams and merit obtained by them at
                    10+2/UG education.
                  </p>
                  <p>
                    Hence it is vital that the students research the
                    Architecture courses eligibility when applying for the
                    course of their choice.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <strong>Undergraduate course</strong>: Some Of the
                      colleges admit the students based on the entrance test
                      while some of the colleges consider the merit scored in
                      the qualifying examination. Candidates having minimum of
                      50% aggregate marks in 10+2 are also admitted in some of
                      the Colleges.
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <strong>Postgraduate course</strong>: Some Of the colleges
                      admit the students based on the entrance test while some
                      of the colleges consider the merit scored in the
                      qualifying examination. Candidates having minimum of 50%
                      aggregate marks in UG are also admitted in some of the
                      Colleges.
                    </li>
                  </ul>
                  <h2 id="h_49296093622521664890742093">
                    <strong>Architecture Courses Admission</strong>
                  </h2>
                  <p>
                    For admission to an Architecture course in India, students
                    need to research both the merit based selection process and
                    the entrance requirements. Many institutes in India conduct
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
                  <h2 id="h_48272932626171664890753135">
                    <strong>Architecture Courses Entrance Exams</strong>
                  </h2>
                  <p>
                    Entrance exams play an important role for the students when
                    applying for Architecture courses in India. Entrance exams
                    are a means for the colleges to select the best candidates
                    for their courses. These Architecture course entrance exams
                    can be conducted at a national level, state level or the
                    college level.&nbsp;
                  </p>
                  <p>
                    Given below are some of the top exams that are conducted for
                    admissions to the different Architecture colleges in India
                    according to their degrees;:
                  </p>
                  <p>
                    <strong>Undergraduate Degree</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/nata">NATA</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/jee-main">
                        JEE MAINS
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/jee-advanced">
                        JEE ADVANCED
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/aat">AAT</a>
                    </li>
                  </ul>
                  <p>
                    <strong>Postgraduate Degree</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/gate-exam">
                        GATE
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ceed">CEED</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/pgcet">
                        Karnataka PGCET
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ts-pgecet">
                        TS PGECET
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/tancet">TANCET</a>
                    </li>
                  </ul>
                  <p>
                    <strong>Diploma Degree</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ap-polycet">
                        AP POLYCET
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ts-polycet">
                        TS POLYCET
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/cet-delhi">
                        DELHI CET
                      </a>
                    </li>
                  </ul>
                  <p>
                    <strong>PhD Degree</strong>
                  </p>
                  <ul>
                    <li>
                      <a href="https://www.getmyuni.com/exams/ugc-net">
                        UGC NET
                      </a>
                    </li>
                    <li>
                      <a href="https://www.getmyuni.com/exams/csir-net">
                        CSIR NET
                      </a>
                    </li>
                    <li>
                      <a href="https://www.getmyuni.com/exams/icmr-jrf">
                        ICMR JRF
                      </a>
                    </li>
                    <li>JNU PhD Entrance</li>
                  </ul>
                  <h2 id="h_21025994728511664890762546">
                    <strong>Types of Architecture Courses (Branches)</strong>
                  </h2>
                  <p>
                    There are many different types of architecture courses that
                    exist for the aspirants to choose from. The stream is a
                    diverse and broad course of study that introduces students
                    to many specialisations that can be pursued by them. These
                    brod topics are further divided into several smaller
                    branches that are finally divided into subcategories or
                    disciplines.
                  </p>
                  <p>
                    Below are some of the popular fields under Architecture that
                    can help students decide what they want to pursue in their
                    careers.
                  </p>
                  <h3>
                    <strong>Architectural Engineering Courses</strong>
                  </h3>
                  <p>
                    Residential architecture, public architecture, commercial
                    architecture, landscape architecture, industrial
                    architecture and interior design are the major branches of
                    architecture that the students are trained into. The scope
                    in this branch of engineering is quite high; plus, the
                    variations in the job profile and the opportunity it
                    presents to visit the sites and travel the world make this
                    course a highly sought after one.&nbsp;
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.6307%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "55.3829%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "16.3809%" }}>
                            <p>Duration</p>
                          </td>
                          <td style={{ width: "28.2765%" }}>
                            <p>Average Fees (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "55.3829%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/btech-architecture-engineering-course">
                                B.Tech in Architecture Engineering
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.3809%" }}>
                            <p>4 Years</p>
                          </td>
                          <td style={{ width: "28.2765%" }}>
                            <p>2 - 4 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "55.3829%" }}>
                            <p>M.Tech in Architecture Engineering</p>
                          </td>
                          <td style={{ width: "16.3809%" }}>
                            <p>2 Years</p>
                          </td>
                          <td style={{ width: "28.2765%" }}>
                            <p>2 - 3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "55.3829%" }}>
                            <p>B.Sc. in Architectural Engineering</p>
                          </td>
                          <td style={{ width: "16.3809%" }}>
                            <p>4 Years</p>
                          </td>
                          <td style={{ width: "28.2765%" }}>
                            <p>50,000 - 6 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "55.3829%" }}>
                            <p>ME in Architecture Engineering</p>
                          </td>
                          <td style={{ width: "16.3809%" }}>
                            <p>2 Years</p>
                          </td>
                          <td style={{ width: "28.2765%" }}>
                            <p>3 - 6 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "55.3829%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/diploma-in-architecture-engineering-course">
                                Diploma in Architectural Engineering
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "16.3809%" }}>
                            <p>3 Years</p>
                          </td>
                          <td style={{ width: "28.2765%" }}>
                            <p>50,000 - 2 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "55.3829%" }}>
                            <p>Bachelor in Architectural Engineering</p>
                          </td>
                          <td style={{ width: "16.3809%" }}>
                            <p>4 Years</p>
                          </td>
                          <td style={{ width: "28.2765%" }}>
                            <p>53,797 to 6.4 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "55.3829%" }}>
                            <p>M.Sc. Architectural Engineering</p>
                          </td>
                          <td style={{ width: "16.3809%" }}>
                            <p>2 Years</p>
                          </td>
                          <td style={{ width: "28.2765%" }}>
                            <p>2 - 3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "55.3829%" }}>
                            <p>PhD in Architectural Engineering</p>
                          </td>
                          <td style={{ width: "16.3809%" }}>
                            <p>3 - 5&nbsp; Years</p>
                          </td>
                          <td style={{ width: "28.2765%" }}>
                            <p>55,000 - 2 LPA</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>Architecture Design Courses</strong>
                  </h3>
                  <p>
                    In this course an architecture major studies the history and
                    theory of design while getting practical experience in
                    creating layouts for buildings.
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.5829%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "59.3032%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "14.9844%" }}>
                            <p>Duration</p>
                          </td>
                          <td style={{ width: "25.6736%" }}>
                            <p>Average Fees (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "59.3032%" }}>
                            <p>Diploma in Interior Architecture and Design</p>
                          </td>
                          <td style={{ width: "14.9844%" }}>
                            <p>1 - 2 Years</p>
                          </td>
                          <td style={{ width: "25.6736%" }}>
                            <p>1 - 2 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "59.3032%" }}>
                            <p>Ph.D. in Architecture, Design, and Planning</p>
                          </td>
                          <td style={{ width: "14.9844%" }}>
                            <p>3 - 5&nbsp; Years</p>
                          </td>
                          <td style={{ width: "25.6736%" }}>
                            <p>55,000 - 2 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "59.3032%" }}>
                            <p>B.Arch in Architecture and Design</p>
                          </td>
                          <td style={{ width: "14.9844%" }}>
                            <p>5 Years</p>
                          </td>
                          <td style={{ width: "25.6736%" }}>
                            <p>2 - 7 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "59.3032%" }}>
                            <p>D.S.A.D Certificate Program</p>
                          </td>
                          <td style={{ width: "14.9844%" }}>
                            <p>6 months&nbsp;</p>
                          </td>
                          <td style={{ width: "25.6736%" }}>
                            <p>55,000 PA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "59.3032%" }}>
                            <p>Masters in Urban Designing</p>
                          </td>
                          <td style={{ width: "14.9844%" }}>
                            <p>2 Years</p>
                          </td>
                          <td style={{ width: "25.6736%" }}>
                            <p>55,000 - 2 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "59.3032%" }}>
                            <p>Diploma in Building Design</p>
                          </td>
                          <td style={{ width: "14.9844%" }}>
                            <p>1 - 2 Years</p>
                          </td>
                          <td style={{ width: "25.6736%" }}>
                            <p>1 - 2 LPA</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>Interior Architecture Courses</strong>
                  </h3>
                  <p>
                    An interior architecture course is a hybrid field of study,
                    bringing interior design and architecture together in a
                    single discipline. It takes a good knowledge of building
                    regulations, and an understanding of the structure of
                    buildings, in order to make projects safe, habitable, and
                    functional.
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.6307%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "51.4922%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "17.8647%" }}>
                            <p>Duration</p>
                          </td>
                          <td style={{ width: "30.6852%" }}>
                            <p>Average Fees (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "51.4922%" }}>
                            <p>B.Arch in Interior Architecture</p>
                          </td>
                          <td style={{ width: "17.8647%" }}>
                            <p>5 Years</p>
                          </td>
                          <td style={{ width: "30.6852%" }}>
                            <p>25000 - 1.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "51.4922%" }}>
                            <p>Diploma in Interior Architecture</p>
                          </td>
                          <td style={{ width: "17.8647%" }}>
                            <p>1 - 2 Years</p>
                          </td>
                          <td style={{ width: "30.6852%" }}>
                            <p>1 - 2 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "51.4922%" }}>
                            <p>M.Arch in Interior Architecture</p>
                          </td>
                          <td style={{ width: "17.8647%" }}>
                            <p>2 Years</p>
                          </td>
                          <td style={{ width: "30.6852%" }}>
                            <p>2.8 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "51.4922%" }}>
                            <p>Ph.D in Interior Architecture</p>
                          </td>
                          <td style={{ width: "17.8647%" }}>
                            <p>3 - 5&nbsp; Years</p>
                          </td>
                          <td style={{ width: "30.6852%" }}>
                            <p>55,000 - 2 LPA</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>Landscape Architecture Courses</strong>
                  </h3>
                  <p>
                    Landscape Architecture is a field of study which involves
                    the designing, planning and managing of the public areas,
                    landmarks and parks in our environment. It is one of the
                    sub-branches of architecture.&nbsp;
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.6786%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "51.339%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "17.5518%" }}>
                            <p>Duration</p>
                          </td>
                          <td style={{ width: "31.1544%" }}>
                            <p>Average Fees (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "51.339%" }}>
                            <p>B.Arch Landscape Architecture</p>
                          </td>
                          <td style={{ width: "17.5518%" }}>
                            <p>3 Years</p>
                          </td>
                          <td style={{ width: "31.1544%" }}>
                            <p>1- 10 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "51.339%" }}>
                            <p>M.Arch Landscape Architecture</p>
                          </td>
                          <td style={{ width: "17.5518%" }}>
                            <p>2 Years</p>
                          </td>
                          <td style={{ width: "31.1544%" }}>
                            <p>50,000 -2 LPA</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>Software Architecture Courses</strong>
                  </h3>
                  <p>
                    Software Architecture and Design teaches the principles and
                    concepts involved in the analysis and design of large
                    software systems.
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.6786%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "55.6254%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "22.1255%" }}>
                            <p>Duration</p>
                          </td>
                          <td style={{ width: "22.2813%" }}>
                            <p>Average Fees (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "55.6254%" }}>
                            <p>Diploma In Software Architecture Course</p>
                          </td>
                          <td style={{ width: "22.1255%" }}>
                            <p>6 months to 1 year</p>
                          </td>
                          <td style={{ width: "22.2813%" }}>
                            <p>20,000 - 50,000 PA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "55.6254%" }}>
                            <p>
                              Certificate in Software Architecture By Coursera
                            </p>
                          </td>
                          <td style={{ width: "22.1255%" }}>
                            <p>6 months</p>
                          </td>
                          <td style={{ width: "22.2813%" }}>
                            <p>80,000</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2>
                    <strong>Architecture Online Courses</strong>
                  </h2>
                  <p>
                    Various popular websites offer architecture online courses
                    with a certificate. Some of the courses are as follows:
                  </p>
                  <h3>
                    <strong>Udemy</strong>
                  </h3>
                  <div className="table-responsive">
                    <table style={{ width: "98.4393%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "86.1796%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "13.8563%" }}>
                            <p>Duration</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.1796%" }}>
                            <p>
                              Udemy Architectural Post Production in Photoshop
                              by DATEC studios
                            </p>
                          </td>
                          <td style={{ width: "13.8563%" }}>
                            <p>11 hours</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.1796%" }}>
                            <p>Architectural design and fundamentals</p>
                          </td>
                          <td style={{ width: "13.8563%" }}>
                            <p>2 hours</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.1796%" }}>
                            <p>Architecture 101 using AutoCAD LT</p>
                          </td>
                          <td style={{ width: "13.8563%" }}>
                            <p>32 minutes</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.1796%" }}>
                            <p>
                              Architectural Post-Process (Beginner to Advanced)
                            </p>
                          </td>
                          <td style={{ width: "13.8563%" }}>
                            <p>2.5 hours</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.1796%" }}>
                            <p>Grasshopper: Beginner to Advanced</p>
                          </td>
                          <td style={{ width: "13.8563%" }}>
                            <p>9 hours</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>EdX</strong>
                  </h3>
                  <div className="table-responsive">
                    <table style={{ width: "98.535%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "86.3698%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "13.5917%" }}>
                            <p>Duration</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.3698%" }}>
                            <p>
                              edX The Architectural Imagination by Harvard
                              University
                            </p>
                          </td>
                          <td style={{ width: "13.5917%" }}>
                            <p>10 weeks</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.3698%" }}>
                            <p>3D Modelling from Architecture Drawings</p>
                          </td>
                          <td style={{ width: "13.5917%" }}>
                            <p>4 weeks</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.3698%" }}>
                            <p>Realistic Architectural 3D Modelling</p>
                          </td>
                          <td style={{ width: "13.5917%" }}>
                            <p>4 weeks</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.3698%" }}>
                            <p>Ecodesign for cities and suburbs by UBC</p>
                          </td>
                          <td style={{ width: "13.5917%" }}>
                            <p>6 week</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.3698%" }}>
                            <p>
                              Data Science for Construction, Architecture and
                              Engineering by NTU
                            </p>
                          </td>
                          <td style={{ width: "13.5917%" }}>
                            <p>7 weeks</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "86.3698%" }}>
                            <p>Sustainability in Architecture</p>
                          </td>
                          <td style={{ width: "13.5917%" }}>
                            <p>4 weeks</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>Coursera</strong>
                  </h3>
                  <div className="table-responsive">
                    <table style={{ width: "98.3915%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "88.2891%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "11.7414%" }}>
                            <p>Duration</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "88.2891%" }}>
                            <p>Making Architecture by IE Business School</p>
                          </td>
                          <td style={{ width: "11.7414%" }}>
                            <p>4 weeks</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "88.2891%" }}>
                            <p>Roman Architecture by Yale University</p>
                          </td>
                          <td style={{ width: "11.7414%" }}>
                            <p>9 weeks</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "88.2891%" }}>
                            <p>
                              Autodesk Certified Professional: Revit for
                              Architectural design Exam by Autodesk
                            </p>
                          </td>
                          <td style={{ width: "11.7414%" }}>
                            <p>2 weeks</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "88.2891%" }}>
                            <p>
                              Software Design &amp; Architecture by Yale
                              University
                            </p>
                          </td>
                          <td style={{ width: "11.7414%" }}>
                            <p>8 weeks</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "88.2891%" }}>
                            <p>Archaeoastronomy by Politecnico di Milano</p>
                          </td>
                          <td style={{ width: "11.7414%" }}>
                            <p>1 week</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "88.2891%" }}>
                            <p>
                              Beauty, Form &amp; Function: An Exploration of
                              Symmetry by NTU
                            </p>
                          </td>
                          <td style={{ width: "11.7414%" }}>
                            <p>1 week</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>LinkedIn Learning</strong>
                  </h3>
                  <div className="table-responsive">
                    <table style={{ width: "98.4872%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "75.6176%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "24.3928%" }}>
                            <p>Duration</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "75.6176%" }}>
                            <p>LinkedIn Archicad 24 Essential Training</p>
                          </td>
                          <td style={{ width: "24.3928%" }}>
                            <p>9 hours 11 minutes</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "75.6176%" }}>
                            <p>Software Architecture Foundation</p>
                          </td>
                          <td style={{ width: "24.3928%" }}>
                            <p>1 hour 35 minutes</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "75.6176%" }}>
                            <p>React: Software Architecture</p>
                          </td>
                          <td style={{ width: "24.3928%" }}>
                            <p>2 hours 40 minutes</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "75.6176%" }}>
                            <p>Understanding Architectural Design Process</p>
                          </td>
                          <td style={{ width: "24.3928%" }}>
                            <p>1 hour</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "75.6176%" }}>
                            <p>
                              Residential Design and Visualisation: Concept
                              Development
                            </p>
                          </td>
                          <td style={{ width: "24.3928%" }}>
                            <p>2 hours 40 minutes</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_58938351232991664890786403">
                    <strong>Architecture Course Syllabus and Subjects</strong>
                  </h2>
                  <p>
                    The Architecture course syllabus is designed to ensure that
                    the students gain all the vital knowledge they need to get
                    to build a rewarding career path for themselves.
                    Architecture course subjects blend the elements of science,
                    art, and technology and requires the students to develop
                    interdisciplinary skill sets comprising engineering
                    knowledge, passion for modern technologies, creativity, and
                    an understanding of social and environmental issues,
                    tradition and cultural trends.&nbsp;
                  </p>
                  <p>
                    Architecture course is the art and science of planning,
                    designing, and engineering large structures and buildings
                    aimed at optimum utilisation of space. Students should
                    invest in Architecture course books to enhance their
                    knowledge further.
                  </p>
                  <p>
                    Given below are some of the generic topics that the students
                    may be taught during their Architecture course education:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Environmental Studies</li>
                    <li style={{ fontWeight: 400 }}>
                      Climate-responsive Design
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Model making and Workshop
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      History of Architecture&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>Theory of Structures</li>
                    <li style={{ fontWeight: 400 }}>
                      Visual Arts and Basic Design
                    </li>
                    <li style={{ fontWeight: 400 }}>Introduction to CAD</li>
                    <li style={{ fontWeight: 400 }}>
                      Human Settlement &amp; Vernacular Architecture
                    </li>
                  </ul>
                  <h2 id="h_58364013335181664890793853">
                    <strong>Top Architecture Colleges in India</strong>
                  </h2>
                  <p>
                    Given below are the top colleges along with their
                    Architecture course fees in India:
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.6307%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>SI.No</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>College Name</p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>Fees (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>1</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/school-of-planning-and-architecture-delhi">
                                SPA, New Delhi
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>2</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-roorkee">
                                IIT Roorkee
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>2.8 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>3</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/jamia-millia-islamia-university-new-delhi">
                                JMI
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>1 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>4</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/cept-university-ahmedabad">
                                CEPT University
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>5</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/school-of-planning-and-architecture-vijayawada">
                                SPA, Vijayawada
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>6</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/anna-university-chennai">
                                Anna University
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>1 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>7</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/sir-jj-college-of-architecture-mumbai">
                                Sir J J College Of Architecture
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>8</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/rizvi-college-of-architecture-rcoa-mumbai">
                                Rizvi College of Architecture
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>9</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/hindustan-university-chennai">
                                Hindustan University
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>2 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "15.4273%" }}>
                            <p>10</p>
                          </td>
                          <td style={{ width: "63.0234%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/jawaharlal-nehru-architecture-and-fine-arts-university-jnafau-hyderabad">
                                JNAFAU, Hyderabad
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "21.5593%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_67939149037361664890801824">
                    <strong>Architecture Course Jobs and Salaries</strong>
                  </h2>
                  <p>
                    The Architecture course job opportunities in India are very
                    rewarding and promising for the students. There is a high
                    demand for Architects in the country and since the education
                    provided to the students is very industry relevant, the
                    Architecture course salary is also very attractive for the
                    aspiring Architects.&nbsp;
                  </p>
                  <p>
                    Listed below are some of the popular job roles along with
                    their average salaries:
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.7264%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "54.8154%" }}>
                            <p>Job Profile</p>
                          </td>
                          <td style={{ width: "45.2444%" }}>
                            <p>Average Salary (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "54.8154%" }}>
                            <p>Architect</p>
                          </td>
                          <td style={{ width: "45.2444%" }}>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "54.8154%" }}>
                            <p>Project Manager</p>
                          </td>
                          <td style={{ width: "45.2444%" }}>
                            <p>3.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "54.8154%" }}>
                            <p>Product Designer</p>
                          </td>
                          <td style={{ width: "45.2444%" }}>
                            <p>4 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "54.8154%" }}>
                            <p>Sustainability Consultant</p>
                          </td>
                          <td style={{ width: "45.2444%" }}>
                            <p>2.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "54.8154%" }}>
                            <p>Urban Designer</p>
                          </td>
                          <td style={{ width: "45.2444%" }}>
                            <p>3.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "54.8154%" }}>
                            <p>Professor</p>
                          </td>
                          <td style={{ width: "45.2444%" }}>
                            <p>4 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "54.8154%" }}>
                            <p>Urban Planner</p>
                          </td>
                          <td style={{ width: "45.2444%" }}>
                            <p>3.5 LPA</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_40199530339541664890809495">
                    <strong>Scope of Architecture Course in India</strong>
                  </h2>
                  <p>
                    The Architecture course scope is very attractive and
                    promising in India. With the growing media industry in
                    India, Architecture students have a number of career
                    options. Some public and government organisations that offer
                    jobs for architects are Archaeological Department, Central
                    and State Public Work Departments, City Development
                    Authorities, Department Of Railways, Housing and Urban
                    Development Corporation, Housing Development Corporations,
                    Ministry of Defence, Municipalities.
                  </p>
                  <h2 id="h_20463512641861664890816887">
                    <strong>Top Recruiters</strong>
                  </h2>
                  <p>
                    Architecture courses in India provide students with ample
                    job opportunities with a very bright future. Listed below
                    are some of the top recruiters in India.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Khosla Associates</li>
                    <li style={{ fontWeight: 400 }}>Morphogenesis</li>
                    <li style={{ fontWeight: 400 }}>
                      Sameep Padora &amp; Associates
                    </li>
                    <li style={{ fontWeight: 400 }}>Sanjay Puri Architects</li>
                    <li style={{ fontWeight: 400 }}>Studio Lotus</li>
                    <li style={{ fontWeight: 400 }}>The Purple Ink Studio</li>
                    <li style={{ fontWeight: 400 }}>SPACEMATTERS</li>
                    <li style={{ fontWeight: 400 }}>VSA Architect</li>
                    <li style={{ fontWeight: 400 }}>Edifice</li>
                    <li style={{ fontWeight: 400 }}>Manchanda Associates</li>
                    <li style={{ fontWeight: 400 }}>
                      Venkataramanan Associates
                    </li>
                  </ul>
                  <h2 id="h_69369968744011664890825845">
                    <strong>Skills Required to be an Architect</strong>
                  </h2>
                  <p>
                    Architecture is a profession that requires a certain skill
                    set and ideas to conjure up the marvels of the word. The
                    skills are necessary to develop personality and professional
                    ethics in the industry. Below are some skill sets that can
                    help in the field of architecture:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Drawing&nbsp;</li>
                    <li style={{ fontWeight: 400 }}>Geometric Understanding</li>
                    <li style={{ fontWeight: 400 }}>Precision</li>
                    <li style={{ fontWeight: 400 }}>Creative Thinking</li>
                    <li style={{ fontWeight: 400 }}>Analytical&nbsp;</li>
                    <li style={{ fontWeight: 400 }}>Communications&nbsp;</li>
                    <li style={{ fontWeight: 400 }}>Eagle Eyed</li>
                    <li style={{ fontWeight: 400 }}>Methodological&nbsp;</li>
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
                Diploma In Agriculture
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
                <small className="text-muted">💰Avarage fees: 10,000 - 1 LPA</small>
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

export default Agricultures;
 