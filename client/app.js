import React from "react";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import ErrorPage from "./src/components/ErrorPage";
import AboutPage from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import ResturantDetails from "./src/components/ResturantDetails";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResturantDetails />,
      },      
    ],
    errorElement: <ErrorPage />,
  }  
])

const AppLayoutFetch = ReactDOM.createRoot(document.getElementById("root"));

// AppLayoutFetch.render(<AppLayout />);

AppLayoutFetch.render(<RouterProvider router={appRouter} />);