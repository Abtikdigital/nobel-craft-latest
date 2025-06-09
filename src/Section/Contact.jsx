import Image1 from "../assets/Contact/image1.png"


const Contact = () => {

  return (<div className="grid bg-[#FF1616] grid-cols-1 md:grid-cols-2">
      <div>
        <img src={Image1} className="w-full h-full" />
      </div>
      <div className="flex flex-col py-8 md:py-16 px-6 md:px-10">
        <div className="flex flex-col gap-3">
          <h2 className="sub-heading text-left">
            Contact Us
          </h2>
          <div className="w-14 bg-black h-1.5 mb-6"></div>
        </div>
        <form className="flex flex-col gap-6 items-start">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">
            <input placeholder="Name" className="bg-white w-full h-10 px-3 text-sm font-light" />
            <input placeholder="Email" className="bg-white w-full h-10 px-3 text-sm font-light" />
          </div>
          <textarea placeholder="Message" rows={4} className="bg-white w-full p-3 text-sm font-light"></textarea>
          <button className="w-fit text-white border-2 px-6 py-2 border-white hover:text-black cursor-pointer bg-[#FF1616]  text-sm font-semibold hover:bg-white shadow-md transition-all duration-300">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>)
}
export default Contact