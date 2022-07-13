import React from "react";
import "./Grandpa.css";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import { createContext, useState } from "react";

/* Context API */
/* 
    * 1. call createContext with a default value;
    * 2. set a variable of the context with uppercase;
    * 3. make sure you export the context to use it in other places;
    * 4. wrap your child content using RingContext.Provider(AnyContext.Provider);
    * 5. provide a value;
    * 6. to consume the context from child component, use "useContext" hook and you'll need to pass the contextName;
*/

export const RingContext = createContext("ring");

const Grandpa = () => {
  const [house, setHouse] = useState(0);

  const ornament = "Diamond Ring";

  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };

  return (
    <RingContext.Provider value= {[ornament, house, setHouse, handleBuyAHouse]}>
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
