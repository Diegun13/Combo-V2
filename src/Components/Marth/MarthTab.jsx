import CharComboTemp from "../CharTempData/CharComboTemp";
import MarthData from "./MarthData";
export default function MarthTab() {
  return (
    <>
      <CharComboTemp
        charName={MarthData.charName}
        charImg={MarthData.charImg}
        charCombos={MarthData.charCombs}
      />
    </>
  );
}
