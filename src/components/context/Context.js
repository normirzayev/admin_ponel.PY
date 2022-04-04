import React, { useState } from "react";
import profile from "../../img/profile.jpg"

export const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([
    { id:1, nomi: "Nomdddddddi Alamassa BIrnarsalar Yana nimalardir", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:2, nomi: "Nomi Alamassa BIrnarsalar Yana nimalardir", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:3, nomi: "Nomi Alamassa BIrnarsalar Yana nimalardir", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:4, nomi: "Nomi Alamassa BIrnarsalar Yana nimalardir", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:5, nomi: "Nomi Alamassa BIrnarsalar Yana nimalardir", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
  ])
  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  )
} 
export default DataContextProvider;