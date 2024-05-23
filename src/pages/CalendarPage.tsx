import { useState } from "react";
import Helpers from "../utils/Helpers";
import { useGetTasks } from "../react_query/queries";
import Timeline from "../components/calendar/Timeline";

function CalendarPage() {
  const [selectedMonth, setSelectedMonth] = useState<string>(
    `${new Date().getFullYear()}-${new Date().getMonth() + 1}`
  );
  const [selectedDate, setSelectedDate] = useState<number>(
    new Date().getDate()
  );
  const tasks = useGetTasks();

  //dates  to display on top
  const extractedDates = Helpers.getMaxDays(
    parseInt(selectedMonth.split("-")[1]) - 1,
    parseInt(selectedMonth.split("-")[0])
  );

  const datesWithTasks: string[] = [];

  //identify dates that have tasks
  tasks.data?.forEach((task) => {
    if (task.deadline === undefined) return;
    const dateToCheck = new Date(task.deadline!).toISOString().split("T")[0];
    if (!datesWithTasks.includes(dateToCheck)) {
      datesWithTasks.push(dateToCheck);
    }
  });

  const tasksForSelectedDate = tasks.data?.filter((task) => {
    return Helpers.isSameDate(
      new Date(task.deadline!),
      new Date(
        parseInt(selectedMonth.split("-")[0]),
        parseInt(selectedMonth.split("-")[1]) - 1,
        selectedDate
      )
    );
  });

  return (
    <div className='p-5 w-full'>
      <nav className='flex justify-between text-3xl'>
        <h1 className=' font-medium'>Calendar</h1>
      </nav>

      <input
        type='month'
        className='mt-7 app-input'
        defaultValue={Helpers.getCurrentMonthYear()}
        onChange={(e) => setSelectedMonth(e.target.value)}
      />

      <div className='mt-5 px-2 flex flex-row overflow-x-scroll select-none gap-2'>
        {extractedDates.map((month) => {
          return (
            <div
              key={`${month.date}${month.number}`}
              onClick={() => setSelectedDate(month.number)}
              className={` 
                 ${
                   datesWithTasks.includes(
                     new Date(
                       parseInt(selectedMonth.split("-")[0]),
                       parseInt(selectedMonth.split("-")[1]) - 1,
                       month.number + 1
                     )
                       .toISOString()
                       .split("T")[0]
                   )
                     ? "border-2 border-primary"
                     : ""
                 }
              ${
                selectedDate === month.number ? "bg-white text-black" : ""
              } min-w-16 p-3 transition-colors text-center duration-300 rounded-2xl cursor-pointer `}
            >
              <h1 className='font-bold text-xl '>{month.number}</h1>
              <p className='text-gray-500 font-medium'>
                {month.date.slice(0, 3)}
              </p>
            </div>
          );
        })}
      </div>

      <div className='mt-20'>
        {!tasks.isLoading && tasks.data && (
          <Timeline tasks={tasksForSelectedDate!} />
        )}
      </div>
    </div>
  );
}

export default CalendarPage;
