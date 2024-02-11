import marthBG from "../../assests/Marth/Marth_SSBU.png";
import combo1 from "../../assests/Marth/Marth beginner combos/combo1.gif";
import combo2 from "../../assests/Marth/Marth beginner combos/combo2.gif";


let MarthData = {
    charName: "Marth",
    charImg: marthBG,
    charCombs:  [{
        id: 1,
        file: combo1,
        title: "combo1",
        startingpercent: 0,
        startingMove: "f-air"
      },
      {
        id: 2,
        file: combo2,
        title: "combo2",
        startingpercent: 0,
        startingMove: "d-air"
      },
     ],
}

export default MarthData