import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import { URL_RESINFO } from "../utils/constants";
import Shimmer from "./Shimmer";

const ResturantDetails = () => {
  const { resId } = useParams();
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0510653&lng=80.1128488&restaurantId="+{resId}
    // );
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0510653&lng=80.1128488&restaurantId=${resId}`
    );

    const json = await data.json();

    setresInfo(json);
  };

  if (!resInfo) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatings,
    locality,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const resAllList =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div>
      <h1>{name}</h1>
      <p>{locality}</p>
      <p>{cuisines?.join(", ")}</p>
      <h3>
        {avgRating} ({totalRatings} ratings) - {costForTwoMessage}
      </h3>

      {resAllList.slice(2).map((list, index) => {
        
        const itemCards = list?.card?.card?.itemCards;

        return (
          <div key={index}>
            <h3>{list?.card?.card?.title}</h3>
            <ul>
              {itemCards?.map((item) => (
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ResturantDetails;
