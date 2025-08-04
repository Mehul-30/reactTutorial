import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
// import { resturantLists } from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL_SWIGGY } from "../utils/constants";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  const [filteredResturants, setFilteredResturants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(URL_SWIGGY);

    const json = await data.json();

    setListOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfResturants.length === 0) {
    return (
      <div className="preRender-box">
        <div className="top-preRender-box">loading...</div>
        <div className="bottom-preRender-box">
          <Shimmer />
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          placeholder="Type to search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="button"
          onClick={() => {
            const filteredData = listOfResturants.filter((resturant) =>
              resturant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredResturants(filteredData);
          }}
        >
          search
        </button>

        <button
          className="button"
          onClick={() => {
            const newList = listOfResturants.filter((resturant) => {
              return resturant.info.avgRating > 4.5;
            });

            newList.sort((a, b) => b.info.avgRating - a.info.avgRating);

            setFilteredResturants(newList);
          }}
        >
          filtering button
        </button>
      </div>

      <div className="res-container">
        {filteredResturants.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurant/" + resturant?.info?.id}
          >
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
