import React, {useContext} from "react";
import { DataContext } from "../context/Context";
import { faEdit, faPlusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom"
import "./mahsulot.css";
export default function Mahsulotlar(){
  const path = useNavigate();  
  const {data, setData} = useContext(DataContext);
  return(
    <div className="mahsulotlar">
        <div className="header-flex">
          <h1>Mahsulotlar</h1>
          <button onClick={()=> path("/mahsulotqoshish")}> <FontAwesomeIcon icon={faPlusCircle} /> mahsulot qo'shish</button>
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
                <th>operatsiya</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(item => (
                  <tr key={item.id}>
                    <th>t/r</th>
                    <td>{item.nomi}</td>
                    <td>{item.miqdori}</td>
                    <td>{item.malumot}</td>
                    <td>{item.qoshimcha}</td>
                    <td><div className="mahsulot_rasmi"><img src={item.rasmi} alt="mahsulot rasmi" /></div></td>
                    <td>
                      <button className="edit"> <FontAwesomeIcon icon={faEdit} /> </button>
                      <button className="delete"> <FontAwesomeIcon icon={faTrashAlt} /></button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}