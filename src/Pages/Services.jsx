import Footer from "../Section/Footer"
import Navbar from "../Section/Navbar"
import Hero from '../Section/Hero'
import Contact from '../Section/Contact'
import LatestProject from "../Section/LatestProject"
import Image1 from '../assets/Hero/Image1.png'
import Image2 from '../assets/Hero/Image2.png'
import Image3 from '../assets/Hero/Image3.png'


const Services = () => {


    return (
        <>
            <Navbar />
            <Hero title="Building the Future, One Brick at a Time"
                heading2="checkFrom residential dream homes to industrial-scale developments, NobleCraft delivers unmatched construction quality, cutting-edge materials, and flawless execution — on time, every time."
                heading={[
                    {
                        heading: "Building Construction",
                        description: `Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.`,
                        img: Image1,
                    },
                    {
                        heading: "Building Repairs",
                        description: `Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.`,
                        img: Image2,
                    },
                    {
                        heading: "Custom Design",
                        description: `Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat.`,
                        img: Image3,
                    },


                ]} />

            <div className="flex flex-col md:flex-row items-center justify-between px-50 py-10 bg-white border-t border-gray-200">

                {/* Left: Title */}
                <h2 className="text-2xl font-semibold text-center md:text-left text-gray-900 mb-4 md:mb-0">
                    Get a Quote For Your Project
                </h2>

                {/* Right: Button */}
                <button className="border-2 border-red-500 text-red-500 font-semibold text-xs tracking-widest uppercase px-6 py-3 hover:bg-red-500 hover:text-white transition">
                    Free Quote
                </button>

            </div>

            <section className="bg-white px-50 py-12">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Building Construction
                    </h2>
                    <div className="w-10 h-1 bg-red-600 mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-600 mb-8 max-w-4xl">
                        Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum.
                    </p>

                    {/* Bullet Lists */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Lectus erat consectetur</li>
                            <li>Eu sapien eget</li>
                            <li>Rhoncus consectetur</li>
                            <li>Proin cursus</li>
                            <li>Dolor a mollis consectetur</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Risus dolor fermentum</li>
                            <li>Massa a commodo</li>
                            <li>Elit dui sit amet risus</li>
                            <li>Maecenas ornare</li>
                            <li>Nisl a tortor ultrices</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Bibendum nulla fermentum</li>
                            <li>Metus quis sodales</li>
                            <li>Tristique augue mauris</li>
                            <li>Molestie augue non</li>
                            <li>Feugiat ligula neque</li>
                        </ul>
                    </div>

                    {/* Button Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left button */}
                        <div className="bg-black text-center py-5">
                            <button className="border-2 border-white text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition">
                                Get a Quote
                            </button>
                        </div>

                        {/* Right button */}
                        <div className="bg-red-600 text-center py-5">
                            <button className="border-2 border-white text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-red-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                </div>
            </section>


            <section className="bg-white px-50 py-14">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Repairs & Installations
                    </h2>
                    <div className="w-10 h-1 bg-red-600 mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-600 mb-8 max-w-4xl">
                        Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum.
                    </p>

                    {/* Bullet Lists */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Lectus erat consectetur</li>
                            <li>Eu sapien eget</li>
                            <li>Rhoncus consectetur</li>
                            <li>Proin cursus</li>
                            <li>Dolor a mollis consectetur</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Risus dolor fermentum</li>
                            <li>Massa a commodo</li>
                            <li>Elit dui sit amet risus</li>
                            <li>Maecenas ornare</li>
                            <li>Nisl a tortor ultrices</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Bibendum nulla fermentum</li>
                            <li>Metus quis sodales</li>
                            <li>Tristique augue mauris</li>
                            <li>Molestie augue non</li>
                            <li>Feugiat ligula neque</li>
                        </ul>
                    </div>

                    {/* Button Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left button */}
                        <div className="bg-black text-center py-5">
                            <button className="border-2 border-white text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition">
                                Get a Quote
                            </button>
                        </div>

                        {/* Right button */}
                        <div className="bg-red-600 text-center py-5">
                            <button className="border-2 border-white text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-red-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                </div>
            </section>


            <section className="bg-white px-50 py-12">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Custom Design Projects
                    </h2>
                    <div className="w-10 h-1 bg-red-600 mb-6"></div>

                    {/* Description */}
                    <p className="text-gray-600 mb-8 max-w-4xl">
                        Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum.
                    </p>

                    {/* Bullet Lists */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 text-sm text-gray-700">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Lectus erat consectetur</li>
                            <li>Eu sapien eget</li>
                            <li>Rhoncus consectetur</li>
                            <li>Proin cursus</li>
                            <li>Dolor a mollis consectetur</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Risus dolor fermentum</li>
                            <li>Massa a commodo</li>
                            <li>Elit dui sit amet risus</li>
                            <li>Maecenas ornare</li>
                            <li>Nisl a tortor ultrices</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Bibendum nulla fermentum</li>
                            <li>Metus quis sodales</li>
                            <li>Tristique augue mauris</li>
                            <li>Molestie augue non</li>
                            <li>Feugiat ligula neque</li>
                        </ul>
                    </div>

                    {/* Button Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left button */}
                        <div className="bg-black text-center py-5">
                            <button className="border-2 border-white text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition">
                                Get a Quote
                            </button>
                        </div>

                        {/* Right button */}
                        <div className="bg-red-600 text-center py-5">
                            <button className="border-2 border-white text-white px-6 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-red-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                </div>
            </section>



            <LatestProject />

            <Contact />

            <Footer />


        </>
    )
}
export default Services