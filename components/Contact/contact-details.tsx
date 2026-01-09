import { Mail, MapPin, Phone } from 'lucide-react'

function ContactDetail() {
    return (
        <div className="md:w-1/3 bg-background-secondary p-10 text-white flex flex-col justify-between">
            <div>
                <h2 className="text-3xl font-bold mb-4">Let's talk.</h2>
                <p className="text-blue-100/70 mb-8">
                    Have an idea that needs engineering? We're ready to hear about it.
                </p>

                <div className="space-y-6">

                    {/* email detail */}
                    <div className="flex items-center gap-4">

                        <div className="p-3 bg-white/10 rounded-lg">
                            <Mail />
                        </div>

                        <div>
                            <p className="text-xs text-blue-200 uppercase tracking-widest">Email us</p>
                            <p className="font-medium">info@straviam.com</p>
                        </div>
                    </div>

                    {/* Phone detail */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-lg">
                            <Phone />
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase tracking-widest">Phone</p>
                            <p className="font-medium">+92 312 3606592</p>
                        </div>
                    </div>


                    {/* Location detail */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-lg">
                            <MapPin />
                        </div>
                        <div>
                            <p className="text-xs text-blue-200 uppercase tracking-widest">Based in</p>
                            <p className="font-medium">Karachi</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="mt-12">
                <p className="text-sm text-blue-200/50 italic">
                    “Why not us?”
                </p>
            </div>
        </div>
    )
}

export default ContactDetail