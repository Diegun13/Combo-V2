import KillConfrims from "../Combo/KillConfrims";

export default function InnerNav(props) {

    return (
        <>
            <nav className="pl-5 w-36" >
            <ul>
                <li onClick={()=>props.nextNav(listOfCombos)}  className="hover:bg-green-500">Combo</li>
                <li onClick={()=>props.nextNav(<KillConfrims/>)}  className="hover:bg-green-500"> Kill Confomes</li>
              </ul>
            </nav>
        </>
    );
}