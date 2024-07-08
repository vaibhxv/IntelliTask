import { CollaboratorItem } from './CollaboratorItem';

export const CollaboratorsList = ({ collaborators }) => {
  return (
    <div className='space-y-4'>
      <div className='border-b pb-2 flex justify-between'>
        <h4 className='text-xl font-bold'>Collaborators</h4>
        <p>{collaborators.length} Member(s)</p>
      </div>

      {
        collaborators.map(collaborator => (
          <CollaboratorItem key={collaborator._id} collaborator={collaborator} />
        ))
      }
    </div>
  )
}