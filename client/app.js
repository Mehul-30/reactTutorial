import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQap62vDxruBYp1XW7orivrXlSdk6_8ORseFA&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resturantLists = [
  {
    info: {
      id: "24346",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/2eaf3733-0c7b-448c-9dce-22a515c7a127_24346.JPG",
      locality: "Mogappair",
      areaName: "Porur",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹91",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/dominos-pizza-mogappair-porur-rest24346",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "624569",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/3edc7c98-a5bd-46fe-b01c-0fe2c6ae2d00_624569.jpg",
      locality: "Nolambur",
      areaName: "Mogappair Chennai",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "3.9K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/subway-nolambur-mogappair-chennai-rest624569",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "57362",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/d400f2da-088a-4476-8a62-2b2cea74126e_57362.JPG",
      locality: "Mogappair",
      areaName: "Mogappair",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "1.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/pizza-hut-mogappair-rest57362",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "407229",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "ry4jio1zmodiv9xxwlxv",
      locality: "Mogappair",
      areaName: "Nolambur",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.1,
      veg: true,
      parentId: "4961",
      avgRatingString: "4.1",
      totalRatingsString: "6.5K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "544",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/la-pinoz-pizza-mogappair-nolambur-rest407229",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "562848",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/7d03890a-9f31-4f69-bf09-ff6a4db1e642_562848.jpg",
      locality: "Suguna N Dave Complex",
      areaName: "Mogappair",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "8.1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 02:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/mcdonalds-suguna-n-dave-complex-mogappair-rest562848",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "805285",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/7a83be1c-9437-4155-8afa-e5ad0a8d2567_805285.jpg",
      locality: "Mogappair",
      areaName: "Thiruvallur",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "5.9K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/burger-king-mogappair-thiruvallur-rest805285",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "16560",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/87515de5-1163-4669-9d34-56fb1d79dae4_16560.jpg",
      locality: "Mogappair",
      areaName: "Everest Colony",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Sweets", "Chinese"],
      avgRating: 4.5,
      parentId: "22",
      avgRatingString: "4.5",
      totalRatingsString: "40K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "9.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/a2b-adyar-ananda-bhavan-mogappair-everest-colony-rest16560",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "17827",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/7d88015c-6ee8-4a41-af6b-23e8e609a677_17827.JPG",
      locality: "Vavin",
      areaName: "Mogappair",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "28K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/kfc-vavin-mogappair-rest17827",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "226735",
      name: "Zaitoon",
      cloudinaryImageId: "3dd95cf5d718da0f33ca7c161d3b1318",
      locality: "Ram Nagar",
      areaName: "Mogappair East",
      costForTwo: "₹300 for two",
      cuisines: [
        "Arabian",
        "Biryani",
        "Chinese",
        "Juices",
        "Kebabs",
        "Mughlai",
      ],
      avgRating: 4.3,
      parentId: "4555",
      avgRatingString: "4.3",
      totalRatingsString: "34K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      select: true,
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/zaitoon-ram-nagar-mogappair-east-rest226735",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "37469",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/80cd786e-29c6-4960-84a2-aaf9b726bebd_37469.JPG",
      locality: "Venkatapuram",
      areaName: "Ambattur",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.6,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.6",
      totalRatingsString: "2.8K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Icecream.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/baskin-robbins-ice-cream-desserts-venkatapuram-ambattur-rest37469",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "884496",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/4400a5bb-a1f1-4828-b105-6068807328ed_884496.JPG",
      locality: "OPPOSITE STATE BANK OF INDIA",
      areaName: "TRUNKROAD,NEXTTOGOGAS",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "2.2K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/theobroma-opposite-state-bank-of-india-trunkroad-nexttogogas-rest884496",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "46135",
      name: "PS4 Veg Restaurant (Perambur Sri Srinivasa)",
      cloudinaryImageId: "qtdgvpd9pcswktbe3sdo",
      locality: "Perambur",
      areaName: "Ambattur",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "560050",
      avgRatingString: "4.7",
      totalRatingsString: "60K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "5.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/ps4-veg-restaurant-perambur-sri-srinivasa-perambur-ambattur-rest46135",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "248145",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/1c017949-9724-4aef-874b-471b2b8794ec_248145.JPG",
      locality: "Ambattur",
      areaName: "Varatharajapuram",
      costForTwo: "₹120 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.7,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.7",
      totalRatingsString: "5.9K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹124",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/nic-ice-creams-ambattur-varatharajapuram-rest248145",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "129614",
      name: "Wow! Momo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/9a185ed2-f668-4a12-830d-70ca8fb5585c_129614.jpg",
      locality: "Ram Nagar",
      areaName: "Paneer Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      avgRating: 4.2,
      parentId: "1776",
      avgRatingString: "4.2",
      totalRatingsString: "14K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Chinese.png",
            description: "Delivery!",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
            description: "Delivery!",
          },
        ],
      },
      select: true,
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Chinese.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/wow-momo-ram-nagar-paneer-nagar-rest129614",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "15182",
      name: "Behrouz Biryani",
      cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
      locality: "Vellarar Street",
      areaName: "Mogappair East",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "1803",
      avgRatingString: "4.3",
      totalRatingsString: "6.3K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/behrouz-biryani-vellarar-street-mogappair-east-rest15182",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10426",
      name: "Dindigul Thalappakatti - Since 1957 ",
      cloudinaryImageId: "puzpapsnfna3z4ueumrq",
      locality: "Mogappair",
      areaName: "Mogappair",
      costForTwo: "₹650 for two",
      cuisines: [
        "Biryani",
        "Barbecue",
        "South Indian",
        "Chinese",
        "North Indian",
      ],
      avgRating: 4.2,
      parentId: "332",
      avgRatingString: "4.2",
      totalRatingsString: "27K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "6.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/dindigul-thalappakatti-since-1957-mogappair-rest10426",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "567336",
      name: "CakeZone Patisserie",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/bc137dce-a824-4cd4-b2b6-82a1de0a2350_567336.jpg",
      locality: "MOGAPPAIR WEST MAIN ROAD",
      areaName: "Nolambur",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.3,
      parentId: "7003",
      avgRatingString: "4.3",
      totalRatingsString: "3.4K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/cakezone-patisserie-mogappair-west-main-road-nolambur-rest567336",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "35718",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/84d2334d-6e12-43b8-99c2-18da870a90f2_35718.jpg",
      locality: "Vellarar Street",
      areaName: "Mogappair East",
      costForTwo: "₹450 for two",
      cuisines: ["Desserts", "Ice Cream", "Bakery", "Beverages"],
      avgRating: 4.4,
      parentId: "4444",
      avgRatingString: "4.4",
      totalRatingsString: "3.0K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/sweet-truth-cake-and-desserts-vellarar-street-mogappair-east-rest35718",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "191411",
      name: "The Biryani Life",
      cloudinaryImageId: "ns1uuugc7alnq7jowngm",
      locality: "Vellarar Street",
      areaName: "Mogappair East",
      costForTwo: "₹250 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      parentId: "8496",
      avgRatingString: "4.1",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/the-biryani-life-vellarar-street-mogappair-east-rest191411",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "22408",
      name: "Murugan Idli Shop",
      cloudinaryImageId: "hnkkz6a0hgl8r2xklafv",
      locality: "Ambattur",
      areaName: "Ambattur Industrial Estate",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "1248",
      avgRatingString: "4.5",
      totalRatingsString: "24K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-28 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/big%20rx%20listing%2015%20mins%20.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-6ff99426-ce57-4f68-9fdf-0ec212d059ff",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/murugan-idli-shop-ambattur-ambattur-industrial-estate-rest22408",
      type: "WEBLINK",
    },
  },
];


const ResturantCard = (props) => {

    const {resData} = props

    const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
      <div className="Search"> Search </div>

      <div className="res-container">
        {resturantLists.map((resturant)=>(
            <ResturantCard key = {resturant.info.id} resData={resturant}/>
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const AppLayoutFetch = ReactDOM.createRoot(document.getElementById("root"));

AppLayoutFetch.render(<AppLayout />);
