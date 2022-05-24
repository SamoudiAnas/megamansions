import SearchHouseForm from "../components/SearchForm/SearchHouseForm";
import SliderContainer from "../components/Slider/SliderContainer";
import Navbar from "../components/Navbar";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
//images
import heroBG from "../assets/hero.jpg";
import { LatLngTuple } from "leaflet";

const Homepage: React.FC = () => {
  const position: LatLngTuple = [51.505, -0.09];

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
          <h1 className="text-center text-4xl mb-4">
            Find your dreams house today
          </h1>
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
          <button className=" mt-8 py-4 px-10  bg-blue-600 text-white cursor-pointer hover:bg-blue-700 hover:scale-105 transform transition">
            More Info
          </button>
        </div>

        <SliderContainer />
      </div>

      <div className="container relative my-32">
        <h1 className="font-extrabold text-center text-3xl mb-8">
          Search for a house now near you
        </h1>

        <MapContainer
          className="min-h-[20rem] w-full"
          center={position}
          zoom={11}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Homepage;
