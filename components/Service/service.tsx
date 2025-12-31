import { BackgroundBeams } from "../ui/background-beams";
import { WavyBackground } from "../ui/wavy-background";
import { ServiceCard, ServiceProps } from "./service-card"
const services: ServiceProps[] = [
    {
        title: "AI & Automation",
        description: "Turning operational complexity into efficiency. We integrate AI directly into your business logic to automate decision-making and manual data pipelines.",
        url: "/services/ai-automation",
        imgUrl: "/assets/images/ai-automation.png"
    },
    {
        title: "Custom Software Development",
        description: "Bespoke engineering from the ground up. We build scalable, secure, and resource-efficient systems tailored to your unique business logic and backend needs.",
        url: "/services/custom-software",
        imgUrl: "/assets/images/custom.png"
    },
    {
        title: "Web & Mobile App Development",
        description: "High-performance digital ecosystems. We bridge the gap between complex hardware integration and intuitive, cross-platform user experiences.",
        url: "/services/mobile-web",
        imgUrl: "/assets/images/web-mobile.png"
    },
    {
        title: "AI Content Creation",
        description: "Scalable creative intelligence. Leverage generative AI tools to produce high-fidelity media, text, and marketing assets while maintaining brand consistency.",
        url: "/services/ai-content",
        imgUrl: "/assets/images/ai-content.png"
    }
];

function Services() {
    return (
        <section id="services" className="p-8 w-full bg-background-primary-2 backdrop-blur-sm flex flex-col justify-center items-center relative overflow-hidden">
            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">Services</h1>
            <div className="grid grid-col-1 lg:grid-cols-2 gap-x-3.5 z-20">
                {
                    services.map((service) => (
                        <ServiceCard
                            key={service.url}
                            title={service.title}
                            description={service.description}
                            url={service.url}
                            imgUrl={service.imgUrl}
                        />)

                    )
                }
            </div>
            <BackgroundBeams />
        </section >
    )
}

export default Services