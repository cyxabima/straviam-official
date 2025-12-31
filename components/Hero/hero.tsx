import HeroContent from "./hero-content";
import VideoContainer from "./video-container";

function Hero() {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">

            {/* Video Layer */}
            <VideoContainer />

            {/* overlay layer */}
            <div
                className="absolute inset-0 -z-10 bg-background-secondary/70 backdrop-blur-[1px]"
                aria-hidden="true"
            ></div>

            {/*Content Layer */}
            <HeroContent />

        </section>
    );
};

export default Hero;