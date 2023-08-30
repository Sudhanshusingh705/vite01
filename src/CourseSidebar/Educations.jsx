import { useState } from "react";
import "./Educations.css";
import "../components/TopcourseSidebar/CourseSidebar.css";
const Educations = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
    <h2
      style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
    >
      Top Education Course in India 2023
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
            <h1>Education Full Course </h1>
            <h2>
              Education Full Course 2023 National, State &amp; University
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
                  Education courses in India are focused on the study of
                  teaching and education. The primary aim of the Education
                  degree courses is to introduce students to all the vital and
                  key concepts related to the field of teaching and education.
                  The top Education courses in India are available for the
                  students to study at UG, PG, Diploma, Certificate and
                  Doctoral level, making it possible for a large number of
                  students to pursue this course.
                </p>
                <p>
                  There is a large list of education courses amongst which the
                  students can choose what they want to specialise into. The
                  specialisations exist for the students to enable them to
                  learn about the topic and stream they are interested in. And
                  eventually, they get equipped with the necessary knowledge
                  to teach other students regarding the topics as well. Some
                  of the specialisations that the students can choose from
                  include Business Education Courses, Continuing Education
                  Courses, Medical Education Courses, Rice Education Courses,
                  Sports Education Courses, Technical Education Courses, Music
                  Education Courses.
                </p>
                <p>
                  <strong>Table Of Contents:</strong>
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_37666219719311664892787578">
                      Education Courses List
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_50877031921191664892792118">
                      Eligibility for Education Courses
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_90366160523021664892798484">Admission</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_25211627724841664892804355">Entrance Exams</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_25818687726651664892810522">
                      Types of Education Courses
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_76744640428301664892818540">
                      Syllabus and Subjects
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_13904573529911664892825960">
                      Top Education Colleges in India
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_63682699231691664892832771">
                      Jobs and Salaries
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_1584994733281664892840424">
                      Scope of Education Course in India
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_93994745535101664892847805">Top Recruiters</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_13876433936841664892853977">
                      Skills Required
                    </a>
                  </li>
                </ul>
                <h2 id="h_37666219719311664892787578">
                  <strong>Education Courses List</strong>
                </h2>
                <p>
                  When it comes to the Education courses list, there is a wide
                  range of opportunities for the students to learn about a
                  wide range of concepts and topics. There are plenty of
                  higher education courses available for the students in a
                  wide range of disciplines and streams. Students can pursue
                  Education courses after 12th, 10th, UG and PG levels.&nbsp;
                </p>
                <p>
                  Most colleges and universities in India aim to ensure that
                  they provide students with the best education courses to
                  widen their horizons and make them more employable in
                  today’s economy. Hence, students have a wide range of
                  colleges and universities available to them to study the top
                  education courses.
                </p>
                <p>
                  Given below are different Education degree courses that the
                  students can pursue:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_38861996838871664892869579">
                      Undergraduate Courses
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_88344467940761664892877350">
                      Postgraduate Courses
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_24011467942481664892883160">
                      Diploma Courses
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_13151254844311664892890627">
                      Doctorate Courses
                    </a>
                  </li>
                </ul>
                <h3 id="h_38861996838871664892869579">
                  <strong>Undergraduate Education Courses</strong>
                </h3>
                <p>
                  UG Education courses are specially designed to equip the
                  candidates with further skills, because the education sector
                  makes new advancements on a daily basis.
                </p>
                <p>
                  They are appropriate for people who wish to continue their
                  teaching jobs together with learning additional talent sets
                  which may facilitate them solve complicated issues or wish
                  to boost their teaching skills.
                </p>
                <p>
                  Given below is a list of best Education courses in india
                  that can be pursued by the students:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-course">B.Ed</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/beled-course">
                      B.El.Ed
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bped-course">B.P.Ed</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-english-course">
                      B.Ed English
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-physical-science-course">
                      B.Ed Physical Science
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-commerce-course">
                      B.Ed Commerce
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-computer-science-course">
                      B.Ed Computer Science
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-hindi-course">
                      B.Ed Hindi
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-physical-education-course">
                      B.Ed Physical Education
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-psychology-course">
                      B.Ed Psychology
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-special-education-course">
                      B.Ed Special Education
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-tamil-course">
                      B.Ed Tamil
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-sanskrit-course">
                      B.Ed Sanskrit
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/ba-education-course">
                      BA Education
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/ba-education-hons-course">
                      BA Education Hons
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/ba-physical-education-course">
                      BA Physical Education
                    </a>
                  </li>
                </ul>
                <h3 id="h_88344467940761664892877350">
                  <strong>Postgraduate Education Courses</strong>
                </h3>
                <p>
                  There are many education courses after graduation that the
                  students can pursue. The primary aim of these courses is to
                  ensure that the students have access to all the vital and
                  key concepts required to successfully build a rewarding
                  career for themselves. The curriculum of these postgraduate
                  courses tends to be industry relevant and detailed in
                  nature.
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/med-course">M.Ed</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/med-english-course">
                      M.Ed English
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/mped-course">M.P.Ed</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/ma-education-course">
                      MA Education
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/mphil-education-course">
                      M.Phil Education
                    </a>
                  </li>
                </ul>
                <h3 id="h_24011467942481664892883160">
                  <strong>Diploma Education Courses</strong>
                </h3>
                <p>
                  Many students may opt for Diploma courses in Education as
                  they are short and affordable courses that introduce
                  students to vital concepts related to the field of
                  education.
                </p>
                <p>
                  Diploma courses provide specific information compared to
                  careful teaching in full time bachelor and master degrees.
                  The diploma courses are for 6 months to a year long.
                </p>
                <p>
                  These courses are most popular amongst students who wish to
                  get into the job sector fast, instead of dedicating long
                  years to elaborate education.
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/deled-course">
                      D.El.Ed
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/ded-course">D.Ed</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/diploma-in-early-childhood-education-course">
                      Diploma in Early Childhood Education
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/diploma-in-special-education-course">
                      Diploma in Special Education
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/diploma-in-physical-education-course">
                      Diploma in Physical Education
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/diploma-in-nutrition-and-health-education-course">
                      Diploma in Nutrition and Health Education
                    </a>
                  </li>
                </ul>
                <h3 id="h_13151254844311664892890627">
                  <strong>Doctorate Education Courses</strong>
                </h3>
                <p>
                  Doctorate in education or Ph.D. in education courses are
                  primarily pursued for the aim of getting into the teaching
                  field. The Doctorate of Education is both a research and
                  professional scholarship degree that focuses on the sector
                  of education.
                </p>
                <p>
                  <a href="https://www.getmyuni.com/phd-education-course">
                    <strong>PhD in Education</strong>
                  </a>
                  : It is a three to five-year-long doctorate’s degree that
                  deals with the immense academic-level study of a range of
                  educational and professional issues. The aspirants can
                  obtain jobs in Teaching, Research, Executives, etc.
                </p>
                <h2 id="h_50877031921191664892792118">
                  <strong>Eligibility for Education Courses</strong>
                </h2>
                <p>
                  Knowing education course eligibility is vital for the
                  students to ensure that they get admission in a college of
                  their choice. The admission process and requirement for the
                  education course depends on the type of course students are
                  pursuing. Students must ensure that they research the
                  Education courses details provided by the colleges to ensure
                  that they get admitted to a college of their choice.
                </p>
                <p>
                  Almost all Education courses require students to give
                  entrance examinations to get admitted to top colleges.
                  Listed below are the general requirements for the education
                  courses admission:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <strong>UG Courses</strong>: Students need to give the
                    required entrance exam for the education related course.
                    Students appearing for the entrance examination should
                    have passed 10+2 from a recognized board with 50% marks in
                    aggregate.
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <strong>PG Courses</strong>: Students need to give the
                    required entrance exam for the education related course.
                    Students appearing for the entrance examination should
                    have graduated in the relevant stream from a recognized
                    University or Institute with 50% marks in aggregate.
                  </li>
                </ul>
                <h2 id="h_90366160523021664892798484">
                  <strong>Education Courses Admission</strong>
                </h2>
                <p>
                  Education course admission is possible by both entrance
                  examination and merit-based selection.&nbsp;
                </p>
                <p>
                  Candidates applying for the Education degree might have
                  their results from the respective entrance exams boards
                  required by the selected/opted universities. The students
                  can avail themselves of admissions through both online and
                  offline methods.
                </p>
                <p>
                  For the online method, students must enquire at the official
                  website of the colleges they are applying to. For offline
                  means, they would be required to visit the colleges
                  admission office in person.
                </p>
                <h2 id="h_25211627724841664892804355">
                  <strong>Education Courses Entrance Exams</strong>
                </h2>
                <p>
                  Entrance exams play an essential role in the final merit
                  list of the selected candidates for admission to the
                  colleges. The Education course entrance exam is a screening
                  process through which the colleges can determine if the
                  students would be a right fit for the course.
                </p>
                <p>
                  These exams are conducted at the national, state, and
                  college levels. Hence, the students need to research the
                  proper exam before enrolling.
                </p>
                <p>
                  Given below are some of the top exams that are conducted for
                  admissions to the different Education courses in India:
                </p>
                <p>
                  <strong>Post graduate Entrance Exams</strong>:
                </p>
                <ul>
                  <li>
                    <a href="https://www.getmyuni.com/exams/duet">DUET</a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/bhu-pet">
                      BHU PET
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/juet-jammu-university-entrance-test">
                      JUET
                    </a>
                  </li>
                </ul>
                <h2 id="h_25818687726651664892810522">
                  <strong>Types of Education Courses (Branches)</strong>
                </h2>
                <p>
                  The education course list in India is wide and growing,
                  making it a possibility for the students to pursue a career
                  that they are passionate about. All education courses in
                  India have many streams under it that the students can
                  pursue. The streams are then further divided into
                  sub-streams. The best education courses in India are
                  available for the students to pursue in a wide range of
                  colleges and universities.
                </p>
                <p>
                  Some of the types of Education courses that the students can
                  pursue include:
                </p>
                <h3>
                  <strong>Special Education Courses</strong>
                </h3>
                <p>
                  Special Education is aimed at teaching gifted kids, with
                  high intellectual capacities, or young people with mental or
                  physical disabilities, like learning impairment, hearing
                  impairment, stuttering, amputations, cerebral palsy, etc.
                  Listed below are a few Special Education Courses:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bed-special-education-course">
                      B Ed in Special Education
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    B.Ed Special Education Hearing Impairment
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    B.Ed Special Education Visual Impairment
                  </li>
                </ul>
                <h3>
                  <strong>Early Childhood Education Courses</strong>
                </h3>
                <p>
                  Early childhood education (ECE), also known as nursery
                  education, is a branch of education theory that relates to
                  the teaching of children (formally and informally) from
                  birth up to the age of eight. Traditionally, this is up to
                  the equivalent of third grade. Below is a list of Early
                  Childhood Education Courses:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>B Ed in Early Education</li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/ett-course">ETT</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/nursery-teacher-training-course">
                      NTT
                    </a>
                  </li>
                </ul>
                <h3>
                  <strong>Physical Education Courses</strong>
                </h3>
                <p>
                  Physical Education, aka PE or Phy. Ed or Physical Training
                  is a field of studies that deal with the whats and hows
                  of building a fit body in every aspect and retaining the
                  same. It basically deals with the science of nutrition and
                  exercise methods. It also envelops various sports and other
                  related activities.
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bped-course">B.P.Ed</a>
                  </li>
                </ul>
                <h2 id="h_76744640428301664892818540">
                  <strong>Education Course Syllabus and Subjects</strong>
                </h2>
                <p>
                  The syllabus and subjects for the education courses depends
                  on the type of course the students are pursuing. The
                  education course syllabus is not fixed and depends on the
                  level of education that the students are choosing to pursue.
                  The stream that the students choose to pursue also creates
                  an impact on the subjects and syllabus of the course. Some
                  of the courses that the students can pursue include
                  Financial Education Courses, Elementary Education Course, IT
                  Education Courses.
                </p>
                <p>
                  Given below are some of the generic topics that the students
                  may be taught during their Education course education:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    Childhood and Growing Up
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Contemporary India and Education
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Pedagogy of School Subject
                  </li>
                  <li style={{ fontWeight: 400 }}>Learning and Teaching</li>
                  <li style={{ fontWeight: 400 }}>Assessment for Learning</li>
                  <li style={{ fontWeight: 400 }}>
                    Engagement with the Field: Tasks and Assignment
                  </li>
                </ul>
                <h2 id="h_13904573529911664892825960">
                  <strong>Top Education Colleges in India</strong>
                </h2>
                <p>
                  The education course duration depends on the type of course
                  that the students are applying for. Generally, the duration
                  of education courses in university ranges from one to six
                  years. There are many top colleges and universities in India
                  that provide students with education courses. Given below
                  are some of the top colleges along with their education
                  course fees:
                </p>
                <div className="table-responsive">
                  <table style={{ width: "98.7743%" }}>
                    <tbody>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>SI.No</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>College Name</p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>Fees (INR)</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>1.</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>
                            <a href="https://www.getmyuni.com/college/christ-university-bangalore">
                              Christ University, Bangalore
                            </a>
                          </p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>1.5 LPA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>2.</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>
                            <a href="https://www.getmyuni.com/college/srm-university-srm-kanchipuram">
                              SRM University, Chennai
                            </a>
                          </p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>1 LPA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>3.</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>
                            <a href="https://www.getmyuni.com/college/lovely-professional-university-lpu-jalandhar">
                              LPU, Jalandhar
                            </a>
                          </p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>1.2 LPA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>4.</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>
                            <a href="https://www.getmyuni.com/college/jaipur-national-university-jnu-jaipur">
                              Jaipur National University
                            </a>
                          </p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>80,000 PA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>5.</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>
                            <a href="https://www.getmyuni.com/college/university-of-delhi-du-new-delhi">
                              Delhi University
                            </a>
                          </p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>20,000 PA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>6.</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>
                            <a href="https://www.getmyuni.com/college/maharshi-dayanand-university-mdu-rohtak">
                              MDU Rohtak
                            </a>
                          </p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>25,000 PA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>7.</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>
                            <a href="https://www.getmyuni.com/college/university-of-lucknow-ul-lucknow">
                              Lucknow University
                            </a>
                          </p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>20,000 PA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>8</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>
                            <a href="https://www.getmyuni.com/college/gandhi-shikshan-bhavan-s-smt-surajba-college-of-education-mumbai">
                              Gandhi Shikshan Bhavans Smt Surajba College Of
                              Education
                            </a>
                          </p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>19,012 PA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>9</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>
                            <a href="https://www.getmyuni.com/college/k-j-somaiya-comprehensive-college-of-education-training-and-research-kjsccetr-mumbai">
                              K. J. Somaiya Comprehensive College Of
                              Education, Training And Research
                            </a>
                          </p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>1.20 LPA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "7.88933%" }}>
                          <p>10</p>
                        </td>
                        <td style={{ width: "80.9772%" }}>
                          <p>
                            <a href="https://www.getmyuni.com/college/hansraj-jivandas-college-of-education">
                              Hansraj Jivandas College Of Education
                            </a>
                          </p>
                        </td>
                        <td style={{ width: "11.0153%" }}>
                          <p>11,434 PA</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_63682699231691664892832771">
                  <strong>Education Course Jobs and Salaries</strong>
                </h2>
                <p>
                  Amongst all the benefits of Education courses, the most
                  prominent one is that the students have a wide career scope
                  in India. The Indian economy depends on Education heavily,
                  and hence, students, upon the completion of their course are
                  presented with a lot of job opportunities.
                </p>
                <p>
                  Listed below are some of the popular job roles along with
                  their Education course salary:
                </p>
                <div className="table-responsive">
                  <table style={{ width: "98.6786%" }}>
                    <tbody>
                      <tr>
                        <td style={{ width: "58.027%" }}>
                          <p>Job Role</p>
                        </td>
                        <td style={{ width: "42.0289%" }}>
                          <p>Average Salary (INR)</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "58.027%" }}>
                          <p>Assistant Professor</p>
                        </td>
                        <td style={{ width: "42.0289%" }}>
                          <p>3.3 LPA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "58.027%" }}>
                          <p>Government School Teacher</p>
                        </td>
                        <td style={{ width: "42.0289%" }}>
                          <p>3.5 LPA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "58.027%" }}>
                          <p>Private School Teacher</p>
                        </td>
                        <td style={{ width: "42.0289%" }}>
                          <p>4 LPA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "58.027%" }}>
                          <p>High School Teacher</p>
                        </td>
                        <td style={{ width: "42.0289%" }}>
                          <p>3 LPA</p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: "58.027%" }}>
                          <p>College Professor</p>
                        </td>
                        <td style={{ width: "42.0289%" }}>
                          <p>3.5 LPA</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_1584994733281664892840424">
                  <strong>Scope of Education Course in India</strong>
                </h2>
                <p>
                  Education course has been designed for those aspirants who
                  are interested to pursue a career in teaching and other
                  related fields.There is a lot of scope for the students to
                  build a rewarding career for themselves. According to IBEF,
                  the Indian education sector stood at a value of US$ 91.7
                  billion in FY18, and by 2025, the higher education segment
                  is projected to reach US$ 35.03 billion.
                </p>
                <h2 id="h_93994745535101664892847805">
                  <strong>Top Recruiters</strong>
                </h2>
                <p>
                  Education courses in India provide students with ample job
                  opportunities with a very bright future. Listed below are
                  some of the top recruiters in India.
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>Educomp</li>
                  <li style={{ fontWeight: 400 }}>FIITJEE</li>
                  <li style={{ fontWeight: 400 }}>TIME</li>
                  <li style={{ fontWeight: 400 }}>NIIT</li>
                  <li style={{ fontWeight: 400 }}>Vibgyor</li>
                </ul>
                <h2 id="h_13876433936841664892853977">
                  <strong>Skills Required for Education Courses</strong>
                </h2>
                <p>
                  Education courses require various sets of skills that a
                  candidate should possess in turn to excel in their career.
                  Here are some of skill set required for education courses:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    Critical thinking skills
                  </li>
                  <li style={{ fontWeight: 400 }}>Patience</li>
                  <li style={{ fontWeight: 400 }}>Communication skills</li>
                  <li style={{ fontWeight: 400 }}>Organisational skills</li>
                  <li style={{ fontWeight: 400 }}>
                    Creative thinking abilities
                  </li>
                  <li style={{ fontWeight: 400 }}>Leadership skills</li>
                  <li style={{ fontWeight: 400 }}>Capacity for teamwork</li>
                  <li style={{ fontWeight: 400 }}>Time management skills</li>
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
              B.P.Ed [Bachelor of Physical Education]
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
              <small className="text-muted">💰Avarage fees: 6K - 51K</small>
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
              ETT [Elementary Teacher Training]
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
              <small className="text-muted">💰Avarage fees: 5,000-50,000 PA</small>
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
              M.P.Ed [Master of Physical Education]
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
              <small className="text-muted">💰Avarage fees: 6000 - 75,000 PA</small>
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
              B.Ed [Bachelor of Education]
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
              <small className="text-muted">💰Avarage fees: 10,000-1 LPA</small>
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
              Distance M.Ed
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
              <small className="text-muted">💰Avarage fees: 25,000 per Annum</small>
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
             B.Ed Commerce
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
              <small className="text-muted">💰Avarage fees: 6K - 1 LPA</small>
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
              B.Ed Computer Science
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
              <small className="text-muted">💰Avarage fees: 6000 - 1 LPA</small>
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
              B.Ed Hindi
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
              <small className="text-muted">💰Avarage fees: 5K - 80K per annum</small>
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
              B.Ed Physical Education
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
              <small className="text-muted">💰Avarage fees: 5,000 - 1 LPA</small>
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
              B.Ed Psychology

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
              <small className="text-muted">💰Avarage fees: 5K - 1 LPA</small>
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
              B.Ed Special Education
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
              <small className="text-muted">💰Avarage fees: 50,000 - 1 LPA</small>
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
              B.Ed Tamil
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
              <small className="text-muted">💰Avarage fees: 5,000 - 1 LPA</small>
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
              D.El.Ed [Diploma Elementary Education]
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
              <small className="text-muted">💰Avarage fees: 5K - 2 LPA</small>
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
              D.Ed [Diploma Education]
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
              <small className="text-muted">💰Avarage fees: 15,000 to 70,000 PA</small>
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
              B.El.Ed [Bachelor of Elementary Education]
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
              <small className="text-muted">💰Avarage fees: 30,000- 1.5 LPA</small>
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
              Distance B.Ed
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
              <small className="text-muted">💰Avarage fees: 20,000-50,000 PA</small>
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
              Nursery Teacher Training
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
              <small className="text-muted">💰Avarage fees: 5,000-30,000</small>
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
              M.Ed English
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
              <small className="text-muted">💰Avarage fees: 10,000 - 50,000 PA</small>
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
              D.Litt [Doctor of Literature]
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
              <small className="text-muted">💰Avarage fees: 50K to 1 LPA</small>
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
              BTC [Basic Teacher Certificate]
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
              <small className="text-muted">💰Avarage fees:  8,000-1.3 LPA</small>
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

export default Educations;
