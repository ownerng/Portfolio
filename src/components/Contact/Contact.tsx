export const Contact = () => {
    return (
        <section id="contact" className="py-16 mx-96 text-center">
            <div className="bg-white p-5 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <form className="flex flex-col">
                    <label htmlFor="name" className="text-black text-start mb-2">
                        Name:
                    </label>
                    <input
                        type="text"
                        required
                        className="p-2 rounded-md border-none shadow focus:ring-2 focus:ring-pink-400 focus:scale-105 transition-transform duration-300 mb-5"
                    />

                    <label htmlFor="email" className="text-black text-start mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="p-2 rounded-md border-none shadow focus:ring-2 focus:ring-pink-400 focus:scale-105 transition-transform duration-300 mb-5"
                    />

                    <label htmlFor="message" className="text-black text-start mb-2">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        className="p-2 w-full rounded-md border-none shadow focus:ring-2 focus:ring-pink-400 focus:scale-105 transition-transform duration-300 resize-none h-20 w-52 mb-5"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995] text-black rounded-md px-4 py-2 text-lg hover:scale-110 transition-transform duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};
