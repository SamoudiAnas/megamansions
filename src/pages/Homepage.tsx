import SearchHouseForm from "../components/SearchForm/SearchHouseForm";
import Navbar from "../components/Navbar";

//images
import heroBG from "../assets/hero.jpg";
import SliderContainer from "../components/SliderContainer";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

const Homepage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,41,59,0.6),rgba(30,41,59,0.4),rgba(30,41,59,0.8)), url('" +
            heroBG +
            "')",
        }}
        className="w-full min-h-[80vh] text-white   bg-no-repeat bg-cover"
      >
        <Navbar />
        <div className="flex flex-col gap-4 justify-center items-center min-h-[55vh]">
          <h1 className="text-center text-4xl mb-4">Find your dreams house</h1>
          <SearchHouseForm />
        </div>
      </div>

      <div className="container relative grid grid-cols-[1fr_3fr] gap-16 py-16">
        <div className="my-auto">
          <h1 className="font-extrabold text-2xl mb-8">
            Nostrum error tenetur saepe earum nam reiciendis ipsum fuga.
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos provident, deserunt inventore natus tenetur quasi
            voluptatum quibusdam iusto assumenda vel recusandae.
          </p>
          <div className="flex gap-4 mt-8 items-center">
            <ArrowLeftIcon className="p-4 w-14 h-14 bg-blue-600 text-white cursor-pointer" />
            <ArrowRightIcon className="p-4 w-12 h-12 bg-blue-600 text-white cursor-pointer" />
          </div>
        </div>

        <SliderContainer />
      </div>
    </div>
  );
};

export default Homepage;
