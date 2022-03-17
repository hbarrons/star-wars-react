import { useState, useEffect } from "react";
import { getStarshipDetails } from "../../services/api-calls";
import StarshipList from "../StarshipList/StarshipList";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  }, [])

  return ( 
    <div className="ships">
      {starshipDetails.name ? 
        <div className="starship-details">
          <h3>NAME: {starshipDetails.name}</h3>
          <h3>MODEL: {starshipDetails.model}</h3>
          <Link to='/starship-list' state={{ StarshipList }}>
            <div>
              RETURN
            </div>
          </Link>
        </div>
      :
      <>
        <h2>Loading...</h2>
      </> 
    } 
    </div>
   );
}
 
export default StarshipDetails;