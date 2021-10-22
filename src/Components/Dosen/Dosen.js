import React from "react";
import Card from "../../UI/Card";
import "./Dosen.css";
import DosenItems from "../DosenItems/DosenItems";
import notFound from '../../assets/not-found.svg'

const Dosen = (props) => {
  return (
    <div>
      <Card className="dosen">
        {props.dosen.length !== 0 ? (
          props.dosen.map((data) => (
            <DosenItems
              key={data.id}
              nama={data.nama}
              hari={data.hari}
              matkul={data.matkul}
              link={data.link}
            />
          ))
        ) : (
            <div className="dosen__not-found">
              <img src={notFound} alt="" />
            <p>data tidak ditemukan</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Dosen;
