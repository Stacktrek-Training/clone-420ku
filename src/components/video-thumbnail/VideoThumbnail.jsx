export default function VideoThumbnail(props) {
    const { src, alt } = props;
    return (
        <>
            <img src={src} alt={alt} />
        </>
    );
}
