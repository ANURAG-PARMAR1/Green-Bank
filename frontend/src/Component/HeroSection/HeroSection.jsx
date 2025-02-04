export function HeroSection() {
    return (
            <section
                className="light py-14 px-24 md:pt-24 relative overflow-hidden text-indigo-900"
                // style={{ backgroundImage: "linear-gradient(-180deg, #fedddc, #fff)" }}
            >
                <div className="container px-4 mx-auto relative">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-6 xl:pr-12 text-center lg:text-start">
                            <div className="pb-14 lg:pb-36">
                                <h2 className="text-3xl md:text-[70px] md:leading-[85px] mb-4">
                                    Anything and Everything Mobile Homes.
                                </h2>
                                <p className="text-[22px] leading-normal opacity-80">
                                    It's easier to reach your savings goals when you have the right
                                    savings account. Take a look and find the right one for you!
                                </p>
                                <div>
                                    <a
                                        href="#!"
                                        className="bg-blue-600 rounded py-3 px-8 hover:bg-opacity-90 duration-300 text-white text-xl inline-flex mt-6 md:mt-12"
                                    >
                                        Try Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-end justify-center">
                            <div className="bg-white dark:bg-slate-800 rounded-t-[200px] rounded-bl-[100px] text-center px-6">
                                <img
                                    src="https://cdn.easyfrontend.com/pictures/man.png"
                                    alt=""
                                    className="rounded max-w-full h-auto mt-4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}


