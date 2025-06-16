import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Image1 from "../assets/Contact/image1.png";


const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await handler(data);
      if (res?.data?.isSuccess) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting us.",
          confirmButtonColor: "#FF1616",
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: res?.data?.message || "Something went wrong.",
          confirmButtonColor: "#FF1616",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#FF1616",
      });
      console.error("Submit Error:", err);
    }
  };

  return (
    <div className="grid bg-[#FF1616] grid-cols-1 md:grid-cols-2 ">
      <div>
        <img src={Image1} className="w-full h-full object-cover" alt="Contact Banner" />
      </div>
      <div className="flex flex-col py-8 md:py-16 px-6 md:px-10">
        <div className="flex flex-col gap-3">
          <h2 className="sub-heading text-left">Contact Us</h2>
          <div className="w-14 bg-black h-2 mb-6"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 items-start w-full justify-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3">
            <div className="w-full">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "* Name is required" })}
                className="bg-white w-full h-10 px-3 text-sm font-light"
              />
              {errors.name && <p className="text-sm text-white mt-1">{errors.name.message}</p>}
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "* Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "* Enter a valid email address",
                  },
                })}
                className="bg-white w-full h-10 px-3 text-sm font-light"
              />
              {errors.email && <p className="text-sm text-white mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="w-full">
            <textarea
              rows={4}
              placeholder="Message"
              {...register("message", { required: "* Message is required" })}
              className="bg-white w-full p-3 text-sm font-light"
            ></textarea>
            {errors.message && <p className="text-sm text-white mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="w-fit text-white border-2 px-6 py-2 border-white hover:text-black cursor-pointer bg-[#FF1616] text-sm font-semibold hover:bg-white shadow-md transition-all duration-300"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
