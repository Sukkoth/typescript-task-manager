import SummaryCardItem from "./SummaryCardItem";

function Cards() {
  return (
    <div className='flex gap-5 mt-8 overflow-x-scroll scrollbar-default'>
      <SummaryCardItem title='My Tasks' count={100} emoji='🤧' />
      <SummaryCardItem
        title='Projects'
        count={10}
        color='bg-red-400'
        emoji='😊'
        emojiBgLight
      />
      <SummaryCardItem
        title='Completed Projects'
        count={2}
        color='bg-violet-400'
      />
      <SummaryCardItem
        title='Completed Tasks'
        count={8}
        color='bg-orange-400'
        emoji='🚀'
        emojiBgLight
      />
    </div>
  );
}

export default Cards;
