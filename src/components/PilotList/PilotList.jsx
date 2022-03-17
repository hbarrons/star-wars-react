import { useEffect, useState } from "react";
import { useLocation } from "react-router";


const PilotList = (props) => {
  const [pilots, setPilots] = useState([])
  let location = useLocation()

  async function getPilots(pilotUrl) {
    const promises = pilotUrl.map(url => fetch(url).then(res => res.json()));
    const pilotObjects = await Promise.all(promises);
    return pilotObjects;
  }

  useEffect(() => {
    getPilots(location.state.starship.pilots.map(pilotUrl =>
      (pilotUrl)))
      .then(pilots => setPilots(pilots))
  })

  return ( 
    <>
      {pilots.length !== 0 ?
        <ul>
          {pilots.map(pilot =>
              <li>{pilot.name}</li>
            )}
        </ul>
      :
        <div>No Pilots</div>
      }
    </>
   );
}
 
export default PilotList;