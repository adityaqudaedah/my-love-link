import React, { useState } from "react";
import "./InputDosen.css";
import avatars from "../../assets/avatars_img.jpg";
// import {db} from '../../firebase/fire-config'
import { auth } from "../../firebase/fire-config";
import { signOut } from "firebase/auth";
import { db } from "../../firebase/fire-config";
import { collection, addDoc } from "firebase/firestore";

const InputDosen = (props) => {
  const dosenCollectionRef = collection(db, "dosen");

  const [nama, setNama] = useState("");
  const [matkul, setMatkul] = useState("");
  const [hari, setHari] = useState("");
  const [link, setLink] = useState("");

  /* nama handler*/
  const namaHandler = (event) => {
    setNama(event.target.value);
  };
  /* matkul handler*/
  const matkulHandler = (event) => {
    setMatkul(event.target.value);
  };
  /* hari handler*/
  const hariHandler = (event) => {
    setHari(event.target.value);
  };
  /* link handler*/
  const linkHandler = (event) => {
    setLink(event.target.value);
  };

  /* add dosen handler*/
  const createDosen = async (event) => {
    event.preventDefault();
    if ((nama || matkul || hari || link) === "") {
      alert("your input is invalid");
    } else {
      await addDoc(dosenCollectionRef, {
        nama: nama,
        matkul: matkul,
        hari: hari,
        link: link,
      });
      alert('input berhasil')
      setNama("");
      setMatkul("");
      setHari("");
      setLink("");
    }
  };
  /* cancel handler*/
  const cancelHandler = (event) => {
    event.preventDefault()
    setNama("");
    setMatkul("");
    setHari("");
    setLink("");
  }

  const logoutHanlder = () => {
    signOut(auth);
  };

  return (
    <form action="sumbit" className="input-dosen-form">
      <div className="input-dosen-form__logout">
        <a onClick={logoutHanlder} href="">
          Logout
        </a>
      </div>
      <div className="input-dosen-form__admin">
        <div className="input-dosen__avatar">
          <img src={avatars} alt="" />
        </div>

        <h3>Hi, {props.getUserName}</h3>
      </div>
      <div className="input-group__input">
        <input value={ nama} onChange={namaHandler} type="text" placeholder="nama..." />
      </div>
      <div className="input-dosen-form__matkul">
        <div className="input-group__input left-items">
          <input value={matkul}  onChange={matkulHandler} type="text" placeholder="matkul..." />
        </div>
        <div className="input-group__input right-items">
          <input
            value={hari} 
            onChange={hariHandler}
            type="text"
            placeholder="hari mengajar..."
          />
        </div>
      </div>

      <div className="input-group__input">
        <input
          value={link}
          onChange={linkHandler}
          type="text"
          placeholder="link gmeet,zoom..."
        />
      </div>

      <div className="input-form-dosen__action">
        <button onClick={cancelHandler} id="cancel-button">Cancel</button>
        <button onClick={createDosen}>Add Dosen</button>
      </div>
    </form>
  );
};

export default InputDosen;
