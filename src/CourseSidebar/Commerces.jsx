import { useState } from "react";
import "./Commerces.css";
import "../components/TopcourseSidebar/CourseSidebar.css";
const Commerces = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h2
        style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
      >
        Top Commerce Course in India 2023
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
              <h1>Commerce Full Course </h1>
              <h2>
                Commerce Full Course 2023 National, State &amp; University Level
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
                    Commerce is the study of the financial system, transactions,
                    economy and its implementation and banking of the country
                    and the globe. Commerce is one of the countrys most
                    sought-after streams, followed by Arts and Science. After
                    completion of 12th grade, the best courses in commerce are
                    BBA, B.Com, B.Com Banking, and Finance Management, to name a
                    few.&nbsp;
                  </p>
                  <p>
                    Courses for commerce students are available in various
                    fields of degree, they can obtain a certificate or diploma
                    to undergraduate and postgraduate degrees and a PhD. The
                    commerce course duration depends on the type of degree a
                    candidate wishes to pursue, it can range from a year to up
                    to five years.&nbsp;
                  </p>
                  <p>
                    <strong>Table of Contents</strong>
                  </p>
                  <ul>
                    <li>
                      <a href="#course-list">Course List</a>
                    </li>
                    <li>
                      <a href="#eligibility-for-commerce-courses">
                        Eligibility For Commerce Courses
                      </a>
                    </li>
                    <li>
                      <a href="#admission">Admission</a>
                    </li>
                    <li>
                      <a href="#entrance-exam">Entrance Exam</a>
                    </li>
                    <li>
                      <a href="#top-10-commerce-courses-in-demand">
                        Top 10 Commerce Courses in Demand
                      </a>
                    </li>
                    <li>
                      <a href="#subject-and-syllabus">Subject And Syllabus</a>
                    </li>
                    <li>
                      <a href="#top-10-commerce-colleges-in-india">
                        Top 10 Commerce Colleges In India
                      </a>
                    </li>
                    <li>
                      <a href="#commerce-courses-jobs-and-salaries">
                        Commerce Courses Jobs And Salaries
                      </a>
                    </li>
                    <li>
                      <a href="#scope-of-commerce-course-in-india">
                        Scope Of Commerce Course In India
                      </a>
                    </li>
                    <li>
                      <a href="#top-recruiters">Top Recruiters</a>
                    </li>
                    <li>
                      <a href="#skills-required-in-commerce-courses">
                        Skills Required in Commerce Courses
                      </a>
                    </li>
                  </ul>
                  <h2 id="course-list">Commerce Courses List</h2>
                  <p>
                    Commerce is a professional subject that focuses on the
                    financial and economic aspects of the nation and also the
                    global economy. The commerce course list has professional
                    courses in commerce, diploma courses in commerce to commerce
                    degree courses.
                  </p>
                  <p>
                    The candidate can choose courses based on their aptitude,
                    qualification and interest. The majority of commerce courses
                    are entrance exam-based, so candidates who decide to pursue
                    them should be aware of this fact.
                  </p>
                  <p>
                    Depending on the courses nature, a commerce course can last
                    anywhere between three and five years. Candidates can choose
                    from a variety of course types by browsing the list of
                    commerce courses offered throughout the nation, which is
                    divided into the following categories with the commerce
                    course details:&nbsp;
                  </p>
                  <ul>
                    <li>
                      <a href="#undergraduate-commerce-courses">
                        Undergraduate Courses
                      </a>
                    </li>
                    <li>
                      <a href="#postgraduate-commerce-courses">
                        Postgraduate Courses
                      </a>
                    </li>
                    <li>
                      <a href="#diploma-commerce-courses">
                        Diploma/PG Diploma Courses
                      </a>
                    </li>
                    <li>
                      <a href="#certification-commerce-courses">
                        Certification Courses
                      </a>
                    </li>
                    <li>
                      <a href="#doctorate-commerce-courses">
                        Doctorate Courses
                      </a>
                    </li>
                  </ul>
                  <h3 id="undergraduate-commerce-courses">
                    Undergraduate Commerce Courses
                  </h3>
                  <p>
                    A full-time undergraduate course is generally a
                    three-year-long course. The course imparts students with
                    knowledge of the financial system and sector of the country
                    in fields such as banking, stock market, economy, money min,
                    import and export and many more.
                  </p>
                  <p>
                    The commerce integrated courses are another popular degree
                    course which usually takes up to five years. Here are some
                    of the best courses in commerce after graduation:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-course">B.Com</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-hons-course">
                        B.Com (Honours)
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-banking-management-course">
                        B.Com Banking Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-co-operation-course">
                        B.Com Cooperation
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-computer-science-course">
                        B.Com Computer Science
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-economics-course">
                        B.Com Economics
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-finance-course">
                        B.Com Finance
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-taxation-course">
                        B.Com Taxation
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-computer-applications-course">
                        B.Com Computer Applications
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-accountancy-course">
                        B.Com Accountancy
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-banking-and-insurance-course">
                        B.Com Banking and Insurance
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-accounting-and-finance-course">
                        B.Com Accounting and Finance
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bcom-corporate-secretaryship-course">
                        B.Com Corporate Secretaryship
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/bed-commerce-course">
                        B.Ed Commerce
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>B.Com Marketing</li>
                  </ul>
                  <h3 id="postgraduate-commerce-courses">
                    Postgraduate Commerce Courses
                  </h3>
                  <p>
                    Courses after graduation in commerce are usually
                    post-graduation. Commerce PG courses are a two-year long
                    course where students are provided with advanced knowledge
                    and practical skills on the development of financial systems
                    along with familiarising them with new technologies in
                    banking, minting and stock markets. Here are commerce pg
                    courses one can pursue after graduation:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mcom-course">M.Com</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mcom-finance-course">
                        M.Com in Finance
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mcom-computer-applications-course">
                        M.Com in Computer Application
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mcom-business-management-course">
                        M.Com in Business Management
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/mphil-commerce-course">
                        M.Phil in Commerce
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>M.Com Honours</li>
                    <li style={{ fontWeight: 400 }}>M.Com in Banking</li>
                    <li style={{ fontWeight: 400 }}>
                      M.Com in Financial Management
                    </li>
                    <li style={{ fontWeight: 400 }}>M.Com in Marketing</li>
                    <li style={{ fontWeight: 400 }}>M.Com in Taxation</li>
                    <li style={{ fontWeight: 400 }}>
                      M.Com in Accounting&nbsp;
                    </li>
                  </ul>
                  <h3 id="diploma-commerce-courses">
                    Diploma/PG Diploma Commerce Courses
                  </h3>
                  <p>
                    Diploma Courses in Commerce are offered in a wide range of
                    subjects and specialisations. There are diplomas in commerce
                    courses after 10th for candidates who wish to grasp the
                    fundamentals of the commerce stream. Postgraduate diploma
                    courses also fall under courses after graduation in
                    commerce. This can help them boost their knowledge of
                    finance, economy and market. Here are some diploma courses
                    in commerce:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-banking-and-finance-course">
                        Diploma in Finance and Banking
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/diploma-in-accounting-and-finance-course">
                        Diploma in Accounting and Finance
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>Diploma in Taxation</li>
                    <li style={{ fontWeight: 400 }}>Diploma in DIC</li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/pg-diploma-banking-finance-course">
                        PG Diploma in Banking and Finance
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Diploma in Statistics&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Diploma in Accounts&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      PG Diploma in Diploma in Bank Management
                    </li>
                  </ul>
                  <h3 id="certification-commerce-courses">
                    Commerce Certification Courses
                  </h3>
                  <p>
                    There are many commerce certification courses that can also
                    be pursued by the students. These commerce certificate
                    courses aim to introduce students to all the vital and key
                    concepts that industry leaders consider to be important.
                  </p>
                  <p>
                    When enrolled in certificate courses, students are able to
                    experience the commerce course benefits as these
                    certifications give the students a taste of all the
                    important concepts.
                  </p>
                  <p>
                    Given below are some of the top commerce stream courses that
                    can be pursued in the form of certifications.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      Certificate course in Finance Accounting and Taxation
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate in Public Relations
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate course in E-Commerce
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate in Accounting
                    </li>
                    <li style={{ fontWeight: 400 }}>Certificate in Banking</li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate in Indian Stock Market
                    </li>
                  </ul>
                  <h3 id="doctorate-commerce-courses">
                    Doctorate Commerce Courses
                  </h3>
                  <p>
                    The doctorate degree is purely based on the research work
                    the candidate has done in the field of their specialisation.
                    Commerce graduates have the option of working in many fields
                    to perform research work on the basis of their choice of
                    specialisation. They can even combine courses such as BA,
                    BBA &amp; B.Sc to perform research.&nbsp;
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/phd-commerce-course">
                        PhD Commerce
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/phd-statistics-course">
                        PhD in Statistics&nbsp;
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/phd-finance-course">
                        PhD in Finance
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>PhD in Taxation</li>
                    <li style={{ fontWeight: 400 }}>PhD in Banking</li>
                  </ul>
                  <h2 id="eligibility-for-commerce-courses">
                    Eligibility For Commerce Courses
                  </h2>
                  <p>
                    Commerce course eligibility is based on the entrance exam
                    the candidate has to sit in order to enrol in the college of
                    their choice. The eligibility for commerce courses in India
                    is candidates must clear all the eligibility requirements
                    set by the council. Lets take a quick look at the
                    eligibility criteria according to degrees:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      Diploma: For a candidate wishing to pursue a diploma, they
                      can either enrol in the commerce course after 12th. They
                      must secure 45% in the 12th graduate to be qualified to
                      pursue Diploma courses in commerce.&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Certificate: The certificate courses have the same
                      eligibility as a diploma. The candidate should’ve passed
                      at least 12th grade with a 45% minimum aggregate. For
                      working professionals too, the criteria are the same.
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Undergraduate: Students must sit for entrance examinations
                      conducted by the centre, state or university to qualify
                      for commerce. Apart from this, they should meet the
                      qualifying requirements set by the universities and
                      colleges.
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Postgraduate: A candidate wishing for a postgraduate
                      program must have performed well in the undergraduate
                      course. They must also qualify the entrance examination to
                      be able to pursue a PG course.&nbsp;
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Doctorate: Students must qualify for the national entrance
                      examination to be able to sit for a PhD course. They also
                      should be able to secure a minimum of 50% in their
                      postgraduate course.&nbsp;
                    </li>
                  </ul>
                  <h2 id="admission">Commerce Courses Admission</h2>
                  <p>
                    Entrance exams or selection based on merit are two ways to
                    get commerce course admission. Candidates for the commerce
                    degree may be asked by the universities they have chosen or
                    chosen for them to submit their results from the relevant
                    entrance exam boards. Students have access to both offline
                    and online admissions applications.
                  </p>
                  <p>
                    Students must go to the colleges official websites to learn
                    more about the online application process. They would have
                    to go in person to the colleges admission office for
                    offline methods.
                  </p>
                  <h2 id="entrance-exam">Commerce Courses Entrance Exam</h2>
                  <p>
                    The final merit list of applicants selected for admission to
                    colleges is heavily influenced by entrance exams. Colleges
                    use entrance exams as a screening tool to assess whether
                    applicants are a good fit for the programme.
                  </p>
                  <p>
                    These tests are given at the college, state, and federal
                    levels. Thus, before enrolling, students must conduct a
                    thorough investigation of the appropriate exam.
                  </p>
                  <p>
                    The list of top tests for entry into different Indian
                    commerce programmes is provided below.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/ipu-cet">
                        IPU CET
                      </a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/npat">NPAT</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/set-exam">SET</a>
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      <a href="https://www.getmyuni.com/exams/du-jat">DU JAT</a>
                    </li>
                  </ul>
                  <h2 id="top-10-commerce-courses-in-demand">
                    Top 10 Commerce Courses in Demand
                  </h2>
                  <p>
                    Choosing a specific field can be difficult because commerce
                    courses can cover a wide range of topics. The main objective
                    of commerce courses is to familiarise students with
                    commerce, policies, articles and impart them with the
                    knowledge of legal actions.
                  </p>
                  <p>
                    All commerce courses are regarded as lucrative fields for
                    school graduates to study because candidates can anticipate
                    finding a well-paying job in both the public and private
                    sectors after graduation.&nbsp;
                  </p>
                  <p>
                    Lets examine the top ten categories of commerce courses:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "99.7317%",
                      }}
                    >
                      <thead>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>Course</p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>Duration</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/bcom-course">
                                B.Com
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>3 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/bba-llb-course">
                                BBA LLB
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>5 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/cma-course">
                                Cost and Management Accountant
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>1 Year</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/chartered-accountancy-ca-course">
                                CA
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>3 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/bba-course">
                                BBA
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>3 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/bcom-economics-course">
                                B.Com Economics
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>3 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/bcom-accounting-and-finance-course">
                                B.Com Accounting and Finance
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>3 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/bcom-banking-management-course">
                                B.Com Banking
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>3 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/bba-human-resource-management-course">
                                BBA HRM
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>3 Years</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "76.5188%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/bba-marketing-course">
                                BBA Marketing
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.4849%" }}>
                            <p>3 Years</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="subject-and-syllabus">
                    Commerce Course Syllabus and Subjects
                  </h2>
                  <p>
                    The best commerce courses in India aim to ensure that the
                    students have access to all the vital and industry-relevant
                    information. The commerce course subjects that the students
                    would study depend on the type of course that the students
                    are applying for.
                  </p>
                  <p>
                    The top 10 commerce courses in India are a mix of
                    undergraduate, postgraduate, diploma and doctorate courses.
                    Hence, the students need not worry about the stage of
                    education they are pursuing as they would always receive a
                    quality education.
                  </p>
                  <p>
                    Given below are some of the generic topics that the students
                    may be taught during their Commerce course education:
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Business Law</li>
                    <li style={{ fontWeight: 400 }}>
                      Corporate Social Responsibility
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Organisational Behaviour
                    </li>
                    <li style={{ fontWeight: 400 }}>Accounting in Business</li>
                    <li style={{ fontWeight: 400 }}>
                      Fundamentals of Business
                    </li>
                  </ul>
                  <h2 id="top-10-commerce-colleges-in-india">
                    &nbsp;Top Commerce Colleges in India
                  </h2>
                  <p>
                    The commerce course fees in India are not fixed. The fee
                    structure depends on many variables such as the type of
                    course, the location of the college if the college is
                    private college or public and more. Students must ensure
                    that they do proper research when choosing which college to
                    study in as it can affect the standard of the education they
                    are willing to accept.
                  </p>
                  <p>
                    Given below are the top colleges along with their Commerce
                    course fees in India:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "99.5686%",
                      }}
                    >
                      <thead>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>SI.No</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>College Name</p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>Fees (INR)</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>1</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/st-stephens-college-delhi-university-new-delhi">
                                St. Stephen’s College, DU
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>10,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>2</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/christ-university-bangalore">
                                Christ University
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>1 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>3</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/indian-institute-of-technology-iit-delhi">
                                IIT, Delhi
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>1 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>4</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/university-of-mumbai-um-mumbai">
                                Mumbai University
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>25,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>5</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/gargi-college-delhi-university">
                                Gargi College, Delhi
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>10,000</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>6</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/amity-university-noida">
                                Amity University, Noida
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>2 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>7</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/amity-university-gurgaon">
                                Amity University, Gurgaon
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>2 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>8</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/lovely-professional-university-lpu-jalandhar">
                                LPU
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>2 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>9</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/galgotias-university-noida">
                                Galgotias University
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>2 Lakhs</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "16.5479%" }}>
                            <p>10</p>
                          </td>
                          <td style={{ width: "60.3999%" }}>
                            <p>
                              <a href="https://www.getmyuni.com/college/op-jindal-global-university-opjgu-sonepat">
                                Jindal Global University
                              </a>
                            </p>
                          </td>
                          <td style={{ width: "23.0568%" }}>
                            <p>3 Lakhs</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="commerce-courses-jobs-and-salaries">
                    Commerce Course Jobs and Salaries
                  </h2>
                  <p>
                    When pursuing the commerce course students need not worry
                    about the scope and career opportunities provided by the
                    colleges. There are plenty of Commerce course jobs available
                    to the students owing to the relevance and diversity of the
                    education that the students receive.&nbsp;
                  </p>
                  <p>
                    There exist both undergraduate and postgraduate commerce
                    courses with a high salary scope. The curriculum is designed
                    keeping the demands of the industry in mind. Listed below
                    are some of the popular job roles along with their average
                    salaries:
                  </p>
                  <div className="table-responsive">
                    <table
                      style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "99.1335%",
                      }}
                    >
                      <thead>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Job Role</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>Average Salary (INR)</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Accounting Clerk</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>3.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Accountant</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Sales Executive</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>2.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Sales Manager</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>3.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Bookkeeper</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>4 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Loan Counsellor</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Securities Analyst</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>3.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Cashier</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>2.5 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Bank Manager</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>3 LPA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: "46.0955%" }}>
                            <p>Lecturer</p>
                          </td>
                          <td style={{ width: "53.9092%" }}>
                            <p>5 LPA</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2 id="scope-of-commerce-course-in-india">
                    Scope of Commerce Course in India
                  </h2>
                  <p>
                    The scope of Commerce courses in India is very high and
                    rewarding. A candidate who has graduated or completed any
                    Commerce course can expect to earn INR 3 lakhs annually as a
                    fresher. Students choosing Commerce as their field of study
                    can opt for careers such as Business Executive, Accountant,
                    HR Manager, Data Analyst, Marketing Manager, Investment
                    Banker, Wealth Manager, Project Manager, Research and
                    Development Manager, etc.
                  </p>
                  <h2 id="top-recruiters">&nbsp;Top Recruiters</h2>
                  <p>
                    Commerce courses in India provide students with ample job
                    opportunities with a very bright future. Listed below are
                    some of the top recruiters in India.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>Accenture</li>
                    <li style={{ fontWeight: 400 }}>Wipro</li>
                    <li style={{ fontWeight: 400 }}>Capgemini</li>
                    <li style={{ fontWeight: 400 }}>Cognizant</li>
                    <li style={{ fontWeight: 400 }}>TCS</li>
                    <li style={{ fontWeight: 400 }}>Amazon</li>
                    <li style={{ fontWeight: 400 }}>Genpact</li>
                    <li style={{ fontWeight: 400 }}>Flipkart</li>
                    <li style={{ fontWeight: 400 }}>Ernst &amp; Young</li>
                    <li style={{ fontWeight: 400 }}>Deloitte</li>
                  </ul>
                  <h2 id="skills-required-in-commerce-courses">
                    &nbsp;Skills Required in Commerce Courses
                  </h2>
                  <p>
                    Owing to the relevance of the education, the students have
                    access to all the Skills Required in Commerce Courses and
                    hence they have a promising scope for themselves.
                  </p>
                  <ul>
                    <li style={{ fontWeight: 400 }}>
                      Good knowledge of MS Excel
                    </li>
                    <li style={{ fontWeight: 400 }}>
                      Basic knowledge of taxes
                    </li>
                    <li style={{ fontWeight: 400 }}>Financial analysis</li>
                    <li style={{ fontWeight: 400 }}>Communication skills</li>
                    <li style={{ fontWeight: 400 }}>Problem-solving skills</li>
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
                B.Com (Hons)
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
                MFC [Master of Finance and Control]
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
          <div
            className="card mb-3"
            style={{ width: "fit-content", display: "flex" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ marginLeft: "-48px", fontSize: "xx-large" }}
              >
                B.Com [Bachelor of Commerce]
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
                <small className="text-muted">💰Avarage fees: 7,500 - 3 LPA</small>
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
                M.Com [Master of Commerce]
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
                <small className="text-muted">💰Avarage fees: 5,000-2 LPA</small>
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
                Distance B.Com

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
                <small className="text-muted">💰Avarage fees: 25000 per annum</small>
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
                BBE [Bachelor Business Economics]

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
                <small className="text-muted">💰Avarage fees: 75,000 - 2 LPA</small>
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
                BBS [Bachelor of Business Studies]
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
                <small className="text-muted">💰Avarage fees: 12K - 1 LPA</small>
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
                B.Com Banking and Insurance
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
                <small className="text-muted">💰Avarage fees: 14,000 to 10 LPA</small>
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
                B.Com Banking Management
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
                <small className="text-muted">💰Avarage fees: 50,000 - 1.5 LPA</small>
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
                B.Com Co-operation
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
                <small className="text-muted">💰Avarage fees: 3,000 - 1 LPA</small>
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
                B.Com Computer Science
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
                <small className="text-muted">💰Avarage fees: 10,000 - 1.5 LPA</small>
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
                B.Com Economics
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
                B.Com Finance
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
                <small className="text-muted">💰Avarage fees: 5K - 70K Per Annum</small>
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
                B.Com Information Technology
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
                B.Com Management Studies

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
                <small className="text-muted">💰Avarage fees: 50K - 2 Lakhs</small>
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
                B.Com Professional
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
                <small className="text-muted">💰Avarage fees: 5K - 70 K Per Annum</small>
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
                B.Com Taxation
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
                <small className="text-muted">💰Avarage fees: 5,000 - 2 LPA</small>
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
                B.Com Taxation and Finance
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
                <small className="text-muted">💰Avarage fees: 50K - 3 LPA</small>
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
                B.Com Tourism and Travel Management
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
                <small className="text-muted">💰Avarage fees: 30,000 - 2 LPA</small>
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
                B.Com Professional Accounting
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
                <small className="text-muted">💰Avarage fees: 5K - 80K Per Annum</small>
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
                CCFAT [Certificate Course Financial Accounting & Taxation]
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
                <small className="text-muted">💰Avarage fees: 4000 to 12,000 PA</small>
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
                DIC [Diploma Computerised Accounting]
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
                <small className="text-muted">💰Avarage fees: 7,900 to 1.2 LPA</small>
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
                CFA [Chartered Financial Analyst]
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
                <small className="text-muted">💰Avarage fees: 1 - 3 LPA
