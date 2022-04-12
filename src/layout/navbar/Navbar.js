import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Mahsulotlar from "../../components/mahsulotlar/Mahsulotlar";
import Qoshish from "../../components/qoshish/Qoshish";
import user from "../../img/profile.jpg";
import "./navbar.css";
import { faCamera, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Hisobot from "../../components/hisobot/Hisobot";
import Erorr from "../erorr/Erorr";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import EditData from "../../components/editData/EditData";
export default function Navbar() {
  const [profile, setProfile] = useState(true)
  const handleProfile = () => {
    setProfile(!profile)
  }
  return(
    <Router>
      <div className="header">
        <div className="logo"><span>Logo</span> Company</div>
        <div className="profile">
          <div className="user"> <p>eshmatov toshmat</p></div>
          <div className="profile_rasm" onClick={() => handleProfile()}>
            <img src={user} alt="profile" />
          </div>
        <div className={profile ? "profile-about" : "profile-about actives"}>
          <div className="chiqish" onClick={() => setProfile(!profile)} >x</div>
          <div className="about_rasm">
            <input type="file" id="profile_input" />
            <label htmlFor="profile_input"><img src={user} alt="profile"/></label>
            <span> <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> </span>
          </div>          
          <div className="user">
            <p>eshmatov toshmat</p>
          </div>
          <div className="tugmalar">
              <button>Tahrirlash</button>
              <button>chiqish</button>
          </div>
        </div>
        </div>
      </div>
      <div className="page_comp">
        <nav>
          <NavLink to="/"activeclassname="active"><pre>mahsulotlar</pre> <FontAwesomeIcon className="icon_left" icon={faRightLong}/>  </NavLink>
          <NavLink to="/hisobot"><pre>hisobot</pre>  <FontAwesomeIcon icon={faRightLong} className="icon_left"/> </NavLink>
          <NavLink to="/mahsulotqoshish"><pre>mahsulot qo'shish</pre>  <FontAwesomeIcon className="icon_left" icon={faRightLong}/> </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Mahsulotlar />} /> 
          <Route path="/hisobot" element={<Hisobot />} /> 
          <Route path="/mahsulotqoshish" element={<Qoshish />} /> 
          <Route path="/mahsulottahrirlash" element={<EditData />} /> 
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*"  element={<Erorr /> } />
        </Routes>
      </div>
    </Router>
  )
}