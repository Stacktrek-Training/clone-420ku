import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import ThumbnailContainer from "./components/thumbnail-container/ThumbnailContainer";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Navbar />
            <Banner />
            <ThumbnailContainer />
        </div>
    );
}
