import { useState, useRef } from "react";
import GuideProps from "./GuideProps";
const GuideRef = () => {
  const [myProps, setMyProps] = useState("");
  // myRef 라는 변수를 그릇으로 쓰겠다
  // 무슨 그릇?
  // ref 담는 그릇
  // 그리고 밑에서 myRef 라는 그릇에 담고 싶은 요소에다가 속성 값으로 ref={myRef} 넣어주기
  // '이 요소를 ref 로 만들어서 담을 그릇은 myRef 이다' 라고 선언
  const myRef = useRef();
  const onchangehandler = (e) => {
    console.log(e.target);
    console.log(myRef.current);
    console.log(e.target.value);
    console.log(myRef.current.value);
    setMyProps(myRef.current.value);
  };
  return (
    <div>
      <div style={{ border: "1px black solid", width: "fit-content" }}>
        <span>input your text below as a prop to child component</span>
        <div>
          <input
            ref={myRef}
            type="text"
            placeholder="input text here"
            onChange={onchangehandler}
          />
        </div>
        <GuideProps myval={myProps} />
      </div>
    </div>
  );
};

export default GuideRef;
