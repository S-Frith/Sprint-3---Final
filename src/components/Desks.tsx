import React, { useEffect, useState } from "react";

import UserID from "./userID";

function Desks(props: any) {
  // List of desks
  const [desks, setDesks] = useState<{ deskName: string; deskID: number }[]>([
    { deskName: "Desk 1", deskID: 1 },
    { deskName: "Desk 2", deskID: 2 },
    { deskName: "Desk 3", deskID: 3 },
  ]);

  // input box value
  const [searchName, setSearchName] = useState<any>();

  // Load calendar function
  const loadCal = (deskName: string) => {
    props.setDesksApp(deskName);
    console.log(`Loading calendar... ${deskName}`);
  };

  //   Search for desks via input box val
  //   const searchDesks = (input: string) => {
  //     console.log(`My input is ${input}`);
  //     for (let i = 0; i < desks.length; i++) {
  //       console.log("looking for entries");
  //       if (desks[i].deskName == input) {
  //         console.log("found!");
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     searchDesks(searchName);
  //   }, [searchName]);

  // NOTE: Change to form with onSubmit handler to pass input box searches
  return (
    <div className="deskContainer">
      {/* <h3>Search Desk</h3>
      <form>
        <input
          className="deskInput"
          type="text"
          onChange={(e) => setSearchName(e.target.value)}
        />
      </form> */}

      <h3>Select Desk</h3>

      {desks.map((desk) => (
        <div key={desk.deskID}>
          <button
            className="deskButton"
            type="button"
            onClick={() => {
              loadCal(desk.deskName);
            }}
          >
            {desk.deskName}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Desks;

// const desks = [
//     {deskname: "lll", deskid: 123}
//     ]

//     const reduceDesks = (e) => {
//     const arr = desks.reduce(dr => {
//     return dr.deskname.includes(e.target.value)
//     })

//     setDesks(arr)
//     }

//     return <>
//     <input onChange={e => reduceDesks(e)}></input>
//     {desks}
//     </>
