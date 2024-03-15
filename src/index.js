import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import AppTest from "./App-test";
import FooterTest from "./components/test/Footer/Footer";
import HeaderTest from "./components/test/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <HeaderTest />
//       <AppTest />
//       <FooterTest />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 공통 컴포넌트는 끼워넣는 방법이 두 가지가 있음
// 하나는 <Route> 태그 계층 이용하기. (App.js)
// 다른 하나는 <BrowserRouter> 태그 안에 끼워 넣기. (index.js)
// 첫 번째 방법 <Route> 태그 계층 이용하기는 App.js 에서 MyLayout 처럼
// <Router> 태그 안에 path 속성을 주지 않고 element 속성만 주는 것.
// 그렇게 하면 router 기능으로 겉에 감싸고 있는 <Route> 태그에 넣어준 element 속성이 틀을 만들고 그 안에 <Outlet /> 으로 내용으로 채울 수 있음.
// 두 번째 방법 <BrowserRouter> 태그 안에 끼워 넣기는 index.js 에서 HeaderTest 랑 FooterTest 처럼
// <BrowserRouter> 태그 안에 내가 넣고 싶은 애들을 배치하고 <Routes> 태그를 끼워넣음.
