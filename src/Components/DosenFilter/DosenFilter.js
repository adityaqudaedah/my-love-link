import React from "react";
import "./DosenFilter.css";
import Card from '../../UI/Card'

const DosenFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }
  return (
    <Card className="dosen-filter">
      <div className="dosen-filter__control">
        <label> Filter by day</label>
        <select className ="drop-down" value={props.selected} onChange={dropDownChangeHandler}>
          <option value="senin">senin</option>
          <option value="selasa">selasa</option>
          <option value="rabu">rabu</option>
          <option value="kamis">kamis</option>
          <option value="jumat">jum'at</option>
          <option value="sabtu">sabtu</option>
        </select>
      </div>
    </Card>
  );
};

export default DosenFilter;
