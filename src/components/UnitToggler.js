import React, {useContext} from "react"
import '../styles/UnitToggler.scss';
import {AppContext} from "./appContext";

const UnitToggler = (props) => {
const context = useContext(AppContext);

return (

				<div className="unitToggler">
						<button onClick={context.toggleUnits}>&#176; {context.appData.units==="metric"?"F":"C"} </button>
				</div>

			)
}



export default UnitToggler;