import {URL_RES_LOGO} from "../utils/constants";

const ResturantCard = (props) => {

    const {resData} = props

    const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={URL_RES_LOGO+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
    </div>
  );
};

export default ResturantCard;