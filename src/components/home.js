import React from "react";
import styled from "styled-components";

import { Navbar } from "../components/navbar";
import VideoGamePicture from "./picture/VideoGame.png";

import LeftArrow from "./picture/Left.png";
import RightArrow from "./picture/Right.png";

import { useDataProvider } from "../context";
import { Link } from "react-router-dom";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const Welcome = styled.div`
  height: 600px;
  background-color: #000530;
  color: white;
  display: flex;
  justify-content: space-around;
  h1 {
    /* font-family: Teko, sans-serif; */
    font-family: "Outfit", sans-serif;
    font-family: "Teko", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 80px;
  }
  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    padding-top: 2vh;
  }
  div {
    height: 500px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const VideoGame = styled.img`
  width: 54vh;
  height: 26vw;
  /* calc(100vh - 30px); */
`;
// const TopGame = styled.div`

//   height: 600px;
//   background-color: #000530;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* div {
//     width: 1500px;
//     height: 300px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//   }
//   img {
//     height: 240px;
//     width: 450px;
//   } */
// `;
// var items = [
//   {
//     name: "Random Name #1",
//     gameName: "Gta V",
//     picture: GtaPicture,
//     comment: "GUD SOUP",
//   },
//   {
//     name: "Random Name #2",
//     gameName: "CoD!",
//     picture: CodPicture,
//     comment: "COD IS THE BEST",
//   },
//   {
//     name: "Random Name #3",
//     gameName: "Minecraft",
//     picture: MinecraftPicture,
//     comment: "I BELIEVE IN MINECRAFT SUPREMACY",
//   },
//   {
//     name: "Random Name #4",
//     gameName: "Forspoken",
//     picture: ForspokenPicture,
//     comment: "MIGHT BE GUD SOUP",
//   },
//   {
//     name: "Random Name #5",
//     gameName: "Stalker",
//     picture: StalkerPicture,
//     comment: "STALKER GO BRRRRRRR",
//   },
//   {
//     name: "Random Name #6",
//     gameName: "Sifu",
//     picture: SifuPicture,
//     comment: "THIS GAME HAS NICE CONCEPT",
//   },
// ];
// const CarouselWrapper = styled.div`
// display: flex;
// justify-content:center;
// background-color: #000530;
// color:white
// `

function Item(props) {
  return (
    <Paper
      style={{
        height: "500px",
        backgroundColor: "#000530",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div>
        <img src={props.item.picture} />
      </div>
    </Paper>
  );
}
function Comment(props) {
  return (
    <Paper
      style={{
        height: "500px",
        backgroundColor: "#000530",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div>
        <h2>{props.item.gameName}</h2>
        <h2>{props.item.comment}</h2>
      </div>
    </Paper>
  );
}
export const Home = () => {
  const { items } = useDataProvider();
  console.log(items);
  return (
    <div>
      <Navbar />
      <Welcome>
        <div>
          <h1> WELCOME TO RAGE </h1>
          <h3>
            With new games, new reviews, and new ways to play, join one of the
            biggest communities in gaming and start playing today!
          </h3>
        </div>
        <VideoGame src={VideoGamePicture} />
      </Welcome>

      <div>
        <h1
          style={{
            fontSize: "64px",
            color: "white",
            backgroundColor: "#000530",
          }}
        >
          {" "}
          TOP Games
        </h1>
        <Carousel
          NextIcon={<img src={RightArrow} />}
          PrevIcon={<img src={LeftArrow} />}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100vw",
              backgroundColor: "#000530",
            }}
          >
            <h1 style={{ fontSize: "64px", color: "white" }}> TOP Reviews</h1>
            <Link
              to="/Reviews"
              style={{ color: "#74E0F9", textDecoration: "none" }}
            >
              <h2 style={{ fontSize: "32px" }}> See All</h2>
            </Link>
          </div>

          <Link
            to="/Reviews"
            style={{ color: "#74E0F9", textDecoration: "none" }}
          ></Link>
        </div>

        <Carousel
          NextIcon={<img src={RightArrow} />}
          PrevIcon={<img src={LeftArrow} />}
        >
          {items.map((item, i) => (
            <Comment key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
