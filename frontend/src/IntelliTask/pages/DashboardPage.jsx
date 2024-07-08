import { useEffect, useMemo } from 'react';
import { useTaskUnityContext, useAuth } from '../../hooks';
import { ProjectStatsByMonth, TaskStats, Spinner } from '../components';
import { CollaboratorsIcon, ProjectIcon, TaskIcon } from '../components/icons';

export const DashboardPage = () => {

  const { startGetProjects, projects, isLoading } = useTaskUnityContext();
  const { auth } = useAuth();

  const projectsQty = useMemo(() => projects.length, [projects]);
  const tasksQty = useMemo(() => projects.reduce((total, project) => total + project.tasks.length, 0), [projects]);
  const projectsCollaboratorQty = useMemo(() => projects.reduce((count, project) => {
    return count + ((project.creator !== auth.user._id) ? 1 : 0);
  }, 0), [projects]);

  useEffect(() => {
    startGetProjects();
  }, [])

  if (isLoading) return <Spinner />

  return (
    <div className="bg-gradient-to-b from-gray-400 via-gray-300 to-gray-500 p-10 top-[-80px]">
      <h1 className="text-5xl font-extrabold text-white text-center mb-10">Dashboard</h1>
  
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 items-center p-8 border border-gray-200 rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 transform hover:-translate-y-2 text-gray-800">
            <ProjectIcon styles="w-10 h-10 text-indigo-500" />
            <div className="text-center">
              <p className="font-extrabold text-lg">Total Projects</p>
              <p className="text-4xl font-extrabold text-indigo-600">{projectsQty}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center p-8 border border-gray-200 rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 transform hover:-translate-y-2 text-gray-800">
            <CollaboratorsIcon styles="w-10 h-10 text-green-500" />
            <div className="text-center">
              <p className="font-extrabold text-lg">Collaborating Projects</p>
              <p className="text-4xl font-extrabold text-green-600">{projectsCollaboratorQty}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center p-8 border border-gray-200 rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 transform hover:-translate-y-2 text-gray-800">
            <TaskIcon styles="w-10 h-10 text-red-500" />
            <div className="text-center">
              <p className="font-extrabold text-lg">Total Tasks</p>
              <p className="text-4xl font-extrabold text-red-600">{tasksQty}</p>
            </div>
          </div>
        </div>
  
        <div className="my-10 grid grid-cols-1 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-4 p-8 border border-gray-200 rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 transform hover:-translate-y-2">
            <h4 className="text-3xl font-extrabold text-indigo-600 mb-5">Projects Summary</h4>
            <ProjectStatsByMonth />
          </div>
          <div className="lg:col-span-2 p-8 border border-gray-200 rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 transform hover:-translate-y-2">
            <h4 className="text-3xl font-extrabold text-indigo-600 mb-5">Task Completion</h4>
            <TaskStats />
          </div>
        </div>
      </div>
    </div>
  );
  
}