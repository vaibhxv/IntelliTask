import { useEffect } from 'react';
import { useTaskUnityContext } from '../../hooks';
import { AlertDeleteProject, FormProject, Modal, ModalAlert, ProjectsList, Spinner } from '../components';
import { PlusIcon } from '../components/icons';

export const ProjectsPage = () => {

  const { startGetProjects, projects, onShowModal, isLoading } = useTaskUnityContext();

  useEffect(() => {
    startGetProjects();
  }, [])

  if (isLoading) return <Spinner />

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 via-gray-300 to-gray-500 p-10">
      <div className="container mx-auto py-12">
        <div className="md:flex md:justify-between items-center mb-10">
          <h1 className="text-5xl font-extrabold text-white mb-6 md:mb-0">Projects</h1>
          <button
            type="button"
            className="flex items-center gap-3 rounded-full bg-white px-6 py-3 text-lg text-purple-700 font-bold shadow-lg hover:bg-purple-100 transition-transform transform hover:scale-105"
            onClick={onShowModal}
          >
            <PlusIcon className="w-6 h-6 text-purple-700" />
            <span>New Project</span>
          </button>
        </div>
  
        <div className="bg-gray-400 rounded-lg p-6 shadow-lg">
          {projects.length > 0 ? (
            <ProjectsList projects={projects} />
          ) : (
            <p className="text-center text-gray-600 text-xl">No projects available. Add a new project to get started.</p>
          )}
        </div>
  
        <Modal>
          <FormProject />
        </Modal>
  
        <ModalAlert>
          <AlertDeleteProject />
        </ModalAlert>
      </div>
    </div>
  );
  
}