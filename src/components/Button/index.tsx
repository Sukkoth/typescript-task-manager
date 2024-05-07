type Rounded =
  | "rounded-md"
  | "rounded-lg"
  | "rounded-xl"
  | "rounded-2xl"
  | "rounded-3xl";

type Props = {
  children: React.ReactNode;
  textColor?: "black" | "white";
  onClick?: () => void;
  rounded?: Rounded;
  backgroundColor?: string;
  type?: "button" | "submit" | "reset";
};
function index(props: Props) {
  const baseStyle = "w-full py-5 font-semibold";

  const matchTextColor = {
    black: "text-black",
    white: "text-white",
  };

  const applyStyle: string[] = [
    baseStyle,
    props.rounded || "rounded-3xl",
    matchTextColor[props.textColor || "black"],
    props.backgroundColor || "bg-primary",
  ];

  return (
    <button
      type={props.type || "button"}
      className={applyStyle.join(" ")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default index;
