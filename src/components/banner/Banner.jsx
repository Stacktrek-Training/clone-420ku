import bannerImage from "../../assets/video.mp4";
import "./Banner.css";

export default function BannerImage() {
    return (
        <>
            <video autoPlay loop muted controls poster="../../assets/banner.svg">
                <source src={bannerImage} />
            </video>
        </>
    );
}
