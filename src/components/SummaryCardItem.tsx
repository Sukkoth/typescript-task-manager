type PropTypes = {
  title: string;
  count: number;
  color?: string;
  emoji?: string;
  emojiBgLight?: boolean;
};

function CardItem(props: PropTypes) {
  return (
    <div
      className={`flex flex-col items-start justify-between h-48 min-w-48  rounded-xl p-5 ${
        props.color || "bg-primary"
      }`}
    >
      <span
        className={`${
          props.emojiBgLight ? "bg-white" : "bg-shade-300"
        } p-3 rounded-full text-2xl`}
      >
        {props.emoji || "😎"}
      </span>
      <div className='text-shade-300 '>
        <p>{props.title}</p>
        <p className='font-semibold text-xl'>{props.count}</p>
      </div>
    </div>
  );
}

export default CardItem;
