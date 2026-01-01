function LeftAbout() {
    return (
        <div className="lg:w-1/2">
            <h2 className="text-primary-2 font-bold tracking-tight text-4xl md:text-5xl mb-8 leading-tight">
                We didn't start as a company. <br />
                <span className="text-secondary">We started as three friends.</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                    Three friends curious, ambitious, and bound by a shared belief that technology should do
                    more than just function; it should inspire.
                </p>

                <p>
                    One ordinary day turned extraordinary at an IT Expo. Surrounded by innovation, we met
                    someone building remarkable things with AI. That moment sparked something in us.
                    We didn't just see technology we saw potential.
                </p>

                {/* The "Why Not Us?" Quote Desktop */}
                <div className="py-6 border-l-4 border-primary pl-6 my-8">
                    <p className="text-3xl font-black text-secondary italic tracking-tight">
                        “Why not us?”
                    </p>
                    <p className="text-sm text-gray-400 mt-2 uppercase tracking-widest font-semibold">
                        The question that stayed with us.
                    </p>
                </div>

                <p>
                    But we didn't want to follow the same path. We wanted to create something different something
                    meaningful. Not just AI for the sake of AI, but solutions driven by purpose, creativity,
                    and human connection.
                </p>
            </div>
        </div>
    )
}

export default LeftAbout