</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 1 Year 6 Months</small>
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
                BAF [Bachelor of Accounting and Finance]
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
                <small className="text-muted">💰Avarage fees: 20,000-3 LPA</small>
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
                Diploma in Banking and Finance
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
                <small className="text-muted">💰Avarage fees: 10,000-40,000 PA</small>
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
                Ph.D Commerce
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
                <small className="text-muted">💰Avarage fees: 20,000 to 2 LPA</small>
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
                CFP [Certified Financial Planner]
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
                <small className="text-muted">💰Avarage fees: 50,000-1 LPA</small>
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
                B.Com Computer Applications
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
                B.Com Accounting and Finance
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
                <small className="text-muted">💰Avarage fees: 5000 - 70,000 per annum</small>
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
                B.Com Corporate Secretaryship
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
                <small className="text-muted">💰Avarage fees: I LPA</small>
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
                B.Com Accountancy
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
                <small className="text-muted">💰Avarage fees: 40K Per Annum</small>
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
                M.Com Finance
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
                M.Com Computer Applications
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
                <small className="text-muted">💰Avarage fees: 5000 - 1 LPA</small>
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
                M.Phil Commerce
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
                <small className="text-muted">💰Avarage fees: 2000 - 70,000 PA</small>
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
                Bachelor of Business Administration [BBA] (Digital Marketing)
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
                <small className="text-muted">💰Avarage fees: 20,000 - 3 LPA</small>
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
                Bachelor of Business Administration [BBA] (Human Resource Management)
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
                Bachelor of Business Administration [BBA] (Finance and Accounts)
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
                Bachelor of Business Administration [BBA] (Foreign Trade)
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
                CA (Chartered Accountancy)
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
                <small className="text-muted">💰Avarage fees: 2 -2.5 Lakhs</small>
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
                MBA in Construction Management
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
                <small className="text-muted">💰Avarage fees: 50,000 - 12 LPA</small>
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
                MBA Technology Management
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
                <small className="text-muted">💰Avarage fees: 50,000 - INR 8 LPA</small>
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
                MBA in Rural Management
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
                <small className="text-muted">💰Avarage fees: 3 LPA</small>
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
                MBA in Finance and Marketing
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
                <small className="text-muted">💰Avarage fees: 12,000 - 12 LPA</small>
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
                Post Graduate Diploma [PGD] (Banking and Finance)
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
                Doctor of Philosophy [PhD] (Finance)
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
                <small className="text-muted">💰Avarage fees: 8,000 - 64,000 PA</small>
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
                Doctor of Philosophy [PhD] (Marketing)
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
                <small className="text-muted">💰Avarage fees: 3 LPA</small>
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
                Doctor of Philosophy [PhD] (Accountancy)
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
                Doctor of Philosophy [PhD] (Business Management)
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
                <small className="text-muted">💰Avarage fees: 25,000 - 5.5 LPA</small>
              </p>
              <p className="card-text">
                <small className="text-muted">⌛Duration: 2 Years 11 Months</small>
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
                Postgraduate Diploma [PGD] (Financial Management)
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
                <small className="text-muted">💰Avarage fees: 3 - 12 LPA</small>
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
                Diploma in Accounting and Finance
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
                <small className="text-muted">💰Avarage fees: 10,000 - 5 LPA</small>
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
        </div>
      </div>
    </div>
  );
};

export default Commerces;
