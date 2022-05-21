import { Dispatch, SetStateAction } from "react";

interface Props {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const SearchSuggestions: React.FC<Props> = ({ state, setState }: Props) => {
  return (
    <div className="absolute w-full bg-gray-100 p-4 scale-0">
      <ul>
        <li className=" text-gray-400">Alaska</li>
      </ul>
    </div>
  );
};

export default SearchSuggestions;
