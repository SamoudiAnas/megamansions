import { Dispatch, SetStateAction } from "react";

interface Props {
  type: string;
  placeholder?: string;
  className?: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const SearchInput: React.FC<Props> = (props) => {
  //verify if the custom added classNames aren't empty so we avoid undefined
  let additionalClasses: string = "";
  if (props.className !== undefined) {
    additionalClasses = props.className;
  }

  //input handler
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setState(e.target.value);
  };

  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.state}
      onChange={inputHandler}
      className={
        "h-16 w-full px-8 py-2 bg-white text-gray-500  " + additionalClasses
      }
    />
  );
};

export default SearchInput;
