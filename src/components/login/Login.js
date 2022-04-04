import captcha from "../../img/captcha.png";
import user_img from "../../img/user_img.png";
import show from "../../img/show.png";
import hidden from "../../img/hidden.png";
import "./login.css";
import { useState } from "react";
export default function Login () {
  const [shown, setSHown] = useState(true);
  const handleShow = () =>{
    setSHown(!shown);
    
  }
  return (
    <div className="login_oyna">
      <div className="header">
        <div className="logo"><span>Logo</span> Company</div>
        <div className="profile">
          <div className="profile_rasm">
            <img src={user_img} alt="profile" />
          </div>
        </div>
      </div>
      <div className="login">
        <form>
          <div className="forma_input">
            <dir className="form">
                <input type="text" placeholder=" " id="email" className="form_input" />
                <label className="form_label">Email</label>
            </dir>
            <dir className="parol">
                <input type={shown ? "password" : "text"} placeholder=" " id="parol" className="parol_input" />
                {
                  shown ? <span className="show" onClick={() => handleShow()} ><img src={hidden} alt="show" /> </span> 
                  : <span className="hidden" onClick={() => handleShow()} ><img src={show} alt="hiden" /> </span>
                }
                <label className="parol_label">Parol</label>
            </dir>
          </div>
          <a href="#1" >Parolni unutdingizmi?</a>
          <div className="captcha">
            <img src={captcha} alt="captcha" />
            <input type="text" placeholder="Kaptchani kiriting" />
          </div>
          <button> Kirish </button>
        </form>
      </div>
    </div>
  )
}