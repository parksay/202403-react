// import React, { ReactDOM, useState, useEffect } from "react";
import { default as useMyHook } from "./../../hooks/useMyHook";

const GuideHook = () => {
  const hello = useMyHook(8);
  return (
    <div>
      <h1>hello the count is {hello}</h1>
    </div>
  );
};

export default GuideHook;
