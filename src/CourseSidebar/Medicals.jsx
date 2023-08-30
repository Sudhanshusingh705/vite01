import { useState } from "react";
import "./Medicals.css";
import "../components/TopcourseSidebar/CourseSidebar.css";

const Medicals = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h2
        style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
      >
        Top Medical Course in India 2023
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
              <h1>Medical Full Course </h1>
              <h2>
                Medical Full Course 2023 National, State &amp; University Level
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
                    Aspirants in India have many Medical stream courses that
                    they can pursue. All Medical courses in India present
                    students with very promising career options and rewarding
                    salaries. The Medical course duration depends on the type of
                    course that the student chooses to pursue.
                  </p>
                  <p>
                    All medical courses listed include job-oriented courses that
                    are offered at UG, PG, and Doctorate levels. Some of the top
                    Medical courses include Medical Nursing Course, Medical
                    Research Courses, Medical Laboratory Course, Medical
                    Terminology Course, Medical Electronics Course, Medical Law
                    Courses, and Medical Management Course.
                  </p>
                  <p>
                    The Medical course details for the students depend on the
                    exact course that the students are applying for. The Medical
                    courses in college that are taught to the students are
                    designed keeping the needs of the industry in mind. Hence,
                    students can expect to gain a lot of knowledge and exposure
                    when pursuing medical courses.
                  </p>
                  <p>
                    <strong>Table Of Contents:</strong>
                  </p>
                  <ul>
                    <li>
                      <a href="#medical-courses-list">Courses List</a>
                    </li>
                    <li>
                      <a href="#eligibility">Eligibility</a>
                    </li>
                    <li>
                      <a href="#admission">Admission</a>
                    </li>
                    <li>
                      <a href="#entrance-exams">Entrance Exams</a>
                    </li>
                    <li>
                      <a href="#top-10-medical-courses-in-demand">
                        Top 10 Medical Courses in Demand
                      </a>
                    </li>
                    <li>
                      <a href="#medical-courses-after-12th-without-neet">
                        Medical Courses after 12th without NEET
                      </a>
                    </li>
                    <li>
                      <a href="#medical-course-syllabus-and-subjects">
                        Medical Course Syllabus and Subjects
                      </a>
                    </li>
                    <li>
                      <a href="#top-medical-colleges-in-india">
                        Top Medical Colleges in India
                      </a>
                    </li>
                    <li>
                      <a href="#medical-course-jobs-and-salaries">
                        Medical Course Jobs and Salaries
                      </a>
                    </li>
                    <li>
                      <a href="#scope-of-medical-course-in-india">
                        Scope of Medical Course in India
                      </a>
                    </li>
                    <li>
                      <a href="#top-recruiters">Top Recruiters</a>
                    </li>
                    <li>
                      <a href="#skills-required-for-medical-courses">
                        Skills Required For Medical Courses
                      </a>
                    </li>
                  </ul>
                  <h2 id="medical-courses-list">Medical Courses List</h2>
                  <p>
                    Medical courses can be accessed by students at various
                    levels of study. There is scope for the students to pursue
                    Medical courses after 12th, after graduation or PG.
                    Additionally, students can enrol on some diploma courses as
                    Medical courses after the 10th.&nbsp;
                  </p>
                  <p>
                    The Medical courses list is very diverse and flexible for
                    the students to pursue. Hence, every student can gain the
                    exposure that they wish to pursue. Some of the unique but
                    popular Medical field courses include specialisations in
                    Medical Physics Course, Medical Representative Course,
                    Medical Science Courses, Medical Technology Course, Medical
                    Technician Course, Medical Administration Course And Medical
                    Billing Courses.
                  </p>
                  <p>
                    Given below are different types of Medical courses that the
                    students can pursue:
                  </p>
                  <ul>
                    <li>
                      <a href="#undergraduate-medical-courses">
                        Undergraduate Medical Courses
                      </a>
                    </li>
                    <li>
                      <a href="#postgraduate-medical-courses">
                        Postgraduate Medical Courses
                      </a>
                    </li>
                    <li>
                      <a href="#diploma-medical-courses">
                        Diploma Medical Courses
                      </a>
                    </li>
                    <li>
                      <a href="#certificate-medical-courses">
                        Certificate Medical Courses
                      </a>
                    </li>
                    <li>
                      <a href="#doctorate-medical-courses">
                        Doctorate Medical Courses
                      </a>
                    </li>
                  </ul>
                  <h3 id="undergraduate-medical-courses">
                    Undergraduate Medical Courses
                  </h3>
                  <p>
                    There are a lot of options for students when it comes to
                    undergraduate courses in the Medical field. UG Medical
                    courses aim to introduce students to all the important and
                    vital concepts related to the field. They give students an
                    introduction to all the important concepts in the field. For
                    admission to these courses, entrance exams play an important
                    role. Hence admission is possible for most Medical courses
                    with the NEET exams.
                  </p>
                  <p>
                    These courses are provided to the students in a wide range
                    of specialisations and sub-fields. There are many options
                    for Medical courses without MBBS degree as well.
                  </p>
                  <p>Some of the Medical courses after the 12th include:</p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/bsc-cardiac-technology-course">
                        B.Sc Cardiac Technology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/bsc-cardiac-care-technology-course">
                        B.Sc Cardiac Care Technology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/bpt-course">BPT</a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/mbbs-course">MBBS</a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/bams-course">BAMS</a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/bums-course">BUMS</a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/bhms-course">BHMS</a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/bnys-course">BYNS</a>
                    </li>
                  </ul>
                  <h3 id="postgraduate-medical-courses">
                    Postgraduate Medical Courses
                  </h3>
                  <p>
                    There are plenty of PG Medical courses that can be pursued
                    by the students. These PG courses give an in-depth
                    understanding to the students in their chosen field of
                    specialisation. These medical courses duration tends to be
                    of two years, and the primary means of admission to these
                    courses is entrance exams.
                  </p>
                  <p>
                    Given below are some of the popular postgraduate Medical
                    courses list that the students can enrol in:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/msc-anatomy-course">
                        M.Sc Anatomy
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/ms-anatomy-course">
                        MS Anatomy
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/ms-ent-course">
                        MS ENT
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/ms-general-surgery-course">
                        MS General Surgery
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/ms-orthopaedics-course">
                        MS Orthopaedics
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/ms-obstetrics-gynaecology-course">
                        MS Obstetrics &amp; Gynaecology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/ms-ophthalmology-course">
                        MS Ophthalmology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-medicine-course">
                        MD Medicine
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-anatomy-course">
                        MD Anatomy
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-anaesthesiology-course">
                        MD Anesthesiology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-biochemistry-course">
                        MD Biochemistry
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-community-medicine-course">
                        MD Community Medicine
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-dermatology-course">
                        MD Dermatology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-forensic-medicine-course">
                        MD Forensic Medicine
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-general-medicine-course">
                        MD General Medicine
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-radiotherapy-course">
                        MD Radiotherapy
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-microbiology-course">
                        MD Microbiology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-paediatrics-course">
                        MD Paediatrics
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-pathology-course">
                        MD Pathology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-pharmacology-course">
                        MD Pharmacology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-psychiatry-course">
                        MD Psychiatry
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/md-physiology-course">
                        MD Physiology
                      </a>
                    </li>
                  </ul>
                  <h3 id="diploma-medical-courses">
                    Diploma/ PG Diploma Medical Courses
                  </h3>
                  <p>
                    Many students may choose to apply for short-term courses in
                    the Medical field such as Diploma courses. These diploma
                    courses are also often Medical courses after 12th without
                    NEET, making them accessible for a lot of students in India.
                    The Medical Diploma courses are designed to introduce
                    students to a very specific topic in a time-saving and
                    affordable way.
                  </p>
                  <p>
                    Some of the best diploma Medical courses, universities in
                    India provided are listed below:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/dmlt-course">DMLT</a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/diploma-in-physiotherapy-course">
                        Diploma in Physiotherapy
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/diploma-in-clinical-pathology-dcp-course">
                        Diploma in Clinical Pathology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Diploma in Medical Radio Diagnosis
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      PG Diploma in Forensic Medicine
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      PG Diploma in Health Administration
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      PG Diploma in Health Promotion and Education
                    </li>
                  </ul>
                  <h3 id="certificate-medical-courses">
                    Certificate Medical Courses
                  </h3>
                  <p>
                    There are many Medical certificate courses that the students
                    can enrol in. The primary purpose of a certificate course is
                    to help the students gain in-depth knowledge in a
                    specialised field in a short period of time. The certificate
                    courses are often provided by industry-relevant employers or
                    educational institutions.
                  </p>
                  <p>
                    Given below are some of the top online certificate Medical
                    professional courses that the students can take:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Anatomy Certificate By Coursera
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Introduction to Biology Of Cancer By Coursera
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Introduction to Psychology by Coursera
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Anatomy: Know your Abdomen By Future Learn
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Causes of Human Disease: Nutrition and Environment By
                      Future Learn
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Causes of Human Disease: Transmitting and Fighting
                      Infection By Future Learn
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      How to read chest X-Ray By Udemy
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Emergency Medicine By Udemy
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Cardiac Anatomy &amp; Physiology By Udemy
                    </li>
                  </ul>
                  <h3 id="doctorate-medical-courses">
                    Doctorate Medical Courses
                  </h3>
                  <p>
                    The Doctorate in Medical course is pursued by students who
                    wish to enter the research field. The minimum duration of
                    the doctorate course is 2 years and it could be extended as
                    per the demands of the research. Candidates who have
                    completed doctorate courses have the option to become
                    teachers or lecturers in colleges.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      PhD in Medicine
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      DM
                    </li>
                  </ul>
                  <h2 id="eligibility">
                    &nbsp;Eligibility for Medical Courses
                  </h2>
                  <p>
                    The Medical course eligibility depends on the type of course
                    that the students have applied to. The best Medical courses
                    in India expect students to give the NEET exam. Given below
                    are the general requirements for each course:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Certificate courses: Certification medical courses are
                      done with no entrance test and will be conducted during
                      the admission process. The admission will be completely
                      merit based on the marks obtained in the 10th or 12th
                      examination.
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Diploma Courses: Admission to a diploma in medical courses
                      is completely based on the merit of className 10th and 12th
                      and for PG Diploma, graduation marks are considered.
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      UG Courses: All the colleges follow entrance-based
                      admission and provide admission based on the marks secured
                      by the candidates in the state level or national level
                      entrance examination. Students appearing for the entrance
                      examination should have passed 10 + 2 from a recognized
                      board with 50% marks in aggregate.
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      PG Courses: Almost all the colleges provide admission on
                      an entrance basis, based on the marks secured by the
                      candidates in the state level or national level entrance
                      examinations. Students appearing for the entrance
                      examination should have graduated in the relevant stream
                      from a recognized University or Institute with 50% marks
                      in aggregate.
                    </li>
                  </ul>
                  <h2 id="admission">&nbsp;Medical Courses Admission</h2>
                  <p>
                    For Medical courses admission, students need to research
                    both the merit-based selection process and the entrance
                    requirements. Many institutes in India conduct entrance
                    exams to select their final list of students. The students
                    can avail themselves of admissions through both online and
                    offline methods.
                  </p>
                  <p>
                    For the online method, students must enquire at the official
                    website of the colleges they are applying to. For offline
                    means, they would be required to visit the colleges
                    admission office in person.
                  </p>
                  <h2 id="entrance-exams">
                    &nbsp;Medical Courses Entrance Exams
                  </h2>
                  <p>
                    There are very few Medical degree courses in India that the
                    students can enrol in without giving an entrance exam. The
                    best course in the Medical field requires students to
                    participate in entrance exams as these exams function like a
                    screening process for the final list of students.
                  </p>
                  <p>
                    These entrance exams can be conducted at a national level,
                    state level or college level.&nbsp;Given below are some of
                    the top exams that are conducted for admissions to the
                    different Medical colleges in India:
                  </p>
                  <p>
                    <strong>UG Medical Courses Entrance Exams</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/exams/neet">NEET</a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/exams/nest">NEST</a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/exams/iit-jam">
                        IIT JAM
                      </a>
                    </li>
                  </ul>
                  <p>
                    <strong>PG Medical Courses Entrance Exams</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/exams/neet-pg">
                        NEET PG
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/exams/aiims-pg">
                        AIIMS PG
                      </a>
                    </li>
                  </ul>
                  <h2 id="top-10-medical-courses-in-demand">
                    &nbsp;Top 10 Medical Courses in Demand
                  </h2>
                  <p>Given below are the top ten medical courses in Demand:</p>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <p>Name of Course</p>
                          </td>
                          <td>
                            <p>Duration</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/mbbs-course">
                                MBBS
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>5 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/md-general-medicine-course">
                                MD General Medicine
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/ms-general-surgery-course">
                                MS General Surgery
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/md-anatomy-course">
                                MD Anatomy
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>MD Respiratory Medicine</p>
                          </td>
                          <td>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>MD Immunohematology and Blood transfusion</p>
                          </td>
                          <td>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>MD Infectious Diseases</p>
                          </td>
                          <td>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>MD Geriatrics</p>
                          </td>
                          <td>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>MS Respiratory</p>
                          </td>
                          <td>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>MS Infectious Diseases</p>
                          </td>
                          <td>
                            <p>2 Years</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="medical-courses-after-12th-without-neet">
                    Medical Courses After 12th without NEET&nbsp;
                  </h2>
                  <p>
                    Most of the top medical courses can be pursued by candidates
                    only if they can crack the NEET entrance examination.
                    Specialisations like Medical Coding Course, Medical Lab
                    Technician Course, Medical Transcription Course, Medical
                    Scribing Course, and Medical Writing Courses require
                    students to give NEET to pursue the course.&nbsp;
                  </p>
                  <p>
                    However, few medical courses can be pursued by candidates
                    who have not appeared for the NEET examination such as BPT,
                    BVSc and a few more.
                  </p>
                  <p>
                    <strong>Read More:</strong>{" "}
                    <a href="https://www.getmyuni.com/articles/medical-courses-after-12th-without-neet">
                      Medical Courses After 12th Without NEET
                    </a>
                  </p>
                  <h2 id="medical-course-syllabus-and-subjects">
                    &nbsp;Medical Course Syllabus and Subjects
                  </h2>
                  <p>
                    The Medical course syllabus is designed to ensure that the
                    students gain all the vital knowledge they need to get to
                    build a rewarding career path for themselves. Although the
                    detailed syllabus of every Medical course will vary as they
                    are of different duration and value, they all contain the
                    important Medical course subjects.
                  </p>
                  <p>
                    It is important for the students to note that medical
                    courses are considered very tedious and difficult courses,
                    hence, preparation for the course is important. It is
                    recommended that students invest in Medical course books as
                    they can be very useful when pursuing these courses.
                  </p>
                  <p>
                    Given below are some of the generic topics that the students
                    may be taught during their Medical course education:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Introduction to Psychology
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Anatomy: Know your Abdomen
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Causes of Human Disease: Nutrition and Environment
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Causes of Human Disease: Transmitting and Fighting
                      Infection
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      How to read chest X-Ray
                    </li>
                  </ul>
                  <h2 id="top-medical-colleges-in-india">
                    &nbsp;Top Medical Colleges in India
                  </h2>
                  <p>
                    The Medical course fees in India are not fixed and can
                    depend on many factors. Some of these factors include the
                    type of the course, the location of the college and if the
                    college is private or public.
                  </p>
                  <p>
                    Given below are the top colleges along with their Medical
                    course fees in India:
                  </p>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <p>SI.No</p>
                          </td>
                          <td>
                            <p>College Name</p>
                          </td>
                          <td>
                            <p>Fees (INR)</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p>1</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/christian-medical-college-cmc-vellore">
                                CMC, Vellore
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>INR 80,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>2</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/university-of-delhi-du-new-delhi">
                                Delhi University
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>INR 30,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>3</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/galgotias-university-noida">
                                Galgotia University
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>5 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>4</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/banaras-hindu-university-bhu-varanasi">
                                BHU, Varanasi
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>25,000&nbsp;</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>5</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/aligarh-muslim-university-amu-aligarh">
                                AMU, Aligarh
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>25,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>6</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/jss-medical-college-and-hospital-jmcah-mysore">
                                JSS Medical College, Mysore
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>80,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>7</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/psg-institute-of-medical-sciences-research-pioms-r-coimbatore">
                                PSG Institute of Medical Science &amp; Research,
                                Coimbatore
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>50,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>8</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/maulana-azad-medical-college-mamc-new-delhi">
                                Maulana Azad Medical College, New Delhi
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>50,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>9</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/srm-university-srm-kanchipuram">
                                SRM IST, Chennai
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>5 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>10</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/all-india-institute-of-medical-sciences-aiims-new-delhi">
                                AIIMS, New Delhi
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>2,000</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="medical-course-jobs-and-salaries">
                    Medical Course Jobs and Salaries
                  </h2>
                  <p>
                    Medical courses in India have a lot of job scope and
                    opportunities for graduates. The Medical courses and salary
                    depend on the specialisation that the students choose to
                    pursue. Some of the specialisations that the students can
                    pursue include Medical Allied Courses, Medical Engineering
                    Courses, Medical Imaging Technology Course, and Medical
                    Microbiology courses.
                  </p>
                  <p>
                    Listed below are some of the popular job roles along with
                    their average salaries:
                  </p>
                  <div className="table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <p>Job Profile</p>
                          </td>
                          <td>
                            <p>Average Salary (INR)</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p>Pharmacist</p>
                          </td>
                          <td>
                            <p>2.8 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Physical Therapist</p>
                          </td>
                          <td>
                            <p>2.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dermatologist</p>
                          </td>
                          <td>
                            <p>10 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>General Surgeon</p>
                          </td>
                          <td>
                            <p>11 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Clinical Forensic Medical Examiner</p>
                          </td>
                          <td>
                            <p>15 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Hospital Administration</p>
                          </td>
                          <td>
                            <p>4 LPA</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="scope-of-medical-course-in-india">
                    Scope of Medical Course in India
                  </h2>
                  <p>
                    Medicine is a technical stream and it requires candidates to
                    have good knowledge and great patience. The Medical course
                    scope is very attractive and promising in India. With the
                    growing need for doctors in India, Medical students have a
                    number of career options.&nbsp;
                  </p>
                  <p>
                    Medical is a popular career option in India that provides
                    aspirants with the opportunity to work in a wide number of
                    fields including research firms, large Pharmaceutical
                    companies and hospitals.&nbsp;
                  </p>
                  <h2 id="top-recruiters">Top Recruiters</h2>
                  <p>
                    Medical courses in India provide students with ample job
                    opportunities with a very bright future. Listed below are
                    some of the top recruiters in India.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Max Hospitals
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Apollo Hospitals
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      LYF Hospitals
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      NHS
                    </li>
                  </ul>
                  <h2 id="skills-required-for-medical-courses">
                    Skills Required For Medical Courses
                  </h2>
                  <p>
                    Given below are some top skills that would help the students
                    ace the medical courses in India:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Empathy
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Communication Skills
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Teamwork
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Work Ethic
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Stress Management
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Positive Attitude
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Flexibility
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Time Management
                    </li>
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
                BAMS [Bachelor of Ayurvedic Medicine and Surgery]
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
                <small className="text-muted">💰Avarage fees: 25,000 - 3.2 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 5 Years 6 Months</small>
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
                BHMS [Bachelor of Homeopathic Medicine & Surgery]
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
                <small className="text-muted">⌛Duration: 5 Years 6 Months</small>
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
                Diploma in Nursing
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
                <small className="text-muted">💰Avarage fees: 2 LPA</small>
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
                BPT [Bachelor of Physiotherapy]
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
                <small className="text-muted">💰Avarage fees: 8,000-2 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 4 Years 6 Months</small>
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
                MPT [Master of Physiotherapy]
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
                <small className="text-muted">💰Avarage fees: 35,000 - 2 LPA</small>
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
               MBBS [Bachelor of Medicine and Bachelor of Surgery]
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
                <small className="text-muted">💰Avarage fees: 10,000-15 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 5 Years 5 Months</small>
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
                MD [Doctor of Medicine]
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
                <small className="text-muted">💰Avarage fees: 42,000 - 5 LPA</small>
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
                M.Ch [Master of Chirurgiae]
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
                <small className="text-muted">💰Avarage fees: 2,000 - 2.1 LPA</small>
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
                BSMS [Bachelor of Siddha Medicine and Surgery]

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
                <small className="text-muted">💰Avarage fees: 50,000 to INR 3 LPA</small>
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
                MS [Master of Surgery]
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
                <small className="text-muted">💰Avarage fees: 54K - 18 LPA</small>
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
                BUMS [Bachelor of Unani Medicine and Surgery]
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
                <small className="text-muted">💰Avarage fees: 50,000 - 2 LPA</small>
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
                Diploma in Gynecology and Obstetrics
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
                <small className="text-muted">💰Avarage fees: 20,000 to 3 L per Annum</small>
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
                BNYS [Bachelor of Naturopathy and Yogic Sciences]
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
                <small className="text-muted">⌛Duration: 5 Years 6 Months</small>
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
               B.Tech Biomedical Instrumentation
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
                <small className="text-muted">💰Avarage fees: 1.5 - 4 LPA</small>
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
                Diploma in Dialysis Techniques

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
                <small className="text-muted">💰Avarage fees: 15,000 - 55,000 PA</small>
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
                DM Cardiology
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
                <small className="text-muted">💰Avarage fees: 3 - 15 LPA</small>
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
                MS ENT
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
                <small className="text-muted">💰Avarage fees: 5 to 10 LPA</small>
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
                DCP [Diploma Clinical Pathology]
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
                <small className="text-muted">💰Avarage fees: 10,000 to 8 LPA</small>
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

export default Medicals;
