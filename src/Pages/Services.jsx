import Navbar from "../Section/Navbar";
import Hero from "../Section/Hero";
import Footer from "../Section/Footer";
import FadeInSection from "../utils/FadeIn";
import { useDispatch } from "react-redux";


const Services = () => {
    const disp = useDispatch()
    const handleOpenDialog = () => {
        disp({ type: "open" })
    }
    const services = [
        {
            title: "Building Construction",
            description: " loremd ipsome lorem ipsam lorem ipsam",
            lists: [
                ["list1 ", "list1 ", "list1 ", "list1 ", "list1 "],
                ["list1 ", "list1 ", "list1 ", "list1 ", "list1 "],
                ["list1 ", "list1 ", "list1 ", "list1 ", "list1 "],
            ],
        },
        {
            title: "Building Construction",
            description: " loremd ipsome lorem ipsam lorem ipsam",
            lists: [
                ["list1 ", "list1 ", "list1 ", "list1 ", "list1 "],
                ["list1 ", "list1 ", "list1 ", "list1 ", "list1 "],
                ["list1 ", "list1 ", "list1 ", "list1 ", "list1 "],
            ],
        },
        {
            title: "Building Construction",
            description: " loremd ipsome lorem ipsam lorem ipsam",
            lists: [
                ["list1 ", "list1 ", "list1 ", "list1 ", "list1 "],
                ["list1 ", "list1 ", "list1 ", "list1 ", "list1 "],
                ["list1 ", "list1 ", "list1 ", "list1 ", "list1 "],
            ],
        },
    ];
    return (
        <>
            <Navbar />
            <FadeInSection>
                <Hero
                    title="Our Construction Service"
                    heading2="Contact Us"
                    heading={[
                        {
                            heading: "Construction",
                            description:
                                "Full-scale building solutions for homes, offices, and industries—safe, strong, and precise.",
                            img: "",
                        },
                        {
                            heading: "Construction",
                            description:
                                "Full-scale building solutions for homes, offices, and industries—safe, strong, and precise.",
                            img: "",
                        },
                    ]}
                />
            </FadeInSection>
            <FadeInSection>
                <section className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 px-6 md:px-10 lg:px-24 py-4">
                    <div className="md:col-span-3 sub-heading break-words text-left">
                        Get a Quote For Your Project
                    </div>
                    <div className="flex justify-start md:justify-end">
                        <button className="white-red-button" onClick={handleOpenDialog}>FREE QUOTE</button>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <section className="md:px-24  flex flex-col gap-6 ">
                    {services.map((section, index) => (
                        <div className="flex flex-col gap-6  bg-[#F7F7F7] pt-6 md:pt-12">
                            {/* Title & Red Bar */}
                            <div className="px-6 md:px-10">
                                <h2 className="sub-heading text-left">{section?.title}</h2>
                                <div className="w-24 h-2 bg-[#FF1616] mt-2"></div>
                            </div>

                            {/* Description */}
                            <div className="sub-description text-[#2A2A2A] px-6 md:px-10">
                                {section?.description}
                            </div>

                            {/* List Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-10 ">
                                {section.lists.map((list, idx, arr) => (
                                    <ul key={idx} className={` list-inside list-disc space-y-2 ${arr.length - 1 != idx && 'border-b-2'}  border-gray-200 pb-2 md:border-none`} >
                                        {list.map((listData, i) => (
                                            <li key={i} className="sub-description text-[#2A2A2A]">
                                                {listData}
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>

                            {/* Button Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 ">
                                <div className="bg-[#2A2A2A] py-4 flex justify-center items-center">
                                    <button className="white-red-button" onClick={handleOpenDialog}>GET A QUOTE</button>
                                </div>
                                <div className="bg-[#FF1616] py-4 flex justify-center items-center">
                                    <button className="red-white-button border-2 border-white hover:bg-white hover:text-[#2A2A2A]">LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </FadeInSection>


            <Footer />
        </>
    );
};
export default Services;
