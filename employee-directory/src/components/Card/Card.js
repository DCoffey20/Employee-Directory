import React from "react";
import "./style.css";

  function Card(props) {
    // console.log(props);
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.userName} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Gender:</strong> {props.gender}
            </li>
            <li>
              <strong>Name:</strong> {props.firstName} {props.lastName}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default Card;