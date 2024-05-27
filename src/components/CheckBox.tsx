import { useEffect, useState } from "react";
import { BiCheck } from "react-icons/bi";

type CheckBoxPropTypes = {
  value?: boolean;
  onChange: (value: boolean) => void;
};

function CheckBox({ value = false, onChange }: CheckBoxPropTypes) {
  const [checked, setChecked] = useState<boolean>(value);
  useEffect(() => {
    setChecked(value);
  }, [value]);

  const handleClick = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange(newValue);
  };

  const checkedStyle = "border border-primary bg-primary";
  const defaultStyle = "border border-black dark:border-white bg-transparent";

  return (
    <div
      onClick={handleClick}
      className={`size-6 cursor-pointer center-all rounded-full ${
        checked ? checkedStyle : defaultStyle
      }`}
    >
      {checked && <BiCheck color='black' size={20} />}
    </div>
  );
}

export default CheckBox;
