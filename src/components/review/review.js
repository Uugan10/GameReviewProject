import { Button } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../navbar";
import { Card } from "./card";
import { useDataProvider } from "../../context";

import Grid from "@mui/material/Grid";

const Style = styled.div`
  background-color: #000530;
  width: 100%;
  height: 100%;
  color: white;

  hr.rounded {
    border-top: 8px solid #83f2de;
    border-radius: 5px;
  }
`;

export const Review = () => {
  const { items } = useDataProvider();
  const { reviewId } = useParams();
  return (
    <div>
      <Navbar />
      <Style>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1> RECOMMEND </h1>
            <hr class="rounded" style={{ width: "90vw" }} />
          </div>
          {items.map((item) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Card data={item} />
            </div>
          ))}
        </div>
      </Style>
    </div>
  );
};

