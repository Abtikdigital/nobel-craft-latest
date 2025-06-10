const AboutSection = () => {
    return (
        <div className="px-6  flex flex-col justify-center items-center gap-6 md: gap-10 py-10 md:py-20">
            <div className="flex flex-col justify-center items-center gap-3">
                <h2 className="sub-heading text-[#2A2A2A] ">About us</h2>
                <div className="bg-[#FF1616] w-14 h-2"></div>
            </div>
            <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 gap-3 md:grid-cols-2 sub-description text-[#666666]">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
                    necessitatibus nulla dolorem rem quas assumenda iste qui impedit ut,
                    quisquam nemo quam earum numquam placeat commodi soluta odio minima
                    repudiandae repellendus quaerat optio natus, maiores fugiat aliquid?
                    Eaque harum, molestias eveniet sunt commodi laudantium, ab maiores
                    incidunt sit pariatur optio.
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
                    maiores, tenetur error rerum nam fugit aliquam ullam incidunt ipsum
                    itaque reiciendis iste voluptas culpa? Minus, dolor illo rem odit
                    sequi sit soluta blanditiis est maxime, natus eaque facilis, ipsa
                    ducimus harum dignissimos nam quis assumenda fugiat libero magni quam?
                    Totam.
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
