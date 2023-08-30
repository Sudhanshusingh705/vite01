import { useState } from "react";
import "./MassCommunications.css";
import "../components/TopcourseSidebar/CourseSidebar.css";

const MassCommunications = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h2
        style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
      >
        Top MassCommunication Course in India 2023
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
              <h1>Mass Communication Full Course </h1>
              <h2>
                Mass Communication Full Course 2023 National, State &amp;
                University Level
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
                    BA in Mass Communication is a 3-year undergraduate course
                    which has been designed to teach the students about mass
                    communication. It is designed to help students learn about
                    each constituent of mass media in detail, for e.g.
                    newspaper, radio, etc. BA Mass Communication familiarizes
                    students with the theoretical and methodological foundations
                    of Media Studies as well as introduces students to the
                    practice and study of media communication through Print
                    Media, Broadcast Media, Social Media, etc. Students who have
                    completed 10+2 in any stream from a recognized board with a
                    minimum of 50% marks in aggregate are eligible. Colleges
                    offer admission through both merit as well direct admission.
                    The type of admission applicable depends on the college. A
                    student who has completed a BA in Mass Communication has
                    career opportunities in films & TV, journalism, editing,
                    publishing, public relations, direction, filmmaking,
                    scriptwriting, and production. Check: All Mass Media Courses
                    Full Forms There are quite attractive and high paying jobs
                    for BA in mass communication graduates as journalist, actor,
                    director, editor, screenwriter, producer, VJ depending on
                    the interests and talent of an individual. The highest
                    annual salary of around INR 12 lakhs can be expected,
                    whereas an average annual salary around INR 3-6 lakhs can be
                    expected. Further study options post completion of this
                    course include M.A in Mass Communication, MAJMC, MA in PR,
                    etc.
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
                BJMC [Bachelor of Journalism and Mass Communication]
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
                <small className="text-muted">💰Avarage fees: 2 - 4 LPA</small>
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
                BMM [Bachelor of Mass Media]
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
                <small className="text-muted">💰Avarage fees: 30,000- 1 LPA</small>
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
                MJMC [Master of Journalism and Mass Communication]
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
                <small className="text-muted">💰Avarage fees: 5000 - 54,000 PA</small>
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
               BMC [Bachelor of Mass Communication]
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
              Bachelor of Arts [BA] (Multimedia)
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
                <small className="text-muted">💰Avarage fees: 40000-1 LPA</small>
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
                Master of Arts [MA] (Communication)
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
                <small className="text-muted">💰Avarage fees: 20,000 - 20 LPA</small>
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
                PhD in Mass Communication
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
                <small className="text-muted">💰Avarage fees: 10,000 to 2 LPA</small>
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
                Diploma in Journalism and Mass Communication
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

export default MassCommunications;
