import React, { useState, useEffect } from "react";
import Dosen from "./Components/Dosen/Dosen";
import DosenFilter from "./Components/DosenFilter/DosenFilter";
import DosenForm from "./Components/DosenForm/DosenForm";
import { db } from "./firebase/fire-config";
import { collection, getDocs } from "firebase/firestore";
import Title from './Components/Title/Title'
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [filteredDay, setFilteredDay] = useState("senin");
  const [dosen, setDosen] = useState([]);
  const dosenCollectionRef = collection(db,'dosen')

  const filteredDosen = dosen.filter((data) => {
    return data.hari === filteredDay
  })

  const changeFilterHandler = (selectedYear) => {
    setFilteredDay(selectedYear)
  }
  useEffect(() => {
    const getDosen = async () => {
      const dataDosen = await getDocs(dosenCollectionRef);
      setDosen(dataDosen.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDosen();
  }, []);
  return (
    <div>
      <Title />
      <DosenForm />
      <DosenFilter selected={filteredDay} onChangeFilter={changeFilterHandler}/>
      <Dosen dosen={filteredDosen} />
      <Footer />
    </div>
  );
};

export default App;
