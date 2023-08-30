import "./Login.css";

const LoginForm = () => {
  return (
    <div>
      <div className="jsx-2410506689 jsx-1589024895 row auth-row mx-0">
        <div className="jsx-2410506689 jsx-1589024895 col-6 sections left">
          <div className="jsx-1920111980 container-card p-5 d-inline-block rounded">
            <h3 className="jsx-1920111980 font-weight-bold  mt-0 section-heading">
              Why Sign Up?
            </h3>
            <ul className="jsx-1920111980 bullets pl-0">
              <li className="jsx-1920111980">View College Brochures</li>
              <li className="jsx-1920111980">Check Detailed Fees</li>
              <li className="jsx-1920111980">
                Shortlist and Apply to colleges
              </li>
              <li className="jsx-1920111980">
                Ask Questions to senior Counselors
              </li>
              <li className="jsx-1920111980">Never miss Important deadlines</li>
            </ul>
          </div>
        </div>
        <div className="jsx-2410506689 jsx-1589024895 col-6 sections right">
          <div className="jsx-700464047 jsx-1696612131 login-card container-card px-3 pt-5 pb-4 d-inline-block rounded">
            <h3 className="jsx-700464047 jsx-1696612131 font-weight-bold text-center mt-0 section-heading">
              Login
            </h3>
            <form className="jsx-1512919080 form-card">
              <span className="jsx-1512919080 text-success mb-2" />
              <div className="jsx-1512919080 row mb-4">
                <div className="jsx-1512919080 login-country-code material-form-field mr-4 mb-0">
                  <div className="jsx-3014790155 position-relative d-block">
                    <div className="jsx-3014790155 ">
                      <input
                        autoComplete="off"
                        name="country_code"
                        type="text"
                        id="loginCountryCode"
                        placeholder=" "
                        className="jsx-3014790155 form-control material-field equi-padded "
                        defaultValue={+91}
                      />
                      <label
                        htmlFor="loginCountryCode"
                        className="jsx-3014790155  mb-0  d-none"
                      />
                    </div>
                    <div className="jsx-3014790155 invalid-feedback mat-feedback  d-none" />
                  </div>
                </div>
                <div className="jsx-1512919080 col pl-0">
                  <div className="material-form-field-wrapper">
                    <div className="material-form-field">
                      <input
                        name="phone_no"
                        type="text"
                        className="form-control material-field"
                        id="loginPhoneNo"
                        placeholder=""
                        maxLength={10}
                        list=""
                        autoComplete="on"
                        defaultValue=""
                      />
                      <span className="icon mat-prepend-icon icon-gray phone">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
                        </svg>
                      </span>
                      <label
                        htmlFor="loginPhoneNo"
                        className="material-field-label mb-0"
                      >
                        Mobile Number
                      </label>
                    </div>
                    <div className="invalid-feedback mat-feedback bottom-error d-none" />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="jsx-1512919080 btn  btn-primary btn-block py-3"
              >
                Request OTP
              </button>
              <div className="jsx-1512919080 text-center pt-2 invalid-feedback d-none" />
            </form>
            <div className="jsx-700464047 jsx-1696612131 text-center mt-3">
              Not a member yet!{" "}
              <span className="jsx-700464047 jsx-1696612131 text-link pointer">
                Join us
              </span>{" "}
              its free.
            </div>
            <div className="jsx-700464047 jsx-1696612131 text-center mt-4 d-flex align-items-center">
              <span className="jsx-700464047 jsx-1696612131 border-bottom d-block w-100" />
              <span className="jsx-700464047 jsx-1696612131 px-2"> OR</span>
              <span className="jsx-700464047 jsx-1696612131 border-bottom d-block w-100" />
            </div>
            <div className="jsx-700464047 jsx-1696612131 text-center mt-4 ">
              <span className="jsx-700464047 jsx-1696612131 text-link mt-4 w-100 pointer">
                Register as College Admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

// // src/components/LoginForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function LoginForm() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);

//   const handleSendOtp = async () => {
//     try {
//       const response = await axios.post('/api/send-otp', { phoneNumber });
//       setOtpSent(true);
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('/api/login', { phoneNumber, otp });
//       console.log('Logged in:', response.data);
//       // Handle successful login here
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChange={e => setPhoneNumber(e.target.value)}
//       />
//       <br />
//       {!otpSent ? (
//         <button onClick={handleSendOtp}>Send OTP</button>
//       ) : (
//         <>
//           <input
//             type="text"
//             placeholder="OTP"
//             value={otp}
//             onChange={e => setOtp(e.target.value)}
//           />
//           <button onClick={handleLogin}>Login</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default LoginForm;
