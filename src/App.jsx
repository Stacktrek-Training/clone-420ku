import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import ThumbnailContainer from "./components/thumbnail-container/ThumbnailContainer";
import lists from "./genre/lists";

export default function App() {
    // const [count, setCount] = useState(0);

    return (
        <div>
            <Navbar />
            <Banner />
            {lists.map((list) => (
                <ThumbnailContainer key={list.genre} genre={list.genre} thumbnails={list.thumbnails} />
            ))}
        </div>
    );
}
