import { Dialog } from '@headlessui/react';
import { useTaskUnityContext } from '../../hooks';


export const AlertDeleteCollaborator = () => {

  const { onShowModalAlert, startDeleteCollaborator, typeModal } = useTaskUnityContext();

  return (
    <>
      <div className='flex flex-col gap-2'>
        <Dialog.Title as="h3" className="text-lg leading-6 font-bold text-gray-900">
          Delete Collaborator?
        </Dialog.Title>

        <Dialog.Description>
          This is an irreversible step.
        </Dialog.Description>

        <div className='flex justify-end gap-4 mt-4'>
          <button
            type='button'
            className='rounded-lg border border-taskunity-800 px-4 py-2 text-base text-taskunity-800 font-bold'
            onClick={() => onShowModalAlert(typeModal)}
          >
            Cancel
          </button>
          <button
            className='rounded-lg border bg-red-500 px-4 py-2 text-base text-white font-bold'
            onClick={startDeleteCollaborator}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  )
}
