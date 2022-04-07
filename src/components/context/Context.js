import React, { useEffect, useState } from "react";
import profile from "../../img/profile.jpg"

export const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([
    { id:1, nomi: "1", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:2, nomi: "2", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:3, nomi: "3", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:4, nomi: "4", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:5, nomi: "5", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:6, nomi: "6", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:7, nomi: "7", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:8, nomi: "8", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:9, nomi: "9", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:10, nomi: "10", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:11, nomi: "11", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:12, nomi: "12", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:13, nomi: "13", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
    { id:14, nomi: "14", miqdori:"120015", malumot: "malumot", qoshimcha:"qoshimcha malumot", rasmi: profile},
  ]);
  const [captcha] = useState( btoa(parseInt(Math.random() * 1000)));
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const index0LastPost = currentPage * postsPerPage;
  const index0FirstPost = index0LastPost - postsPerPage;
  const currentPosts = data.slice(index0FirstPost, index0LastPost);

  let totalPosts = data.length;
  const pagenate = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  }    
  return (
    <DataContext.Provider value={{currentPosts, setData, captcha, totalPosts, postsPerPage, pagenate}}>
      {children}
    </DataContext.Provider>
  )
} 
export default DataContextProvider;