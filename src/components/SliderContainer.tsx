import { useEffect, useRef, useState } from "react";

//images
import house1IMG from "../assets/house1.jpg";
import house2IMG from "../assets/house2.jpg";
import house3IMG from "../assets/house3.jpg";
import house4IMG from "../assets/house4.jpg";
import Slide from "./Slider/Slide";

const SliderContainer: React.FC = () => {
  const [marginLeftPercentage, setmarginLeftPercentage] = useState<number>(0);
  const MARGIN_LEFT_PERCENTAGE = -40; // width of image "35%" + gap between images "5%"

  let sliderContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderContainerRef) {
      let slidesCount = sliderContainerRef.current?.childNodes.length;
      console.log(slidesCount);
    }
  }, []);

  return (
    <div className="relative min-h-[25rem] overflow-hidden">
      <div
        className={
          "absolute top-0 left-[-140%] flex w-full h-full gap-[5%] ml-[-" +
          marginLeftPercentage +
          "%]"
        }
        ref={sliderContainerRef}
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
      </div>
    </div>
  );
};

export default SliderContainer;
