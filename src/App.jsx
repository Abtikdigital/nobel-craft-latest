import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Logo from "./assets/Logo/Logo.png"
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";
import Project from "./Pages/Project";
import Services from "./Pages/Services";
import ConstructionService from "./Pages/Construction";
import BuildingHardware from "./Pages/BuildingHardware";
import ElectricalGoods from "./Pages/ElectricalGoods";
import SteelFurniture from "./Pages/SteelFurniture";
import SteelFabrication from "./Pages/SteelFabrication";
import SteelIron from "./Pages/SteelIron"
import SteelIronFabrication from "./Pages/SteelIronFabrication"
import { useDispatch, useSelector } from "react-redux";
import { X, Check } from "lucide-react";
import { useForm } from "react-hook-form";
// import { addQuote } from "./api/quoteApis";
import Swal from "sweetalert2";
import axios from "axios";

const serviceOptions = [
  { label: "Construction", value: "construction" },
  { label: "Building Hardware", value: "building-hardware" },
  { label: "Electrical Goods", value: "electrical-goods" },
  { label: "Steel Furniture", value: "steel-furniture" },
  { label: "Steel Fabrication", value: "steel-fabrication" },
  { label: "Other", value: "other" },
];

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    reset,
  } = useForm();

  const handleClose = () => {
    dispatch({ type: "close" });
    reset();
  };

  const onSubmit = async (data) => {
    try {
      let res = await axios.post("/api/quoteApis",data);
      if (res?.status == 201) {
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Your form has been successfully submitted.",
          confirmButtonColor: "#FF1616",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#FF1616",
      });
    } finally {
      handleClose();
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Project />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/services/construction"
            element={<ConstructionService />}
          />
          <Route
            path="/services/building-hardware"
            element={<BuildingHardware />}
          />
          <Route
            path="/services/electrical-goods"
            element={<ElectricalGoods />}
          />
          <Route
            path="/services/steel-furniture"
            element={<SteelFurniture />}
          />
          <Route
            path="/services/steel-fabrication"
            element={<SteelFabrication />}
          />
          <Route
            path="/services/steel-iron"
            element={<SteelIron />}
          />
          <Route
            path="/services/steel-iron-fabrication"
            element={<SteelIronFabrication />}
          />
        </Routes>
      </BrowserRouter>

      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50">
          <div className="relative w-screen max-h-screen md:w-[90vw] md:max-w-2xl md:h-[90vh] shadow-lg flex flex-col bg-white">
            <div className="bg-[#FF1616] px-6 py-4 text-white relative">
              <h2 className="text-2xl font-bold">Get A Quote</h2>
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 border-2 border-white text-black bg-white p-0.5 hover:ring-1 rounded-sm duration-100 ring-white hover:cursor-pointer"
              >
                <X />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 text-[#2A2A2A] space-y-5">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", { required: "* Name is required" })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF1616]"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    {...register("email", {
                      required: "* Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "* Enter a valid email address",
                      },
                    })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF1616]"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    {...register("number", {
                      required: "* Phone number is required",
                      minLength: { value: 10, message: "Minimum 10 digits" },
                    })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF1616]"
                  />
                  {errors.number && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.number.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Service
                  </label>
                  <CustomDropdown
                    value={watch("serviceType")}
                    onChange={(val) =>
                      setValue("serviceType", val, { shouldValidate: true })
                    }
                    error={errors.serviceType?.message}
                  />
                  <input
                    type="hidden"
                    {...register("serviceType", {
                      required: "* Service selection is required",
                    })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    {...register("message", {
                      required: "* Message is required",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#FF1616]"
                  ></textarea>
                  {errors.message && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <button
                    type="button"
                    className="w-full bg-gray-200 text-black py-2 border border-gray-400 hover:bg-gray-300 cursor-pointer duration-300"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full bg-[#FF1616] text-white py-2 hover:bg-red-600 transition cursor-pointer duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// 🔽 Updated CustomDropdown component
function CustomDropdown({ value, onChange, error }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF1616]"
      >
        {serviceOptions.find((opt) => opt.value === value)?.label ||
          "Select a service"}
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full border border-gray-300 bg-white shadow-md max-h-60 overflow-auto">
          {serviceOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`px-4 py-2 flex justify-between items-center hover:bg-[#f2f7fe] cursor-pointer ${
                value === option.value ? "bg-[#f2f7fe]" : ""
              }`}
            >
              <span>{option.label}</span>
              {value === option.value && (
                <Check size={16} className="text-[#FF1616]" />
              )}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}

export default React.memo(App);
