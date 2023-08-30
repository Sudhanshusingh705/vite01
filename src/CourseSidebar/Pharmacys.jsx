import { useState } from "react";
import "./Pharmacys.css";
import "../components/TopcourseSidebar/CourseSidebar.css";

const Pharmacys = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h2
        style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
      >
        Top Pharmacy Course in India 2023
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
              <h1>Pharmacy Full Course </h1>
              <h2>
                Pharmacy Full Course 2023 National, State &amp; University Level
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
                    Pharmacy courses introduce aspirants to subjects such as
                    medicine, chemistry, biology and anatomy. During the
                    Pharmacy course duration, students learn about safe and
                    effective use of medicine in the healthcare industry.
                    According to IBEF, India is the largest provider of drugs
                    across the globe. The Indian pharmaceutical industry meets
                    more than half of the global demand for various vaccines,
                    40% of generic demand in the United States, and 25% of total
                    medicine in the United Kingdom.
                  </p>
                  <p>
                    There are plenty of Pharmacy courses in India that the
                    students can study. These courses aim to ensure that the
                    students have access to all the vital information they need
                    to build a rewarding and successful career for themselves.
                    There are many benefits of Pharmacy course degree. The most
                    prominent of them is the rewarding and successful career
                    students can build upon completion.
                  </p>
                  <p>
                    Students planning to pursue a career as a pharmacist can
                    pursue Pharmacy degree courses at the undergraduate,
                    postgraduate and doctoral levels. B Pharmacy, M Pharmacy,
                    and Diploma in Pharmacy are popular Pharmacy Courses After
                    12th.&nbsp;
                  </p>
                  <p>
                    <strong>Table Of Contents:</strong>
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_36398608021601664876056596">
                        Pharmacy Courses List
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_70281817423901664876061488">
                        Eligibility for Pharmacy Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_68517542826081664876066417">Admission</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_13951256528311664876072269">Entrance Exams</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_99902237230531664876077609">
                        Types of Pharmacy Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_2628766632801664876084340">
                        Top 10 Pharmacy Courses in Demand
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_19646401035001664876093543">
                        Syllabus and Subjects
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_1718520837191664876099538">
                        Top Pharmacy Colleges in India
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_84977520739371664876105762">
                        Jobs and Salaries
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_3066420241541664876113229">
                        Scope of Pharmacy in India
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_79818938545921664876126342">Top Recruiters</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_928953748131664876131462">Skills Required</a>
                    </li>
                  </ul>
                  <h2 id="h_36398608021601664876056596">
                    <strong>Pharmacy Courses List</strong>
                  </h2>
                  <p>
                    The Pharmacy course details can be accessed by the students
                    by visiting the college’s official websites and research
                    about the specific course. The Pharmacy course duration and
                    fees for the students depend on the course that the students
                    choose to apply for. Students can apply for Pharmacy course
                    after 10th and 12th, under graduation or post-graduation
                    based on the Pharmacy course qualification they are applying
                    for.
                  </p>
                  <p>
                    Given below are different types of Pharmacy courses that the
                    students can pursue:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_83386567550161664876138146">
                        Undergraduate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_55455251552291664876143323">
                        Postgraduate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_92712281354411664876148698">
                        Diploma/PG Diploma Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_45532497956521664876154860">
                        Certificate Courses
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="#h_14463648558621664876160721">
                        Doctorate Courses
                      </a>
                    </li>
                  </ul>
                  <h3 id="h_83386567550161664876138146">
                    <strong>Undergraduate Pharmacy Courses</strong>
                  </h3>
                  <p>
                    Pharmacy course list after 12th is very vast and promising
                    for the students who are interested in pursuing a career in
                    the field of pharmacy. Generally, the duration of a Pharmacy
                    course at an undergraduate level tends to be four years.
                    Some of the Pharmacy courses after 12th include:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bpharm-course">
                        B.Pharma
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>B.Pharm (Hons)</li>
                    <li style={{ fontWeight: 400 }}>
                      B.Pharm Pharmaceutical Chemistry
                    </li>
                    <li style={{ fontWeight: 400 }}>B.Pharm Pharmacognosy</li>
                    <li style={{ fontWeight: 400 }}>
                      Bachelor of Ayurvedic Pharmacy
                    </li>
                    <li style={{ fontWeight: 400 }}>B.Pharm Pharmaceutics</li>
                    <li style={{ fontWeight: 400 }}>B.Pharm + MBA</li>
                  </ul>
                  <h3 id="h_55455251552291664876143323">
                    <strong>Postgraduate Pharmacy Courses</strong>
                  </h3>
                  <p>
                    There are many Postgraduate Pharmacy courses in India that
                    can be pursued by the students. These courses will enable
                    students to learn about Pharmaceutical sciences in a more
                    indepth manner. Due to the detailed nature of these Pharmacy
                    courses after graduation students are presented with a wide
                    range of career paths. Given below are some of the popular
                    postgraduate courses that the students can enrol in:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mpharm-course">
                        M.Pharm
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mpharm-pharmacology-course">
                        M.Pharm Pharmacology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mpharm-pharmaceutics-course">
                        M.Pharm Pharmaceutics
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mpharm-pharmaceutical-chemistry-course">
                        M.Pharm Pharmaceutical Chemistry
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mpharm-quality-assurance-course">
                        M.Pharm Quality Assurance
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mpharm-pharmaceutical-analysis-course">
                        M.Pharm Pharmaceutical Analysis
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mpharm-pharmacognosy-course">
                        M.Pharm Pharmacognosy
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/msc-pharmacology-course">
                        M.Sc Pharmacology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/msc-pharmaceutical-chemistry-course">
                        M.Sc Pharmaceutical Chemistry
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      M.Pharm Clinical Pharmacy
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      M.Pharm Industrial Pharmacy
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      M.Pharm Biopharmaceutics
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      M.Pharm Biopharmaceutics &amp; Pharmacokinetics
                    </li>
                    <li style={{ fontWeight: 400 }}>M.Pharm Biotechnology</li>
                    <li style={{ fontWeight: 400 }}>
                      M.Pharm Medicinal Chemistry
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      M.Pharm Drug Discovery and Drug Development
                    </li>
                    <li style={{ fontWeight: 400 }}>M.Pharm Cosmeceuticals</li>
                    <li style={{ fontWeight: 400 }}>
                      M.Pharm Pharmaceutical Market and Management
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      MSc Clinical Research and Pharmacovigilance
                    </li>
                  </ul>
                  <h3 id="h_92712281354411664876148698">
                    <strong>Diploma/PG Diploma Pharmacy Courses</strong>
                  </h3>
                  <p>
                    There are also many diploma courses in Pharmacy that the
                    students can pursue. Pharmacy courses from IGNOU have become
                    popular over the years owing to the demand in the course.
                    Diploma courses tend to be short, career focused courses
                    that help the students enhance their knowledge in the field.
                    Some of the best course in Pharmacy that are diplomas are
                    listed below:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/dpharma-course">
                        D.Pharma
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-ayurvedic-pharmacy-course">
                        Diploma in Ayurvedic Pharmacy
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Diploma in Pharmaceutical Marketing
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Diploma in Drug Store Management
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Diploma in Clinical Research and Pharmacovigilance
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Drug Store Management
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Principles of Clinical Pharmacology
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Pharmaceutical Management
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Pharmaceutical Quality Assurance
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Pharmaceutical Chemistry
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Herbal Products
                    </li>
                  </ul>
                  <h3 id="h_45532497956521664876154860">
                    <strong>Certificate Pharmacy Courses</strong>
                  </h3>
                  <p>
                    There are many Pharmacy certificate courses that the
                    students can enrol in. The primary purpose of a certificate
                    course is to help the students gain in-depth knowledge in a
                    specialised field in a short period of time. The certificate
                    courses are often provided by industry relevant employers or
                    educational institutions. Given below are some of the top
                    certificate courses in Pharmacy that the students can take:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      Industry Certificate in Pharma Product Management&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Industry Certificate in Pharmaceutical Technology
                      Transfer&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Industry Certificate in Pharmaceutical Packaging&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Industry Certificate in Pharmaceutical Process
                      Engineering&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Industry Certificate in Biopharmaceutical Technology&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Industry Certificate in Pharmacovigilance&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Industry Certificate in Pharmaceutical Chemistry&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Industry Certificate in Pharmaceutical Formulation and
                      Entrepreneurship&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Industry Certificate in Pharma Sales and Marketing
                      Management&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Professional Certificate In Pharmacovigilance
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Safety and Pharmacovigilance Certificate Program
                    </li>
                  </ul>
                  <h3 id="h_14463648558621664876160721">
                    <strong>Doctorate Pharmacy Courses</strong>
                  </h3>
                  <p>
                    Students seeking careers in research and education can
                    choose from among the several PhD or Doctorate programmes
                    offered by universities. Doctoral programs are research
                    oriented courses that enable students to learn about the
                    existing research in a field and then further develop in the
                    same field. Some of the popular doctorate courses in
                    Pharmacy are listed below:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pharmd-course">
                        Pharm.D
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/phd-pharmacology-course">
                        Ph.D Pharmacology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/phd-pharmacy-course">
                        Ph.D Pharmacy
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>Ph.D Pharmacognosy</li>
                    <li style={{ fontWeight: 400 }}>
                      Ph.D Pharmaceutical Biotechnology
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Ph.D Pharmaceutical Chemistry
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Ph.D Pharmaceutical Sciences
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Ph.D Pharmaceutical Medicine
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Ph.D Pharmacognosy &amp; Phytochemistry
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Ph.D Phytopharmacy &amp; Phytomedicine
                    </li>
                  </ul>
                  <h2 id="h_70281817423901664876061488">
                    <strong>Eligibility for Pharmacy Courses</strong>
                  </h2>
                  <p>
                    The Pharmacy course eligibility depends on the type of
                    course that the students are applying at. Undergraduate
                    courses would put more emphasis on the student’s 10+2 marks
                    whereas, the postgraduate courses would focus on the
                    undergraduate marks.&nbsp;
                  </p>
                  <p>
                    Hence for Pharmacy course admission, it is vital that the
                    students research about the eligibility criteria from a
                    reliable source. Almost all Pharmacy courses require
                    students to give entrance examinations to get admitted to
                    top colleges.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      Diploma in Pharmacy: Candidates should have completed
                      className 10+2 with science subjects i.e. Physics, Chemistry,
                      Biology, and Mathematics.
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Bachelor in Pharmacy: Candidates must have passed className
                      10+2 from a recognized board and studied Physics,
                      Chemistry, Mathematics or Biology, and English subjects.
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Master of Pharmacy: Candidates who have a BPharm degree
                      with minimum qualifying marks as required from a pharmacy
                      college that is approved by the Pharmacy Council of India
                      (PCI).
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Doctor of Pharmacy: Candidates must have completed higher
                      education from any recognized board and studied Physics,
                      Chemistry with Mathematics or Biology as optional
                      subjects. Candidates with a diploma in pharmacy degree are
                      also eligible for the PharmD course.
                    </li>
                  </ul>
                  <h2 id="h_68517542826081664876066417">
                    <strong>Pharmacy Courses Admission</strong>
                  </h2>
                  <p>
                    Pharmacy course admission is possible by both entrance
                    examination and merit-based selection.&nbsp;
                  </p>
                  <p>
                    Candidates applying for the Pharmacy degree might have their
                    results from the respective entrance exams boards required
                    by the selected/opted universities. The students can avail
                    themselves of admissions through both online and offline
                    methods.
                  </p>
                  <p>
                    For the online method, students must enquire at the official
                    website of the colleges they are applying to. For offline
                    means, they would be required to visit the colleges
                    admission office in person.
                  </p>
                  <h2 id="h_13951256528311664876072269">
                    <strong>Pharmacy Courses Entrance Exams</strong>
                  </h2>
                  <p>
                    When applying for the Pharmacy course, it is vital that the
                    aspirants research about the entrance exams that are
                    conducted. Entrance exams play an important role in the
                    final merit list that is released by the students. These
                    Pharmacy course entrance exams are a screening process
                    through which the colleges can determine if the students
                    would be a right fit for the course.
                  </p>
                  <p>
                    Given below are some of the top exams that are conducted for
                    admissions to the different Pharmacy courses in India:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/bitsat">BITSAT</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/uptu">UPSEE</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/mah-cet">
                        MAH CET
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/wbjee">WBJEE</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/kcet">KCET</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ap-eamcet">
                        AP EAMCET
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ts-eamcet">
                        TS EAMCET
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/gujcet">GUJCET</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/gitam-got">
                        GITAM GOT
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/gcet">GCET</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/hpcet">HPCET</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ojee">OJEE</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/gpat">GPAT</a>
                    </li>
                  </ul>
                  <h2 id="h_99902237230531664876077609">
                    <strong>Types of Pharmacy Courses (Branches)</strong>
                  </h2>
                  <p>
                    Pharmacy is a broad and diverse subject of study, and hence
                    the students have scope to study about a wide range of
                    topics in it. The stream is concerned with medicine, human
                    body, anatomy and physiology and pharmacology. These broad
                    topics are further divided into several branches, that are
                    then divided into disciplines that the students can study
                    in.
                  </p>
                  <p>
                    Owing to the diversity and flexibility of the branches
                    presented to the students, graduates can expect to earn a
                    good salary upon completing the course.
                  </p>
                  <p>
                    Below are some of the popular fields under Pharmacy that can
                    help students decide what they want to pursue in their
                    careers.
                  </p>
                  <h3>
                    <strong>Ayurveda Pharmacy Courses</strong>
                  </h3>
                  <p>
                    There is a lot of scope in Ayurveda for the aspiring
                    pharmacists. These courses can be undertaken by the students
                    at Undergraduate level, postgraduate level and diploma
                    level. Some of the courses that can be pursued by the
                    students are given below:
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "97.8828%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "45.4095%" }}>
                            <p>Name of Course</p>
                          </td>
                          <td style={{ width: "39.4699%" }}>
                            <p>Average Fee Structure (INR)</p>
                          </td>
                          <td style={{ width: "15.1365%" }}>
                            <p>Duration</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "45.4095%" }}>
                            <p>BPharm Ayurveda</p>
                          </td>
                          <td style={{ width: "39.4699%" }}>
                            <p>50,000</p>
                          </td>
                          <td style={{ width: "15.1365%" }}>
                            <p>4 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "45.4095%" }}>
                            <p>MPharm Ayurveda</p>
                          </td>
                          <td style={{ width: "39.4699%" }}>
                            <p>2 Lakhs</p>
                          </td>
                          <td style={{ width: "15.1365%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "45.4095%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/diploma-in-ayurvedic-pharmacy-course">
                                Diploma in Ayurvedic Pharmacy
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "39.4699%" }}>
                            <p>15,000&nbsp;</p>
                          </td>
                          <td style={{ width: "15.1365%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>Homoeopathy</strong>{" "}
                    <strong>Pharmacy Courses</strong>
                  </h3>
                  <p>
                    There is a lot of scope in Homoeopathy for the aspiring
                    pharmacists. These courses can be undertaken by the students
                    at Undergraduate level, postgraduate level and diploma
                    level. Some of the courses that can be pursued by the
                    students are given below:
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "97.7741%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "40.3183%" }}>
                            <p>Name of Course</p>
                          </td>
                          <td style={{ width: "43.0461%" }}>
                            <p>Average Fee Structure (INR)</p>
                          </td>
                          <td style={{ width: "16.6401%" }}>
                            <p>Duration</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "40.3183%" }}>
                            <p>BPharm Homoeopathy</p>
                          </td>
                          <td style={{ width: "43.0461%" }}>
                            <p>50,000</p>
                          </td>
                          <td style={{ width: "16.6401%" }}>
                            <p>4 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "40.3183%" }}>
                            <p>Diploma in Homoeopathy</p>
                          </td>
                          <td style={{ width: "43.0461%" }}>
                            <p>2 Lakhs</p>
                          </td>
                          <td style={{ width: "16.6401%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "40.3183%" }}>
                            <p>MPharm Homoeopathy</p>
                          </td>
                          <td style={{ width: "43.0461%" }}>
                            <p>15,000&nbsp;</p>
                          </td>
                          <td style={{ width: "16.6401%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>Veterinary Pharmacy Courses</strong>
                  </h3>
                  <p>
                    There is a lot of scope in Veterinary Pharmacy for the
                    aspiring pharmacists. These courses can be undertaken by the
                    students at Undergraduate level, postgraduate level and
                    diploma level. Some of the courses that can be pursued by
                    the students are given below:
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "97.9372%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "45.5139%" }}>
                            <p>Name of Course</p>
                          </td>
                          <td style={{ width: "39.2032%" }}>
                            <p>Average Fee Structure (INR)</p>
                          </td>
                          <td style={{ width: "15.1076%" }}>
                            <p>Duration</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "45.5139%" }}>
                            <p>BPharm Veterinary Pharmacy</p>
                          </td>
                          <td style={{ width: "39.2032%" }}>
                            <p>50,000</p>
                          </td>
                          <td style={{ width: "15.1076%" }}>
                            <p>4 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "45.5139%" }}>
                            <p>Diploma in Veterinary Pharmacy</p>
                          </td>
                          <td style={{ width: "39.2032%" }}>
                            <p>2 Lakhs</p>
                          </td>
                          <td style={{ width: "15.1076%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "45.5139%" }}>
                            <p>MPharm Veterinary Pharmacy</p>
                          </td>
                          <td style={{ width: "39.2032%" }}>
                            <p>15,000&nbsp;</p>
                          </td>
                          <td style={{ width: "15.1076%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>Clinical Pharmacy Courses</strong>
                  </h3>
                  <p>
                    Clinical pharmacy is the branch of pharmacy in which
                    clinical pharmacists provide direct patient care that
                    optimises the use of medication and promotes health,
                    wellness, and disease prevention. Given below are the
                    Clinical Pharmacy Courses that the students can pursue:
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.046%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "43.2343%" }}>
                            <p>Name of Course</p>
                          </td>
                          <td style={{ width: "41.0427%" }}>
                            <p>Average Fee Structure (INR)</p>
                          </td>
                          <td style={{ width: "15.7397%" }}>
                            <p>Duration</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "43.2343%" }}>
                            <p>BPharm Clinical Pharmacy</p>
                          </td>
                          <td style={{ width: "41.0427%" }}>
                            <p>50,000</p>
                          </td>
                          <td style={{ width: "15.7397%" }}>
                            <p>4 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "43.2343%" }}>
                            <p>Diploma in Clinical Pharmacy</p>
                          </td>
                          <td style={{ width: "41.0427%" }}>
                            <p>2 Lakhs</p>
                          </td>
                          <td style={{ width: "15.7397%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "43.2343%" }}>
                            <p>MPharm Clinical Pharmacy</p>
                          </td>
                          <td style={{ width: "41.0427%" }}>
                            <p>15,000&nbsp;</p>
                          </td>
                          <td style={{ width: "15.7397%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3>
                    <strong>Pharmacy Technician Courses</strong>
                  </h3>
                  <p>
                    The Pharmacy Technician course is designed to equip students
                    to gain the scope of skills needed for the profession,
                    including, receiving, ordering, and managing inventory;
                    Preparing, dispensing, and compounding medications;
                    Interacting with patients and a variety of health care
                    providers.
                    <strong>
                      {" "}
                      There is only a diploma course provided in this stream.
                    </strong>
                  </p>
                  <h3>
                    <strong>Unani Pharmacy Courses</strong>
                  </h3>
                  <p>
                    <strong> Pharm Unani</strong>, short for Bachelor of
                    Pharmacy in Unani, is an undergraduate degree programme
                    focused on Yunani - Greek Medicine. It is the only course
                    available in the stream. This Course duration is 2 years
                    including three months practical training in Unani
                    dispensary/ Hospital/ Pharmacy/ Pharmaceutical Industry.
                  </p>
                  <h2 id="h_2628766632801664876084340">
                    <strong>Top 10 Pharmacy Courses in Demand</strong>
                  </h2>
                  <p>
                    Pharmacy courses can be pursued by the students at all
                    levels of education. They can decide to pursue it at
                    Diploma, Certificate, Undergraduate or Postgraduate level.
                    Given below are the top ten Pharmacy courses that are in
                    demand along with their duration.
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "97.9372%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>Duration</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>B.Pharm in Pharmaceutical Chemistry</p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>4 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>B.Pharm in Pharmacognosy</p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>4 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>Bachelor of Ayurvedic Pharmacy</p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>4 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>B.Pharm in Pharmaceutics</p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>4 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>
                              M.Sc in Clinical Research and Pharmacovigilance
                            </p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>M.Pharm in Clinical Pharmacy</p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>M.Pharm in Industrial Pharmacy</p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/msc-pharmacology-course">
                                M.Sc in Pharmacology
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/mpharm-pharmaceutics-course">
                                M.Pharm in Pharmaceutics
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "81.8763%" }}>
                            <p>M.Pharm in Biopharmaceutics</p>
                          </td>
                          <td style={{ width: "18.1431%" }}>
                            <p>2 Years</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_19646401035001664876093543">
                    <strong>Pharmacy Course Syllabus and Subjects</strong>
                  </h2>
                  <p>
                    The Pharmacy course syllabus is designed to ensure that the
                    students gain all the vital knowledge they need to get to
                    build a rewarding career path for themselves. Although the
                    detailed syllabus of every pharmacy course will vary a bit
                    as they are of different duration and value, they all
                    contain the important Pharmacy course subjects.
                  </p>
                  <p>
                    The curriculum integrates a variety of management, research
                    and scientific knowledge that will enable the students to
                    learn about concepts in detail.
                  </p>
                  <p>
                    Given below are some of the generic topics that the students
                    may be taught during their Pharmacy course education:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      Human Anatomy &amp; Physiology
                    </li>
                    <li style={{ fontWeight: 400 }}>Pharmaceutics</li>
                    <li style={{ fontWeight: 400 }}>Pharmacognosy</li>
                    <li style={{ fontWeight: 400 }}>Microbiology</li>
                    <li style={{ fontWeight: 400 }}>Hospital Pharmacy</li>
                    <li style={{ fontWeight: 400 }}>Immunology</li>
                    <li style={{ fontWeight: 400 }}>
                      Electronics &amp; Computer Science
                    </li>
                    <li style={{ fontWeight: 400 }}>Mathematics</li>
                    <li style={{ fontWeight: 400 }}>
                      Pharmaceutical Biotechnology
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Pharmaceutical Chemistry
                    </li>
                    <li style={{ fontWeight: 400 }}>Pharmacology</li>
                    <li style={{ fontWeight: 400 }}>Biochemistry</li>
                    <li style={{ fontWeight: 400 }}>
                      Pharmaceutical Engineering and Technology
                    </li>
                    <li style={{ fontWeight: 400 }}>Clinical Pharmacy</li>
                    <li style={{ fontWeight: 400 }}>Computational Chemistry</li>
                  </ul>
                  <h2 id="h_1718520837191664876099538">
                    <strong>Top Pharmacy Colleges in India</strong>
                  </h2>
                  <p>
                    Given below are the top colleges along with their Pharmacy
                    course fees in India:
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.2091%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>SI.No</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>College Name</p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>Fees (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>1</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/jss-college-of-pharmacy-jsscp-the-nilgiris">
                                JSS College of Pharmacy
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>2.8 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>2</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/bharati-vidyapeeth-university-poona-college-of-pharmacy-bvp-upcp-pune">
                                Poona College of Pharmacy
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>1.7 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>3</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/lm-college-of-pharmacy-ahmedabad">
                                LM College of Pharmacy
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>1.7 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>4</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/goa-college-of-pharmacy-gcp-panaji">
                                Goa College of Pharmacy
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>1 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>5</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/national-institute-of-pharmaceutical-education-and-research-niper-hyderabad">
                                National Institute of Pharmaceutical Education
                                and Research
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>1.8 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>6</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/institute-of-chemical-technology-ict-mumbai">
                                ICT, Mumbai
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>1.4 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>7</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/manipal-college-of-pharmaceutical-sciences-mcops-manipal">
                                Manipal College of Pharmaceutical Sciences
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>8.3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>8</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/bombay-college-of-pharmacy-bcp-mumbai">
                                Bombay College of Pharmacy
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>2.3 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>9</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/jamia-hamdard-university-new-delhi">
                                Hamdard University
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>1.5 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "9.12351%" }}>
                            <p>10</p>
                          </td>
                          <td style={{ width: "76.9474%" }}>
                            <p>Panjab University</p>
                          </td>
                          <td style={{ width: "13.9435%" }}>
                            <p>INR 15,000</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_84977520739371664876105762">
                    <strong>Pharmacy Course Jobs and Salaries</strong>
                  </h2>
                  <p>
                    The Pharmacy course job opportunities in India are very
                    rewarding and promising for the students. There is a high
                    demand for Pharmacists in the country and since the
                    education provided to the students is very industry
                    relevant, the Pharmacy course salary is also very attractive
                    for the aspiring pharmacists.
                  </p>
                  <p>
                    Listed below are some of the popular job roles along with
                    their average salaries:
                  </p>
                  <div className="table-responsive">
                    <table style={{ width: "98.3722%" }}>
                      <tbody>
                        <tr>
                          <td style={{ width: "56.6798%" }}>
                            <p>Job Profile</p>
                          </td>
                          <td style={{ width: "43.3434%" }}>
                            <p>Average Salary (INR)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "56.6798%" }}>
                            <p>Clinical Research Associate</p>
                          </td>
                          <td style={{ width: "43.3434%" }}>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "56.6798%" }}>
                            <p>Pharmacist</p>
                          </td>
                          <td style={{ width: "43.3434%" }}>
                            <p>2.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "56.6798%" }}>
                            <p>Drug Safety Associate</p>
                          </td>
                          <td style={{ width: "43.3434%" }}>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "56.6798%" }}>
                            <p>Drug Inspector</p>
                          </td>
                          <td style={{ width: "43.3434%" }}>
                            <p>6 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "56.6798%" }}>
                            <p>Pharmacy Business</p>
                          </td>
                          <td style={{ width: "43.3434%" }}>
                            <p>8 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "56.6798%" }}>
                            <p>Scientific Writer</p>
                          </td>
                          <td style={{ width: "43.3434%" }}>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "56.6798%" }}>
                            <p>Pathological Lab Scientist</p>
                          </td>
                          <td style={{ width: "43.3434%" }}>
                            <p>3.5 LPA</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="h_3066420241541664876113229">
                    <strong>Scope of Pharmacy Course in India</strong>
                  </h2>
                  <p>
                    The Pharmacy course scope is very attractive and promising
                    in India. With the growing pharma industry in India, pharma
                    students have a number of career options. From hospital
                    pharmacist to community pharmacist and the likes of a drug
                    inspector, there are plenty of options to choose from.&nbsp;
                  </p>
                  <p>
                    Pharmacy is a popular career option in India that provides
                    aspirants with the opportunity to work in a wide number of
                    fields including research labs, pharmacy stores, hospitals,
                    armed forces, government hospitals, and pharmaceuticals
                    industries.
                  </p>
                  <h2 id="h_79818938545921664876126342">
                    <strong>Top Recruiters</strong>
                  </h2>
                  <p>
                    Pharmacy courses in India provide students with ample job
                    opportunities with a very bright future. Listed below are
                    some of the top recruiters in India.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Medilife</li>
                    <li style={{ fontWeight: 400 }}>AppolloPharmacy</li>
                    <li style={{ fontWeight: 400 }}>Wellness Forever</li>
                    <li style={{ fontWeight: 400 }}>MAX Pharmacy</li>
                    <li style={{ fontWeight: 400 }}>LYF Hospitals</li>
                    <li style={{ fontWeight: 400 }}>3 MG</li>
                    <li style={{ fontWeight: 400 }}>PharmEasy</li>
                    <li style={{ fontWeight: 400 }}>MedPlus</li>
                  </ul>
                  <h2 id="h_928953748131664876131462">
                    <strong>Skills Required in Pharmacy Courses</strong>
                  </h2>
                  <p>
                    Owing to the relevance of the education, the students have
                    access to all the Skills Required in Pharmacy Courses and
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
                Diploma in Naturopathy
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
                <small className="text-muted">💰Avarage fees: 10,000 - 1.3 LPA</small>
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
                B.Pharmacy [Bachelor of Pharmacy]
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
                <small className="text-muted">💰Avarage fees: 50,000-2 LPA</small>
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
                Pharm.D [Doctorate of Pharmacy]
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
                <small className="text-muted">⌛Duration: 6 Years</small>
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
                M.Pharm [Master of Pharmacy]

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
                <small className="text-muted">💰Avarage fees: 50,000-1.5 LPA</small>
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
                M.Pharm Pharmaceutical Analysis
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
                <small className="text-muted">💰Avarage fees: 48,000 - 1 LPA</small>
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
                D.Pharma [Diploma in Pharmacy]

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
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                Ph.D Psychology
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
                <small className="text-muted">💰Avarage fees: 20,000 - 2 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 3 Years 1 Month</small>
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

export default Pharmacys;
