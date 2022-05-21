import { useEffect, useRef } from "react";

//images
import house1IMG from "../assets/house1.jpg";
import house2IMG from "../assets/house2.jpg";
import house3IMG from "../assets/house3.jpg";
import house4IMG from "../assets/house4.jpg";

const SliderContainer: React.FC = () => {
  const MARGIN_LEFT_PERCENTAGE = -35; // width of image "30%" + gap between images "5%"

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
          "absolute top-0 left-0 flex w-full h-full gap-[6%] ml-[" +
          MARGIN_LEFT_PERCENTAGE +
          "%]"
        }
        ref={sliderContainerRef}
      >
        <div className="w-full flex-slider overflow-hidden">
          <img
            src={house1IMG}
            alt=""
            className="object-cover w-full h-full black"
          />
        </div>
        <div className="w-full flex-slider overflow-hidden">
          <img
            src={house2IMG}
            alt=""
            className="object-cover w-full h-full black"
          />
        </div>
        <div className="w-full flex-slider overflow-hidden">
          <img
            src={house3IMG}
            alt=""
            className="object-cover w-full h-full black"
          />
        </div>
        <div className="w-full flex-slider overflow-hidden">
          <img
            src={house4IMG}
            alt=""
            className="object-cover w-full h-full black"
          />
        </div>
        <div className="w-full flex-slider overflow-hidden">
          <img
            src={house1IMG}
            alt=""
            className="object-cover w-full h-full black"
          />
        </div>
        <div className="w-full flex-slider overflow-hidden">
          <img
            src={house2IMG}
            alt=""
            className="object-cover w-full h-full black"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderContainer;
