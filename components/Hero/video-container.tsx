function VideoContainer() {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/images/hero.png"
            preload="none"
            className="absolute -z-20 w-auto min-w-full min-h-full max-w-none object-cover opacity-60"
        >
            <source src="/assets/videos/hero3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default VideoContainer