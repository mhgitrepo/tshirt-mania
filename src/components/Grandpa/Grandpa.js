import React from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import { createContext, useState } from "react";

export const RingContext = createContext("ring");

const Grandpa = () => {
  const [house, setHouse] = useState(0);

  const ornament = "Diamond Ring";

  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };

  return (
    <RingContext.Provider value= {ornament}>
      <div className="grandpa">
        <h3>GrandPa</h3>
        <p>
          <button onClick={handleBuyAHouse}>Buy A House</button> house: {house}
        </p>
        <section style={{ display: "flex" }}>
          <Father house={house}/>
          <Uncle house={house} />
          <Aunty house={house} />
        </section>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
