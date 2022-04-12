import { faBarcode, faImage, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function EditData(){
  return(
    <div className="qoshish">
      <form>
        <div className="header-flex">
          <h1>Mahsulot haqida</h1>
          <button type="submit">o'zgartirish</button>
        </div>
        <div className="mahsulot_kirit">
          <div>
            <div className="mahsulot_img">
              <label htmlFor="rasm">
                <FontAwesomeIcon icon={faImage} /> 
              </label>
              <input type="file" id="rasm"/>
            </div>
          </div>
          <div className="mahsulot_kiritish">
            <div className="mahsulot_view">
              <div>
                <p>QR kodi:</p>
                <label htmlFor="QR"> <FontAwesomeIcon icon={faQrcode} /> </label>
                <input type="file" id="QR"/>
              </div>
              <div>
                <p>barcode:</p>
                <label htmlFor="shtrix"> <FontAwesomeIcon icon={faBarcode} /> </label>
                <input type="file" id="shtrix"/>
              </div>
            </div>
            <div className="yuzi_toliq">
              <label>Nomi</label>
              <input type="text" placeholder="mahsulot nomini kiriting" 
                name="nom"  
              />
            </div>
            <div className="mahuslot_input">
              <div>
                <label>soni</label>
                <input type="number"  placeholder="soni..." 
                  name="son" 
                />
              </div>
              <div>
                <label>narxi:</label>
                <input type="text" 
                  name="narx"  
                />
              </div>
              <div>
                <label>rang:</label>
                <input type="text" placeholder="rangi" 
                  name="rang"  
                />
              </div>
              <div>
                <label>kompania:</label>
                <input type="text" placeholder="kompania nomi" 
                  name="kompania"
                />
              </div>
              <div>
                <label>vazni:</label>
                <input type="number" placeholder="raqam kiriting" 
                  name="kg"                 />
              </div>
              <div>
                <label>tur:</label>
                <input type="text" placeholder="mahsulot turi" 
                  name="tur" 
                />
              </div>
              <div>
                <label>Omborga kiritilgan sanasi:</label>
                <input type="date" 
                  name="sana"  
                />
              </div>
              <div>
                <label>Yaroqlilik Muddati:</label>
                <input type="date" 
                  name="mudat"
                />
              </div>
            </div>
            <div className="yuzi_toliq">
              <label>Qo'shimcha izoh:</label>
              <textarea id="textarea"
                name="izoh"
              ></textarea>
            </div>
          </div>        
        </div>
      </form>
    </div>
  )
}