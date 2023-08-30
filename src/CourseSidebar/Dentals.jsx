import { useState } from "react";
import "./Dentals.css";
import "../components/TopcourseSidebar/CourseSidebar.css";
const Dentals = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h2
        style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
      >
        Top Dental Course in India 2023
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
              <h1>Dental Full Course </h1>
              <h2>
                Dental Full Course 2023 National, State &amp; University Level
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
                    Dental courses in India are primarily a branch of medical
                    sciences, dealing with oral health. In dental courses,
                    aspirants explore the study of teeth, gums, as well as
                    various mouth organs. The Dental course duration for the
                    students depends on the type of course that the aspiring
                    dentist applies for. The Dental degree courses are medical
                    courses that have many specialisations under them. Students
                    pursuing these courses can apply for different
                    specialisations such as Dental Implant Courses, Dental Nurse
                    Course, Dental Ceramic Assistant Course, Dental Cosmetology
                    Courses.&nbsp;
                  </p>
                  <p>
                    The Dental course details for the students are not fixed and
                    can vary depending on the type of course that the student
                    applies. Hence, students need to ensure that they research
                    all the course details. BDS, MDS and Diploma courses in
                    Dental Science are popular Dental Courses After 12th.&nbsp;
                  </p>
                  <p>
                    <strong>Table Of Contents:</strong>
                  </p>
                  <ul>
                    <li>
                      <a href="#dental-courses-list">Dental Courses List</a>
                    </li>
                    <li>
                      <a href="#eligibility-for-dental-courses">
                        Eligibility for Dental Courses
                      </a>
                    </li>
                    <li>
                      <a href="#dental-courses-admission">
                        Dental Courses Admission
                      </a>
                    </li>
                    <li>
                      <a href="#dental-courses-entrance-exams">
                        Dental Courses Entrance Exams
                      </a>
                    </li>
                    <li>
                      <a href="#dental-course-syllabus-and-subjects">
                        Dental Course Syllabus and Subjects
                      </a>
                    </li>
                    <li>
                      <a href="#top-dental-colleges-in-india">
                        Top Dental Colleges in India
                      </a>
                    </li>
                    <li>
                      <a href="#dental-course-jobs-and-salaries">
                        Dental Course Jobs and Salaries
                      </a>
                    </li>
                    <li>
                      <a href="#scope-of-dental-course-in-india">
                        Scope of Dental Course in India
                      </a>
                    </li>
                    <li>
                      <a href="#top-recruiters">Top Recruiters</a>
                    </li>
                    <li>
                      <a href="#skills-required-for-dental-courses-in-india">
                        Skills Required For Dental Courses In India
                      </a>
                    </li>
                  </ul>
                  <h2 id="dental-courses-list">Dental Courses List</h2>
                  <p>
                    The subjects in the Dental course are not fixed and can
                    depend on the type of course that the students are applying
                    for. There are different types of Dental courses that the
                    students can choose from. Diploma and UG are dental courses
                    after the 10th and 12th. Whereas, PG and Doctoral courses
                    are the ones that can be pursued after completion of UG.
                  </p>
                  <p>
                    Given below are different types of Dental courses that the
                    students can pursue:
                  </p>
                  <ul>
                    <li>
                      <a href="#undergraduate-dental-courses">
                        Undergraduate Dental Courses
                      </a>
                    </li>
                    <li>
                      <a href="#postgraduate-dental-courses">
                        Postgraduate Dental Courses
                      </a>
                    </li>
                    <li>
                      <a href="#diploma-dental-courses">
                        Diploma Dental Courses
                      </a>
                    </li>
                    <li>
                      <a href="#certificate-dental-courses">
                        Certificate Dental Courses
                      </a>
                    </li>
                    <li>
                      <a href="#doctorate-dental-courses">
                        Doctorate Dental Courses
                      </a>
                    </li>
                  </ul>
                  <h3 id="undergraduate-dental-courses">
                    Undergraduate Dental Courses
                  </h3>
                  <p>
                    Students should opt for undergraduate dental courses as they
                    can help the students learn about concepts in detail. It is
                    a great opportunity for students to learn about their
                    specialised field by getting an introduction to all the
                    vital concepts.
                  </p>
                  <p>
                    <a href="https://www.getmyuni.com/bds-course">
                      BDS (Bachelor of Dental Surgery)
                    </a>{" "}
                    is an undergraduate program and the only approved
                    professional dental course in India. BDS is one of the most
                    popular and designated degrees for dentists (doctors).
                    Generally, the duration of a BDS course tends to be five
                    years. This is the only educational and professional
                    programme of dental surgery in India. It is equivalent to
                    the MBBS and owes the “Dr” domain.
                  </p>
                  <h3 id="postgraduate-dental-courses">
                    Postgraduate Dental Courses
                  </h3>
                  <p>
                    After the completion of the undergraduate course, many
                    students may choose to opt for a postgraduate degree. Dental
                    PG courses aim to introduce students to all the key aspects
                    of dental science while giving them more detailed knowledge
                    of their specialisation.
                  </p>
                  <p>
                    Due to the detailed nature of these Dental courses, after
                    graduation students are presented with a wide range of
                    career paths.&nbsp;
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/mds-course">MDS</a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/mds-conservative-dentistry-and-endodontics-course">
                        MDS Conservative Dentistry &amp; Endodontics
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/mds-oral-and-maxillofacial-surgery-course">
                        MDS Oral &amp; Maxillofacial Surgery
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/mds-oral-medicine-and-radiology-course">
                        MDS Oral Medicine and Radiology
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/mds-prosthodontics-course">
                        MDS Prosthodontics
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/mds-periodontics-course">
                        MDS Periodontics
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      MDS Endodontics
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      MSc Clinical Dentistry
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      MSc in Dental Technology
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Masters in Dental Surgery
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Pedodontics and Preventive Dentistry.
                    </li>
                  </ul>
                  <h3 id="diploma-dental-courses">Diploma Dental Courses</h3>
                  <p>
                    Along with the undergraduate courses, students can also
                    pursue Dental Diploma courses to gain an introduction to the
                    dental sciences. Diploma courses tend to be short,
                    career-focused courses that help the students enhance their
                    knowledge in the field.&nbsp;
                  </p>
                  <p>
                    Diploma in Dental Hygiene: Candidates who want to become
                    dental hygienists can enrol in a graduate-level programme
                    called the Diploma in Dental Hygienist. After clearing their
                    intermediate exams, applicants can pursue a 2-year diploma.
                  </p>
                  <p>
                    The programme emphasises fundamental restorations, oral
                    hygiene, dental radiography, periodontal treatment,
                    preventative dentistry, and the extraction of deciduous
                    teeth, among other topics.
                  </p>
                  <h3 id="certificate-dental-courses">
                    Certificate Dental Courses
                  </h3>
                  <p>
                    There are many Dental certificate courses that the students
                    can enrol in. The primary purpose of a certificate course is
                    to help the students gain in-depth knowledge in a
                    specialised field in a short period of time. The certificate
                    courses are often provided by industry-relevant employers or
                    educational institutions. Given below are some of the top
                    certificate courses in Dental that the students can take:
                  </p>
                  <p>
                    Introduction to Dental Medicine: This course starts from
                    basic concepts and proceeds to review trends in current
                    research and technology. They offer scientific background,
                    some skills for patient evaluation and interview, and some
                    suggestions for further learning for those interested in or
                    involved in dental education.
                  </p>
                  <h3 id="doctorate-dental-courses">
                    Doctorate Dental Courses
                  </h3>
                  <p>
                    Students seeking careers in research and education can
                    choose from among the several PhD or Doctorate programmes
                    offered by universities. Doctoral programs are
                    research-oriented courses that enable students to learn
                    about the existing research in a field and then further
                    develop in the same field.
                  </p>
                  <p>
                    PhD in Dental Surgery: This degree provides students with a
                    high level of education in the field of dental surgery,
                    including both common and unusual dental procedures.
                    Participants may study paediatric dentistry, cosmetic
                    dentistry, periodontists, or even dental anesthesiology.
                  </p>
                  <h2 id="eligibility-for-dental-courses">
                    Eligibility for Dental Courses
                  </h2>
                  <p>
                    When deciding to pursue a Dental course, students must
                    ensure that they are aware of the Dental course eligibility
                    criteria. They can research and find out the exact
                    requirements by going to the official website of the
                    colleges to they are interested in applying for.
                  </p>
                  <p>
                    Hence for Dental course admission, it is vital that the
                    students research about the eligibility criteria from a
                    reliable source. Almost all Dental courses require students
                    to give entrance examinations to get admitted to top
                    colleges.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      BDS: Candidates must have passed className 10+2 from a
                      recognized board and studied Physics, Chemistry,
                      Mathematics or Biology, and English subjects. Students
                      must also give the required entrance exam.
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      MDS: Candidates who have a BDS degree with minimum
                      qualifying marks as required from a recognised college.
                      Students must also give the required entrance exam.
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      PhD in Dental: Candidates must have completed higher
                      education from any recognized college and studied MDS.
                      Students must also give the required entrance exam.
                    </li>
                  </ul>
                  <h2 id="dental-courses-admission">
                    Dental Courses Admission
                  </h2>
                  <p>
                    There are many dental bridge courses that the students can
                    get admission to. For admission to a Dental college of their
                    choice, students must ensure that they are aware of the
                    eligibility criteria. Students would also be required to
                    give entrance exams for admission, hence the aspirants must
                    research about the syllabus for the same.
                  </p>
                  <p>
                    The students can avail themselves of admissions through both
                    online and offline methods.
                  </p>
                  <p>
                    For the online method, students must enquire at the official
                    website of the colleges they are applying to. For offline
                    means, they would be required to visit the colleges
                    admission office in person.
                  </p>
                  <h2 id="dental-courses-entrance-exams">
                    Dental Courses Entrance Exams
                  </h2>
                  <p>
                    When applying for the Dental course, it is vital that the
                    aspirants research the entrance exams that are conducted.
                    Entrance exams play an important role in the final merit
                    list that is released by the students.
                  </p>
                  <p>
                    These Dental course entrance exams are a screening process
                    through which the colleges can determine if the students
                    would be a right fit for the course. Most entrance exams
                    syllabus may differ according to the type of course, but the
                    exam conducting authorities don’t change.
                  </p>
                  <p>
                    Given below are some of the top exams that are conducted for
                    admissions to the different Dental courses in India:
                  </p>
                  <p>Undergraduate</p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/exams/neet">NEET</a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/exams/jipmer-mbbs">
                        JIPMER
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/exams/pgimer">PGIMER</a>
                    </li>
                  </ul>
                  <p>Postgraduate</p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      <a href="https://www.getmyuni.com/exams/neet-pg">
                        NEET PG
                      </a>
                    </li>
                  </ul>
                  <h2 id="dental-course-syllabus-and-subjects">
                    Dental Course Syllabus and Subjects
                  </h2>
                  <p>
                    The Dental course syllabus is designed to ensure that the
                    students gain all the vital knowledge they need to get to
                    build a rewarding career path for themselves. Although the
                    detailed syllabus of every pharmacy course will vary a bit
                    as they are of different duration and value, they all
                    contain important Dental course subjects.
                  </p>
                  <p>
                    The curriculum integrates a variety of Dental Hygienist
                    Course, Dental Technician Course, Dental Assistant Course,
                    Dental Mechanic Course, Dental Lab Technician
                    Course&nbsp;that will enable the students to learn about
                    concepts in detail.
                  </p>
                  <p>
                    Given below are some of the generic topics that the students
                    may be taught during their Dental course education:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      General Pathology
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      General Surgery
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      General Medicine
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Oral Pathology
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Oral Microbiology
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      General and Dental Pharmacology and Therapeutics
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Biochemistry
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      General Human Anatomy
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Dental Anatomy, Embryology and Oral Histology
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Pre-Clinical Prosthodontics
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Public Health &amp; Dentistry
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Periodontology
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Radiology
                    </li>
                  </ul>
                  <h2 id="top-dental-colleges-in-india">
                    Top Dental Colleges in India
                  </h2>
                  <p>
                    There are many colleges that provide the best Dental courses
                    in India. Given below are the top colleges along with their
                    Dental course fees in India:
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
                            <p>Care Dental College, Guntur</p>
                          </td>
                          <td>
                            <p>1 Lakh</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>2</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/maulana-azad-institute-of-dental-sciences-maids-new-delhi">
                                Maulana Azad Institute Of Dental Sciences
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>1 Lakh</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>3</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/jamia-millia-islamia-university-new-delhi">
                                Jamia Millia Islamia
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>1 Lakh</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>4</p>
                          </td>
                          <td>
                            <p>Centre for Dental Education and Research</p>
                          </td>
                          <td>
                            <p>1 Lakh</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>5</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/all-india-institute-of-medical-sciences-aiims-new-delhi">
                                AIIMS
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>50,000&nbsp;</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>6</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/esic-medical-college-gulbarga">
                                ESIC Dental College
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>2 Lakh</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>7</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/university-college-of-medical-sciences-ucms-new-delhi">
                                UCMS
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>2 Lakh</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>8</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/goa-dental-college-and-hospital-north-goa">
                                Goa Dental College &amp; Hospital
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>2 Lakh</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>9</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/km-shah-dental-college-and-hospital-kmsdch-vadodara">
                                K.M. Shah Dental College &amp; Hospital
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>1 Lakh</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>10</p>
                          </td>
                          <td>
                            <p>
                              <a href="https://www.getmyuni.com/college/manipal-university-mu-manipal">
                                Manipal University
                              </a>
                            </p>
                          </td>
                          <td>
                            <p>5 Lakh</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="dental-course-jobs-and-salaries">
                    Dental Course Jobs and Salaries
                  </h2>
                  <p>
                    The Dental course job opportunities in India are very
                    rewarding and promising for the students. There is a high
                    demand for dentists in the country and since the education
                    provided to the students is very industry-relevant, the
                    Dental course salary is also very attractive for aspiring
                    Dentists.
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
                            <p>Clinical Research Associate</p>
                          </td>
                          <td>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dentist</p>
                          </td>
                          <td>
                            <p>2.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Lecturer</p>
                          </td>
                          <td>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dental Surgeon</p>
                          </td>
                          <td>
                            <p>6 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dental Hygienist</p>
                          </td>
                          <td>
                            <p>8 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dental Technician</p>
                          </td>
                          <td>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dental Therapist</p>
                          </td>
                          <td>
                            <p>3.5 LPA</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="scope-of-dental-course-in-india">
                    Scope of Dental Course in India
                  </h2>
                  <p>
                    The Dental course scope is very attractive and promising in
                    India. In the private sector, they can work in hospitals,
                    clinics, and pharma companies on different profiles. They
                    can also work in government sectors as Dental Surgeon in
                    hospitals, Army Dental Corps, Territorial Officer in Indian
                    Army, Dentist in Railways, and Dental Officer in the Indian
                    Navy and Indian Air force.
                  </p>
                  <p>
                    Dental is a popular career option in India that provides
                    aspirants with the opportunity to work in a wide number of
                    fields including research labs, pharmacy stores, hospitals,
                    armed forces, government hospitals, and pharmaceuticals
                    industries.
                  </p>
                  <h2 id="top-recruiters">Top Recruiters</h2>
                  <p>
                    Dental courses in India provide students with ample job
                    opportunities with a very bright future. Listed below are
                    some of the top recruiters in India.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Clove Dental
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Apollo Hospitals
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Practo
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      MAX Hospitals
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Sabka Dentist
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Dentistry Clinics
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Smiles Dental Care
                    </li>
                    <li style={{ fontWeight: 400 }} aria-level={1}>
                      Fortis Hospitals
                    </li>
                  </ul>
                  <h2 id="skills-required-for-dental-courses-in-india">
                    Skills Required For Dental Courses In India
                  </h2>
                  <p>
                    Given below are some top skills that would help the students
                    ace the Dental courses in India:
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
              BDS [Bachelor of Dental Science]
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
                <small className="text-muted">💰Avarage fees:  50K - 4 LPA</small>
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
                MDS [Master of Dental Sciences]
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
                <small className="text-muted">💰Avarage fees: 1.45 - 11.2 LPA</small>
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
              MD Dermatology Venereology & Leprology
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
                <small className="text-muted">💰Avarage fees: 42,000 - 12.3 LPA</small>
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
                MDS Conservative Dentistry & Endodontics
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
                <small className="text-muted">💰Avarage fees: 1.45 - 11.25 LPA</small>
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
                MDS Oral & Maxillofacial Surgery
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
                <small className="text-muted">💰Avarage fees: 1.45 L - 11.25 LPA</small>
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
                MDS Oral Medicine and Radiology
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
                <small className="text-muted">💰Avarage fees: 1.45 - 11.25 LPA</small>
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
                MDS Prosthodontics
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
                <small className="text-muted">💰Avarage fees: 1.45 L - 11.25 LPA</small>
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
               MDS Periodontics
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
                <small className="text-muted">💰Avarage fees: 10 LPA</small>
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
                Diploma In Dental Hygienist
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

export default Dentals;
