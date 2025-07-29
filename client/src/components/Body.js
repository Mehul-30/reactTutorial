import ResturantCard from "./ResturantCard";
import { resturantLists } from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  let [listOfResturants, setListOfResturants] = useState(resturantLists)

  return (
    <div className="body">
      <div className="Search"> 
        <button className="filter-btn" onClick={()=>{
          listOfResturants = listOfResturants.filter((resturant)=>{
            return resturant.info.avgRating > 4;
          })
          
          listOfResturants.sort((a, b) => b.info.avgRating - a.info.avgRating);

          setListOfResturants(listOfResturants);
        }}>filtering button</button>
      </div>

      <div className="res-container">
        {listOfResturants.map((resturant)=>(
            <ResturantCard key = {resturant.info.id} resData={resturant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;    