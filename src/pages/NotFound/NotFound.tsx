import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound: React.FC = () => {
   return (
      <div className="not-found">
         <div className="not-found__content">
            <div className="not-found__code">404</div>
            <h1 className="not-found__title">Page not found</h1>
            <p className="not-found__text">
               You may have followed an incorrect link or the page has been removed.
            </p>
            <Link to="/" className="not-found__button">
               Return to home
            </Link>
         </div>
      </div>
   );
};

export default NotFound;
