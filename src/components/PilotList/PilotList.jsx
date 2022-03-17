import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getPilots } from "../../services/api-calls";

const PilotList = (props) => {
  const [pilots, setPilots] = useState([])
  let location = useLocation()

  async function getPilots(pilotUrl) {
    const promises = pilotUrl.map(url => fetch(url).then(res => res.json()));
    const pilotObjects = await Promise.all(promises);
    console.log(pilotObjects)
    return pilotObjects;
  }

  useEffect(() => {
    getPilots(location.state.starship.pilots.map(pilotUrl =>
      (pilotUrl)))
      .then(pilots => setPilots(pilots))
  }, [])

  
  // getPilots(pilotUrls).then(pilots => console.log(pilots));


  return ( 
    <ul>
      {pilots.map(pilot =>
        <li>{pilot.name}</li>
        )}
    </ul>
   );
}
 
export default PilotList;