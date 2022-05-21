import { Dispatch, SetStateAction } from "react";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";

interface Props {
  type?: string;
  placeholder?: string;
  className?: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

function SearchInputContainer({
  type,
  placeholder,
  className,
  state,
  setState,
}: Props) {
  return (
    <div className="relative">
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
}

export default SearchInputContainer;
