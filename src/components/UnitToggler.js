import React, {useContext} from "react"
import '../styles/UnitToggler.scss';
import { WeatherContext } from "./appContext";

const UnitToggler = (props) => {
const appContext = useContext(WeatherContext)

return (

				<div className="unitToggler">
						<button onClick={appContext.unitToggler}>&#176; {appContext.units==="metric"?"F":"C"} </button>
				</div>

			)
}



export default UnitToggler;