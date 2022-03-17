import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/api-calls";
import { Link } from "react-router-dom";

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starships => setStarships(starships.results))
  })

  return ( 
    <>
      <div className="ships">
        {starships.map((starship) => (
          <Link key={starship.index} state={{ starship }} to="/starships">
            <div className="starship-name" key={starship.index}>
              {starship.name}
            </div>
          </Link>
        ))}
      </div>
    </>
   );
}
 
export default StarshipList;