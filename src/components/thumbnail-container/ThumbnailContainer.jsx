import VideoThumbnail from "../video-thumbnail/VideoThumbnail";
import "./ThumbnailContainer.css";

export default function ThumbnailContainer() {
    const thumbnails = [
        { src: "https://via.placeholder.com/150x150", alt: "sample1" },
        { src: "https://via.placeholder.com/150x150", alt: "sample2" },
        { src: "https://via.placeholder.com/150x150", alt: "sample3" },
        { src: "https://via.placeholder.com/150x150", alt: "sample4" },
        { src: "https://via.placeholder.com/150x150", alt: "sample5" },
        { src: "https://via.placeholder.com/150x150", alt: "sample6" },
        { src: "https://via.placeholder.com/150x150", alt: "sample7" },
        { src: "https://via.placeholder.com/150x150", alt: "sample8" },
    ];
    return (
        <section className="thumbnail-container">
            {thumbnails.map((e, i) => (
                <VideoThumbnail src={e.src} alt={e.alt} key={i} />
            ))}
        </section>
    );
}
