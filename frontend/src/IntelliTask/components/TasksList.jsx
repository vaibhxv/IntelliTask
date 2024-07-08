import { useMemo } from 'react';
import { TaskItem } from './TaskItem';

export const TasksList = ({ tasks }) => {

  const tasksInProgress = useMemo(() => tasks.filter(task => !task.isCompleted), [tasks]);
  const tasksCompleted = useMemo(() => tasks.filter(task => task.isCompleted), [tasks]);

  return (
    <>
      <div className='grid grid-cols-1 gap-10'>
        <div className='space-y-4'>
          <div className='border-b pb-2 flex justify-between'>
            <h4 className='text-xl font-bold'>In Progress</h4>
            <p>{tasksInProgress.length} Task(s)</p>
          </div>
          {
            tasksInProgress.length === 0
              ? <p>No tasks in progress.</p>
              : tasksInProgress.map(task => (
                <TaskItem key={task._id} task={task} />
              ))
          }
        </div>
        <div className='space-y-4'>
          <div className='border-b pb-2 flex justify-between'>
            <h4 className='text-xl font-bold'>Completed</h4>
            <p>{tasksCompleted.length} Task(s)</p>
          </div>
          {
            tasksCompleted.length === 0
              ? <p>No tasks completed</p>
              : tasksCompleted.map(task => (
                <TaskItem key={task._id} task={task} />
              ))
          }
        </div>
      </div>
    </>
  )
}