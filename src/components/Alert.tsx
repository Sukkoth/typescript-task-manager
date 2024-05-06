import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ColorScheme } from "./shared/types";

type Props = {
  type?: ColorScheme;
  text?: string;
  showCloseButton?: boolean;
  showBorder?: boolean;
  icon: React.ReactNode;
};

function Alert({
  type = "PRIMARY",
  text,
  showCloseButton = false,
  showBorder = false,
  icon,
}: Props) {
  const [show, setShow] = useState<boolean>(true);

  if (!show) return;

  function getColor() {
    switch (type) {
      case "PRIMARY":
        return {
          bg: "bg-primary",
          text: "text-black",
          border: showBorder
            ? "border border-primary-200 rounded-2xl p-1"
            : null,
        };
      case "ERROR":
        return {
          bg: "bg-red-400",
          text: "text-white",
          border: showBorder ? "border border-red-300 rounded-2xl p-1" : null,
        };
      default:
        return {
          bg: "bg-primary",
          text: "text-black",
          border: showBorder ? "border border-primary rounded-2xl p-1" : null,
        };
    }
  }

  return (
    <div className={getColor().border || ""}>
      <div
        className={`center-all ${getColor().bg} ${getColor().text}
      } text-black w-full py-5 rounded-2xl relative flex gap-4 lg:gap-10 justify-center items-center`}
      >
        <div className={getColor().text || ""}> {icon && icon}</div>
        <h1>{text || "Alert"}</h1>
        {showCloseButton && (
          <CgClose
            className='absolute right-4 top-4 p-1 text-2xl cursor-pointer hover:scale-150 duration-300'
            onClick={() => setShow(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Alert;
