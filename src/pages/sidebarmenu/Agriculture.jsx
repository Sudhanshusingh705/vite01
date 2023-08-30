import { useState } from "react";
import "./Agriculture.css";
import "./Sidebarmenu.css";

const Agriculture = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <h2 style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}>
        Top Agriculture Colleges in India 2023
      </h2>
      <div className="container p-3 my-3 border border-dark">
        <div className="row">
          <nav className="col-sm-3 col-4" id="myScrollspy">
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
          </nav>
          {/* SECTION 1 */}
          <div className="col-md-9">
            <div className="pageDescription" style={{ marginBottom: 0 }}>
              {/* ... content ... */}
              <h1>Agriculture Full Course </h1>
              <h2>
                Agriculture Full Course 2023 National, State &amp; University Level
              </h2>
              {showContent ? (
                <>
                  {/* ... full content ... */}
                  {/* ... truncated for brevity ... */}
                  <div className="readMoreDiv">
                    <p className="readMoreButton" onClick={toggleContent} style={{ backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Show Less</p>
                  </div>

                  <p>
                    Students are increasingly choosing to major in agriculture to pursue
                    higher education. The field of agriculture offers a variety of courses.
                    There are agriculture courses available at the undergraduate, graduate,
                    and doctoral levels for students to choose from. Students who want to
                    enroll in agriculture courses must pass an agriculture entrance exam at
                    the national, university, or state level. Here, were giving you all the
                    information you need about Agriculture Entrance Exams 2023.
                  </p>
                  <p>
                    The field deals with the scientific study of agriculture, animal farming,
                    natural resources, and land management, improving the cultivation process,
                    growing methods and improving livestock. A career in agriculture is vast
                    and is a key role in the economy and employment. More than 50% of the
                    workforce in India contributes to agriculture industries with rich
                    biodiversity.
                  </p>
                  <p>
                    To get admission into courses like agricultural science, horticulture,
                    livestock management, etc., aspirants must qualify for the different
                    agricultural entrance exams. The chance to appear at any of the top
                    agriculture entrance exams in India will leave an idea of the
                    course-specific field potential and performance.
                  </p>
                  <h2>Top Agriculture Exams in India</h2>
                  <p>
                    The Indian Council of Agricultural Research (ICAR) is a national-level
                    agricultural entrance exam accepted by numerous colleges/universities for
                    entry into the course. Agricultural state-level entrance exams for studies
                    include AGRICET, BCECE, MHT CET, KEAM, etc. Take a look at the list of top
                    agriculture entrance exams in India.
                  </p>
                  <div className="table-responsive">
                    <table style={{ borderCollapse: "collapse", width: "100%" }} border={1}>
                      <thead>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>Exam Name</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>Course Offered</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>Conducting Authority</p>
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>BCECE</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>UG</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>BCECEB</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>ICAR</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>UG/PG/PhD</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>ICAR</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>MHT CET</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>UG</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>DTE, Maharashtra</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>KEAM</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>UG</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>CEE, Kerala</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>OUAT</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>UG/PG</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>OUAT</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>LPUNEST</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>UG/PG/PhD</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>LPU</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>AAU VET</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>UG/PG</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>AAU</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>AGRICET</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>UG</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>Acharya N.G. Ranga Agricultural University</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>BHU UET</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>UG</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>NTA</p>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center", width: "26.4706%" }}>
                            <p>BBAU Entrance Exam</p>
                          </td>
                          <td style={{ textAlign: "center", width: "19.4118%" }}>
                            <p>PhD</p>
                          </td>
                          <td style={{ textAlign: "center", width: "54.1176%" }}>
                            <p>Babasaheb Bhimrao Ambedkar University</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h2>National Level Exams</h2>
                  <h3>ICAR AIEEA 2023</h3>
                  <p>
                    ICAR AIEEEA test will be given by the National Testing Agency (NTA). To
                    get admission to undergraduate and graduate agriculture programmes, a
                    national exam is held. Applications for the ICAR AIEEA will be made
                    available online and offline starting in the first week of Mar 2023. ICAR
                    AIEEA examination will begin in <strong>Jun 2023.</strong>
                  </p>
                  <h2>State Level Exams</h2>
                  <h3>Bihar BCECE 2023</h3>
                  <p>
                    The Bihar Combined Entrance Competitive Examination, or BCECE, is a
                    state-level exam that is administered by the BCECE Board. The B.Sc.
                    (Agriculture) programmes offered by numerous colleges in the state of
                    Bihar would accept students who pass this test. Candidates will have
                    access to the BCECE application form 2023 in <strong>Mar 2023.</strong>
                  </p>
                  <h2>Jharkhand JCECE 2023</h2>
                  <p>
                    The Jharkhand Combined Entrance Competitive Examination Board oversees the
                    JCECE exam. The state administers this test. It is used to determine who
                    gets into first-year professional degree programmes in engineering,
                    agriculture, and other fields. In Apr 2023, the JCECE application form
                    2023 will be made available.
                  </p>
                  <h2>Karnataka KCET 2023</h2>
                  <p>
                    The Karnataka Examination Authority administers the KCET (Karnataka Common
                    Entrance Test) exam. The exam will be administered in Apr 2023. Candidates
                    will be able to sign up for the exam starting in <strong>Jan 2023</strong>
                    . There is an entrance exam for agriculture for the numerous universities
                    and institutions in the state of Karnataka.
                  </p>
                  <h2>Kerala KEAM 2023</h2>
                  <p>
                    The state-level entrance test called as Kerala Engineering, Agriculture
                    and Medical (KEAM 2023) is administered in Kerala by the Commissioner of
                    Entrance Examination (CEE).
                  </p>
                  <p>
                    Students applying for admission to programmes in engineering, agriculture,
                    and other professions will take the KEAM 2023 test. In{" "}
                    <strong>Feb 2023</strong>, the application form will be made available.
                  </p>
                  <h2>Madhya Pradesh MP PAT 2023</h2>
                  <p>
                    The MP PAT, also known as the Madhya Pradesh Pre-Agriculture Test, is
                    administered by the Madhya Pradesh Professional Examination Board.
                    Candidates for the B.Sc. in agriculture and the B.Tech. in agricultural
                    programmes must take MP PAT 2023 exam. MP PAT application form will be
                    made available starting in <strong>May 2023.</strong>
                  </p>
                  <h2>Orissa OUAT 2023</h2>
                  <p>
                    OUAT exam is administered by the Orissa University of Agriculture and
                    Technology (OUAT). To choose candidates for undergraduate, graduate, and
                    doctoral programmes, states use the OUAT 2023 exam. These courses will be
                    offered in the subjects of agriculture, horticulture, veterinary science,
                    animal husbandry, agricultural engineering and technology, fishery
                    science, home science, and forestry.
                  </p>
                  <h2>Telangana TS EAMCET 2023</h2>
                  <p>
                    The Telangana State Engineering, Agriculture, and Medical Entrance Test,
                    often known as TS EAMCET, is administered by the Jawaharlal Nehru
                    Technological University in Hyderabad.
                  </p>
                  <p>
                    A number of Telangana colleges base their admission decisions on
                    applicants TS EAMCET scores for programmes in engineering, agriculture,
                    and other disciplines. The TS EAMCET application form will be available
                    starting in Mar 2023.
                  </p>
                  <h2>Andhra Pradesh AP EAMCET (EAPCET) 2023</h2>
                  <p>
                    The Jawaharlal Nehru Technological University in Kakinada oversees the
                    administration of the state exam known as the AP EAPCET. used to be called
                    the AP EAMCET. Exam for AP EAPCET will be held in Apr 2023. (for
                    Engineering). By passing the AP EAMCET exam, students can apply for
                    admission to the many colleges in the state of Andhra Pradesh that offer
                    programmes in agriculture, engineering, pharmacy, and other academic
                    fields.
                  </p>
                  <h2>University Level Exams</h2>
                  <p>
                    Agriculture university level exams are mentioned below for various
                    agriculture, engineering and other courses.
                  </p>
                  <h2>LPU NEST 2023</h2>
                  <p>
                    LPU NEST (Lovely Professional University National Eligibility and
                    Scholarship Test) is a university level examination regulated by LPU
                    University. Through this examination, students will be admitted into
                    various agriculture, engineering and other courses offered by LPU.
                    Candidates can fill out LPU NEST application form from Dec 2022.
                  </p>
                  <h2>BVP CET 2023</h2>
                  <p>
                    The Bharti Vidyapeeth Deemed University offers a variety of undergraduate
                    and graduate programmes in subjects like nursing, agriculture, law, and
                    many others.
                  </p>
                  <p>
                    To admit students to various programmes, this university holds various
                    agriculture entrance exams. Offline mode will be used to administer the
                    test (pen and paper based mode).
                  </p>
                  <h2>SAAT 2023</h2>
                  <p>
                    The Siksha O Anusandhan University administers the university-level SAAT
                    (Siksha O Anusandhan University Admission Test). This test is designed
                    to choose candidates for enrollment in agriculture and other courses
                    provided by SAAT and its sister campuses. Apr 2023 will be the month that
                    the exam is held.
                  </p>
                  <h2>AMU 2023</h2>
                  <p>
                    The Aligarh Muslim University (AMU) conducts entrance exams to offer
                    admission to UG and PG programmes in various subjects, including
                    engineering, law, and agriculture. Candidates will be admitted to
                    different courses based on their performance on the entrance exam. In Mar
                    2023, AMU application form will be made available.
                  </p>
                  <h2>Allahabad University 2023</h2>
                  <p>
                    Uttar Pradesh is the home of Allahabad University (also known as the
                    University of Allahabad). This university administers UGAT, PGAT, and
                    other tests to candidates for admission. It provides admissions for
                    diploma, undergraduate, graduate, and other programmes in law,
                    agriculture, and many others. In <strong>Apr 2023,</strong> UGAT 2023 and
                    PGAT 2023 application forms will be made available.
                  </p>{" "}

                </>
              ) : (
                <>
                  {/* ... condensed content ... */}
                  <div className="readMoreDiv">
                    <p className="readMoreButton" onClick={toggleContent} style={{ backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Show More</p>
                  </div>
                </>
              )}
            </div>
            <aside className="horizontalRectangle">
              <div className="appendAdDiv" style={{}}>
                <div className="lazy-ad" data-slot={0} id="div-gpt-ad-1614408539431-0" style={{ height: 90 }} />
              </div>
            </aside>
          </div>
          <div className="filter-container">
            <div className="sortBySection">
              <div className="row">
                <div className="selectedFilters col-md-9"></div>
                <div className="col-md-3">
                  <div className="sortByOption">
                    <div id="w0" className="list-view">
                      <select name="sort">
                        <option value="">Sort By</option>
                        <option value="exam-date">Exam Date</option>
                        <option value="application-date">Application Date</option>
                        <option value="result-date">Result Date</option>
                        <option value="popularity">Popularity</option>
                      </select>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div id="w1" className="list-view">
              <div className="summary">
                Showing <b>1-20</b> of <b>29</b> items.
              </div>
              <div data-key={5688}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/bcece.png"
                        alt="BCECE"
                        // onclick=""
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/bcece" title="BCECE">
                          BCECE 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5658}
                        data-ctalocation="exam_listing_page_web_mp-pat_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="MP PAT"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/mp-pat.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5658}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/mp-pat.png"
                        alt="MP PAT"
                        // onclick="gmu.url.goto('/exams/mp-pat')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/mp-pat" title="MP PAT">
                          MP PAT 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5658}
                        data-ctalocation="exam_listing_page_web_mp-pat_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="MP PAT"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/mp-pat.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5648}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/agricultural-scientists-recruitment-board-indian-council-of-agriculture-research-national-eligibility-test-asrb-icar-net.jpg"
                        alt="ASRB ICAR NET"
                        // onclick="gmu.url.goto('/exams/asrb-icar-net')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/asrb-icar-net" title="ASRB ICAR NET">
                          ASRB ICAR NET 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>Apr 26, 2023</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5648}
                        data-ctalocation="exam_listing_page_web_asrb-icar-net_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="ASRB ICAR NET"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/agricultural-scientists-recruitment-board-indian-council-of-agriculture-research-national-eligibility-test-asrb-icar-net.jpg"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5620}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/icar-aieea.png"
                        alt="ICAR AIEEA"
                        // onclick="gmu.url.goto('/exams/icar-aieea')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/icar-aieea" title="ICAR AIEEA">
                          ICAR AIEEA 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5620}
                        data-ctalocation="exam_listing_page_web_icar-aieea_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="ICAR AIEEA"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/icar-aieea.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5612}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/national-bank-for-agriculture-and-rural-development-grade-b-nabard-grade-b.png"
                        alt="NABARD Grade B"
                        // onclick="gmu.url.goto('/exams/nabard-grade-b')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/nabard-grade-b" title="NABARD Grade B">
                          NABARD Grade B 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5612}
                        data-ctalocation="exam_listing_page_web_nabard-grade-b_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="NABARD Grade B"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/national-bank-for-agriculture-and-rural-development-grade-b-nabard-grade-b.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5583}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/agricet.png"
                        alt="AGRICET"
                        // onclick="gmu.url.goto('/exams/agricet')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/agricet" title="AGRICET">
                          AGRICET 2022
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>Aug 30, 2022</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>Oct 10, 2022</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>Oct 31, 2022</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5583}
                        data-ctalocation="exam_listing_page_web_agricet_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="AGRICET"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/agricet.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5564}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/csk-hpau-entrance-exam.png"
                        alt="CSKHPKV Entrance Test"
                        // onclick="gmu.url.goto('/exams/csk-hpau-entrance-exam')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a
                          href="/exams/csk-hpau-entrance-exam"
                          title="CSKHPKV Entrance Test"
                        >
                          CSKHPKV Entrance Test 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>Jul 15, 2021</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5564}
                        data-ctalocation="exam_listing_page_web_csk-hpau-entrance-exam_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="CSKHPKV Entrance Test"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/csk-hpau-entrance-exam.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5562}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/jnu-ceeb.png"
                        alt="JNU CEEB"
                        // onclick="gmu.url.goto('/exams/jnu-ceeb')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/jnu-ceeb" title="JNU CEEB">
                          JNU CEEB 2022
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>Mar 11, 2022</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>Apr 23, 2022</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>May 26, 2022</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5562}
                        data-ctalocation="exam_listing_page_web_jnu-ceeb_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="JNU CEEB"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/jnu-ceeb.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5556}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/bhu-set.png"
                        alt="BHU SET"
                        // onclick="gmu.url.goto('/exams/bhu-set')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/bhu-set" title="BHU SET">
                          BHU SET 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>Feb 9, 2023</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>May 21, 2023</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5556}
                        data-ctalocation="exam_listing_page_web_bhu-set_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="BHU SET"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/bhu-set.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5553}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/bbau-entrance-exam.png"
                        alt="BBAU Entrance Exam"
                        // onclick="gmu.url.goto('/exams/bbau-entrance-exam')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/bbau-entrance-exam" title="BBAU Entrance Exam">
                          BBAU Entrance Exam 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>Aug 8, 2022</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5553}
                        data-ctalocation="exam_listing_page_web_bbau-entrance-exam_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="BBAU Entrance Exam"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/bbau-entrance-exam.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5547}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/bhu-uet.png"
                        alt="BHU UET"
                        // onclick="gmu.url.goto('/exams/bhu-uet')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/bhu-uet" title="BHU UET">
                          BHU UET 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5547}
                        data-ctalocation="exam_listing_page_web_bhu-uet_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="BHU UET"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/bhu-uet.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5535}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/ouat-entrance-exam.png"
                        alt="OUAT Exam"
                        // onclick="gmu.url.goto('/exams/ouat-entrance-exam')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/ouat-entrance-exam" title="OUAT Exam">
                          OUAT Exam 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5535}
                        data-ctalocation="exam_listing_page_web_ouat-entrance-exam_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="OUAT Exam"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/ouat-entrance-exam.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5494}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/maju-entrance-exam.png"
                        alt="MAJU Entrance Exam"
                        // onclick="gmu.url.goto('/exams/maju-entrance-exam')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/maju-entrance-exam" title="MAJU Entrance Exam">
                          MAJU Entrance Exam 2021
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>Feb 15, 2021</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>Aug 29, 2021</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5494}
                        data-ctalocation="exam_listing_page_web_maju-entrance-exam_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="MAJU Entrance Exam"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/maju-entrance-exam.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5489}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/joint-national-entrance-examination-jnee.png"
                        alt="JNEE"
                        // onclick="gmu.url.goto('/exams/jnee')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/jnee" title="JNEE">
                          JNEE 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5489}
                        data-ctalocation="exam_listing_page_web_jnee_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="JNEE"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/joint-national-entrance-examination-jnee.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5397}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/aau-vet.png"
                        alt="AAU VET"
                        // onclick="gmu.url.goto('/exams/aau-vet')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/aau-vet" title="AAU VET">
                          AAU VET 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5397}
                        data-ctalocation="exam_listing_page_web_aau-vet_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="AAU VET"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/aau-vet.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={5357}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/icar.png"
                        alt="ICAR JRF/SRF"
                        // onclick="gmu.url.goto('/exams/icar')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/icar" title="ICAR JRF/SRF">
                          ICAR JRF/SRF 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={5357}
                        data-ctalocation="exam_listing_page_web_icar_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="ICAR JRF/SRF"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/icar.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={179}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/ssc-fci.png"
                        alt="SSC FCI"
                        // onclick="gmu.url.goto('/exams/ssc-fci')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/ssc-fci" title="SSC FCI">
                          SSC FCI 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={179}
                        data-ctalocation="exam_listing_page_web_ssc-fci_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="SSC FCI"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/ssc-fci.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={95}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/keam.png"
                        alt="KEAM"
                        // onclick="gmu.url.goto('/exams/keam')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/keam" title="KEAM">
                          KEAM 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={95}
                        data-ctalocation="exam_listing_page_web_keam_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="KEAM"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/keam.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={93}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/mht-cet.png"
                        alt="MHT CET"
                        // onclick="gmu.url.goto('/exams/mht-cet')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/mht-cet" title="MHT CET">
                          MHT CET 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: "orange" }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={93}
                        data-ctalocation="exam_listing_page_web_mht-cet_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="MHT CET"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/mht-cet.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div data-key={43}>
                <div className="examTypeDiv">
                  <div className="row" style={{ border: '2px solid black' }}>
                    <div className="clgLogo">
                      <img
                        width={72}
                        height={72}
                        src="https://media.getmyuni.com/assets/images/main/exam/lpunest.png"
                        alt="LPUNEST"
                        // onclick="gmu.url.goto('/exams/lpunest')"
                      />
                    </div>
                    <div className="examTypeInfo">
                      <h3>
                        <a href="/exams/lpunest" title="LPUNEST">
                          LPUNEST 2023
                        </a>
                      </h3>
                      <div className="scheduledDates row desktopOnly">
                        <div className="col-md-4">
                          <p>
                            {" "}
                            Application <span className="desktopOnly">Form </span> Date
                          </p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Exam Date</p>
                          <p>N/A</p>
                        </div>
                        <div className="col-md-4">
                          <p>Result Date</p>
                          <p>N/A</p>
                        </div>
                      </div>
                    </div>
                    <div className="applyClg">
                      <button
                        style={{ backgroundColor: 'orange' }}
                        type="button"
                        className="primaryBtn applyNow desktopOnly getLeadForm examLeadValue js-open-lead-form"
                        data-platform="web"
                        data-entity="exam"
                        data-entityid={43}
                        data-ctalocation="exam_listing_page_web_lpunest_card_cta1"
                        data-ctatext="APPLY NOW"
                        data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                        data-subheadingtext="LPUNEST"
                        data-image="https://media.getmyuni.com/assets/images/main/exam/lpunest.png"
                      >
                        APPLY NOW
                      </button>{" "}
                    </div>
                  </div>
                  <div className="mobileApplyNow mobileOnly">
                    <button
                      type="button"
                      className="primaryBtn btn-block applyNow loadLeadModelNew examLeadValue js-open-lead-form"
                      data-platform="web"
                      data-entity="exam"
                      data-entityid={43}
                      data-ctalocation="exam_listing_page_wap_lpunest_card_cta1"
                      data-ctatext="APPLY NOW"
                      data-leadformtitle="REGISTER TO GET EXAM ALERTS"
                      data-subheadingtext="LPUNEST"
                      data-image="https://media.getmyuni.com/assets/images/main/exam/lpunest.png"
                    >
                      APPLY NOW
                    </button>{" "}
                  </div>
                </div>
              </div>
              <ul className="pagination">
                <li className="disabled">
                  <span>«</span>
                </li>
                <li className="active">
                  <a href="/exams/agriculture-exams-in-india?page=1" data-page={0}>
                    1
                  </a>
                </li>
                <li>
                  <a href="/exams/agriculture-exams-in-india?page=2" data-page={1}>
                    2
                  </a>
                </li>
                <li className="next">
                  <a href="/exams/agriculture-exams-in-india?page=2" data-page={1}>
                    »
                  </a>
                </li>
              </ul>
            </div>{" "}
          </div>
          <aside className="horizontalRectangle">
            <div className="appendAdDiv" style={{}}>
              <div
                className="lazy-ad"
                data-slot={1}
                id="div-gpt-ad-1614408539431-1"
                style={{ height: 90 }}
              />{" "}
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Agriculture;
