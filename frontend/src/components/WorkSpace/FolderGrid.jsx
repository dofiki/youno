import {FaFolder, FaYoutube } from "react-icons/fa";
import { MdOutlineHelpOutline } from "react-icons/md";


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
              <p className=" absolute top-15 items-center gap-2 flex text-[0.8rem] opacity-70 
               text-pink-500 sm:hidden "><MdOutlineHelpOutline />
                Hold to open menu</p>
              <p className=" absolute top-15 items-center gap-2 text-[0.8rem] text-pink-500 opacity-70
               hidden sm:flex"><MdOutlineHelpOutline />
                Right click to open menu</p>
            </div>
     )
}