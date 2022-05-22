//images
import house1IMG from "../../assets/house1.jpg";
//icons
import { BiBuildingHouse, BiBed, BiBath } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";

interface Props {
  image: string;
  name: string;
  price: number;
  numberOfBeds: number;
  numberOfBaths: number;
  numberOfGarages: number;
}

const Slide: React.FC<Props> = ({
  image,
  name,
  price,
  numberOfBeds,
  numberOfBaths,
  numberOfGarages,
}) => {
  return (
    <div className="relative w-full flex-slider overflow-hidden group hover:cursor-pointer">
      <img src={image} alt="" className="object-cover w-full h-full black" />

      <div className="absolute bottom-[-100%] bg-[rgba(0,0,0,0.75)] text-gray-400 p-4 group-hover:bottom-0 transition-all duration-500">
        <h3 className="font-bold text-white text-xl">{name}</h3>
        <h1 className="text-blue-600 font-bold text-xl">${price}</h1>
        <div className="grid grid-cols-4 gap-3 p-2 py-4 my-8 border-t border-t-gray-400 text-white">
          <div>
            <BiBuildingHouse className="w-full h-6 text-blue-600 " />
            <p className="text-sm whitespace-nowrap mt-2 text-center">House</p>
          </div>

          <div>
            <BiBed className="w-full h-6 text-blue-600 " />
            <p className="text-sm whitespace-nowrap mt-2 text-center">
              {numberOfBeds} Beds
            </p>
          </div>

          <div>
            <BiBath className="w-full h-6 text-blue-600 " />
            <p className="text-sm whitespace-nowrap mt-2 text-center">
              {numberOfBaths} Bath
            </p>
          </div>
          <div>
            <GiHomeGarage className="w-full h-6 text-blue-600 " />
            <p className="text-sm whitespace-nowrap mt-2 text-center">
              {numberOfGarages} Garage
            </p>
          </div>
        </div>
        <button className="bg-blue-600 text-white font-bold px-8 py-4 mx-auto block hover:bg-blue-700 hover:-translate-y-0.5 transform transition">
          View more details
        </button>
      </div>
    </div>
  );
};

export default Slide;
