import React, {useContext} from "react";
import { DataContext } from "../context/Context";
import "./loader.css";
export default function Loader() {
  const {laod} = useContext(DataContext)
  return(
    <>
      <div className="loader">
        <div className="spans">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  )
}