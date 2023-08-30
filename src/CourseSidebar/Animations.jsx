import { useState } from "react";
import "../components/TopcourseSidebar/CourseSidebar.css";
import "./Animations.css";

const Animations = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div>
      <h2
        style={{ marginTop: "-110px", fontWeight: "bold", textAlign: "center" }}
      >
        Top Animation Courses in India 2023
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
              <h1>Animation Full Course </h1>
              <h2>
                Animation Full Course 2023 National, State &amp; University
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
                    Students are increasingly choosing to major in animation to
                    pursue higher education. The field of animation offers a
                    variety of courses. There are animation courses available at
                    the undergraduate, graduate, and doctoral levels for
                    students to choose from. Students who want to enroll in
                    animation courses must pass an animation full course at the
                    national, university, or state level. Here, were giving you
                    all the information you need about animation Full Course
                    2023.
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
                <small className="text-muted">💰Avarage fees:  10K to INR 75K per annum</small>
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


export default Animations;
