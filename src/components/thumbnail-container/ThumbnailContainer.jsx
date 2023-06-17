import VideoThumbnail from "../video-thumbnail/VideoThumbnail";
import "./ThumbnailContainer.css";

export default function ThumbnailContainer(props) {
    const { thumbnails, genre } = props;

    return (
        <section>
            <h3>{genre}</h3>
            <div className="thumbnail-container">
                {thumbnails.map((e, i) => (
                    <VideoThumbnail src={e.src} alt={e.alt} key={i} />
                ))}
            </div>
        </section>
    );
}
