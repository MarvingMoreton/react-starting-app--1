// Card component is usually use to define a container
import React from "react";
import "./Card.css";
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
  // Children is a reserved name
}

export default Card;
