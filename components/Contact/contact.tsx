import ContactDetail from "./contact-details"
import ContactForm from "./contact-form"

function Contact() {
    return (
        <section id="contact" className="scroll-mt-20 px-4 py-8 md:px-8 flex flex-col items-center">
            <h1 className="text-4xl md:text-7xl font-extrabold text-primary-2 leading-tight mb-6">
                Contact Us
            </h1>
            <div className=" mx-auto">
                <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                    {/* Left Side */}
                    <ContactDetail />

                    {/* Right Side */}
                    <ContactForm />

                </div>
            </div>
        </section>
    )
}
export default Contact