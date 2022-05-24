import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Slide from "./Slide";
import { TOP_HOUSES } from "../../constants/topHouses";

const SliderContainer: React.FC = () => {
  const [innerCarouselWidth, setInnerCarouselWidth] = useState<number>(0);

  /**
   * carouselRef is used to determine the width of the slider containing all the slides
   * so we can set a range for the slider for the user not to exceed while using the grab motion
   */
  let carouselRef = useRef<HTMLDivElement | null>(null);

  /**
   * This useEffect hook runs on first load to determine the width for the slider containing all slides.
   * carouselRef.current?.scrollWidth: gets the width of the slider container until we get the slides out of screen when grabbing
   * carouselRef.current?.offsetWidth: gets the width of what is showing on the slider container
   * we subtract to get the width of all slides (plus the margins and gap)
   */
  useEffect(() => {
    if (carouselRef.current) {
      setInnerCarouselWidth(
        carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth
      );
    }
  }, []);

  return (
    <motion.div
      className="relative min-h-[25rem] overflow-hidden cursor-grab "
      whileDrag={{ cursor: "grabbing" }}
      ref={carouselRef}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -innerCarouselWidth, right: 0 }}
        className={"absolute flex min-w-full h-full"}
      >
        {TOP_HOUSES.map((house, index) => (
          <Slide
            key={index}
            image={house.image}
            name={house.name}
            price={house.price}
            numberOfBeds={house.numberOfBeds}
            numberOfBaths={house.numberOfBaths}
            numberOfGarages={house.numberOfGarages}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SliderContainer;
