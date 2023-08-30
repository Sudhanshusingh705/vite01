import "./Footer.css"; // Adjust the path if necessary

function Footer() {
  return (
    <div
      className="mt-5 container-fluid bg-primary bg-gradient text-white footer-container"
      style={{ minHeight: "10rem" }}
    >
      {/* The rest of the code */}
      <div className="row pt-2 text-center">
        <div className="col-lg-4 col-md-4 col-sm-12   ">
          <h4>Top Colleges</h4>
          <div className="d-flex flex-column mb-2  ">
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              BE/BTech
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              MTech
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Mba
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Mca
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Bca
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              M.a
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              B.a
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12  ">
          <h4>Top Universities</h4>
          <div className="d-flex flex-column mb-2  ">
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Enginnering
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Management
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Medical
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Commerce
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Sciense
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Arts
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Law
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12  ">
          <h4>Top Exams</h4>
          <div className="d-flex flex-column mb-2  ">
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Jee-Main
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Neet
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Gate
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Clat
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Mat
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              Xat
            </a>
            <a
              href="#"
              className="text-white p-1"
              style={{ textDecoration: "none" }}
            >
              cat
            </a>
          </div>
          <p className="footer-line">
            © 2023 Seacrh My CollegePvt. Ltd. All Rights Reserved
          </p>
        </div>
      </div>

      <div className="jsx-2704726530 d-flex align-items-center footer-sub-title">
        {/* The rest of the code */}
        <p className="jsx-2704726530 footer-sub-title mb-0 mr-2">
          Download the Collegedunia app on
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.collegedunia&referr…3Dgoogle-play-store%26utm_content%3Dheader-click%26utm_campaign%3Ddownload"
          title="Download CollegeDunia App"
          target="_blank"
          rel="noreferrer noopener"
          className="jsx-2704726530 app-link"
        >
          <img
            data-src="https://images.collegedunia.com/public/asset/img/google-play.png?w=120&h=40&mode=stretch?h=31&w=95&mode=stretch"
            src="https://images.collegedunia.com/public/asset/img/google-play.png?w=120&h=40&mode=stretch?h=31&w=95&mode=stretch"
            alt="Download College Dunia App"
            height="31px"
            className="jsx-3380560943 mr-2 object-fit-contain ls-is-cached lazyloaded"
          />
        </a>
        <a
          href="https://itunes.apple.com/us/app/collegedunia/id1366265528?ls=1&mt=8"
          title="Download CollegeDunia App"
          target="_blank"
          rel="noreferrer noopener"
          className="jsx-2704726530 app-link"
        >
          <img
            data-src="https://images.collegedunia.com/public/asset/img/app-store.png?w=120&h=40&mode=stretch?h=33&w=96&mode=stretch"
            src="https://images.collegedunia.com/public/asset/img/app-store.png?w=120&h=40&mode=stretch?h=33&w=96&mode=stretch"
            alt="downloadapp_banner image"
            height="33px"
            className="jsx-3690613935 object-fit-contain ls-is-cached lazyloaded"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
