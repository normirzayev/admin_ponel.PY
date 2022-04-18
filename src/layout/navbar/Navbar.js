import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Mahsulotlar from "../../components/mahsulotlar/Mahsulotlar";
import Qoshish from "../../components/qoshish/Qoshish";
import user from "../../img/profile.jpg";
import "./navbar.css";
import { faCamera, faRightLong } from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState } from "react";
import Hisobot from "../../components/hisobot/Hisobot";
import Erorr from "../erorr/Erorr";
import EditData from "../../components/editData/EditData";
import Royxat from "../../components/ro'yxat_o'tish/Royxat";
export default function Navbar() {
  const [profile, setProfile] = useState(true)
  const linkk = useNavigate();
  const handleProfile = () => {
    setProfile(!profile)
  }
  const [name, setName] = useState({});
  useEffect(() => {
    // setInterval(() => {
      if(localStorage.getItem("user") && localStorage.getItem("token") ){
        setName(JSON.parse(localStorage.getItem("user")))
      }
      else{
        linkk("/royxat")
      }
    // }, 1500);
  }, [])

  const logOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    linkk("/royxat")
    setProfile(!profile)
  }

  // navlink active qilish state
  const [nav, setNav] = useState(false);
  const handleNavlink = () => {
    setNav(!nav);
  }
  return(
    <>
      <div className="header">
        <div className="logo"><span>Logo</span> Company</div>
        <div className="profile">
          <div className="user"> <p>{name.username}</p></div>
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
            <p>{name.username}</p>
          </div>
          <div className="tugmalar">
              <button>Tahrirlash</button>
              <button onClick={logOut}> chiqish</button>
          </div>
          <div id="royxatdan_otish">
            <a href="#1" onClick={() => logOut()}>
              Ro'yxatdan o'tish
            </a>
          </div>
        </div>
        </div>
      </div>
      <div className="page_comp">
        <nav className={nav ? "nav" : "nav activ"}>
          <NavLink to="/"activeclassname="active" onClick={() => setNav(!nav)}><pre>mahsulotlar</pre> <FontAwesomeIcon className="icon_left" icon={faRightLong} />  </NavLink>
          <NavLink to="/hisobot" onClick={() => setNav(!nav)}><pre>hisobot</pre>  <FontAwesomeIcon icon={faRightLong} className="icon_left"/> </NavLink>
          <NavLink to="/mahsulotqoshish" onClick={() => setNav(!nav)}><pre>mahsulot qo'shish</pre>  <FontAwesomeIcon className="icon_left" icon={faRightLong}/> </NavLink>
        </nav>
          <div className={nav ? "hamburger" : "hamburger activ"} onClick={() => handleNavlink()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        <Routes>
          <Route path="/" element={<Mahsulotlar />} /> 
          <Route path="/hisobot" element={<Hisobot />} /> 
          <Route path="/mahsulotqoshish" element={<Qoshish />} /> 
          <Route path="/mahsulottahrirlash" element={<EditData />} /> 
          <Route path="/royxat" element={< Royxat />} />
          <Route path="*"  element={<Erorr /> } />
        </Routes>
      </div>
    </>
  )
}