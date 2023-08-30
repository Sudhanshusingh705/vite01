import "./App.css";
import NavBarWithImage from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./screen/Home";
import Login from "./screen/Login";
// import LoginForm from "./components/LoginForm";
import Addmission from "./pages/Addmission";
import Appdownload from "./pages/Appdownload";
import Exams from "./pages/Exams";
import News from "./pages/News";
import More from "./pages/More";
import Studyabroad from "./pages/Studyabroad";
import Topcollege from "./pages/Topcollege";
import Topcourse from "./pages/Topcourse";
import Sidebar from "./components/Sidebar/Sidebar";
import CourseSidebar from "./components/TopcourseSidebar/CourseSidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

{
  /*SIDEBAR MENU*/
}
import Agriculture from "./pages/sidebarmenu/Agriculture";
import Animation from "./pages/sidebarmenu/Animation";
import Architecture from "./pages/sidebarmenu/Architecture";
import Arts from "./pages/sidebarmenu/Arts";
import Aviation from "./pages/sidebarmenu/Aviation";
import Commerce from "./pages/sidebarmenu/Commerce";
import ComputerApplication from "./pages/sidebarmenu/ComputerApplication";
import Dental from "./pages/sidebarmenu/Dental";
import Design from "./pages/sidebarmenu/Design";
import Education from "./pages/sidebarmenu/Education";
import Engineering from "./pages/sidebarmenu/Engineering";
import Hotelmanagement from "./pages/sidebarmenu/Hotelmanagement";
import Law from "./pages/sidebarmenu/Law";
import Management from "./pages/sidebarmenu/Management";
import Masscommunication from "./pages/sidebarmenu/Masscommunication";
import Medical from "./pages/sidebarmenu/Medical";
import Paramedical from "./pages/sidebarmenu/Paramedical";
import Phamasy from "./pages/sidebarmenu/Phamasy";
import Science from "./pages/sidebarmenu/Science";
import Veterinary from "./pages/sidebarmenu/Veterinary";
import Vocationalcourse from "./pages/sidebarmenu/Vocationalcourse";

