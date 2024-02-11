import CharComboTemp from "../CharTempData/CharComboTemp.jsx";
import SheikData from "../Sheik/SheikData.js";
import CharComboTempCopy from "./CharComboTempCopy.jsx";
export default function TestTab() {
    return (
      <>
      <CharComboTempCopy 
      charName={"Test Tab"} 
      charImg={SheikData.charImg}
      charCombos={SheikData.charCombs}  
      />
    </>
  );
}
