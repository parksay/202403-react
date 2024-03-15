import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage.js";
import TestPage from "./pages/TestPage/Test.js";
import MyLayout from "./components/Layout/Layout.js";
import HomePage from "./pages/Home/HomePage.js";
import GuideState from "./pages/Guide/GuideState.js";
import GuideHook from "./pages/Guide/GuideHook.js";
import GuideRef from "./pages/Guide/GuideRef.js";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.js";

function App() {
  return (
    <Routes>
      <Route element={<MyLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/state" element={<GuideState />} />
        <Route path="/hook" element={<GuideHook />} />
        <Route path="/ref" element={<GuideRef />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

// <Routes> 태그 안에 <Route> 태그들 나열하면 됨.
// <Route> 태그들 나열하고 <Routes> 태그로 한 번 감싸면 됨.
//
//
// 파라미터나 경로를 계층 구조로 정의할 수도 있음.
// <Route path="/profiles/:username" element={<Profile />} />
// <Route path="/articles" element={<Articles />}>
//   <Route path=":id" element={<Article />} />
// </Route>
//
//
//
// 공통 컴포넌트는 끼워넣는 방법이 두 가지가 있음
// 하나는 <Route> 태그 계층 이용하기. (App.js)
// 다른 하나는 <BrowserRouter> 태그 안에 끼워 넣기. (index.js)
// 첫 번째 방법 <Route> 태그 계층 이용하기는 App.js 에서 MyLayout 처럼
// <Router> 태그 안에 path 속성을 주지 않고 element 속성만 주는 것.
// 그렇게 하면 router 기능으로 겉에 감싸고 있는 <Route> 태그에 넣어준 element 속성이 틀을 만들고 그 안에 <Outlet /> 으로 내용으로 채울 수 있음.
// 두 번째 방법 <BrowserRouter> 태그 안에 끼워 넣기는 index.js 에서 MyHeader 랑 MyFooter 처럼
// <BrowserRouter> 태그 안에 내가 넣고 싶은 애들을 배치하고 <Routes> 태그를 끼워넣음.
//
//
// 404 페이지 NotFound 페이지는 <Route> 태그에 path 속성으로 "*" 주면 됨.
// ex) <Route path="*" element={<NotFoundPage />} />
