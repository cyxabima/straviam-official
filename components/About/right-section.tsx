function RightAbout() {
    return (
        <div className="block lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-12 shadow-xl shadow-gray-200/50 rounded-2xl border border-gray-100">
                <p className="text-gray-600 text-lg mb-8">
                    That spark became our motivation. Motivation turned into vision. And vision pushed us
                    to build a team people who shared our passion, our curiosity, and our determination
                    to turn ideas into reality.
                </p>

                <p className="text-gray-600 text-lg mb-10">
                    Today, we are a growing collective of innovators, designers, and thinkers working
                    together to create intelligent solutions that matter. We believe in collaboration,
                    continuous learning, and pushing boundaries.
                </p>

                {/* some numbers about founders and many more*/}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                    <div className="text-center">
                        <div className="text-primary-2 font-bold text-2xl">3</div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Founders</div>
                    </div>
                    <div className="text-center">
                        <div className=" text-secondary font-bold text-2xl">∞</div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Curiosity</div>
                    </div>
                    <div className="text-center">
                        <div className="text-primary-2 font-bold text-2xl">NED</div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Roots</div>
                    </div>
                </div>
            </div>

            {/* Bottom Tagline */}
            <div className="mt-8 text-right">
                <p className=" text-secondary font-bold text-xl italic">
                    And we're building the future, together.
                </p>
            </div>
        </div>
    )
}

export default RightAbout