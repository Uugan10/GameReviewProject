import React from "react";
import { useParams } from "react-router-dom";
import { useDataProvider } from "../../context";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ReviewDetail = () => {
  const { items } = useDataProvider();
  const { reviewId } = useParams();
  return (
    <div
      style={{
        backgroundColor: " #000530",
        height: "100vh",
        width: "100vw",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {items
        .filter((item) => item.id === reviewId)
        .map((data, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              fontStyle: "normal",
              fontWeight: "bold",
            }}
          >
            <img src={data.picture} />
            <h2> Game name: {data.gameName}</h2>
            <h3> Game comment: {data.comment}</h3>
            <Link
              to="/Reviews"
              style={{ color: "Black", textDecoration: "none" }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#83F2DE",
                  color: "black",
                  borderRadius: "9px",
                }}
              >
                GO BACK
              </Button>
            </Link>
          </div>
        ))}
    </div>
  );
};
export default ReviewDetail;
