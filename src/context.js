import React from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

import GtaPicture from "./components/picture/Gta.png";
import CodPicture from "./components/picture/Cod.png";
import MinecraftPicture from "./components/picture/Minecraft.png";
import SifuPicture from "./components/picture/sifu.png";
import StalkerPicture from "./components/picture/stalker2.png";
import ForspokenPicture from "./components/picture/forspoken.png";


export const ContextData = React.createContext();

export const ContextDataProvider = (props) => {
  const { children } = props;
  const items = [
    {
      name: "Random Name #1",
      gameName: "Gta V",
      picture: GtaPicture,
      comment: "He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility.",
      id: uuidv4()
    },
    {
      name: "Random Name #2",
      gameName: "CoD!",
      picture: CodPicture,
      comment: "Today I bought a raincoat and wore it on a sunny day.",
      id: uuidv4()
    },
    {
      name: "Random Name #3",
      gameName: "Minecraft",
      picture: MinecraftPicture,
      comment: "Gwen had her best sleep ever on her new bed of nails.",
      id: uuidv4()
    },
    {
      name: "Random Name #4",
      gameName: "Forspoken",
      picture: ForspokenPicture,
      comment: "He barked orders at his daughters but they just stared back with amusement.",
      id: uuidv4()
    },
    {
      name: "Random Name #5",
      gameName: "Stalker",
      picture: StalkerPicture,
      comment: "Peanut butter and jelly caused the elderly lady to think about her past.",
      id: uuidv4()
    },
    {
      name: "Random Name #6",
      gameName: "Sifu",
      picture: SifuPicture,
      comment: "I don’t respect anybody who can’t tell the difference between Pepsi and Coke.",
      id: uuidv4()
    },
  ];
  const userDummyData = [
    {
      userName: "Uugan10",
      email: "uugana@gmail.com",
      birthDay: "01/23/2005",
      zipCode: 20515,
      id: 1,
      passWord: "Pugna1020",
      confirmPassWord: "Pugna1020",
    },
    {
      userName: "Imperius",
      email: "jijaana@gmail.com",
      birthDay: "12/03/2000",
      zipCode: 14576,
      id: 2,
      passWord: "Imperius2012",
      confirmPassWord: "Imperius2012",
    },
  ];
  
  return (
    <ContextData.Provider value={{ items, userDummyData }}>{children}</ContextData.Provider>
  );
};

export const useDataProvider = () => useContext(ContextData);
