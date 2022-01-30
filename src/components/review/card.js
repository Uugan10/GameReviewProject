import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ data }) => {
  return (
    <div
      style={{
        height: "300px",
        width: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px",
      }}
    >
      <Link to={`/Reviews/${data.id}`} key={data.id}>
        <img src={data.picture} style={{ height: "30vh", width:"30vw" }} />
      </Link>
    </div>
  );
};
