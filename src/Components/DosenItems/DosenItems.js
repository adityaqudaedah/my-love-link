import React, { useState,useRef,} from "react";
import Card from "../../UI/Card";
import "./DosenItems.css";
import avatar from "../../assets/man.png";
import dropdown from "../../assets/dropdown.png";

// import clipboard from '../../assets/clipboard.png';
const DosenItems = (props) => {
  const [clipboard,setClipboard] = useState('copy to clipboard')
  const [showDescription, setShowDescription] = useState(false);
  const linkValue = useRef(null)

  const getLink = () => {
    setClipboard(`coppied : ${linkValue.current.innerHTML}`)
    navigator.clipboard.writeText(linkValue.current.innerHTML);
  }
  
  const outHandler = (params) => {
    setClipboard('copy to clipboard' )
  }
  let photoDegree = 0;
  const dropDownHandler = () => {
    setShowDescription(!showDescription);
    photoDegree += 270 + "deg";
  };

  return (
    <Card className="dosen-items">
      <div className="dosen-items__name-tag">
        <img src={avatar} alt="" />
        <h4>{props.nama}</h4>
        <span onClick={dropDownHandler} id="drop-down">
          <img
            alt=""
            src={dropdown}
            style={
              showDescription
                ? { transform: `rotate(90deg)` }
                : { transform: `rotate(${photoDegree})` }
            }
          />
        </span>
      </div>

      {showDescription ? (
        <div className="dosen-items__description">
          <h5>
            Mata Kuliah : <span className="tags">{props.matkul}</span>
          </h5>
          <h5>
            Hari Mengajar : <span className="tags">{props.hari}</span>
          </h5>
          <h5>
            Link :
            <a href={props.link} className="tags" id="link" ref={linkValue}>
             {props.link}
            </a>
            <span onMouseOut={outHandler} onClick={getLink}className="tags copy tooltip" id="copy-hover">
              Copy <span className="tooltiptext"><span>{clipboard}</span></span>
            </span>
          </h5>
        </div>
      ) : (
        <div className="dosen-items__description" style={{ display: "none" }}>
          <h5>matkul</h5>
          <h5>hari mengajar</h5>
          <h5>link </h5>
        </div>
      )}
    </Card>
  );
};

export default DosenItems;
