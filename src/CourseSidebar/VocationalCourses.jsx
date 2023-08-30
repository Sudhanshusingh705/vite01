import { useState } from "react";
import "./VocationalCourses.css";
import "../components/TopcourseSidebar/CourseSidebar.css";

const VocationalCourses = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
    <h2
      style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
    >
      Top Vocationals Course in India 2023
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
            <h1>Vocational Full Course </h1>
            <h2>
              Vocational Full Course 2023 National, State &amp; University
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
                  Vocational courses are training-based courses that aim at
                  preparing students for a particular career, skill, or trade.
                  Unlike traditional courses like BE/BTech/MBBS; Vocational
                  courses focus on practical skills, and on-site training and
                  thus offer better & quicker job opportunities. There are
                  thousands of Vocational courses in different fields. Among
                  the Vocational courses listed; Telecommunication,
                  Photography, Foreign Languages, Information Technology (IT),
                  Beautician, and Hotel Management are on the top. BVoc
                  (Bachelor of Vocational Studies) is a popular Vocational
                  degree course in India. AICTE recently released a list of
                  institutions that can offer BVoc degrees. Jamia Hamdard
                  (BVoc Food Processing), Meerabai Institute of Technology
                  (BVoc Interior Design), and Loyola Institute of Technology &
                  Sciences (BVoc Graphics & Multimedia) are the Top Vocational
                  Institutes. The eligibility and admission criteria for
                  vocational courses is quite flexible. Students need to pass
                  the className 10 and className 12 exams with minimum qualifying
                  marks and from a recognized board. Vocational courses take
                  less than 2 years and the average cost to pursue any
                  Vocational course is less than INR 1 lakh.
                </p>{" "}
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
              B.Voc [Bachelor of Vocational Studies]
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
              <small className="text-muted">💰Avarage fees: 6000 - 60,000 PA</small>
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
              M.Voc [Master of Vocation]
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
      </div>
    </div>
  </div>
  );
};

export default VocationalCourses;
