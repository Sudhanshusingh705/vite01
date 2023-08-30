// import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
/*study goal*/
import engineer from "../assets/icons/engineer.png";
import management from "../assets/icons/management.png";
import commerce from "../assets/icons/commerce.png";
import arts from "../assets/icons/art.png";
import medical from "../assets/icons/medical.png";
import design from "../assets/icons/design.png";
/*top collections*/
/*Explore Program*/

import smb from "../assets/topuniversities/smb.png";
import smb1 from "../assets/topuniversities/smb1.png";

/*Latets notifications*/
import uttar from "../assets/latestnotificaton/Uttar.jpg";
import clster from "../assets/latestnotificaton/clsterlogo.jpg";
import iimlko from "../assets/latestnotificaton/iimlko.jpg";
import mhtlogo from "../assets/latestnotificaton/mhtlogo.jpg";
import tamil from "../assets/latestnotificaton/tamil.jpg";
import ap from "../assets/latestnotificaton/ap.jpg";

/*Top Universities*/
import "./Home.css";
/* Hero */
/*PF*/
/*spacer */
import { MDBCardImage } from "mdb-react-ui-kit";
import { MDBCol, MDBContainer } from "mdb-react-ui-kit";
import { MDBRow } from "mdb-react-ui-kit";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

// import "animate.css";

import Sidebar from "../components/Sidebar/Sidebar";
import CourseSidebar from "../components/TopcourseSidebar/CourseSidebar";

const cardContainerStyle = {
  display: "flex",
  justifyContent: "center",
};

const cardStyle = {
  width: "233px",
  margin: "10px",
  padding: "-2px",
};

/*Top Collection */

function Home() {
  return (
    <div>
      <Sidebar />
      <br />
      <CourseSidebar />

      {/*CAROUSEL*/}

      {/* Select Your Study Goal  Scrollup cards */}
      <div className="container" style={{ marginTop: "-80px" }}>
        <h2 className="text">Select Your Study Goal</h2>
        <div className="card-top-collection container">
          <ul className="cards00" style={{ background: "#F5F8F9" }}>
            <li className="card00">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={engineer} height={40} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <a className="card00-title" href="/engineering" style={{textDecoration: 'none', color: 'black'}}>Engineering</a>
                    <p>6105 Colleges</p>
                  </div>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/engineering"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    BE/B.Tech
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/engineering"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    ME/M.Tech
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/engineering"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Diploma in Engineering
                  </a>
                </div>
              </div>
            </li>

            <li className="card00">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={management} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <a className="card00-title" href="/management" style={{textDecoration: 'none', color: 'black'}}>Management</a>
                    <p>6105 Colleges</p>
                  </div>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/management"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    MBA/PGDM
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/management"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    BBA/BBM
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/management"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Executive MBA
                  </a>
                </div>
              </div>
            </li>

            <li className="card00">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={commerce} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <a className="card00-title" href="/commerce" style={{textDecoration: 'none', color: 'black'}}>Commerce</a>
                    <p>4731 Colleges</p>
                  </div>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/commerce"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    B.COM
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/commerce"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    M.COM
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/commerce"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    MBA
                  </a>
                </div>
              </div>
            </li>

            <li className="card00">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={arts} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <a className="card00-title" href="/arts" style={{textDecoration: 'none', color: 'black'}}>Arts</a>
                    <p>5318 Colleges</p>
                  </div>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/arts"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    BA
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/arts"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    MA
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/arts"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    BFA
                  </a>
                </div>
              </div>
            </li>

            <li className="card00">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={medical} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <a className="card00-title" href="/medical" style={{textDecoration: 'none', color: 'black'}}>Medical</a>
                    <p>2152 Colleges</p>
                  </div>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/medical"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    MBBS
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/medical"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    B.Pharma
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/medical"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    B.Sc Nursing
                  </a>
                </div>
              </div>
            </li>

            <li className="card00">
              <div>
                <div className="nowrap">
                  <div className="circular-image colomn">
                    <img src={design} height={50} alt="" />
                  </div>
                  <div className="colomn padding-card">
                    <a className="card00-title" href="/design" style={{textDecoration: 'none', color: 'black'}}>Design</a>
                    <p>1283 Colleges</p>
                  </div>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/design"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    B.Des
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/design"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    M.Des
                  </a>
                </div>
                <div className="card00-content">
                  <a
                    className="hoverable-paragraph"
                    href="/design"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    BFA
                  </a>
                </div>
              </div>
            </li>
            <li className="card00">
              <h3
                className="card00-title text-center"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  className="hoverable-paragraph"
                  href="/agriculture"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  See All
                </a>
                <FiArrowRightCircle
                  style={{
                    verticalAlign: "middle",
                    marginLeft: "5px",
                    height: "90px",
                    width: "40px",
                  }}
                />
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <br />

      {/* Top Collections  */}
      <div className="container">
        <h2 className="text">Top Collections </h2>
        <div
          className="card-top-collection container"
          style={{
            cursor: "pointer",
            backgroundColor: "#F8F8F8",
            backgroundImage:
              "url(	https://searchmycolleges.com/wp-content/uploads/2023/05/bg-1.jpg )",
          }}
        >
          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card1">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?w=1060&t=st=1691131410~exp=1691132010~hmac=deba8597c59e0585f57d530c245302986007f7e1cfb583f26d472801b1eba457"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best MBA colleges in India
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/management">+4997 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card2">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/aerial-view-residence-bukovinian-dalmatian-metropolitans-chernivtsi-national-university-chernivtsi-touristic-destination-western-ukraine_231208-41.jpg?w=1380&t=st=1691136867~exp=1691137467~hmac=b1e3d2ba1559e405bca064bdcf30b9d3e229b6098f9cf6eb00bdca1ed347ecd2"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best BTech colleges in India
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+4188 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card3">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?w=1060&t=st=1691137037~exp=1691137637~hmac=6763c19a9c29c15e7c1aa14b4066d3463ee6a6543a3ad93aea06ca5d1328bfa0"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best BTech colleges in Pune
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+111 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card4">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/premium-photo/beautiful-architecture-king-s-college-chapel-cambridge-uk_1339-135072.jpg?w=1060"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best BTech colleges in Bangalore
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+122 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card5">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/premium-photo/facade-residential-building_305343-7577.jpg?w=1060"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best MBA colleges in Bangalore
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/management">+237 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card6">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/premium-photo/harrisonburg-virginia-usa-james-madison-university_303206-87.jpg?w=1060"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best MBA colleges in Pune
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/management">+239 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card7">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/skyline-window-sun-scene-sky_1127-2330.jpg?w=996&t=st=1691137402~exp=1691138002~hmac=0e5123e25036df369f3758ca71041f978b85f88ffaadb69332c2afce558be5c8"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best BTech colleges in Hyderabad
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+127 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card8">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/aerial-view-residence-bukovinian-dalmatian-metropolitans-chernivtsi-national-university-chernivtsi-touristic-destination-western-ukraine_231208-48.jpg?w=1380&t=st=1691137508~exp=1691138108~hmac=7f8cd0fc4b48066083f49a32e3c3d275c52ea94b0be2046d1cb9750840d259b8"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best MBA colleges in Delhi
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/management">+546 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card9">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/building-lake_1127-3045.jpg?w=1380&t=st=1691137545~exp=1691138145~hmac=48f7549235afc1b22ac785d9e77aa5dacdbce5a77aa397d4521209ff38c62322"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best MBA colleges in Mumbai
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/management">+129 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card10">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/red-buildings-households_1127-2024.jpg?w=996&t=st=1691137588~exp=1691138188~hmac=6c63cc1233bc28dbccad618f35abe0cb72a86267d3f4522e3f633f3481efb922"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best BTech colleges in Mumbai
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+43 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card11">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/large-modern-office-building_1127-3072.jpg?w=996&t=st=1691137624~exp=1691138224~hmac=5e52f181f11e5990a306c3b3de0f161c4359ff3b69fc96fefbef7cf7c0425f8a"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best BTech colleges in Chennai
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+115 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card12">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/aerial-view-residence-bukovinian-dalmatian-metropolitans-chernivtsi-national-university-chernivtsi-touristic-destination-western-ukraine_231208-41.jpg?w=1380&t=st=1691139991~exp=1691140591~hmac=0ddc223f71c0a9dcd0d131eda437920eacef43ffa679f628e423efe1aefdc48c"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best MBA colleges in Hyderabad
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="#">+193 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card13">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/amazing-shot-buildings-unique-architecture-gamla-stan-stockholm-sweden_181624-48921.jpg?t=st=1691128503~exp=1691129103~hmac=446f30471ce038b7f29f6ac63dcf4928abd30d938bceadf07a7003b5236f3e29"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best BTech colleges in Coimbatore
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+70 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card14">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/portrait-young-girl-embracing-grandfather-park_155003-3840.jpg?w=900&t=st=1691140298~exp=1691140898~hmac=97b47c8ed2f627c8e047077f052f681dd693d381dfa5f87793612c49af55e976"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best Private BTech colleges in India
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+3490 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card15">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/back-view-medium-shot-highschool-student-looking-sideways_23-2148225284.jpg?w=1060&t=st=1691140327~exp=1691140927~hmac=8c282b37a6cd3f4a388898a5684e4dc15cb243774f065ebd4698dc207e19f17a"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best MBA colleges in Kolkata
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/management">+93 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card16">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/premium-photo/smiling-students-african-american-male-glasses-with-books-girl-near-college_8119-2342.jpg?w=1060"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best BTech colleges in TamilNadu
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+614 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card17">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/friends-with-smile-happy-emotions-university_496169-67.jpg?w=1060&t=st=1691140622~exp=1691141222~hmac=33899ecdf6e332c314a0c7d4b1f2f5cfb6c4e371967539274fcfc91ab8d1fef5"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best BTech colleges in Karnataka
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+270 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card18">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/university-melbourne-is-located-heart-city_1340-45716.jpg?t=st=1691140664~exp=1691144264~hmac=11ffd3f4c956d8b9931ca080b35ddaa072b952956ad7780e67a7c66af3c8b95c&w=1060"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best BTech colleges in Jabalpur
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/engineering">+20 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card19">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/free-photo/low-angle-students-taking-selfie_23-2148522199.jpg?w=996&t=st=1691140747~exp=1691141347~hmac=9139db2261f4f5a9587d0e7fa4553806eb0bea5c44fcd901c1d6ddf5e363faf2"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best MBA colleges in Chennai
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/management">+152 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>

          <div style={cardContainerStyle}>
            <MDBCard style={cardStyle} id="card20">
              <MDBCardImage
                position="top"
                alt="..."
                src="https://img.freepik.com/premium-photo/king-s-college-chapel-cambridge_1339-82841.jpg?w=1060"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <MDBCardBody
                style={{ textAlign: "center", color: "rgb(43,45,66)" }}
              >
                <MDBCardTitle style={{ fontSize: "17px", fontWeight: "bold" }}>
                  Best MBA colleges in Ahmedabad
                </MDBCardTitle>
                <MDBCardText>With supporting.</MDBCardText>
                <MDBBtn href="/management">+64 More</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
          {/* Add the "See More" button here */}
          {/*<button className="see-more-button">Show More</button>*/}
        </div>
      </div>
      <br />

      {/* Explore Programs  */}
      <div className="container">
        <h2>Explore Programs</h2>

        <div className="p-4">
          <div className="button2-row">
            <div
              className="container"
              style={{
                cursor: "pointer",
                backgroundColor: "#F8F8F8",
                backgroundImage:
                  "url(	https://searchmycolleges.com/wp-content/uploads/2023/05/bg-1.jpg )",
              }}
            >
              <ul className="cards6">
                <li className="card6">
                  <div className="card6-link-wrapper">
                    <a
                      href="/engineering"
                      className="card6-link"
                      style={{ justifyContent: "center" }}
                    >
                      BE/B.Tech
                    </a>
                  </div>
                </li>
                <li className="card6">
                  <div className="card6-link-wrapper">
                    <a
                      href="/engineering"
                      className="card6-link"
                      style={{ justifyContent: "center" }}
                    >
                      MBA/PGDM
                    </a>
                  </div>
                </li>
                <li className="card6">
                  <div className="card6-link-wrapper">
                    <a href="/engineering" className="card6-link">
                      ME/M.Tech
                    </a>
                  </div>
                </li>
                <li className="card6">
                  <div className="card6-link-wrapper">
                    <a href="/medical" className="card6-link">
                      BSC.Nursing
                    </a>
                  </div>
                </li>
                <li className="card6">
                  <div className="card6-link-wrapper">
                    <a href="/management" className="card6-link">
                      BBA/BBM
                    </a>
                  </div>
                </li>
                <li className="card6">
                  <div className="card6-link-wrapper">
                    <a href="/management" className="card6-link">
                      BCA
                    </a>
                  </div>
                </li>
                <li className="card6">
                  <div className="card6-link-wrapper">
                    <a href="/commerce" className="card6-link">
                      B.Com
                    </a>
                  </div>
                </li>
                <li className="card6">
                  <div className="card6-link-wrapper">
                    <a href="/commerce" className="card6-link">
                      B.Sc
                    </a>
                  </div>
                </li>
                <li className="card6">
                  <div className="card6-link-wrapper">
                    <a href="/arts" className="card6-link">
                      BA
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="slick-list">
          <div
            className="slick-track"
            style={{
              width: 1110,
              opacity: 1,
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <div
              data-index={0}
              className="slick-slide slick-active slick-current"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: 370 }}
            >
              {/*RANKING*/}
              <div>
                <div className="jsx-3826371916 program-card">
                  <div className="jsx-3826371916 top-section d-flex">
                    <div className="jsx-3826371916 col-7 p-0">
                      <h2 className="jsx-3826371916 program-heading">
                        Ranking
                      </h2>
                      <p className="jsx-3826371916 program-subheading">
                        College ranked based on real data
                      </p>
                    </div>
                    <div className="jsx-3826371916 img-container img-2 category-logo">
                      <svg
                        width={144}
                        height={80}
                        viewBox="0 0 144 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m1.041 79.718 44.234-.215 11.79-.003h3.907l11.813-.004 53.97-.013s12.344-14.838-.842-28.93c-13.672-14.61-20.319-2.713-24.521-23.28C90.813-24.496-13.771 5.635 13.661 49.69c9.877 15.862-19.443 7.43-12.62 30.03Z"
                          fill="#fff"
                        />
                        <path
                          d="M120.185 27.094a.376.376 0 0 1-.375.375.376.376 0 0 1-.365-.375V21.31a.377.377 0 0 1 .365-.375.375.375 0 0 1 .375.375v5.785Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M122.883 24.475h-2.7v-2.769h2.7l-.797 1.384.797 1.385Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M142.723 38.868H96.896v29.446h45.827V38.868Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="M143.882 68.314H95.735v4.178h48.147v-4.178ZM143.882 34.69H95.735v4.178h48.147V34.69Z"
                          fill="#FFCB9B"
                        />
                        <path
                          d="M102.931 38.868h-3.714v29.446h3.714V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M103.758 39.437a.565.565 0 0 1-.559.57h-4.242a.57.57 0 1 1 0-1.14h4.242a.57.57 0 0 1 .568.57h-.009ZM103.758 67.744a.563.563 0 0 1-.35.527.565.565 0 0 1-.218.043h-4.233a.571.571 0 0 1-.403-.972.57.57 0 0 1 .403-.167h4.242a.57.57 0 0 1 .568.569h-.009Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M110.889 38.868h-3.714v29.446h3.714V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M111.717 39.437a.563.563 0 0 1-.35.527.567.567 0 0 1-.218.043h-4.233a.57.57 0 0 1 0-1.14h4.233a.569.569 0 0 1 .568.57ZM111.717 67.744a.563.563 0 0 1-.35.527.565.565 0 0 1-.218.043h-4.233a.57.57 0 0 1 0-1.139h4.233a.569.569 0 0 1 .568.569Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M132.444 38.868h-3.715v29.446h3.715V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M133.277 39.437a.583.583 0 0 1-.166.403.572.572 0 0 1-.403.167h-4.237a.568.568 0 0 1-.527-.789.556.556 0 0 1 .309-.307.565.565 0 0 1 .218-.043h4.233a.562.562 0 0 1 .404.165.562.562 0 0 1 .169.404ZM133.277 67.744a.583.583 0 0 1-.166.403.572.572 0 0 1-.403.167h-4.237a.57.57 0 1 1 0-1.139h4.233a.57.57 0 0 1 .568.569h.005Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M140.403 38.868h-3.715v29.446h3.715V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M141.23 39.437a.564.564 0 0 1-.166.403.573.573 0 0 1-.403.167h-4.232a.57.57 0 1 1 0-1.14h4.232a.567.567 0 0 1 .569.57ZM141.23 67.744a.564.564 0 0 1-.166.403.573.573 0 0 1-.403.167h-4.232a.57.57 0 1 1 0-1.139h4.232a.567.567 0 0 1 .569.569Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M124.782 68.312V56.618a4.985 4.985 0 0 0-1.419-3.586 4.988 4.988 0 0 0-3.555-1.494 4.978 4.978 0 0 0-4.974 5.08v11.694h9.948Z"
                          fill="#FFA95A"
                        />
                        <path
                          d="M119.809 26.644 96.896 34.69h45.827l-22.914-8.046Z"
                          fill="#FFB068"
                        />
                        <path
                          d="m119.81 27.639-17.249 6.057H137.057l-17.247-6.057Z"
                          fill="#FFBE84"
                        />
                        <path
                          d="M60.45 27.094a.378.378 0 0 1-.375.375.375.375 0 0 1-.364-.375V21.31a.373.373 0 0 1 .364-.375.375.375 0 0 1 .375.375v5.785Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M63.148 24.475h-2.7v-2.769h2.7l-.797 1.384.797 1.385Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M82.988 38.868H37.16v29.446h45.827V38.868Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="M84.147 68.314H36v4.178h48.147v-4.178ZM84.147 34.69H36v4.178h48.147V34.69Z"
                          fill="#FFCB9B"
                        />
                        <path
                          d="M43.197 38.868h-3.715v29.446h3.715V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M44.024 39.437a.568.568 0 0 1-.56.57h-4.242a.57.57 0 1 1 0-1.14h4.242a.568.568 0 0 1 .568.57h-.008ZM44.024 67.744a.567.567 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.139h4.242a.569.569 0 0 1 .568.569h-.008Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M51.154 38.868H47.44v29.446h3.714V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M51.983 39.437a.57.57 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.14h4.233a.568.568 0 0 1 .569.57ZM51.983 67.744a.569.569 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.139h4.233a.569.569 0 0 1 .569.569Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M72.709 38.868h-3.715v29.446h3.715V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M73.542 39.437a.569.569 0 0 1-.569.57h-4.237a.568.568 0 0 1-.404-.973.568.568 0 0 1 .404-.166h4.233a.569.569 0 0 1 .573.569ZM73.542 67.744a.569.569 0 0 1-.569.57h-4.237a.57.57 0 1 1 0-1.139h4.233a.569.569 0 0 1 .568.569h.005Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M80.668 38.868h-3.715v29.446h3.715V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M81.495 39.437a.567.567 0 0 1-.569.57h-4.232a.57.57 0 1 1 0-1.14h4.232a.568.568 0 0 1 .569.57ZM81.495 67.744a.567.567 0 0 1-.569.57h-4.232a.57.57 0 1 1 0-1.139h4.232a.569.569 0 0 1 .569.569Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M65.047 68.312V56.618a4.975 4.975 0 1 0-9.947 0v11.694h9.947Z"
                          fill="#FFA95A"
                        />
                        <path
                          d="M60.075 26.644 37.16 34.69h45.827l-22.913-8.046Z"
                          fill="#FFB068"
                        />
                        <path
                          d="m60.075 27.639-17.25 6.057h34.497l-17.247-6.057Z"
                          fill="#FFBE84"
                        />
                        <path
                          d="M94.342 26.735h-9.296l.653-4.215-2.611 4.215h-2.101c.69-26.886 25.917-28.396 26.047 0h-2.086l-.788-6.375-.92 6.375h-3.852v-6.282l-1.226 6.282h-3.82Z"
                          fill="#202938"
                        />
                        <path
                          d="M87.966 18.382c.49 3.101-2.112 3.543-2.672.454-.493-3.101 2.11-3.543 2.672-.454ZM100.725 18.382c-.491 3.101 2.111 3.543 2.671.454.492-3.101-2.111-3.543-2.671-.454Z"
                          fill="#FFB27D"
                        />
                        <path
                          d="M98.275 20.995h-7.859c.95 2.706-1.12 16.265-1.12 16.265h10.103s-2.072-13.559-1.124-16.265Z"
                          fill="#F4D2C6"
                        />
                        <path
                          d="M101.929 18.765c-.188 12.139-14.981 12.137-15.169 0-1.345-12.426 16.113-12.548 15.169 0Z"
                          fill="#FFB27D"
                        />
                        <path
                          d="M90.52 26.735s3.563 2.747 7.647 0l.215 2.459s-4.398 2.055-8.078.025l.217-2.484Z"
                          fill="#FFB27D"
                        />
                        <path
                          d="M95.88 9.538v5.813s-4.695.385-9.017 1.051C85.654 8.875 95.66 6.085 95.88 9.538Z"
                          fill="#202938"
                        />
                        <path
                          d="m95.83 9.09 1.24 5.985c1.618.257 3.201.702 4.716 1.328 0 0 2.121-8.569-5.955-7.313Z"
                          fill="#202938"
                        />
                        <path
                          d="M109.884 41.273c-1.506-8.213-8.161-10.093-15.54-9.608h-.214c-7.266-.525-13.908 1.589-15.328 9.608L75.727 67.93c17.183 4.964 20.112 4.67 37.233 0l-3.076-26.658Z"
                          fill="#F99746"
                        />
                        <mask
                          id="a"
                          maskUnits="userSpaceOnUse"
                          x={76}
                          y={31}
                          width={38}
                          height={41}
                          style={{ maskType: "luminance" }}
                        >
                          <path
                            d="M110.243 41.62c-1.506-8.212-8.161-10.092-15.54-9.607h-.215c-7.266-.525-13.907 1.589-15.327 9.608l-3.076 26.658c17.183 4.964 20.112 4.67 37.234 0l-3.076-26.658Z"
                            fill="#fff"
                          />
                        </mask>
                        <g mask="url(#a)">
                          <path
                            d="M77.879 55c6.319 3.502 20.065 11.828 30.59 10.558-15.708 8.158-14.707 8.23-31.165 1.803L77.879 55Z"
                            fill="#FF7900"
                          />
                        </g>
                        <path
                          d="M88.378 31.472c.731 5.349 11.211 5.325 11.93 0 0 0-6.09-.468-11.93 0Z"
                          fill="#F4D2C6"
                        />
                        <path
                          d="m94.342 35.568-3.83 3.818s-3.895-2.4-3.266-7.392l1.023-.206 6.073 3.78ZM94.343 35.568l3.83 3.818s3.896-2.4 3.267-7.392l-1.023-.206-6.074 3.78Z"
                          fill="#fff"
                        />
                        <path
                          d="M74.658 46.76c-.28 5.747-4.53 15.533 4.552 16.48l-.735-13.854-3.817-2.626ZM113.5 47.135c.364 5.97 4.392 15.39-4.573 16.888l.757-14.262 3.816-2.626Z"
                          fill="#FFB27D"
                        />
                        <path
                          d="M87.096 74.808s-2.956-1.833-4.513-1.352c-.233.073-1.858 2.078-1.858 2.078l-5.516 2.09c-1.023.35-1.547 1.358-1.696 2.376h13.986l-.403-5.192Z"
                          fill="#EDA19D"
                        />
                        <path
                          d="M86.722 73.665s24.573-13.606 33.326-12.412c8.754 1.194 9.136 13.375 1.576 15.961C114.064 79.8 87.208 80 87.208 80l-.486-6.335Z"
                          fill="#48639E"
                        />
                        <path
                          d="M101.964 73.665S77.39 60.059 68.637 61.253c-8.752 1.194-9.136 13.375-1.575 15.961C74.622 79.8 101.477 80 101.477 80l.487-6.335Z"
                          fill="#355395"
                        />
                        <path
                          d="M101.876 74.808s2.954-1.833 4.512-1.352c.234.073 1.858 2.078 1.858 2.078l5.516 2.09c1.024.35 1.546 1.358 1.697 2.376h-13.983l.4-5.192Z"
                          fill="#F4D2C6"
                        />
                        <path
                          d="m75.098 37.674 17.212 7.239v19.608l-17.212-7.514V37.674ZM112.917 37.674l-17.211 7.239v19.608l17.211-7.514V37.674Z"
                          fill="#323C4F"
                        />
                        <path
                          d="M95.706 44.913h-3.397V64.52h3.397V44.913Z"
                          fill="#28354F"
                        />
                        <path
                          d="m76.267 38.166 3.957-.906 13.707 5.848-1.622 1.805-16.042-6.747ZM93.931 43.108l1.775 1.805 15.617-6.568-2.856-1.08-14.536 5.843Z"
                          fill="#fff"
                        />
                        <path
                          d="m93.931 43.108-1.622 1.805h3.397l-1.775-1.805Z"
                          fill="#DCECFD"
                        />
                        <path
                          d="M112.838 44.654c-1.241.753-3.732 1.519-3.852 3.27-.399 2.083 1.996 3.89 3.903 3.013.401-.38.842-.851.81-1.445v-3.478a1.5 1.5 0 0 0-.859-1.36h-.002ZM75.096 44.654c1.241.753 3.733 1.519 3.852 3.27.4 2.083-1.995 3.89-3.903 3.013-.4-.38-.842-.85-.81-1.445v-3.478a1.506 1.506 0 0 1 .861-1.36Z"
                          fill="#FFB27D"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="jsx-3826371916 bottom-section">
                    <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
                      <a
                        className="inner-pill"
                        data-csm-title="Indiatoday 1545"
                        data-sub_section_name="Ranking"
                        href="/indiatoday-ranked-colleges"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          Indiatoday
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        data-csm-title="Outlook 1189"
                        href="/outlook-ranked-colleges"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          Outlook
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        data-ga-title="NIRF - 1174"
                        href="/nirf-ranked-colleges"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          NIRF
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        data-csm-title="The Week 919"
                        href="/the-week-ranked-colleges"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          The Week
                        </span>
                      </a>
                    </div>
                    <div className="jsx-3826371916 more-programs">
                      <a
                        className="text-dark"
                        data-csm-title="Top Ranked Colleges in India"
                        href="/computerapplication"
                      >
                        Top Ranked Colleges in India
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          style={{ width: 6, height: 10, marginLeft: 8 }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/*Exams*/}
                <div className="jsx-3826371916 program-card">
                  <div className="jsx-3826371916 top-section d-flex">
                    <div className="jsx-3826371916 col-7 p-0">
                      <h2 className="jsx-3826371916 program-heading">Exams</h2>
                      <p className="jsx-3826371916 program-subheading">
                        Know more about your exams
                      </p>
                    </div>
                    <div className="jsx-3826371916 img-container img-2 category-logo">
                      <svg
                        width={132}
                        height={76}
                        viewBox="0 0 132 76"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m.97 76 41.218-.205 10.986-.003h3.64l11.008-.003 50.29-.013s11.503-14.146-.784-27.58C104.589 34.266 98.394 45.608 94.478 26 84.621-23.353-12.832 5.373 12.73 47.371 21.933 62.493-5.388 54.456.97 76Z"
                          fill="#fff"
                        />
                        <path
                          d="m61.505 32.485 1.003-7.094-1.003 7.094Z"
                          fill="#0384A4"
                        />
                        <path
                          d="M41 71.372v2.516a1.713 1.713 0 0 0 1.714 1.717h44.859a1.717 1.717 0 0 0 1.717-1.718v-2.515H41ZM87.573 71.275V46.441a.686.686 0 0 0-.686-.685H43.173a.689.689 0 0 0-.686.685v24.834h45.086Z"
                          fill="#FF7900"
                        />
                        <path
                          d="M85.151 71.275V48.991a.623.623 0 0 0-.623-.624H45.32a.623.623 0 0 0-.624.624v22.284h40.455Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="M89.29 71.275H41v1.403h48.29v-1.403Z"
                          fill="#EDEDED"
                        />
                        <path
                          d="M73.81 51.114H56.188v1.954H73.81v-1.954ZM76.792 57.659H53.467v.81h23.325v-.81ZM57.846 66.316h-9.512v.833h9.512v-.833ZM57.846 67.731h-9.512v.833h9.512v-.833ZM57.849 69.187h-9.512v.832h9.512v-.832ZM69.767 66.307h-9.512v.832h9.512v-.832ZM69.767 67.725h-9.512v.832h9.512v-.832ZM69.77 69.177h-9.512v.833h9.512v-.833ZM81.423 66.298h-9.512v.832h9.512v-.832ZM81.423 67.716h-9.512v.832h9.512v-.832ZM81.423 69.168h-9.512V70h9.512v-.832Z"
                          fill="#E6C3A5"
                        />
                        <path
                          d="M102.787 52.977c-1.823 3.74-6.691 4.578-7.411 4.706-.72-.128-5.567-.963-7.39-4.706 0 0-14.52 2.181-14.726 8.92L73.475 76l21.92-.209 21.919.209.209-14.106c-.218-6.739-14.736-8.917-14.736-8.917Z"
                          fill="#48639E"
                        />
                        <path
                          d="M100.986 47.208a12.619 12.619 0 0 1-5.46 2.316v.03h-.169v-.03a12.675 12.675 0 0 1-5.541-2.375c-.103 1.337-.546 5.653-1.83 5.828 1.64 3.37 5.741 4.507 7.069 4.793h.664c1.327-.286 5.426-1.424 7.068-4.793-1.34-.18-1.726-4.66-1.801-5.77Z"
                          fill="#DFA17A"
                        />
                        <path
                          d="M106.259 9.783c-.184-.15-.374-.293-.564-.43l-.09-.066a10.99 10.99 0 0 0-.558-.374l-.106-.068c-.19-.119-.383-.234-.577-.346l-.075-.041c-.196-.109-.395-.215-.595-.312l-.034-.015a14.868 14.868 0 0 0-.623-.29l-.097-.04a11.425 11.425 0 0 0-.623-.25l-.097-.034a15.773 15.773 0 0 0-.642-.228h-.025a18.056 18.056 0 0 0-.667-.2h-.034a16.527 16.527 0 0 0-.667-.167l-.075-.016c-.221-.05-.443-.097-.664-.137h-.05c-.464-.084-.935-.15-1.393-.197h-.016c-.23-.024-.46-.043-.691-.056h-.035c-5.678-.333-10.82 2.03-10.771 4.853 0 0-8.477.78-5.753 13.068l1.789 8.166 1.399-7s4.052-2.334 4.9-7.312a15.403 15.403 0 0 0 6.856 5.966l.06.024c.17.079.345.15.523.222l.05.018c.168.066.34.131.514.19l.053.02c.184.065.368.124.558.183l.087.025c.181.056.368.11.558.156h.028c.198.05.397.097.599.14l.112.025c.405.084.826.156 1.246.212l.134.016c.216.028.431.05.652.068h.068c.203 0 .412.028.624.038h.947l.624-.019h.13c.237 0 .48-.031.727-.05l.162-.015c.227-.022.458-.047.692-.078h.09c.256-.032.514-.072.776-.119l.187-.031c.268-.047.536-.1.81-.159l1.4 7.792 1.013-6.689s4.7-10.378-2.846-16.443Z"
                          fill="#202938"
                        />
                        <path
                          d="m109.152 28.71-.293-.651-.733 4.825-1.399-7.792c-.274.06-.542.112-.81.159l-.187.031c-.262.047-.521.087-.776.118h-.091c-.234.032-.464.056-.692.078l-.152.031c-.247.02-.49.038-.727.05h-.131l-.623.02h-.947c-.212 0-.421-.023-.624-.038h-.068c-.222-.019-.437-.04-.652-.069l-.134-.016c-.43-.056-.85-.127-1.246-.211l-.113-.025a12.72 12.72 0 0 1-.598-.14h-.028c-.19-.047-.377-.1-.558-.156l-.087-.025c-.19-.06-.374-.119-.558-.184l-.053-.019c-.175-.06-.346-.125-.514-.19l-.05-.019a13.259 13.259 0 0 1-.524-.221l-.059-.025a15.346 15.346 0 0 1-6.857-5.965c-.854 4.986-4.9 7.311-4.9 7.311l-1.399 7-.847-3.861c-.337 0-2.615.184-2.135 3.837.517 3.94 2.072 5.921 3.94 4.874 0 0 2.564 10.547 11.861 12.102v.031h.169v-.03c9.297-1.56 11.862-12.103 11.862-12.103 1.87 1.038 3.428-.935 3.939-4.874.512-3.94-2.206-3.853-2.206-3.853Z"
                          fill="#EEB991"
                        />
                        <path
                          d="M87.036 53.176a41.52 41.52 0 0 0-5.102 1.35c.508 3.481 2.805 8.29 11.416 9.222l2.007-5.582c-1.044-.196-5.953-1.296-8.321-4.99Z"
                          fill="#FF7900"
                        />
                        <path
                          d="M88.145 52.977c-1.334.221-2.656.51-3.961.866.146 2.89 1.605 7.77 9.612 8.637l1.673-4.657c-.928-.174-5.557-1.215-7.324-4.846Z"
                          fill="#fff"
                        />
                        <path
                          d="M108.843 54.439a40.633 40.633 0 0 0-5.096-1.331c-2.365 3.706-7.218 4.466-8.262 4.675l2.12 5.978c8.648-.948 10.743-5.838 11.238-9.322Z"
                          fill="#FF7900"
                        />
                        <path
                          d="M102.809 52.937a39.11 39.11 0 0 1 3.961.863c-.146 2.892-1.605 7.77-9.611 8.636l-1.674-4.656c.932-.168 5.557-1.225 7.324-4.843Z"
                          fill="#fff"
                        />
                        <path
                          d="M73.927 4.7h-1.222v7.86h1.222V4.7Z"
                          fill="#333"
                        />
                        <path
                          d="M72.063 24.902s-3.843-3.379-.583-8.908h3.553s2.852 5.53-.467 9.023a2.256 2.256 0 0 0-.056-1.805s-.119 1.87-1.225 2.911c0 0-1.047-1.804-.698-3.26 0 0-.58 1.107-.524 2.039Z"
                          fill="#FF7900"
                        />
                        <path
                          d="M75.033 11.721H71.48a.785.785 0 0 0-.776.78v3.493a.782.782 0 0 0 .776.789h3.553a.71.71 0 0 0 .527-.21l.022-.018.022-.022a.72.72 0 0 0 .205-.526V12.5a.785.785 0 0 0-.776-.779Z"
                          fill="#333"
                        />
                        <path
                          d="M110.719 7.473H79.983a.785.785 0 0 0-.78.776v14.674a.786.786 0 0 0 .78.776h30.736a.714.714 0 0 0 .527-.21l.022-.018a.732.732 0 0 0 .231-.549V8.25a.787.787 0 0 0-.78-.776Z"
                          fill="#202020"
                        />
                        <path
                          d="M111.499 8.25a.787.787 0 0 0-.78-.777H79.983a.785.785 0 0 0-.78.776v3.117l10.513 3.03 9.46 2.723c.732.212 1.305-.05 1.869-.196l4.22-1.075 6.234-1.621V8.249Z"
                          fill="#141414"
                        />
                        <path
                          d="m126.726 7.377-24.952-5.685-5.74-1.306-.225-.056h-.04l-.624-.165h-.019l-.243-.06a2.805 2.805 0 0 0-.982-.096L85.4 1.424 65.452 4.746c-.277.047-.405.168-.424.312-.093.193.028.436.452.586.124.062.258.102.396.118l23.868 6.879 9.459 2.724c.732.212 1.306-.05 1.87-.197l4.192-1.115 21.966-5.729c.636-.162.162-.798-.505-.947ZM106.774 28.645s-.901-.789-4.052-.789c-1.34 0-3.117.134-4.363.683-.313.144-.61.316-.892.514l-.676.57s-.25.228-1.287.237h-.137c-1.038 0-1.288-.236-1.288-.236l-.657-.57c-.281-.199-.58-.371-.892-.515-1.246-.549-3.013-.683-4.363-.683-3.15 0-4.052.789-4.052.789h-1.891v1.06l.813.766c.128.897.306 1.786.533 2.662.34 1.318.742 3.033 2.182 3.519a8.73 8.73 0 0 0 2.836.352c1.287 0 3.198.016 4.005-1.203.76-1.147 1.053-2.646 1.318-3.974a.739.739 0 0 1 .42-.477h2.207a.738.738 0 0 1 .421.477c.265 1.328.558 2.827 1.319 3.974.807 1.218 2.717 1.203 4.005 1.203.958.04 1.916-.08 2.836-.352 1.452-.486 1.87-2.2 2.181-3.519a25.11 25.11 0 0 0 .537-2.662l.81-.766v-1.06h-1.873Zm-13.757 2.768a9.882 9.882 0 0 1-.427 2.103c-.2.736-.418 1.559-1.032 2.076-.708.583-1.945.714-2.82.739h-.347c-.935-.025-1.982-.134-2.764-.674a2.125 2.125 0 0 1-.782-1.153c-.025-.065-.35-1.031-.312-1.04a10.577 10.577 0 0 1-.405-1.917 5.67 5.67 0 0 1-.063-.935c.05-1.817 3.226-1.886 4.507-1.886a10.44 10.44 0 0 1 3.291.433c.44.128.82.403 1.079.78.28.464.118.969.075 1.474Zm13.751.134a10.63 10.63 0 0 1-.406 1.916c.025 0-.311.976-.311 1.041a2.146 2.146 0 0 1-.786 1.154c-.782.539-1.839.648-2.764.673h-.346c-.876-.025-2.113-.156-2.82-.739-.624-.508-.833-1.34-1.032-2.076-.217-.684-.36-1.389-.427-2.103-.044-.505-.206-1.01.068-1.475a1.96 1.96 0 0 1 1.075-.779 10.446 10.446 0 0 1 3.317-.445c1.277 0 4.453.068 4.503 1.885.004.317-.02.634-.071.948Z"
                          fill="#231F20"
                        />
                        <path
                          d="m117.609 73.136-.284-.327a.52.52 0 0 0-.732-.028l-1.091.935a.525.525 0 0 0-.084.729l.283.327 1.908-1.636Z"
                          fill="#E5E5E5"
                        />
                        <path
                          d="m117.609 73.136.281.33a.525.525 0 0 1-.085.73l-1.09.935a.522.522 0 0 1-.733-.028l-.28-.328 1.907-1.639Z"
                          fill="#C9C9C9"
                        />
                        <path
                          d="m117.609 73.136-.284-.327a.52.52 0 0 0-.732-.028l-1.091.935a.525.525 0 0 0-.084.729l.283.327 1.908-1.636Z"
                          fill="#E5E5E5"
                        />
                        <path
                          d="m117.609 73.136.281.33a.525.525 0 0 1-.085.73l-1.09.935a.522.522 0 0 1-.733-.028l-.28-.328 1.907-1.639Z"
                          fill="#C9C9C9"
                        />
                        <path
                          d="m128.392 62.63-12.169 10.452.619.722 12.169-10.453-.619-.72Z"
                          fill="#48639E"
                        />
                        <path
                          d="m129.008 63.351-12.169 10.452.618.719 12.169-10.452-.618-.719Z"
                          fill="#4FB8DD"
                        />
                        <path
                          d="m128.392 62.63-12.169 10.452.619.722 12.169-10.453-.619-.72Z"
                          fill="#48639E"
                        />
                        <path
                          d="m129.008 63.351-12.169 10.452.618.719 12.169-10.452-.618-.719Z"
                          fill="#4FB8DD"
                        />
                        <path
                          d="m128.43 62.592-.134.116 1.237 1.436.131-.115 1.216-2.191-.05-.056-.05-.06-2.35.87Z"
                          fill="#E8B58B"
                        />
                        <path
                          d="m130.646 61.772.396-.174-.231.364-.165-.19Z"
                          fill="#333231"
                        />
                        <path
                          d="m116.406 72.925-.336.288.618.719.336-.289-.618-.718Z"
                          fill="#F8611B"
                        />
                        <path
                          d="m117.025 73.643-.336.289.617.718.336-.288-.617-.719Z"
                          fill="#DD3E1A"
                        />
                        <path
                          d="m116.406 72.925-.336.288.618.719.336-.289-.618-.718Z"
                          fill="#F8611B"
                        />
                        <path
                          d="m117.025 73.643-.336.289.617.718.336-.288-.617-.719Z"
                          fill="#DD3E1A"
                        />
                        <path
                          d="m106.897 70.025 18.304 2.325-.038-.027-18.313-2.347.047.05Z"
                          fill="#808082"
                        />
                        <path
                          d="M106.825 70.166c.047-.1.035-.147.125-.134l.168.022.664.084 2.378.311 3.319.421 3.709.47 3.538.453 2.805.355 1.533.196.131.016c-.823 1.206.405 3.03 1.77 3.036-2.265-.275-5.002-.284-7.511-.312-2.509-.028-8.805.168-9.431.162a4.11 4.11 0 0 1-1.381-.118 3.326 3.326 0 0 1-1.729-1.758 3.732 3.732 0 0 1-.094-3.201l.006-.003Z"
                          fill="#DABE95"
                        />
                        <path
                          d="M108.891 69.58a1.56 1.56 0 0 1 1.247-.586c.265.026.528.067.788.121l.935.15c.624.103 4.295 1.038 7.957 1.633 3.522.574 7.047.813 7.792.935a1.249 1.249 0 0 0-1.387 1.02.995.995 0 0 0 .444 1.105c.121.074.257.122.398.14l-7.515-.48-7.511-.48-1.87-.12a7.603 7.603 0 0 1-.801-.054.982.982 0 0 1-.43-.174 1.916 1.916 0 0 1-.623-1.87c.067-.492.272-.954.592-1.334l-.016-.006Z"
                          fill="#DABE95"
                        />
                        <path
                          d="M109.371 70.701a.628.628 0 0 1 .524-.227l.904.112 1.87.237 3.74.47 7.48.936 3.475.44a.498.498 0 0 0-.53.457.394.394 0 0 0 .331.437l-7.505-.652-7.521-.651-1.614-.14-.789-.069a.748.748 0 0 1-.312-.065c-.448-.25-.311-.97-.046-1.288l-.007.004Z"
                          fill="#C4A270"
                        />
                        <path
                          d="M109.764 72.082a.567.567 0 0 0 .259-.252c0-.022.118-.312.093-.312h.15l.623.063 2.359.236 3.351.337 3.721.371 3.466.358 2.606.262 1.118.112c.022 0 0 .05 0 .063a.35.35 0 0 1-.327.27 4.257 4.257 0 0 1-.445-.033l-.49-.044-.935-.078-3.74-.312-7.508-.623-4.466-.377a.372.372 0 0 0 .184-.031l-.019-.01Z"
                          fill="#E8D2B0"
                        />
                        <path
                          d="M110.69 71.378a1.03 1.03 0 0 0-.776-1.007c1.224.138 2.446.312 3.668.468l3.74.48 7.48.957 1.87.237c.253.034.517.046.767.102a.626.626 0 0 1 .343.215.829.829 0 0 1 .048.863.835.835 0 0 1-.743.44l-1.007-.062-2.525-.156-3.428-.212-3.74-.23-3.428-.21-2.509-.155-.979-.06c.832.05 1.297-.966 1.247-1.67-.031 0-.025.047-.028 0Z"
                          fill="#E8D2B0"
                        />
                        <path
                          d="M111.456 69.61a1.821 1.821 0 0 0-1.486-.704 1.774 1.774 0 0 0-1.306.854 2.842 2.842 0 0 0-.461 1.6 1.873 1.873 0 0 0 .645 1.452c.216.175.493.257.77.23.264-.046.502-.186.67-.396a1.734 1.734 0 0 0 .342-1.558 1.012 1.012 0 0 0-.479-.623.646.646 0 0 0-.714.068 1.064 1.064 0 0 0-.184 1.425.443.443 0 0 0 .595.096.712.712 0 0 0 .268-.514h-.065a.678.678 0 0 1-.041.178.52.52 0 0 1-.268.311.448.448 0 0 1-.551-.311c-.2-.452.077-1.247.654-1.247.577 0 .81.689.776 1.169-.034.48-.33 1.128-.869 1.296-.54.169-1.013-.205-1.247-.645a2.29 2.29 0 0 1-.147-1.642 2.35 2.35 0 0 1 .898-1.381 1.479 1.479 0 0 1 1.49-.1c1.072.511 1.415 1.87 1.284 2.958s-.698 2.313-1.73 2.864a2.05 2.05 0 0 1-1.589.172 2.832 2.832 0 0 1-1.334-1.02 4.133 4.133 0 0 1-.792-3.263 3.096 3.096 0 0 1 .284-.779c.034-.065.034-.06-.016-.109a3.777 3.777 0 0 0-.056 3.276c.424 1.01 1.309 2.072 2.493 2.075 1.185.004 2.11-1.013 2.519-2.05.408-1.038.473-2.344-.125-3.345a2.542 2.542 0 0 0-.228-.311v-.025Z"
                          fill="#FFE8C5"
                        />
                        <path
                          d="M127.629 71.783a1.558 1.558 0 0 1 1.141.916c.147.353.181.743.097 1.116a1.999 1.999 0 0 1-1.898 1.624c-.156 0-3.139-.346-6.664-.368-4.927-.03-10.852.256-11.024.256 1.2 0 2.117-1.007 2.528-2.048.37-.884.418-1.87.134-2.786-.256-.739-.817-1.434-1.624-1.558.181.03 5.473 1.246 10.186 2.032 3.655.604 6.99.804 7.124.826v-.01Z"
                          fill="#E8D2B0"
                        />
                        <path
                          d="M120.108 74.666c.124-.308.201-.632.228-.963.031-.33.031-.663 0-.994a3.785 3.785 0 0 0-.234-.966 1.866 1.866 0 0 0-.567-.801c.248.218.438.496.552.807.116.31.191.633.224.963a5.26 5.26 0 0 1-.072 1.477c-.03.163-.073.322-.131.477Z"
                          fill="#FF9196"
                        />
                        <path
                          d="M121.302 71.085c1.817.256 1.559 4.092.624 4.018-.527 0-2.182-.016-2.26-.016.826.031 1.147-4.09-.732-4.4-.003.015 2.103.358 2.368.398Z"
                          fill="#E06E79"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="jsx-3826371916 bottom-section">
                    <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
                      <a
                        className="inner-pill"
                        data-ga-title="Indiatoday - 1545"
                        href="/commerce"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          B.Com
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        data-ga-title="Outlook - 1189"
                        href="/science"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          B.Sc
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        data-csm-title="NIRF 1174"
                        href="/medical"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          B.Sc[Nursing]
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/medical"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          M.Tech
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        data-csm-title="The Week 919"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          BE/B.Tech
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          MBBS
                        </span>
                      </a>
                    </div>
                    <div className="jsx-3826371916 more-programs">
                      <a
                        className="text-dark"
                        href="/medical"
                      >
                        Check All Entrance Exams in India
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          style={{ width: 6, height: 10, marginLeft: 8 }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={0}
              className="slick-slide slick-active slick-current"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: 370 }}
            >
              {/*FIND COLLEGE*/}
              <div>
                <div className="jsx-3826371916 program-card">
                  <div className="jsx-3826371916 top-section d-flex">
                    <div className="jsx-3826371916 col-7 p-0">
                      <h2 className="jsx-3826371916 program-heading">
                        Find Colleges
                      </h2>
                      <p className="jsx-3826371916 program-subheading">
                        Discover 19000+ colleges via preferences.
                      </p>
                    </div>
                    <div className="jsx-3826371916 img-container img-2 category-logo">
                      <svg
                        width={144}
                        height={78}
                        viewBox="0 0 144 78"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m1.033 78 43.899-.21 11.701-.004h3.877l11.723-.003 53.562-.013s12.25-14.518-.836-28.306c-13.568-14.296-20.165-2.655-24.336-22.778C90.125-23.968-13.667 5.514 13.557 48.618 23.36 64.138-5.738 55.888 1.033 78Z"
                          fill="#fff"
                        />
                        <g opacity="0.68">
                          <path
                            d="m45.896 31.247-1.358 3.017a2.057 2.057 0 0 0 1.031 2.72l32.662 14.707a2.057 2.057 0 0 0 2.72-1.032l1.359-3.017a2.057 2.057 0 0 0-1.032-2.72L48.617 30.216a2.057 2.057 0 0 0-2.72 1.031Z"
                            fill="#E9C896"
                          />
                          <path
                            d="m44.23 34.945 1.948-4.335a1.34 1.34 0 0 1 1.767-.668 1.34 1.34 0 0 1 .671 1.767l-1.951 4.342a1.34 1.34 0 0 1-2.194.367 1.338 1.338 0 0 1-.242-1.473Z"
                            fill="#D5AB6E"
                          />
                          <path
                            d="M64.82 46.804a.941.941 0 0 1-.282-.313 47.081 47.081 0 0 1-1.197-1.925l-.259.588a1.003 1.003 0 0 1-1.321.5l-2.374-1.068a1.006 1.006 0 0 1-.5-1.324l3.262-7.255a.998.998 0 0 1 1.322-.5l2.373 1.068a1.003 1.003 0 0 1 .5 1.321l-.733 1.633a44.14 44.14 0 0 1 3.514.098c.142 0 .283.03.412.09a.337.337 0 0 1 .186.35c-.034.148-.192.229-.332.29l-.777.335c-.132.057-.272.12-.259.334a.564.564 0 0 0 .197.389c.418.382.783.817 1.086 1.296a.344.344 0 0 1-.363.518c-1.037-.215-2.669-.474-3.275-.54.469.615 1.21 1.532 1.751 2.151a.347.347 0 0 1-.277.576 6.413 6.413 0 0 1-1.653-.314.56.56 0 0 0-.435.02c-.192.102-.177.26-.161.397.029.28.057.557.088.837a.517.517 0 0 1-.088.433.336.336 0 0 1-.404.015Z"
                            fill="#DC3545"
                          />
                          <path
                            d="M61.183 43.485a3.229 3.229 0 1 0 2.65-5.888 3.229 3.229 0 0 0-2.65 5.888Z"
                            fill="#EDB607"
                          />
                          <path
                            opacity="0.66"
                            d="M61.393 43.019a2.721 2.721 0 1 0 2.235-4.963 2.721 2.721 0 0 0-2.235 4.963Z"
                            fill="#F8C100"
                          />
                          <path
                            d="m60.81 22.012-1.163 1.031a2.057 2.057 0 0 0-.175 2.904l17.5 19.747c.754.85 2.054.928 2.904.175l1.164-1.032c.85-.753.929-2.054.175-2.904l-17.5-19.746a2.057 2.057 0 0 0-2.905-.175Z"
                            fill="#E9C896"
                          />
                          <path
                            d="m61.6 21.306-2.715 2.407a1.036 1.036 0 0 0-.086 1.44 1.037 1.037 0 0 0 1.441.086l2.708-2.402a1.036 1.036 0 0 0 .088-1.44 1.036 1.036 0 0 0-1.436-.091Z"
                            fill="#D5AB6E"
                          />
                          <path
                            d="M70.84 38.666a.701.701 0 0 1-.16-.28 34.391 34.391 0 0 1-.871-2.54l-.845.75a1.003 1.003 0 0 1-1.412-.086l-1.005-1.132a1.003 1.003 0 0 1 .085-1.412l4.187-3.71a1.005 1.005 0 0 1 1.412.082l1.003 1.135a1.003 1.003 0 0 1-.083 1.412l-.191.169c.562.132 1.119.274 1.674.435a.747.747 0 0 1 .295.132.26.26 0 0 1 .083.293.397.397 0 0 1-.296.163l-.63.125c-.108.02-.222.046-.258.207a.42.42 0 0 0 .082.324c.251.35.454.731.604 1.135a.26.26 0 0 1-.355.331 27.548 27.548 0 0 0-1.966-.777c.184.428.743 1.555 1.137 2.265a.258.258 0 0 1-.144.385.26.26 0 0 1-.156-.002 4.928 4.928 0 0 1-1.185-.5.435.435 0 0 0-.329-.054c-.158.046-.17.16-.184.259l-.067.64a.391.391 0 0 1-.135.308.258.258 0 0 1-.29-.057Z"
                            fill="#DC3545"
                          />
                          <path
                            d="M71.68 31.727a2.465 2.465 0 1 1-3.69 3.268 2.465 2.465 0 0 1 3.69-3.268Z"
                            fill="#EDB607"
                          />
                          <path
                            opacity="0.66"
                            d="M71.39 31.984a2.072 2.072 0 1 1-3.107 2.742 2.072 2.072 0 0 1 3.106-2.742Z"
                            fill="#F8C100"
                          />
                        </g>
                        <path
                          d="M129.15 17.951a14.684 14.684 0 0 0-6.445-11.77 14.69 14.69 0 0 0-22.4 8.26 14.686 14.686 0 0 0 2.738 13.136L91.299 39.974a1.94 1.94 0 0 0 .077 2.74c.252.236.564.4.902.472a1.938 1.938 0 0 0 1.848-.557l11.74-12.393a14.685 14.685 0 0 0 15.466 1.084 14.684 14.684 0 0 0 7.822-13.387l-.004.018Zm-6.844 7.826a10.801 10.801 0 0 1-17.928-11.295 10.805 10.805 0 0 1 11.909-6.784 10.8 10.8 0 0 1 8.977 10.356 10.81 10.81 0 0 1-2.956 7.723h-.002Z"
                          fill="#2B478B"
                        />
                        <path
                          d="m79.071 51.13-2.806 1.253a2.48 2.48 0 0 0-1.252 3.276l1.254 2.805a2.48 2.48 0 0 0 3.276 1.253l2.805-1.254a2.48 2.48 0 0 0 1.252-3.276l-1.253-2.806a2.48 2.48 0 0 0-3.276-1.252Z"
                          fill="#FC8D36"
                        />
                        <path
                          d="m81.334 50.117-7.333 3.278.951 2.129 7.334-3.278-.952-2.129Z"
                          fill="#F2CC61"
                        />
                        <path
                          d="M34 77.91h31.803V67.879H44.038A10.03 10.03 0 0 0 34 77.911ZM143.039 77.91h-31.803V67.879h21.765a10.028 10.028 0 0 1 10.038 10.033Z"
                          fill="#F2AE78"
                        />
                        <path
                          d="M131.493 52.821H99.689v25.09h31.804v-25.09Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="M131.542 70.995H99.638v2.726h31.904v-2.726Z"
                          fill="#FFC292"
                        />
                        <path
                          d="M131.444 52.821H99.638v-5.654h26.152a5.656 5.656 0 0 1 5.654 5.654ZM106.228 58.614h-4.452v8.904h4.452v-8.904ZM117.841 58.614h-4.452v8.904h4.452v-8.904ZM128.237 58.614h-4.452v8.904h4.452v-8.904Z"
                          fill="#F2AE78"
                        />
                        <path
                          d="M77.261 52.821H44.965v25.09h32.296v-25.09Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="M76.82 70.995H44.918v2.726H76.82v-2.726Z"
                          fill="#FFC292"
                        />
                        <path
                          d="M45.017 52.821H76.82v-5.654H50.671a5.654 5.654 0 0 0-5.654 5.654ZM73.819 58.614h-4.452v8.904h4.452v-8.904ZM63.678 58.614h-4.451v8.904h4.451v-8.904ZM51.807 58.614h-4.452v8.904h4.452v-8.904Z"
                          fill="#F2AE78"
                        />
                        <path
                          d="M99.695 22.935H76.877v54.927h22.818V22.935Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="M100.811 41.11h-25.05c-.248 0-.449.2-.449.448v1.93c0 .248.2.448.448.448h25.051c.248 0 .449-.2.449-.448v-1.93a.449.449 0 0 0-.449-.449Z"
                          fill="#FFC292"
                        />
                        <path
                          d="M101.84 22.935H74.68a.682.682 0 0 1-.259-1.308l13.461-5.7a.674.674 0 0 1 .518 0l13.702 5.7a.681.681 0 0 1-.262 1.308ZM88.592 58.218a7.825 7.825 0 0 0-7.825 7.826v11.66H95.81V65.44a7.218 7.218 0 0 0-7.219-7.221Z"
                          fill="#FC8D36"
                        />
                        <path
                          d="M94.086 34.79a5.957 5.957 0 1 0-11.601-2.711 5.957 5.957 0 0 0 11.601 2.71Z"
                          fill="#F8C100"
                        />
                        <path
                          d="M87.942 35.282v-4.978a.389.389 0 1 1 .777 0v3.11l1.096-1.107a.391.391 0 0 1 .664.275.387.387 0 0 1-.115.275l-2.422 2.425Z"
                          fill="#FC8D36"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="jsx-3826371916 bottom-section">
                    <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
                      <a
                        className="inner-pill"
                        data-csm-title="Indiatoday 1545"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          BTech
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        data-csm-title="Outlook 1189"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          MTech
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        data-csm-title="Outlook 1189"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">MBA</span>
                      </a>
                      <a
                        className="inner-pill"
                        data-csm-title="Outlook 1189"
                        href="/medical"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          MBBS
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        data-csm-title="Outlook 1189"
                        href="/medical"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          Best Private BTech Colleges in India
                        </span>
                      </a>
                    </div>
                    <div className="jsx-3826371916 more-programs">
                      <a
                        className="text-dark"
                        href="/engineering"
                      >
                        Discover Top Colleges in India
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          style={{ width: 6, height: 10, marginLeft: 8 }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/*COLLEGE PREDICATOR*/}
                <div className="jsx-3826371916 program-card">
                  <div className="jsx-3826371916 top-section d-flex">
                    <div className="jsx-3826371916 col-7 p-0">
                      <h2 className="jsx-3826371916 program-heading">
                        College Predictor
                      </h2>
                      <p className="jsx-3826371916 program-subheading">
                        Know your college admission chances.
                      </p>
                    </div>
                    <div className="jsx-3826371916 img-container img-2 category-logo">
                      <svg
                        width={133}
                        height={78}
                        viewBox="0 0 133 78"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m1.049 78 44.569-.208 11.88-.003h3.936l11.902-.003 54.379-.013s12.438-14.332-.848-27.943c-13.775-14.113-20.473-2.62-24.707-22.486-10.659-50.004-116.035-20.9-88.396 21.65C23.716 64.316-5.826 56.172 1.049 78Z"
                          fill="#fff"
                        />
                        <path
                          d="M66.726 18.032c-.262 10.545-1.11 44.075-.705 56.966a2.587 2.587 0 0 0 2.504 2.506c6.757.22 26.198.781 37.251.317a4.358 4.358 0 0 0 4.181-4.262c.23-11.068.736-39.356-.468-53.616a3.558 3.558 0 0 0-3.194-3.24c-7.36-.736-26.906-2.534-36.455-1.916a3.336 3.336 0 0 0-3.114 3.245Z"
                          fill="#FC8D36"
                        />
                        <path
                          d="M69.433 21.479c-.37 8.838-1.536 35.415-1.166 46.287.054 1.59 1.281 2.874 2.837 2.968 6.403.382 22.826 1.225 32.218.458 1.691-.139 3.018-1.534 3.11-3.264.476-9.017 1.842-33.57 1.488-44.32-.057-1.714-1.359-3.115-3.033-3.268-6.927-.635-24.718-2.146-32.7-1.701-1.498.083-2.69 1.31-2.754 2.84Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="M83.522 16.568a.588.588 0 0 0 .563.59c1.564.081 5.968.311 7.937.425a.6.6 0 0 0 .61-.437.586.586 0 0 0 .009-.267l-.013-.064a.59.59 0 0 0-.53-.477c-1.33-.121-5.346-.456-8.005-.362a.597.597 0 0 0-.406.182.587.587 0 0 0-.165.41Z"
                          fill="#F5F8F9"
                        />
                        <path
                          d="M91.874 72.803H81.69c-.43 0-.778.36-.778.806v1.636c0 .445.348.806.778.806h10.183c.43 0 .778-.36.778-.806V73.61a.792.792 0 0 0-.778-.806Z"
                          fill="#fff"
                        />
                        <path
                          d="m73.36 45.843-.923-22.476a.827.827 0 0 1 .77-.884c1.618-.107 5.77-.005 13.786 2.354l.768 20.666-14.4.34Z"
                          fill="#FC8D36"
                        />
                        <path
                          d="m74.734 45.843-.994-23.677a.642.642 0 0 1 .643-.685c2.247.003 9.409.264 12.611 3.385l.767 20.593-13.027.384Z"
                          fill="#F2AE78"
                        />
                        <path
                          opacity="0.7"
                          d="M75.501 45.518a.57.57 0 0 1-.55-.535l-.884-22.511a.621.621 0 0 1 .614-.666c2.106 0 8.728.243 11.869 3.111a.58.58 0 0 1 .19.407l.694 19.156a.575.575 0 0 1-.59.594l-11.343.444Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="M87.435 24.71s6.154-4.216 13.898-1.867c.226.068.423.209.563.4.14.19.214.422.213.66l-.152 21.94-14.221-.486-.301-20.647Z"
                          fill="#FC8D36"
                        />
                        <path
                          d="m100.982 22.513.148 23.33-13.262-.457-.76-20.722s6.494-4.192 12.777-3.41c.302.04.58.19.782.42.201.232.313.53.315.84Z"
                          fill="#F2AE78"
                        />
                        <path
                          opacity="0.7"
                          d="m100.663 23.115.141 21.756a.653.653 0 0 1-.412.604.648.648 0 0 1-.255.043l-11.655-.397a.68.68 0 0 1-.655-.654l-.719-19.289s6.347-4.03 12.483-3.278a1.223 1.223 0 0 1 1.072 1.215Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="m73.237 55.588 28.487.973a1.947 1.947 0 0 0 2.015-1.949V52.34a1.947 1.947 0 0 0-1.948-1.95h-27.9c-.654 0-1.234.297-1.445.738-.397.825-.892 2.23-.548 3.608.12.47.67.822 1.34.852Z"
                          fill="#FFCDA6"
                        />
                        <path
                          d="M102.435 47.218a1.673 1.673 0 0 0-.507-1.203 1.735 1.735 0 0 0-1.224-.497H74.646c-.536 0-1.013.243-1.17.6a4.567 4.567 0 0 0 .017 3.727c.144.324.572.545 1.058.545h26.153a1.752 1.752 0 0 0 1.224-.498 1.674 1.674 0 0 0 .507-1.202v-1.472Z"
                          fill="#FC8D36"
                        />
                        <path
                          d="m74.735 50.065 3.187-.12c.397-.015.708-.247.708-.528v-2.65c0-.284-.32-.518-.725-.527l-3.145-.072c-.362-.009-.679.166-.755.415-.196.643-.466 1.91-.038 3.081.09.245.41.414.768.4ZM80.154 49.74c.427-.02.759-.248.759-.525v-2.522c0-.294-.375-.531-.832-.525-.443.005-.799.24-.799.525v2.523c0 .304.4.544.872.523Z"
                          fill="#F2AE78"
                        />
                        <path
                          d="m74.65 69.696 26.04.183a1.74 1.74 0 0 0 1.612-1.061c.088-.21.133-.436.133-.663v-5.322a1.73 1.73 0 0 0-.523-1.233 1.728 1.728 0 0 0-1.252-.49l-25.44.616c-.603.02-1.128.294-1.332.697-.554 1.096-1.366 3.485-.225 6.719.113.323.518.55.987.554Z"
                          fill="#FFCDA6"
                        />
                        <path
                          d="m75.133 61.758 25.602-.566c.454-.01.887-.194 1.204-.513a1.69 1.69 0 0 0 .496-1.194v-1.823c0-.448-.18-.878-.5-1.197a1.753 1.753 0 0 0-1.212-.51l-25.822-.367c-.583-.011-1.11.249-1.278.638-.725 1.683-.794 3.355.287 5.005.216.332.698.542 1.223.527Z"
                          fill="#FC8D36"
                        />
                        <path
                          d="m76.018 61.433 1.079-.062c.327-.018.573-.226.554-.466l-.334-4.21c-.017-.222-.255-.399-.556-.416l-.745-.04c-.349-.02-.647.183-.647.44v4.313c.001.258.3.46.65.44Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="m98.734 4.525-.607-.3-1.943 3.89.607.302 1.943-3.892Z"
                          fill="#333"
                        />
                        <path
                          d="M92.813 14.068s-1.075-2.62 1.913-4.554l1.766.875s.05 3.44-2.464 4.352a1.248 1.248 0 0 0 .418-.907s-.52.896-1.328 1.14c0 0-.074-1.152.46-1.787 0 0-.563.405-.765.88Z"
                          fill="#FF7900"
                        />
                        <path
                          d="M97.548 8.274 95.782 7.4a.438.438 0 0 0-.578.195l-.864 1.73a.432.432 0 0 0 .19.58l1.766.876a.397.397 0 0 0 .314.026l.015-.003.016-.006a.401.401 0 0 0 .233-.21l.867-1.736a.433.433 0 0 0-.193-.577Z"
                          fill="#333"
                        />
                        <path
                          d="m116.334 14.96-15.276-7.57a.437.437 0 0 0-.579.192l-3.628 7.265a.433.433 0 0 0 .195.576l15.276 7.57a.4.4 0 0 0 .314.027l.015-.004a.404.404 0 0 0 .25-.215l3.628-7.264a.434.434 0 0 0-.195-.576Z"
                          fill="#202020"
                        />
                        <path
                          d="M116.529 15.537a.434.434 0 0 0-.195-.576l-15.276-7.57a.437.437 0 0 0-.579.191l-.77 1.543 4.475 4.09 4.028 3.678c.311.285.661.297.978.363l2.363.507 3.498.733 1.478-2.96Z"
                          fill="#141414"
                        />
                        <path
                          d="m124.314 18.855-10.996-8.96-2.53-2.06-.098-.083-.02-.01-.269-.236-.009-.004-.106-.09a1.575 1.575 0 0 0-.464-.289l-4.576-1.394-10.735-3.268c-.15-.045-.243-.016-.288.05-.094.073-.094.223.08.402a.65.65 0 0 0 .168.156l10.161 9.284 4.027 3.678c.312.285.662.297.978.363l2.36.48 12.333 2.575c.356.076.278-.355-.016-.594Z"
                          fill="#231F20"
                        />
                        <path
                          d="M84.566 41.201a13.333 13.333 0 0 0-.672-6.253 13.378 13.378 0 0 0-3.465-5.256 13.45 13.45 0 0 0-5.494-3.1 13.486 13.486 0 0 0-12.038 2.382 13.39 13.39 0 0 0-3.886 4.956 13.337 13.337 0 0 0 .593 12.211l-12.383 9.481a1.767 1.767 0 0 0-.323 2.476c.194.249.452.44.747.554a1.78 1.78 0 0 0 1.749-.238l12.38-9.477a13.45 13.45 0 0 0 6.452 3.553c2.442.562 4.992.433 7.364-.373a13.435 13.435 0 0 0 6.057-4.19 13.356 13.356 0 0 0 2.925-6.74l-.006.014Zm-7.303 6.067a9.906 9.906 0 0 1-12.529-.402 9.831 9.831 0 0 1-3.237-5.794 9.809 9.809 0 0 1 1.187-6.525 9.87 9.87 0 0 1 5.074-4.293 9.915 9.915 0 0 1 6.656-.113 9.874 9.874 0 0 1 5.217 4.119 9.81 9.81 0 0 1 1.41 6.48 9.84 9.84 0 0 1-3.776 6.529l-.002-.001Z"
                          fill="#48639E"
                        />
                        <ellipse
                          cx="9.529"
                          cy="9.907"
                          rx="9.529"
                          ry="9.907"
                          transform="rotate(8.969 -146.351 417.949) skewX(-.069)"
                          fill="#fff"
                          fillOpacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="jsx-3826371916 bottom-section">
                    <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
                      <a
                        className="inner-pill"
                        href="/medical"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          NEET
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          NMAT
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        data-csm-title="NIRF 1174"
                        href="/management"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          GATE
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">CAT</span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/management"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          JEE-Advance
                        </span>
                      </a>
                    </div>
                    <div className="jsx-3826371916 more-programs">
                      <a
                        className="text-dark"
                        href="/engineering"
                      >
                        Find Where you may get Admission.
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          style={{ width: 6, height: 10, marginLeft: 8 }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-index={0}
              className="slick-slide slick-active slick-current"
              tabIndex={-1}
              aria-hidden="false"
              style={{ outline: "none", width: 370 }}
            >
              {/*COMPARE COLLEGES*/}
              <div>
                <div className="jsx-3826371916 program-card">
                  <div className="jsx-3826371916 top-section d-flex">
                    <div className="jsx-3826371916 col-7 p-0">
                      <h2 className="jsx-3826371916 program-heading">
                        Compare Colleges
                      </h2>
                      <p className="jsx-3826371916 program-subheading">
                        Compare on the basis of rank, fees, etc.
                      </p>
                    </div>
                    <div className="jsx-3826371916 img-container img-2 category-logo">
                      <svg
                        width={149}
                        height={83}
                        viewBox="0 0 149 83"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m.915 83 38.872-.21 10.361-.004h3.433l10.381-.003 47.429-.013s10.848-14.518-.74-28.306c-12.015-14.296-17.856-2.655-21.55-22.778-9.296-50.654-101.203-21.172-77.096 21.932C20.685 69.138-5.081 60.888.915 83Z"
                          fill="#fff"
                        />
                        <path
                          d="M132.573 31.524c-2.417-.678-4.071-1.853-5.933-3.574l.788-1.358c1.956 2.097 2.592 3.23 5.042 3.066l.103 1.866Z"
                          fill="#FFB900"
                        />
                        <path
                          d="M100.081 36.637c-2.546.512-4.665.217-7.26-.474v-1.596c2.88.986 4.058 1.714 6.184.43l1.076 1.64Z"
                          fill="#4FB8DD"
                        />
                        <path
                          d="M76.632 30.144c-1.204 1.384-2.555 2.125-4.375 2.844l-.78-.909c2.123-.672 3.152-.763 3.738-2.408l1.417.473Z"
                          fill="#FF5C33"
                        />
                        <path
                          d="M39.965 30.778c-2.181-1.284-3.325-2.857-4.416-5.019l1.485-1.125c1.007 2.55 1.118 3.824 3.739 4.293l-.808 1.85Z"
                          fill="#4FB8DD"
                        />
                        <path
                          d="M29.415 42.048c-2.472 1.399-4.8 1.803-7.791 1.955l-.619-1.675c3.396.062 4.913.427 6.647-1.638l1.763 1.358Z"
                          fill="#007BFF"
                        />
                        <path
                          d="M46.42 6.417c-2.48 1.18-4.751 1.418-7.632 1.368l-.47-1.647c3.259.282 4.69.733 6.51-1.138l1.592 1.417Z"
                          fill="#FFB900"
                        />
                        <path
                          d="M81.566 10.49c-2.066-.825-3.404-2.02-4.868-3.717l.842-1.127c1.508 2.036 1.953 3.1 4.129 3.185l-.103 1.659Z"
                          fill="#4FB8DD"
                        />
                        <path
                          d="M123.654 13.01c2.262-1.079 3.517-2.486 4.769-4.447l-1.384-1.136c-1.197 2.33-1.405 3.515-4.039 3.807l.654 1.776ZM114.703 58.391c-.909 2.288-2.309 3.807-4.321 5.483l-1.44-.854c2.431-1.745 3.719-2.286 3.706-4.656l2.055.027ZM63.063 21.313c.53 0 .96-.347.96-.776 0-.43-.43-.777-.96-.777s-.96.348-.96.777c0 .429.43.776.96.776Z"
                          fill="#FF5C33"
                        />
                        <path
                          d="M97.351 21.313c.53 0 .96-.347.96-.776 0-.43-.43-.777-.96-.777s-.96.348-.96.777c0 .429.43.776.96.776Z"
                          fill="#FFB900"
                        />
                        <path
                          d="M122.443 44.982c.53 0 .96-.348.96-.777 0-.43-.43-.777-.96-.777-.531 0-.961.348-.961.777 0 .429.43.777.961.777Z"
                          fill="#FF5C33"
                        />
                        <path
                          d="M22.588 52.853c.53 0 .96-.347.96-.776 0-.43-.43-.777-.96-.777s-.96.348-.96.777c0 .429.43.776.96.776Z"
                          fill="#4FB8DD"
                        />
                        <path
                          d="M1.92 27.944 0 29.497l1.92 1.554 1.92-1.554-1.92-1.553Z"
                          fill="#FFB900"
                        />
                        <path
                          d="M62.69 44.071a3 3 0 0 1 3-3h19.526a3 3 0 0 1 3 3v38.834H62.69V44.07Z"
                          fill="#FC8D36"
                        />
                        <path
                          d="M88.215 66.76a3 3 0 0 1 3-3h13.144a3 3 0 0 1 3 3v16.145H88.215V66.76ZM40 60.38a3 3 0 0 1 3-3h16.69a3 3 0 0 1 3 3v22.525H40V60.379Z"
                          fill="#F2AE78"
                        />
                        <path
                          d="m74.347 12.346 3.328 6.9a.613.613 0 0 0 .454.337l7.443 1.108a.597.597 0 0 1 .302.139.618.618 0 0 1 .196.62.622.622 0 0 1-.164.294l-5.385 5.371a.617.617 0 0 0-.174.547l1.271 7.583a.631.631 0 0 1-.24.605.595.595 0 0 1-.636.047l-6.656-3.582a.596.596 0 0 0-.562 0l-6.658 3.582a.592.592 0 0 1-.635-.048.63.63 0 0 1-.24-.604l1.272-7.585a.634.634 0 0 0-.174-.546l-5.386-5.372a.62.62 0 0 1-.153-.632.618.618 0 0 1 .186-.282.597.597 0 0 1 .302-.139l7.442-1.107a.597.597 0 0 0 .455-.338l3.328-6.9a.613.613 0 0 1 .223-.251.594.594 0 0 1 .86.253Z"
                          fill="#FBC343"
                        />
                        <circle
                          cx="52.833"
                          cy="48.251"
                          r="4.794"
                          fill="#FF7900"
                        />
                        <circle
                          cx="97.472"
                          cy="56.291"
                          r="4.794"
                          fill="#3EAE8D"
                        />
                        <path
                          d="M123.565 13.39s1.334 2.195-1.173 3.577c0 0 1.926.694 2.599.432a1.46 1.46 0 0 1-.292.236s1.811.575 2.712.261c.901-.314 2.846-9.078-2.497-9.54 0 0-4.215-1.51-5.106 3.194-.892 4.703-2.514 4.247-2.514 4.247s.394.332.611.393c0 0 .35-.023.459-.167 0 0-.135.236-.236.296 0 0 1.709.646 2.756.282 1.047-.364 2.664-2.195 2.681-3.212Z"
                          fill="#163560"
                        />
                        <path
                          d="M118.205 82.584h6.817s.163-1.038-.193-1.827c-.341-.756-.872-1.223-.921-1.802-.433.446-.965.732-1.951.6-.121.196-.78 1.243-1.182 1.533-.45.32-2.437.207-2.57 1.496Z"
                          fill="#233862"
                        />
                        <path
                          d="M123.834 79.981c-.387.12-.786.2-1.189.242-1.073.096-1.23-.224-1.23-.224s-1.067-9.499-4.521-27.655c-.498-2.622-.695-4.073-.875-6.404-.054-.698-.106-1.474-.164-2.384-.157-2.448.215-6.566 2.048-7.648.834-.493 1.968-.358 3.501.847.12.094.244.196.369.305 4.476 3.872 2.641 14.99 2.822 20.217.03.867.116 1.571.294 2.054.231.625.727 1.49.84 2.306.943 6.78-1.895 18.344-1.895 18.344Z"
                          fill="#2B478B"
                        />
                        <path
                          d="m124.599 57.277-8.584-11.34c-.053-.698-.106-1.474-.164-2.384-.157-2.448.215-6.566 2.048-7.648l3.501.847c.121.094.244.196.37.305 4.483 3.875 2.648 14.993 2.829 20.22ZM148.85 68.239l-2.835-6.199s-1.012.284-1.581.936c-.546.625-.945.513-2.184-.35.468.724.531 1.15.821 2.1.228.029 1.528 1.286 2.859 1.633.529.141 1.689 2.291 2.92 1.88Z"
                          fill="#233862"
                        />
                        <path
                          d="M119.104 38.629s6.109 21.235 8.348 22.6c2.239 1.367 14.005 3.248 16.397 4.273 0 0 .291-.417.121-1.31-.038-.198-.376-.912-.376-.912s-7.307-5.492-12.117-6.047c-1.193-.138 2.43-18.365-5.636-19.094-7.368-.664-6.737.49-6.737.49Z"
                          fill="#2B478B"
                        />
                        <path
                          d="M138.53 6.545c.042.087.1.24.151.385v-.116c0-.29 1.08-1.86 1.523-1.958.444-.099 1.068 1.373.515 2.187-.284.417-.979 1.847-.979 1.847l-1.148-.593s-.066-.517-.229-.647-.134-.934-.18-1.27c.002 0 .193-.153.347.165ZM108.187 2.707c.081.051.211.152.331.248l-.062-.1c-.152-.245-.06-2.149.266-2.466.325-.317 1.63.606 1.588 1.589-.022.505-.056 2-.056 2l-1.093.186s-.328-.405-.535-.43c-.207-.025-.605-.724-.822-.985.002-.001.084-.232.383-.042ZM120.325 19.014c-.014.005 1.228.903 2.284.777.99-.118 1.797-1.26 1.783-1.265-.393-.14-.424-.708-.062-3.091l-.187.008-3.156.152s-.073.975-.206 1.884c-.115.76-.269 1.477-.456 1.535Z"
                          fill="#FFB27D"
                        />
                        <path
                          d="M120.984 15.592s-.073.975-.206 1.884c1.722.206 2.861-1.223 3.362-2.036l-3.156.152Z"
                          fill="#ED975D"
                        />
                        <path
                          d="M124.505 15.155s1.11-1.287 1.507-2.469c.282-.844.315-4.123-2.98-4.141a4.43 4.43 0 0 0-1.921.417c-.772.37-1.936 1.241-1.221 4.214l.152.99 4.463.99Z"
                          fill="#163560"
                        />
                        <path
                          d="M116.368 37.81s3.095 1.953 8.25.699c.06-.015 2.931-.473 2.931-.473-.072-.197-3.089-5.18-3.159-5.361-.915-2.363 1.204-13.628-.193-14.26-.357.388-1.376.654-2.248.577-1.005-.089-1.339-.523-1.26-.99-1.111.526-1.969 1.015-1.969 1.015-1.01 1.522-2.352 18.793-2.352 18.793ZM120.284 16.367s4.048.67 4.427-1.857c.379-2.527 1.156-4.143-1.413-4.677-2.569-.535-3.216.353-3.548 1.166-.331.813-.509 5.128.534 5.368Z"
                          fill="#FFB27D"
                        />
                        <path
                          d="M121.459 9.496s.67 3.13 2.31 3.822c1.639.692 2.447.346 2.447.346s-1.152-1.234-1.154-3.088c0 0-2.555-2.367-3.603-1.08Z"
                          fill="#163560"
                        />
                        <path
                          d="M121.698 9.778s-.927.538-1.226 1.152c-.298.613-.586 1.925-.965 1.822 0 0-.537-2.14.573-3.14 1.177-1.061 1.618.166 1.618.166Z"
                          fill="#163560"
                        />
                        <path
                          d="M139.479 8.89s-2.61 7.935-3.307 9.162c-.419.74-5.119 3.668-7.851 5.597a.44.44 0 0 0-.104.126c-.682 1.054-2.799 7.575-2.293 8.742 2.126 4.918 3.587 6.82 4.118 8.2a1.322 1.322 0 0 1-.033 1.02 1.313 1.313 0 0 1-.755.687 22.386 22.386 0 0 1-4.577 1.098c-4.195.532-7.035-.452-8.477-1.181a1.919 1.919 0 0 1-1.051-1.823c.086-1.556.866-3.096 1.216-6.838.265-2.84-2.185-7.162-2.081-8.673.041-.598.511-1.313.766-1.776.45-.82.697-1.562.393-1.973-1.996-2.74-6.307-6.518-6.483-7.462-.258-1.387-.141-9.955-.141-9.955.164-.058.407-.195.724-.223.213-.009.427.014.635.066 0 0 1.142 7.1 1.227 7.475.085.376 4.91 5.808 6.205 5.784 1.171-.02 2.824.885 3.081 1.06a12.438 12.438 0 0 0-1.314 4.382c-.184 1.76.993.978 1.732-.229 1-1.632 3.013-3.957 3.013-3.957s1.638-.426 2.859.017c1.221.442 7.535-3.124 7.737-3.452.203-.329 3.585-6.63 3.585-6.63s.28-.162.73.072a.825.825 0 0 1 .446.684Z"
                          fill="#F99746"
                        />
                        <path
                          d="M121.459 14.998s-.173.35-.405.356c-.233.006-.825-.05-.866-.11a3.187 3.187 0 0 1-.138-.426s.979-.042 1.409.18Z"
                          fill="#fff"
                        />
                        <path
                          d="M129.258 42.43a22.401 22.401 0 0 1-3.683.964c-1.448-1.995-3.898-4.506-3.267-9.124.651-4.774 5.345-9.798 5.906-10.491-.681 1.053-2.799 7.574-2.292 8.74 2.126 4.92 3.587 6.822 4.118 8.202a1.321 1.321 0 0 1-.03 1.02 1.314 1.314 0 0 1-.752.69ZM115.054 23.238c.451-.821.698-1.562.394-1.974-1.996-2.74-6.307-6.518-6.483-7.461.427 1.023 5.648 4.088 7.116 5.405 1.453 1.302-.969 3.966-1.027 4.03Z"
                          fill="#ED7D2B"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="jsx-3826371916 bottom-section">
                    <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
                      <a
                        className="inner-pill"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          IIT Madras
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          IIT Delhi
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          IIT Madras
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          IIT Bombay
                        </span>
                      </a>
                    </div>
                    <div className="jsx-3826371916 more-programs">
                      <a
                        className="text-dark"
                        href="/engineering"
                      >
                        Compare Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          style={{ width: 6, height: 10, marginLeft: 8 }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/*COURSE FINDER*/}
                <div className="jsx-3826371916 program-card">
                  <div className="jsx-3826371916 top-section d-flex">
                    <div className="jsx-3826371916 col-7 p-0">
                      <h2 className="jsx-3826371916 program-heading">
                        Course Finder
                      </h2>
                      <p className="jsx-3826371916 program-subheading">
                        Discover top courses in Indian Colleges 2023
                      </p>
                    </div>
                    <div className="jsx-3826371916 img-container img-2 category-logo">
                      <svg
                        width={144}
                        height={80}
                        viewBox="0 0 144 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m1.041 79.718 44.234-.215 11.79-.003h3.907l11.813-.004 53.97-.013s12.344-14.838-.842-28.93c-13.672-14.61-20.319-2.713-24.521-23.28C90.813-24.496-13.771 5.635 13.661 49.69c9.877 15.862-19.443 7.43-12.62 30.03Z"
                          fill="#fff"
                        />
                        <path
                          d="M120.185 27.094a.376.376 0 0 1-.375.375.376.376 0 0 1-.365-.375V21.31a.377.377 0 0 1 .365-.375.375.375 0 0 1 .375.375v5.785Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M122.883 24.475h-2.7v-2.769h2.7l-.797 1.384.797 1.385Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M142.723 38.868H96.896v29.446h45.827V38.868Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="M143.882 68.314H95.735v4.178h48.147v-4.178ZM143.882 34.69H95.735v4.178h48.147V34.69Z"
                          fill="#FFCB9B"
                        />
                        <path
                          d="M102.931 38.868h-3.714v29.446h3.714V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M103.758 39.437a.565.565 0 0 1-.559.57h-4.242a.57.57 0 1 1 0-1.14h4.242a.57.57 0 0 1 .568.57h-.009ZM103.758 67.744a.563.563 0 0 1-.35.527.565.565 0 0 1-.218.043h-4.233a.571.571 0 0 1-.403-.972.57.57 0 0 1 .403-.167h4.242a.57.57 0 0 1 .568.569h-.009Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M110.889 38.868h-3.714v29.446h3.714V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M111.717 39.437a.563.563 0 0 1-.35.527.567.567 0 0 1-.218.043h-4.233a.57.57 0 0 1 0-1.14h4.233a.569.569 0 0 1 .568.57ZM111.717 67.744a.563.563 0 0 1-.35.527.565.565 0 0 1-.218.043h-4.233a.57.57 0 0 1 0-1.139h4.233a.569.569 0 0 1 .568.569Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M132.444 38.868h-3.715v29.446h3.715V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M133.277 39.437a.583.583 0 0 1-.166.403.572.572 0 0 1-.403.167h-4.237a.568.568 0 0 1-.527-.789.556.556 0 0 1 .309-.307.565.565 0 0 1 .218-.043h4.233a.562.562 0 0 1 .404.165.562.562 0 0 1 .169.404ZM133.277 67.744a.583.583 0 0 1-.166.403.572.572 0 0 1-.403.167h-4.237a.57.57 0 1 1 0-1.139h4.233a.57.57 0 0 1 .568.569h.005Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M140.403 38.868h-3.715v29.446h3.715V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M141.23 39.437a.564.564 0 0 1-.166.403.573.573 0 0 1-.403.167h-4.232a.57.57 0 1 1 0-1.14h4.232a.567.567 0 0 1 .569.57ZM141.23 67.744a.564.564 0 0 1-.166.403.573.573 0 0 1-.403.167h-4.232a.57.57 0 1 1 0-1.139h4.232a.567.567 0 0 1 .569.569Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M124.782 68.312V56.618a4.985 4.985 0 0 0-1.419-3.586 4.988 4.988 0 0 0-3.555-1.494 4.978 4.978 0 0 0-4.974 5.08v11.694h9.948Z"
                          fill="#FFA95A"
                        />
                        <path
                          d="M119.809 26.644 96.896 34.69h45.827l-22.914-8.046Z"
                          fill="#FFB068"
                        />
                        <path
                          d="m119.81 27.639-17.249 6.057H137.057l-17.247-6.057Z"
                          fill="#FFBE84"
                        />
                        <path
                          d="M60.45 27.094a.378.378 0 0 1-.375.375.375.375 0 0 1-.364-.375V21.31a.373.373 0 0 1 .364-.375.375.375 0 0 1 .375.375v5.785Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M63.148 24.475h-2.7v-2.769h2.7l-.797 1.384.797 1.385Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M82.988 38.868H37.16v29.446h45.827V38.868Z"
                          fill="#FFE7D3"
                        />
                        <path
                          d="M84.147 68.314H36v4.178h48.147v-4.178ZM84.147 34.69H36v4.178h48.147V34.69Z"
                          fill="#FFCB9B"
                        />
                        <path
                          d="M43.197 38.868h-3.715v29.446h3.715V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M44.024 39.437a.568.568 0 0 1-.56.57h-4.242a.57.57 0 1 1 0-1.14h4.242a.568.568 0 0 1 .568.57h-.008ZM44.024 67.744a.567.567 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.139h4.242a.569.569 0 0 1 .568.569h-.008Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M51.154 38.868H47.44v29.446h3.714V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M51.983 39.437a.57.57 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.14h4.233a.568.568 0 0 1 .569.57ZM51.983 67.744a.569.569 0 0 1-.569.57h-4.233a.57.57 0 1 1 0-1.139h4.233a.569.569 0 0 1 .569.569Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M72.709 38.868h-3.715v29.446h3.715V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M73.542 39.437a.569.569 0 0 1-.569.57h-4.237a.568.568 0 0 1-.404-.973.568.568 0 0 1 .404-.166h4.233a.569.569 0 0 1 .573.569ZM73.542 67.744a.569.569 0 0 1-.569.57h-4.237a.57.57 0 1 1 0-1.139h4.233a.569.569 0 0 1 .568.569h.005Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M80.668 38.868h-3.715v29.446h3.715V38.868Z"
                          fill="#FFC693"
                        />
                        <path
                          d="M81.495 39.437a.567.567 0 0 1-.569.57h-4.232a.57.57 0 1 1 0-1.14h4.232a.568.568 0 0 1 .569.57ZM81.495 67.744a.567.567 0 0 1-.569.57h-4.232a.57.57 0 1 1 0-1.139h4.232a.569.569 0 0 1 .569.569Z"
                          fill="#FFB068"
                        />
                        <path
                          d="M65.047 68.312V56.618a4.975 4.975 0 1 0-9.947 0v11.694h9.947Z"
                          fill="#FFA95A"
                        />
                        <path
                          d="M60.075 26.644 37.16 34.69h45.827l-22.913-8.046Z"
                          fill="#FFB068"
                        />
                        <path
                          d="m60.075 27.639-17.25 6.057h34.497l-17.247-6.057Z"
                          fill="#FFBE84"
                        />
                        <path
                          d="M94.342 26.735h-9.296l.653-4.215-2.611 4.215h-2.101c.69-26.886 25.917-28.396 26.047 0h-2.086l-.788-6.375-.92 6.375h-3.852v-6.282l-1.226 6.282h-3.82Z"
                          fill="#202938"
                        />
                        <path
                          d="M87.966 18.382c.49 3.101-2.112 3.543-2.672.454-.493-3.101 2.11-3.543 2.672-.454ZM100.725 18.382c-.491 3.101 2.111 3.543 2.671.454.492-3.101-2.111-3.543-2.671-.454Z"
                          fill="#FFB27D"
                        />
                        <path
                          d="M98.275 20.995h-7.859c.95 2.706-1.12 16.265-1.12 16.265h10.103s-2.072-13.559-1.124-16.265Z"
                          fill="#F4D2C6"
                        />
                        <path
                          d="M101.929 18.765c-.188 12.139-14.981 12.137-15.169 0-1.345-12.426 16.113-12.548 15.169 0Z"
                          fill="#FFB27D"
                        />
                        <path
                          d="M90.52 26.735s3.563 2.747 7.647 0l.215 2.459s-4.398 2.055-8.078.025l.217-2.484Z"
                          fill="#FFB27D"
                        />
                        <path
                          d="M95.88 9.538v5.813s-4.695.385-9.017 1.051C85.654 8.875 95.66 6.085 95.88 9.538Z"
                          fill="#202938"
                        />
                        <path
                          d="m95.83 9.09 1.24 5.985c1.618.257 3.201.702 4.716 1.328 0 0 2.121-8.569-5.955-7.313Z"
                          fill="#202938"
                        />
                        <path
                          d="M109.884 41.273c-1.506-8.213-8.161-10.093-15.54-9.608h-.214c-7.266-.525-13.908 1.589-15.328 9.608L75.727 67.93c17.183 4.964 20.112 4.67 37.233 0l-3.076-26.658Z"
                          fill="#F99746"
                        />
                        <mask
                          id="a"
                          maskUnits="userSpaceOnUse"
                          x={76}
                          y={31}
                          width={38}
                          height={41}
                          style={{ maskType: "luminance" }}
                        >
                          <path
                            d="M110.243 41.62c-1.506-8.212-8.161-10.092-15.54-9.607h-.215c-7.266-.525-13.907 1.589-15.327 9.608l-3.076 26.658c17.183 4.964 20.112 4.67 37.234 0l-3.076-26.658Z"
                            fill="#fff"
                          />
                        </mask>
                        <g mask="url(#a)">
                          <path
                            d="M77.879 55c6.319 3.502 20.065 11.828 30.59 10.558-15.708 8.158-14.707 8.23-31.165 1.803L77.879 55Z"
                            fill="#FF7900"
                          />
                        </g>
                        <path
                          d="M88.378 31.472c.731 5.349 11.211 5.325 11.93 0 0 0-6.09-.468-11.93 0Z"
                          fill="#F4D2C6"
                        />
                        <path
                          d="m94.342 35.568-3.83 3.818s-3.895-2.4-3.266-7.392l1.023-.206 6.073 3.78ZM94.343 35.568l3.83 3.818s3.896-2.4 3.267-7.392l-1.023-.206-6.074 3.78Z"
                          fill="#fff"
                        />
                        <path
                          d="M74.658 46.76c-.28 5.747-4.53 15.533 4.552 16.48l-.735-13.854-3.817-2.626ZM113.5 47.135c.364 5.97 4.392 15.39-4.573 16.888l.757-14.262 3.816-2.626Z"
                          fill="#FFB27D"
                        />
                        <path
                          d="M87.096 74.808s-2.956-1.833-4.513-1.352c-.233.073-1.858 2.078-1.858 2.078l-5.516 2.09c-1.023.35-1.547 1.358-1.696 2.376h13.986l-.403-5.192Z"
                          fill="#EDA19D"
                        />
                        <path
                          d="M86.722 73.665s24.573-13.606 33.326-12.412c8.754 1.194 9.136 13.375 1.576 15.961C114.064 79.8 87.208 80 87.208 80l-.486-6.335Z"
                          fill="#48639E"
                        />
                        <path
                          d="M101.964 73.665S77.39 60.059 68.637 61.253c-8.752 1.194-9.136 13.375-1.575 15.961C74.622 79.8 101.477 80 101.477 80l.487-6.335Z"
                          fill="#355395"
                        />
                        <path
                          d="M101.876 74.808s2.954-1.833 4.512-1.352c.234.073 1.858 2.078 1.858 2.078l5.516 2.09c1.024.35 1.546 1.358 1.697 2.376h-13.983l.4-5.192Z"
                          fill="#F4D2C6"
                        />
                        <path
                          d="m75.098 37.674 17.212 7.239v19.608l-17.212-7.514V37.674ZM112.917 37.674l-17.211 7.239v19.608l17.211-7.514V37.674Z"
                          fill="#323C4F"
                        />
                        <path
                          d="M95.706 44.913h-3.397V64.52h3.397V44.913Z"
                          fill="#28354F"
                        />
                        <path
                          d="m76.267 38.166 3.957-.906 13.707 5.848-1.622 1.805-16.042-6.747ZM93.931 43.108l1.775 1.805 15.617-6.568-2.856-1.08-14.536 5.843Z"
                          fill="#fff"
                        />
                        <path
                          d="m93.931 43.108-1.622 1.805h3.397l-1.775-1.805Z"
                          fill="#DCECFD"
                        />
                        <path
                          d="M112.838 44.654c-1.241.753-3.732 1.519-3.852 3.27-.399 2.083 1.996 3.89 3.903 3.013.401-.38.842-.851.81-1.445v-3.478a1.5 1.5 0 0 0-.859-1.36h-.002ZM75.096 44.654c1.241.753 3.733 1.519 3.852 3.27.4 2.083-1.995 3.89-3.903 3.013-.4-.38-.842-.85-.81-1.445v-3.478a1.506 1.506 0 0 1 .861-1.36Z"
                          fill="#FFB27D"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="jsx-3826371916 bottom-section">
                    <div className="jsx-3826371916 d-flex flex-wrap inner-pills ">
                      <a
                        className="inner-pill"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          BE/B.Tech
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          ME/M.Tech
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/engineering"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          MBA/PGDM
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/management"
                      >
                        <span className="jsx-3826371916 line-clamp-1">
                          B.Sc
                        </span>
                      </a>
                      <a
                        className="inner-pill"
                        href="/arts"
                      >
                        <span className="jsx-3826371916 line-clamp-1">B.A</span>
                      </a>
                    </div>
                    <div className="jsx-3826371916 more-programs">
                      <a
                        className="text-dark"
                        href="/arts"
                      >
                        Get Top Courses in Indian Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          style={{ width: 6, height: 10, marginLeft: 8 }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Latest Notification */}
      <div className="container">
        <h2 className="text">Latest Notification </h2>
        <br />

        <section className="featured-post container">
          <div className="row">
            {/*MCC NEET PG*/}
            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    MCC NEET PG 2023 Counselling registration begins
                  </h5>
                  <img src={ap} alt="Avatar" className="card-avatar" />
                  <h6
                    className="card-subtitle mb-2 text-muted"
                    style={{
                      padding: "10px",
                      paddingTop: "5px",
                      paddingBottom: "1px",
                      paddingLeft: "45px",
                    }}
                  >
                    Exam ⏰ july 28, 2023
                  </h6>

                  <p className="card-text" style={{ fontSize: "15px" }}>
                    NEET PG 2023 Counselling Registration has been started at
                    mcc.nic.in. Candidates can apply for the counselling process
                    till August 1.
                  </p>
                  <a href="#" className="card-button">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    Madras University BEd Distance Education Admission 2023
                  </h5>
                  <img src={uttar} alt="Avatar" className="card-avatar" />
                  <h6
                    className="card-subtitle mb-2 text-muted"
                    style={{
                      padding: "10px",
                      paddingTop: "5px",
                      paddingBottom: "1px",
                      paddingLeft: "45px",
                    }}
                  >
                    Addmissin ⏰ Aug 5, 2023
                  </h6>

                  <p className="card-text" style={{ fontSize: "15px" }}>
                    Madras University is inviting application for admission in
                    BEd program through distance mode for the academic year
                    2023-24.
                  </p>
                  <a href="#" className="card-button">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    MHT CET 2023 Round 2 Seat Allotment Out, Accept Seat by
                    August 6
                  </h5>
                  <img src={tamil} alt="Avatar" className="card-avatar" />
                  <h6
                    className="card-subtitle mb-2 text-muted"
                    style={{
                      padding: "10px",
                      paddingTop: "5px",
                      paddingBottom: "1px",
                      paddingLeft: "45px",
                    }}
                  >
                    Exam ⏰ Aug 4, 2023
                  </h6>

                  <p className="card-text" style={{ fontSize: "15px" }}>
                    MHT CET 2023 Round 2 Seat Allotment result has been released
                    at fe2023.mahacet.org. Candidates can check the allotment
                    result.
                  </p>
                  <a href="#" className="card-button">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <section className="featured-post container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    GATE 2024 Registrations likely from Aug 24, Application Fee
                    Revised
                  </h5>
                  <img src={iimlko} alt="Avatar" className="card-avatar" />
                  <h6
                    className="card-subtitle mb-2 text-muted"
                    style={{
                      padding: "10px",
                      paddingTop: "5px",
                      paddingBottom: "1px",
                      paddingLeft: "45px",
                    }}
                  >
                    Exam ⏰ Aug 5, 2023
                  </h6>

                  <p className="card-text" style={{ fontSize: "15px" }}>
                    IISc Bangalore expected to start GATE 2024 registrations
                    from August 24. Eligible candidates will be able to apply
                    for GATE 2024 at gate2024.iisc.ac.in.
                  </p>
                  <a href="#" className="card-button">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    MAHE Bengaluru LLM Admission 2023 Open Apply is August 31
                  </h5>
                  <img src={mhtlogo} alt="Avatar" className="card-avatar" />
                  <h6
                    className="card-subtitle mb-2 text-muted"
                    style={{
                      padding: "10px",
                      paddingTop: "5px",
                      paddingBottom: "1px",
                      paddingLeft: "45px",
                    }}
                  >
                    Addmissin ⏰ Aug 4, 2023
                  </h6>

                  <p className="card-text" style={{ fontSize: "15px" }}>
                    MAHE Bengaluru is inviting application for admission in LLM
                    program for the academic year 2023-24; The Last Date to
                    Apply is August 31
                  </p>
                  <a href="#" className="card-button">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 ">
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    University of Hyderabad PG Admission 2023 CUET Apply is
                    August 12
                  </h5>
                  <img src={clster} alt="Avatar" className="card-avatar" />
                  <h6
                    className="card-subtitle mb-2 text-muted"
                    style={{
                      padding: "10px",
                      paddingTop: "5px",
                      paddingBottom: "1px",
                      paddingLeft: "45px",
                    }}
                  >
                    Addmissin ⏰ Aug 4, 2023
                  </h6>

                  <p className="card-text" style={{ fontSize: "15px" }}>
                    University of Hyderabad is inviting application for
                    admission in PG courses for the academic year 2023-24
                    through CUET.
                  </p>
                  <a href="#" className="card-button">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>

      {/* Top 10 Colleges */}
      <div className="container">
        <h2 className="text">Top 10 Colleges </h2>

        <div className="p-4">
          <div className="button2-row">
            <div
              className="container"
              style={{
                cursor: "pointer",
                backgroundColor: "#F8F8F8",
                backgroundImage:
                  "url(	https://searchmycolleges.com/wp-content/uploads/2023/05/bg-1.jpg )",
              }}
            >
              <div className="p-4">
                <div className="button2-row">
                  <div className="scroll-container">
                    <ul className="cards006">
                      {/* ... your list of items ... */}
                      <ul className="cards006">
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href="/"
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                width: "120px",
                                marginLeft: "20px",
                                marginRight: "10px",
                              }}
                            >
                              Uttar Pradesh
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Panjab
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Uttara Khand
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Madhya Pradesh
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              MahaRashtra
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Rajasthan
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Tamil-Nadu
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Delhi NCR
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Andhra Pradesh
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Haryana
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Gujrat
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Karnataka
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              West Bangal
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Himanchal Pradesh
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Telangana
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Kerala
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Bihar
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              JharKhand
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Orissa
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Chandigarh
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Chhatisgarh
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Arunachal Pradesh
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Puducherry
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Assam
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Jammu & Kashmir
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Meghalaya
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Goa
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Manipur
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Sikkim
                            </a>
                          </div>
                        </li>
                        <li className="card006">
                          <div className="card006-link-wrapper">
                            <a
                              href=""
                              className="card006-link"
                              style={{
                                justifyContent: "center",
                                marginRight: "10px",
                              }}
                            >
                              Andaman and Nicobar-Island
                            </a>
                          </div>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div>
          <table
            className="table align-middle mb-0 bg-white"
            style={{ border: "1px solid black" }}
          >
            <thead className="bg-light">
              <tr>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                Rank
                </th>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                College
                </th>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                Ranking
                </th>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                Cutoff
                </th>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                Application
                </th>
                <th style={{ fontSize: "16px", fontWeight: "bold" }}>
                Enquiry
                </th>
              </tr>
            </thead>
            <tbody>
              {/*1*/}

              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #1
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIM Bangalore - Indian Institute of Management
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Bangalore,Karnataka | ⭐10/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #1 out of 50 in india
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    CAT 2022 cut off 99
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                <a className="btn btn-primary" href="/login">Enquiry</a>
                </td>
              </tr>

              {/*2*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #2
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Madras - Indian Institute of Technology - [IITM]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Chennai,Tamil Nadu | ⭐10/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #15 out of 50 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 144
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>14 Jan - 30 Jul 2023</td>
                <td>
                <a className="btn btn-primary" href="/login">Enquiry</a>
                </td>
              </tr>

              {/*3*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #3
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Kharagpur - Indian Institute of Technology -
                        [IITKGP]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Kharagpur,West Bengal | ⭐10/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #6 out of 50 in india 2019
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 261
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>19 May - 30 Jul 2023</td>
                <td>
                <a className="btn btn-primary" href="/login">Enquiry</a>
                </td>
              </tr>

              {/*4*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #4
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Delhi - Indian Institute of Technology [IITD]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        New Delhi,Delhi NCR | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #9 out of 50 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 115
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>3 Feb - 11 Feb 2023</td>
                <td>
                <a className="btn btn-primary" href="/login">Enquiry</a>
                </td>
              </tr>

              {/*5*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #5
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Bombay - Indian Institute of Technology - [IITB]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Mumbai,Maharashtra | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #10 out of 50 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 66
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                <a className="btn btn-primary" href="/login">Enquiry</a>
                </td>
              </tr>

              {/*6*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #6
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Kanpur - Indian Institute of Technology
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Kanpur,Uttar Pradesh | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #22 out of 50 in india
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 215
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                <a className="btn btn-primary" href="/login">Enquiry</a>
                </td>
              </tr>

              {/*7*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #7
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Roorkee - Indian Institute of Technology - [IITR]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Roorkee,Uttarakhand | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #11 out of 50 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2019
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 396
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                <a className="btn btn-primary" href="/login">Enquiry</a>
                </td>
              </tr>

              {/*8*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #8
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1589790676112018648848892482726766654702028085722509n.jpg?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        BITS Pilani (Pilani Campus)
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Pilani,Rajasthan | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #5 out of 34 in india
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2021
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    BITSAT 2022 Cut off 125
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                <a className="btn btn-primary" href="/login">Enquiry</a>
                </td>
              </tr>

              {/*9*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #9
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian Institute of Technology - IIT Guwahati.png?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        IIT Guwahati - Indian Institute of Technology - [IITG]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        Guwahati,Assam | ⭐9.9/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/the_week1569844170.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #7 out of 34 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2021
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    JEE-Advanced 2023 Cut off 601
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                <a className="btn btn-primary" href="/login">Enquiry</a>
                </td>
              </tr>

              {/*10*/}
              <tr>
                <td>
                  <p
                    className="fw-normal mb-1"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    #10
                  </p>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=30&amp;w=30&amp;mode=stretch"
                      alt=""
                      style={{ width: 45, height: 45 }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p
                        className="fw-bold mb-1"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        All India Institute of Medical Sciences - [AIIMS]
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px" }}
                      >
                        New Delhi,Delhi NCR | ⭐9.8/10
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&amp;w=39.2&amp;mode=stretch"
                      alt=""
                      style={{
                        width: "39.2px",
                        height: "20px",
                        maxHeight: "20px",
                        maxWidth: "39.2px",
                        overflow: "hidden",
                        borderradius: "50%",
                      }}
                    />
                    <div className="ms-3">
                      <p
                        className="fw-normal mb-1"
                        style={{ fontSize: "16px" }}
                      >
                        #6 out of 200 in India
                      </p>
                      <p
                        className="text-muted mb-0"
                        style={{ fontSize: "16px", fontWeight: "bold" }}
                      >
                        2023
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fe-normal mb-1" style={{ fontSize: "16px" }}>
                    NEET 2022 Cut off 55
                  </p>
                </td>
                <td style={{ fontSize: "16px" }}>31Feb - 25Feb 2023</td>
                <td>
                <a className="btn btn-primary" href="/login">Enquiry</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />

      {/* Top Universities/Colleges */}
      <div className="container">
        <h2 className="text">Top Universities/Colleges</h2>
        <br />

        <ul className="cards7">
          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/25602_IIMB_New.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="IIM Bangalore - Indian Institute of Management"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="IIM Bangalore - Indian Institute of Management"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/col30730.png?h=40&w=40&mode=stretch"
                          alt="IIM Bangalore - Indian Institute of Management"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            IIM Bangalore - Indian Institute of Management
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Bangalore, Karnataka | AICTE, UGC
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="MBA/PGDM"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="MBA/PGDM"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/post-graduate-programme-in-management-pgpm-1861"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/post-graduate-programme-in-management-pgpm-1861"
                            style={{ textDecoration: "none" }}
                          >
                            MBA/PGDM
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            24.50 Lacs
                          </span>
                          &nbsp;Total Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          9.2/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          74 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 1 out of 50 Financial Express, Ranked 11 out
                            of 312 NIRF Innovation, Ranked 1001 out of 1799 THE,
                            Ranked 384 out of 1400 QS, Ranked 8 out of 15
                            Outlook, Ranked 1106 out of 2000 US News, Ranked 937
                            out of 2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/1509430807cover.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/1509430807cover.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="IIT Madras - Indian Institute of Technology - [IITM]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="IIT Madras - Indian Institute of Technology - [IITM]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/25881-iit-madras-indian-institute-of-technology-iitm-chennai"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/25881-iit-madras-indian-institute-of-technology-iitm-chennai"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=40&w=40&mode=stretch"
                          alt="IIT Madras - Indian Institute of Technology - [IITM]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            IIT Madras - Indian Institute of Technology - [IITM]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Chennai, Tamil Nadu | AICTE
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="BE/B.Tech"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="BE/B.Tech"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/courses-fees?slug=bachelor-of-technology-btech&course_type=Full-Time"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/courses-fees?slug=bachelor-of-technology-btech&course_type=Full-Time"
                          >
                            BE/B.Tech
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            2.10 Lacs
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.7/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          258 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 1 out of 50 Financial Express, Ranked 11 out
                            of 312 NIRF Innovation, Ranked 1001 out of 1799 THE,
                            Ranked 384 out of 1400 QS, Ranked 8 out of 15
                            Outlook, Ranked 1106 out of 2000 US News, Ranked 937
                            out of 2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/1614949268bg.png?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/1614949268bg.png?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="Chandigarh University - [CU]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Chandigarh University - [CU]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/25777-chandigarh-university-cu-chandigarh"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/25777-chandigarh-university-cu-chandigarh"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1613996461logo1.jpg?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1613996461logo1.jpg?h=40&w=40&mode=stretch"
                          alt="Chandigarh University - [CU]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            Chandigarh University - [CU]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Chandigarh, Chandigarh | NCTE, AICTE
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="BE/B.Tech"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="BE/B.Tech"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/25777-chandigarh-university-cu-chandigarh/bachelor-of-engineering-be-civil-engineering-1936"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/25777-chandigarh-university-cu-chandigarh/bachelor-of-engineering-be-civil-engineering-1936"
                          >
                            BE/B.Tech
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            1.96 Lacs
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          9/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          2662 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 1 out of 50 Financial Express,Ranked 11 out
                            of 312 NIRF Innovation, Ranked 1001 out of 1799 THE,
                            Ranked 384 out of 1400 QS, Ranked 8 out of 15
                            Outlook, Ranked 1106 out of 2000 US News, Ranked 937
                            out of 2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/1545048818cover.png?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/1545048818cover.png?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="Lexicon MILE - Management Institute of Leadership and Excellence"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Lexicon MILE - Management Institute of Leadership and Excellence"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="college/45303-lexicon-mile-management-institute-of-leadership-and-excellence-pune"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/college/45303-lexicon-mile-management-institute-of-leadership-and-excellence-pune"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/16160615421.jpg?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/16160615421.jpg?h=40&w=40&mode=stretch"
                          alt="Lexicon MILE - Management Institute of Leadership and Excellence"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            Lexicon MILE - Management Institute of Leadership
                            and Excellence
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Pune, Maharashtra | AICTE
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="MBA/PGDM"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="MBA/PGDM"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/post-graduate-programme-in-management-pgpm-1861"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/post-graduate-programme-in-management-pgpm-1861"
                          >
                            MBA/PGDM
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            8.90 Lacs
                          </span>
                          &nbsp;Total Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.3/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          54 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 1 out of 50 Financial ,Ranked 11 out of 312
                            NIRF Innovation, Ranked 1001 out of 1799 THE, Ranked
                            384 out of 1400 QS, Ranked 8 out of 15 Outlook,
                            Ranked 1106 out of 2000 US News, Ranked 937 out of
                            2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/1606993784WorldClassCampusI.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/1606993784WorldClassCampusI.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="KIIT School of Management - [KSOM]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="KIIT School of Management - [KSOM]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="college/18279-kiit-school-of-management-ksom-bhubaneswar"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/college/18279-kiit-school-of-management-ksom-bhubaneswar"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1620052681Untitled.png?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1620052681Untitled.png?h=40&w=40&mode=stretch"
                          alt="KIIT School of Management - [KSOM]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            KIIT School of Management - [KSOM]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Bhubaneswar, Orissa | AICTE, NBA
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="BBA/BBM"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="BBA/BBM"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="college/18279-kiit-school-of-management-ksom-bhubaneswar/courses-fees?course_id=1209"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/college/18279-kiit-school-of-management-ksom-bhubaneswar/courses-fees?course_id=1209"
                          >
                            BBA/BBM
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            2.80 Lacs
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.5/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          73 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 15 out of 120 Indiatoday, Ranked 2 out of 101
                            TOI,Ranked 11 out of 312 NIRF Innovation, Ranked
                            1001 out of 1799 THE, Ranked 384 out of 1400 QS,
                            Ranked 8 out of 15 Outlook, Ranked 1106 out of 2000
                            US News, Ranked 937 out of 2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="Parul University"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Parul University"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/55884-parul-university-vadodara"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/55884-parul-university-vadodara"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1680516760Screenshot20230403154227.png?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1680516760Screenshot20230403154227.png?h=40&w=40&mode=stretch"
                          alt="Parul University"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            Parul University
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Vadodara, Gujarat | AICTE, COA
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="B.Sc"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="B.Sc"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/55884-parul-university-vadodara/courses-fees?slug=bachelor-of-science-bsc&course_type=Full-Time"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/55884-parul-university-vadodara/courses-fees?slug=bachelor-of-science-bsc&course_type=Full-Time"
                          >
                            B.Sc
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            1.02 Lacs
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.1/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          711 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 44 out of 146 Indiatoday, Ranked 40 out of
                            110 Outlook, Ranked 62 out of 101 TOI, Ranked 151
                            out of 200 NIRF, Ranked 80 out of 171 IIRF, Ranked
                            11 out of 312 NIRF Innovation
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/25787_LPU_APP.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/25787_LPU_APP.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="Lovely Professional University - [LPU]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Lovely Professional University - [LPU]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/25787-lovely-professional-university-lpu-jalandhar"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/25787-lovely-professional-university-lpu-jalandhar"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/15577242161545129260LPUseal.jpg?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/15577242161545129260LPUseal.jpg?h=40&w=40&mode=stretch"
                          alt="Lovely Professional University - [LPU]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            Lovely Professional University - [LPU]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Jalandhar, Punjab | NCTE, COA
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="BE/B.Tech"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="BE/B.Tech"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/25787-lovely-professional-university-lpu-jalandhar/courses-fees?slug=bachelor-of-technology-btech&course_type=Full-Time"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/25787-lovely-professional-university-lpu-jalandhar/courses-fees?slug=bachelor-of-technology-btech&course_type=Full-Time"
                          >
                            BE/B.Tech
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            2.40 Lacs
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.2/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          2719 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 1 out of 50 Financial Express,Ranked 11 out
                            of 312 NIRF Innovation, Ranked 1001 out of 1799 THE,
                            Ranked 384 out of 1400 QS, Ranked 8 out of 15
                            Outlook, Ranked 1106 out of 2000 US News, Ranked 937
                            out of 2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/157770431331.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/157770431331.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="ASBM University"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="ASBM University"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/17255-asbm-university-bhubaneswar"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/17255-asbm-university-bhubaneswar"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1580533630image001.jpg?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1580533630image001.jpg?h=40&w=40&mode=stretch"
                          alt="ASBM University"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            ASBM University
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Bhubaneswar, Orissa | AICTE, UGC
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="BBA/BBM"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="BBA/BBM"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/17255-asbm-university-bhubaneswar/courses-fees?slug=bachelor-of-business-administration-bba-hons&course_type=Full-Time"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/17255-asbm-university-bhubaneswar/courses-fees?slug=bachelor-of-business-administration-bba-hons&course_type=Full-Time"
                          >
                            BBA/BBM
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            66.75 K
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.1/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          26 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 1 out of 50 Financial Express,Ranked 11 out
                            of 312 NIRF Innovation, Ranked 1001 out of 1799 THE,
                            Ranked 384 out of 1400 QS, Ranked 8 out of 15
                            Outlook, Ranked 1106 out of 2000 US News, Ranked 937
                            out of 2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <br />

        <ul className="cards7">
          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/1620192479desk.png?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/1620192479desk.png?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="IIT Guwahati - Indian Institute of Technology - [IITG]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="IIT Guwahati - Indian Institute of Technology - [IITG]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/25396-iit-guwahati-indian-institute-of-technology-iitg-guwahati"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/25396-iit-guwahati-indian-institute-of-technology-iitg-guwahati"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian Institute of Technology - IIT Guwahati.png?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1394864902Indian Institute of Technology - IIT Guwahati.png?h=40&w=40&mode=stretch"
                          alt="IIT Guwahati - Indian Institute of Technology - [IITG]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            IIT Guwahati - Indian Institute of Technology -
                            [IITG]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Guwahati, Assam | AICTE, UGC
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="BE/B.Tech"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="BE/B.Tech"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/25396-iit-guwahati-indian-institute-of-technology-iitg-guwahati/courses-fees?slug=bachelor-of-technology-btech&course_type=Full-Time"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/25396-iit-guwahati-indian-institute-of-technology-iitg-guwahati/courses-fees?slug=bachelor-of-technology-btech&course_type=Full-Time"
                          >
                            BE/B.Tech
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            2.57 Lacs
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.7/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          208 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 7 out of 34 The Week, Ranked 9 out of 200
                            NIRF, Ranked 11 out of 312 NIRF Innovation, Ranked
                            1001 out of 1799 THE, Ranked 384 out of 1400 QS,
                            Ranked 8 out of 15 Outlook, Ranked 1106 out of 2000
                            US News, Ranked 937 out of 2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/1507714139ccccccccccccccccccccccccccccccc.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/1507714139ccccccccccccccccccccccccccccccc.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="All India Institute of Medical Sciences - [AIIMS]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="All India Institute of Medical Sciences - [AIIMS]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/25446-all-india-institute-of-medical-sciences-aiims-new-delhi"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/25446-all-india-institute-of-medical-sciences-aiims-new-delhi"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=40&w=40&mode=stretch"
                          alt="All India Institute of Medical Sciences - [AIIMS]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            All India Institute of Medical Sciences - [AIIMS] -
                            [IITM]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            New Delhi, Delhi NCR | MCI, UGC
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="M.Sc (Medicine)"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="M.Sc (Medicine)"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/25446-all-india-institute-of-medical-sciences-aiims-new-delhi/courses-fees?slug=master-of-science-msc&course_type=Full-Time"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/25446-all-india-institute-of-medical-sciences-aiims-new-delhi/courses-fees?slug=master-of-science-msc&course_type=Full-Time"
                          >
                            M.Sc (Medicine)
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            1.47 K
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.4/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          144 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 6 out of 200 NIRF, Ranked 826 out of 2000 US
                            News, Ranked 899 out of 2000 CWUR, Ranked 11 out of
                            1000 ARWU
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/25494_IIMA_AppImage.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/25494_IIMA_AppImage.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="Indian Institute of Management - [IIMA]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Indian Institute of Management - [IIMA]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/25494-indian-institute-of-management-iima-ahmedabad"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/25494-indian-institute-of-management-iima-ahmedabad"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1527235209article.png?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1527235209article.png?h=40&w=40&mode=stretch"
                          alt="Indian Institute of Management - [IIMA]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            Indian Institute of Management - [IIMA]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Ahmedabad, Gujarat | UGC
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="MBA/PGDM"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="MBA/PGDM"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/25494-indian-institute-of-management-iima-ahmedabad/post-graduate-programme-in-management-pgpm-1861"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/25494-indian-institute-of-management-iima-ahmedabad/post-graduate-programme-in-management-pgpm-1861"
                          >
                            MBA/PGDM
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            24.61 Lacs
                          </span>
                          &nbsp;Total Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          9.1/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          51 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 2 out of 50 Financial Express, Ranked 421 out
                            of 2000 CWUR Ranked 8 out of 15 Outlook, Ranked 1106
                            out of 2000 US News, Ranked 937 out of 2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/10842_MEDICAL_NEW.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/10842_MEDICAL_NEW.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="Post Graduate Institute of Medical Education & Research - [PGIMER]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Post Graduate Institute of Medical Education & Research - [PGIMER]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/10842-post-graduate-institute-of-medical-education-and-research-pgimer-chandigarh"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/10842-post-graduate-institute-of-medical-education-and-research-pgimer-chandigarh"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1430545237PGIMER Chandigarh.jpeg?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1430545237PGIMER Chandigarh.jpeg?h=40&w=40&mode=stretch"
                          alt="Post Graduate Institute of Medical Education & Research - [PGIMER]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            Post Graduate Institute of Medical Education &amp;
                            Research - [PGIMER]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Chandigarh, Chandigarh | INC, MCI
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="M.Sc (Medicine)"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="M.Sc (Medicine)"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/10842-post-graduate-institute-of-medical-education-and-research-pgimer-chandigarh/courses-fees?slug=master-of-science-msc&course_type=Full-Time"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/10842-post-graduate-institute-of-medical-education-and-research-pgimer-chandigarh/courses-fees?slug=master-of-science-msc&course_type=Full-Time"
                          >
                            M.Sc (Medicine)
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            6.44 K
                          </span>
                          &nbsp;Total Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          7.9/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          26 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 1060 out of 2000 US News, Ranked 1092 out of
                            2000 CWUR, Ranked 1001 out of 1799 THE, Ranked 384
                            out of 1400 QS, Ranked 8 out of 15 Outlook, Ranked
                            1106 out of 2000 US News, Ranked 937 out of 2000
                            CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/1606993784WorldClassCampusI.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/1606993784WorldClassCampusI.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="KIIT School of Management - [KSOM]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="KIIT School of Management - [KSOM]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="college/18279-kiit-school-of-management-ksom-bhubaneswar"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/college/18279-kiit-school-of-management-ksom-bhubaneswar"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1620052681Untitled.png?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1620052681Untitled.png?h=40&w=40&mode=stretch"
                          alt="KIIT School of Management - [KSOM]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            KIIT School of Management - [KSOM]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Bhubaneswar, Orissa | AICTE, NBA
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="BBA/BBM"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="BBA/BBM"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="college/18279-kiit-school-of-management-ksom-bhubaneswar/courses-fees?course_id=1209"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/college/18279-kiit-school-of-management-ksom-bhubaneswar/courses-fees?course_id=1209"
                          >
                            BBA/BBM
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            2.80 Lacs
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.5/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          73 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 15 out of 120 Indiatoday, Ranked 2 out of 101
                            TOI,Ranked 11 out of 312 NIRF Innovation, Ranked
                            1001 out of 1799 THE, Ranked 384 out of 1400 QS,
                            Ranked 8 out of 15 Outlook, Ranked 1106 out of 2000
                            US News, Ranked 937 out of 2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/1491901587cvr.png?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/1491901587cvr.png?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img ls-is-cached lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="Indian Agricultural Research Institute - [IARI]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Indian Agricultural Research Institute - [IARI]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/25452-indian-agricultural-research-institute-iari-new-delhi"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/25452-indian-agricultural-research-institute-iari-new-delhi"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1491901587logo.png?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1491901587logo.png?h=40&w=40&mode=stretch"
                          alt="Indian Agricultural Research Institute - [IARI]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo ls-is-cached lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            Indian Agricultural Research Institute - [IARI]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            New Delhi, Delhi NCR | ICAR, UGC
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="M.Sc (Agriculture)"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="M.Sc (Agriculture)"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/25452-indian-agricultural-research-institute-iari-new-delhi/courses-fees?slug=master-of-science-msc&course_type=Full-Time"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/25452-indian-agricultural-research-institute-iari-new-delhi/courses-fees?slug=master-of-science-msc&course_type=Full-Time"
                          >
                            M.Sc (Agriculture)
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            43.15 K
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.8/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          15 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 1166 out of 2000 CWURk, Ranked 62 out of 101
                            TOI, Ranked 151 out of 200 NIRF, Ranked 80 out of
                            171 IIRF, Ranked 11 out of 312 NIRF Innovation
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/1485941210cvr1.png?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/1485941210cvr1.png?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="IIT Hyderabad - Indian Institute of Technology - [IITH]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="IIT Hyderabad - Indian Institute of Technology - [IITH]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="university/25356-iit-hyderabad-indian-institute-of-technology-iith-hyderabad"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/university/25356-iit-hyderabad-indian-institute-of-technology-iith-hyderabad"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/166089612015088476701200pxIndianInstituteofTechnologyHyderabadlogo.png?h=40&w=40&mode=stretch"
                          alt="IIT Hyderabad - Indian Institute of Technology - [IITH]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            IIT Hyderabad - Indian Institute of Technology -
                            [IITH]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            Hyderabad, Telangana | UGC
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="BE/B.Tech"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="BE/B.Tech"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="university/25356-iit-hyderabad-indian-institute-of-technology-iith-hyderabad/courses-fees?slug=bachelor-of-technology-btech&course_type=Full-Time"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/university/25356-iit-hyderabad-indian-institute-of-technology-iith-hyderabad/courses-fees?slug=bachelor-of-technology-btech&course_type=Full-Time"
                          >
                            BE/B.Tech
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            2.23 Lacs
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.6/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          90 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 14 out of 200 NIRF, Ranked 3 out of 312 NIRF
                            Innovation, Ranked 581 out of 1400 QS, Ranked 9 out
                            of 15 Outlook, Ranked 875 out of 2000 US News,
                            Ranked 1441 out of 2000 CWUR, Ranked 601 out of 1001
                            THE
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="card7">
            <div>
              <div className="jsx-485886256 ">
                <div className="jsx-485886256 snap-card h-100 d-flex flex-column">
                  <div className="jsx-485886256  snap-card-img-wrapper position-relative">
                    <img
                      data-src="https://images.collegedunia.com/public/college_data/images/appImage/14918218951444135101LSRCNEW.jpg?h=145&w=342&mode=stretch"
                      src="https://images.collegedunia.com/public/college_data/images/appImage/14918218951444135101LSRCNEW.jpg?h=145&w=342&mode=stretch"
                      alt=""
                      height="145px"
                      className="jsx-2283203247 snap-card-img lazyloaded"
                    />
                    <a
                      data-csm-track="true"
                      data-csm-title="Lady Shri Ram College for Women - [LSR]"
                      data-event-type="link_click"
                      data-section_name="Top Universities/Colleges"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="Lady Shri Ram College for Women - [LSR]"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Universities/Colleges"
                      data-ga-href="college/2525-lady-shri-ram-college-for-women-lsr-new-delhi"
                      className="jsx-485886256 snap-card-img-overlay d-flex flex-column"
                      href="/college/2525-lady-shri-ram-college-for-women-lsr-new-delhi"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="jsx-485886256 mb-auto snap-card-media">
                        <img
                          data-src="https://images.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=40&w=40&mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/1559556886lsrlogo9.jpg?h=40&w=40&mode=stretch"
                          alt="Lady Shri Ram College for Women - [LSR]"
                          height="40px"
                          className="jsx-2384918447 d-block object-fit-contain bg-white snap-card-logo lazyloaded"
                        />
                        <div className="jsx-485886256 snap-card-media-body">
                          <p className="jsx-485886256 snap-card-img-title line-clamp-2 font-weight-lg-bold font-weight-medium">
                            Lady Shri Ram College for Women - [LSR]
                          </p>
                          <p className="jsx-485886256 snap-card-img-line mb-0 d-flex align-items-center">
                            New Delhi, Delhi NCR | UGC
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="jsx-485886256 snap-card-body">
                    <div className="jsx-485886256 d-flex justify-content-between mb-lg-12">
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-1">
                          <a
                            data-csm-track="true"
                            data-csm-title="BA"
                            data-event-type="link_click"
                            data-section_name="Top Universities/Colleges"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="BA"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Universities/Colleges"
                            data-ga-href="college/2525-lady-shri-ram-college-for-women-lsr-new-delhi/courses-fees?slug=bachelor-of-arts-ba-hons&course_type=Full-Time"
                            className="jsx-485886256 snap-card-body-link color-base hover-color-primary"
                            href="/college/2525-lady-shri-ram-college-for-women-lsr-new-delhi/courses-fees?slug=bachelor-of-arts-ba-hons&course_type=Full-Time"
                          >
                            BA
                          </a>
                        </p>
                        <p className="jsx-485886256 snap-card-body-line color-gray-600 mb-0">
                          <span className="jsx-485886256 color-blue-light font-weight-bold">
                            19.17 K
                          </span>
                          &nbsp;First Year Fees
                        </p>
                      </div>
                      <div className="jsx-485886256">
                        <p className="jsx-485886256 snap-card-body-title mb-0 d-flex align-items-center justify-content-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.384"
                            height="81.954"
                            viewBox="6.92 9.412 85.384 81.954"
                            xmlSpace="preserve"
                            className="mr-1"
                            style={{
                              width: 15,
                              height: 15,
                              fill: "rgb(248, 193, 0)",
                            }}
                          >
                            <path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z" />
                          </svg>{" "}
                          8.5/10
                        </p>
                        <p className="jsx-485886256 text-right snap-card-body-line color-gray-600 mb-0 mt-1 text-nowrap">
                          107 reviews
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="jsx-485886256 snap-card-body snap-card-body-sm mt-auto">
                    <ul className="jsx-485886256 list-unstyled select-box-list mb-0 border-top">
                      <li className="jsx-485886256 mb-1">
                        <div className="jsx-485886256 snap-card-overflow">
                          <span className="jsx-485886256 select-box-list-link text-nowrap">
                            Ranked 9 out of 200 NIRF, Ranked 1001 out of 1799
                            THE, Ranked 384 out of 1400 QS, Ranked 8 out of 15
                            Outlook, Ranked 1106 out of 2000 US News, Ranked 937
                            out of 2000 CWUR
                          </span>
                        </div>
                      </li>
                      <li className="jsx-485886256">
                        <a
                          data-csm-track="true"
                          data-csm-title="View All Courses and Fees"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="View All Courses and fees"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          data-ga-href="university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                          className="jsx-485886256 collage-card-btn text-truncate color-base font-weight-semi hover-color-primary"
                          href="/university/25602-iim-bangalore-indian-institute-of-management-bangalore/courses-fees"
                        >
                          View All Courses and fees{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </a>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="Download Brochure"
                          data-event-type="link_click"
                          data-section_name="Top Universities/Colleges"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Download Brochure"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Download Brochure{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                      <li className="jsx-485886256">
                        <button
                          type="button"
                          data-csm-track="true"
                          data-csm-title="25602-IIM Bangalore - Indian Institute of Management"
                          data-event-type="cc_popup_open"
                          data-csm-href="https://collegedunia.com/"
                          data-ga-title="Compare"
                          data-ga-track="true"
                          data-ga-module="homepage"
                          data-ga-section="Top Universities/Colleges"
                          className="jsx-485886256 collage-card-btn color-base w-100 border-0 bg-transparent font-weight-semi hover-color-primary"
                        >
                          Compare{" "}
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            xmlSpace="preserve"
                            style={{ width: 10, height: 10 }}
                          >
                            <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <br />

      {/* Know your chances of Addmission*/}
      <section className="section-control-inner001">
        <div className="content">
          <h3
            className="mb-0 heading font-weight-bold"
            style={{ color: "rgb(90,106,159)" }}
          >
            Know your chances of Admission
          </h3>
          <a
            data-ga-title="Start Now"
            data-ga-track="true"
            data-ga-module="homepage"
            data-ga-section="Know your chances of Admission"
            className="jsx-249750319 cta font-weight-bold"
            href="/login"
            style={{ marginLeft: "421px", marginTop: "-15px" }}
          >
            Start Now
          </a>
        </div>
        <div className="image-container">
          <img className="image" src={smb} alt="smb1" />
        </div>
      </section>
      <br />

      {/* Top Study Places */}
      <div className="container">
        <h2 className="text">Top Study Places</h2>
        <ul className="cards4">
          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/New Delhi.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Delhi{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Bangalore.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Bangalore{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Hyderabad.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Hyderabad{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Pune.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Pune{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Mumbai.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Mumbai{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Chennai.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Chennai{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Kolkata.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Kolkata{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Bhopal.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Bhopal{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Indore.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Indore{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>

          <li className="card4 card4size">
            <div className="card4-image-wrapper">
              <img
                src="https://images.collegedunia.com/public/asset/icons/city-state-icons/Nagpur.svg?mode=stretch"
                alt=" "
                className="card4-image"
              />
              <p className="fw-normal mb-1" style={{ color: "red" }}>
                Nagpur{" "}
              </p>
            </div>
            <div className="card4-link-wrapper"></div>
          </li>
        </ul>
      </div>
      <br />

      {/* Subscribe for regular alerts */}
      <section className="section-control-inner002">
        <div className="content">
          <h3
            className="mb-0 heading font-weight-bold"
            style={{ color: "rgb(90,106,159)" }}
          >
            Subscribe for regular Alert
          </h3>
          <a
            data-ga-title="Start Now"
            data-ga-track="true"
            data-ga-module="homepage"
            data-ga-section="Subscribe for regular Alert"
            className="jsx-249750319 cta font-weight-bold"
            href="/login"
            style={{ marginLeft: "421px", marginTop: "-15px" }}
          >
            Start Now
          </a>
        </div>
        <div className="image-container">
          <img className="image" src={smb1} alt="smb1" />
        </div>
      </section>
      <br />
      {/* Explore Courses */}
      <section className="jsx-3399163233 jsx-4093795240 section-control mb-0 bg-white ">
        <div
          className="jsx-3399163233 jsx-4093795240 container"
          style={{ textAlign: "left" }}
        >
          <h2 className="jsx-3399163233 jsx-4093795240 heading1">
            Explore Courses
          </h2>
          <br />
          <div
            className="slick-slider carousel-control fluid-height-carousel slick-initialized"
            dir="ltr"
          >
            <div className="button1-row">
              <a
                className="button1" href="/"
                style={{ backgroundColor: "#007BFF", color: "white", textDecoration: 'none' }}
              >
                Bachelors
              </a>
              <a
                className="button1" href="/"
                style={{ backgroundColor: "#007BFF", color: "white", textDecoration: 'none' }}
              >
                Masters
              </a>
              <a
                className="button1" href="/"
                style={{ backgroundColor: "#007BFF", color: "white", textDecoration: 'none' }}
              >
                Doctorate
              </a>
              <a
                className="button1" href="/"
                style={{ backgroundColor: "#007BFF", color: "white", textDecoration: 'none' }}
              >
                Diploma
              </a>
              <a
                className="button1" href="/"
                style={{ backgroundColor: "#007BFF", color: "white", textDecoration: 'none' }}
              >
                Certification
              </a>
            </div>
            <br />

            <ul className="cards8">
              <div className="card" style={{ width: "18rem" }}>
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <p className="card-text" style={{ textAlign: "center" }}>
                    FULL TIME
                  </p>
                  <h5
                    className="card-title"
                    style={{ fontWeight: "bold", marginLeft: "-50px" }}
                  >
                    B.COM GENERAL
                  </h5>
                </div>
                <ul
                  className="list-group list-group-flush"
                  style={{ listStyle: "none" }}
                >
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    Duration: 3 Years
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    Total Avg.fees: 62.07k
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    college: 6491
                  </li>
                </ul>
                <div className="card-body">
                  <a
                    href="#"
                    className="card-link"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="box"
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        backgroundColor: "#007BFF",
                        color: "white",
                      }}
                    >
                      Course Overview
                    </div>
                  </a>
                </div>
              </div>

              <div className="card" style={{ width: "18rem" }}>
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <p className="card-text" style={{ textAlign: "center" }}>
                    FULL TIME
                  </p>
                  <h5
                    className="card-title"
                    style={{ fontWeight: "bold", marginLeft: "-50px" }}
                  >
                    B.Ed GENERAL
                  </h5>
                </div>
                <ul
                  className="list-group list-group-flush"
                  style={{ listStyle: "none" }}
                >
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    Duration: 2 Years
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    Total Avg.fees: 81.79k
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    college: 5436
                  </li>
                </ul>
                <div className="card-body">
                  <a
                    href="#"
                    className="card-link"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="box"
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        backgroundColor: "#007BFF",
                        color: "white",
                      }}
                    >
                      Course Overview
                    </div>
                  </a>
                </div>
              </div>

              <div className="card" style={{ width: "18rem" }}>
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <p className="card-text" style={{ textAlign: "center" }}>
                    FULL TIME
                  </p>
                  <h5
                    className="card-title"
                    style={{ fontWeight: "bold", marginLeft: "-50px" }}
                  >
                    BCA GENERAL
                  </h5>
                </div>
                <ul
                  className="list-group list-group-flush"
                  style={{ listStyle: "none" }}
                >
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    Duration: 3 Years
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    Total Avg.fees: 1.34L
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    college: 4901
                  </li>
                </ul>
                <div className="card-body">
                  <a
                    href="#"
                    className="card-link"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="box"
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        backgroundColor: "#007BFF",
                        color: "white",
                      }}
                    >
                      Course Overview
                    </div>
                  </a>
                </div>
              </div>

              <div className="card" style={{ width: "18rem" }}>
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <p className="card-text" style={{ textAlign: "center" }}>
                    FULL TIME
                  </p>
                  <h5
                    className="card-title"
                    style={{ fontWeight: "bold", marginLeft: "-50px" }}
                  >
                    B.A GENERAL
                  </h5>
                </div>
                <ul
                  className="list-group list-group-flush"
                  style={{ listStyle: "none" }}
                >
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    Duration: 3 Years
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    Total Avg.fees: 41.59k
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    college: 3894
                  </li>
                </ul>
                <div className="card-body">
                  <a
                    href="#"
                    className="card-link"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="box"
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        backgroundColor: "#007BFF",
                        color: "white",
                      }}
                    >
                      Course Overview
                    </div>
                  </a>
                </div>
              </div>

              <div className="card" style={{ width: "18rem" }}>
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <p className="card-text" style={{ textAlign: "center" }}>
                    FULL TIME
                  </p>
                  <h5
                    className="card-title"
                    style={{ fontWeight: "bold", marginLeft: "-50px" }}
                  >
                    B.TECH [ME]
                  </h5>
                </div>
                <ul
                  className="list-group list-group-flush"
                  style={{ listStyle: "none" }}
                >
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    Duration: 4 Years
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    Total Avg.fees: 3.50L
                  </li>
                  <li
                    className="list-group-item"
                    style={{ fontWeight: "bold" }}
                  >
                    college: 3522
                  </li>
                </ul>
                <div className="card-body">
                  <a
                    href="#"
                    className="card-link"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="box"
                      style={{
                        border: "1px solid black",
                        padding: "5px",
                        backgroundColor: "#007BFF",
                        color: "white",
                      }}
                    >
                      Course Overview
                    </div>
                  </a>
                </div>
              </div>
              {/* Other card items */}
            </ul>
          </div>
        </div>
      </section>
      <br />

      {/* Search from 30k course finder poster */}
      <div
        className="course-finder-banner pointer py-9"
        style={{ textAlign: "center" }}
      >
        <a
          data-ga-title="Course Finder Banner"
          data-ga-track="true"
          data-ga-module="homepage"
          data-ga-section="Finder banner"
          data-ga-href="/course-finder"
          href="/course-finder"
        >
          <img
            data-src="https://images.collegedunia.com/public/asset/img/ap-banner/desktop-homepage-course-banner.png?h=118&w=1130&mode=stretch"
            src="https://images.collegedunia.com/public/asset/img/ap-banner/desktop-homepage-course-banner.png?h=118&w=1130&mode=stretch"
            alt="Course Finder"
            height="118px"
            className="jsx-538463183  ls-is-cached lazyloaded"
          />
        </a>
      </div>
      <br />

      {/*Top Exams */}
      <div className="container1">
        <h2 className="text">Top Exams</h2>
        <br />
        <div
          className="jsx-3399163233 jsx-600450678 container1"
          style={{ overflowX: "auto" }}
        >
          <div
            className="slick-slider carousel-control fluid-height-carousel slick-initialized"
            dir="ltr"
          >
            <ul className="cards12">
              <div
                data-index={0}
                className="slick-slide slick-active slick-current"
                tabIndex={-1}
                aria-hidden="false"
                style={{ outline: "none", width: 296 }}
              >
                <div>
                  <div className="jsx-600450678 ">
                    <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                      <a
                        data-csm-track="true"
                        data-csm-title="NEET"
                        data-event-type="link_click"
                        data-section_name="Top Exams"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="NEET"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Exams"
                        data-ga-href="exams/neet"
                        className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                        href="/exams/neet"
                      >
                        <div className="jsx-600450678 exam-img mr-3">
                          <img
                            data-src="https://images.collegedunia.com/public/college_data/images/logos/NTA- Logo.png?h=44&w=44&mode=stretch"
                            src="https://images.collegedunia.com/public/college_data/images/logos/NTA- Logo.png?h=44&w=44&mode=stretch"
                            alt=""
                            height="44px"
                            className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                          />
                        </div>
                        <div className="jsx-600450678">
                          <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                            Offline Exam
                          </div>
                          <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                            NEET
                          </h3>
                        </div>
                      </a>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Participating Colleges
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            819
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col pr-1">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Date
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right pl-1">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            {" "}
                            May 04, 2024
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Level
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            national
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 fluid-height-footer-divider double" />
                      <div className="jsx-600450678 fluid-height-footer double">
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Application Process"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Application Process"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/neet/application-process"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/neet/application-process"
                          >
                            Application Process
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Exam Info"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Exam Info"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/neet"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/neet"
                          >
                            Exam Info
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-index={1}
                className="slick-slide slick-active"
                tabIndex={-1}
                aria-hidden="false"
                style={{ outline: "none", width: 296 }}
              >
                <div>
                  <div className="jsx-600450678 ">
                    <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                      <a
                        data-csm-track="true"
                        data-csm-title="JEE Main"
                        data-event-type="link_click"
                        data-section_name="Top Exams"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="JEE Main"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Exams"
                        data-ga-href="exams/jee-main"
                        className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                        href="/exams/jee-main"
                      >
                        <div className="jsx-600450678 exam-img mr-3">
                          <img
                            data-src="https://images.collegedunia.com/public/college_data/images/logos/2019-01-09.png?h=44&w=44&mode=stretch"
                            src="https://images.collegedunia.com/public/college_data/images/logos/2019-01-09.png?h=44&w=44&mode=stretch"
                            alt=""
                            height="44px"
                            className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                          />
                        </div>
                        <div className="jsx-600450678">
                          <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                            Online Exam
                          </div>
                          <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                            JEE Main
                          </h3>
                        </div>
                      </a>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Participating Colleges
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            1683
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col pr-1">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Date
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right pl-1">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            {" "}
                            January 23, 2024
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Level
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            national
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 fluid-height-footer-divider double" />
                      <div className="jsx-600450678 fluid-height-footer double">
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Application Process"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Application Process"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/jee-main/application-process"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/jee-main/application-process"
                          >
                            Application Process
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Exam Info"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Exam Info"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/jee-main"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/jee-main"
                          >
                            Exam Info
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-index={2}
                className="slick-slide slick-active"
                tabIndex={-1}
                aria-hidden="false"
                style={{ outline: "none", width: 296 }}
              >
                <div>
                  <div className="jsx-600450678 ">
                    <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                      <a
                        data-csm-track="true"
                        data-csm-title="CAT"
                        data-event-type="link_click"
                        data-section_name="Top Exams"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="CAT"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Exams"
                        data-ga-href="exams/cat"
                        className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                        href="/exams/cat"
                      >
                        <div className="jsx-600450678 exam-img mr-3">
                          <img
                            data-src="https://images.collegedunia.com/public/college_data/images/logos/CAT logo.jpg?h=44&w=44&mode=stretch"
                            src="https://images.collegedunia.com/public/college_data/images/logos/CAT logo.jpg?h=44&w=44&mode=stretch"
                            alt=""
                            height="44px"
                            className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                          />
                        </div>
                        <div className="jsx-600450678">
                          <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                            Online Exam
                          </div>
                          <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                            CAT
                          </h3>
                        </div>
                      </a>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Participating Colleges
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            1434
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col pr-1">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Date
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right pl-1">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            {" "}
                            November 25, 2023
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Level
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            national
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 fluid-height-footer-divider double" />
                      <div className="jsx-600450678 fluid-height-footer double">
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Application Process"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Application Process"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/cat/application-process"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/cat/application-process"
                          >
                            Application Process
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Exam Info"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Exam Info"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/cat"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/cat"
                          >
                            Exam Info
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-index={3}
                className="slick-slide slick-active"
                tabIndex={-1}
                aria-hidden="false"
                style={{ outline: "none", width: 296 }}
              >
                <div>
                  <div className="jsx-600450678 ">
                    <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                      <a
                        data-csm-track="true"
                        data-csm-title="JEE Advanced"
                        data-event-type="link_click"
                        data-section_name="Top Exams"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="JEE Advanced"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Exams"
                        data-ga-href="exams/jee-advanced"
                        className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                        href="/exams/jee-advanced"
                      >
                        <div className="jsx-600450678 exam-img mr-3">
                          <img
                            data-src="https://images.collegedunia.com/public/college_data/images/logos/gatellogo.png?h=44&w=44&mode=stretch"
                            src="https://images.collegedunia.com/public/college_data/images/logos/gatellogo.png?h=44&w=44&mode=stretch"
                            alt=""
                            height="44px"
                            className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                          />
                        </div>
                        <div className="jsx-600450678">
                          <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                            Online Exam
                          </div>
                          <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                            JEE-Ad
                          </h3>
                        </div>
                      </a>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Participating Colleges
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            45
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col pr-1">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Date
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right pl-1">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            {" "}
                            June 03, 2023
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Level
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            national
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 fluid-height-footer-divider double" />
                      <div className="jsx-600450678 fluid-height-footer double">
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Application Process"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Application Process"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/jee-advanced/application-process"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/jee-advanced/application-process"
                          >
                            Application Process
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Exam Info"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Exam Info"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/jee-advanced"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/jee-advanced"
                          >
                            Exam Info
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-index={4}
                className="slick-slide"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: 296 }}
              >
                <div>
                  <div className="jsx-600450678 ">
                    <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                      <a
                        data-csm-track="true"
                        data-csm-title="GATE"
                        data-event-type="link_click"
                        data-section_name="Top Exams"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="GATE"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Exams"
                        data-ga-href="exams/gate"
                        className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                        href="/exams/gate"
                      >
                        <div className="jsx-600450678 exam-img mr-3">
                          <img
                            data-src="https://images.collegedunia.com/public/college_data/images/logos/iit kanpur logo.jpg?h=44&w=44&mode=stretch"
                            src="https://images.collegedunia.com/public/college_data/images/logos/iit kanpur logo.jpg?h=44&w=44&mode=stretch"
                            alt=""
                            height="44px"
                            className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                          />
                        </div>
                        <div className="jsx-600450678">
                          <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                            Online Exam
                          </div>
                          <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                            GATE
                          </h3>
                        </div>
                      </a>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Participating Colleges
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            1364
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col pr-1">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Date
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right pl-1">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            {" "}
                            January 02, 2024
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Level
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            national
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 fluid-height-footer-divider double" />
                      <div className="jsx-600450678 fluid-height-footer double">
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Application Process"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Application Process"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/gate/application-process"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/gate/application-process"
                          >
                            Application Process
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Exam Info"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Exam Info"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/gate"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/gate"
                          >
                            Exam Info
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-index={5}
                className="slick-slide"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: 296 }}
              >
                <div>
                  <div className="jsx-600450678 ">
                    <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                      <a
                        data-csm-track="true"
                        data-csm-title="NMAT"
                        data-event-type="link_click"
                        data-section_name="Top Exams"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="NMAT"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Exams"
                        data-ga-href="exams/nmat"
                        className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                        href="/exams/nmat"
                      >
                        <div className="jsx-600450678 exam-img mr-3">
                          <img
                            data-src="https://images.collegedunia.com/public/college_data/images/logos/Capture.JPG?h=44&w=44&mode=stretch"
                            src="https://images.collegedunia.com/public/college_data/images/logos/Capture.JPG?h=44&w=44&mode=stretch"
                            alt=""
                            height="44px"
                            className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                          />
                        </div>
                        <div className="jsx-600450678">
                          <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                            Online Exam
                          </div>
                          <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                            NMAT
                          </h3>
                        </div>
                      </a>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Participating Colleges
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            117
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col pr-1">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Date
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right pl-1">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            {" "}
                            November 30, 2023
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Level
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            national
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 fluid-height-footer-divider double" />
                      <div className="jsx-600450678 fluid-height-footer double">
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Application Process"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Application Process"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/nmat/application-process"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/nmat/application-process"
                          >
                            Application Process
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Exam Info"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Exam Info"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/nmat"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/nmat"
                          >
                            Exam Info
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-index={6}
                className="slick-slide"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: 296 }}
              >
                <div>
                  <div className="jsx-600450678 ">
                    <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                      <a
                        data-csm-track="true"
                        data-csm-title="MAT"
                        data-event-type="link_click"
                        data-section_name="Top Exams"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="MAT"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Exams"
                        data-ga-href="exams/mat"
                        className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                        href="/exams/mat"
                      >
                        <div className="jsx-600450678 exam-img mr-3">
                          <img
                            data-src="https://images.collegedunia.com/public/college_data/images/logos/MAT Exam Logo.jpg?h=44&w=44&mode=stretch"
                            src="https://images.collegedunia.com/public/college_data/images/logos/MAT Exam Logo.jpg?h=44&w=44&mode=stretch"
                            alt=""
                            height="44px"
                            className="jsx-2173310127 rounded-circle ls-is-cached lazyloaded"
                          />
                        </div>
                        <div className="jsx-600450678">
                          <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                            Online + Offline Exam
                          </div>
                          <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                            MAT
                          </h3>
                        </div>
                      </a>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Participating Colleges
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            1298
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col pr-1">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Date
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right pl-1">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            {" "}
                            September 02, 2023
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Level
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            national
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 fluid-height-footer-divider double" />
                      <div className="jsx-600450678 fluid-height-footer double">
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Application Process"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Application Process"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/mat/application-process"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/mat/application-process"
                          >
                            Application Process
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Exam Info"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Exam Info"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/mat"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/mat"
                          >
                            Exam Info
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-index={7}
                className="slick-slide"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: 296 }}
              >
                <div>
                  <div className="jsx-600450678 ">
                    <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                      <a
                        data-csm-track="true"
                        data-csm-title="XAT"
                        data-event-type="link_click"
                        data-section_name="Top Exams"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="XAT"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Exams"
                        data-ga-href="exams/xat"
                        className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                        href="/exams/xat"
                      >
                        <div className="jsx-600450678 exam-img mr-3">
                          <img
                            data-src="https://images.collegedunia.com/public/college_data/images/logos/XAT_0.jpg?h=44&w=44&mode=stretch"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                            alt=""
                            height="44px"
                            className="jsx-2173310127 rounded-circle clgdn_lazyload"
                          />
                        </div>
                        <div className="jsx-600450678">
                          <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                            Online Exam
                          </div>
                          <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                            XAT
                          </h3>
                        </div>
                      </a>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Participating Colleges
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            834
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col pr-1">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Date
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right pl-1">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            {" "}
                            January 06, 2024
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Level
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            national
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 fluid-height-footer-divider double" />
                      <div className="jsx-600450678 fluid-height-footer double">
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Application Process"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Application Process"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/xat/application-process"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/xat/application-process"
                          >
                            Application Process
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Exam Info"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Exam Info"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/xat"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/xat"
                          >
                            Exam Info
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-index={8}
                className="slick-slide"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: 296 }}
              >
                <div>
                  <div className="jsx-600450678 ">
                    <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                      <a
                        data-csm-track="true"
                        data-csm-title="BITSAT"
                        data-event-type="link_click"
                        data-section_name="Top Exams"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="BITSAT"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Exams"
                        data-ga-href="exams/bitsat"
                        className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                        href="/exams/bitsat"
                      >
                        <div className="jsx-600450678 exam-img mr-3">
                          <img
                            data-src="https://images.collegedunia.com/public/college_data/images/logos/BITS Pilani Logo.png?h=44&w=44&mode=stretch"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                            alt=""
                            height="44px"
                            className="jsx-2173310127 rounded-circle clgdn_lazyload"
                          />
                        </div>
                        <div className="jsx-600450678">
                          <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                            Online Exam
                          </div>
                          <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                            BITSAT
                          </h3>
                        </div>
                      </a>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Participating Colleges
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            5
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col pr-1">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Date
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right pl-1">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            {" "}
                            June 17, 2023
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Level
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            national
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 fluid-height-footer-divider double" />
                      <div className="jsx-600450678 fluid-height-footer double">
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Application Process"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Application Process"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/bitsat/application-process"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/bitsat/application-process"
                          >
                            Application Process
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Exam Info"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Exam Info"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/bitsat"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/bitsat"
                          >
                            Exam Info
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-index={9}
                className="slick-slide"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: 296 }}
              >
                <div>
                  <div className="jsx-600450678 ">
                    <div className="jsx-600450678 selected1-box position-relative h-100 selected1-box-sm-185 bg-white rounded-lg">
                      <a
                        data-csm-track="true"
                        data-csm-title="IIT JAM"
                        data-event-type="link_click"
                        data-section_name="Top Exams"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="IIT JAM"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Exams"
                        data-ga-href="exams/iit-jam"
                        className="jsx-600450678 d-flex align-items-center mb-lg-1 mb-12"
                        href="/exams/iit-jam"
                      >
                        <div className="jsx-600450678 exam-img mr-3">
                          <img
                            data-src="https://images.collegedunia.com/public/college_data/images/logos/IIT Kharagur Logo.png?h=44&w=44&mode=stretch"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                            alt=""
                            height="44px"
                            className="jsx-2173310127 rounded-circle clgdn_lazyload"
                          />
                        </div>
                        <div className="jsx-600450678">
                          <div className="jsx-600450678 d-inline-flex align-items-center justify-content-center selected1-box-badge mb-1">
                            Online Exam
                          </div>
                          <h3 className="jsx-600450678 color-base hover-color-primary selected1-box-title selected1-box-title-md mb-0">
                            IIT JAM
                          </h3>
                        </div>
                      </a>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Participating Colleges
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            50
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col pr-1">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Date
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right pl-1">
                          <p className="jsx-600450678 selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            {" "}
                            February 11, 2023
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 row">
                        <div className="jsx-600450678 col">
                          <p className="jsx-600450678 selected1-box-line mb-8p mb-lg-1">
                            Exam Level
                          </p>
                        </div>
                        <div className="jsx-600450678 col-auto text-right">
                          <p className="jsx-600450678 text-capitalize selected1-box-line font-weight-bold color-base mb-lg-3 mb-8p mb-lg-1">
                            national
                          </p>
                        </div>
                      </div>
                      <div className="jsx-600450678 fluid-height-footer-divider double" />
                      <div className="jsx-600450678 fluid-height-footer double">
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Application Process"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Application Process"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/iit-jam/application-process"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/iit-jam/application-process"
                          >
                            Application Process
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                        <div className="jsx-600450678">
                          <hr className="jsx-600450678 mt-2 mb-2" />
                          <a
                            data-csm-track="true"
                            data-csm-title="Exam Info"
                            data-event-type="link_click"
                            data-section_name="Top Exams"
                            data-csm-href="https://collegedunia.com/"
                            data-ga-title="Exam Info"
                            data-ga-track="true"
                            data-ga-module="homepage"
                            data-ga-section="Top Exams"
                            data-ga-href="exams/iit-jam"
                            className="jsx-600450678 d-flex font-weight-semi color-base selected1-box-line align-items-center justify-content-between hover-color-primary"
                            href="/exams/iit-jam"
                          >
                            Exam Info
                            <svg
                              fill="#666"
                              xmlns="http://www.w3.org/2000/svg"
                              width="451.846"
                              height="451.847"
                              viewBox="0 0 451.846 451.847"
                              xmlSpace="preserve"
                              style={{ width: 10, height: 10 }}
                            >
                              <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <br />

      {/* Study Abroad */}
      <div className="container2" style={{ marginLeft: "63px" }}>
        <h2 className="text">Study Abroad</h2>
        <br />

        <ul className="cards4">
          {/*CARD 1*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          d="M10.278 18.036c-.023-.124-.045-.248.079-.338.034.146.079.293.113.451-.057-.045-.125-.079-.192-.113Z"
                          fill="#688EC5"
                        />
                        <path
                          d="m19.16 11.265-.136.135c-.101-.079-.18-.158-.158-.305.136-.01.215.068.294.17Z"
                          fill="#B7C2E8"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M32.116 12.811c-.486-2.11-.971-4.164-1.456-6.218-.034 0-.068 0-.102.01-.22.921-.442 1.841-.665 2.767-.27 1.118-.542 2.243-.813 3.385a15.15 15.15 0 0 1 3.036.056Zm-1.795.993c4.548 0 8.092 2.89 9.04 7.336.079.372.034.451-.361.496-.948.113-1.501-.146-2.077-1.038-3.126-4.841-10.326-4.514-13.114.553-.18.327-.36.474-.733.44a11.793 11.793 0 0 0-1.411 0c-.372.023-.52-.022-.418-.485.96-4.413 4.526-7.302 9.074-7.302Zm15.292 8.77c-.288.084-.578.171-.869.259-.29.087-.58.175-.869.26-.328.1-.658.199-.988.297h-.004v.001c-.475.14-.951.282-1.423.435-.316.101-.44.034-.575-.282-.283-.711-.339-1.434-.271-2.246 1.646.383 3.315.767 4.984 1.15l.004.001c0 .045 0 .079.011.124ZM22.636 35.246a87.196 87.196 0 0 1-.303-.181c-.354-.213-.682-.41-1.018-.587-.214-.112-.214-.248-.18-.462.328-2.018.647-4.044.965-6.064l.13-.82.009-.067c.028-.201.058-.424.363-.374.207.034.183.183.16.323a.636.636 0 0 0-.014.14c.012 1.196.046 2.381.271 3.578.102.515.02 1.064-.063 1.614-.037.245-.074.49-.095.733-.055.679-.133 1.358-.222 2.134l-.003.033ZM20.05 33.7l-.015-.008c-1.34-.67-1.349-.674-.967-1.978.43-1.49.858-2.991 1.276-4.48l.009-.031c.063-.213.118-.398.42-.376.259.011.372.045.327.35a599.44 599.44 0 0 0-.846 5.236l-.204 1.287Zm5.395.756c-.53-.44-.96-.97-1.434-1.614l-.023.257c-.08.901-.154 1.715-.236 2.52-.023.191.045.315.203.417.225.135.442.284.664.436l.171.117c.17.113.282.18.35-.102.124-.541.27-1.083.418-1.625.033-.158.022-.293-.113-.406ZM18.482 48.09v.012c.035-.052.068-.106.1-.16.054-.087.108-.175.171-.258.226-.305.26-.598-.056-.835-.305-.226-.598-.158-.824.146a3.05 3.05 0 0 1-.09.102 2.841 2.841 0 0 0-.09.102.443.443 0 0 1-.03.002c-.153.225-.308.45-.464.676l-.001.001c-.286.414-.576.834-.871 1.273-.742-1.192-1.554-2.29-2.36-3.378v-.001c-.408-.55-.813-1.098-1.206-1.654-.124-.181-.147-.317-.012-.497.305-.42.597-.845.89-1.272l.33-.477.002.018.273-.415.001-.002c.326-.494.653-.991.987-1.475.237-.338.294-.654-.09-.914-.372-.237-.62-.045-.835.27-.229.34-.466.675-.703 1.01-.15.213-.3.425-.448.639l-.01-.003c-.198.303-.399.606-.606.917-.21.316-.425.64-.648.982-.32-.44-.635-.877-.949-1.311v-.001c-.651-.9-1.293-1.789-1.94-2.672-.146-.201-.059-.336.041-.491l.004-.006c.587-.865 1.176-1.73 1.764-2.593a878.855 878.855 0 0 0 2.806-4.133c.147-.226.26-.26.486-.124.354.231.709.446 1.067.664l.501.306c1.099.568 2.166 1.199 3.232 1.83h.001c.61.361 1.22.722 1.835 1.07.824.475.824.475.27 1.287-.438.642-.877 1.28-1.316 1.919l-.001.002-.002.002v.001c-.441.64-.881 1.281-1.321 1.925a5.34 5.34 0 0 1-.09.127c-.227.315-.469.651-.012.979.487.349.735-.036.96-.383l.025-.04.02-.029c.496-.728.995-1.453 1.495-2.178.5-.725.999-1.45 1.495-2.178.192-.282.327-.361.643-.158 1.095.689 2.167 1.4 3.059 2.37.892.97 1.512 2.088 1.76 3.397l.068.27c.09.35.316.498.666.43.339-.068.451-.305.418-.632-.09-.801-.395-1.546-.734-2.359 1.02.215 2 .415 2.967.612l.6.122c.167.032.333.072.498.112.292.07.583.141.878.17.504.06.378.265.233.5a4.584 4.584 0 0 0-.052.087c-.931 1.58-1.865 3.16-2.8 4.74-.933 1.58-1.867 3.16-2.798 4.74l-.486.822a240.81 240.81 0 0 0-.97 1.65c-.124.214-.248.327-.519.327-1.952-.023-3.893-.023-5.845-.023l-.007-.011h-1.867c.665-.632 1.252-1.174 1.84-1.716v.011c1.4-1.346 2.802-2.704 4.194-4.051l.128-.124c.124-.113.248-.226.36-.361.227-.26.204-.52-.022-.756-.237-.237-.508-.249-.756-.034-.22.194-.433.4-.644.606l-.214.206c-1.05.993-2.099 1.986-3.148 2.968H19.7a477.03 477.03 0 0 0-2.685 2.607c0-1.015 0-1.907-.214-2.765-.037-.14.033-.24.103-.342l.016-.022.012-.019.016-.023c.253-.355.51-.71.767-1.066.257-.356.514-.711.767-1.067Zm16.624-22.887a51.024 51.024 0 0 0-3.318-2.912 8.095 8.095 0 0 1-1.128-2.223c-.09.175-.17.341-.248.5-.137.282-.263.541-.407.786-.496.847-1.196 1.49-2.133 1.817-.282.09-.496.237-.688.452-.87.959-1.829 1.817-2.98 2.449-.26.135-.316.304-.316.575.006.361.006.725.006 1.09 0 .366 0 .733.006 1.1.079 3.701 3.385 6.68 7.087 6.41 2.528-.17 4.345-1.433 5.553-3.634.757-1.394.756-2.905.756-4.42v-.128c0-.384-.124-.565-.463-.711a5.573 5.573 0 0 1-1.727-1.151Zm4.458 2.234c-.102-.395-.214-.688-.643-.564-.508-.034-.508-.034-.52.406 0 .076 0 .15-.002.226-.002.15-.005.301.003.451.09 2.54-.723 4.718-2.619 6.445-.203.18-.203.36-.146.598l.164.617c.24.897.48 1.792.682 2.7.08.384.203.43.553.294a208.42 208.42 0 0 1 4.424-1.636c.373-.124.485-.237.373-.666a729.46 729.46 0 0 1-2.119-8.276l-.15-.595Zm-5.01 7.878c-1.58.925-3.251 1.196-5.012 1.05a.711.711 0 0 0-.239-.053c-.923-.207-1.834-.479-2.706-1.009-.18.734-.35 1.4-.53 2.066-.023.124-.012.214.078.304l.2.21c.591.625 1.174 1.24 2.16 1.19.394.084.786.172 1.178.26.393.087.785.174 1.18.259.978.208 1.964.411 2.965.618l2.08.431c-.463-1.805-.903-3.543-1.355-5.326Zm6.353 18.734c.62-1.783 1.22-3.487 1.829-5.203.384-1.109.776-2.211 1.17-3.317l.308-.87c.282-.801.451-1.625.339-2.483-.036-.266.054-.498.144-.727.024-.063.048-.124.07-.187a37.4 37.4 0 0 1 .361-1.032c.124-.345.248-.689.361-1.033.102-.305.226-.418.553-.35 2.38.508 4.762.993 7.142 1.478h.002c.305.068.316.192.226.463a596.93 596.93 0 0 0-2.1 5.801l-.01.032c-.063.18-.119.34-.396.34-1.67 0-3.126 1.58-3.374 3.5-.158 1.207.068 2.313.96 3.215a.827.827 0 0 0 .018.019l.02.017c.07.066.143.132.085.247-.053.098-.15.09-.238.082h-.001c-.015 0-.03-.002-.044-.003h-.021c-2.426.01-4.863.01-7.401.01h-.003Zm-12.79-1.333-.002.005-.784 1.328h1.347a365.55 365.55 0 0 1 6.575.034c.418 0 .576-.147.688-.52a717.583 717.583 0 0 1 2.093-6.646l.255-.802c.451-1.445.903-2.878 1.388-4.413-.813.282-1.546.35-2.302.328-.657-.03-1.288-.178-1.922-.328a77.047 77.047 0 0 0-.29-.067c-.361-.08-.52.01-.7.316-.804 1.371-1.611 2.739-2.419 4.105l-.001.003c-.507.858-1.014 1.715-1.519 2.573-.789 1.346-1.585 2.693-2.407 4.084Zm9.884-2.039.006-.02.003-.009c.521-1.647 1.038-3.28 1.554-4.917.142-.45.287-.897.432-1.345v-.001c.317-.977.633-1.952.911-2.942.17-.575.6-.824 1.03-1.073h.001c.17-.099.34-.197.493-.315.141-.106.206.03.26.142.016.032.03.061.044.083.712 1.14.949 2.382.508 3.668-.687 2.013-1.395 4.02-2.104 6.03a1004.34 1004.34 0 0 0-1.327 3.777c-.067.204-.146.305-.383.305-.596-.017-1.192-.015-1.826-.013H37.6l-.666.002 1.058-3.347.008-.025Zm11.867-2.215c-.858.632-1.208 1.535-1.264 2.619.01.073.016.15.023.23.018.212.038.442.112.673.43 1.331 1.66 1.692 2.72.778.937-.812 1.343-2.404.903-3.543-.44-1.129-1.523-1.468-2.494-.757ZM32.556 21.4c.575.802 1.365 1.197 2.415 1.208a3.864 3.864 0 0 0 1.287-.327c.191-.102.282-.192.157-.43-1.004-1.884-2.573-3.024-4.65-3.464-.214-.045-.293.011-.248.26.17.993.44 1.93 1.039 2.753Zm-6.162.858c-.452-.045-.926-.113-1.4-.27-.248-.091-.282-.193-.158-.407 1.061-1.794 2.63-2.867 4.684-3.228.293-.056.361.045.282.328-.214.835-.474 1.647-.982 2.358-.575.813-1.4 1.23-2.426 1.22Zm-5.954 2.635c-.085.253-.17.507-.253.762 2.11.282 4.48-.71 5.518-2.257-1.309-.553-2.686-.801-4.119-.666-.037.002-.073.002-.11.001-.174-.002-.336-.003-.42.259-.194.636-.405 1.267-.616 1.9v.001Zm14.734-1.168c.869-.113 1.523-.429 2.178-.79.42-.234.914-.208 1.405-.183.196.01.391.02.581.014.132 0 .162.124.187.231.006.022.01.043.017.062.208.607.408 1.22.608 1.829l.148.451.023.065c.055.143.102.268-.193.308-1.986.282-3.543-.508-4.954-1.987ZM22.168 13.098l2.194 1.338a10.107 10.107 0 0 0-2.223 2.11c-.52-.856-1.031-1.702-1.538-2.541l-.002-.003c-.528-.873-1.051-1.739-1.575-2.602-.022-.113.011-.169.136-.135 1 .608 1.998 1.217 3.002 1.83h.001l.005.003Zm17.864.893.001-.003.004-.006c.538-.885 1.07-1.763 1.604-2.638a1.2 1.2 0 0 1-.068-.056 1.162 1.162 0 0 0-.068-.057c-1.56.952-3.111 1.905-4.702 2.882l-.545.334c.891.599 1.568 1.298 2.234 2.077l1.54-2.533Zm-20.037 7.307c-1.67.384-3.33.767-4.977 1.151v.124c1.431.428 2.852.857 4.272 1.285h.001l.004.002c.192.067.293.011.372-.192.316-.768.452-1.535.328-2.37Zm21.68 17.865c-1.22.903-2.427 1.795-4.075 1.76-.485-.008-.54-.268-.6-.544-.016-.07-.031-.142-.054-.212-.12-.338.104-.395.306-.446.047-.012.094-.024.134-.039.313-.122.63-.232.948-.342.53-.183 1.056-.366 1.557-.606.745-.36 1.276-.124 1.784.43ZM5.368 19.515c.655-.756.847-1.682.858-2.314-.011-1.41-.338-2.404-.869-3.024-.688-.768-1.602-.768-2.29-.012-1.175 1.31-1.197 4.007-.046 5.338.734.847 1.625.858 2.347.012Zm6.862 4.463c-.584-1.947-1.168-3.894-1.749-5.84-.079-.136-.17-.215-.282-.012-.17.915-.316 1.817-.226 2.743.587 2.009 1.194 4.017 1.8 6.026.304 1.005.608 2.01.909 3.014.135.451.101.812-.17 1.207a286.74 286.74 0 0 1-1.129 1.651c-.6.874-1.2 1.746-1.782 2.627l-.037.06c-.146.242-.3.495-.539.662a.757.757 0 0 1-.166-.383l-.014-.069a528.628 528.628 0 0 1-1.112-4.153c-.367-1.385-.734-2.77-1.112-4.153a3.42 3.42 0 0 1-.033-.143c-.047-.221-.096-.45-.328-.58a1.338 1.338 0 0 0-.7-.044l-.06.01c-.17.027-.361.058-.3.34a3581.57 3581.57 0 0 1 2.786 10.457v.005l.014.046c.065.234.132.475-.07.687-.451.463-.304.87.046 1.332a728.483 728.483 0 0 1 3.482 4.768c1.021 1.406 2.043 2.813 3.075 4.215.947 1.287 1.41 2.709 1.376 4.3a27.49 27.49 0 0 0-.002.716c.002.32.004.643-.009.966-.011.327.09.575.35.767h32.988c.294-.655.813-.914 1.512-.835.012 0 .02-.003.029-.006a.084.084 0 0 1 .028-.005c1.444-.339 2.64-1.783 2.821-3.431.124-1.208-.045-2.359-.982-3.205-.35-.328-.338-.553-.191-.937a608.4 608.4 0 0 0 1.992-5.51l.298-.833c.226-.62.09-.869-.541-1.004-.28-.06-.557-.118-.833-.175-.348-.072-.694-.145-1.04-.22L49 38.345h-.005l-3.326-.694c-.644-.136-.813-.034-1.038.61-.215.597-.418 1.184-.655 1.873a6.371 6.371 0 0 0-1.873-2.1c1.105-.7 1.128-.767.812-2.02l-.128-.488c-.205-.782-.41-1.56-.605-2.344-.497-1.942-.994-3.883-1.479-5.824-.007-.031-.023-.07-.04-.112-.07-.166-.159-.378.266-.35.858.045 1.027-.204.756-1.039a2.127 2.127 0 0 1-.046-.148c-.022-.078-.044-.155-.078-.224-.203-.384-.045-.508.327-.61 1.009-.295 2.013-.6 3.019-.905l1.71-.517c.677-.203.97-.53.925-1.027-.056-.586-.462-.8-.982-.914l-1.464-.34c-1.464-.34-2.928-.681-4.393-1.003-.35-.067-.508-.226-.598-.553a6.678 6.678 0 0 0-.711-1.648c-.192-.304-.147-.53.034-.812.62-1.004 1.235-2.012 1.85-3.019.616-1.007 1.23-2.014 1.851-3.019.283-.451.395-.892 0-1.332-.35-.383-.767-.395-1.365-.022-.423.257-.848.512-1.272.767-1.312.787-2.624 1.574-3.886 2.427-.925.62-1.749.925-2.787.304-.294-.18-.486-.304-.565-.654-.541-2.37-1.105-4.739-1.67-7.108v-.002c-.158-.666-.598-.993-1.15-.87-.497.114-.667.497-.768.938-.155.652-.312 1.302-.47 1.952-.35 1.44-.698 2.88-1.009 4.334-.17.767-.406 1.309-1.286 1.377-.305.033-.621.18-.892.338-.384.226-.677.136-1.027-.079a420.026 420.026 0 0 0-3.45-2.128c-.88-.538-1.758-1.076-2.633-1.619-.395-.237-.779-.395-1.207-.113-.486.316-.565.835-.192 1.434a675.354 675.354 0 0 0 3.724 6.094c.18.293.226.508.034.813a6.867 6.867 0 0 0-.711 1.647c-.102.373-.305.486-.655.564-1.951.44-3.902.892-5.854 1.343h-.003c-.508.113-.892.35-.925.903-.034.587.338.858.857 1.016.67.194 1.34.397 2.01.6.89.268 1.78.537 2.674.788.474.136.598.305.406.768l-.06.137c-.175.39-.36.805.195 1.138.114.07.065.18.022.279a.76.76 0 0 0-.033.082l-.383 1.341c-.326 1.14-.652 2.278-.96 3.422-.09.372-.214.338-.485.18a140.602 140.602 0 0 0-2.821-1.636c-.305-.17-.452-.395-.553-.723-.582-1.946-1.166-3.893-1.75-5.84ZM4.404 21.23c.186-.02.372-.04.558-.056.644.01 1.027-.418 1.388-.847 1.106-1.332 1.31-2.9 1.061-4.548-.158-1.083-.61-2.043-1.456-2.776L5.952 13c-.281-.236-.574-.482-.99-.403-.835-.249-1.614-.08-2.336.383-.903.835-1.377 1.885-1.557 3.093-.361 2.426.722 4.469 2.776 5.213.186-.016.372-.036.559-.056Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.881 26.688c.145.02.29.041.424.004.191.158.416.17.63.18h.002c.542.012 1.084.012 1.625 0 .813-.01 1.118-.281 1.174-1.105.041-.595.104-1.191.167-1.787.108-1.032.217-2.067.217-3.111a1.88 1.88 0 0 1-.045-.711c.052-.467.095-.933.138-1.4.02-.233.042-.466.065-.7.045-.044.042-.104.04-.164-.004-.06-.006-.123.039-.174.09-1.614.26-3.205.451-4.807.002-.03.002-.063.001-.095-.002-.122-.004-.245.157-.29.52-.146.553-.54.542-.981-.008-.324-.005-.653-.003-.98l.003-.487c0-1.174 0-1.174-1.14-1.32-.007 0-.014-.01-.024-.021a.295.295 0 0 0-.021-.025c-.015-.12.05-.21.115-.3.033-.046.065-.091.088-.14.508-1.072.7-2.178.35-3.33-.192-.609-.598-.733-1.027-.293-.271.271-.542.407-.903.283-.35-.125-.44-.407-.508-.745A19.683 19.683 0 0 0 7.366.532c-.248-.61-.62-.7-1.06-.248-1.152 1.174-2.123 2.471-2.788 3.984-.497 1.128-.644 2.29-.305 3.51.033.102.1.21.166.317.137.222.272.44.105.608-.144.144-.488.109-.799.077-.08-.008-.157-.016-.228-.02-.53-.034-.745.225-.745.733.011.722.011 1.433 0 2.144-.011.44.101.779.598.858.198.033.233.175.269.32.013.053.026.106.047.154l.128-.033c.747-.194 1.497-.387 2.287-.238a44.055 44.055 0 0 1 2.62-.027c.477.004.954.009 1.432.005.282 0 .395.146.36.428-.025.2-.036.403-.047.606-.008.152-.017.305-.031.455-.26 2.573-.508 5.146-.745 7.72a239.234 239.234 0 0 1-.293 2.968c-.034.383-.226.553-.621.541a29.357 29.357 0 0 0-1.41 0c-.385.012-.588-.157-.644-.541-.026-.18-.05-.362-.075-.542-.074-.542-.148-1.083-.241-1.625a9.7 9.7 0 0 1-.047-.365c-.047-.396-.094-.797-.292-1.159-.406-.169-.79-.079-1.162.125l.191 1.271c.12.79.24 1.58.35 2.374.018.123.03.248.043.373.06.608.12 1.216.748 1.59.194-.28.449-.244.704-.207ZM7.333 4.233c-.158-.858-.407-1.704-.734-2.652C5.46 2.89 4.511 4.2 4.207 5.859c-.136.756-.034 1.512.428 2.156l.055.076c.217.304.436.611.905.6.936-.01 1.873-.01 2.81 0 .226 0 .406-.044.553-.214.53-.61.88-1.298.97-2.11.023-.282.012-.418-.372-.384-1.31.113-1.975-.451-2.223-1.75Zm-1.535 7.063.812.002h2.856c.15-.002.276 0 .38.002.258.005.389.008.457-.057.07-.067.073-.206.078-.49.002-.105.004-.231.01-.38.023-.452-.147-.554-.575-.554-1.142.013-2.287.011-3.432.01-.859-.002-1.717-.003-2.572.002-.173.001-.314-.002-.43-.005-.257-.007-.392-.01-.463.055-.078.072-.08.227-.083.553 0 .107-.002.232-.006.378-.012.407.135.508.519.497.821-.017 1.636-.015 2.449-.013Z"
                          fill="#24A7D0"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base ">
                        Study in USA
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 1016 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/usa-colleges"
                      >
                        Check 1016 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220 row">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          1016
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220 row">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          32.19 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in the USA?"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/usa/article/study-in-usa-universities-cost-application-and-visa-process"
                    >
                      Why Study in the USA?
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="SOP for USA"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/usa/article/statement-of-purpose-for-usa-universities"
                    >
                      SOP for USA
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exams for Studying in USA"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/usa/article/exams-to-study-in-usa-gmat-gre-toefl-sat"
                    >
                      Exams for Studying in USA
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Post Study Opportunities in USA"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/usa/article/post-degree-options-post-graduate-courses-and-jobs-in-usa"
                    >
                      Post Study Opportunities in USA
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 2*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.607 40.576c-.111-.05-.222-.1-.333-.148-.27-.119-.536-.236-.791-.376-.316-.174-.415-.12-.47.24-.163 1.037-.839 1.735-1.81 1.92a2.276 2.276 0 0 1-2.53-1.33c-.426-.982-.11-2.171.785-2.75.425-.272.338-.381.022-.643a17.756 17.756 0 0 1-3.742-4.352c-.425.578-.916 1.014-1.625 1.112-1.32.197-2.509-.698-2.65-1.974-.142-1.33.807-2.487 2.16-2.542.48-.021.468-.141.337-.512a18.4 18.4 0 0 1-.458-1.735c-.096-.414-.168-.828-.242-1.255l-.085-.479c-.884.48-1.745.524-2.585-.022-.498-.328-.729-.832-.961-1.34l-.021-.045v-.982c.36-.96.949-1.647 2.029-1.789.545-.065 1.036.11 1.538.36.207-1.8.622-3.512 1.32-5.16-.106-.018-.207-.032-.306-.046-.198-.029-.385-.055-.567-.106a2.22 2.22 0 0 1-1.647-2.062c-.044-1.025.524-1.909 1.45-2.269.917-.36 2.019-.098 2.586.699.324.453.434.297.669-.033l.007-.011c1.07-1.462 2.356-2.694 3.84-3.807-.666-.436-1.156-.96-1.276-1.745-.077-.502 0-.971.229-1.418.458-.884 1.472-1.375 2.41-1.19 1.146.24 1.79 1.048 1.887 2.466 1.691-.72 3.436-1.21 5.302-1.429-.338-.687-.48-1.353-.23-2.062.164-.458.448-.829.84-1.101a2.244 2.244 0 0 1 2.728.087c.883.698 1.047 1.647.512 3.065 1.571.196 3.087.545 4.57 1.124.219-1.55.863-2.335 2.03-2.51.981-.141 1.974.415 2.378 1.342.469 1.059.163 2.03-.96 2.967a18.294 18.294 0 0 1 4.81 4.756c.426-.676.982-1.101 1.735-1.221.48-.077.938.01 1.374.229a2.262 2.262 0 0 1 1.2 2.4c-.197 1.156-.916 1.745-2.465 1.963.305.796.589 1.603.796 2.422.207.807.338 1.625.458 2.508.578-.272 1.145-.458 1.778-.316.61.142 1.102.458 1.44.982.556.84.49 1.952-.153 2.727-.72.862-1.723 1.025-3.043.458-.041.231-.08.462-.118.692-.114.68-.226 1.353-.406 2.013-.175.67-.415 1.32-.656 1.97-.072.198-.145.395-.216.593 1.418.131 2.268.808 2.443 1.931a2.275 2.275 0 0 1-1.374 2.465c-1.08.459-2.084.11-2.978-1.09a19.149 19.149 0 0 1-3.567 3.708c1.843 1.08 1.549 3 .6 3.818-.676.578-1.44.742-2.28.447-.84-.294-1.364-.905-1.473-1.788-.054-.459-.196-.448-.523-.273-.174.094-.357.175-.54.257-.115.051-.23.103-.344.157-.212.258-.503.326-.796.395-.129.03-.258.06-.382.107a5.13 5.13 0 0 1-.17.053c-.072.021-.144.042-.212.067a7.305 7.305 0 0 1-.96.25c-.122.024-.245.05-.367.076-.337.07-.674.141-1.018.165-.294.022-.403.109-.294.447.349 1.047.01 2.149-.786 2.716-.861.611-2.007.655-2.792.098-.895-.621-1.265-1.636-.96-2.716.109-.37.044-.545-.36-.567a6.688 6.688 0 0 1-.866-.145c-.119-.025-.237-.05-.356-.073a9.54 9.54 0 0 1-1.15-.316h-.001a13.422 13.422 0 0 0-.19-.066 7.877 7.877 0 0 0-.202-.04c-.348-.066-.712-.135-.976-.418Zm6.392-34.84a1.174 1.174 0 0 1-1.167-1.222 1.192 1.192 0 0 1 1.178-1.167c.654-.011 1.21.545 1.21 1.2 0 .654-.556 1.2-1.221 1.189Zm3.992 1.581a13.868 13.868 0 0 0-6.348-.272c-.186-.026-.365.014-.543.054l-.156.033c-8.671 1.593-14.78 9.883-13.624 18.62.786 5.978 3.938 10.363 9.272 13.155 1.582.83 3.262 1.375 5.05 1.549a.251.251 0 0 1-.043-.03l.033.008c1.821.35 3.643.251 5.454-.076 9.032-1.658 15.238-10.483 13.526-19.46-1.353-7.09-5.65-11.65-12.62-13.58Zm-12.424 29.46.01-.008c.156-.017.278.055.403.129l.1.056c2.05 1.222 4.265 1.953 6.653 2.15 4.124.338 7.8-.786 10.963-3.393 3.305-2.716 5.214-6.228 5.629-10.537.327-3.447-.404-6.654-2.226-9.556-2.585-4.123-6.337-6.555-11.159-7.22-3.48-.48-6.73.272-9.762 2.028l-.045.027c-.171.101-.345.204-.555.224l-.012-.015c-.016.187-.153.276-.288.364-.044.028-.087.056-.126.087-3.512 2.607-5.694 6.032-6.348 10.374-.6 4.014.316 7.69 2.574 11.06.982 1.462 2.269 2.63 3.6 3.753.065.055.147.093.228.13.159.074.318.147.361.346Zm16.1-30.07c-.01.654.535 1.21 1.2 1.21.644 0 1.167-.523 1.189-1.178a1.192 1.192 0 0 0-1.2-1.21c-.644 0-1.178.534-1.189 1.178ZM8.91 25.032a1.176 1.176 0 0 1-1.211-1.189c0-.665.545-1.2 1.2-1.2.632 0 1.167.535 1.189 1.167a1.183 1.183 0 0 1-1.178 1.222Zm2.334-11.78a1.178 1.178 0 0 0-1.156 1.188c0 .655.512 1.178 1.156 1.2a1.199 1.199 0 0 0 1.222-1.189c0-.654-.567-1.21-1.222-1.2Zm15.577 29.626c.032-.666.6-1.167 1.265-1.124.633.044 1.145.6 1.113 1.233-.033.654-.611 1.189-1.255 1.156a1.197 1.197 0 0 1-1.123-1.265Zm20.343-17.955c.687.01 1.21-.502 1.21-1.178a1.188 1.188 0 0 0-1.21-1.21 1.22 1.22 0 0 0-1.189 1.22 1.21 1.21 0 0 0 1.19 1.168ZM17.767 38.787c.665 0 1.21.546 1.2 1.2-.011.654-.578 1.2-1.222 1.189a1.193 1.193 0 0 1-1.156-1.189c-.011-.676.49-1.2 1.178-1.2Zm-8.225-6.763c.011.644.535 1.156 1.19 1.156a1.176 1.176 0 0 0 1.188-1.145c.022-.654-.545-1.233-1.189-1.233-.654 0-1.2.557-1.189 1.222ZM19.687 7.067a1.185 1.185 0 0 1-1.167 1.178c-.655 0-1.211-.568-1.2-1.222a1.211 1.211 0 0 1 1.189-1.178c.654 0 1.178.545 1.178 1.222Zm24.968 27.379c.655.022 1.222-.535 1.222-1.2a1.17 1.17 0 0 0-1.156-1.19 1.193 1.193 0 0 0-1.233 1.179c0 .633.535 1.189 1.167 1.21Zm-7.744 5.65c0-.676.512-1.2 1.189-1.2.654 0 1.178.502 1.189 1.145a1.22 1.22 0 0 1-1.168 1.244c-.643.022-1.2-.523-1.21-1.189Zm6.73-25.514c.01.644.534 1.167 1.178 1.167.654.011 1.167-.49 1.178-1.156a1.184 1.184 0 0 0-1.167-1.233c-.655 0-1.2.557-1.19 1.222ZM28.064 25.556c-1.025.01-1.854-.786-1.865-1.79a1.82 1.82 0 0 1 1.822-1.832 1.83 1.83 0 0 1 1.843 1.822c0 .982-.818 1.789-1.8 1.8Zm3.304-1.28c-.146-.006-.305-.014-.5.102.033.02.062.042.09.062.042.031.081.06.128.08l2.912 1.307a1653.02 1653.02 0 0 1 7.123 3.208c.327.153.393-.01.48-.25.447-1.255.71-2.542.85-3.862.055-.49-.01-.654-.555-.654-2.608.016-5.21.014-7.814.012h-.005l-2.61-.002-.099-.003ZM26.45 21.28c-.168-.017-.258-.124-.345-.227a1.436 1.436 0 0 0-.08-.09c-.83-.829-1.657-1.659-2.485-2.489-1.655-1.66-3.311-3.32-4.977-4.972-.294-.294-.338-.447.011-.742 1.07-.883 2.204-1.647 3.458-2.225l.004-.002c.194-.086.335-.148.443.133l.855 2.256a2945.73 2945.73 0 0 0 3.116 8.194c.014.028.01.061.005.098a.513.513 0 0 0-.005.066Zm2.127-10.996v10.537c.169.011.195-.05.226-.123l.003-.007.69-1.55c1.264-2.846 2.532-5.697 3.815-8.54.13-.295.01-.371-.23-.458-1.123-.415-2.279-.71-3.468-.819-1.036-.087-1.036-.076-1.036.96Zm2.48 11.157h.001c.428-.411.858-.824 1.282-1.241 1.996-1.997 3.993-3.993 5.978-6 .283-.283.403-.25.643.033a16.698 16.698 0 0 1 2.226 3.458c.12.25.13.393-.186.513-2.284.865-4.567 1.74-6.851 2.616l-3.424 1.31c-.045.016-.09.02-.14.025a1.746 1.746 0 0 0-.067.008l-.087-.12c.205-.199.412-.397.62-.597h.001v-.001l.001-.001.001-.001h.001v-.001h.001v-.001Zm-13.74 12.133.035.086c.197-.185.273-.25.36-.305l7.592-7.625c.02-.019.045-.036.072-.055.08-.054.166-.114.092-.228-.08-.126-.192-.067-.283-.018a.852.852 0 0 1-.055.029c-1.68.637-3.358 1.28-5.037 1.924h-.003c-1.68.644-3.36 1.288-5.04 1.926-.25.098-.294.175-.184.425.6 1.32 1.396 2.531 2.345 3.633.047.055.077.132.106.208Zm7.933-10.418a7.239 7.239 0 0 0-.306.02 2.74 2.74 0 0 1-.229.013l-2.651-.002c-2.65-.002-5.298-.004-7.94.012-.426 0-.557-.098-.513-.545.142-1.352.414-2.683.873-3.97.098-.284.218-.35.501-.219 2.233 1.011 4.466 2.013 6.7 3.014l3.347 1.502c.03.03.068.06.18.145l.038.03ZM18.476 34.63c1.189 1.026 2.476 1.876 3.927 2.465.325.056.381-.164.43-.359.01-.034.018-.068.028-.099.783-2.661 1.54-5.332 2.293-7.995l.194-.688.005-.017.01-.033c.05-.18.102-.357-.048-.517-.132 0-.217.086-.299.168l-.017.018c-.723.722-1.445 1.446-2.168 2.17l-.001.001-.001.001-.002.002-.002.002-.001.001-.001.001-.002.002-.002.002-.001.001-.002.002-.002.002c-1.455 1.457-2.91 2.915-4.37 4.368-.219.218-.175.328.032.502Zm12.272-7.363 2.294 2.286c1.526 1.522 3.055 3.046 4.588 4.564.219.219.175.328-.032.502-1.19 1.026-2.476 1.876-3.927 2.465-.355.035-.4-.205-.443-.426-.01-.057-.021-.113-.037-.163-.301-.994-.583-1.996-.865-2.998l-.259-.918-.637-2.246v-.001l-.639-2.247a3.098 3.098 0 0 0-.045-.133c-.077-.216-.16-.45.002-.685Zm-6.219-2.758c.118-.033.243-.07.328-.23h-2.749c-.886 0-1.77 0-2.654.002H19.434c-1.776.002-3.549.005-5.321-.003h-.022c-.305 0-.533 0-.48.448.12 1.069.284 2.116.567 3.152.12.425.251.524.687.35 1.869-.73 3.741-1.449 5.613-2.167 1.319-.506 2.637-1.011 3.954-1.52.031-.013.064-.022.097-.032Zm5.455-3.765c1.429-3.218 2.858-6.436 4.287-9.664.12-.284.229-.328.512-.175a16.47 16.47 0 0 1 2.804 1.942c.229.196.25.316.022.545-1.881 1.865-3.75 3.735-5.62 5.608l-1.874 1.875c-.11.022-.164-.01-.131-.13ZM26.79 18.94l.609 1.609.098-.033-.002-3.642c-.003-2.426-.005-4.849.002-7.277 0-.283-.055-.393-.36-.36-1.134.11-2.247.295-3.349.622-.37.109-.36.25-.24.567.808 2.095 1.604 4.189 2.4 6.283.278.747.56 1.49.842 2.23ZM38.72 33.497a5170.707 5170.707 0 0 0-7.82-7.778c.07-.102.146-.052.22-.003.029.019.057.038.085.047 3.152 1.407 6.294 2.814 9.446 4.232.03.014.063.026.095.037.143.05.279.098.145.356-.622 1.156-1.353 2.225-2.17 3.109ZM20.848 19.91l4.13 1.838c.12.033.152-.033.141-.131l-.002-.002c-2.574-2.541-5.147-5.082-7.743-7.634-.785.818-1.45 1.822-2.061 2.869-.251.415-.153.578.261.72.248.09.488.2.726.312.14.065.28.13.42.19 1.374.61 2.751 1.224 4.128 1.838Zm10.489 3.158c.695-.264 1.39-.531 2.083-.798l1.276-.49.006-.002c2.191-.84 4.382-1.678 6.572-2.528.327-.131.48-.131.6.272.305 1.08.49 2.182.6 3.306.022.24-.022.37-.306.37-2.4-.007-4.8-.004-7.199-.002l-3.6.003a1.134 1.134 0 0 0-.032-.131Zm-5.359 11.917c-.295.977-.59 1.959-.783 2.961.43.131.875.175 1.32.219.222.021.445.043.666.076.305.043.316-.11.316-.338v-.029c-.011-2.663-.022-5.315-.022-7.967-.366 1.013-.649 2.054-.931 3.094-.114.417-.227.833-.345 1.247-.072.246-.147.491-.22.737Zm2.62-5.078c.367 1.013.65 2.054.932 3.094a70.902 70.902 0 0 0 .645 2.269c.265.886.53 1.77.703 2.676-.43.131-.874.175-1.32.219-.222.021-.444.043-.665.076-.305.043-.316-.12-.316-.338.005-1.335.008-2.667.01-3.997v-.002c.003-1.333.006-2.665.012-3.997Zm-1.872-1.347c.209-.662.417-1.324.487-2.024-.12-.043-.24-.087-.349-.13-.138.186-.191.403-.245.623a5.18 5.18 0 0 1-.06.227c-.49 1.706-.979 3.412-1.466 5.118l-.001.004c-.488 1.707-.977 3.414-1.468 5.12l.328.132c.217-.036.254-.193.291-.35l.025-.097.59-2.067v-.002a586.62 586.62 0 0 0 1.624-5.753c.075-.269.16-.535.244-.801Zm5.168 8.721c.04.161.081.323.293.36.12-.044.23-.088.339-.131-.32-1.111-.636-2.224-.952-3.336-.493-1.738-.987-3.476-1.492-5.205a19.43 19.43 0 0 1-.197-.75c-.154-.62-.307-1.24-.61-1.814l-.175.066-.174.065c0 .208.033.393.087.59.474 1.679.952 3.356 1.429 5.033v.001c.477 1.677.955 3.354 1.429 5.033l.023.088Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.447 37.096c.198-.01.243-.164.282-.298l.012-.04.475-1.661c.714-2.498 1.427-4.99 2.132-7.49a.46.46 0 0 0 .012-.161l-.001-.058c.13-.352.4-.58.666-.806.113-.096.226-.191.327-.295.134-.135.274-.037.407.056.04.027.078.054.116.075a.48.48 0 0 1 .009.033c-.115.176-.165.376-.215.579-.018.076-.037.152-.06.227-.49 1.707-.978 3.415-1.467 5.122v.002c-.488 1.705-.975 3.41-1.466 5.116a.592.592 0 0 1-.04.025 5.307 5.307 0 0 1-1.19-.425Zm1.52.52-.004.015c.414.153.84.25 1.276.316.27-.373.367-.81.462-1.243.036-.162.072-.323.116-.48.185-.674.387-1.344.589-2.013.428-1.422.857-2.842 1.124-4.303.005-.492.008-.987.01-1.483.003-.494.006-.989.012-1.484 0-.23-.051-.381-.288-.402-.07.7-.279 1.36-.488 2.022a24.83 24.83 0 0 0-.243.802 589.456 589.456 0 0 1-1.623 5.752c-.198.69-.395 1.379-.591 2.069-.01.031-.017.064-.025.096-.037.158-.074.315-.291.35l-.036-.013Zm-2.317 2.96 1.211.393a.63.63 0 0 1-.002.007c-.187.042-.225.194-.263.345l-.022.084-.887 3.109c-.711 2.49-1.423 4.984-2.124 7.472a.762.762 0 0 1-.035.075c-.063.126-.15.299.1.361.251.066.382-.076.448-.338.381-1.407.785-2.814 1.189-4.221.525-1.842 1.057-3.677 1.59-5.516l.362-1.247a.203.203 0 0 0-.009-.01c.282.02.55.104.815.187l.169.052c.158.21.09.422.023.627-.016.05-.032.099-.045.147-.615 2.186-1.24 4.366-1.865 6.544v.004l-.001.001v.002c-.273.95-.546 1.901-.817 2.852-.208.72-.186.742.545.742H34.14c.73 0 .753-.022.545-.742l-1.337-4.687-.004-.014-.005-.015-1.337-4.687-.039-.117c-.073-.214-.149-.436.017-.657l.17-.052c.27-.085.545-.17.834-.188a.478.478 0 0 1 .048.024l.074.21c.041.113.081.223.114.333.982 3.458 1.963 6.916 2.934 10.374.076.261.164.469.458.392.234-.06.159-.224.101-.349-.015-.032-.029-.062-.035-.087-.69-2.459-1.392-4.912-2.093-7.364v-.003a3387.294 3387.294 0 0 1-.94-3.298c-.041-.162-.082-.324-.305-.352a.715.715 0 0 1-.035.01.745.745 0 0 1-.005-.021l1.21-.393 2.488 8.705v.002c.262.905.524 1.81.774 2.714.088.327.24.458.6.458.859-.016 1.711-.014 2.567-.012l.858.001c.699 0 .873.186.873.862l-.002.633c-.003.421-.005.843.002 1.265.011.305-.044.567-.24.807H13.72c-.174-.218-.24-.469-.24-.753.013-.38.01-.764.01-1.147-.002-.288-.004-.575.001-.86 0-.61.196-.807.818-.807l.482-.005c.963-.01 1.926-.021 2.889.016.447.011.622-.142.742-.556.755-2.692 1.522-5.384 2.288-8.071v-.003l.82-2.878c.033-.12.077-.24.12-.36Zm9.92-10.387c-.286-.97-.57-1.936-.779-2.92a9.977 9.977 0 0 0-.34-.349h-.001a8.536 8.536 0 0 1-.411-.426c-.24-.305-.48-.338-.764-.087a.473.473 0 0 0-.004.02l.055-.02c.302.574.456 1.193.61 1.812.062.251.125.502.197.751.506 1.73.999 3.467 1.492 5.205.315 1.11.63 2.218.948 3.326a4.548 4.548 0 0 0 1.13-.404c-.22-.043-.249-.217-.277-.379-.008-.047-.016-.093-.028-.134l-.329-1.136a250.309 250.309 0 0 1-1.067-3.751 75.45 75.45 0 0 0-.433-1.508Zm.625 7.443.003.01c-.212.049-.425.1-.638.153-.212.051-.425.103-.638.152-.17-.152-.22-.357-.27-.559l-.046-.172c-.38-1.416-.789-2.828-1.197-4.237-.154-.533-.309-1.066-.461-1.598-.1-.344-.161-.688-.223-1.031-.027-.147-.053-.295-.083-.442 0-.993-.01-1.985-.021-2.967 0-.229.054-.393.316-.403l.041.072c.007.179.038.343.086.517.474 1.678.951 3.355 1.428 5.03v.003c.478 1.678.955 3.355 1.43 5.035l.023.087c.038.15.075.3.25.35ZM15.255 54.92h12.87c4.288 0 8.575 0 12.872-.022.05 0 .105.007.161.013.166.019.339.038.396-.1.152-.37.12-.785.021-1.167-.05-.192-.246-.167-.423-.145-.055.007-.108.014-.155.014H15.254c-.109 0-.218 0-.327.01-.087.012-.229.045-.24.088-.109.393-.109.797-.01 1.178.05.192.246.167.423.145.055-.007.108-.014.154-.014Z"
                          fill="#24A7D0"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in UK
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 169 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/uk-colleges"
                      >
                        Check 169 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          169
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          20.51 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in UK?"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/uk/article/study-in-the-uk-universities-courses-scholarships-and-visa-details"
                    >
                      Why Study in UK?
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="SOP for UK"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/uk/article/sop-for-uk-key-elements-guidelines-for-ug-and-pg-sample-and-tips-to-avoid-rejection"
                    >
                      SOP for UK
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="UK Student VISA"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/uk/article/visa-requirements-in-uk-visa-checklist-processing-time-fee-requirements-for-international-students"
                    >
                      UK Student VISA
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Cost to Study in UK"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/uk/article/financial-support-for-international-students-to-study-in-the-uk-scholarships-student-loans-international-organizations"
                    >
                      Cost to Study in UK
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 3*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.128 55.674c.162.335.45.328.72.322l.105-.001h22.029l.093.002c.065.003.132.006.193-.002.39-.023.642-.23.642-.642 0-.19.002-.38.004-.57.004-.474.009-.948-.016-1.423-.023-.55-.4-.916-.939-.974a3.14 3.14 0 0 0-.733-.011c-.344.034-.539-.103-.722-.401-.618-1.054-1.214-2.108-1.741-3.208a13.908 13.908 0 0 0-.114-.22c-.163-.313-.327-.627-.402-1.017.091 0 .177.003.26.006.156.005.3.01.45-.006.791-.069 1.34-.653 1.33-1.374 0-.757-.596-1.318-1.41-1.34-.123 0-.247-.004-.372-.007-.292-.007-.587-.014-.876.018-.424.045-.584-.126-.71-.516a39.578 39.578 0 0 1-1.89-10c-.287-5.041.423-9.944 2.061-14.71.126-.332.287-.412.619-.412.596.013 1.191.011 1.787.01.447-.002.894-.003 1.34.002.447.011.71-.184.837-.608.114-.372.237-.741.36-1.11.124-.37.247-.74.361-1.112.15-.481-.068-.779-.561-.813a2.042 2.042 0 0 0-.458 0c-.298.034-.401-.092-.378-.39.004-.057.004-.114.003-.17 0-.274 0-.52.455-.529.298 0 .39-.309.458-.584.16-.71.332-1.409.504-2.108.275-1.088.069-1.592-.905-2.188l-.801-.49a693.043 693.043 0 0 0-5.42-3.29c-.343-.206-.526-.412-.538-.87-.011-1.032-.859-1.856-1.878-1.96a3.047 3.047 0 0 0-.79-.022c-.448.057-.55-.138-.528-.55.025-.385.02-.763.016-1.144a36.984 36.984 0 0 1-.004-.46c-.012-.676-.115-.78-.802-.802-.264.172-.355.424-.344.733.008.244.005.483.003.724-.002.12-.003.242-.003.364 0 .54 0 .81-.134.95-.134.139-.4.15-.931.173-1.157.057-2.05.825-2.12 1.902-.034.412-.206.595-.515.79a989.605 989.605 0 0 0-5.415 3.392l-1 .629c-.78.493-1.02 1.1-.768 1.993.083.284.169.569.255.853.13.426.259.852.375 1.278.092.355.207.664.62.722.137.023.16.103.182.229.115.664.012.79-.653.802-.721.011-.916.286-.698.973.087.288.185.571.283.854.132.382.264.763.37 1.151.148.516.458.688.962.676.385-.005.771-.002 1.158.001.581.004 1.163.008 1.74-.012.424-.012.619.114.756.538 2.635 7.744 2.818 15.545.516 23.392a5.626 5.626 0 0 0-.119.497c-.092.444-.185.892-.5 1.107-.263.184-.67.15-1.08.117a5.275 5.275 0 0 0-.524-.025h-.057c-.86.023-1.466.584-1.466 1.352-.012.744.561 1.317 1.386 1.374.133.008.27.005.428.003.087-.001.18-.003.282-.003-.55 1.227-1.142 2.323-1.725 3.405-.109.202-.218.403-.325.605-.344.63-.722.939-1.455.836-.504-.069-.94.103-1.123.653.206.195.195.458.183.699-.019.215-.005.432.008.65.027.442.055.882-.191 1.297ZM27.2 5.173c-.501.001-1 .003-1.495.016-.378.012-.424-.171-.31-.458.16-.378.447-.618.871-.618.722 0 1.443.011 2.154.022l.007.02.004-.02c.375-.072.75-.05 1.125-.029l.112.007c.344.011.608.171.802.458.103.16.206.343.115.527-.07.139-.212.12-.341.102a.922.922 0 0 0-.117-.01c-.642 0-1.284-.012-1.925-.024a91.29 91.29 0 0 1-1.002.007Zm6.804 3.03 2.95 1.786-.002.012a.309.309 0 0 0 .014-.012c.08.035.126.115.034.15a.73.73 0 0 1-.293.025l-.097-.003c-2.88 0-5.76-.003-8.64-.006h-.003c-2.88-.002-5.762-.005-8.643-.005h-.39c.01-.195.132-.255.239-.307.025-.012.049-.024.07-.037.843-.533 1.685-1.063 2.527-1.592.842-.53 1.684-1.06 2.526-1.593.32-.206.63-.298 1.008-.298.863.006 1.723.003 2.583-.001a6.83 6.83 0 0 1 1.298-.007c.432-.002.864-.003 1.297-.003.048.003.099 0 .15-.004.145-.01.296-.02.422.107.985.595 1.966 1.19 2.948 1.786l.002.001Zm-7.6 11.008v25.076c0 .086-.003.172-.006.258-.003.086-.006.172-.006.258h-3.334c.527-1.661.986-3.276 1.318-4.938 1.329-6.747.893-13.391-1.226-19.92-.014-.038-.024-.074-.034-.11-.015-.056-.03-.11-.058-.166-.171-.355-.103-.504.333-.492a65.12 65.12 0 0 0 2.005.028c.336 0 .672.002 1.008.006Zm3.402 25.59v.002c.894 0 1.787 0 2.669.023.332.011.424-.035.31-.401a40.457 40.457 0 0 1-1.776-8.638 39.059 39.059 0 0 1 .217-9.107A38.673 38.673 0 0 1 32.9 19.59c.091-.286.091-.412-.264-.4-.634.014-1.264.02-1.895.025l-.946.009c.012 8.522.012 17.055.012 25.578Zm-9.167-33.497-.181.014a177.95 177.95 0 0 0-1.226-.011c-.406-.003-.814-.006-1.226-.012-.286-.011-.423.046-.297.378.149.39.263.802.355 1.203.091.367.24.504.653.504 4.14-.008 8.284-.005 12.427-.002H31.167l6.188.002c.041 0 .085.006.13.012.14.02.29.04.386-.127h-.012c.047-.17.089-.341.13-.513h.001v-.001c.071-.29.142-.58.236-.86.172-.504.034-.619-.493-.619-4.174.018-8.355.015-12.533.013H25.167l-4.149-.001c-.124 0-.253.01-.38.02Zm5.753 41.048h-6.839l.32-.577v-.003c.169-.303.331-.597.493-.886a32.308 32.308 0 0 0 1.455-2.967c.103-.252.218-.39.527-.39 1.352.023 2.692.023 4.043.023h.001c.16.183.172.413.172.642a180.83 180.83 0 0 1 0 3.517c0 .229-.012.458-.172.641Zm4.703-4.797-1.29.009c-.171.183-.183.412-.183.641a179.65 179.65 0 0 0 0 3.506c0 .217.012.446.184.63h6.61c-.882-1.513-1.673-2.99-2.326-4.525-.08-.195-.195-.287-.424-.287-.854.015-1.713.02-2.57.026h-.001Zm7.68 6.069v1.134c-.096.166-.245.145-.382.126a.906.906 0 0 0-.121-.012l-5.14-.001c-5.137-.002-10.274-.005-15.412.013-.543 0-.546-.244-.55-.536-.001-.072-.002-.146-.011-.22-.046-.447.069-.619.573-.619 3.425.006 6.85.006 10.275.006 3.425 0 6.85 0 10.276.005.03-.004.063-.012.097-.02.143-.033.303-.071.395.124ZM23.415 16.69c-.905 0-1.822.011-2.727.023h-.003c-.812-.012-1.625-.023-2.437-.023-.025 0-.053-.004-.08-.008-.1-.014-.208-.03-.252.122-.115.413.481 1.238.905 1.238 6.105.011 12.198.011 18.303.011h.003c.042 0 .087.006.132.013.131.018.267.037.37-.097l.013-.008c.184-.4.321-.802.413-1.271h-14.64Zm-1.467-2.154H21.991c2.563-.011 5.114-.023 7.677-.023h6.358c.434 0 .654 0 .76.11.111.114.1.346.076.818l-.01.006-.007.005c-.096.162-.24.139-.373.117a.825.825 0 0 0-.125-.013l-5.568-.003c-3.711-.002-7.423-.005-11.134.003-.39 0-.573-.046-.573-.516.011-.435.126-.55.55-.527a39.01 39.01 0 0 0 1.858.024h.467Zm.676 31.434c4.375-.011 8.75-.011 13.124-.011h.004c.023 0 .046 0 .07-.002.202-.005.444-.012.24.346a.283.283 0 0 1-.02.01h.02c-.133.142-.292.127-.447.113-.046-.005-.093-.009-.138-.009h-.005c-5.004 0-10.02 0-15.024-.011h-.344c-.138 0-.287-.046-.298-.195-.023-.206.149-.24.31-.24.566-.008 1.127-.006 1.683-.003h.002l.823.002Zm6.037-26.748-.003.668c-.005.555-.01 1.109.015 1.657.011.4-.195.435-.493.412-.053-.004-.108-.003-.163-.003-.242.002-.478.004-.478-.398.007-.52.005-1.04.002-1.557V20l-.002-.766a3.688 3.688 0 0 1 1.122-.012ZM27.541 51.8l-.003.54h1.122c0-.18-.002-.36-.003-.538-.005-.447-.01-.89.015-1.34.011-.413-.138-.516-.527-.504l-.058.003c-.328.02-.582.035-.56.5.024.442.019.89.014 1.339Zm-.003-7.009v-.905c0-.595.39-.847.95-.641.177.062.175.19.173.324v1.234c-.379-.012-.745-.012-1.123-.012Zm1.119 2.97.003-.197a4.604 4.604 0 0 0-1.122.011c0 .08.002.16.005.242.005.164.01.33-.005.491-.046.435.148.527.55.539.47.011.641-.138.584-.608a2.607 2.607 0 0 1-.015-.478Zm.003-20.199c0 .057-.002.115-.005.172-.005.114-.01.23.005.344.08.515-.126.664-.63.63-.355-.023-.527-.115-.504-.493.023-.435.023-.87 0-1.306-.032-.465.24-.472.552-.479l.078-.002c.344-.011.55.057.504.458-.015.145-.01.295-.005.446.003.076.005.153.005.23Zm-.005 6.932c.003-.05.005-.1.005-.15 0-.061-.002-.124-.005-.186-.005-.125-.01-.25.005-.364.103-.596-.229-.641-.687-.63-.355.011-.458.172-.447.492.012.436.012.871 0 1.306-.011.333.115.459.458.482.481.023.78-.07.676-.642-.015-.1-.01-.205-.005-.308Zm.005-10.277v.401c0 .642-.298.848-.916.665-.195-.058-.206-.195-.206-.344v-1.146c0-.733.034-.744.779-.698.274.022.366.126.343.389-.007.16-.005.319-.002.482l.002.251Zm0 7.137V30.14c0-.16-.023-.275-.229-.321-.664-.15-.893.023-.893.699v1.145c0 .16 0 .298.206.355.618.172.916-.034.916-.664Zm0 6.346v.401c0 .63-.298.837-.916.665-.206-.058-.206-.195-.206-.344v-1.145c0-.723.01-.722.69-.7h.031c.287.012.424.092.401.39-.007.16-.005.32-.002.482l.002.251Zm0 3.723V40.21c.012-.195-.069-.286-.286-.32-.733-.092-.836-.012-.836.698v1.146c0 .16.011.298.206.355.607.183.916-.035.916-.665Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.652 19.89c.002-.222.004-.445.004-.667h1.134c.185.206.184.463.184.714V44.122c.002.24.004.484-.172.68h-1.146V43.57c.003-.134.005-.262-.172-.324-.561-.206-.95.046-.95.641v.905c-.195 0-.387.003-.58.006-.19.003-.383.006-.578.006-.187-.198-.185-.443-.183-.684V19.918c0-.252-.001-.51.206-.707.19 0 .378.003.567.006.19.003.378.006.567.006l.007.01-.006.001c0 .255 0 .511.002.768.003.517.005 1.037-.003 1.558 0 .401.237.4.479.397.055 0 .11 0 .163.003.298.023.504-.011.493-.412-.025-.548-.02-1.102-.016-1.657Zm.004 32.45h1.146v-4.776c-.39 0-.768 0-1.146-.012l-.01.01.01.002c0 .065-.002.131-.004.197-.004.162-.009.323.016.479.057.47-.115.618-.585.607-.4-.012-.595-.103-.55-.539.016-.16.01-.326.006-.49a7.637 7.637 0 0 1-.006-.243l.017-.002a.504.504 0 0 0-.017-.02c-.189 0-.38-.004-.572-.006a38.104 38.104 0 0 0-.573-.006v4.8c.189 0 .38-.003.572-.006h.001c.192-.003.384-.006.572-.006 0-.176.002-.353.004-.529.005-.449.01-.896-.015-1.338-.022-.466.233-.48.561-.5l.058-.004c.39-.012.538.092.527.504-.025.45-.02.893-.016 1.34.002.179.004.358.004.539Zm0-24.778c0 .057-.002.115-.005.172-.005.115-.01.23.005.344.08.515-.126.664-.63.63-.355-.023-.527-.115-.504-.493.023-.435.023-.87 0-1.306-.032-.465.24-.471.552-.479l.078-.002c.344-.011.55.057.504.458-.015.145-.01.295-.005.446.003.077.005.153.005.23Zm-.005 6.933c.003-.051.005-.102.005-.151 0-.061-.002-.123-.005-.186-.005-.125-.01-.25.005-.364.103-.596-.229-.641-.687-.63-.355.011-.458.172-.447.493.012.435.012.87 0 1.306-.011.332.115.458.458.48.481.024.78-.068.676-.64-.015-.1-.01-.205-.005-.308Zm.005-10.278v.401c0 .642-.298.848-.916.665-.195-.058-.206-.195-.206-.344v-1.146c0-.733.034-.744.779-.698.274.023.366.126.343.39-.007.159-.005.318-.002.481l.002.251Zm0 7.137V30.14c0-.16-.023-.275-.229-.321-.664-.149-.893.023-.893.699v1.145c0 .16 0 .298.206.356.618.171.916-.035.916-.665Zm0 6.346v.401c0 .63-.298.837-.916.665-.206-.057-.206-.195-.206-.344v-1.145c0-.723.01-.722.69-.7h.031c.287.012.424.092.401.39-.007.16-.005.32-.002.482l.002.251Zm0 3.723V40.21c.012-.195-.069-.286-.286-.32-.733-.092-.837-.012-.837.698v1.146c0 .16.012.298.207.355.607.183.916-.035.916-.665Z"
                          fill="#24A7D0"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in Canada
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 215 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/canada-colleges"
                      >
                        Check 215 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220  d-none d-md-inline">
                            Total
                          </span>
                          215
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          19.68 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in Canada"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/canada/article/study-in-canada-cost-scholarship-visa-requirements"
                    >
                      Why Study in Canada
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Top Universities to study"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/canada/article/top-universities-in-canada-courses-ranking-fees"
                    >
                      Top Universities to study
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="SOP for Canada"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/canada/article/statement-of-purpose-sop-for-canada"
                    >
                      SOP for Canada
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Work Study in Canada"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/canada/article/study-and-work-in-canada-sin-on-and-offcampus-jobs-internships"
                    >
                      Work Study in Canada
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 4*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          d="M21.808 55.751c.71-.272 1.35-.75 1.99-1.417 1.119-1.2 2.618-1.855 4.227-1.855 1.595 0 3.136.668 4.213 1.855.94 1.022 1.95 1.567 3.067 1.635h1.35c1.309-.081 2.386-.681 3.285-1.84a4.14 4.14 0 0 1 1.05-.954 4.388 4.388 0 0 1 2.372-.682c1.432 0 2.795.627 3.654 1.677.668.818 1.527 1.677 2.822 1.786h1.322c.123-.041.246-.068.368-.11.287-.081.573-.163.846-.272 1.2-.463 1.922-1.459 2.63-2.413l.028-.04c.354-.492.573-.778.545-.942-.027-.163-.313-.368-.804-.709l-.027-.027c-.096-.068-.137-.081-.15-.081 0 0-.028 0-.137.15-.463.654-.9 1.24-1.336 1.785a3.193 3.193 0 0 1-2.48 1.227c-.9 0-1.732-.422-2.332-1.186-1.2-1.527-3.054-2.44-4.976-2.44a5.953 5.953 0 0 0-4.772 2.386c-.613.818-1.5 1.254-2.55 1.254-.08 0-.176 0-.258-.014-.859-.054-1.622-.45-2.386-1.254-1.5-1.568-3.299-2.358-5.385-2.358h-.082c-2.058.013-3.817.818-5.385 2.426-.777.805-1.663 1.227-2.563 1.227-.995 0-1.936-.504-2.726-1.472a6.319 6.319 0 0 0-.846-.859 5.906 5.906 0 0 0-3.762-1.336c-1.922 0-3.736.9-4.99 2.481-.423.532-1.159 1.159-2.277 1.159a3.205 3.205 0 0 1-2.29-1.009 11.91 11.91 0 0 1-.75-.94 4.742 4.742 0 0 0-.204-.273c-.396-.518-.627-.832-.791-.832-.164 0-.477.26-.94.64l-.014.015c-.055.04-.082.068-.082.081 0 .014.014.041.054.082.219.273.423.545.614.818.327.436.654.873 1.009 1.282a4.244 4.244 0 0 0 2.645 1.472h.04l.041.027c.014.014.028.014.082.014h.177a.57.57 0 0 1 .273.068h.845c1.077-.04 1.963-.572 2.822-1.663.873-1.118 2.373-1.84 3.818-1.84.913 0 2.249.286 3.38 1.663.914 1.09 1.882 1.676 3.082 1.84h1.431c.19-.054.382-.068.559-.082.232-.04.45-.068.654-.15Z"
                          fill="#24A7D0"
                        />
                        <path
                          d="M56 25.881c-.232-.313-.545-.436-1.063-.436h-.041c-.94.014-1.977.014-3.245.014H48.093c-3.122 0-6.108.668-8.889 1.99-.163.082-.286.137-.422.137-.341 0-.41-.396-.437-.56-.831-4.894-3.408-9.42-7.28-12.719-3.83-3.313-8.698-5.167-13.66-5.235h-.068c-.423 0-.695.068-.873.395-.163.314-.068.56.191.941 1.255 1.827 2.318 3.708 3.15 5.617.654 1.486 1.104 2.7 1.458 3.967l.11.395-.383-.15c-2.794-1.077-5.684-1.158-8.166-1.158-.477 0-.968 0-1.445.013h-.6c-.368 0-.586.137-.722.437-.123.286-.068.545.19.817.137.15.287.3.478.478 1.663 1.608 2.972 3.149 3.994 4.703.014.027.041.054.069.082.109.122.272.34.163.668l-.082.218-.204-.11c-.041-.026-.096-.04-.136-.067-.096-.041-.178-.096-.273-.137a20.703 20.703 0 0 0-6.367-2.249c-1.54-.286-3.094-.3-4.553-.3H2.054c-.409 0-.75 0-1.05-.014H.937c-.504 0-.736.123-.872.437-.164.368 0 .627.34.968 1.105 1.09 2.237 2.208 3.218 3.476 3.068 3.94 4.867 8.48 5.358 13.47.014.204.027.436-.11.586-.136.15-.354.163-.517.163h-.055c-.613-.013-1.281-.013-2.086-.013H3.704c-.75 0-.968.218-.968.954v4.867l-.368-.45c-.055-.068-.096-.123-.136-.164-.055-.068-.096-.109-.123-.15-.11-.122-.205-.286-.3-.436-.123-.204-.286-.477-.395-.477-.178 0-.396.19-.614.382a3.421 3.421 0 0 1-.436.34c-.055.041-.082.069-.082.082 0 .014.027.055.095.15.26.328.505.655.75.982.218.286.437.586.655.872.845 1.091 2.235 1.759 3.626 1.759.913 0 2.236-.3 3.313-1.704.913-1.186 2.413-1.922 3.94-1.922 1.445 0 2.78.668 3.735 1.895a4.521 4.521 0 0 0 3.558 1.745c1.214 0 2.373-.477 3.286-1.336.109-.11.232-.218.34-.328.164-.163.342-.34.533-.504 1.145-.982 2.44-1.486 3.844-1.486.313 0 .627.027.94.068 1.364.205 2.536.845 3.586 1.963.927.995 2.018 1.527 3.245 1.582.095 0 .19.013.286.013 1.445 0 2.658-.572 3.6-1.69.504-.614 1.226-1.35 2.29-1.704a4.578 4.578 0 0 1 1.485-.232c1.486 0 2.918.723 3.913 1.977.859 1.077 2.032 1.663 3.327 1.663 1.2 0 2.385-.504 3.258-1.377.327-.327.627-.723.9-1.104.081-.11.163-.218.245-.341.355-.464.586-.763.559-.927-.027-.15-.327-.382-.804-.723l-.014-.013c-.123-.082-.164-.096-.177-.096 0 0-.041.014-.11.123-.163.26-.354.49-.53.736-.083.096-.15.205-.233.3l-.122.15-.164-.109c-.014-.014-.027-.014-.04-.027-.042-.028-.124-.082-.124-.205v-4.035c0-.832-.204-1.023-1.008-1.023H49.77c-.805 0-1.445 0-2.045.014h-.068c-.218 0-.45-.027-.6-.177-.164-.164-.164-.423-.164-.627.136-3.177.914-6.04 2.29-8.507 1.391-2.481 3.422-4.635 6.054-6.394.3-.205.545-.382.763-.614v-.559ZM18.81 11.076a.262.262 0 0 1-.055-.164c0-.027-.014-.054-.014-.081l-.082-.287.3.028c2.277.218 4.281.75 6.149 1.595 3.299 1.513 5.97 3.585 7.961 6.148 1.977 2.55 3.327 5.658 4.008 9.23.123.613.055 1.104-.627 1.5-1.022.585-1.895 1.376-2.535 2.003-.11.11-.246.232-.41.232-.245 0-.354-.245-.422-.368-2.072-4.308-5.303-7.58-9.611-9.72-.218-.11-.437-.246-.505-.56-.886-3.271-2.276-6.489-4.158-9.556Zm-6.054 9.748-.34-.341.476-.014h.491c3.722 0 7.049.75 9.884 2.209 2.89 1.5 5.385 3.803 7.403 6.843.49.75.94 1.595 1.418 2.686.163.355.123.614-.123.914-2.181 2.658-3.599 5.684-4.24 8.984-.068.313-.19.64-.681.64h-.123a9.228 9.228 0 0 0-.64-.027c-.219 0-.45.014-.696.027h-.096c-.463 0-.559-.313-.586-.613-.368-3.367-1.486-6.476-3.326-9.257a20.327 20.327 0 0 0-2.959-3.53l-.04-.042c-.178-.163-.355-.34-.464-.586-1.282-2.931-3.054-5.508-5.358-7.893ZM8.107 33.175c-1.254-2.767-3.04-5.385-5.303-7.77l-.313-.328.45-.014c.354-.013.695-.027 1.036-.027 2.753 0 5.33.477 7.648 1.404 2.358.955 4.54 2.413 6.462 4.336 3.053 3.067 4.894 6.884 5.453 11.356.027.164.027.34-.095.464-.11.122-.287.15-.45.15-1.936 0-3.94-.014-6.135-.014h-5.862c-.273 0-.546-.068-.587-.518-.259-3.204-1.036-6.258-2.304-9.039Zm42.985 10.961c.273 0 .49.027.627.177.15.164.164.396.164.614a88.562 88.562 0 0 0 0 4.253c0 .437-.164.641-.573.736-.259.055-.504.096-.75.096-.818 0-1.513-.355-2.085-1.063-1.364-1.691-3.109-2.563-5.195-2.563-1.785 0-3.285.708-4.458 2.099-.845 1.009-1.8 1.54-2.78 1.54-.9 0-1.773-.422-2.618-1.267-1.582-1.568-3.45-2.4-5.412-2.4-1.964 0-3.831.832-5.4 2.4-.844.845-1.73 1.267-2.63 1.267-.982 0-1.936-.531-2.781-1.54a5.878 5.878 0 0 0-4.54-2.113c-1.718 0-3.34.695-4.567 1.95a5.832 5.832 0 0 0-.382.436c-.095.109-.177.218-.273.327-.559.613-1.213.927-1.963.927-.259 0-.531-.041-.804-.11-.246-.067-.505-.19-.505-.613.014-1.39.028-3.013 0-4.594 0-.19.041-.327.137-.423a.46.46 0 0 1 .34-.122h31.861c4.362-.014 9.516-.014 14.587-.014Zm1.5-16.932c-1.364 1.172-2.427 2.304-3.327 3.544-2.413 3.34-3.68 7.117-3.749 11.207-.013.668-.3.79-.818.79h-.013c-2.55-.013-5.045-.013-7.403-.013-2.55 0-5.044 0-7.43.014h-.014c-.231 0-.477-.028-.6-.191-.136-.178-.095-.41-.04-.641.845-3.776 2.835-7.198 5.753-9.911 2.917-2.7 6.475-4.404 10.279-4.936 1.363-.19 2.74-.204 3.926-.204h1.514c.49 0 1.131 0 1.785-.027l.587-.014-.45.382Z"
                          fill="#48639E"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in Australia
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 80 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/australia-colleges"
                      >
                        Check 80 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          80
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          32.23 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in Australia?"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/australia/article/study-in-australia-top-universities-cost-visa-requirements"
                    >
                      Why Study in Australia?
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Australian Student VISA"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/australia/article/australian-student-visa-requirements-cost-processing-time-rejection-reasons"
                    >
                      Australian Student VISA
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="SOP for Australia"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/australia/article/sop-for-australia-guidelines-for-student-visa-and-australian-universities"
                    >
                      SOP for Australia
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Top Universities in Australia"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/australia/article/universities-in-australia-top-courses-degrees-duration-tafe"
                    >
                      Top Universities in Australia
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 5*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={57}
                        viewBox="0 0 56 57"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          d="M30.79 7.227c-.724.118-.962.01-1.06-.53.876-.79 1.763-1.567 2.638-2.356.238-.216.476-.411.81-.249.303.151.303.454.303.746v3.005c-.324-.238-.713-.217-1.07-.325-.248-.55-.086-1.113-.097-1.534-.41.421-.843.962-1.524 1.243ZM26.37 6.578c-.174.486-.444.627-1.06.53-.378.01-.508-.346-.778-.508-.184-.108-.314-.292-.54-.379-.184.454.086.973-.195 1.395-.335.13-.746.075-.994.421-.022.054-.044.065-.076 0 0-1.07-.01-2.15-.01-3.22 0-.282.053-.53.345-.66.281-.119.476.022.68.184.876.756 1.752 1.502 2.627 2.237Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M53.888 56.038c.302-.065.389-.292.432-.562 0-.79 0-1.578-.022-2.324-.205-.703-.464-.919-1.178-.93h-.01a15.77 15.77 0 0 0-1.233 0c-.302.011-.41-.086-.4-.4.022-.573.022-1.145 0-1.718-.01-.508-.324-.93-.789-.919-.53.01-.54-.238-.54-.648.01-7.058.01-14.105.01-21.163 0-1.06 0-1.07 1.06-1.06.475 0 .767-.151.93-.627a44.39 44.39 0 0 1 .637-1.715c.143-.368.286-.736.422-1.106.216-.572.021-.864-.584-.875l-.3-.006a20.63 20.63 0 0 0-1.527.006c-.378.022-.497-.087-.486-.476.016-1.053.014-2.1.012-3.151l-.001-1.053c0-.605-.151-.757-.767-.767h-1.027c-1.257 0-2.514-.002-3.77-.004-3.143-.004-6.285-.009-9.427.014-.563 0-.703-.162-.66-.691.03-.37.024-.747.017-1.124a27.245 27.245 0 0 1-.006-.487c0-.692-.097-.81-.767-.8-.357 0-.444-.119-.444-.464.008-.987.005-1.979.003-2.972l-.003-1.492c-.564.14-.95.48-1.157 1.006l.066-.055v3.87a2.658 2.658 0 0 1-.119-.13c.011.212.027.428.043.643.015.194.029.387.04.58.416.014.831.04 1.246.095.004.187.004.374.003.563 0 .314-.001.629.019.94.022.378-.097.486-.476.475-1.734-.016-3.469-.014-5.204-.012l-1.735.001c-.201 0-.403-.01-.605-.019-.097-.005-.195-.01-.292-.013v.01l-.032.001c-.778.01-1.546.021-2.324.021h-.02c-.137 0-.304.001-.293-.194.007-.194-.002-.388-.011-.583-.019-.404-.038-.81.086-1.212.362-.051.726-.048 1.09-.046h.086a.379.379 0 0 0 .067-.083l.008-.234c.01-.291.019-.583.006-.875a.168.168 0 0 1-.003.006c-.014.021-.05.033-.086.045-.02.006-.04.013-.055.02 0-1.286 0-2.583-.01-3.87.031.016.063.032.093.05-.13-.363-.429-.547-.732-.733-.094-.058-.19-.117-.28-.18a.152.152 0 0 0-.151.02c0 .483-.003.967-.005 1.45-.005.97-.01 1.94.005 2.907 0 .345-.098.454-.454.454-.606-.011-.735.15-.735.778 0 .169-.004.34-.008.51-.01.385-.019.772.018 1.154.044.53-.13.649-.648.649-3.502-.017-7.004-.015-10.506-.013l-3.502.002c-.778 0-.897.13-.897.908l-.003 1.158c-.005.964-.01 1.927.014 2.884 0 .41-.119.519-.519.497-.692-.032-1.394-.021-2.097-.01-.68 0-.875.302-.605.93.118.275.243.547.368.819.242.527.484 1.052.67 1.601.248.757.68 1.081 1.47.951.378-.054.518.054.518.487-.01 7.285-.01 14.57 0 21.854 0 .4-.097.52-.508.508-.713-.021-1.037.346-1.048 1.06v.81c0 .6 0 .898-.149 1.045-.146.144-.435.144-1.008.144l-.121-.001c-.122-.002-.243-.004-.365.012-.573.065-.919.422-.93.994-.016.56-.014 1.125-.012 1.692l.002.567c0 .303.108.53.421.606l.03-.002c.172-.01.337-.02.51-.02h50.703c.174 0 .339.01.512.02l.029.002Zm-4.67-34.188h.011c-.097.154-.23.132-.358.112-.044-.007-.087-.014-.128-.014-12.884.01-25.757.01-38.64 0-.282 0-.563-.003-.844-.005a49.362 49.362 0 0 0-1.686.005c-.356.01-.508-.065-.497-.465a73.352 73.352 0 0 0 0-3.448c0-.313.076-.443.41-.432a50.17 50.17 0 0 0 1.586-.016c.423-.008.846-.017 1.268-.017h38.262c.051 0 .104-.005.156-.01.16-.017.322-.033.46.097h-.01c.065 1.394.054 2.8.01 4.194ZM6.752 23.04c.194-.011.389-.022.594-.022h43.948l.108.002c.072.003.144.005.216-.002.26-.022.378.043.26.335-.157.36-.3.725-.445 1.091-.085.217-.17.433-.258.649a.462.462 0 0 1-.031.015c-.098.112-.23.096-.356.081a1.043 1.043 0 0 0-.121-.01H7.908c-.432 0-.861-.002-1.29-.005h-.002c-.43-.003-.859-.005-1.29-.005-.239 0-.4-.044-.498-.292-.198-.494-.41-.981-.644-1.516l-.145-.332c.951.01 1.827.01 2.713.01Zm17.034 16.028.001-2.342c.002-2.343.005-4.686-.012-7.029 0-.443.065-.616.573-.605 2.248.033 4.486.022 6.734 0 .41 0 .508.119.508.519-.011 6.312-.011 12.635 0 18.947 0 .41-.087.551-.53.551a353.88 353.88 0 0 0-6.788 0c-.41 0-.508-.118-.497-.508.011-3.177.011-6.355.011-9.533Zm13.166-2.343c.002-2.368.004-4.739-.012-7.103 0-.39.076-.53.497-.52 2.248.023 4.497.023 6.734 0 .421 0 .497.142.497.53-.01 6.323-.01 12.646 0 18.959 0 .389-.086.518-.508.518a349.874 349.874 0 0 0-6.734 0c-.432 0-.486-.15-.486-.53.01-3.154.01-6.31.01-9.475V39.1l.002-2.345v-.031Zm-18.54 4.732c.002-.786.002-1.571.002-2.356l-.001-2.36v-.004c-.002-2.354-.004-4.702.012-7.05 0-.422-.076-.584-.551-.573-2.065.021-4.129.021-6.193 0-.433-.011-.53.119-.53.54.01 6.312.01 12.635 0 18.947 0 .39.076.52.497.52 2.086-.022 4.161-.022 6.247 0 .433 0 .53-.13.53-.541a921.194 921.194 0 0 1-.012-7.11v-.013Zm-9.769 8.722c-.205 0-.4.011-.594.022l-.232-.007c-.314-.01-.632-.021-.935-.004a3.247 3.247 0 0 1-.511-.035c-.367-.044-.73-.087-.927.133-.201.223-.163.59-.125.96.02.185.039.372.028.542-.022.26.043.389.346.378a57.48 57.48 0 0 1 1.412-.015h.002c.313-.001.626-.002.94-.006.116 0 .229.005.342.01.117.006.233.011.352.011h40.37c.655 0 .977 0 1.141-.16.158-.156.17-.46.194-1.057l.005-.123c.021-.573-.163-.66-.681-.66-13.716.011-27.422.011-41.127.011Zm44.553 3.146c.043.53.043 1.07 0 1.6a.35.35 0 0 1-.022.013c-.102.104-.23.088-.351.073a1.025 1.025 0 0 0-.124-.01H5.876c-.328 0-.657-.005-.987-.01-.55-.008-1.102-.015-1.65-.002-.389.011-.475-.119-.475-.486v-.061c.005-.596.007-.9.16-1.054.16-.16.48-.16 1.137-.16 8.09 0 16.18-.003 24.27-.006s16.18-.005 24.27-.005c.058.006.119.002.18-.002.145-.01.293-.02.415.11ZM9.778 26.269c-.072.005-.144.01-.216.013-.767 0-1.535-.01-2.302-.022-.227-.01-.41.044-.357.314.035.17.012.35-.012.529-.042.32-.084.638.207.908.023.024.069.019.113.015a.491.491 0 0 1 .049-.004c.765 0 1.53-.01 2.294-.021.08.003.158.008.237.013.154.01.306.019.463.019H48.04c1.06 0 1.06 0 1.06-1.08-.002-.091-.002-.17-.001-.239 0-.24 0-.358-.059-.416-.058-.056-.172-.054-.398-.05l-.223.002H10.21c-.145 0-.289.01-.433.019ZM49.1 39.112l-.002 2.358c-.002 2.356-.004 4.708.012 7.067 0 .432-.086.605-.562.572a19.704 19.704 0 0 0-2.259 0c-.465.022-.55-.15-.55-.583.01-4.378.01-8.766.01-13.143l.001-1.443v-.003c.002-1.439.004-2.874-.012-4.315 0-.39.076-.54.497-.53.79.033 1.578.033 2.367 0 .422-.021.498.14.498.53-.008 2.11-.005 4.217-.003 6.324l.002 3.166Zm-26.396 2.401.001-2.358V37.26c-.002-2.527-.004-5.055.022-7.563 0-.497-.151-.605-.605-.583a30.02 30.02 0 0 1-2.205 0c-.335 0-.433.097-.433.432.011 6.388.011 12.776 0 19.163 0 .357.13.422.443.411a31.391 31.391 0 0 1 2.26 0c.421.011.53-.119.53-.54-.017-2.359-.015-4.711-.013-7.067Zm13.166-2.38-.001 2.358c-.002 2.356-.004 4.709.012 7.067 0 .454-.13.573-.573.551a23.81 23.81 0 0 0-2.15 0c-.422.022-.509-.13-.509-.518.01-4.021.01-8.042.01-12.063 0-.651.003-1.303.004-1.954.005-1.63.01-3.258-.014-4.887-.01-.498.162-.606.616-.584.66.032 1.33.032 1.989 0 .476-.022.638.086.627.605a906.796 906.796 0 0 0-.012 7.058v.008l.001 2.36Zm-25.78 2.324.002-2.367-.002-2.36v-.009c-.002-2.367-.004-4.735.012-7.11.011-.432-.108-.551-.54-.53-.735.044-1.47.033-2.205.011-.357 0-.475.108-.465.465.017.697.015 1.4.013 2.101v.003l-.002.695c0 1.346 0 2.692.002 4.037.002 4.037.004 8.074-.013 12.111 0 .476.108.638.595.605.68-.043 1.362-.043 2.043 0 .443.022.572-.097.572-.55-.016-2.368-.014-4.735-.012-7.102Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.417 20.353c.197.003.394.006.589.006 4.701 0 9.414 0 14.105-.011.378 0 .443.14.443.476 0 .605.14.735.724.735.769.004 1.538.003 2.307.002 1.025-.002 2.05-.004 3.076.008.497 0 .789-.194.756-.68-.032-.498.206-.53.606-.53h15.142l.15.002c.392.01.823.022.823-.543 0-.568-.424-.555-.812-.543a5.23 5.23 0 0 1-.16.003c-5.07-.01-10.128-.01-15.197 0-.357 0-.563-.032-.552-.476.011-.55-.216-.713-.832-.713h-5.22c-.649 0-.8.13-.8.778 0 .346-.13.422-.443.422-4.702-.022-9.415-.022-14.116-.022-.195 0-.392.003-.59.006a43.24 43.24 0 0 1-.588.005c-.346 0-.54.151-.552.508-.01.367.173.562.552.562.194 0 .391.003.589.005Zm18.015.11c.18.002.358.004.537.004.188 0 .377-.003.566-.006.442-.007.887-.014 1.326.017.53.043.53-.26.508-.627-.004-.062-.002-.126 0-.19.011-.27.021-.53-.486-.513a87.847 87.847 0 0 1-3.773 0c-.378-.01-.53.108-.475.487.021.13.01.26 0 .378-.044.357.097.475.454.465.448-.023.895-.019 1.343-.015ZM32.38 9.486c.303-.39.681-.703 1.081-.984v-.66c-.161-.306-.442-.346-.723-.386a2.017 2.017 0 0 1-.336-.067c-.191-.032-.382-.06-.573-.087-.327-.047-.652-.094-.973-.162l-.083-.002c-.405-.008-.808-.016-1.04-.441-.29-.398-.473-.85-.657-1.303-.09-.223-.18-.447-.284-.664l-.04-.085c-.115-.25-.236-.51-.565-.52-.323 0-.469.239-.614.476a7.67 7.67 0 0 1-.046.075c-.142.227-.269.463-.395.698-.226.424-.452.846-.772 1.215-.281.378-.703.432-1.124.475-.4.192-.84.29-1.272.388l-.241.056c-.094.037-.197.058-.3.08-.287.062-.575.124-.662.514.007.056.004.115.001.175-.005.112-.01.227.053.333.133.163.304.283.475.403.191.134.382.268.52.462.142.257.375.42.608.582.118.083.236.166.342.26.227.206.281.38.14.65-.274.526-.508 1.074-.743 1.624-.107.251-.215.503-.326.753.038.124.008.254-.023.384-.047.2-.094.401.11.578.181.31.425.243.672.176.046-.013.092-.025.138-.035.144-.038.274-.101.404-.164.094-.046.188-.092.288-.128.169-.06.331-.144.493-.227.305-.157.61-.314.955-.314.238-.001.476-.01.715-.017 1.204-.04 2.407-.081 3.49.677.079.053.175.085.27.118.059.02.118.04.173.065l.056.019c.25.081.491.16.733-.051.288-.24.214-.511.139-.785-.026-.095-.053-.19-.064-.285-.19-.46-.43-.888-.671-1.315-.144-.255-.287-.51-.42-.771-.173-.324-.12-.54.13-.8.109-.117.237-.216.366-.315.238-.183.476-.366.595-.668Zm-1.195-.424c.175-.167.355-.339.547-.517-.8-.119-1.481-.227-2.151-.335-.346-.043-.53-.216-.67-.53-.07-.157-.135-.316-.2-.476-.178-.435-.359-.877-.643-1.296l-.245.402c-.235.383-.456.743-.642 1.122-.183.378-.454.551-.854.638-.427.085-.843.204-1.292.332-.175.05-.356.102-.545.154l.217.17c.408.319.775.605 1.134.9.638.519.66.616.314 1.394-.12.273-.244.545-.372.828-.136.302-.278.616-.428.956l.538-.246c.652-.297 1.24-.565 1.829-.846.292-.13.54-.13.821.01.36.181.73.352 1.1.522.185.085.37.17.554.257l.044.02c.085.042.176.086.259.012.085-.076.036-.153-.01-.224l-.034-.056-.151-.28c-.145-.268-.291-.537-.443-.801-.26-.444-.184-.779.227-1.114.37-.303.719-.636 1.096-.996Z"
                          fill="#24A7D0"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in Germany
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 134 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/germany-colleges"
                      >
                        Check 134 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          134
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          3.12 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in Germany?"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/germany/article/study-in-germany-top-universities-free-study-scholarships-job-opportunities"
                    >
                      Why Study in Germany?
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Top Universities in Germany"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/germany/article/universities-in-germany-top-courses-rankings-phd-international-programmes"
                    >
                      Top Universities in Germany
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="SOP for Germany"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/germany/article/statement-of-purpose-for-germany"
                    >
                      SOP for Germany
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Scholarships in Germany"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/germany/article/scholarships-in-germany-for-international-students-daad-requirements-dates-how-to-apply"
                    >
                      Scholarships in Germany
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 6*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          d="M29.87 52.125H23.82a.613.613 0 0 1-.492-.225c-.506-.558-.446-1.16-.417-1.506 0-.076.015-.151.015-.211-.015-3.359-.015-6.702 0-9.82 0-.09 0-.18-.015-.285-.014-.347-.03-.783.135-1.235-.194-.542-.12-1.07-.06-1.521.015-.075.015-.136.03-.211.283-2.259 1.475-3.976 2.681-5.542.12-.15.462-.602 1.028-.632.522-.015.91.33 1.222.677 1.966 2.199 2.846 4.895 2.8 8.479-.029 2.244-.029 4.518-.014 6.731v3.449c0 .075 0 .166.015.241.03.377.06.949-.387 1.4a.724.724 0 0 1-.492.211Zm-5.647-1.355h5.17c0-.06 0-.105-.015-.15 0-.106-.015-.211-.015-.317V46.87c0-2.214-.015-4.503.015-6.747.045-3.223-.73-5.617-2.458-7.56-.075-.075-.12-.136-.164-.166l-.03.03c-1.087 1.416-2.16 2.952-2.398 4.865-.015.075-.015.15-.03.226-.075.497-.09.768.06 1.009a.691.691 0 0 1-.105.873c-.044.166-.044.377-.03.617 0 .121.015.226.015.347 0 3.102-.015 6.445 0 9.804 0 .12-.015.24-.015.346v.256ZM40.269 52.125h-6.142a.626.626 0 0 1-.499-.225c-.514-.558-.454-1.16-.423-1.506 0-.076.015-.151.015-.211-.015-3.374-.015-6.717 0-9.82 0-.09 0-.18-.015-.285-.016-.332-.03-.738.105-1.145-.136-.316-.12-.632-.105-.828v-.06c.12-2.937 1.709-5.136 3.1-6.717.273-.316.575-.391.787-.391.5-.015.832.33 1.074.587 2.103 2.169 3.056 4.91 2.995 8.614-.03 2.244-.03 4.533-.015 6.747 0 1.144.015 2.274 0 3.418 0 .075 0 .166.015.241.03.377.061.949-.393 1.4a.878.878 0 0 1-.499.181Zm-5.733-1.355h5.249c0-.06 0-.105-.015-.15 0-.106-.015-.211-.015-.317v-3.418c-.015-2.214-.015-4.518.015-6.777.06-3.328-.772-5.753-2.617-7.65l-.03-.03c-2.194 2.575-2.527 4.367-2.587 5.662v.075c0 .075-.015.166 0 .226a.666.666 0 0 1 .106.934c-.03.03-.046.06-.076.09-.045.166-.045.377-.03.618 0 .12.015.225.015.346 0 3.102-.015 6.445 0 9.804 0 .12-.015.24-.015.346 0 .09-.015.18 0 .241ZM50.709 52.125h-6.06a.614.614 0 0 1-.493-.225c-.507-.558-.447-1.16-.418-1.506 0-.076.015-.151.015-.211-.015-3.374-.015-6.717 0-9.82 0-.09 0-.18-.015-.285-.015-.332-.03-.738.105-1.145-.135-.316-.12-.632-.105-.828v-.06c.12-2.937 1.687-5.136 3.06-6.717.269-.316.567-.391.776-.391.493-.015.821.33 1.06.587 2.06 2.169 2.986 4.91 2.94 8.599-.03 2.214-.014 4.458-.014 6.626v3.54c0 .074 0 .165.015.24.03.377.06.949-.388 1.4a.715.715 0 0 1-.478.196Zm-5.657-1.355h5.18c0-.06 0-.105-.016-.15 0-.106-.014-.211-.014-.317v-3.539c0-2.184-.015-4.427.014-6.641.045-3.328-.776-5.753-2.582-7.65l-.03-.03c-2.164 2.575-2.492 4.367-2.552 5.662v.075c0 .076-.015.166 0 .226a.672.672 0 0 1 .104.934c-.03.03-.044.06-.074.09-.045.166-.045.377-.03.618 0 .12.015.225.015.346 0 3.102-.015 6.446 0 9.804 0 .12-.015.24-.015.346 0 .075-.015.166 0 .226Z"
                          fill="#24A7D0"
                        />
                        <path
                          d="M29.725 39.533h-5.793a.668.668 0 0 1-.675-.666c0-.37.3-.666.675-.666h5.793c.375 0 .675.296.675.666 0 .37-.3.666-.675.666ZM40.028 39.533h-5.694a.662.662 0 0 1-.664-.666c0-.37.295-.666.664-.666h5.694c.37 0 .664.296.664.666 0 .37-.31.666-.664.666ZM50.551 39.533h-5.793a.668.668 0 0 1-.675-.666c0-.37.3-.666.675-.666h5.793c.375 0 .675.296.675.666 0 .37-.315.666-.675.666Z"
                          fill="#24A7D0"
                        />
                        <path
                          d="M54.738 56H7.505a.672.672 0 0 1-.675-.675v-6.061c0-10.637 0-21.634.015-32.45 0-.3-.06-.54-.18-.78-.105-.21-.195-.406-.285-.616a7.89 7.89 0 0 0-.525-1.005c-1.304-1.905-1.74-4.126-1.35-6.991a.673.673 0 0 1 .51-.555c.705-.18 1.41-.15 2.085-.135.345.015.66.015.99 0 .434-.015.78.09 1.034.345.42.405.405.99.405 1.185-.015.555-.015 1.11 0 1.695v.09h1.664v-2.58c0-.375.3-.675.675-.675h3.374c.375 0 .675.3.675.675v2.625c.554.105 1.274.195 1.44.06.209-.18.224-1.35.224-1.8 0-.03 0-.075-.015-.135-.03-.27-.075-.765.345-1.23a.68.68 0 0 1 .495-.21h3.419c.314 0 .57.21.66.51.824 3.21-.406 5.88-1.86 8.296-.375.615-.525 1.275-.51 2.19.03 1.516.015 3.061.015 4.561v2.086c1.23-1.606 2.31-3.406 3.344-5.131l.315-.525c.33-.555.734-.93 1.56-.93 7.946.015 15.819.015 23.406 0 .285 0 1.17 0 1.664.825.555.915 1.17 1.83 1.755 2.715 1.064 1.59 2.159 3.256 3.014 5.041.24.495.27.915.27 1.275.014 9.392 0 18.693 0 27.395 0 .15-.045.285-.06.36 0 .015-.015.03-.015.03a.645.645 0 0 1-.645.525Zm-34.623-1.35h34.023V27.69c0-.255-.03-.45-.135-.69-.81-1.71-1.89-3.316-2.924-4.876-.6-.9-1.215-1.83-1.784-2.775-.045-.075-.105-.165-.495-.165-7.587.015-15.46.015-23.407 0-.24 0-.255 0-.42.27l-.314.525c-1.08 1.785-2.19 3.63-3.48 5.326-.719.93-1.034 1.935-1.034 3.36v25.22c0 .135-.015.27-.03.39-.015.18-.03.3 0 .375Zm-11.936 0h10.572c-.015-.195 0-.36.015-.51.015-.09.015-.18.015-.255V26.07c0-1.425-.015-1.035 0-1.425V22.35c0-1.486.015-3.016-.015-4.532-.015-1.17.195-2.07.704-2.895 1.41-2.34 2.25-4.396 1.815-6.751h-2.37c0 .075.015.15.015.24-.014 1.29-.075 2.265-.734 2.805-.675.54-1.665.39-3.104.105a.674.674 0 0 1-.54-.66v-2.52h-2.024v2.58c0 .375-.3.675-.675.675H8.839a.672.672 0 0 1-.675-.675v-2.64H8.15c-.375.015-.734 0-1.094 0-.45-.015-.87-.03-1.26.015-.24 2.265.15 4.05 1.185 5.58.27.39.45.796.63 1.201.09.195.18.375.27.555.224.435.33.87.33 1.395-.016 10.817-.016 21.814-.016 32.45L8.18 54.65Z"
                          fill="#48639E"
                        />
                        <path
                          d="M7.717 17.133a.681.681 0 0 1-.53-.266.7.7 0 0 1 .106-.987c.47-.391.97-.329 1.303-.297.076.015.167.015.227.015 2.712-.015 5.469-.015 8.135-.015h2.348a.69.69 0 0 1 .681.704.69.69 0 0 1-.681.705h-2.363c-2.666 0-5.423 0-8.12.016-.136 0-.272-.016-.379-.032-.09-.015-.257-.031-.287-.015a.629.629 0 0 1-.44.172ZM21.552 27.546c-.644 0-1.303-.044-1.978-.292a.654.654 0 0 1-.39-.848.681.681 0 0 1 .87-.38c.644.234 1.364.22 2.113.205.225 0 .434-.015.66-.015h30.299c.375.015.6.015.78-.117.299-.219.718-.146.943.146.225.293.15.702-.15.921-.554.395-1.139.38-1.603.365H22.827c-.21 0-.42 0-.63.015-.21-.015-.42 0-.645 0Z"
                          fill="#48639E"
                        />
                        <path
                          d="M26.828 27.304a.661.661 0 0 1-.665-.663v-2.428c0-.368.296-.663.665-.663.37 0 .666.295.666.663v2.428c0 .368-.31.663-.666.663ZM37.12 27.304a.661.661 0 0 1-.665-.663v-2.428c0-.368.295-.663.665-.663.37 0 .666.295.666.663v2.428c0 .368-.31.663-.666.663ZM47.654 27.304a.661.661 0 0 1-.666-.663v-2.428c0-.368.297-.663.666-.663.37 0 .666.295.666.663v2.428a.661.661 0 0 1-.666.663ZM14.305 32.39c-.314 0-.612-.03-.91-.061-.374-.045-.717-.075-1.016-.045-.597.06-1.045-.06-1.358-.361-.433-.406-.478-1.008-.478-1.414.03-1.64.03-3.31.015-4.934v-1.956c0-2.016.582-2.843 2.478-3.535a.93.93 0 0 1 .284-.045c.06 0 .134 0 .209.015 2.104.466 2.79 1.309 2.806 3.445 0 .346 0 .692.015 1.038.015 1.263.03 2.557-.03 3.836-.015.27.03.571.075.902.104.858.253 1.94-.598 2.663-.432.36-.97.451-1.492.451Zm-1.717-1.475c.314 0 .627.03.94.06.583.06 1.135.12 1.404-.09.268-.226.224-.692.12-1.444-.046-.376-.105-.752-.075-1.143.06-1.25.044-2.528.03-3.776 0-.346-.016-.692-.016-1.038-.014-1.46-.238-1.775-1.642-2.106-1.254.481-1.462.827-1.462 2.211v1.956c0 1.624.014 3.31-.015 4.964 0 .256.03.36.044.39.03.016.12.031.314.016h.358Z"
                          fill="#48639E"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in Ireland
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 12 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/ireland-colleges"
                      >
                        Check 12 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          12
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          18.73 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in Ireland?"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/ireland/article/study-in-ireland-rankings-cost-and-benefits"
                    >
                      Why Study in Ireland?
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/ireland/article/application-process-for-universities-in-ireland"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Scholarships in Ireland"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/ireland/article/scholarships-in-ireland-for-international-students-government-and-university-funds"
                    >
                      Scholarships in Ireland
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Cost of Living"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/ireland/article/living-in-ireland"
                    >
                      Cost of Living
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 7*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.352 54.843c-.276.424-.333.779.034 1.157h3.186c.336-.172.51-.473.686-.775l.105-.176a230.64 230.64 0 0 0 1.742-2.808c.195-.321.401-.39.745-.206.436.229.871.47 1.295.722.654.39.951.497 1.085.706.13.202.107.5.107 1.242 0 .057 0 .115.012.172.057.573.343.882.905.905 1.192.046 2.395.046 3.587 0 .516-.011.745-.275.791-.79.035-.321.023-.654.012-.975-.012-.355.137-.619.458-.78.612-.305 1.206-.653 1.798-1l.288-.168c.378-.218.608-.16.837.218.39.645.793 1.28 1.195 1.916.248.392.497.784.742 1.178l.007.01c.18.272.352.53.692.61h2.842a.989.989 0 0 0 .459-.46v-.343c-.103-.166-.204-.336-.304-.505-.1-.169-.2-.338-.304-.504l-.005-.009c-2.28-3.596-4.558-7.192-6.837-10.776a2.194 2.194 0 0 1-.321-.837c-.149-.962-.585-1.799-1.33-2.452-.252-.218-.332-.447-.332-.78.012-5.788.012-11.576 0-17.363 0-.356.115-.596.367-.837 1.26-1.226 1.627-2.716 1.146-4.39-.367-1.295-1.284-2.12-2.453-2.693-.32-.31-.733-.367-1.157-.39a8.55 8.55 0 0 0-.768 0c-.424.034-.837.069-1.17.378a2.72 2.72 0 0 0-.057.04 1.092 1.092 0 0 1-.137.086c-2.797 1.261-3.416 5.043-1.009 7.095.195.16.207.332.207.55 0 1.965-.002 3.928-.003 5.89-.002 3.923-.005 7.842.003 11.76.011.264-.07.447-.275.63a4.031 4.031 0 0 0-1.364 2.557c-.046.355-.184.641-.367.94-1.002 1.574-2 3.151-2.997 4.728a1693.46 1693.46 0 0 1-4.143 6.526Zm9.33-38.637h4.847c-.504-.607-1.008-1.02-1.696-1.146-1.26-.355-2.808.207-3.152 1.146Zm1.523 1.17h.681c.908.002 1.818.004 2.735-.023.39-.012.504.137.481.481-.011.115-.011.23 0 .344.046.527-.149.733-.71.71-.738-.04-1.482-.04-2.228-.041-.32 0-.639 0-.959-.004-.187.003-.375.003-.564.003-.378 0-.757 0-1.132.031-.367.023-.493-.137-.538-.47-.138-.894-.012-1.054.882-1.054.447.011.894.023 1.352.023Zm2.155 7.644c-.541.134-1.083.109-1.624.084-.295-.014-.59-.027-.886-.015-.206.012-.206-.183-.206-.332v-2.384c0-.218.046-.298.286-.23.608.184 1.227.16 1.857.115.436-.24.665-.195.63.39-.031.356-.024.717-.017 1.079.008.43.016.864-.04 1.293Zm-1.286 5.13c.24-.001.482-.002.725-.007.47.115.63-.034.619-.55a37.905 37.905 0 0 1 0-2.796c.01-.493-.15-.654-.62-.527v.013a.457.457 0 0 0-.01-.025c-.585 0-1.17 0-1.755-.023-.274-.011-.4.069-.4.378.01 1.066.01 2.12 0 3.187 0 .263.08.378.355.366.364-.013.724-.015 1.084-.016h.001Zm8.53 23.867c.435.745.917 1.009 1.776.78-1.027-1.627-2.05-3.242-3.072-4.853l-.002-.003c-1.087-1.716-2.171-3.426-3.252-5.139-.642.871-.642.871-.138 1.674.434.694.87 1.386 1.308 2.078 1.142 1.811 2.285 3.622 3.38 5.463Zm-12.505-7.324c.447-.687.562-1.226-.068-1.845l-1.08 1.708c-1.729 2.738-3.465 5.486-5.201 8.218.94.32 1.375-.126 1.81-.837 1.468-2.441 2.98-4.86 4.54-7.243Zm5.261 7.703c-.532.138-1.064.114-1.599.09a9.33 9.33 0 0 0-.922-.01c-.19.01-.197-.137-.203-.274l-.004-.059v-3.197c0-.252.103-.333.344-.321.304.005.608.008.911.011.304.003.608.006.912.012.447-.115.63.023.607.527-.033.762-.036 1.529-.04 2.298-.001.307-.003.615-.006.922Zm-1.267-19.547c-.354.001-.709.003-1.06.017-.286.01-.4-.07-.4-.379.022-.928.022-1.868 0-2.796-.012-.31.114-.39.4-.378.585.022 1.181.022 1.765.022.459-.114.63.035.608.54a21.656 21.656 0 0 0 0 2.44c.034.493-.149.642-.607.528-.234.004-.469.005-.704.006h-.002Zm3.472 13.224c-.295-.471-.59-.943-.887-1.414l-.046.014a.298.298 0 0 1-.091.02v5.066c0 .31.148.23.32.139v-.001c.339-.19.677-.381 1.015-.573h.001v-.001h.002l.001-.002c.337-.19.674-.382 1.01-.57.195-.103.24-.195.115-.39-.483-.76-.96-1.523-1.44-2.288Zm-6.79 3.548-.002-.001a107.2 107.2 0 0 0-1.567-.88c-.227-.125-.162-.239-.072-.397l.003-.005.053-.085 2.273-3.617v5.375l-.688-.39Zm2.236-12.503a3.921 3.921 0 0 1 1.788-.07c.504.253.641.081.607-.446-.03-.558-.03-1.11-.03-1.665 0-.271 0-.543-.004-.816l.011-.006-.011-.004v-.008a1.42 1.42 0 0 0-.065-.009c-.536-.136-1.076-.111-1.614-.086-.29.013-.578.027-.866.015-.186-.01-.18.149-.174.28l.002.064c-.005.413-.005.828-.005 1.245 0 .417 0 .835-.006 1.253-.012.31.092.333.367.253Zm.195 3.415c-.47-.011-.94-.023-1.41-.011-.803-.012-.917.126-.848.94.034.4.16.618.619.572a9.66 9.66 0 0 1 1.088-.033h.002c.18.002.36.003.54 0l.008.01h.035c.997.012 1.983.023 2.98.023.905 0 .917 0 .882-.905-.011-.057-.011-.115-.011-.172.023-.344-.126-.458-.47-.447-1.146.023-2.28.023-3.415.023Zm1.016 6.957c.387.032.776.064 1.15-.115.003-.164.003-.328.003-.492 0-.327 0-.65.031-.963.046-.525-.102-.72-.601-.462l-.006-.008a5.288 5.288 0 0 0-.396.032c-.242.026-.482.051-.728.014-1.031-.15-1.031-.138-1.031.94 0 1.043 0 1.066 1.031 1.031.18-.007.364.008.547.023Zm.347-3.22c-1.146.252-2.051-.173-2.82-1.1h1.617c.448 0 .896-.004 1.342-.007h.001c.445-.002.887-.005 1.327-.005.019 0 .045-.006.075-.012.119-.025.285-.06.166.206l-.025.005.014.007c-.447.504-.998.848-1.697.905Zm-2.877-4.918h4.745c-.398-.535-.842-.844-1.399-1.005l.001-.003c-1.272-.459-2.705-.034-3.347 1.008Zm2.889-20.309c-1.009.264-2.132-.114-2.843-1.043h3.381c.099 0 .197-.002.296-.003.244-.005.487-.01.725.015.25.022.173.124.026.226l.008.003c-.436.447-.951.756-1.593.802Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M29.022 13.926c.19.043.378.086.567.126 0-.596.002-1.191.003-1.787a420.97 420.97 0 0 0-.003-3.589c0-.309.058-.573.241-.848.802-1.203.447-2.636-.837-3.278-.332-.16-.435-.355-.424-.699.013-.582.012-1.169.01-1.757-.002-.441-.003-.884.002-1.326.011-.39-.023-.78-.527-.768-.482.012-.608.356-.608.791.006.533.006 1.066.006 1.599 0 .533 0 1.066.005 1.599 0 .252-.057.39-.309.516-1.34.676-1.72 2.131-.883 3.358.184.263.253.538.253.848v5.318c.189-.04.38-.078.573-.115.192-.037.384-.074.573-.114h-.012c-.116-.963-.103-1.93-.09-2.9.008-.553.015-1.108-.001-1.662-.012-.344.091-.47.447-.47.344 0 .458.103.458.459a202.103 202.103 0 0 0-.013 3.43l.002 1.143c.189.04.378.083.567.126Zm-.98-8.459c-.619.012-1.077.47-1.077 1.09 0 .607.481 1.1 1.066 1.088.584-.012 1.1-.539 1.1-1.1 0-.608-.481-1.078-1.089-1.078Z"
                          fill="#24A7D0"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in New-zealand
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 10 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/new-zealand-colleges"
                      >
                        Check 10 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          10
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          35.38 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Study in New Zealand"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/new-zealand/article/study-in-new-zealand-requirements-cost-scholarships"
                    >
                      Study in New Zealand
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Top Courses and Universities"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/new-zealand/article/top-courses-and-universities-in-new-zealand-for-international-students"
                    >
                      Top Courses and Universities
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Job Opportunities"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/new-zealand/article/work-in-new-zealand-job-opportunities-and-work-permit"
                    >
                      Job Opportunities
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Student Visa"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/new-zealand/article/student-visa-new-zealand-cost-application-processing-time"
                    >
                      Student Visa
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 8*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          d="M50.063 40.917c.033 0 .065 0 .097.01v.54h-.097v-.55Z"
                          fill="#D8F2E7"
                        />
                        <path
                          d="M16.186 19.727c.367.162.647.42.874.745.118.237 0 .453-.065.668a15.834 15.834 0 0 0-.777 5.06c.022 1.533 0 3.076 0 4.608 0 .29 0 .571-.14.83-.313.378-.69.67-1.08.96 0-2.492-.031-4.984 0-7.465.033-1.867.476-3.669 1.188-5.406ZM33.815 13.599c-.119.367-.442.572-.67.863a.543.543 0 0 1-.366-.054c-1.122-.474-2.298-.733-3.517-.83-1.92-.205-3.755.129-5.556.776-.216.076-.41.238-.659.119-.302-.237-.604-.475-.733-.852 3.236-1.533 6.57-1.694 9.98-.702.54.151 1.035.41 1.52.68ZM39.825 31.66c.032-2.18.107-4.37.097-6.55-.011-1.531-.443-2.998-.971-4.433.161-.4.388-.723.874-.756.981 2.406 1.316 4.91 1.186 7.51-.086 1.694-.075 3.398-.108 5.092-.431-.194-.712-.593-1.078-.863Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.056 44.143c-.432.367-.788.809-1.079 1.295.01 2.923.01 6.71 0 9.634 0 .81.119.928.939.928h24.146c.82 0 .938-.108.938-.917 0-1.539.003-3.345.006-5.15.002-1.801.005-3.601.005-5.132-.17-.311-.41-.56-.652-.807-.144-.147-.287-.295-.416-.455-.196.169-.186.397-.177.617.002.046.004.093.004.138-.005.637-.005 1.543-.005 2.45 0 .905 0 1.812-.005 2.448 0 .561-.054.615-.615.615-1.737.01-3.474.01-5.212 0-.55 0-.614-.065-.614-.626-.011-1.219-.011-2.438 0-3.657a7.95 7.95 0 0 0-.173-1.597c-.669-3.14-4.1-5.006-7.088-3.873-2.17.82-3.55 2.794-3.593 5.135-.013.759-.01 1.517-.009 2.275.001.57.003 1.138-.002 1.707 0 .593-.054.647-.647.647l-1.004-.002c-.669-.003-1.338-.005-2.006.002-.37-.012-.737-.01-1.104-.009a38.8 38.8 0 0 1-.828-.002c-.582-.01-.636-.065-.636-.658-.006-.561-.006-1.34-.006-2.12s0-1.56-.005-2.12c0-.04 0-.08.002-.12.005-.23.01-.453-.164-.646Zm11.295 5.44v.001a429 429 0 0 0 .012 4.84c0 .41-.108.508-.507.497a46.367 46.367 0 0 0-2.74 0c-.346.011-.421-.108-.41-.431.004-1.337.003-2.672.001-4.01-.001-1.783-.003-3.567.01-5.355.01-1.953 1.326-3.572 3.16-4.057.4-.108.486 0 .475.388v6.517l-.001 1.606v.004Zm1.08-1.62.001-1.627c.002-1.627.004-3.253-.012-4.88 0-.41.119-.474.486-.366 1.79.474 3.118 2.028 3.15 3.894.028 2.033.024 4.065.021 6.097a709.717 709.717 0 0 0 0 3.484c0 .291-.086.367-.366.367-.95-.01-1.899-.022-2.848 0-.357.01-.443-.097-.443-.453.016-1.627.014-3.26.012-4.89v-.005l-.001-1.622Zm7.375 6.946a251.475 251.475 0 0 0 1.456 0c.724-.002 1.443-.004 2.163.012.378.011.54-.054.518-.485a54.156 54.156 0 0 1 0-2.956c.01-.324-.065-.454-.432-.454-1.985.022-3.97.022-5.955 0-.356 0-.421.119-.41.432a55.94 55.94 0 0 1 0 3.01c-.022.4.13.464.485.453.728-.016 1.45-.014 2.175-.012Zm-17.053-3.85c.594-.006 1.184-.008 1.775-.011l1.775-.01c.248 0 .345.064.345.334-.01 1.078-.01 2.147 0 3.225 0 .26-.086.335-.345.335-1.187-.022-2.362-.022-3.549-.022l-.012-.01c-.303.004-.607.005-.912.006-.463 0-.926.002-1.386.015-.323.01-.377-.13-.377-.41.01-1.025.01-2.039 0-3.064 0-.28.043-.42.377-.41.46.013.923.014 1.386.016.309 0 .617.001.923.006Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.351 47.095c.195-.25.389-.501.66-.687.294-.196.505-.47.714-.743.137-.178.273-.355.43-.508.653-.822 1.336-1.62 2.017-2.416.231-.27.462-.54.691-.81.548-.655 1.1-1.31 1.653-1.966.785-.932 1.571-1.866 2.35-2.803.322-.387.647-.77.972-1.154a88.781 88.781 0 0 0 1.747-2.104c.593-.755.56-1.446-.097-2.115a25.712 25.712 0 0 1-.187-.189c-.25-.255-.501-.512-.795-.728-.237-.183-.248-.367-.032-.582l.22-.219c.22-.219.443-.44.654-.666a.492.492 0 0 1 .431-.151c1.176.13 2.363.118 3.539.032.917-.065 1.543.237 2.071.917l.076.076c.27.248.237.485-.022.723-.29.264-.545.568-.8.87l-.203.24c-.604.702-.594 1.414.032 2.115.393.44.788.879 1.182 1.316.602.669 1.203 1.336 1.796 2.008l.76.857c1.873 2.111 3.748 4.225 5.649 6.306.367.454.733.896 1.197 1.252.298.196.518.465.738.736.107.131.214.263.33.386 1.004 1.057 1.932 1.09 2.946.054.992-1.007 1.975-2.014 2.959-3.021.491-.503.982-1.007 1.475-1.51.291-.302.55-.615.594-1.058.054-.096.048-.196.042-.298a.905.905 0 0 1 0-.177c.066-.658-.334-1.068-.776-1.445-.513-.432-1.025-.866-1.538-1.3-.512-.435-1.025-.869-1.537-1.3-1.172-.986-2.345-1.981-3.517-2.976l-1.759-1.491c-.231-.146-.428-.334-.626-.521-.152-.145-.305-.29-.474-.418-.28-.248-.57-.488-.858-.728-.289-.24-.577-.48-.858-.728a61.246 61.246 0 0 0-2.212-1.867c-.787-.647-1.424-.604-2.136.097l-.241.237c-.216.21-.433.42-.622.648-.216.27-.388.248-.604.01a6.874 6.874 0 0 0-.317-.325 9.56 9.56 0 0 1-.244-.246c-.108-.108-.184-.216-.162-.378.137-1.241.104-2.483.071-3.724a139.1 139.1 0 0 1-.017-.678c-.01-.722.28-1.219.723-1.704.291-.324.54-.356.852-.043l.178.179c.179.18.359.363.545.533.982.906 1.63.874 2.611-.011.183-.165.363-.332.543-.499.596-.552 1.19-1.1 1.852-1.572.26-.313.54-.626.917-.81.119-.172.26-.323.421-.474l1.521-1.36c.62-.556 1.236-1.114 1.85-1.672.616-.559 1.23-1.117 1.851-1.673l.532-.473c1.108-.986 2.22-1.974 3.298-2.979.982-.917.96-1.953.022-2.902a416.701 416.701 0 0 0-2.18-2.19 416.701 416.701 0 0 1-2.18-2.19c-.377-.378-.776-.67-1.315-.745h-.863c-.56.31-.961.794-1.36 1.275l-.097.117c-1.78 2.147-3.56 4.294-5.373 6.409-.234.272-.46.551-.685.831-.48.597-.961 1.193-1.527 1.715-.267.178-.461.423-.655.667-.04.051-.08.102-.122.153-.916 1.003-1.769 2.06-2.621 3.117-.615.767-.529 1.468.183 2.137.173.162.346.324.507.485.334.334.5.501.505.672.003.172-.159.347-.483.699l-.07.076c-.153.17-.297.33-.588.301-1.338-.15-2.687-.108-4.025-.043-.798.043-1.305-.259-1.801-.798-.227-.26-.238-.443-.022-.69.136-.162.281-.315.427-.468.226-.236.451-.473.641-.741.486-.69.496-1.327-.065-1.953a29.553 29.553 0 0 1-.402-.462c-.31-.362-.62-.724-.968-1.048-.124-.142-.25-.283-.376-.424-.249-.277-.5-.556-.735-.85a5.73 5.73 0 0 0-.81-.809c-.437-.313-.779-.722-1.118-1.129-.13-.154-.258-.308-.392-.457a344.358 344.358 0 0 1-3.005-3.362l-1.18-1.331-.55-.617a207.502 207.502 0 0 0-2.353-2.62c-.626-.69-1.716-.82-2.32-.226a223.286 223.286 0 0 0-5.038 5.07c-.702.723-.604 1.748.13 2.45.266.258.547.493.831.731l.182.153c.683.58 1.366 1.157 2.049 1.734 1.312 1.108 2.622 2.216 3.928 3.337.268.23.54.452.814.675.653.532 1.306 1.064 1.884 1.688.148.205.338.373.527.54.1.088.2.176.293.27.597.47 1.174.968 1.753 1.465l.49.422c.138.131.283.244.428.358.106.083.213.166.317.257.799.702 1.716.626 2.395-.183a10.918 10.918 0 0 1 .79-.867c.074-.077.148-.155.279-.136.28.043.981.981.97 1.305a76.707 76.707 0 0 0-.01 4.456c.01.431-.097.766-.378 1.068-.091.097-.186.192-.28.286-.095.094-.19.189-.28.286-.238.259-.454.237-.68-.011-.284-.32-.606-.586-.934-.857a36.144 36.144 0 0 1-.178-.146c-.56-.475-1.208-.507-1.834-.108-.27.168-.491.39-.713.614-.106.106-.211.213-.323.314-.502.428-.989.874-1.475 1.32-.444.407-.887.813-1.34 1.204-.125.17-.29.298-.455.424-.222.17-.442.34-.56.612-.13.151-.259.302-.399.432-1.003.917-2.018 1.823-3.032 2.73-.504.453-1.004.91-1.504 1.365-1.01.92-2.017 1.84-3.049 2.734-1.262 1.09-1.316 2.028-.13 3.204 1.5 1.478 2.99 2.946 4.49 4.413.808.799 1.747.766 2.556-.043.142-.142.264-.3.386-.457ZM43.926 4.687c-.14-.14-.313-.237-.636-.259-.175-.008-.312.144-.454.304a3.418 3.418 0 0 1-.129.138c-.458.54-.912 1.082-1.365 1.624-.453.543-.906 1.085-1.364 1.624-.162.183-.173.291.01.475.637.614 1.251 1.24 1.866 1.866.184.194.314.238.519.022a509.88 509.88 0 0 1 3.42-3.42c.194-.195.205-.324 0-.518-.313-.308-.623-.618-.934-.928-.31-.31-.62-.62-.933-.928ZM7.05 10.243c-.021-.194.076-.345.205-.474l.37-.383c.502-.517 1.001-1.031 1.486-1.56.216-.237.345-.194.55.011a333.76 333.76 0 0 0 3.377 3.388c.216.216.227.335 0 .55a58.16 58.16 0 0 0-1.823 1.824c-.184.194-.324.216-.54.032-.83-.718-1.666-1.425-2.504-2.133l-.883-.747c-.162-.13-.26-.292-.238-.508Zm30.304 24.285c.029.02.058.042.09.066l.026-.016a.75.75 0 0 0 .189-.146c.496-.496.992-.992 1.489-1.478.172-.162.108-.27-.033-.388-.124-.102-.245-.208-.366-.313-.122-.105-.243-.21-.367-.313a362.86 362.86 0 0 1-3.097-2.643c-.28-.238-.474-.238-.712.054-.291.356-.604.701-.928 1.036-.172.183-.172.29.011.474a542.73 542.73 0 0 1 2.353 2.35c.392.394.783.787 1.175 1.178.052.052.108.093.17.139Zm6.818 2.541c.03-.038.062-.08.1-.123a7.37 7.37 0 0 1-.062-.056c-.07-.063-.132-.12-.207-.17a818.91 818.91 0 0 0-.86-.728c-.914-.772-1.83-1.546-2.733-2.325-.194-.162-.313-.162-.486.021-.485.497-.97.993-1.478 1.478-.205.194-.183.324.011.518 1.111 1.1 2.212 2.201 3.302 3.312.194.205.323.205.517 0 .437-.452.885-.898 1.331-1.343h.001l.001-.002h.001l.447-.446c.042-.042.077-.087.115-.136Zm4.848 4.16c.01.303-.13.486-.292.659l-.297.296c-.496.495-.995.993-1.472 1.506-.194.194-.302.205-.507.01a255.878 255.878 0 0 0-3.42-3.42c-.184-.183-.238-.302-.022-.507a61.059 61.059 0 0 0 1.867-1.866c.194-.195.313-.195.528-.011.545.464 1.093.925 1.64 1.386.548.461 1.095.923 1.64 1.387l.013.01c.18.148.374.308.322.55Zm-7.035-.388c.139.009.208.087.274.162l.05.054 1.087 1.09h.001l.002.002v.001l.002.001.001.001.001.002.012.011.005.005.001.002c.741.743 1.485 1.489 2.233 2.23.237.226.237.377 0 .604-.346.33-.682.671-1.017 1.012l-.505.509c-.42.41-.701.42-1.09-.01-.784-.854-1.555-1.72-2.33-2.59l-.615-.69c-.162-.173-.248-.324-.021-.54.436-.42.86-.847 1.286-1.275h.001l.428-.43c.043-.042.09-.076.133-.106.022-.015.043-.03.061-.045Zm-.81-.76a9.15 9.15 0 0 1-.058.064c-.041.043-.079.084-.114.124l-.397.396c-.4.398-.8.796-1.188 1.201-.195.194-.313.216-.508 0a498.262 498.262 0 0 0-3.193-3.55c-.162-.183-.119-.29.032-.442.497-.485.993-.982 1.478-1.478.151-.162.26-.194.432-.01a508.955 508.955 0 0 0 3.41 3.42c.053.064.107.129.161.215l-.033.037-.021.023Zm-8.458-8.616c.097.087.173.162.248.238.382.381.762.763 1.142 1.144.76.761 1.517 1.521 2.279 2.276.226.227.259.367.01.604-.463.432-.895.874-1.327 1.327-.194.194-.302.216-.496-.021a189.082 189.082 0 0 0-3.118-3.485c-.259-.28-.291-.475 0-.756.274-.257.518-.54.763-.823l.251-.288c.05-.049.102-.093.157-.139.03-.025.061-.05.091-.077ZM12.152 46.83c.152.151.303.26.518.237.238.022.4-.129.54-.302.382-.45.762-.9 1.142-1.353.587-.697 1.175-1.394 1.77-2.088.18-.2.092-.287-.042-.42l-.011-.012-.461-.46h-.001v-.001h-.001l-.001-.002c-.464-.461-.93-.926-1.392-1.403-.194-.195-.313-.205-.518 0a341.634 341.634 0 0 1-3.42 3.43c-.216.206-.183.335.011.518.469.453.932.918 1.398 1.386l.469.47ZM48.9 9.844c.01.28-.119.475-.291.637a444.44 444.44 0 0 1-1.672 1.516c-.559.504-1.117 1.008-1.673 1.515-.162.152-.259.12-.399-.021a140.014 140.014 0 0 0-1.791-1.791c-.183-.173-.13-.28.022-.432 1.166-1.166 2.33-2.33 3.495-3.506.13-.13.227-.205.389-.032.38.395.772.781 1.163 1.167a128 128 0 0 1 .584.58c.12.12.184.238.173.367ZM11.063 37.921l-.033-.025c-.04.026-.081.05-.122.072-.058.032-.114.062-.158.1l-1.102.99c-.752.67-1.505 1.344-2.243 2.031-.313.292-.356.659-.01.993l.55.547v.002h.001c.366.363.73.725 1.088 1.09.184.184.292.184.475 0a346.31 346.31 0 0 1 3.453-3.462c.172-.173.205-.292.01-.475-.428-.413-.845-.831-1.263-1.251l-.42-.422a2.368 2.368 0 0 0-.226-.19Zm1.38-33.18a.69.69 0 0 1 .573.248c.427.478.85.958 1.275 1.439.57.647 1.142 1.294 1.724 1.938.162.173.151.28-.01.432a64.065 64.065 0 0 0-1.705 1.715c-.184.194-.313.162-.486-.01a346.844 346.844 0 0 0-3.453-3.464c-.161-.162-.183-.28-.01-.442.373-.367.742-.738 1.113-1.11.185-.188.372-.375.559-.563.097-.13.248-.183.42-.183Zm5.244 11.523c.035-.04.07-.081.108-.119a2.32 2.32 0 0 1-.024-.05.382.382 0 0 0-.051-.09c-1.165-1.198-2.33-2.385-3.496-3.571-.14-.151-.248-.087-.356.032l-1.899 1.899c-.119.118-.194.216-.032.356a536.863 536.863 0 0 1 3.776 3.183c.216.172.345.064.496-.087.3-.321.605-.638.909-.953l.461-.482c.038-.037.073-.078.108-.118Zm2.678 21.99a.888.888 0 0 1-.088.138 881.5 881.5 0 0 0-3 3.56c-.226.27-.388.281-.625.011a42.352 42.352 0 0 0-1.705-1.704c-.205-.195-.194-.313.01-.508.749-.733 1.487-1.476 2.225-2.22l1.11-1.113.04-.043c.093-.1.188-.202.348-.033.539.55 1.078 1.09 1.628 1.639l.001.001c.023.03.046.072.073.121l.035.063c-.02.03-.036.06-.052.088ZM41.25 11.592c.027-.036.055-.072.087-.108a1.287 1.287 0 0 1-.091-.103c-.021-.026-.04-.05-.06-.07-.264-.268-.53-.532-.795-.796-.354-.353-.71-.706-1.06-1.07-.227-.236-.346-.095-.472.054a486.145 486.145 0 0 0-1.509 1.785v.001l-.001.002h-.001l-.001.002c-.49.58-.98 1.162-1.47 1.738-.215.248-.215.432.044.669.474.442.928.906 1.37 1.37.173.183.291.237.507.022.688-.708 1.384-1.404 2.08-2.1h.001c.418-.418.836-.835 1.253-1.256.044-.044.08-.091.118-.14Zm2.914 2.86-.013.015c-.033.045-.081.11-.138.168l-.862.766-.001.001-.002.002c-.902.801-1.805 1.604-2.696 2.413-.172.162-.28.14-.431-.021a64.123 64.123 0 0 0-1.479-1.49c-.194-.193-.15-.312.022-.485a491.905 491.905 0 0 0 3.344-3.354v-.001c.163-.162.27-.194.443-.01.55.56 1.111 1.12 1.672 1.682l.013.015c.062.071.128.147.128.298Zm-26.64 21.224c.076-.072.154-.145.163-.273-.02-.027-.036-.054-.05-.078l-.011-.018-.007-.011-.007-.011c-.27-.275-.542-.548-.815-.82-.272-.273-.545-.545-.814-.82-.145-.145-.23-.065-.323.022l-.033.032a484.714 484.714 0 0 1-3.507 3.161c-.216.205-.237.345-.01.561a42.226 42.226 0 0 1 1.553 1.554c.205.215.345.237.561.01 1.079-1.09 2.169-2.179 3.258-3.269l.042-.04Zm1.091-20.383-.052-.047c-.073-.064-.135-.119-.196-.18-.367-.366-.733-.734-1.1-1.102a475.03 475.03 0 0 0-2.201-2.2c-.195-.194-.216-.312 0-.506.56-.53 1.1-1.08 1.629-1.64.194-.205.302-.162.464.021a476.91 476.91 0 0 0 3.118 3.474c.205.227.215.389-.033.615-.325.295-.634.61-.942.926-.131.134-.263.269-.395.401a6.184 6.184 0 0 0-.159.129l-.133.109Zm3.744 15.503.054-.064c-.01-.168-.11-.236-.21-.305l-.027-.019-.314-.283c-.266-.237-.532-.476-.787-.731-.248-.248-.453-.227-.69-.01l-1.206 1.084-.001.002c-.765.689-1.53 1.378-2.3 2.064-.248.215-.183.345.022.539.453.432.895.874 1.327 1.327.205.227.334.238.55.01.566-.57 1.136-1.14 1.705-1.71.569-.568 1.138-1.137 1.704-1.71.064-.063.121-.132.173-.194Zm2.438 2.115c-.015.11-.088.186-.16.26-.027.028-.053.056-.077.086l-.983 1.173c-.718.856-1.435 1.71-2.146 2.57-.183.227-.324.28-.55.043a27.369 27.369 0 0 0-1.37-1.37c-.205-.194-.195-.323.01-.518a268.142 268.142 0 0 0 3.496-3.506c.216-.216.356-.216.572 0 .2.207.417.397.632.586.133.117.265.233.393.353l.042.045c.075.08.15.16.141.278Zm.035-14.485c.016-.03.032-.06.052-.09-.097-.13-.184-.249-.27-.367l-.34-.378c-.113-.127-.227-.254-.34-.378-.283-.312-.564-.625-.845-.937a285.212 285.212 0 0 0-1.604-1.77c-.017-.02-.034-.043-.052-.067-.08-.111-.172-.237-.358-.042-.355.38-.723.754-1.09 1.126l-.366.374c-.13.13-.195.226-.033.388.794.801 1.583 1.607 2.37 2.412l.002.002 1.167 1.19c.119.13.237.216.4.032.199-.226.404-.453.609-.68.205-.226.41-.453.61-.68a.573.573 0 0 0 .088-.135Zm14.487.298c-.01.143-.107.218-.2.29l-.015.012-1.754 1.586a987.98 987.98 0 0 0-1.753 1.586c-.194.172-.345.194-.55 0-.41-.4-.842-.788-1.273-1.155-.19-.158-.102-.254.013-.38l.008-.008 3.507-3.571c.14-.14.28-.227.453-.054l1.489 1.553c.024.033.043.072.06.108l.015.033Zm-2.67-2.525c.032-.038.066-.078.103-.119a3.783 3.783 0 0 1-.047-.062c-.054-.071-.102-.135-.17-.186l-.34-.339c-.343-.341-.687-.683-1.019-1.031-.215-.237-.334-.205-.528.043-.799.982-1.619 1.953-2.45 2.913-1.132 1.295-1.122 1.392.27 2.439.27.204.4.161.615-.055.68-.692 1.363-1.377 2.046-2.06v-.001c.456-.456.91-.912 1.364-1.37.053-.053.102-.11.155-.172ZM22.541 20.88c.01.153-.066.23-.138.3l-.013.013-.326.356c-.218.238-.436.475-.645.712-.183.205-.367.184-.56.011h-.001a576.965 576.965 0 0 0-3.927-3.323c-.194-.162-.119-.248.01-.377l.498-.495c.33-.328.658-.653.98-.983.141-.14.238-.173.39-.011.598.604 1.197 1.205 1.796 1.807l1.796 1.807a.931.931 0 0 1 .11.14l.03.043Zm5.546 7.401a2.697 2.697 0 1 0 0-5.394 2.697 2.697 0 0 0 0 5.394Z"
                          fill="#24A7D0"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in Netherlands
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 21 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/netherlands-colleges"
                      >
                        Check 21 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          21
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          16.80 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in Netherlands"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/netherlands/article/why-study-in-the-netherlands"
                    >
                      Why Study in Netherlands
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Exams for Studying in Netherlands"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/netherlands/article/study-in-netherlands-test-requirements-score-exam-fee"
                    >
                      Exams for Studying in Netherlands
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="SOP for Netherlands"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/netherlands/article/statement-of-purpose-for-netherlands"
                    >
                      SOP for Netherlands
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/netherlands/article/study-in-the-netherlands-admission-cycle-process-deadlines-requirements"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 9*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          d="M22.315 3.285c0-.835.012-1.67 0-2.507 0-.332.08-.595.367-.778h5.563c.275.183.366.446.366.767.023.847.058 1.683.092 2.53h-1.145c-.355-.252-.263-.641-.274-.996-.035-.779-.126-.882-.905-.882-.64 0-1.282-.011-1.923 0-.56.012-.675.15-.721.71-.034.4.126.847-.286 1.156h-1.134Z"
                          fill="#24A7D0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M19.488 36.414v.687c.092 1.27.103 2.54.092 3.812.023 1.602.045 3.205.126 4.807.148 3.068.423 6.136.732 9.204.092.916.252 1.076 1.168 1.076H35.4c.172 0 .343 0 .515-.023.343-.046.526-.206.538-.595a50.594 50.594 0 0 0-.08-3.732c-.21-3.55-.64-7.09-1.069-10.618l-.053-.44a3.035 3.035 0 0 1 0-.79c.64-4.441 1.087-8.906 1.19-13.393.039-1.711.056-3.417.074-5.125.01-.851.018-1.703.03-2.556.034-2.072.01-4.144-.023-6.216a1022.39 1022.39 0 0 0-.126-8.38c-.012-.744-.287-1.064-1.008-1.076-2.037-.034-4.086-.057-6.124.012a8.108 8.108 0 0 0-1.18 0 47.037 47.037 0 0 0-4.017 0 7.951 7.951 0 0 0-1.168 0 7.961 7.961 0 0 0-.904-.034c-.893.034-1.236.343-1.168 1.224.057.61.085 1.219.113 1.824.011.248.023.495.036.74.015.28.04.558.066.836.073.798.147 1.598-.032 2.404-.984 4.568-1.408 9.192-1.419 13.863-.003.155-.003.31-.003.465-.001.543-.002 1.087-.1 1.63v.915c.08.115.08.23 0 .344v.687c.075.15.067.314.058.477-.004.086-.009.172 0 .255V33.37a1.88 1.88 0 0 0 0 .264c.009.167.017.334-.058.491v.23a.893.893 0 0 1 0 .686v.687c.065.073.06.157.057.24-.002.035-.003.07 0 .103-.003.034-.002.069 0 .103.004.084.008.168-.057.24ZM33.008 4.33l-.834-.003-.813.003c-.542.002-1.084.005-1.626-.003-.286-.011-.355.069-.297.355.16.893.32 1.786.457 2.69.045.298.217.298.425.298h.022c.493 0 .984-.002 1.475-.003.981-.002 1.96-.005 2.944.003.286 0 .412-.057.389-.378a66.979 66.979 0 0 1-.115-2.621c0-.275-.103-.344-.366-.344-.557.008-1.108.005-1.661.003ZM21.825 14.619l.041.574c.041.587.082 1.171.142 1.75.035.32-.057.39-.354.39-.298 0-.401-.092-.355-.401.119-.836.218-1.681.316-2.518l.016-.138c.178-.007.167.093.157.189-.007.064-.013.127.037.154Zm3.088-6.961.678.001c.928 0 1.843 0 2.782.012.31.011.458-.035.39-.4-.13-.645-.239-1.289-.348-1.933l-.11-.644c-.035-.228-.104-.366-.39-.366a412.44 412.44 0 0 1-5.323 0c-.286 0-.355.092-.332.366l.03.418v.001c.049.708.098 1.417.108 2.134.011.378.16.435.48.424.679-.017 1.357-.015 2.035-.013Zm.541 4.842h.005l.75.002.739-.002a84.315 84.315 0 0 1 2.215.013c.366.011.47-.103.4-.458-.133-.694-.249-1.395-.364-2.093V9.96l-.128-.768c-.045-.252-.126-.389-.435-.389-1.9.011-3.812.011-5.723 0-.344 0-.412.126-.39.435.08.939.16 1.889.207 2.839.023.355.148.435.48.435a86.314 86.314 0 0 1 2.243-.013h.001Zm.537 4.842a260.855 260.855 0 0 0 1.576 0h.008c.794-.002 1.591-.004 2.39.013.354 0 .48-.069.411-.446-.183-.973-.332-1.946-.48-2.92-.046-.263-.172-.343-.424-.343a564.1 564.1 0 0 1-6.239 0c-.252 0-.378.069-.343.355.103.985.194 1.969.263 2.954.023.32.149.4.458.4.79-.017 1.587-.015 2.38-.013Zm1.375 4.81-.822-.002h-.002c-.825-.002-1.649-.004-2.473.013-.298 0-.435-.057-.458-.39a82.576 82.576 0 0 0-.298-2.895c-.034-.287.023-.401.344-.401 2.198.011 4.396.011 6.582 0 .298 0 .39.126.435.39.149.96.298 1.91.458 2.872.057.332-.035.424-.366.424-.842-.017-1.696-.015-2.55-.013H28.189l-.822.002Zm-.163 4.829.85.001h3.468c.03 0 .061.003.093.005.17.013.354.026.296-.29-.171-1.031-.332-2.061-.48-3.092-.035-.24-.138-.309-.367-.309-2.324.012-4.647.012-6.971 0-.264 0-.32.103-.286.344.114.961.229 1.923.32 2.884.034.344.16.481.527.47.85-.017 1.7-.015 2.55-.013Zm.513 4.837c-.781-.007-1.565-.014-2.342.018-.48.023-.607-.149-.653-.584-.071-.727-.171-1.447-.272-2.171l-.082-.6c-.046-.274.034-.365.32-.365 2.358.011 4.716.011 7.086 0 .309 0 .378.148.412.412.126.961.263 1.911.424 2.873.057.332-.023.435-.367.435-.882-.017-1.758-.015-2.638-.013h-.008l-.88.002c-.331 0-.664-.004-.997-.007h-.003Zm.82 4.824.867.002.876-.002c.88-.002 1.765-.004 2.65.013.343.012.412-.091.355-.423a46.322 46.322 0 0 1-.4-2.816c-.035-.344-.138-.447-.481-.447-2.324.012-4.648.012-6.972 0-.378 0-.458.115-.4.458.024.157.05.313.075.47.125.782.25 1.564.337 2.346.045.366.194.412.503.412.865-.017 1.724-.015 2.586-.013h.005Zm4.496 1.146h-3.457l-1.167.003c-.78.003-1.56.005-2.347-.002-.31 0-.39.08-.332.389.194.973.355 1.946.504 2.919.045.274.137.377.423.377 2.29-.01 4.568-.01 6.857 0 .343 0 .412-.125.366-.434a82.718 82.718 0 0 1-.355-2.885c-.034-.344-.217-.367-.492-.367Zm-3.53 4.823c.27-.002.537-.003.806-.003h3.365c.23 0 .402 0 .435.332.092.961.195 1.923.332 2.884.057.39-.091.481-.458.47a584.996 584.996 0 0 0-6.353 0c-.332 0-.458-.103-.515-.424a55.6 55.6 0 0 0-.515-2.69c-.103-.458-.058-.618.48-.595.808.034 1.615.03 2.422.026h.002Zm2.354 4.829-.781-.002-.625.001h-.001a70.85 70.85 0 0 1-2.5-.023c-.434-.012-.503.148-.412.538.23.915.447 1.843.63 2.77.057.298.172.412.48.412 1.947-.012 3.893-.012 5.839 0 .366.011.446-.114.412-.458a79.255 79.255 0 0 1-.252-2.839c-.023-.309-.149-.412-.458-.412-.77.017-1.548.015-2.327.013h-.005Zm1.47-38.632a60.238 60.238 0 0 0-.58-.004l-.721.003c-.481.002-.962.005-1.443-.003-.32-.011-.435.057-.366.412.183.973.332 1.946.48 2.92.047.285.184.366.459.366 1.248-.012 2.495-.012 3.743 0 .298 0 .39-.104.378-.401-.023-.95-.046-1.9-.046-2.85.012-.344-.092-.47-.446-.458-.483.024-.972.02-1.458.015Zm1.297 43.473h-2.839l-.944.002h-.006c-.628.003-1.252.005-1.877-.002-.344 0-.412.091-.31.423.173.561.31 1.133.436 1.706.046.229.149.298.378.298 1.774-.012 3.56-.012 5.334 0 .263 0 .366-.08.343-.355a30.369 30.369 0 0 1-.103-1.763c-.01-.312-.172-.31-.372-.31h-.04Zm-1.536-34.939a56.797 56.797 0 0 0 .732 0h.007c.368-.002.735-.004 1.095.013.286.012.412-.069.4-.378a82.168 82.168 0 0 1-.01-2.907c.01-.332-.115-.424-.424-.424-1.157.023-2.301.023-3.457 0-.436-.011-.447.183-.39.515.16.928.32 1.866.458 2.805.046.32.183.4.481.39.37-.018.738-.016 1.108-.014Zm2.166 3.653v-.687h.046c0-.126-.002-.254-.004-.382-.005-.324-.01-.652.015-.98.023-.332-.057-.469-.423-.458-.905.023-1.81.023-2.713 0-.355-.011-.401.115-.344.424.09.522.17 1.049.249 1.574.042.281.085.562.129.841.126.824.137.824.996.824h.847c1.19 0 1.19 0 1.202-1.156ZM27.02 50.963c-.224-1.156-.45-2.323-.776-3.456l-.023-.017c-.038-.03-.076-.061-.114-.052h-.513a14.198 14.198 0 0 0-1.078.003h-.025l-.651.003c-.756.003-1.511.006-2.267.006-.309 0-.332.16-.309.4.023.31.049.619.074.928.051.618.102 1.236.132 1.854.023.39.126.515.527.515 1.022-.015 2.04-.01 3.058-.005H25.068c.506.003 1.012.005 1.52.005.04 0 .08.007.122.013.125.02.25.039.335-.116h-.104l.093-.011-.014-.07Zm-2.155 1.332h-.003l-1.09.009a94.411 94.411 0 0 0-.607-.01c-.405-.004-.81-.01-1.214-.025-.275-.011-.355.092-.32.367.08.572.148 1.133.183 1.705.023.275.103.367.378.355.357-.014.718-.015 1.081-.016.24-.001.482-.002.723-.007l.016.012h3.96l-.204-.809v-.003h-.001v-.002c-.108-.422-.211-.827-.31-1.235-.057-.23-.126-.378-.4-.367-.734.016-1.462.02-2.192.026Zm.475-9.584c-.013-.013-.026-.03-.04-.048-.02-.03-.042-.06-.064-.067H21.23c-.286 0-.286.172-.275.378.023.394.05.788.076 1.181.04.591.08 1.182.107 1.773.012.274.103.377.367.366.405-.015.804-.02 1.206-.026h.001l.601-.008.788.008h.002c.527.005 1.053.01 1.58.026.263.011.366-.046.298-.355a160.706 160.706 0 0 1-.641-3.228Zm9.763-17c-.019.305-.038.609-.045.916-.011.275-.126.378-.377.344h-.058c-1.568.057-1.568.057-1.774-1.523-.08-.606-.16-1.202-.275-1.797-.068-.332.046-.378.332-.378.641.012 1.282.012 1.923 0 .298-.011.401.08.378.39-.034.35-.049.705-.064 1.058l-.016.361c0 .011.011.011.011.011-.009.208-.022.413-.035.618Zm-12.691 6.124c-.2-.015-.4-.03-.598-.022-1.19.034-1.19.012-1.18-1.19 0-.687.012-1.374.035-2.05l-.001-.065c-.005-.166-.011-.37.23-.37.241.004.482-.005.723-.014.526-.019 1.049-.038 1.567.072-.138.137-.218.297-.184.503.069.527.046 1.053.023 1.58-.046.607.023 1.133.607 1.454-.4.162-.811.132-1.222.102Zm.006 9.6h.001c.189-.001.376-.003.563-.006l.437.007h.016c.449.006.902.013 1.355.038.344.012.355-.137.298-.412a28.715 28.715 0 0 1-.287-1.682c-.125-.837-.188-1.255-.43-1.45-.241-.195-.658-.17-1.49-.12l-.014-.01c-.584 0-1.168 0-1.752-.023-.297-.011-.377.103-.366.4.058.95.092 1.9.115 2.851 0 .298.091.458.423.435a20.77 20.77 0 0 1 1.13-.028h.001Zm-.275-4.796h.002c.24-.001.48-.002.722-.007l.266-.001c.27-.002.544-.004.81.013.31.023.423-.069.366-.412-.091-.504-.163-1.018-.234-1.532-.035-.257-.071-.514-.11-.77-.073-.51-.11-.767-.258-.885-.151-.12-.417-.093-.954-.041l-.584-.01h-.001c-.389-.005-.778-.01-1.167-.025-.275 0-.378.092-.366.367.034.995.045 1.98.057 2.964.011.264.103.367.366.355.364-.014.724-.015 1.084-.016Zm-.192-9.68h.002c.3-.003.601-.005.902-.011.08-.109.072-.234.064-.361-.007-.114-.015-.23.04-.337-.03-.275-.06-.547-.092-.819a70.792 70.792 0 0 1-.092-.818c-.085-.71-.128-1.064-.328-1.23-.2-.167-.558-.144-1.274-.098h-.057c-.218-.012-.298.08-.31.297a265.212 265.212 0 0 1-.114 3.023c-.012.263.08.377.355.366.299-.006.6-.009.903-.012h.001Zm12.917 2.948.03-.406c.03-.74.045-1.088-.122-1.25-.148-.144-.439-.14-.988-.136h-.058c-.366-.045-.469.104-.412.458.16.95.32 1.912.424 2.874.037.374.235.373.45.373.048 0 .097 0 .145.005.343.045.424-.15.435-.435.026-.523.064-1.045.096-1.482Zm-13.872-9.436c-.026.28-.052.562-.075.845 0 .062-.003.126-.006.192a4.797 4.797 0 0 0-.005.209.67.67 0 0 1-.002.137c-.012.144-.023.295.207.286.144-.007.29.004.434.015.316.023.63.047.929-.118.03-.01.015-.113.004-.191l-.004-.026c-.038-.415-.08-.828-.121-1.24-.06-.588-.118-1.174-.165-1.76-.03-.355-.224-.35-.435-.345l-.08.002c-.043.002-.087 0-.13-.001-.204-.007-.401-.014-.42.344-.03.553-.08 1.101-.131 1.65Zm13.238 14.57c-.04-.28-.077-.56-.114-.841-.038-.28-.075-.561-.115-.842-.034-.217-.046-.4.275-.4.32 0 .32.16.297.389-.052.484-.095.967-.137 1.442l-.011.126-.01.02-.008.017c-.036.08-.068.149-.177.09Z"
                          fill="#48639E"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in Sweden
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 22 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/sweden-colleges"
                      >
                        Check 22 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          22
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          87.24 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in Sweden"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/sweden/article/study-in-sweden-best-universities-costs-scholarships"
                    >
                      Why Study in Sweden
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="SOP for Sweden"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/sweden/article/statement-of-purpose-for-sweden"
                    >
                      SOP for Sweden
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/sweden/article/university-admission-sweden-application-requirements-important-dates"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Scholarships"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/sweden/article/scholarships-in-sweden-for-international-students-university-funds-government-scholarships-fellowships-and-grants"
                    >
                      Scholarships
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 10*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={57}
                        viewBox="0 0 56 57"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 29C0 13.536 12.536 1 28 1s28 12.536 28 28-12.536 28-28 28S0 44.464 0 29Z"
                          fill="#F5F8F9"
                        />
                        <path
                          d="m17.374 45.114-2.5 9 1.252.348 2.5-9-1.252-.348Zm6.501 1.995-2 7 1.25.357 2-7-1.25-.357Zm7.002 1.992-1.5 5 1.246.373 1.5-5-1.246-.373Zm-5-34.5-1.5 5 1.246.373 1.5-5-1.246-.373Zm6.5 2-1.5 5 1.246.373 1.5-5-1.246-.373Zm7 2-1.5 5 1.246.373 1.5-5-1.246-.373Zm-16.5 7-1.5 5 1.246.373 1.5-5-1.246-.373Zm6.5 2-1.5 5 1.246.373 1.5-5-1.246-.373Zm7 2-1.5 5 1.246.373 1.5-5-1.246-.373Zm-16.5 6-1.5 5 1.246.373 1.5-5-1.246-.373Zm6.5 2-1.5 5 1.246.373 1.5-5-1.246-.373Zm7 2-1.5 5 1.246.373 1.5-5-1.246-.373Z"
                          fill="#24A7D0"
                        />
                        <path
                          d="m26 7.288-.621-.192-.194.63.632.185.183-.623Zm1.717-5.582.622.191-.622-.19Zm1.212-.672.166-.629-.166.629Zm15.085 3.993-.166.628.166-.628Zm.706 1.241-.625-.178.625.178ZM43 12.288l-.183.623.628.185.18-.63-.625-.178ZM7.837 53.028l-.627-.168.627.169ZM20.238 6.766l-.628-.168.628.168Zm1.236-.704-.175.626.175-.626Zm26.571 7.459.176-.626-.176.626Zm.695 1.225.627.17-.627-.17ZM38.2 53.55l-.627-.17.627.17ZM26.621 7.479l1.718-5.582-1.243-.382-1.717 5.581 1.242.383Zm2.142-5.817 15.085 3.993.333-1.257L29.095.405l-.332 1.257ZM44.095 6.09l-1.72 6.019 1.25.357 1.72-6.02-1.25-.356Zm-.912 5.574-17-5-.366 1.247 17 5 .366-1.247Zm.665-6.009c.19.05.3.246.247.435l1.25.357a1.65 1.65 0 0 0-1.164-2.049l-.333 1.257Zm-15.51-3.758a.35.35 0 0 1 .425-.235l.332-1.257a1.65 1.65 0 0 0-1.999 1.11l1.243.382ZM0 54.937h8.803v-1.3H0v1.3Zm8.803 0h28.432v-1.3H8.803v1.3Zm28.432 0H53.5v-1.3H37.235v1.3Zm-28.77-1.74 12.4-46.264-1.255-.336L7.21 52.86l1.255.337ZM21.3 6.687l26.57 7.458.352-1.251L21.65 5.435l-.351 1.252Zm26.814 7.887L37.573 53.38l1.255.341 10.54-38.805-1.255-.34ZM37.573 53.38a.35.35 0 0 1-.338.259v1.3a1.65 1.65 0 0 0 1.593-1.218l-1.255-.34ZM47.87 14.145a.35.35 0 0 1 .243.43l1.254.34a1.65 1.65 0 0 0-1.146-2.021l-.351 1.251ZM20.866 6.933a.35.35 0 0 1 .433-.246l.35-1.252a1.65 1.65 0 0 0-2.039 1.162l1.256.336ZM7.21 52.86a1.65 1.65 0 0 0 1.593 2.078v-1.3a.35.35 0 0 1-.338-.441L7.21 52.86Zm9.614-34.447 28.5 8 .352-1.251-28.5-8-.352 1.251Zm-3 11 28.5 8 .352-1.251-28.5-8-.352 1.251Zm-3 10 28.5 8 .352-1.251-28.5-8-.352 1.251Z"
                          fill="#48639E"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in Italy
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 11 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/italy-colleges"
                      >
                        Check 11 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          11
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          14.37 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in Italy"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/italy/article/why-study-abroad-in-italy"
                    >
                      Why Study in Italy
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Top Universities to study"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/italy/article/top-universities-in-italy-rankings-requirements-visa-cost-and-jobs"
                    >
                      Top Universities to study
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Cost of Living in Italy"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/italy/article/cost-of-living-in-italy"
                    >
                      Cost of Living in Italy
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Jobs in Italy"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/italy/article/jobs-in-italy-top-sectors-job-sites-best-cities-startups-and-more"
                    >
                      Jobs in Italy
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 11*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M33.355 24.508c0-1.076-.286-1.386-1.351-1.431-.28-.2-.585-.19-.897-.177a4.39 4.39 0 0 1-.295.005 116.27 116.27 0 0 0-3.996 0 7.73 7.73 0 0 1-1.26-.046c-.103.172-.264.206-.47.23-.652.056-.985.434-.996 1.076l.003.814c.002.546.005 1.094-.003 1.636-.012.31.057.573.378.688.215.154.458.163.7.171.171.006.342.012.502.069 2.039.08 4.077.069 6.116 0 .165-.057.338-.063.51-.069.245-.008.489-.017.704-.172.309-.137.355-.389.355-.698-.008-.466-.005-.931-.003-1.397l.003-.699Zm-6.494-.263c-.322 0-.581-.009-.789-.016-.445-.014-.654-.021-.75.08-.086.09-.082.266-.074.598.005.208.012.478-.001.827v.057c-.023.263.08.4.355.378.343-.033.679.006 1.014.045.245.03.49.058.738.058 1.42.011 2.84.011 4.26 0a1.19 1.19 0 0 1 .16.005c.146.011.296.023.413-.106l.011-.002c.005-.201.006-.4.007-.6.001-.297.002-.593.016-.889.023-.355-.114-.458-.458-.458-1.638.023-3.264.023-4.902.023ZM26.712 7.547c.212.037.424.044.634.052.188.006.374.013.558.04.144-.008.274-.005.405-.003.066.002.132.003.201.003.535.024.686.015.821.007.062-.004.12-.007.21-.007h.612c.458 0 .534-.034.637-.103.032 0 .065-.03.098-.059l.039-.033c.676-.057.802-.183.813-.824V5.2c0-1.867-.08-1.947-1.935-1.993-.332 0-.47-.092-.458-.447.013-.38.01-.759.009-1.138-.002-.285-.003-.57.002-.854.011-.413-.046-.78-.584-.768-.504.012-.573.344-.561.745.007.26.005.515.002.768l-.002.377c0 1.294 0 1.294-1.283 1.328-.721.023-1.1.413-1.11 1.146-.008.428-.006.86-.003 1.292l.002.643c0 .962 0 .962.893 1.248Zm2.159-3.194h-.603c-.297.003-.588.005-.88-.012-.332-.023-.412.126-.424.435v.034c-.029.745-.043 1.117.136 1.302.18.184.552.181 1.296.176.057-.012.114-.012.172-.012.103 0 .206.003.309.006.103.003.206.006.31.006.724 0 1.085 0 1.263-.18.177-.18.174-.534.168-1.241v-.034c-.012-.412-.138-.527-.527-.504-.403.028-.814.026-1.22.024ZM36.435 39.637c.401.023.71-.15.928-.481l-.01-.567c-.01-.55-.021-1.095-.013-1.632-.011-1.294-.309-1.604-1.592-1.65-.298-.198-.625-.183-.952-.168a5.585 5.585 0 0 1-.262.008c-.503 0-1.007 0-1.511-.034-.268.03-.54.03-.814.03-.137 0-.274 0-.412.004a201.932 201.932 0 0 0-5.886 0c-.138-.003-.275-.003-.412-.003-.275 0-.55 0-.825-.031-.404.023-.814.025-1.222.028-.204.001-.408.003-.61.006-.105.003-.212-.003-.319-.009-.312-.017-.625-.035-.907.17-1.637.057-1.798.229-1.82 1.9-.004.187.004.375.012.562.02.469.04.939-.116 1.397l.024.02c.29.246.583.494 1.007.45.198.187.443.185.684.183H35.782c.226.005.462.008.654-.183Zm-9.562-1.147 1.752.001c2.05.012 4.1.012 6.173 0 .714 0 1.066 0 1.242-.176.172-.171.178-.51.188-1.178l.001-.066c.012-.492-.114-.641-.63-.641-2.659.014-5.314.015-7.97.017-1.77 0-3.541.001-5.314.006-1.375 0-1.375.011-1.396 1.32l-.001.066c-.012.55.194.664.698.664 1.753-.017 3.505-.015 5.257-.013Z"
                          fill="#24A7D0"
                        />
                        <path
                          d="M18.65 55.864c-.011.035-.011.07-.011.104h-8.555c-.012-.035-.012-.07-.012-.092.206-.23.481-.206.745-.206 2.37-.012 4.73-.012 7.1 0 .24.011.527-.023.733.194ZM38.256 55.968c.012-.035 0-.07-.011-.104.183-.206.447-.194.687-.194 2.405-.012 4.798-.012 7.203 0 .207 0 .413 0 .608.103.068.046.091.114.068.194h-8.555ZM47.178 52.406l.057-.012.034.046v3.08c-.08.035-.137.012-.183-.056-.206-.94-.114-1.879-.057-2.818 0-.114.068-.183.149-.24Z"
                          fill="#48639E"
                        />
                        <path
                          d="M47.178 55.544a.09.09 0 0 0 .091-.023c.092.39-.068.538-.458.458 0-.034 0-.069.012-.103a.67.67 0 0 1 .355-.332ZM26.712 7.547c.378-.16.768-.149 1.157 0 .195.172.183.413.183.63.103 4.627-.08 9.23-.973 13.789-.08.378-.057.801-.378 1.11-.378-.102-.836.287-1.134-.217 1.03-5.062 1.386-10.17 1.145-15.312ZM29.724 8.567c.012-.035.046-.07.046-.104.138-1.019.138-1.03 1.157-1.019a62.522 62.522 0 0 0 .48 11.98c.161 1.225.39 2.427.585 3.653h-1.157c-.217-.195-.263-.459-.309-.722-.458-2.714-.79-5.451-.928-8.211-.08-1.592-.057-3.195-.08-4.787.012-.264-.046-.573.206-.79ZM31.866 27.417c.366-.172.767-.023 1.134-.103a69.785 69.785 0 0 0 2.737 7.982h-1.248c-.207-.16-.298-.378-.39-.607-.882-2.164-1.603-4.375-2.222-6.62-.057-.205-.16-.434-.011-.652ZM24.48 27.314c.377.08.778-.08 1.145.103.148.229.034.447-.035.653a60.735 60.735 0 0 1-2.393 6.71c-.08.195-.184.379-.355.505h-1.249c1.111-2.588 2.108-5.234 2.886-7.971Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M46.834 55.876c.172-.046.298-.138.344-.332v-.001c0-1.053 0-2.095.011-3.149-.103-.48-.447-.721-.893-.733-.332-.011-.515-.16-.71-.378-3.127-3.538-5.669-7.466-7.88-11.623-.02-.042-.038-.084-.056-.127-.064-.149-.127-.297-.287-.377-.21.063-.4.174-.59.284-.118.07-.237.14-.36.197-.04.223.062.405.163.588l.054.099a62.006 62.006 0 0 0 6.997 10.662l.057.066c.1.115.205.234.253.426h-3.7c-.395 0-.593 0-.723-.093-.13-.094-.193-.28-.319-.651-.744-2.233-2.095-4.043-3.962-5.452-2.107-1.591-4.478-2.324-7.135-2.256-3.447.103-6.23 1.512-8.452 4.089-.962 1.122-1.649 2.405-2.095 3.825-.092.286-.184.55-.55.55-.34 0-.681.002-1.022.005-.912.007-1.826.013-2.734-.028-.046 0-.058-.035-.058-.08a.377.377 0 0 1 .08-.15 69.458 69.458 0 0 0 7.273-10.96c.02-.039.045-.078.07-.118.095-.154.193-.31.102-.511-.152-.043-.286-.129-.42-.214-.19-.122-.381-.244-.623-.244-2.302 4.317-4.981 8.394-8.154 12.14-.206.228-.4.343-.721.343-.768.011-1.145.39-1.157 1.168-.008.52-.005 1.038-.002 1.557l.002.78c0 .32.057.606.424.71 1.431 0 2.86-.003 4.289-.006 1.428-.003 2.857-.006 4.289-.006.332-.126.378-.4.378-.699V52.714c.002-.188.005-.393-.138-.526-.286-.286-.195-.572-.091-.882 1.282-3.94 4.981-6.825 8.978-6.985 4.455-.184 8.314 2.21 9.964 6.207.036.09.076.178.115.267.234.529.47 1.06.068 1.657-.045.062-.04.16-.037.254l.002.078v2.393c0 .31.046.573.378.699h8.578Zm-28.986-2.99c-.119-.16-.276-.14-.433-.117-.055.007-.11.015-.162.015-.842 0-1.687.003-2.531.005-.845.003-1.69.006-2.531.006h-.033c-.694.006-1.04.009-1.215.183-.175.175-.178.522-.183 1.216v.067c0 .435.125.55.55.55 1.342-.015 2.68-.01 4.02-.005.671.002 1.342.005 2.014.005.037 0 .075.003.113.007.13.012.262.025.369-.099.102-.618.068-1.225.022-1.832Zm24.691 1.902c-.254 0-.508 0-.764-.002a91.126 91.126 0 0 0-2.305.013c-.343.012-.446-.103-.458-.446v-.034c-.034-1.524-.034-1.524 1.512-1.524.426 0 .853 0 1.28.002 1.28.002 2.56.004 3.84-.013.366 0 .48.091.48.47v.034c.012 1.5.012 1.5-1.477 1.5h-2.108Z"
                          fill="#48639E"
                        />
                        <path
                          d="M31.866 35.296c-.492-1.374-.996-2.737-1.466-4.123-.137-.4-.31-.595-.756-.538-.733.08-1.649-.263-2.153.172-.48.4-.55 1.294-.779 1.97-.297.836-.584 1.683-.87 2.52-.39-.024-.802.148-1.18-.104.573-1.672 1.169-3.333 1.718-5.005.15-.446.39-.652.86-.652.984.011 1.98 0 2.965-.046.562-.023.87.16 1.054.71.573 1.672 1.18 3.321 1.786 4.982-.377.274-.79.103-1.179.114ZM22.452 42.717c-.378 0-.756.012-1.134 0-.355-.011-.584-.217-.584-.572 0-.344.23-.562.584-.562a75.937 75.937 0 0 1 2.28 0c.332 0 .526.195.538.539.011.366-.183.572-.539.595-.389.012-.767 0-1.145 0ZM34.328 42.717c-.366 0-.721.012-1.088 0-.366-.011-.572-.229-.56-.584.01-.332.217-.538.549-.538a79.103 79.103 0 0 1 2.336 0c.332.011.515.218.527.561 0 .344-.183.55-.515.561-.413.023-.837 0-1.249 0ZM28.167 19.881v-1.477c0-.366.137-.653.538-.664.435-.012.596.275.596.664.011.985.011 1.97 0 2.955 0 .366-.184.641-.573.641-.39 0-.561-.263-.561-.653v-1.466Z"
                          fill="#48639E"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in France
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 16 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/france-colleges"
                      >
                        Check 16 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          16
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          27.79 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in France"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/france/article/study-in-france-top-universities-cost-admissions-funding-visa-and-scope-for-international-students"
                    >
                      Why Study in France
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Top Universities to study"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/france/article/top-universities-in-france-ranking-top-courses-fees-scholarships-admissions"
                    >
                      Top Universities to study
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Cost of Living in France"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/france/article/cost-of-living-in-france-travel-and-stay-for-international-students"
                    >
                      Cost of Living in France
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Jobs in France"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/france/article/jobs-in-france-for-international-students-top-recruiters-top-sectors-top-paying-universities-mba-salaries-work-permit"
                    >
                      Jobs in France
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 12*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={57}
                        viewBox="0 0 56 57"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.203 9.442v10.05l.563.095-.563.59v9.15l.893.286-.893.454v9.97l.749.346-.75.355v9.318l.744.326-.743.373v5.668h-12.1v-10.47l-.777-.341.777-.367v-10.27l3.5-1.776v-5.465L19.5 27.7l.103-.108v-9.107l8.6-9.044Zm-7.5 18.643v4.555l5.506-2.795-5.506-1.76Zm6.4 2.54-9.189 4.664 9.189 4.241v-8.905Zm-.75 9.77-9.15-4.222v8.551l9.15-4.328Zm-9.15 6.04v8.61l9.157-4.596-9.157-4.014Zm9.9 4.872L19.3 55.223l7.803.093v-4.009Zm0-1.733v-8.316l-9.124 4.316 9.124 4Zm0-20.598v-7.647l-5.593 5.86 5.593 1.787Zm0-9.67v-7.11l-5.828 6.128 5.828.982Zm-6.4.037v7.098l5.836-6.114-5.836-.984ZM38.103 56V14.753h1.1V56h-1.1Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M27.103 11.091V0h1.1v10.572l2.298.798V4.345h1.1v7.407l8.502 2.95-11.112 5.269 11.014 4.713-11.068 5.12 10.975 5.332-11 5.343 11.065 5.375-11.014 4.713 9.935 4.94-.245 1.043h-11v-1.1h8.659l-9.97-4.958 10.987-4.701-10.935-5.312 11-5.343L26.37 29.78l10.932-5.057-10.986-4.7 10.888-5.164-9.73-3.376.136-.392h-.506Z"
                          fill="#24A7D0"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in Hong-kong
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 8 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/hong-kong-colleges"
                      >
                        Check 8 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          8
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          74.32 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in Hong Kong"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/hong-kong/article/why-study-in-hong-kong"
                    >
                      Why Study in Hong Kong
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="SOP for hong Kong"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/hong-kong/article/statement-of-purpose-sop-for-hong-kong"
                    >
                      SOP for hong Kong
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Application Process"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/hong-kong/article/hong-kong-university-application-when-to-apply-requirements-process"
                    >
                      Application Process
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Scholarships"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/hong-kong/article/hong-kong-scholarships-for-international-students-undergraduate-graduate-and-phd"
                    >
                      Scholarships
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 13*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          d="M20.447 18.546c-.057.539-.468.595-.88.595-1.956.057-3.813.553-5.614 1.276-4.594 1.844-8.139 5.006-11.074 8.919-.411.553-.78 1.12-1.177 1.673-.227.326-.524.51-.893.27-.34-.241-.27-.553-.07-.865 3.515-5.275 7.911-9.5 14.079-11.556 1.574-.525 3.176-.851 4.849-.837.525 0 .766.184.78.525Z"
                          fill="#24A7D0"
                        />
                        <path
                          d="M20.433 16.802c-.043.496-.397.553-.808.539-2.354-.043-4.637.354-6.892 1.006-4.41 1.305-8.11 3.687-10.931 7.36-.142.183-.256.396-.497.495-.255.1-.468.029-.624-.184-.226-.298-.099-.567.085-.836a20.511 20.511 0 0 1 2.85-3.12c3.857-3.389 8.409-5.16 13.47-5.728a24.23 24.23 0 0 1 2.68-.128c.412.015.653.156.667.596Z"
                          fill="#24A7D0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M25.203 24.515c-.822 1.078-1.432 2.269-1.758 3.587-.042.401-.035.798-.027 1.189.005.273.01.543-.002.81-.003.045-.001.09 0 .136.007.127.012.253-.113.347a.198.198 0 0 1-.021-.029.202.202 0 0 0-.022-.028c-.014-.028-.028-.043-.042-.057a247.446 247.446 0 0 1-1.205-3.46c-.156-.467-.44-.68-.95-.595-.63.1-1.26.184-1.886.269-.446.06-.89.12-1.333.185-1.05.17-1.177.454-.61 1.333 1.844 2.892 3.403 5.912 4.438 9.188.766 2.438 1.234 4.934 1.092 7.5l-.006.114c-.023.417-.046.836-.462 1.148-1.446 1.078-2.41 2.496-2.906 4.225-.1.355-.256.483-.624.511-2.992.255-5.842.978-8.55 2.269a13.46 13.46 0 0 0-2.751 1.701c-.298.241-.539.51-.27.893.298.412.653.241.979 0 .085-.056.156-.113.227-.17 4.168-2.793 8.734-3.998 13.725-3.445.941.099 1.875.309 2.807.518.402.09.804.18 1.206.262 5.36 1.106 10.69 1.19 15.98-.44a11.65 11.65 0 0 1 4.537-.468c2.382.227 4.324 1.234 5.501 3.417.213.397.44.723.908.454.453-.27.255-.652.07-.992-1.006-1.801-2.495-3.049-4.494-3.616-.497-.142-.667-.369-.723-.865-.218-1.834-.46-3.668-.703-5.501-.121-.917-.243-1.834-.36-2.751-.138-1.033-.27-2.072-.402-3.124a870.24 870.24 0 0 0-.223-1.754c.102.044.185.076.259.105a2.808 2.808 0 0 1 .434.2c.295.16.6.325.924.036.336-.303.194-.623.057-.933-.037-.082-.073-.164-.1-.244-.67-2.08-1.35-4.152-2.032-6.229l-.506-1.541c-.121-.38-.182-.567-.115-.64.065-.072.253-.033.625.044.253.055.505.106.76.157.203.041.408.083.616.127.298.056.567.085.78-.185.212-.283.085-.524-.057-.78l-.373-.615a116.66 116.66 0 0 1-.974-1.625l-.068-.098c-.101-.142-.219-.307-.116-.398.496-.443.348-.918.204-1.377-.049-.158-.098-.314-.12-.466-.193-1.408-.438-2.808-.698-4.29-.1-.579-.204-1.17-.308-1.779l.54.518c.209.197.39.37.566.545.241.227.482.398.822.256.37-.156.34-.497.298-.794-.383-2.978-.865-5.955-1.843-8.82-.51-1.46-1.361-2.609-2.75-3.346-3.361-1.786-6.892-2.765-10.72-2.297l-.064.007c-.74.083-1.396.157-1.864-.574h-.426l-.184.14c-.723.549-1.457 1.106-1.914 1.916-.412.723-.95.992-1.773.893-.581-.07-2.736 1.503-2.949 2.07a.692.692 0 0 0-.057.34c.1.525-.226.625-.638.681-.442.068-.884.143-1.328.218-.48.08-.964.162-1.45.236-1.15.184-1.83 1.333-1.39 2.382.283.666.524 1.319.553 2.084.056 1.05.794 1.716 1.645 2.24.737.469 1.502.695 2.282.114 1.106-.808 2.127-.496 3.176.142.284.17.326.298.213.595-.128.369-.369.468-.737.525l-.319.047c-1.512.22-3.022.44-4.148 1.711-.368.411-.468.71-.141 1.149l.296.404c.443.604.889 1.21 1.306 1.836.283.44.624.524 1.077.312.725-.349 1.107.14 1.458.59l.06.076c.354.454.666.936.184 1.574Zm13.844 10.15-.019-.005-.005-.002h-.004c-.543-.164-1.088-.328-1.638-.487-.426-.12-.44-.489-.451-.803l-.003-.062a33.449 33.449 0 0 1 .02-4.331l-1.153-1.213-1.488-2.41h-1.134a.706.706 0 0 1-.115.07l-.427.207-2.224 1.14.259 1.29c.072.065.057.252.024.61-.064.667-.135 1.33-.206 1.993-.07.663-.142 1.325-.206 1.992-.028.27-.127.44-.383.524-.244.088-.489.18-.73.272h-.001c-.15.057-.299.114-.445.168l.014-.092a2.718 2.718 0 0 1-.043.05l-.857.364c-.947.405-1.905.813-2.928 1.238l-.023-.293v-.003c-.049-.633-.093-1.21-.105-1.789-.043-1.503-.085-3.006-.113-4.523-.013-.512.195-.97.4-1.42l.006-.014.076-.168c.765-1.673 1.885-3.091 3.232-4.339 3.29-3.062 4.864-7.033 5.941-11.258.1-.369.213-.85-.354-.978-.547-.112-.65.302-.748.695l-.004.014c-.737 2.963-1.8 5.785-3.53 8.337-.523.767-1.167 1.413-1.811 2.06-.368.37-.736.739-1.082 1.13-.212.255-.34.142-.468-.085a2.597 2.597 0 0 0-.368-.51c-.144-.17-.669-.453-1.141-.709-.443-.24-.84-.454-.83-.525l.17-.09-.048-.033c-.073.051-.118.094-.122.123-.44.227-.766.298-1.007-.227-.04-.096-.108-.179-.177-.264-.052-.064-.106-.13-.149-.204-.059-.099-.15-.2-.242-.3-.195-.215-.39-.428-.254-.621.283-.411.695-.823 1.276-.908.415-.068.827-.147 1.24-.226h.003a37.523 37.523 0 0 1 1.607-.284c.496-.071.723-.326.893-.766l.153-.385c.28-.703.41-1.027.315-1.26-.081-.201-.328-.335-.786-.582-.184-.1-.404-.218-.66-.367-1.276-.738-2.382-.78-3.658-.043-.979.567-2.425-.27-2.453-1.404-.029-.765-.241-1.418-.54-2.084-.268-.624-.084-.964.582-1.092a86.834 86.834 0 0 1 3.261-.539c.624-.085 1.035-.312.922-1.035-.07-.425.17-.68.454-.964.723-.695 1.489-1.205 2.566-1.007.482.085.78-.17 1.021-.58.468-.795 1.035-1.504 1.8-2.057.37.624.384 1.262.355 1.9-.028.425.142.709.581.709.398 0 .568-.284.554-.666 0-.085.003-.171.007-.257v-.001c.01-.202.018-.405-.022-.593-.141-.596.128-.766.667-.822 3.786-.454 7.274.467 10.563 2.325.88.496 1.46 1.233 1.815 2.17.865 2.254 1.276 4.607 1.673 6.975.009.07.007.134.004.226a6.436 6.436 0 0 0-.004.214c.087.354-.41.567-.764-.142l-.099-.15c-.137-.21-.306-.469-.397-.559a3.662 3.662 0 0 0-.142-.441c-.024-.063-.047-.126-.071-.197l-.008-.054c-.05-.33-.07-.47-.488-.442-.34.033-.333.074-.3.275.01.059.022.131.029.221-.042.027-.088-.014-.135-.094l.135.76c.167.969.327 1.937.488 2.905v.003c.277 1.667.554 3.331.859 4.99.113.624.07.95-.652.908-.226-.02-.459.018-.694.057-.09.015-.18.03-.27.042l-.01-.093a.696.696 0 0 1-.019.022c-.912.211-1.824.324-2.748.42a31.318 31.318 0 0 1-.608 1.543.931.931 0 0 1 .095.334c.292 2.336.848 4.614 1.404 6.891.172.709.345 1.417.51 2.127.011.05.03.103.05.155.055.154.112.31-.036.426-.114.094-.252.027-.385-.038a1.2 1.2 0 0 0-.14-.061 37.837 37.837 0 0 1-1.658-.553c-.414-.122-.827-.246-1.241-.37ZM26.96 8.267c-.227-.298-.483-.27-.752-.184-.383.127-.652-.014-.752-.412-.084-.354.1-.567.44-.68.44-.142.85-.213 1.29.028.407.209.822.392 1.238.576h.001l.364.162c.269.113.397.312.382.61-.028.269-.184.425-.425.496-.822.283-1.645.567-2.467.836-.326.1-.68.1-.808-.326-.114-.397.085-.624.453-.752l.005-.001c.324-.113.65-.226 1.03-.353ZM25.542 36.89c-.157-.104-.322-.212-.498-.323.44 2.042.695 3.97.667 5.941 0 .426-.128.766-.624.752-.482-.014-.525-.383-.51-.766.042-.992-.057-1.97-.199-2.95-.496-3.473-1.503-6.833-2.623-10.151-.62-1.83-.624-1.83-2.51-1.552l-.042.006c-.51.085-.638.213-.326.695a36.167 36.167 0 0 1 2.977 5.686c1.446 3.46 2.382 7.032 2.17 10.832-.057.865-.242 1.588-1.064 2.141-1.106.724-1.772 1.844-2.24 3.091l-.004.01c-.098.266-.19.515.245.53 1.227.04 2.424.311 3.618.581.434.098.868.196 1.302.283.524.1.595-.07.482-.553-.184-.78-.113-1.574.17-2.354.06-.154.132-.277.225-.372.381.033.98-.085 1.605-.21.194-.038.39-.077.583-.112 1.16.127 2.21.633 3.174 1.46.06.056.114.12.168.185.124.146.248.295.456.354v-.002l.001.002c.39-.667.992-1.71 1.478-2.58.115-.065.212-.216.335-.426.213-.36.337-.64.362-.878.053-.111.086-.19.094-.228.056-.283-.827-1.63-1.276-2.269l-.052-.022-.063-.028c-.061-.155-.12-.3-.177-.435v-.001l-.001-.001v-.002a7.647 7.647 0 0 1-.304-.815c-.156-.539-.483-.638-.965-.539-.808.156-1.517.51-2.169.979-1.375.978-2.524 2.183-3.545 3.516-.255.326-.553.581-.95.283-.354-.269-.212-.638-.014-.95 1.248-2.013 1.673-4.267 1.943-6.564.085-.738-.043-1.262-.78-1.588-.383-.172-.73-.4-1.119-.656Zm19.551-1.556c-.028 0-.042 0-.07-.015-1.078-.297-1.674-.935-1.886-2.112-.187-1.039-.423-2.07-.658-3.1-.302-1.319-.604-2.638-.803-3.976-.113-.719.125-.89.741-.823l-.003-.013c.043-.011.086-.024.128-.037.278-.084.532-.161.68.306a803.616 803.616 0 0 0 2.074 6.367v.002l.002.003.001.005c.44 1.338.883 2.684 1.326 4.045-.61-.1-1.064-.369-1.532-.652Zm-.68-9.798c.354 1.22.553 1.347 1.985 1.361a83.693 83.693 0 0 1-1.064-1.758c-.196-.368-.466-.28-.729-.194a3.38 3.38 0 0 1-.121.038c-.32.085-.223.259-.137.412.028.05.055.099.066.141ZM28.59 38.113c-.014 1.659-.284 3.275-.723 4.99.27-.226.44-.368.581-.453 1.05-.85 2.141-1.616 3.517-1.858 1.205-.212 1.715.071 2.183 1.163.122.288.23.582.339.877.336.911.673 1.826 1.391 2.554.567.568.51 1.163 0 1.744a1.355 1.355 0 0 0-.207.303l-.062.109c-.215.358-.456.7-.696 1.043-.568.808-1.135 1.617-1.374 2.643-.227.936-.78.936-1.362.142-.794-1.092-1.786-1.872-3.133-2.127-1.432-.283-1.914.241-1.588 1.66.213.892.524 1.204 1.446 1.346 3.644.539 7.274.482 10.875-.34.479-.109.955-.231 1.43-.354h.001c1.641-.423 3.281-.846 5.007-.681.723.056.751-.227.68-.794-.553-4.14-1.106-8.295-1.645-12.45l-.006-.048c-.135-1.086-.137-1.104-1.241-1.37 0 1.064-.17 1.178-1.22.851l-4.977-1.573c-1.942-.624-1.985-.681-2.041-2.751v-.071c.354-2.141-.412-3.942-1.702-5.587a1.457 1.457 0 0 1-.144-.206 1.872 1.872 0 0 0-.138-.202c-.044-.06-.09-.123-.143-.144-.284-.114-1.66.765-1.702 1.105-.034.318-.07.635-.105.953v.006c-.11.986-.22 1.974-.306 2.969l-.004.047c-.18 2.207-.18 2.213-2.25 3.058-1.007.411-2 .823-3.091 1.276.272.167.522.329.761.484h.001v.001c.373.241.719.466 1.08.664.426.24.568.539.568 1.02Zm12.222 7.94c1.262.539 2.709-.425 2.723-1.701 0-.766-.241-1.305-.752-1.702-.283-.227-.595-.369-.879-.07-.298.311-.227.637.114.907.41.326.496.751.24 1.176-.24.426-.652.51-1.105.312-.369-.156-.652-.085-.809.284-.17.44.128.652.468.794Z"
                          fill="#446AAF"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in Singapore
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 9 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/singapore-colleges"
                      >
                        Check 9 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          9
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          26.95 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in Singapore"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/singapore/article/why-study-in-singapore"
                    >
                      Why Study in Singapore
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Admission Requirements"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/singapore/article/singapore-university-admission-requirements"
                    >
                      Admission Requirements
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="SOP for Singapore"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/singapore/article/statement-of-purpose-for-singapore"
                    >
                      SOP for Singapore
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Scholarships"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/singapore/article/singapore-scholarships-for-international-students-tuition-grant-fellowships-awards"
                    >
                      Scholarships
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/*CARD 14*/}
          <li className="card4">
            <div>
              <div className="jsx-1066289220 overflow-grid-item px-1">
                <div className="jsx-1066289220 selected0-box selected0-box-lg bg-white rounded-lg h-100">
                  <div className="jsx-1066289220 d-flex align-items-center selected0-box-media-group">
                    <div className="jsx-1066289220 selected0-box-img mb-0 d-block mr-4 rounded-circle">
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 28C0 12.536 12.536 0 28 0s28 12.536 28 28-12.536 28-28 28S0 43.464 0 28Z"
                          fill="#F5F8F9"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M33.355 24.508c0-1.076-.286-1.386-1.351-1.431-.28-.2-.585-.19-.897-.177a4.39 4.39 0 0 1-.295.005 116.27 116.27 0 0 0-3.996 0 7.73 7.73 0 0 1-1.26-.046c-.103.172-.264.206-.47.23-.652.056-.985.434-.996 1.076l.003.814c.002.546.005 1.094-.003 1.636-.012.31.057.573.378.688.215.154.458.163.7.171.171.006.342.012.502.069 2.039.08 4.077.069 6.116 0 .165-.057.338-.063.51-.069.245-.008.489-.017.704-.172.309-.137.355-.389.355-.698-.008-.466-.005-.931-.003-1.397l.003-.699Zm-6.494-.263c-.322 0-.581-.009-.789-.016-.445-.014-.654-.021-.75.08-.086.09-.082.266-.074.598.005.208.012.478-.001.827v.057c-.023.263.08.4.355.378.343-.033.679.006 1.014.045.245.03.49.058.738.058 1.42.011 2.84.011 4.26 0a1.19 1.19 0 0 1 .16.005c.146.011.296.023.413-.106l.011-.002c.005-.201.006-.4.007-.6.001-.297.002-.593.016-.889.023-.355-.114-.458-.458-.458-1.638.023-3.264.023-4.902.023ZM26.712 7.547c.212.037.424.044.634.052.188.006.374.013.558.04.144-.008.274-.005.405-.003.066.002.132.003.201.003.535.024.686.015.821.007.062-.004.12-.007.21-.007h.612c.458 0 .534-.034.637-.103.032 0 .065-.03.098-.059l.039-.033c.676-.057.802-.183.813-.824V5.2c0-1.867-.08-1.947-1.935-1.993-.332 0-.47-.092-.458-.447.013-.38.01-.759.009-1.138-.002-.285-.003-.57.002-.854.011-.413-.046-.78-.584-.768-.504.012-.573.344-.561.745.007.26.005.515.002.768l-.002.377c0 1.294 0 1.294-1.283 1.328-.721.023-1.1.413-1.11 1.146-.008.428-.006.86-.003 1.292l.002.643c0 .962 0 .962.893 1.248Zm2.159-3.194h-.603c-.297.003-.588.005-.88-.012-.332-.023-.412.126-.424.435v.034c-.029.745-.043 1.117.136 1.302.18.184.552.181 1.296.176.057-.012.114-.012.172-.012.103 0 .206.003.309.006.103.003.206.006.31.006.724 0 1.085 0 1.263-.18.177-.18.174-.534.168-1.241v-.034c-.012-.412-.138-.527-.527-.504-.403.028-.814.026-1.22.024ZM36.435 39.637c.401.023.71-.15.928-.481l-.01-.567c-.01-.55-.021-1.095-.013-1.632-.011-1.294-.309-1.604-1.592-1.65-.298-.198-.625-.183-.952-.168a5.585 5.585 0 0 1-.262.008c-.503 0-1.007 0-1.511-.034-.268.03-.54.03-.814.03-.137 0-.274 0-.412.004a201.932 201.932 0 0 0-5.886 0c-.138-.003-.275-.003-.412-.003-.275 0-.55 0-.825-.031-.404.023-.814.025-1.222.028-.204.001-.408.003-.61.006-.105.003-.212-.003-.319-.009-.312-.017-.625-.035-.907.17-1.637.057-1.798.229-1.82 1.9-.004.187.004.375.012.562.02.469.04.939-.116 1.397l.024.02c.29.246.583.494 1.007.45.198.187.443.185.684.183H35.782c.226.005.462.008.654-.183Zm-9.562-1.147 1.752.001c2.05.012 4.1.012 6.173 0 .714 0 1.066 0 1.242-.176.172-.171.178-.51.188-1.178l.001-.066c.012-.492-.114-.641-.63-.641-2.659.014-5.314.015-7.97.017-1.77 0-3.541.001-5.314.006-1.375 0-1.375.011-1.396 1.32l-.001.066c-.012.55.194.664.698.664 1.753-.017 3.505-.015 5.257-.013Z"
                          fill="#24A7D0"
                        />
                        <path
                          d="M18.65 55.864c-.011.035-.011.07-.011.104h-8.555c-.012-.035-.012-.07-.012-.092.206-.23.481-.206.745-.206 2.37-.012 4.73-.012 7.1 0 .24.011.527-.023.733.194ZM38.256 55.968c.012-.035 0-.07-.011-.104.183-.206.447-.194.687-.194 2.405-.012 4.798-.012 7.203 0 .207 0 .413 0 .608.103.068.046.091.114.068.194h-8.555ZM47.178 52.406l.057-.012.034.046v3.08c-.08.035-.137.012-.183-.056-.206-.94-.114-1.879-.057-2.818 0-.114.068-.183.149-.24Z"
                          fill="#48639E"
                        />
                        <path
                          d="M47.178 55.544a.09.09 0 0 0 .091-.023c.092.39-.068.538-.458.458 0-.034 0-.069.012-.103a.67.67 0 0 1 .355-.332ZM26.712 7.547c.378-.16.768-.149 1.157 0 .195.172.183.413.183.63.103 4.627-.08 9.23-.973 13.789-.08.378-.057.801-.378 1.11-.378-.102-.836.287-1.134-.217 1.03-5.062 1.386-10.17 1.145-15.312ZM29.724 8.567c.012-.035.046-.07.046-.104.138-1.019.138-1.03 1.157-1.019a62.522 62.522 0 0 0 .48 11.98c.161 1.225.39 2.427.585 3.653h-1.157c-.217-.195-.263-.459-.309-.722-.458-2.714-.79-5.451-.928-8.211-.08-1.592-.057-3.195-.08-4.787.012-.264-.046-.573.206-.79ZM31.866 27.417c.366-.172.767-.023 1.134-.103a69.785 69.785 0 0 0 2.737 7.982h-1.248c-.207-.16-.298-.378-.39-.607-.882-2.164-1.603-4.375-2.222-6.62-.057-.205-.16-.434-.011-.652ZM24.48 27.314c.377.08.778-.08 1.145.103.148.229.034.447-.035.653a60.735 60.735 0 0 1-2.393 6.71c-.08.195-.184.379-.355.505h-1.249c1.111-2.588 2.108-5.234 2.886-7.971Z"
                          fill="#48639E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M46.834 55.876c.172-.046.298-.138.344-.332v-.001c0-1.053 0-2.095.011-3.149-.103-.48-.447-.721-.893-.733-.332-.011-.515-.16-.71-.378-3.127-3.538-5.669-7.466-7.88-11.623-.02-.042-.038-.084-.056-.127-.064-.149-.127-.297-.287-.377-.21.063-.4.174-.59.284-.118.07-.237.14-.36.197-.04.223.062.405.163.588l.054.099a62.006 62.006 0 0 0 6.997 10.662l.057.066c.1.115.205.234.253.426h-3.7c-.395 0-.593 0-.723-.093-.13-.094-.193-.28-.319-.651-.744-2.233-2.095-4.043-3.962-5.452-2.107-1.591-4.478-2.324-7.135-2.256-3.447.103-6.23 1.512-8.452 4.089-.962 1.122-1.649 2.405-2.095 3.825-.092.286-.184.55-.55.55-.34 0-.681.002-1.022.005-.912.007-1.826.013-2.734-.028-.046 0-.058-.035-.058-.08a.377.377 0 0 1 .08-.15 69.458 69.458 0 0 0 7.273-10.96c.02-.039.045-.078.07-.118.095-.154.193-.31.102-.511-.152-.043-.286-.129-.42-.214-.19-.122-.381-.244-.623-.244-2.302 4.317-4.981 8.394-8.154 12.14-.206.228-.4.343-.721.343-.768.011-1.145.39-1.157 1.168-.008.52-.005 1.038-.002 1.557l.002.78c0 .32.057.606.424.71 1.431 0 2.86-.003 4.289-.006 1.428-.003 2.857-.006 4.289-.006.332-.126.378-.4.378-.699V52.714c.002-.188.005-.393-.138-.526-.286-.286-.195-.572-.091-.882 1.282-3.94 4.981-6.825 8.978-6.985 4.455-.184 8.314 2.21 9.964 6.207.036.09.076.178.115.267.234.529.47 1.06.068 1.657-.045.062-.04.16-.037.254l.002.078v2.393c0 .31.046.573.378.699h8.578Zm-28.986-2.99c-.119-.16-.276-.14-.433-.117-.055.007-.11.015-.162.015-.842 0-1.687.003-2.531.005-.845.003-1.69.006-2.531.006h-.033c-.694.006-1.04.009-1.215.183-.175.175-.178.522-.183 1.216v.067c0 .435.125.55.55.55 1.342-.015 2.68-.01 4.02-.005.671.002 1.342.005 2.014.005.037 0 .075.003.113.007.13.012.262.025.369-.099.102-.618.068-1.225.022-1.832Zm24.691 1.902c-.254 0-.508 0-.764-.002a91.126 91.126 0 0 0-2.305.013c-.343.012-.446-.103-.458-.446v-.034c-.034-1.524-.034-1.524 1.512-1.524.426 0 .853 0 1.28.002 1.28.002 2.56.004 3.84-.013.366 0 .48.091.48.47v.034c.012 1.5.012 1.5-1.477 1.5h-2.108Z"
                          fill="#48639E"
                        />
                        <path
                          d="M31.866 35.296c-.492-1.374-.996-2.737-1.466-4.123-.137-.4-.31-.595-.756-.538-.733.08-1.649-.263-2.153.172-.48.4-.55 1.294-.779 1.97-.297.836-.584 1.683-.87 2.52-.39-.024-.802.148-1.18-.104.573-1.672 1.169-3.333 1.718-5.005.15-.446.39-.652.86-.652.984.011 1.98 0 2.965-.046.562-.023.87.16 1.054.71.573 1.672 1.18 3.321 1.786 4.982-.377.274-.79.103-1.179.114ZM22.452 42.717c-.378 0-.756.012-1.134 0-.355-.011-.584-.217-.584-.572 0-.344.23-.562.584-.562a75.937 75.937 0 0 1 2.28 0c.332 0 .526.195.538.539.011.366-.183.572-.539.595-.389.012-.767 0-1.145 0ZM34.328 42.717c-.366 0-.721.012-1.088 0-.366-.011-.572-.229-.56-.584.01-.332.217-.538.549-.538a79.103 79.103 0 0 1 2.336 0c.332.011.515.218.527.561 0 .344-.183.55-.515.561-.413.023-.837 0-1.249 0ZM28.167 19.881v-1.477c0-.366.137-.653.538-.664.435-.012.596.275.596.664.011.985.011 1.97 0 2.955 0 .366-.184.641-.573.641-.39 0-.561-.263-.561-.653v-1.466Z"
                          fill="#48639E"
                        />
                      </svg>
                    </div>
                    <div className="jsx-1066289220">
                      <h3 className="jsx-1066289220 selected0-box-title color-base mb-1 font-weight-bold">
                        Study in France
                      </h3>
                      <a
                        data-csm-track="true"
                        data-csm-title="Check 16 Colleges"
                        data-event-type="link_click"
                        data-section_name="Study Abroad"
                        data-csm-href="https://collegedunia.com/"
                        className="jsx-1066289220 selected0-box-line d-flex align-items-center hover-color-primary"
                        href="/france-colleges"
                      >
                        Check 16 Colleges
                        <svg
                          fill="#666"
                          xmlns="http://www.w3.org/2000/svg"
                          width="451.846"
                          height="451.847"
                          viewBox="0 0 451.846 451.847"
                          xmlSpace="preserve"
                          className="mt-1 ml-1"
                          style={{
                            width: 12,
                            height: 12,
                            fill: "currentcolor",
                          }}
                        >
                          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="jsx-1066289220 row mx-n2 align-items-center selected0-box-media-group bg-gray-100 rounded-4 p-2">
                    <div className="jsx-1066289220 col-6-subline pl-0 pr-1 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="m14 7.25-8.25 4.5 3 1.635v4.5L14 20.75l5.25-2.865v-4.5l1.5-.817v5.182h1.5v-6L14 7.25Zm5.115 4.5L14 14.54l-5.115-2.79L14 8.96l5.115 2.79Zm-1.365 5.242L14 19.04l-3.75-2.047v-2.79L14 16.25l3.75-2.047v2.79Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          <span className="jsx-1066289220 d-none d-md-inline">
                            Total
                          </span>
                          16
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          No. Of Colleges
                        </p>
                      </div>
                    </div>
                    <div className="jsx-1066289220 col-6-subline pl-1 pr-0 d-flex align-items-center">
                      <svg
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 bg-white rounded-circle"
                        style={{ width: 37, height: 37 }}
                      >
                        <path
                          d="M13.85 13.175c-1.702-.443-2.25-.9-2.25-1.613 0-.817.758-1.387 2.025-1.387 1.335 0 1.83.637 1.875 1.575h1.657c-.052-1.29-.84-2.475-2.407-2.857V7.25H12.5v1.62c-1.455.315-2.625 1.26-2.625 2.708 0 1.732 1.432 2.595 3.525 3.097 1.875.45 2.25 1.11 2.25 1.808 0 .517-.367 1.342-2.025 1.342-1.545 0-2.152-.69-2.235-1.575H9.74c.09 1.642 1.32 2.565 2.76 2.872v1.628h2.25v-1.613c1.462-.277 2.625-1.125 2.625-2.662 0-2.13-1.822-2.858-3.525-3.3Z"
                          fill="#666"
                        />
                        <circle cx={14} cy={14} r="13.5" stroke="#E0E0E0" />
                      </svg>
                      <div className="jsx-1066289220">
                        <p className="jsx-1066289220 color-base font-weight-bold selected0-box-line mb-0">
                          27.79 K USD/Year
                        </p>
                        <p className="jsx-1066289220 selected0-box-line selected0-box-line-sm mb-0">
                          Avg. Study Cost
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="jsx-1066289220 guide color-base font-weight-bold selected0-box-line mb-3">
                    Guides
                  </p>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Why Study in France"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/france/article/study-in-france-top-universities-cost-admissions-funding-visa-and-scope-for-international-students"
                    >
                      Why Study in France
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Top Universities to study"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/france/article/top-universities-in-france-ranking-top-courses-fees-scholarships-admissions"
                    >
                      Top Universities to study
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Cost of Living in France"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/france/article/cost-of-living-in-france-travel-and-stay-for-international-students"
                    >
                      Cost of Living in France
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                  <div className="jsx-1066289220">
                    <hr className="jsx-1066289220 mt-2 mb-2" />
                    <a
                      data-csm-track="true"
                      data-csm-title="Jobs in France"
                      data-event-type="link_click"
                      data-section_name="Study Abroad"
                      data-csm-href="https://collegedunia.com/"
                      className="jsx-1066289220 d-flex color-base selected0-box-line align-items-center justify-content-between hover-color-primary"
                      href="/france/article/jobs-in-france-for-international-students-top-recruiters-top-sectors-top-paying-universities-mba-salaries-work-permit"
                    >
                      Jobs in France
                      <svg
                        fill="#666"
                        xmlns="http://www.w3.org/2000/svg"
                        width="451.846"
                        height="451.847"
                        viewBox="0 0 451.846 451.847"
                        xmlSpace="preserve"
                        style={{ width: 10, height: 10 }}
                      >
                        <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Top Courses*/}
      <div style={{ display: "contents" }}>
        <section className="jsx-2656711077 section-control mb-0 section-control-topgap">
          <div className="jsx-2656711077 container">
            <h2 className="jsx-2656711077 heading font-weight-bold top-course-title">
              Top Courses
            </h2>
            <MDBContainer>
              <MDBRow
                className="row-cols-2 row-cols-lg-5 g-2 g-lg-3"
                style={{ margin: "-2px 17px" }}
              >
                <MDBCol>
                  <div className="jsx-2656711077 pills-item">
                    <a
                      data-csm-track="true"
                      data-csm-title="BE/B.Tech"
                      data-event-type="link_click"
                      data-section_name="Top Courses"
                      data-csm-href="https://collegedunia.com/"
                      data-ga-title="BE/B.Tech"
                      data-ga-track="true"
                      data-ga-module="homepage"
                      data-ga-section="Top Courses"
                      data-ga-href="courses/btech"
                      className="jsx-2656711077 pill"
                      href="/courses/btech"
                    >
                      BE/B.Tech
                      <svg
                        width={20}
                        height={20}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="ml-2 mt-1"
                        viewBox="0 0 23 23"
                        style={{
                          width: 23,
                          height: 23,
                          fill: "rgb(51, 51, 51)",
                        }}
                      >
                        <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                      </svg>
                    </a>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3" style={{ padding: "8px" }}>
                    <div className="button-container">
                      <a
                        data-csm-track="true"
                        data-csm-title="BA"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="BA"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/ba"
                        className="jsx-2656711077 pill"
                        href="/courses/ba"
                      >
                        BA
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="B.Sc"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="/courses/bsc"
                        data-ga-title="B.Sc"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/bsc"
                        className="jsx-2656711077 pill"
                        href="/courses/bsc"
                      >
                        B.Sc
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="MBA/PGDM"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="MBA/PGDM"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/mba"
                        className="jsx-2656711077 pill"
                        href="/courses/mba"
                      >
                        MBA/PGDM
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="M.Sc"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="M.Sc"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/msc"
                        className="jsx-2656711077 pill"
                        href="/courses/msc"
                      >
                        M.Sc
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="ME/M.Tech"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="ME/M.Tech"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/mtech"
                        className="jsx-2656711077 pill"
                        href="/courses/mtech"
                      >
                        ME/M.Tech
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="MA"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="MA"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/ma"
                        className="jsx-2656711077 pill"
                        href="/courses/ma"
                      >
                        MA
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="Polytechnic"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="Polytechnic"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/polytechnic"
                        className="jsx-2656711077 pill"
                        href="/courses/polytechnic"
                      >
                        Polytechnic
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="M.Phil/Ph.D in Science"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="M.Phil/Ph.D in Science"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/phd-sciences"
                        className="jsx-2656711077 pill"
                        href="/courses/phd-sciences"
                      >
                        M.Phil/Ph.D in Science
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="B.Com"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="B.Com"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/bcom"
                        className="jsx-2656711077 pill"
                        href="/courses/bcom"
                      >
                        B.Com
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="MD"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="MD"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/md"
                        className="jsx-2656711077 pill"
                        href="/courses/md"
                      >
                        MD
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="M.Phil/Ph.D in Arts"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="M.Phil/Ph.D in Arts"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/phd-arts"
                        className="jsx-2656711077 pill"
                        href="/courses/phd-arts"
                      >
                        M.Phil/Ph.D in Arts
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="BBA/BBM"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="BBA/BBM"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/bba"
                        className="jsx-2656711077 pill"
                        href="/courses/bba"
                      >
                        BBA/BBM
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="B.Ed"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="B.Ed"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/bed"
                        className="jsx-2656711077 pill"
                        href="/courses/bed"
                      >
                        B.Ed
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol>
                  <div className="p-3">
                    <div className="jsx-2656711077 pills-item">
                      <a
                        data-csm-track="true"
                        data-csm-title="M.Phil/Ph.D in Engineering"
                        data-event-type="link_click"
                        data-section_name="Top Courses"
                        data-csm-href="https://collegedunia.com/"
                        data-ga-title="M.Phil/Ph.D in Engineering"
                        data-ga-track="true"
                        data-ga-module="homepage"
                        data-ga-section="Top Courses"
                        data-ga-href="courses/phd-engineering"
                        className="jsx-2656711077 pill"
                        href="/courses/phd-engineering"
                      >
                        M.Phil/Ph.D in Engineering
                        <svg
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          className="ml-2 mt-1"
                          viewBox="0 0 23 23"
                          style={{
                            width: 23,
                            height: 23,
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <path d="M2 10c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8zm-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S15.52 0 10 0 0 4.48 0 10zm10-1H6v2h4v3l4-4-4-4v3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </section>
      </div>

      {/* FOOTER SCRIBE BANNER*/}

      <section className="jsx-2704726530 section-control-topgap section-control section-control-noborder mb-0">
        <div className="jsx-2704726530 container text-center">
          <h2 className="jsx-2704726530 heading font-weight-bold text-capitalize mb-0">
            Subscribe to our newsletter
          </h2>
          <p className="jsx-2704726530 mb-lg-32 color-gray-600">
            Get College Notifications, Exam Notifications, and News Updates
          </p>
          <div className="jsx-2704726530 d-flex justify-content-center">
            <div className="jsx-2704726530">
              <form className="jsx-2704726530 row mx-n2 footer-form">
                <div className="row mx-n2 col-md-8">
                <div className="jsx-2704726530 px-2 col-md-4">
                <div className="input-wrapper" style={{ position: 'relative' }}>
                  <label />
                  <input
                    type="email"
                    name="email"
                    className="input-style email"
                    style={{ marginLeft: '10px', width: '100%' }}
                  />
                  <span className="placeholder-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    Enter email
                  </span>
                  <div className="invalid-feedback d-none" />
                </div>
              </div>

                  <div className="jsx-2704726530 px-2 col-md-4">
                  <div className="input-wrapper" style={{ position: 'relative' }}>
                    <label />
                    <input
                      type="text"
                      name="mobileno"
                      className="input-style phone"
                      maxLength={10}
                      style={{ marginLeft: '20px', width: '100%' }}
                    />
                    <span className="placeholder-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                      Enter phone
                    </span>
                    <div className="invalid-feedback d-none" />
                  </div>
                </div>



                <div className="jsx-2704726530 px-2 col-md-4">
                <div className="input-wrapper" style={{ position: 'relative' }}>
                  <label />
                  <input
                    type="text"
                    name="course_tag"
                    className="input-style select-style"
                    style={{ marginLeft: '25px', width: '100%' }}
                  />
                  <span className="placeholder-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    Select course
                  </span>
                  <div className="invalid-feedback d-none" />
                </div>
              </div>
                </div>

                <div className="jsx-2704726530 px-2 col-md-4 text-center">
                  <button type="submit" className="jsx-2704726530 submit-btn" style={{backgroundColor: '#007BFF', color: 'white'}}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
