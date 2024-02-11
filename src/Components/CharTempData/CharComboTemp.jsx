import Combo from "../Combo/Combo.jsx";
import { useState } from "react";
import InnerNav from "../InnerNav/InnerNav.jsx";

export default function CharComboTemp({charName,charImg,charCombos}) {
  let listOfCombos = charCombos.map((item) => (
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
        const filteredCombos = charCombos
          .filter((combo) => combo.startingMove === move)
          .map((item) => <Combo key={item.id} combo={item} />);
        setDisplayList(filteredCombos);
      }
    }
return(
  <>
    <div className=" flex flex-col bg-slate-800 h-screen text-white">
                                {/* name area */}
        <h1 className="text-center bg-UFD-bg">{charName}</h1>
      <div className="flex h-full bg-UFD-bg text-white">

        {/* <div className="flex"> */}
          <div className="flex flex-col bg-UFD-Char-bg ">
                                {/* char img */}
            <img onClick={()=> window.location.reload(false)} className="w-36 pb-3 cursor-pointer" src={charImg}  />
                                {/* nav area opsional */}
            <InnerNav nextNav={handleNavChange} />
          </div>
                                {/* move filters */}
          <div className="flex flex-col">
          
            <select className="text-black" value={filterMove} onChange={handleFilterChange}>
            <option value={"all"}>All</option>
            <option value={"jab"}>Jab</option>
            <option value={"n-air"}>n-air</option>
            <option value={"f-air"}>f-air</option>
            </select>
                                {/* area of the combs */}
          <div className="flex flex-wrap gap-4  overflow-scroll justify-center ">
          
            {displaylist}
          
          </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  </>
)
}