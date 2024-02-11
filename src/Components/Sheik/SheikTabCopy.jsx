import Combo from "../Combo/Combo.jsx";
import { comboVod } from "../Combo/ComboData.js";
import sheikBG from "../../assests/Sheik/Sheik_SSBU.png";
import InnerNav from "../InnerNav/InnerNav.jsx";
import { useState } from "react";
import KillConfrims from "../Combo/KillConfrims.jsx";
import { Link } from "react-router-dom";

export default function SheikTabCopy() {
  let listOfCombos = comboVod.map((item) => (
    <Combo key={item.id} combo={item} />
    ));
    
    // Handle the change of the screen
    const [displaylist, setDisplayList] = useState(listOfCombos)

    //Handle the change of the nav
    const [selectedNav, setSelectedNav] = useState(listOfCombos);
    function handleNavChange(e) {
      let newNav = e
      setSelectedNav(newNav);
      console.log(e);
      function test(){
      setDisplayList(selectedNav);
      }
      test()
    }
    //Handle the change of the move filter
    const [filterMove, setFilterMove] = useState("all");
    function handleFilterChange(e) {
      setFilterMove(e.target.value);
      changelist(e.target.value);
    }

    function changelist(move) {
      if (move === "" || move === "all") {
        setDisplayList(listOfCombos);
      } else {
        const filteredCombos = comboVod
          .filter((combo) => combo.startingMove === move)
          .map((item) => <Combo key={item.id} combo={item} />);
        setDisplayList(filteredCombos);
      }
    }
 
    
  
    
    return (
      <>
      <div className="bg-UFD-Combo-bg text-white">
        <h1 className="text-center bg-UFD-bg">Sheik</h1>

        <div className="flex">
          <div className="flex flex-col bg-blue-400 ">
          
            <img onClick={()=> window.location.reload(false)} className="w-36 pb-3 cursor-pointer" src={sheikBG}  />
            
            <InnerNav nextNav={handleNavChange} />
          </div>
          <div className="flex flex-col">
          
            <select className="text-black" value={filterMove} onChange={handleFilterChange}>
            <option value={"all"}>All</option>
            <option value={"jab"}>Jab</option>
            <option value={"n-air"}>n-air</option>
            <option value={"f-air"}>f-air</option>
            </select>
            
          <div className="flex flex-grow flex-wrap gap-4 overflow-scroll justify-center ">
            {displaylist}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
