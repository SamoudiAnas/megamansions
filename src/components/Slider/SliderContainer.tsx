import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

//images
import house1IMG from "../../assets/house1.jpg";
import house2IMG from "../../assets/house2.jpg";
import house3IMG from "../../assets/house3.jpg";
import house4IMG from "../../assets/house4.jpg";
import Slide from "./Slide";

const SliderContainer: React.FC = () => {
  const [innerCarouselWidth, setInnerCarouselWidth] = useState<number>(0);
  const [marginLeftPercentage, setmarginLeftPercentage] = useState<number>(0);
  const MARGIN_LEFT_PERCENTAGE = -40; // width of image "35%" + gap between images "5%"

  let carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setInnerCarouselWidth(
        carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth
      );
    }
  }, []);

  return (
    <motion.div
      className="relative min-h-[25rem] overflow-hidden"
      whileDrag={{ cursor: "grabbing" }}
      ref={carouselRef}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        className="flex w-full h-full  cursor-grab"
      >
        <Slide
          image={house1IMG}
          name="Ankra House"
          price={259000}
          numberOfBeds={4}
          numberOfBaths={2}
          numberOfGarages={1}
        />
        <Slide
          image={house2IMG}
          name="Ankra House"
          price={259000}
          numberOfBeds={4}
          numberOfBaths={2}
          numberOfGarages={1}
        />
        <Slide
          image={house3IMG}
          name="Ankra House"
          price={259000}
          numberOfBeds={4}
          numberOfBaths={2}
          numberOfGarages={1}
        />
        <Slide
          image={house4IMG}
          name="Ankra House"
          price={259000}
          numberOfBeds={4}
          numberOfBaths={2}
          numberOfGarages={1}
        />{" "}
        <Slide
          image={house4IMG}
          name="Ankra House"
          price={259000}
          numberOfBeds={4}
          numberOfBaths={2}
          numberOfGarages={1}
        />
        <Slide
          image={house4IMG}
          name="Ankra House"
          price={259000}
          numberOfBeds={4}
          numberOfBaths={2}
          numberOfGarages={1}
        />{" "}
      </motion.div>
    </motion.div>
  );
};

export default SliderContainer;
