import axios from "axios";
import React, { useEffect, useState } from "react";
// 

export const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {
  // malumot boshlang'ich ( Read )
  const [data, setData] = useState([]);
  const dataMaxsulot = () =>{
    axios({
      method: "GET",
      url:"https://v2warehouseproject.pythonanywhere.com/products/?format=json"
    })
      .then((res) => setData(res.data))
      .catch(() => console.log("xatolik boldi"))
  }
  useEffect(() => {
    dataMaxsulot()
  }, [])

  // malumot qo'shish (state)
  const [creatData, setCreate] = useState({
    tur: "",
    nom: "",
    rang: "",
    narx: "",
    son: "",
    kompania: "",
    mudat: "",
    kg: "",
    izoh: "",
    sana: "",
    qr_code: "",
    barcode: "",
    rasm: ""
  })
  // malumotni tahrirlash qilish (edit)
  const [edit_Data, setEdit_Create] = useState({
    tur: "",
    nom: "",
    rang: "",
    narx: "",
    son: "",
    kompania: "",
    mudat: "",
    kg: "",
    izoh: "",
    sana: "",
    qr_code: "",
    barcode: "",
    rasm: ""
  })
  // captcha 
  const [captcha] = useState(btoa(parseInt(Math.random() * 1000)));

  // pagenation qilish
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const index0LastPost = currentPage * postsPerPage;
  const index0FirstPost = index0LastPost - postsPerPage;
  const currentPosts = data.slice(index0FirstPost, index0LastPost);
  let totalPosts = data.length;
  const pagenate = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  }

  // select 
  const [select, setSelect] = useState({
    select: null
  })

  // loader
  const [load, setLoad] = useState(false);
  
  return (
    <DataContext.Provider value={{ 
        currentPosts, setData, captcha, totalPosts, postsPerPage, pagenate, select, setSelect, 
        creatData, setCreate,edit_Data, setEdit_Create,dataMaxsulot, load, setLoad
    }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataContextProvider;