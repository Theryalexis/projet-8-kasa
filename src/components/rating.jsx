import React from 'react';
import GrayStar from "../assets/gray-star.png";
import RedStar from "../assets/red-star.png";

const Rating = (rating) => {
     rating = rating.rating

     const allStars = [1,2,3,4,5];
 
     return(
         <div className="rating">
             {allStars.map((eachStar) =>
             rating >= eachStar ? 
             (<img key={eachStar} src={RedStar} alt="" />) :
             (<img key={eachStar} src={GrayStar} alt="" />)
             )}
         </div>
     )
  };

export default Rating;