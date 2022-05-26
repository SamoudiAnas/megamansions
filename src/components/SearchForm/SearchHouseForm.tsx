import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import SearchInputContainer from "./SearchInputContainer";

const SearchHouseForm: React.FC = () => {
  const [stateInput, setStateInput] = useState<string>("");
  const [neighborhoodInput, setNeighborhoodInput] = useState<string>("");
  const [zipInput, setZipInput] = useState<string>("");

  const searchForHouse = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-wrap shadow-searchForm w-full container"
      onSubmit={searchForHouse}
    >
      <SearchInputContainer
        type="text"
        placeholder="State"
        state={stateInput}
        setState={setStateInput}
      />

      <SearchInputContainer
        type="text"
        placeholder="Neighborhood"
        className="border-l border-l-blue-500"
        state={neighborhoodInput}
        setState={setNeighborhoodInput}
      />

      <SearchInputContainer
        type="text"
        placeholder="ZIP"
        className="border-l border-l-blue-500"
        state={zipInput}
        setState={setZipInput}
      />
      <button className="flex-searchForm flex gap-6 items-center  px-4 py-2 h-16  bg-blue-500 text-xl  font-bold tracking-wide justify-center">
        Search
        <SearchIcon className="w-6" />
      </button>
    </form>
  );
};

export default SearchHouseForm;
