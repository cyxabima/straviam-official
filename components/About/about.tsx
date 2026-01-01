import React from 'react'
import LeftAbout from './left-section'
import RightAbout from './right-section'

function About() {
    return (
        <section id='about' className='scroll-mt-20 px-4 py-8 md:px-8 flex flex-col items-center'>
            <h1 className='text-4xl md:text-7xl font-extrabold text-secondary leading-tight mb-6'>
                About Us
            </h1>

            <div>
                <section className="relative py-20 bg-[#F9FAFB] overflow-hidden">
                    {/* Background Decoration Element */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#00135F]/5 rounded-full blur-3xl"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">

                            {/* Left Column: About Narrative */}
                            <LeftAbout />

                            {/* Right Column: About Vision & Collective */}
                            <RightAbout />

                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default About