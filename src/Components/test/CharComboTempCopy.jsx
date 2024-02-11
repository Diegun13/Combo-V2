import Combo from "../Combo/Combo.jsx";
import { useState } from "react";
import InnerNav from "../InnerNav/InnerNav.jsx";
import FilterCombos from "./filterCombos.jsx";

export default function CharComboTempCopy({charName,charImg,charCombos}) {
  let listOfCombos = charCombos.map((item) => (
    <Combo key={item.id} combo={item} />
    ));
    
    // Handle the change of the screen
    const [displaylist, setDisplayList] = useState(listOfCombos)
    
    //Handle the change of the move filter
    const [filterMove, setFilterMove] = useState("all");
  

    function changelist(move) {
      if (move === "" || move === "all") {
        setDisplayList(listOfCombos);
      } else {
        const filteredCombos = charCombos
          .filter((combo) => combo.startingMove === move)
          .map((item) => <Combo key={item.id} combo={item} />);
        setDisplayList(filteredCombos);
      }
    }
    function handleFilterChange(e) {
      setFilterMove(e.target.value);
      changelist(e.target.value);
    }
return(
  <>
    <h1 className="text-center bg-UFD-bg text-white">{charName}</h1>
    
    <div className="MainContainter" >
    
      <div className="NavTab">
        <img onClick={()=> window.location.reload(false)} className="w-36 pb-3 cursor-pointer" src={charImg}  />
        <InnerNav  />
      </div>

      


  
      <div className="ComboTab">
        <FilterCombos value={filterMove} onChange={handleFilterChange} />
        {displaylist} 
      </div>
    </div>
    
          
          
  </>
)
}