import { LayoutTextFlip } from '../ui/layout-text-flip'

function HeroContent() {
    return (
        <div className="relative z-20 text-center px-6 max-w-5xl mt-16">
            <span className="text-[#00E5FF] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                Turning Complexity into Automation
            </span>

            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Engineering Smarter <br />
                <LayoutTextFlip
                    text=""
                    words={["AI Workflows", "Automation", "Custom Solutions", "Web Applications", "Mobile Development"]}

                />
            </h1>

            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                At Straviam, we specialize in high-performance custom software and
                intelligent workflows that move your business forward.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-background-primary-2 text-white font-bold rounded-lg hover:bg-background-primary transition-all shadow-lg w-full sm:w-auto">
                    Build My Solution
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all backdrop-blur-md w-full sm:w-auto">
                    View Capabilities
                </button>
            </div>
        </div>
    )
}

export default HeroContent