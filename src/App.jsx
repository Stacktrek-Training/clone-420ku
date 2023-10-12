import "./App.css";
import Banner from "./components/banner/Banner";
import ThumbnailContainer from "./components/thumbnail-container/ThumbnailContainer";
import lists from "./genre/lists";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

      <Banner />
      {lists.map((list) => (
        <ThumbnailContainer
          key={list.genre}
          genre={list.genre}
          thumbnails={list.thumbnails}
        />
      ))}
    </>
  );
}
