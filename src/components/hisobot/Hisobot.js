import React, {useContext} from "react";
import { DataContext } from "../context/Context";
import { useNavigate } from "react-router-dom"
import "./hisobot.css";
export default function Hisobot(){
  const path = useNavigate();  
  const {data, setData} = useContext(DataContext);
  return(
    <div className="hisobot">
      <div className="header-flex">
        <h1>hisobot</h1>
        <div className="saralash">
          <input type="date" />
          dan
          <input type="date" />
          gacha
          <button>Saralash</button>
        </div>
      </div>
      <div className="mahsulot_table">
        <table>
          <thead>
            <tr>
              <th>t/r</th>
              <th>nomi</th>
              <th>miqdori</th>
              <th>yana nimadir</th>
              <th>birnarsa</th>
              <th>rasmi</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(item => (
                <tr>
                  <th>t/r</th>
                  <td>{item.nomi}</td>
                  <td>{item.miqdori}</td>
                  <td>{item.malumot}</td>
                  <td>{item.qoshimcha}</td>
                  <td><div className="mahsulot_rasmi"><img src={item.rasmi} alt="mahsulot rasmi" /></div></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}