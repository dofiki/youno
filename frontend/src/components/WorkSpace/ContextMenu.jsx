import { MdCreateNewFolder } from "react-icons/md";
import { MdCreate } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function ContextMenu({
    showMenu,
    mousePosition,
    handleCreateFolder,
    handleCreateYouTubeNote,
    didClickOnFolder,
    handleDeleteFolder,
}) {

  if (!showMenu) return null;

  return (

    <div
      className="absolute w-[12rem] text-[0.9rem] h-auto bg-gray-600 text-white 
      flex flex-col z-50 outline-1 outline-gray-300 "
      style={{ top: mousePosition.y, left: mousePosition.x }}
    >
        <button className="hover:bg-gray-500 py-2 text-left pl-5
        hover:text-white transition-all ease-in duration-75 flex items-center gap-2" onClick={handleCreateFolder}>
          <MdCreateNewFolder /> Create Folder
        </button>

        <button className="hover:bg-gray-500 py-2 text-left  pl-5
        hover:text-white flex items-center gap-2" onClick={handleCreateYouTubeNote}>
          <MdCreate /> Create Note
        </button>

        {didClickOnFolder && (
          <button className="hover:bg-gray-500 py-2 text-left  pl-5
          hover:text-white flex items-center gap-2" onClick={handleDeleteFolder}>
          <MdDelete /> Delete 
          </button>

      )}
      
    </div>

  );
}