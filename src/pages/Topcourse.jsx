import { useState } from "react";
import "./Topcourse.css";

const Topcourse = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <div style={{marginTop: '-149px'}}>
      <header
        className="courseHeroSection container mt-3"
        style={{ border: "1px solid gray", marginTop: '-140px'}}
      >
        <div className="row">
          <div className="col-md-7" >
            <h1 style={{fontSize: '24px'}}>Courses in India</h1>
            <div className="searchBar">
              <input
                className="searchForExam search-autocomplete"
                id="autoComplete"
                data-type="course"
                autoComplete="off"
                placeholder=" 🔍 Search for Courses, Degree or Certification"
                type="text"
                tabIndex="1"
              />
              <div className="selection"></div>
            </div>
            <p>Trending Courses</p>
            <div className="poplarCourse">
              <ul className="">
                <li>
                  <a
                    href="/bba-course"
                    title="BBA [Bachelor of Business Administration]"
                    style={{ textDecoration: "none" }}
                  >
                    BBA
                  </a>
                </li>
                <li>
                  <a
                    href="/bca-course"
                    title="BCA [Bachelor of Computer Application]"
                    style={{ textDecoration: "none" }}
                  >
                    BCA
                  </a>
                </li>
                <li>
                  <a
                    href="/be-course"
                    title="BE [Bachelor of Engineering]"
                    style={{ textDecoration: "none" }}
                  >
                    Bachelor of Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="/llb-course"
                    title="LLB [Bachelor of Law]"
                    style={{ textDecoration: "none" }}
                  >
                    LLB
                  </a>
                </li>
                <li>
                  <a href="/ba-course" title="BA [Bachelor of Arts]">
                    BA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5" style={{ margin: '-25px 0'}}></div>
        </div>
      </header>
      <br />

      <aside>
    <div className="horizontalRectangle">
      <div className="appendAdDiv" style={{ background: "#EAEAEA" }}>
        <div
          className="lazy-ad"
          data-slot="1"
          id="div-gpt-ad-1614408539431-1"
          style={{ height: "90px" }}
        >
          <script>
            {`
              googletag.cmd.push(function() {
                googletag.display('div-gpt-ad-1614408539431-1');
              });
            `}
          </script>
        </div>
      </div>
    </div>
      </aside>

      {/*SHOW MORE */}
      <div className="col-md-9 container mt-3" style={{ border: "1px solid gray", width: "395vh"}}>
        <div className="pageDescription" style={{ margin: '-25px 0'}}>
          {/* ... content ... */}
          <h1> Top Courses in India </h1>
          <h2>Explore course by stream</h2>
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
                Deciding what course students want to pursue in India is a very
                important and difficult decision in every student’s life.
                Courses in India are available for students in many streams and
                subjects, making it possible for the aspirants to pursue their
                dream careers.
              </p>
              <p>
                A course is a specialized field of the topic that the students
                pursue to learn about a subject in great depth and detail. All
                the best courses in India are provided to students at
                Undergraduate, Postgraduate, Diploma, Certificate and Doctorate
                levels.
              </p>
              <p>
                These levels of courses are further divided into streams that
                the students can choose to pursue. The trending courses in India
                are part of different streams such as&nbsp; Arts, Social
                Sciences, Engineering, Medical and Commerce streams.
              </p>
              <p>
                <strong>Top 10 Courses In Demand In India</strong>
              </p>
              <p>Given below are the top 10 courses in demand in India:</p>
              <div className="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <td>
                        <p>SI.No</p>
                      </td>
                      <td>
                        <p>Name Of Course</p>
                      </td>
                      <td>
                        <p>Duration</p>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>1</p>
                      </td>
                      <td>
                        <p>B.Tech</p>
                      </td>
                      <td>
                        <p>4 Years</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>2</p>
                      </td>
                      <td>
                        <p>B.Arch</p>
                      </td>
                      <td>
                        <p>4 Years</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>3</p>
                      </td>
                      <td>
                        <p>MBA</p>
                      </td>
                      <td>
                        <p>2 Years</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>4</p>
                      </td>
                      <td>
                        <p>BBA</p>
                      </td>
                      <td>
                        <p>3 Years</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>5</p>
                      </td>
                      <td>
                        <p>BA</p>
                      </td>
                      <td>
                        <p>3 Years</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>6</p>
                      </td>
                      <td>
                        <p>B.Sc</p>
                      </td>
                      <td>
                        <p>3 Years</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>7</p>
                      </td>
                      <td>
                        <p>B.Com</p>
                      </td>
                      <td>
                        <p>3 Years</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>8</p>
                      </td>
                      <td>
                        <p>B.Des Graphic Design</p>
                      </td>
                      <td>
                        <p>4 Years</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>9</p>
                      </td>
                      <td>
                        <p>MBBS</p>
                      </td>
                      <td>
                        <p>5.5 Years</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>10</p>
                      </td>
                      <td>
                        <p>BDS</p>
                      </td>
                      <td>
                        <p>5 Years</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                For obtaining admission to a course of the students choice, it
                is vital that the students research the specific details
                pertaining to the course. The eligibility criteria, admission
                process, and fee structure of the course are important factors
                to consider when deciding what course to pursue.&nbsp;
              </p>
              <p>
                Hence, if students put the effort to learn the fine details of
                these courses they will be able to pursue their dream course
                without any hiccups!
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
      </div>

      <br />
      {/*ALL CARDS*/}
      <div className="courseCardList row">
      {/* Course card 1 */}
      <div className="courseCard">
        <div className="row">
          <span
            // onclick="gmu.url.goto('/courses/engineering')"
            title="Engineering Courses in india"
            className="courseSprite engineering"
          ></span>
          <h3>
            <a
              className="courseTitle"
              href="/courses/engineering"
              title="Engineering Courses in india"
            >
              Engineering
            </a>
          </h3>
        </div>
        <div className="row pb-0">
          <a href="/btech-course" title="B.Tech" className="courseName">
            B.Tech
          </a>
          <a href="/be-course" title="B.E" className="courseName">
            B.E
          </a>
          <a href="/mtech-course" title="M.Tech" className="courseName">
          M.Tech
          </a>
          <a href="/me-course" title="M.E" className="courseName">
          M.E
          </a>
        </div>
        <a
          href="/courses/engineering"
          title="Engineering Courses in india"
          className="checkAllCourses "
          style={{ color: 'var(--color-red)' }}
        >
          View All Engineering Courses
        </a>
      </div>
      {/* Course card 2 */}
      <div className="courseCard">
        <div className="row">
          <span
            // onclick="gmu.url.goto('/courses/management')"
            title="Management Courses in india"
            className="courseSprite management"
          ></span>
          <h3>
            <a
              className="courseTitle"
              href="/courses/management"
              title="Management Courses in india"
            >
              Management
            </a>
          </h3>
        </div>
        <div className="row pb-0">
          <a href="/bba-course" title="BBA" className="courseName">
            BBA
          </a>
          <a href="/mba-course" title="MBA" className="courseName">
            MBA
          </a>
          <a href="/bbm-course" title="BBM" className="courseName">
          BBM
          </a>
          <a href="/mms-course" title="MMS" className="courseName">
          MMS
          </a>
        </div>
        <a
          href="/courses/management"
          title="Management Courses in india"
          className="checkAllCourses"
          style={{ color: 'var(--color-red)' }}
        >
          View All Management Courses
        </a>
      </div>
      {/*CARD 3 */}
      <div className="courseCard ">
    <div className="row">
      <span
        // onclick="gmu.url.goto('/courses/science')"
        title="Science Courses in india"
        className="courseSprite science"
      />
      <h3>
        <a
          className="courseTitle"
          href="/courses/science"
          title="Science Courses in india"
        >
          Science{" "}
        </a>
      </h3>
    </div>
    <div className="row pb-0">
      <a href="/bsc-course" title="B.Sc" className="courseName">
        B.Sc
      </a>
      <a href="/msc-course" title="M.Sc" className="courseName">
        M.Sc
      </a>
      <a href="/bfsc-course" title="B.F.Sc" className="courseName">
        B.F.Sc
      </a>
      <a href="/mfsc-course" title="M.F.Sc" className="courseName">
        M.F.Sc
      </a>
    </div>
    <a
      href="/courses/science"
      title="Science Courses in india"
      className="checkAllCourses"
      style={{ color: 'var(--color-red)' }}
    >
      View All Science Courses
    </a>
      </div>
      <div className="courseCard ">
      <div className="row">
        <span
          // onclick="gmu.url.goto('/courses/pharmacy')"
          title="Pharmacy Courses in india"
          className="courseSprite pharmacy"
        />
        <h3>
          <a
            className="courseTitle"
            href="/courses/pharmacy"
            title="Pharmacy Courses in india"
          >
            Pharmacy{" "}
          </a>
        </h3>
      </div>
      <div className="row pb-0">
        <a href="/bpharm-course" title="B.Pharma" className="courseName">
          B.Pharma
        </a>
        <a href="/mpharm-course" title="M.Pharma" className="courseName">
          M.Pharma
        </a>
        <a href="/dpharma-course" title="D.Pharma" className="courseName">
          D.Pharma
        </a>
        <a href="/pharmd-course" title="Pharma D" className="courseName">
          Pharma D
        </a>
      </div>
      <a
        href="/courses/pharmacy"
        title="Pharmacy Courses in india"
        className="checkAllCourses"
        style={{ color: 'var(--color-red)' }}
      >
        View All Pharmacy Courses
      </a>
    </div>
    {/*CARDS 4 */}
    <div className="courseCard ">
      <div className="row">
        <span
          // onclick="gmu.url.goto('/courses/law')"
          title="Law Courses in india"
          className="courseSprite law"
        />
        <h3>
          <a
            className="courseTitle"
            href="/courses/law"
            title="Law Courses in india"
          >
            Law{" "}
          </a>
        </h3>
      </div>
      <div className="row pb-0">
        <a href="/llb-course" title="LLB" className="courseName">
          LLB
        </a>
        <a href="/llm-course" title="LLM" className="courseName">
          LLM
        </a>
        <a
          href="/diploma-in-taxation-law-dtl-course"
          title="DTL"
          className="courseName"
        >
          DTL
        </a>
        <a
          href="/diploma-in-labour-law-course"
          title="Diploma in Labour Law"
          className="courseName"
        >
          Diploma in Labour Law
        </a>
      </div>
      <a
        href="/courses/law"
        title="Law Courses in india"
        className="checkAllCourses"
        style={{ color: 'var(--color-red)' }}
      >
        View All Law Courses
      </a>
    </div>

    <div className="courseCard ">
      <div className="row">
        <span
          // onclick="gmu.url.goto('/courses/design')"
          title="Design Courses in india"
          className="courseSprite design"
        />
        <h3>
          <a
            className="courseTitle"
            href="/courses/design"
            title="Design Courses in india"
          >
            Design{" "}
          </a>
        </h3>
      </div>
      <div className="row pb-0">
        <a href="/bdes-course" title="B.Des" className="courseName">
          B.Des
        </a>
        <a href="/mdes-course" title="M.Des" className="courseName">
          M.Des
        </a>
        <a
          href="/diploma-in-interior-design-course"
          title="Diploma in Interior Design"
          className="courseName"
        >
          Diploma in Interior Design
        </a>
        <a
          href="/diploma-in-fashion-design-course"
          title="Diploma in Fashion Design"
          className="courseName"
        >
          Diploma in Fashion Design
        </a>
      </div>
      <a
        href="/courses/design"
        title="Design Courses in india"
        className="checkAllCourses"
        style={{ color: 'var(--color-red)' }}
      >
        View All Design Courses
      </a>
    </div>

    <div className="courseCard ">
    <div className="row">
      <span
        // onclick="gmu.url.goto('/courses/commerce')"
        title="Commerce Courses in india"
        className="courseSprite commerce"
      />
      <h3>
        <a
          className="courseTitle"
          href="/courses/commerce"
          title="Commerce Courses in india"
        >
          Commerce{" "}
        </a>
      </h3>
    </div>
    <div className="row pb-0">
      <a href="/bcom-course" title="B.Com" className="courseName">
        B.Com
      </a>
      <a href="/mcom-course" title="M.Com" className="courseName">
        M.Com
      </a>
      <a
        href="/chartered-financial-analyst-cfa-course"
        title="CFA"
        className="courseName"
      >
        CFA
      </a>
      <a href="/mfc-course" title="MFC" className="courseName">
        MFC
      </a>
    </div>
    <a
      href="/courses/commerce"
      title="Commerce Courses in india"
      className="checkAllCourses"
      style={{ color: 'var(--color-red)' }}
    >
      View All Commerce Courses
    </a>
  </div>

  <div className="courseCard ">
      <div className="row">
        <span
          // onclick="gmu.url.goto('/courses/medical')"
          title="Medical Courses in india"
          className="courseSprite medical"
        />
        <h3>
          <a
            className="courseTitle"
            href="/courses/medical"
            title="Medical Courses in india"
          >
            Medical{" "}
          </a>
        </h3>
      </div>
      <div className="row pb-0">
        <a href="/mbbs-course" title="MBBS" className="courseName">
          MBBS
        </a>
        <a href="/bams-course" title="BAMS" className="courseName">
          BAMS
        </a>
        <a href="/bums-course" title="BUMS" className="courseName">
          BUMS
        </a>
        <a href="/bhms-course" title="BHMS" className="courseName">
          BHMS
        </a>
      </div>
      <a
        href="/courses/medical"
        title="Medical Courses in india"
        className="checkAllCourses"
        style={{ color: 'var(--color-red)' }}
      >
        View All Medical Courses
      </a>
    </div>

    <div className="courseCard ">
    <div className="row">
      <span
        // onclick="gmu.url.goto('/courses/dental')"
        title="Dental Courses in india"
        className="courseSprite dental"
      />
      <h3>
        <a
          className="courseTitle"
          href="/courses/dental"
          title="Dental Courses in india"
        >
          Dental{" "}
        </a>
      </h3>
    </div>
    <div className="row pb-0">
      <a href="/bds-course" title="BDS" className="courseName">
        BDS
      </a>
      <a href="/mds-course" title="MDS" className="courseName">
        MDS
      </a>
      <a
        href="/mds-prosthodontics-course"
        title="MDS Prosthodontics"
        className="courseName"
      >
        MDS Prosthodontics
      </a>
      <a
        href="/mds-periodontics-course"
        title="MDS Periodontics"
        className="courseName"
      >
        MDS Periodontics
      </a>
    </div>
    <a
      href="/courses/dental"
      title="Dental Courses in india"
      className="checkAllCourses"
      style={{ color: 'var(--color-red)' }}
    >
      View All Dental Courses
    </a>
  </div>

  <div className="courseCard hideStreamCard" style={{ display: "block" }}>
      <div className="row">
        <span
          // onclick="gmu.url.goto('/courses/architecture')"
          title="Architecture Courses in india"
          className="courseSprite architecture"
        />
        <h3>
          <a
            className="courseTitle"
            href="/courses/architecture"
            title="Architecture Courses in india"
          >
            Architecture{" "}
          </a>
        </h3>
      </div>
      <div className="row pb-0">
        <a href="/barch-course" title="B.Arch" className="courseName">
          B.Arch
        </a>
        <a href="/march-course" title="M.Arch" className="courseName">
          M.Arch
        </a>
        <a
          href="/diploma-in-architecture-engineering-course"
          title="Diploma in Architecture Engineering"
          className="courseName"
        >
          Diploma in Architecture Engineering
        </a>
        <a
          href="/barch-interior-design-course"
          title="B.Arch Interior Design"
          className="courseName"
        >
          B.Arch Interior Design
        </a>
      </div>
      <a
        href="/courses/architecture"
        title="Architecture Courses in india"
        className="checkAllCourses"
        style={{ color: 'var(--color-red)' }}
      >
        View All Architecture Courses
      </a>
    </div>

    <div className="courseCard hideStreamCard" style={{ display: "block" }}>
      <div className="row">
        <span
          // onclick="gmu.url.goto('/courses/arts')"
          title="Arts Courses in india"
          className="courseSprite arts"
        />
        <h3>
          <a
            className="courseTitle"
            href="/courses/arts"
            title="Arts Courses in india"
          >
            Arts{" "}
          </a>
        </h3>
      </div>
      <div className="row pb-0">
        <a href="/ba-course" title="BA" className="courseName">
          BA
        </a>
        <a href="/ma-course" title="MA" className="courseName">
          MA
        </a>
        <a href="/bfa-course" title="BFA" className="courseName">
          BFA
        </a>
        <a href="/bsw-course" title="BSW" className="courseName">
          BSW
        </a>
      </div>
      <a
        href="/courses/arts"
        title="Arts Courses in india"
        className="checkAllCourses"
        style={{ color: 'var(--color-red)' }}
      >
        View All Arts Courses
      </a>
    </div>

    <div className="courseCard hideStreamCard" style={{ display: "block" }}>
      <div className="row">
        <span
          // onclick="gmu.url.goto('/courses/agriculture')"
          title="Agriculture Courses in india"
          className="courseSprite agriculture"
        />
        <h3>
          <a
            className="courseTitle"
            href="/courses/agriculture"
            title="Agriculture Courses in india"
          >
            Agriculture{" "}
          </a>
        </h3>
      </div>
      <div className="row pb-0">
        <a
          href="/bsc-agriculture-course"
          title="B.Sc Agriculture"
          className="courseName"
        >
          B.Sc Agriculture
        </a>
        <a
          href="/msc-agriculture-course"
          title="M.Sc Agriculture"
          className="courseName"
        >
          M.Sc Agriculture
        </a>
        <a
          href="/diploma-in-agriculture-course"
          title="Diploma in agriculture"
          className="courseName"
        >
          Diploma in agriculture
        </a>
        <a
          href="/phd-agriculture-course"
          title="PhD Agriculture"
          className="courseName"
        >
          PhD Agriculture
        </a>
      </div>
      <a
        href="/courses/agriculture"
        title="Agriculture Courses in india"
        className="checkAllCourses"
        style={{ color: 'var(--color-red)' }}
      >
        View All Agriculture Courses
      </a>
    </div>

    <div className="courseCard hideStreamCard" style={{ display: "block" }}>
      <div className="row">
        <span
          // onclick="gmu.url.goto('/courses/paramedical')"
          title="Paramedical Courses in india"
          className="courseSprite paramedical"
        />
        <h3>
          <a
            className="courseTitle"
            href="/courses/paramedical"
            title="Paramedical Courses in india"
          >
            Paramedical{" "}
          </a>
        </h3>
      </div>
      <div className="row pb-0">
        <a href="/nursing-course" title="ANM Nursing" className="courseName">
          ANM Nursing
        </a>
        <a href="/dmlt-course" title="DMLT" className="courseName">
          DMLT
        </a>
        <a href="/gnm-course" title="GNM Nursing" className="courseName">
          GNM Nursing
        </a>
        <a href="/bmlt-course" title="BMLT" className="courseName">
          BMLT
        </a>
      </div>
      <a
        href="/courses/paramedical"
        title="Paramedical Courses in india"
        className="checkAllCourses"
        style={{ color: 'var(--color-red)' }}
      >
        View All Paramedical Courses
      </a>
    </div>

    <div className="courseCard hideStreamCard" style={{ display: "block" }}>
    <div className="row">
      <span
        // onclick="gmu.url.goto('/courses/education')"
        title="Education Courses in india"
        className="courseSprite education"
      />
      <h3>
        <a
          className="courseTitle"
          href="/courses/education"
          title="Education Courses in india"
        >
          Education{" "}
        </a>
      </h3>
    </div>
    <div className="row pb-0">
      <a href="/bed-course" title="B.Ed" className="courseName">
        B.Ed
      </a>
      <a href="/med-course" title="M.Ed" className="courseName">
        M.Ed
      </a>
      <a href="/deled-course" title="D.EL.Ed" className="courseName">
        D.EL.Ed
      </a>
      <a href="/bped-course" title="B.P.Ed" className="courseName">
        B.P.Ed
      </a>
    </div>
    <a
      href="/courses/education"
      title="Education Courses in india"
      className="checkAllCourses"
      style={{ color: 'var(--color-red)' }}
    >
      View All Education Courses
    </a>
  </div>


  <div className="courseCard hideStreamCard" style={{ display: "block" }}>
  <div className="row">
    <span
      // onclick="gmu.url.goto('/courses/computer')"
      title="Computer Application Courses in india"
      className="courseSprite computer"
    />
    <h3>
      <a
        className="courseTitle"
        href="/courses/computer"
        title="Computer Application Courses in india"
      >
        Computer Application{" "}
      </a>
    </h3>
  </div>
  <div className="row pb-0">
    <a href="/bca-course" title="BCA" className="courseName">
      BCA
    </a>
    <a href="/mca-course" title="MCA" className="courseName">
      MCA
    </a>
    <a href="/pgdca-course" title="PGDCA" className="courseName">
      PGDCA
    </a>
    <a
      href="/cisco-certified-network-associate-ccna-course"
      title="CCNA"
      className="courseName"
    >
      CCNA
    </a>
  </div>
  <a
    href="/courses/computer"
    title="Computer Application Courses in india"
    className="checkAllCourses"
    style={{ color: 'var(--color-red)' }}
  >
    View All Computer Application Courses
  </a>
</div>

 <div className="col-12 p-0" style={{ display: "none" }}>
      <button className="viewAllStream">
        View All Streams <span className="spriteIcon caret-red" />
      </button>
    </div>

      {/* Continue adding more course cards */}
    </div>

    <br />
    {/*FOR ADS ONLY */}
    <aside>
    <div className="horizontalRectangle">
      <div className="appendAdDiv" style={{ background: "#EAEAEA" }}>
        <div
          className="lazy-ad"
          data-slot="1"
          id="div-gpt-ad-1614408539431-1"
          style={{ height: "90px" }}
        >
          <script>
            {`
              googletag.cmd.push(function() {
                googletag.display('div-gpt-ad-1614408539431-1');
              });
            `}
          </script>
        </div>
      </div>
    </div>
    </aside>

    </div>
  );
};

export default Topcourse;
