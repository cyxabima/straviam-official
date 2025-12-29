import Image from 'next/image'

function Header() {
    return (
        <nav className='flex flex-row items-center justify-between px-5 bg-red-200 border-b-2 border-blue-800'>
            <div className='flex items-center justify-center'>
                <Image src={"/Straviam-Logo.webp"} alt="logo"
                    width={100}
                    height={80}
                    className="h-auto" />

                <Image alt='straviam' src={"/logo3.webp"}
                    width={200}
                    height={100}
                    className="h-auto"
                />

            </div>

            <div>
                <ul className='flex gap-7 font-bold text-lg text-blue-700'>
                    <li className=''>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header