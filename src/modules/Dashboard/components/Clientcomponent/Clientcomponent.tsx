"use client";

import React, { useEffect, useState } from "react";
import { Servercomponent } from "../Servercomponent";

const Clientcomponent = () => {
  const [isClientComponent, setIsClientComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsClientComponent(true);
    }, 5000);
  }, []);

  return (
    <div style={{ border: "1px solid red", margin: 20 }}>
      <div>Client Component</div>
      {isClientComponent && <Servercomponent />}
    </div>
  );
};

export default Clientcomponent;
