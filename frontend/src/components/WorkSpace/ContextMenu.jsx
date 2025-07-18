import { MdCreateNewFolder, MdCreate, MdDelete } from "react-icons/md";

export default function ContextMenu({
  showMenu,
  mousePosition,
  handleCreateFolder,
  handleCreateYouTubeNote,
  didClickOnFolder,
  handleDeleteFolder,
  disabledButtons
}) {
  if (!showMenu) return null;

  const baseBtn =
    "py-2 text-left pl-5 flex items-center gap-2 transition-all ease-in duration-75";

  const activeStyle = "hover:bg-gray-500 hover:text-white";
  const disabledStyle = "opacity-50 cursor-not-allowed";

  return (
    <div
      className="absolute w-[12rem] text-[0.9rem] h-auto bg-gray-600 text-white 
        flex flex-col z-50 outline-1 outline-gray-300"
      style={{ top: mousePosition.y, left: mousePosition.x }}
    >
      <button
        className={`${baseBtn} ${disabledButtons ? disabledStyle : activeStyle}`}
        onClick={handleCreateFolder}
        disabled={disabledButtons}
      >
        <MdCreateNewFolder /> Create Folder
      </button>

      <button
        className={`${baseBtn} ${disabledButtons ? disabledStyle : activeStyle}`}
        onClick={handleCreateYouTubeNote}
        disabled={disabledButtons}
      >
        <MdCreate /> Create Note
      </button>

      {didClickOnFolder && (
        <button
          className={`${baseBtn} ${disabledButtons ? disabledStyle : activeStyle}`}
          onClick={handleDeleteFolder}
          disabled={disabledButtons}
        >
          <MdDelete /> Delete
        </button>
      )}
    </div>
  );
}
