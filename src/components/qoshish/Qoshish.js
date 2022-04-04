import { faBarcode, faImage, faPlusCircle, faQrcode} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./qoshish.css";
export default function Qoshish(){
  return(
    <div className="qoshish">
      <form>
        <div className="header-flex">
          <h1>Mahsulotlar</h1>
          <button type="button" onClick={() => alert("mahsulot qo'shildi")} > <FontAwesomeIcon icon={faPlusCircle} /> mahsulot qo'shish</button>
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
                <p>Shtrix kodi:</p>
                <label htmlFor="shtrix"> <FontAwesomeIcon icon={faBarcode} /> </label>
                <input type="file" id="shtrix"/>
              </div>
            </div>
            <div className="yuzi_toliq">
              <label>Nomi</label>
              <input type="text" placeholder="mahsulot nomini kiriting" />
            </div>
            <div className="mahuslot_input">
              <div>
                <label>miqdori</label>
                <input type="number"  placeholder="soni..." />
              </div>
              <div>
                <label>Omborga kiritilgan sanasi:</label>
                <input type="date" />
              </div>
              <div>
                <label>Yana birnarsasi:</label>
                <input type="text" placeholder="Yana birnarsasi:" />
              </div>
              <div>
                <label>hajmi:</label>
                <input type="number" placeholder="5V" />
              </div>
              <div>
                <label>vazni:</label>
                <input type="number" placeholder="8kg" />
              </div>
              <div>
                <label>o'lchamlari</label>
                <input type="text" placeholder="XX cm / YY cm / ZZ cm" />
              </div>
              <div>
                <label>Ishlab chiqarilgan sana:</label>
                <input type="date"/>
              </div>
              <div>
                <label>Yaroqlilik Muddati:</label>
                <input type="date"/>
              </div>
            </div>
            <div className="yuzi_toliq">
              <label>Qo'shimcha izoh:</label>
              {/* <input type="text"  /> */}
              <textarea id="textarea"></textarea>
            </div>
          </div>        
        </div>
      </form>
    </div>
  )
}