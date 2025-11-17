import {FaFolder, FaYoutube } from "react-icons/fa";

export default function FolderGrid({
    currentFolder,
    handleFolderClick,
    handleFolderRightClick
}){
    if(currentFolder.isYoutubeNote) return null;
     return(
        <div className="flex flex-row gap-8 flex-wrap cursor-pointer w-full items-start  ">
              {currentFolder.children?.map((child, index) => (
                <div
                  key={index}
                  onClick={() => handleFolderClick(index)}
                  onContextMenu={(e) => handleFolderRightClick(e, index)}
                  className='flex items-center gap-2 hover:text-[#da42ae] transition-colors delay-5 '
                >
                  {child.isYoutubeNote ? <FaYoutube className='text-red-600' /> : <FaFolder />}
                  {child.name}
                </div>
              ))}
            </div>
     )
}