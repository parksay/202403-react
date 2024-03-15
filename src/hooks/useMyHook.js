// import React, { useState, useEffect } from 'react';
import { useState, useEffect } from "react";

function useCustomHook(initial) {
  const [count, setCount] = useState(initial || 0);
  useEffect(() => {
    if (count > 10) {
      alert("최대 count 는 10회입니다");
      setCount(0);
    }
    document.title = `count 를 {{count}} 만큼 클릭했습니다`;
    return () => {
      console.log(`resolve {{count}} here`);
    };
  });
  return count;
}

export default useCustomHook;
