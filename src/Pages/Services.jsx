import React from "react";
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
            title: "Construction",
            description: " We provide comprehensive construction services for homes, offices, and industrial projects—delivered with precision, safety, and on-time execution.",
            lists: [
                ["Residential & commercial construction ", "Turnkey project execution", "Structural design & planning", "RCC & steel framework",],
                ["Flooring & tiling solutions ", "Plumbing & electrical integration ", "Renovation & remodeling services ", "Compliance with safety codes "],
                ["Use of quality-certified materials ", "Project management & supervision  ", "Brickwork & plastering", "Timely project delivery ",],
            ],
        },
        {
            title: "Steel Furniture",
            description: " Custom-designed, durable steel furniture solutions for homes, offices, and industrial spaces—crafted for strength and style.",
            lists: [
                ["Modular office workstations", "Customized wardrobes ", "Powder-coated finish options ", "Welded and bolted structures ",],
                ["Heavy-duty storage racks ", "Hospital and lab furniture ", "Weather-resistant outdoor sets", "Eco-friendly, recyclable materials ",],
                ["Space-saving storage solutions ", "Ergonomic seating and tables ", "Sleek, modern aesthetic designs ", "Rust-proof surface finish ",],
            ],
        },
        {
            title: "Steel Fabrication",
            description: " High-precision steel fabrication for industrial, commercial, and custom structural needs.",
            lists: [
                ["Custom steel structures ", "CNC cutting & bending ", "MIG & TIG welding", "Sheet metal bending & forming ",],
                ["Railings & staircases ", "Machine parts & enclosures", "Pipe and tube fabrication", "Heavy-duty machine parts",],
                ["Warehouse fabrication ", "Rust-resistant coatings ", "Skilled craftsmanship & accuracy ", "On-time project delivery",],
            ],
        },
        {
            title: "Steel Iron",
            description: " Durable, high-quality steel and iron works for construction, interiors, and industrial-grade use.",
            lists: [
                ["Mild steel gates and grills ", "Iron doors and window frames ", "Steel staircases and railings", "Industrial platforms ",],
                ["Steel beams and channels ", "Steel beams and channels", "Warehouse frameworks", "Machine enclosures",],
                ["Rust-proof finishes", "Precision welding ", "Durable coatings ", "Custom fabrication options",],
            ],
        },
        {
            title: "Steel Iron Fabrication",
            description: " Expert steel and iron fabrication for durable, custom-built residential and industrial solutions.",
            lists: [
                ["Mild steel gates & grills ", "Custom staircases & railings ", "Iron window frames", "Heavy-duty platforms ",],
                ["Structural beams & channels ", "Machine frame fabrication", "Machine frame fabrication", "Sheet metal works",],
                ["Rust-resistant finishes", "Powder coating options ", "Precision welding ", "Custom-built solutions",],
            ],
        },
        {
            title: "Electrical Goods",
            description: " We supply high-quality electrical products for safe, efficient, and reliable installations in residential, commercial, and industrial spaces.",
            lists: [
                ["Modular switches and sockets ", "Concealed wiring accessories ", "Industrial switchgear", "Smart lighting systems ",],
                ["LED lights and panels ", "Circuit breakers and MCBs", "Electrical distribution boards", "Wires and cables ",],
                ["Weatherproof enclosures", "Energy-saving solutions ", "Surge protectors ", "High-load connectors",],
            ],
        },
        {
            title: "Building Hardware",
            description: " Premium-quality hardware components for strong, long-lasting, and aesthetically integrated construction solutions.",
            lists: [
                ["Door hinges and handles ", "Cabinet and drawer channels ", "Tower bolts and latches", "Magnetic catches ",],
                ["SS screws and fasteners ", "Window rollers and stoppers", "Sliding door fittings", "Wall plugs and anchors",],
                ["Curtain brackets and supports", "Glass fittings and clamps ", "Heavy-duty locks and knobs ", "Weatherproof sealants",],
            ],
        },

    ];
    return (
        <>
            <Navbar />
            <FadeInSection>
                <Hero
                    title="Our Construction Service"
                    heading2=""
                    heading={[
                        {
                            heading: "Our Construction Services",
                            description:
                                "Full-scale building solutions for homes, offices, and industries—safe, strong, and precise.",
                            img: "",
                        }
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

            {/* <FadeInSection> */}
            <section className="md:px-24 flex flex-col gap-6">
                {services.map((section, index) => (
                    <FadeInSection key={index}>
                        <div className="flex flex-col gap-6 bg-[#F7F7F7] pt-6 md:pt-12">
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-10">
                                {section.lists.map((list, idx, arr) => (
                                    <ul
                                        key={idx}
                                        className={`list-inside list-disc space-y-2 ${arr.length - 1 !== idx && 'border-b-2'
                                            } border-gray-200 pb-2 md:border-none`}
                                    >
                                        {list.map((listData, i) => (
                                            <li key={i} className="sub-description text-[#2A2A2A]">
                                                {listData}
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>

                            {/* Button Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="bg-[#2A2A2A] py-4 flex justify-center items-center">
                                    <button className="white-red-button" onClick={handleOpenDialog}>
                                        GET A QUOTE
                                    </button>
                                </div>
                                <div className="bg-[#FF1616] py-4 flex justify-center items-center">
                                    <button className="red-white-button border-2 border-white hover:bg-white hover:text-[#2A2A2A]">
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </section>

            {/* </FadeInSection> */}


            <Footer />
        </>
    );
};
export default React.memo(Services);
