type Props = {
  active?: boolean;
  label: string;
  handleChange: () => void;
};

function TopMenuItem({ active = false, label, handleChange }: Props) {
  return (
    <div
      onClick={handleChange}
      className={`${
        active
          ? "bg-primary text-black"
          : "bg-purple-600 text-white dark:bg-shade-200 hover:bg-purple-300 dark:hover:bg-shade-100"
      } px-5 md:px-7 py-2 rounded-3xl min-w-28 text-center font-medium text-sm md:text-lg cursor-pointer`}
    >
      {label}
    </div>
  );
}

export default TopMenuItem;
