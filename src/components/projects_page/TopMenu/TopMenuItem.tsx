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
          : " bg-purple-600 text-white dark:bg-shade-200 hover:bg-purple-300 dark:hover:bg-shade-100"
      } py-2 rounded-3xl text-center font-medium text-sm md:text-lg cursor-pointer  select-none max-w-44`}
    >
      {label}
    </div>
  );
}

export default TopMenuItem;
