import Image from 'next/image'
import Link from 'next/link'
import MobileBar from './mobile-bar';

function Header() {
    return (
        <nav className='flex flex-row items-center justify-around px-5h-[12vh] shadow-sm fixed w-screen z-30 bg-white'>
            {/* Nav Icon */}
            <a href="/">
                <div className='flex items-center justify-center'>
                    <Image src={"/assets/images/Straviam-Logo.webp"} alt="logo"
                        width={70}
                        height={50}
                        className="h-auto" />

                    <Image alt='straviam' src={"/assets/images/logo.webp"}
                        width={150}
                        height={75}
                        className="h-auto"
                    />

                </div>
            </a>


            {/* Menu bar for desktop */}
            <div className='hidden md:block'>
                <ul className='flex gap-7 text-primary font-bold'>
                    <li className='hover:cursor-pointer'><Link href="#home"> Home </Link></li>
                    <li className='hover:cursor-pointer'><Link href="#services"> Services</Link></li>
                    <li className='hover:cursor-pointer'><Link href="#about"> About</Link></li>
                    <li className='hover:cursor-pointer'><Link href="#contact"> Contact</Link></li>
                </ul>
            </div>

            {/* Mobile navBar */}
            <MobileBar />
        </nav>
    )
}

export default Header