{
  /*COURSES SIDE BAR*/
}
import Agricultures from "./CourseSidebar/Agricultures";
import Animations from "./CourseSidebar/Animations";
import Architectures from "./CourseSidebar/Architectures";
import Art from "./CourseSidebar/Art";
import Aviations from "./CourseSidebar/Aviations";
import Commerces from "./CourseSidebar/Commerces";
import Computers from "./CourseSidebar/Computers";
import Dentals from "./CourseSidebar/Dentals";
import Designs from "./CourseSidebar/Designs";
import Educations from "./CourseSidebar/Educations";
import Engineerings from "./CourseSidebar/Engineerings";
import HotelManagements from "./CourseSidebar/HotelManagements";
import Laws from "./CourseSidebar/Laws";
import Managements from "./CourseSidebar/Managements";
import MassCommunications from "./CourseSidebar/MassCommunications";
import Medicals from "./CourseSidebar/Medicals";
import ParaMedicals from "./CourseSidebar/ParaMedicals";
import Pharmacys from "./CourseSidebar/Pharmacys";
import Sciences from "./CourseSidebar/Sciences";
import Veterinarys from "./CourseSidebar/Veterinarys";
import VocationalCourses from "./CourseSidebar/VocationalCourses";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBarWithImage></NavBarWithImage>
          <Routes>
            <Route excat path="/" element={<Home />}>
              {" "}
            </Route>
            <Route excat path="/login" element={<Login />}>
              {" "}
            </Route>

            {/*Pages folder route*/}
            <Route exact path="/addmission" element={<Addmission />}>
              {" "}
            </Route>
            <Route exact path="/appdownload" element={<Appdownload />}>
              {" "}
            </Route>
            <Route exact path="/exams" element={<Exams />}>
              {" "}
            </Route>
            <Route exact path="/news" element={<News />}>
              {" "}
            </Route>
            <Route exact path="/more" element={<More />}>
              {" "}
            </Route>
            <Route exact path="/studyabroad" element={<Studyabroad />}>
              {" "}
            </Route>
            <Route exact path="/topcollege" element={<Topcollege />}>
              {" "}
            </Route>
            {/* */}
            <Route exact path="/topcourse" element={<Topcourse />}>
              {" "}
            </Route>
            <Route exact path="/sidebar" element={<Sidebar />}>
              {" "}
            </Route>
            <Route exact path="/coursesidebar" element={<CourseSidebar />}>
              {" "}
            </Route>

            {/*COLLEGES SIDEBAR MENUS */}
            <Route path={"/agriculture"} element={<Agriculture />}></Route>
            <Route path={"/animation"} element={<Animation />}></Route>
            <Route path={"/architecture"} element={<Architecture />}></Route>
            <Route path={"/arts"} element={<Arts />}></Route>
            <Route path={"/aviation"} element={<Aviation />}></Route>
            <Route path={"/commerce"} element={<Commerce />}></Route>
            <Route
              path={"/computerapplication"}
              element={<ComputerApplication />}
            ></Route>
            <Route path={"/dental"} element={<Dental />}></Route>
            <Route path={"/design"} element={<Design />}></Route>
            <Route path={"/education"} element={<Education />}></Route>
            <Route path={"/engineering"} element={<Engineering />}></Route>
            <Route
              path={"/hotelmanagement"}
              element={<Hotelmanagement />}
            ></Route>
            <Route path={"/law"} element={<Law />}></Route>
            <Route path={"/management"} element={<Management />}></Route>
            <Route
              path={"/masscommunication"}
              element={<Masscommunication />}
            ></Route>
            <Route path={"/medical"} element={<Medical />}></Route>
            <Route path={"/paramedical"} element={<Paramedical />}></Route>
            <Route path={"/phamasy"} element={<Phamasy />}></Route>
            <Route path={"/science"} element={<Science />}></Route>
            <Route path={"/veterinary"} element={<Veterinary />}></Route>
            <Route
              path={"/vocationalcourse"}
              element={<Vocationalcourse />}
            ></Route>

            {/*COURSES SIDEBAR MENU*/}
            <Route
              path={"/courses/agricultures"}
              element={<Agricultures />}
            ></Route>
            <Route
              path={"/courses/animations"}
              element={<Animations />}
            ></Route>
            <Route
              path={"/courses/architectures"}
              element={<Architectures />}
            ></Route>
            <Route path={"/courses/art"} element={<Art />}></Route>
            <Route path={"/courses/aviations"} element={<Aviations />}></Route>
            <Route path={"/courses/commerces"} element={<Commerces />}></Route>
            <Route path={"/courses/computers"} element={<Computers />}></Route>
            <Route path={"/courses/dentals"} element={<Dentals />}></Route>
            <Route path={"/courses/designs"} element={<Designs />}></Route>
            <Route
              path={"/courses/educations"}
              element={<Educations />}
            ></Route>
            <Route
              path={"/courses/engineerings"}
              element={<Engineerings />}
            ></Route>
            <Route
              path={"/courses/hotelmanagements"}
              element={<HotelManagements />}
            ></Route>
            <Route path={"/courses/laws"} element={<Laws />}></Route>
            <Route
              path={"/courses/managements"}
              element={<Managements />}
            ></Route>
            <Route
              path={"/courses/masscommunications"}
              element={<MassCommunications />}
            ></Route>
            <Route path={"/courses/medicals"} element={<Medicals />}></Route>
            <Route
              path={"/courses/paramedicals"}
              element={<ParaMedicals />}
            ></Route>
            <Route path={"/courses/pharmacys"} element={<Pharmacys />}></Route>
            <Route path={"/courses/sciences"} element={<Sciences />}></Route>
            <Route
              path={"/courses/veterinarys"}
              element={<Veterinarys />}
            ></Route>
            <Route
              path={"/courses/vocationalcourses"}
              element={<VocationalCourses />}
            ></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
