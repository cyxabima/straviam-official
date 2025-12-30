import Image from 'next/image'

function Header() {
    return (
        <nav className='flex flex-row items-center justify-around px-5h-[12vh] shadow-sm fixed w-screen z-30 bg-white'>
            <div className='flex items-center justify-center'>
                <Image src={"/Straviam-Logo.webp"} alt="logo"
                    width={70}
                    height={50}
                    className="h-auto" />

                <Image alt='straviam' src={"/logo3.webp"}
                    width={150}
                    height={75}
                    className="h-auto"
                />

            </div>

            <div>
                <ul className='flex gap-7 text-primary font-bold'>
                    <li className='hover:cursor-pointer'>Home</li>
                    <li className='hover:cursor-pointer'>Services</li>
                    <li className='hover:cursor-pointer'>About</li>
                    <li className='hover:cursor-pointer'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header