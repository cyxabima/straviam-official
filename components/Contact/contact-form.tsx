function ContactForm() {
    return (
        <div className="md:w-2/3 bg-white p-10 md:p-16">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor='name'>Full Name</label>
                        <input
                            type="text"
                            name='name'
                            id='name'
                            placeholder="Azlaan"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor='email'>Email Address</label>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            placeholder="azlaan@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor='project-type'>Project Type </label>
                    <select id='project-type' className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                        <option className='hover:bg-background-secondary'>Custom Software</option>
                        <option>AI Automation</option>
                        <option>Web/Mobile App</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor='message'>Message</label>
                    <textarea
                        rows={4}
                        id='message'
                        placeholder="Tell us about your project..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 bg-primary-2 text-white font-bold rounded-xl hover:bg-background-primary hover:shadow-lg hover:shadow-red-500/30 transition-all active:scale-85"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm