import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      star: 5,
      name: "Lorem Dadi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      star: 5,
      name: "John Doe",
      description: "Excellent service! The team was very professional and delivered beyond our expectations."
    },
    {
      star: 4,
      name: "Jane Smith",
      description: "Good quality work, would recommend to others. The communication was clear throughout the project."
    },
    {
      star: 5,
      name: "Robert Johnson",
      description: "Absolutely amazing experience from start to finish. Will definitely work with them again."
    },
    {
      star: 5,
      name: "Emily Davis",
      description: "They understood exactly what we needed and delivered perfect results on time."
    },
    {
      star: 4,
      name: "Michael Wilson",
      description: "Solid performance overall. A few minor issues but they were quick to address them."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Swipe tracking
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : 3;
    }
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % (testimonials.length - visibleCount + 1));
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, testimonials.length, visibleCount]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - visibleCount : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev === testimonials.length - visibleCount ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getTransformValue = () => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.offsetWidth / visibleCount;
      return -currentIndex * itemWidth;
    }
    return 0;
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  return (
    <section className="w-full p-4 md:p-12 bg-[#F7F7F7] relative overflow-hidden">
      <h2 className="sub-heading text-[#2A2A2A]">What Our Clients Say</h2>

      <div className="relative">
        <button 
          onClick={goToPrev}
          className="hidden md:block absolute -left-1.5 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="text-[#ff1616] w-6 h-6" />
        </button>

        <div 
          ref={containerRef}
          className="w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out py-2"
            style={{ transform: `translateX(${getTransformValue()}px)` }}
          >
            {testimonials.map((review, index) => (
              <div 
                key={index}
                className="flex-shrink-0 px-2 md:px-4 py-6"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="bg-white p-6 h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: review.star }).map((_, i) => (
                      <Star key={i} className="text-[#ff1616] w-5 h-5" fill="#ff1616" />
                    ))}
                  </div>
                  <p className="text-[#666666] italic mb-4 flex-grow">"{review.description}"</p>
                  <h2 className="text-[#2A2A2A] font-medium text-lg">{review.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={goToNext}
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight className="text-[#ff1616] w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#ff1616]' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
