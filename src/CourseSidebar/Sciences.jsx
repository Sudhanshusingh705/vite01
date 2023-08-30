import { useState } from "react";
import "./Sciences.css";
import "../components/TopcourseSidebar/CourseSidebar.css";

const Sciences = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
    <h2
      style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
    >
      Top Science Course in India 2023
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
            <h1>Science Full Course </h1>
            <h2>
              Science Full Course 2023 National, State &amp; University Level
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
                  Science is one of the most pursued majors in the country.
                  Several prestigious colleges and universities offer the best
                  science courses. The nations development is the focus of
                  the science courses, which also offer a variety of job
                  opportunities in the public and private sectors.
                </p>
                <p>
                  Science is a combination of PCBM which the candidate should
                  have in the 12th grade so as to qualify for the bachelors
                  course for further studies. India has some of the best
                  science programmes available thanks to its numerous
                  prestigious institutions that offer Certificate, Diploma,
                  and Degree (Bachelors, Masters, and Doctorate) programmes.
                  The science course duration ranges from 3 to 5 years.
                </p>
                <p>
                  <strong>Table of Contents</strong>
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_381462832871664869295440">
                      Science Courses List
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_8953604515001664869301555">
                      Eligibility for Science Courses
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_5201986727071664869306428">Admission</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_5439765459131664869311137">Entrance Exam</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_83187584011181664869315815">
                      Types Of Science Courses
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_30184911913771664869322790">
                      Top 10 Science Courses in Demand
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_25443904915801664869330670">
                      Syllabus And Subjects
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_13542979117821664869343890">
                      Top Science Colleges in India
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_51712905319831664869350984">
                      Jobs and Salaries
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_49642070121831664869356878">
                      Scope of Science in India
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_12121188623821664869362536">Top Recruiters</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_52454189126141664869371840">
                      Skills Required
                    </a>
                  </li>
                </ul>
                <h2 id="h_381462832871664869295440">
                  <strong>Science Courses List</strong>
                </h2>
                <p>
                  The country grants many different science degree courses,
                  including diplomas, B.Sc. degrees, and even PhDs. Some of
                  the best science colleges, including IITs, VITs, BITS, and
                  NITs, provide a wide range of additional science-related
                  courses and certifications. The majority of science degree
                  courses are entrance exam-based, so any candidate choosing
                  to study for one should be aware of this. One can read the
                  science course details below to find out more about their
                  choices and options.
                </p>
                <p>
                  Here is the list of science courses in the country broken
                  down as follows:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_8324747022611664872272591">
                      Undergraduate Course
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_2629921404691664872277976">
                      Postgraduate Courses
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_9703187566761664872282765">Diploma courses</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_6185585348821664872287292">
                      Certification Courses
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="#h_70006853310871664872292048">
                      Doctorate Courses
                    </a>
                  </li>
                </ul>
                <h3 id="h_8324747022611664872272591">
                  <strong>Undergraduate Courses</strong>
                </h3>
                <p>
                  The science undergraduate courses are full-time courses for
                  a span of three years to four years with integrated science
                  courses leading up to five years. B.Sc has the most
                  popularity among students pursuing science.&nbsp; Some of
                  the undergraduate courses are:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bsc-course">B.Sc</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bsc-hons-course">
                      B.Sc Hons
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bfsc-course">B.F.Sc</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bvsc-course">B.V.Sc</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/blibisc-course">
                      B.Lib.I.Sc
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bsc-physics-course">
                      B.Sc Physics
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bsc-chemistry-course">
                      B.Sc Chemistry
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bsc-mathematics-course">
                      B.Sc Mathematics
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bsc-biology-course">
                      B.Sc Biology
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bsc-botany-course">
                      B.Sc Botany
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bsc-zoology-course">
                      B.Sc Zoology
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/bsc-food-science-and-nutrition-course">
                      B.Sc Food Science and Nutrition
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/bsc-computer-science-course">
                      B.Sc Computer Science
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/bsc-biotech-course">
                      B.Sc Biotechnology
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/bsc-information-technology-course">
                      B.Sc Information Technology
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/bsc-microbiology-course">
                      B.Sc Microbiology
                    </a>
                  </li>
                </ul>
                <h3 id="h_2629921404691664872277976">
                  <strong>Postgraduate Courses</strong>
                </h3>
                <p>
                  After completion of a bachelors students can desire to
                  pursue postgraduate courses to advance their skills in the
                  field of science and research. The pg science course is
                  available in all fields across the country. Here are some of
                  the Postgraduate courses available in the country:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-course">M.Sc</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/mfsc-course">M.F.Sc</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/mvsc-course">M.V.Sc</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/mlibisc-course">
                      M.Lib.I.Sc
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-chemistry-course">
                      M.Sc Chemistry
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-zoology-course">
                      M.Sc Zoology
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-physics-course">
                      M.Sc Physics
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-botany-course">
                      M.Sc Botany
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-food-science-and-nutrition-course">
                      M.Sc Food Science and Nutrition
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-mathematics-course">
                      M.Sc Mathematics{" "}
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-computer-science-course">
                      M.Sc Computer Science{" "}
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-biotech-course">
                      M.Sc Biotechnology{" "}
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-microbiology-course">
                      M.Sc Microbiology
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-biochemistry-course">
                      M.Sc Biochemistry
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/msc-environmental-science-course">
                      M.Sc Environmental Science
                    </a>
                  </li>
                </ul>
                <h3 id="h_9703187566761664872282765">
                  <strong>Diploma Courses</strong>
                </h3>
                <p>
                  Following high school graduation, candidates have access to
                  a number of courses that can be taken to earn diplomas. The
                  candidate can enrol in a variety of science stream courses
                  after 12th including a diploma in yoga, a food and nutrition
                  diploma, and a computer science diploma. For those looking
                  for short-term, professionally oriented courses after
                  receiving their bachelors degree, post-graduate diploma
                  programmes are an option.&nbsp; Below are the diploma and
                  postgraduate diploma for scene courses:
                </p>
                <ul>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-food-production-course">
                      Diploma in Food Production
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-naturopathy-course">
                      Diploma in Naturopathy
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-yoga-course">
                      Diploma in Yoga
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-diabetology-course">
                      Diploma in Diabetology
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-computer-science-course">
                      Diploma in Computer Science
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-nautical-science-course">
                      Diploma in Nautical Science
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/diploma-in-library-and-information-science-dlis-course">
                      Diploma in Library and Information Science
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>Diploma in Food Science</li>
                  <li style={{ fontWeight: 400 }}>Diploma in Aquaculture</li>
                  <li style={{ fontWeight: 400 }}>
                    PG Diploma in Bioinformatics&nbsp;
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    PG Diploma in Clinical Nutrition and Dietetics&nbsp;
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    PG Diploma in Forensic Science&nbsp;
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    PG Diploma in Plant Tissue Culture
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    PG Diploma in Environmental Science
                  </li>
                </ul>
                <h3 id="h_6185585348821664872287292">
                  <strong>Certification Courses</strong>
                </h3>
                <p>
                  Science certificate courses are also available. There are
                  numerous certifications available in the fields of yoga,
                  cosmetology, food and nutrition, etc. These are short-term
                  science courses that teach the students the basics. The
                  courses are basically professional in nature. Here is list
                  of professional courses in science which can be pursued
                  online or offline:
                </p>
                <p>
                  <strong>Offline Courses:</strong>
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Food And Nutrition
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Nutrition
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Fashion Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Certificate in Cosmetology
                  </li>
                </ul>
                <p>
                  <strong>Online Courses:&nbsp;</strong>
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>Data Science</li>
                  <li style={{ fontWeight: 400 }}>
                    Physics - Kinematics for High School and AP Physics 1
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Essentials of Nutrition &amp; Food
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Introduction to Bioelectricity
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    Becoming Aquaculture Expert (Part 1)
                  </li>
                </ul>
                <h3 id="h_70006853310871664872292048">
                  <strong>Doctorate Courses</strong>
                </h3>
                <p>
                  After graduation, science majors can enrol in doctoral
                  degree programmes. Food science, nutrition, agriculture, and
                  many other fields are among them. Below is a list of the
                  doctorate courses available for candidates to pursue:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/phd-chemistry-course">
                      PhD in Chemistry
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/phd-physics-course">
                      PhD in Physics
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/phd-botany-course">
                      PhD in Botany
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/phd-biology-course">
                      PhD in Biology
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/phd-biotechnology-course">
                      PhD in Biotechnology
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/phd-biochemistry-course">
                      PhD in Biochemistry
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/phd-computer-science-course">
                      PhD in Computer Science
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/phd-mathematics-course">
                      PhD in Mathematics
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>PhD in Zoology</li>
                  <li style={{ fontWeight: 400 }}>
                    PhD in Life Science&nbsp;
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    PhD in Organic Chemistry
                  </li>
                </ul>
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
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/articles/list-of-science-courses-after-10th">
                            Best Courses After 10th in Science
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/articles/best-courses-after-12th-science">
                            Best Courses After 12th Science
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_8953604515001664869301555">
                  <strong>Eligibility for Science Courses</strong>
                </h2>
                <p>
                  An individual may be qualified for science stream courses
                  depending on the course type to which they are applying. To
                  enrol in undergraduate programmes, students must have a
                  minimum GPA of 50% in their 10+2 from a recognised board
                  with PCBM. To be admitted to postgraduate programmes for
                  science courses, students must focus on their undergraduate
                  grades.
                </p>
                <p>
                  Nearly all students must take entrance exams in order to
                  enrol in prestigious colleges that offer science programmes.
                  Lets take a quick look at the science courses eligibility
                  criteria according to degrees:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <strong>Diploma</strong>: For Candidates wishing to pursue
                    a diploma, they can either enrol in the law course after
                    the 12th. They must secure 45% in the 12th graduate to be
                    qualified to pursue Diploma courses in law.&nbsp;
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <strong>Certificate</strong>: The certificate courses have
                    the same eligibility as a diploma. The candidate should’ve
                    passed at least 12th grade with a 45% minimum aggregate.
                    For working professionals too, the criteria are the same.
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <strong>Undergraduate</strong>: Students must sit for
                    entrance examinations conducted by the centre, state or
                    university to qualify for science courses. Apart from
                    this, they should meet the qualifying requirements set by
                    the universities and colleges.
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <strong>Postgraduate</strong>: A candidate wishing for pg
                    science courses must have performed well in the
                    undergraduate course. They must also qualify for the
                    entrance examination to be able to pursue a PG
                    course.&nbsp;
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <strong>Doctorate</strong>: Students must qualify for the
                    national entrance examination to be able to sit for a PhD
                    course. They also should be able to secure a minimum of
                    50% in their postgraduate course.&nbsp;
                  </li>
                </ul>
                <h2 id="h_5201986727071664869306428">
                  <strong>Science Courses Admission</strong>
                </h2>
                <p>
                  Admission to science courses can be obtained through
                  entrance exams or merit-based selection. The universities
                  that have been selected/opted for may request that
                  candidates for the science degree submit their scores from
                  the pertinent entrance exam boards. Both offline and online
                  admissions applications are available to students.
                </p>
                <p>
                  Listed below are the admission links to the most popular
                  science colleges in India:
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
                          <a href="https://www.getmyuni.com/college/government-holkar-science-college-ghsc-indore">
                            Government Holkar Science College
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/government-holkar-science-college-ghsc-indore/admission">
                            Government Holkar Science College Admission
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
                          <a href="https://www.getmyuni.com/college/baba-farid-university-of-health-sciences-bfuohs-faridkot">
                            Baba Farid University of Health Science
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/baba-farid-university-of-health-sciences-bfuohs-faridkot/admission">
                            Baba Farid University of Health Sciences Admission
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
                          <a href="https://www.getmyuni.com/college/indian-institute-of-science-iis-bangalore">
                            IISc Bangalore
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/indian-institute-of-science-iis-bangalore/admission">
                            IISc Bangalore Admission
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
                          <a href="https://www.getmyuni.com/college/birla-institute-of-technology-and-science-bits-pilani">
                            BITS Pilani
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/birla-institute-of-technology-and-science-bits-pilani/admission">
                            BITS Pilani Admission
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
                          <a href="https://www.getmyuni.com/college/kaloji-narayana-rao-university-of-heath-science">
                            Kaloji Narayana Rao University of Health Science
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/kaloji-narayana-rao-university-of-heath-science/admission">
                            Kaloji Narayana Rao University of Health Science
                            Admission
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
                          <a href="https://www.getmyuni.com/college/rajasthan-university-of-health-sciences-ruhs-jaipur">
                            RUHS
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/rajasthan-university-of-health-sciences-ruhs-jaipur/admission">
                            RUHS Admission
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
                          <a href="https://www.getmyuni.com/college/sri-krishna-arts-and-science-college-skasc-coimbatore">
                            Sri Krishna Arts and Science College
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/sri-krishna-arts-and-science-college-skasc-coimbatore/admission">
                            Sri Krishna Arts and Science College Admission
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
                          <a href="https://www.getmyuni.com/college/tata-institute-of-social-sciences-tiss-mumbai">
                            TISS Mumbai
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/tata-institute-of-social-sciences-tiss-mumbai/admission">
                            TISS Mumbai Admission
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  For information on the online application process, students
                  must visit the colleges official websites. For offline
                  methods, they would need to visit the colleges admission
                  office in person.
                </p>
                <h2 id="h_5439765459131664869311137">
                  <strong>Science Courses Entrance Exam</strong>
                </h2>
                <p>
                  Entrance exams have a significant impact on the final merit
                  list of applicants selected for admission to colleges.
                  Entrance exams are used as a screening tool by colleges to
                  determine whether applicants are a good fit for the
                  programme.
                </p>
                <p>
                  At the college, state, and federal levels, these exams are
                  administered. Students must therefore thoroughly research
                  the appropriate exam before enrolling in all science
                  courses.
                </p>
                <p>
                  The following is a list of some of the best exams for
                  admission to various science programmes in India according
                  to their degree:
                </p>
                <p>
                  <strong>Undergraduate Entrance Exams</strong>
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/jee-main">
                      JEE MAIN
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/ts-eamcet">
                      TS EAMCET
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/ap-eamcet">
                      AP EAMCET&nbsp;
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/ipu-cet">
                      IPU CET
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/jnuee">JNUEEE</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/ini-cet">
                      INI CET
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/suat">SUAT</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/duet">DUET</a>
                  </li>
                  <li>JIPMER</li>
                  <li>CET&nbsp;</li>
                </ul>
                <p>
                  <strong>Postgraduate Entrance Exams</strong>
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/iit-jam">
                      IIT JAM&nbsp;
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/icar-aieea">
                      ICAR AIEEA
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/mcaer-pg-cet">
                      MCAER CET
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/nest">NEST</a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/jest">JEST</a>
                  </li>
                </ul>
                <p>
                  <strong>PhD Entrance Exams</strong>
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/exams/ugc-net">
                      UGC NET
                    </a>
                  </li>
                  <li>
                    <a href="https://www.getmyuni.com/exams/icmr-jrf">
                      ICMR JRF
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    <a href="https://www.getmyuni.com/scholarships/dbt-jrf-fellowship">
                      DBT JRF
                    </a>
                  </li>
                  <li style={{ fontWeight: 400 }}>TIRF</li>
                  <li>NCBS</li>
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
                          <a href="https://www.getmyuni.com/articles/entrance-exams-after-12th-science">
                            Entrance Exams After 12th Science
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/exams/science-exams-in-india">
                            Science Exams in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_83187584011181664869315815">
                  <strong>Types Of Science Courses (Branches)</strong>
                </h2>
                <p>
                  Choosing a specific field can be difficult because science
                  courses can cover a wide range of topics. The main objective
                  of science streams courses is to draft, design, and
                  implement new concepts for machines, structures, and
                  devices. The nation as a whole enjoys science programmes
                  very much because of their variety of uses. The science
                  course fees also vary according to the universities and
                  colleges.
                </p>
                <p>
                  All science courses are regarded as lucrative fields for
                  school graduates to study because math and science are
                  stressed, and candidates can anticipate finding a
                  well-paying job in both the public and private sectors after
                  graduation. Lets examine a few different courses in the
                  science field:
                </p>
                <h3>
                  <strong>Computer Science Courses</strong>
                </h3>
                <p>
                  Computer science is the study of computer networks,
                  operating systems and programming languages. The importance
                  of computer science has risen over the years due to the
                  development of IT sectors in the country. Below mentioned is
                  the computer science course fee and duration:
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
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Duration</strong>
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Average Fees (INR)</strong>
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
                          <a href="https://www.getmyuni.com/diploma-in-computer-science-course">
                            Diploma in Computer Science
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 Years
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          13,500 - 57,000 PA
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
                          <a href="https://www.getmyuni.com/bsc-computer-science-course">
                            B.Sc Computer Science
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 Years
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          10,000 - 1 LPA
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
                          Certificate in Computer Science
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          6 months to 1 year
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          10,000-50,000 PA
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
                          PG Diploma in Computer Science
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          1 year
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          70,000- 1.1 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  The demand for computer science graduates has also increased
                  with the advancing technology. There are many B.Sc Computer
                  science colleges in India that the students can choose to
                  study from.
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
                          <a href="https://www.getmyuni.com/bsc-computer-science-colleges">
                            Top BSc Computer Science Colleges in India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/msc-computer-science-colleges">
                            Top MSc Computer Science Colleges in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>Forensic Science Courses</strong>
                </h3>
                <p>
                  Forensic Science Courses is the branch of science that use
                  scientific methods to investigate or discover any source of
                  evidence. It covers a wide variety of areas in science and
                  technology, including biology, chemistry, physics,
                  psychology, social sciences, and so on. Below mentioned is
                  the Forensic science course fee and duration:
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
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          <strong>Duration</strong>
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          <strong>Average Fees (INR)</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/bsc-forensic-science-course">
                            B.Sc in Forensic Science
                          </a>
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          3 Years
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          10,000 - 1 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/msc-forensic-sciences-course">
                            M.Sc in Forensic Science
                          </a>
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          2 Years
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          10,000 - 2 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          Certificate in Forensic science
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          6 months
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          2,000 - 45,000 PA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Forensic Science is that one career you should go for if you
                  have a passion for solving or investigating crimes as it is
                  an interesting and adventurous domain to opt for.
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
                          <a href="https://www.getmyuni.com/articles/forensic-science-courses-after-12th">
                            Forensic Science Courses After 12th
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2152%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/forensic-science-jobs">
                            Popular Jobs in Forensic Science
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>Data Science Courses</strong>
                </h3>
                <p>
                  One of the most pursued courses in the field of science
                  after the computer is Data. While a Diploma aims at
                  imparting candidates with basic knowledge and technical
                  skills, an undergraduate degree is more focused on the
                  in-depth study of big data corporations, technical output
                  and tabulation. One can also go for certification to develop
                  their skills in the IT industry.
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
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Duration</strong>
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Average Fees (INR)</strong>
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
                          <a href="https://www.getmyuni.com/bsc-data-science-course">
                            B.Sc in Data Science
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 Years
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          10,000 - 1 LPA
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
                          <a href="https://www.getmyuni.com/msc-data-science-course">
                            M.Sc Data Science
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2 Years
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          1.7 - 3.5 LPA
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
                          Certificate in Data Science
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          6 months to 1 year
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          10,000-50,000 PA
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
                          PG Diploma in Data Science
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          1 year
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          70,000- 1.1 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  The Data Science subjects deals with knowledge about big
                  data corporations, tabulation and coding. There are many
                  B.Sc Data science colleges in India that the students can
                  choose to study from.
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
                          <a href="https://www.getmyuni.com/bsc-data-science-colleges">
                            Top BSc Data Science Colleges in India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/msc-data-science-colleges">
                            Top MSc Data Science Colleges in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>Home Science Courses</strong>
                </h3>
                <p>
                  Home Science deals with the idea and implementation of home
                  furnishing, modelling and designing everything related to
                  households. The course can be pursued as a diploma for
                  undergraduate and postgraduate studies. Below mentioned is
                  the Home science course fee and duration:
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
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          <strong>Duration</strong>
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          <strong>Average Fees (INR)</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/bsc-home-science-course">
                            B.Sc in Home Science
                          </a>
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          3 Years
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          9,000 - 1.8 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/msc-home-science-course">
                            M.Sc Home Science
                          </a>
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          2 Years
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          2 - 10 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          Diploma in Home Science
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          1 year
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          10,000 - 50,000 PA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          PG Diploma in Home Science Management
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          1 year
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          70,000- 1.1 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  &nbsp;The Home Science subjects touches on various aspects
                  of interior design, food and nutrition, fashion and design.
                  There are many B.Sc Home science colleges in India that the
                  students can choose to study from.
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
                          Home Science Courses After 12th
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/bsc-home-science-colleges">
                            Top BSc Home Science Colleges in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>Agricultural Science Courses</strong>
                </h3>
                <p>
                  The main focus of the subject is to introduce students to
                  the agricultural economy, technologies in agriculture,
                  methods and procedures, advancement in agriculture and
                  research. There are specializations in which students can
                  pursue diplomas in subjects such as horticulture,
                  sericulture, and soil conservation to bachelors in
                  agriculture. Below mentioned are the agricultural science
                  course fee and duration:
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
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Courses</strong>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Duration</strong>
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <strong>Average Fees (INR)</strong>
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
                          <a href="https://www.getmyuni.com/diploma-in-horticulture-course">
                            Diploma in Horticulture
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2 years
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          50,000 - 1.5 LPA
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
                          <a href="https://www.getmyuni.com/diploma-in-agriculture-course">
                            Diploma in Agriculture
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2 Years
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          50,000 - 1.5 LPA
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
                          <a href="https://www.getmyuni.com/bsc-agriculture-course">
                            B.Sc in Agriculture
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          4 Years
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2 - 2.5 LPA
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
                          <a href="https://www.getmyuni.com/msc-agriculture-course">
                            M.Sc Agriculture
                          </a>
                        </td>
                        <td
                          style={{
                            width: "32.6385%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          2 years
                        </td>
                        <td
                          style={{
                            width: "32.6393%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          50,000 - 1.5 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  After completion of a bachelor’s, higher studies are
                  available in masters and doctorate degrees. Colleges such as
                  BHU, OPJS University, Annamalai University, etc.
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
                          <a href="https://www.getmyuni.com/bsc-agriculture-colleges">
                            Top BSc Agriculture Colleges in India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/msc-agriculture-colleges">
                            Top MSc Agriculture Colleges in India
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  <strong>Yoga Science Courses</strong>
                </h3>
                <p>
                  Yoga Science is one of the recent developments in the field
                  of science. Although the practice of yoga has been present
                  for centuries, its incorporation as a study has been fairly
                  recent. This is one of the most pursued certification
                  courses in the country, although undergraduate study
                  provides a field for in-depth study of yoga, its techniques
                  and positions. Below mentioned is the Yoga science course
                  fee and duration:
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
                          Courses
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          Duration
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          Average Fees (INR)
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/diploma-in-yoga-course">
                            Diploma in Yoga
                          </a>
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          1 Year
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          2,000 - 45,000 PA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          Certificate in Yoga
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          6 months
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          2,000 - 45,000 PA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          B.Sc in Yoga
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          3 Years
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          10,000 - 1 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          M.Sc in Yoga
                        </td>
                        <td
                          style={{ width: "32.6385%", textAlign: "center" }}
                        >
                          2 Years
                        </td>
                        <td
                          style={{ width: "32.6393%", textAlign: "center" }}
                        >
                          10,000 - 2 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_30184911913771664869322790">
                  <strong>Top 10 Science Courses in Demand</strong>
                </h2>
                <p>
                  Since science is a popular stream in India, there is a high
                  demand for the courses offered by the stream in the country.
                  The popular courses range from diploma to postgraduate to
                  even doctorate. The science courses in college are offered
                  under various specializations for the candidate to choose
                  based on their interest and qualifications.
                </p>
                <p>
                  Here are some of the best science courses in India that are
                  in demand:
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
                          <a href="https://www.getmyuni.com/bsc-mathematics-course">
                            B.Sc Mathematics
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 years
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
                          <a href="https://www.getmyuni.com/bsc-physics-course">
                            B.Sc Physics
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 years
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
                          <a href="https://www.getmyuni.com/bsc-biotech-course">
                            B.Sc Biotechnology
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 years
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
                          <a href="https://www.getmyuni.com/bsc-zoology-course">
                            B.Sc Zoology
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 years
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
                          <a href="https://www.getmyuni.com/bsc-microbiology-course">
                            B.Sc Microbiology
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 years
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
                          <a href="https://www.getmyuni.com/bsc-chemistry-course">
                            B.Sc Chemistry
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 years
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
                          <a href="https://www.getmyuni.com/bsc-computer-science-course">
                            B.Sc Computer Science
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 years
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
                          <a href="https://www.getmyuni.com/bsc-botany-course">
                            B.Sc Botany
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 years
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
                          <a href="https://www.getmyuni.com/bsc-agriculture-course">
                            B.Sc Agriculture
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 years
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
                          <a href="https://www.getmyuni.com/bsc-biology-course">
                            B.Sc Biology
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          3 years
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  If students have chose PCM or PCMB, there are many career
                  and course choices available to them.
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
                          <a href="https://www.getmyuni.com/articles/list-of-science-pcm-courses-after-12th">
                            Courses After 12th Science PCM in India
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/courses-after-12th-science-pcmb">
                            Courses after 12th Science PCMB
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_25443904915801664869330670">
                  <strong>Science Courses Syllabus And Subjects</strong>
                </h2>
                <p>
                  Science and its related fields are studied with a lot of
                  emphasis in this course. The course covers many different
                  topics, such as testing, consulting, and research. The
                  incorporation of numerous research and design strategies.
                </p>
                <p>
                  The specific content and duration of the course will change
                  depending on the type, of course, the student chooses to
                  enrol in. For instance, a topic might not be covered as
                  thoroughly in an undergraduate or diploma course as it is in
                  a postgraduate course. There may be integrated science
                  courses for certain subjects and syllabi.
                </p>
                <p>
                  In science courses, students may study the following general
                  topics:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>Communication Science</li>
                  <li style={{ fontWeight: 400 }}>Agricultural Dynamics</li>
                  <li style={{ fontWeight: 400 }}>Solid state Physics</li>
                  <li style={{ fontWeight: 400 }}>
                    Hardware Application Design
                  </li>
                  <li style={{ fontWeight: 400 }}>
                    C++ Programming languages
                  </li>
                  <li style={{ fontWeight: 400 }}>Organic chemistry</li>
                  <li style={{ fontWeight: 400 }}>Environmental science</li>
                  <li style={{ fontWeight: 400 }}>Advanced Bioscience</li>
                  <li style={{ fontWeight: 400 }}>classNameical Mathematics</li>
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
                          <a href="https://www.getmyuni.com/bsc-syllabus-subjects">
                            B.Sc Subjects and Syllabus
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/msc-syllabus-subjects">
                            M.Sc Syllabus and Subjects
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_13542979117821664869343890">
                  <strong>Top Science Colleges in India</strong>
                </h2>
                <p>
                  Science courses in colleges in India are in abundance from
                  private colleges to government colleges. The country is host
                  to many prestigious universities that produced notable
                  alumni in the field of scientific research and development.
                  The science course fee structure of the colleges is subject
                  to the course candidates wish to pursue in the field of
                  science.
                </p>
                <p>
                  Here is a list of colleges in India offering science
                  courses.
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
                          <strong>Colleges</strong>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
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
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          <a href="https://www.getmyuni.com/college/hindu-college-delhi-university">
                            Hindu College
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          61,380 PA
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
                          <a href="https://www.getmyuni.com/college/madras-christian-college-mcc-chennai">
                            Madras Christain College
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          88,860 PA
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
                          <a href="https://www.getmyuni.com/college/loyola-college-chennai">
                            Loyola College
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          1.4 LPA
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
                          <a href="https://www.getmyuni.com/college/miranda-house-delhi-university">
                            Miranda House
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          68,910 PA
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
                          <a href="https://www.getmyuni.com/college/christ-university-bangalore">
                            Christ University
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
                          <a href="https://www.getmyuni.com/college/hans-raj-college-delhi-university">
                            Hansraj College
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          87,740 PA
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
                          <a href="https://www.getmyuni.com/college/daulat-ram-college-delhi-university">
                            Daulat Ram College
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          58,620 PA
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
                          <a href="https://www.getmyuni.com/college/lady-shriram-college-lsr-new-delhi">
                            Lady Shri Ram College
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          62,100 PA
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
                          <a href="https://www.getmyuni.com/college/deen-dayal-upadhyaya-college-delhi-university">
                            Deen Dayal Upadhyaya College
                          </a>
                        </td>
                        <td
                          style={{
                            width: "49.2928%",
                            height: "22.3875px",
                            textAlign: "center",
                          }}
                        >
                          58,300 PA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/college/women-s-christian-college-wcc-chennai">
                            Women’s Christain College
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
                          <a href="https://www.getmyuni.com/college/st-joseph-s-college-sjc-bangalore">
                            SJC
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          2 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_51712905319831664869350984">
                  <strong>Science Courses Jobs and Salaries</strong>
                </h2>
                <p>
                  The career options available to students who enrol in
                  science programmes in India are extremely diverse. They are
                  employed by both the public and private sectors. When
                  developing the curriculum, the needs of the industry are
                  taken into account. The most common job titles and their
                  typical salaries are listed below:
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
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          <strong>Job Role</strong>
                        </td>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          <strong>Average Salary (INR)</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          Assistant Researcher
                        </td>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          3 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          Jr. Program Developer
                        </td>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          3.5 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          Researcher
                        </td>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          6 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          Clinical Dietitian
                        </td>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          4.5 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          Research Analyst
                        </td>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          5 LPA
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          Data Scientist
                        </td>
                        <td
                          style={{ width: "49.1668%", textAlign: "center" }}
                        >
                          8 LPA
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Science is advancing at a rapid pace, and many of these jobs
                  are expected to grow faster in the near future. A career in
                  science can boast some consistently high-paying salaries.
                  Using an associate degree, bachelors degree or PhD in
                  science can lead to a lucrative career.
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
                          <a href="https://www.getmyuni.com/articles/high-salary-courses-after-12th-science">
                            High Salary Courses After 12th Science
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/forensic-science-jobs">
                            Popular Jobs in Forensic Science
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_49642070121831664869356878">
                  <strong>Scope of Science in India</strong>
                </h2>
                <p>
                  Science is fundamental to daily life in the vast majority of
                  developing nations. Science majors need not worry about the
                  breadth and depth of the course because they will be exposed
                  to a variety of career options on a constant basis.
                </p>
                <p>
                  Because they have a thorough understanding of mechanics,
                  structure, design, and implementation in addition to a
                  variety of practical skills and work experience, graduates
                  with science degrees are highly sought after by graduate
                  employers and graduate training programmes.
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
                          <a href="https://www.getmyuni.com/articles/career-options-after-12th-science-pcm">
                            Career Options after 12th Science PCM
                          </a>
                        </td>
                        <td
                          style={{ width: "49.2928%", textAlign: "center" }}
                        >
                          <a href="https://www.getmyuni.com/articles/career-options-after-12th-science-pcm-other-than-engineering">
                            Career Options after 12th Science PCM other than
                            Engineering
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 id="h_12121188623821664869362536">
                  <strong>Top Recruiters</strong>
                </h2>
                <p>
                  Science courses in India provide students with ample job
                  opportunities with a very bright future. Listed below are
                  some of the top recruiters in India.
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>
                    Government&nbsp; of India
                  </li>
                  <li style={{ fontWeight: 400 }}>ISRO</li>
                  <li style={{ fontWeight: 400 }}>NASA</li>
                  <li style={{ fontWeight: 400 }}>SpaceX</li>
                  <li style={{ fontWeight: 400 }}>Infosys</li>
                  <li style={{ fontWeight: 400 }}>Cipla</li>
                  <li style={{ fontWeight: 400 }}>Capgemini</li>
                  <li style={{ fontWeight: 400 }}>HCL Technologies</li>
                  <li style={{ fontWeight: 400 }}>
                    Bhabha Atomic Research Center
                  </li>
                </ul>
                <h2 id="h_52454189126141664869371840">
                  <strong>Skills Required in Science Courses</strong>
                </h2>
                <p>
                  The field of science courses calls for a certain set of
                  talents. Candidates will benefit from these courses in terms
                  of personality development and career success. Professional
                  ethics and a better working atmosphere will also be
                  introduced. The following are some necessary skills for
                  science courses:
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }}>Explaining abilities</li>
                  <li style={{ fontWeight: 400 }}>Skills in Communication</li>
                  <li style={{ fontWeight: 400 }}>
                    An acute sense of detail
                  </li>
                  <li style={{ fontWeight: 400 }}>Observational abilities</li>
                  <li style={{ fontWeight: 400 }}>classNameifying</li>
                  <li style={{ fontWeight: 400 }}>Quantifying</li>
                  <li style={{ fontWeight: 400 }}>Interpreting</li>
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
      </div>
    </div>
  </div>
  );
};

export default Sciences;
