import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("PAPA fs is preparing", "Top news - 9099 readers")}
      {newsArticle("PAPAAA fs is preparing", "Top news - 9099 readers")}
      {newsArticle("PAPAAAA fs is preparing", "Top news - 9099 readers")}
      {newsArticle("PAPAAAAA fs is preparing", "Top news - 9099 readers")}
      {newsArticle("PAPAAAAAAA fs is preparing", "Top news - 9099 readers")}
    </div>
  );
}
export default Widgets;
