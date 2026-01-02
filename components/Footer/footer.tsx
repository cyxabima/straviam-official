import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-background-secondary py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    {/* Logo */}

                    <div className='rounded-4xl'>
                        <Link href={"#home"}>
                            <Image
                                alt='logo'
                                src={'/assets/images/logo.png'}
                                width={200}
                                height={100}
                            />
                        </Link>
                    </div>

                    {/* Social Media Handles */}
                    <div className="flex items-center gap-4 bg-white rounded-2xl px-4 py-2">
                        {/*We can also use array and loop over it */}
                        <Link href="instagram.com" className="p-3 bg-background-secondary/20 rounded-full hover:bg-background-primary-2 transition-all duration-300 group">
                            <Instagram className="w-5 h-5 text-secondary group-hover:text-white group-hover:scale-110 transition-transform" />
                        </Link>
                        <Link href="linkedin.com" className="p-3 bg-background-secondary/20 rounded-full hover:bg-background-primary-2 transition-all duration-300 group">
                            <Linkedin className="w-5 h-5 text-secondary group-hover:text-white group-hover:scale-110 transition-transform" />
                        </Link>
                        <Link href="github.com" className="p-3 bg-background-secondary/20 rounded-full hover:bg-background-primary-2 transition-all duration-300 group">
                            <Github className="w-5 h-5 text-secondary group-hover:text-white group-hover:scale-110 transition-transform" />
                        </Link>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-blue-200/30 text-xs">
                    © {new Date().getFullYear()} Straviam Tech. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer