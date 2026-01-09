import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    {/* Logo */}

                    <div className='rounded-4xl bg-white'>
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
                        <a
                            href="https://www.instagram.com/straviam.official"
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-background-secondary/20 rounded-full hover:bg-background-primary-2 transition-all duration-300 group"
                        >
                            <Instagram className="w-5 h-5 text-secondary group-hover:text-white group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://www.linkedin.com/company/straviam"
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-background-secondary/20 rounded-full hover:bg-background-primary-2 transition-all duration-300 group"
                        >
                            <Linkedin className="w-5 h-5 text-secondary group-hover:text-white group-hover:scale-110 transition-transform" />
                        </a>
                        <Link href="https://www.facebook.com/profile.php?id=61586165601894&mibextid=ZbWKwL"
                            target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-background-secondary/20 rounded-full hover:bg-background-primary-2 transition-all duration-300 group"
                        >
                            <Facebook className="w-5 h-5 text-secondary group-hover:text-white group-hover:scale-110 transition-transform" />
                        </Link>
                    </div>

                </div>

            </div>
            <div className=" p-8 text-center text-secondary text-xs">
                © {new Date().getFullYear()} Straviam. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer