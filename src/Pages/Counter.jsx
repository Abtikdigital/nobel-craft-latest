import { useEffect, useRef, useState } from "react";


const Counter = ({ target }) => {
  const ref = useRef();
  const [value, setValue] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          let current = 0;
          const increment = target / 200;

          const update = () => {
            current += increment;
            if (current < target) {
              setValue(Math.ceil(current));
              requestAnimationFrame(update);
            } else {
              setValue(target);
            }
          };

          update();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, hasCounted]);

  return (
    <h3 className="font-semibold text-2xl" ref={ref}>
      {value}+
    </h3>
  );
};

export default Counter;
