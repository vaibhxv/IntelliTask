import { calculateDaysRemaining } from '../helpers';
import { CalendarIcon } from './icons';

export const DaysRemaining = ({ date }) => {
  return (
    <div className='flex gap-2 items-center'>
      <CalendarIcon styles='w-5 h-5' />
      <span className="sr-only">Calender</span>
      {
        calculateDaysRemaining(date) < 0
          ? <p className='font-bold text-red-500'>Finished.</p>
          : <p className='font-bold'>{`Ends in ${calculateDaysRemaining(date)} day(s)`}</p>
      }
    </div>
  )
}