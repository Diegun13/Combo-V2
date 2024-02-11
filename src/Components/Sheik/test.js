import { useState } from "react";


export default function SheikTab() {
  const [selectedMove, setSelectedMove] = useState("");

  const filteredCombos = comboVod.filter((item) =>
    item.startingMove.toLowerCase().includes(selectedMove.toLowerCase())
  );

  let listOfCombos = filteredCombos.map((item) => (
    <Combo key={item.id} combo={item} />
  ));

  return (
    <>
      <div className="bg-UFD-bg text-white h-full">
        <div className="flex">
          <img className="w-24 absolute" src={sheikBG} alt="Sheik" />
          <h1 className="text-center flex-auto">Sheik</h1>
        </div>
        <div className="flex">
          <div className="flex-auto flex flex-wrap gap-4 justify-center">
            {listOfCombos}
          </div>
          <div className="bg-green-400">
            <nav>
                
                <select onChange={(e) => setSelectedMove(e.target.value)}>
                    <option value="">Select a move</option>
                    <option value="f-tilt">F-Tilt</option>
                    <option value="up-tilt">Up-Tilt</option>
                    <option value="down-tilt">Down-Tilt</option>
                    <option value="dash-attack">Dash Attack</option>
                    <option value="forward-smash">Forward Smash</option>
                    <option value="up-smash">Up Smash</option>
                    <option value="down-smash">Down Smash</option>
                    <option value="neutral-air">Neutral Air</option>
                    <option value="forward-air">Forward Air</option>
                    <option value="back-air">Back Air</option>
                    <option value="up-air">Up Air</option>
                    <option value="down-air">Down Air</option>
                    <option value="neutral-special">Neutral Special</option>
                    <option value="side-special">Side Special</option>
                    <option value="up-special">Up Special</option>
                    <option value="down-special">Down Special</option>
                </select>

        </nav>
