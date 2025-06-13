const AboutSection = () => {
    return (
        <div className="px-6  flex flex-col justify-center items-center gap-6 md:gap-10 py-10 ">
            <div className="flex flex-col justify-center items-center gap-3">
                <h2 className="sub-heading text-[#2A2A2A] ">About us</h2>
                <div className="bg-[#FF1616] w-14 h-2"></div>
            </div>
            <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 gap-3 md:grid-cols-2 sub-description text-[#666666]">
                <div>
                   At NobleCraft Construction Private Limited, we are dedicated to building more than just structures—we build trust, reliability, and long-term value. Our comprehensive range of services includes Construction, Steel Furniture, Steel Fabrication, Electrical Goods, Building Hardware, and Steel & Iron Solutions, designed to serve residential, commercial, and industrial sectors with precision and professionalism.
                </div>
                <div>
                   From custom steel furniture and advanced fabrication to full-scale construction and quality electrical and hardware supplies, we deliver solutions that combine durability, innovation, and aesthetics. Backed by a skilled team and a commitment to excellence, NobleCraft is the trusted partner for builders, architects, homeowners, and procurement professionals seeking end-to-end infrastructure and interior expertise.


                </div>
            </div>
        </div>
    );
};

export default AboutSection;
