import { Routes, Route } from "react-router-dom";
import "./App.css";
import MyLayout from "./components/MyLayout";
import MyHome from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MyLayout />}>
        <Route path="/" element={<MyHome />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
