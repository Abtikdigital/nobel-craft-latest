import Footer from "../Section/Footer"
import Navbar from "../Section/Navbar"
import Hero from "../Section/Hero"
import Image1 from "../assets/Contact/Image.webp"
import Image2 from "../assets/Contact/Image.webp"
import Image3 from "../assets/Contact/Image.webp"

const Contact = () => {


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
            <Footer />

        </>
    )
}
export default Contact