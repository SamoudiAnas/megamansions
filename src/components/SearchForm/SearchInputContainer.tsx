import { Dispatch, SetStateAction } from "react";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";

interface Props {
  type: string;
  placeholder: string;
  className?: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const SearchInputContainer: React.FC<Props> = ({
  type,
  placeholder,
  className,
  state,
  setState,
}) => {
  return (
    <div className="relative flex-searchForm">
      <SearchInput
        type={type}
        placeholder={placeholder}
        className={className}
        state={state}
        setState={setState}
      />
      <SearchSuggestions state={state} setState={setState} />
    </div>
  );
};

export default SearchInputContainer;
