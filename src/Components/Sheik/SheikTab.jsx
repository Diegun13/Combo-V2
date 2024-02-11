import CharComboTemp from "../CharTempData/CharComboTemp.jsx";
import SheikData from "./SheikData.js";

export default function SheikTab() {
    return (
      <>
      <CharComboTemp 
      charName={SheikData.charName} 
      charImg={SheikData.charImg}
      charCombos={SheikData.charCombs}  
      />
    </>
  );
}
