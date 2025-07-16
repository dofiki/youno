import { FaEdit } from "react-icons/fa";

export default function FolderDetails({
    isEditing,
    handleNameSubmit,
    editedName,
    setEditedName,
    currentFolderName,
    handleEditName,
    isEditingDescription,
    handleDescriptionSubmit,
    editedDescription,
    setEditedDescription,
    handleEditDescription,
    currentFolder
}){
    return(
           <div className="border-l border-gray-400 flex flex-col gap-2 w-60 wrap-break-word pl-2">
            
            {isEditing ? (
              <form onSubmit={handleNameSubmit}>
                <input
                  className="border px-2 py-1 rounded"
                  autoFocus
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  onBlur={handleNameSubmit}
                />
              </form>
            ) : (
              <div className='flex flex-row items-center gap-2'>
                <span>{currentFolderName}</span>
                <FaEdit className="hover:text-gray-600 cursor-pointer" onClick={handleEditName} />
              </div>
            )}

            {isEditingDescription ? (
              <form onSubmit={handleDescriptionSubmit}>
                <textarea
                  className="border px-2 py-1 rounded w-full mt-2"
                  rows={3}
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  onBlur={handleDescriptionSubmit}
                />
              </form>
            ) : (
              <>
                <div className='flex flex-row items-center gap-2 mt-4'>
                  <span className="font-semibold">Description:</span>
                  <FaEdit className="hover:text-gray-600 cursor-pointer" onClick={handleEditDescription} />
                </div>
                <span className='text-sm text-gray-700'>{currentFolder.description || 'No description provided.'}</span>
              </>
            )}
          </div>
    )
}