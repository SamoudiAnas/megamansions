import SearchHouseForm from "../components/SearchHouseForm";
import Navbar from "../components/Navbar";

//images
import heroBG from "../assets/hero.jpg";

const Homepage: React.FC = () => {
  return (
    <>
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
          <h1>Find your dreams house</h1>
          <SearchHouseForm />
        </div>
      </div>
    </>
  );
};

export default Homepage;
