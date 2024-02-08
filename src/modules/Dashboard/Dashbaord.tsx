"use client";

import { Clientcomponent } from "./components";

const Dashbaord = () => {
  // both will print the console log one will be on Server side in terminal and one will be on the browser client side
  if (typeof window !== "undefined") {
    console.log("client side");
  } else {
    console.log("Server side");
  }

  return <Clientcomponent />;
};

export default Dashbaord;
