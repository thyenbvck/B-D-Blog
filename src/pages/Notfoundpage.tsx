import React from "react";
import "../style/Notfound.css"; // nhớ import CSS riêng

const NotFoundPage: React.FC = () => {
  return (
<div className="not-found-page" id="clouds">
<div className="cloud x1" />
      <div className="cloud x1_5" />
      <div className="cloud x2" />
      <div className="cloud x3" />
      <div className="cloud x4" />
      <div className="cloud x5" />

      <div className="c">
        <div className="_404">404</div>
        <hr />
        <div className="_1">THE PAGE</div>
        <div className="_2">WAS NOT FOUND</div>
        <a className="btn" href="/">HOME</a>
      </div>
    </div>
  );
};
export default NotFoundPage;
