// import React from 'react';
import logo5 from '../assets/logo/logo05.png';

const LoginPage = () => {
  // Your form submission logic goes here

  return (
    <section className="vh-50" style={{ marginTop: '-244px' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem', width: '750px', height:'40%' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem', maxWidth: '100%', width: '200vh', height: '150vh' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <img
                          src={logo5}
                          alt="Logo"
                          className="logo-image me-3"
                          style={{ marginLeft: '-45px', marginTop: '-45px' }}
                        />
                        <span className="h3 fw-bold mb-0">Search My College</span>
                      </div>

                      <h4 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                     REGISTER NOW TO APPLY
                      </h4>
                      <h6 style={{marginTop: '-30px'}}>Get details and latest updates</h6>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email 
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Phone
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button">             
                        REGISTER
                        </button>
                      </div>

                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Dont have an account? <a href="#!" style={{ color: '#393f81' }}>Login here</a>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
