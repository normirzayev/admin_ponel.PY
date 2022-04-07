import React, {useContext, useState} from "react";
import { DataContext } from "../context/Context";
import { faEdit, faPlusCircle, faSearch, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom"
import "./mahsulot.css";
import Pagenation from "../../layout/pagenation/Pagenation";
export default function Mahsulotlar(){
  const path = useNavigate();  
  const {currentPosts} = useContext(DataContext);
  const [searchTeam, setSerachTeam] = useState("");
  const [search, setSearch] = useState(true);
  const handleSerach = () => {
    setSearch(!search);
    console.log(search);
  }
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
                <th>
                  nomi
                  <div className={search ? "searchTeam" : "searchTeam searchActive"}>
                    <FontAwesomeIcon icon={faSearch} className="searchIcon" onClick={handleSerach} />
                    {/* <input type="text"/> */}
                    <input type="text" 
                      placeholder="search..." 
                      className={search ? "searchInput" : "searchInput searchActive "}
                      onChange={(e) => {
                        setSerachTeam(e.target.value)
                      }}
                    />
                  </div>
                </th>
                <th>miqdori</th>
                <th>yana nimadir</th>
                <th>birnarsa</th>
                <th>rasmi</th>
                <th>operatsiya</th>
              </tr>
            </thead>
            <tbody>
              {
                currentPosts.filter((item) => {
                  if(searchTeam == ""){
                    return item
                  }
                  else if (item.nomi.toLowerCase().includes(searchTeam.toLocaleLowerCase())){
                    return item
                  }
                }).map(item => (
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
              <Pagenation />
        </div>
    </div>
  )
}