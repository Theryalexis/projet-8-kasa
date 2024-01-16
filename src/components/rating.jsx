import React from 'react';
import GrayStar from "../assets/star-inactive 1.png";
import RedStar from "../assets/star-active 1.png";

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