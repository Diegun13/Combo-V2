
import "../../App.css";
import "./Combo.css"
function OldCombo(props) {
  
  return (
    <>
      <div className="comboVidContinater">
        {props.showvid && <img className="comboVid" src={props.gif} />}
        <figcaption className="vidCaps" >{props.title}</figcaption>
        
      </div>
      <hr />
    </>
  );
}
export default OldCombo;
