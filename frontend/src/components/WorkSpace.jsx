import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { FaEdit, FaFolder, FaYoutube } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import youtubeIDParser from '../utils/youtubeIDParser';

const data = {
  name: "root",
  description: "Root folder",
  children: [
    {
      name: "maths",
      description: "Math-related content",
      children: [
        {
          name: "calc",
          description: "Calculator notes",
          children: [],
        },
      ],
    },
  ],
};

function WorkSpace() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [path, setPath] = useState([]);
  const [currentFolderName, setCurrentFolderName] = useState('root');
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [videoURLInput, setVideoURLInput] = useState('');
  const [didClickOnFolder, setDidClickOnFolder] = useState(false);
  const [clickedFolderIndex, setClickedFolderIndex] = useState(null);

  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [editedDescription, setEditedDescription] = useState('');
  const [videoAdded, setVideoAdded] = useState(false);

  const currentFolder = getCurrentFolder();

  function handleRightClick(event) {
    event.preventDefault();
    setMousePosition({ x: event.clientX, y: event.clientY });
    setDidClickOnFolder(false);
    setShowMenu(true);
  }

  function handleFolderRightClick(event, index) {
    event.preventDefault();
    event.stopPropagation();
    setMousePosition({ x: event.clientX, y: event.clientY });
    setDidClickOnFolder(true);
    setClickedFolderIndex(index);
    setShowMenu(true);
  }

  function handleClick() {
    setShowMenu(false);
  }

  function handleFolderClick(index) {
    const newPath = [...path, index];
    setPath(newPath);
  }

  function handleBack() {
    setPath(path.slice(0, -1));
  }

  function getBreadCrumbs() {
    let folder = data;
    let names = [folder.name];
    for (const index of path) {
      folder = folder.children[index];
      names.push(folder.name);
    }
    return names;
  }

  function getCurrentFolder() {
    let folder = data;
    for (const index of path) {
      folder = folder.children[index];
    }
    return folder;
  }

  useEffect(() => {
    const folder = getCurrentFolder();
    setCurrentFolderName(folder.name);
  }, [path]);

  function handleCreateFolder() {
    const folder = getCurrentFolder();
    if (!folder.children) folder.children = [];

    folder.children.push({
      name: `new folder ${folder.children.length + 1}`,
      description: "Click to edit description.",
      children: [],
    });

    setPath([...path]);
    setShowMenu(false);
  }

  function handleCreateYouTubeNote() {
    const folder = getCurrentFolder();
    if (!folder.children) folder.children = [];

    folder.children.push({
      name: `YouTube Note ${folder.children.length + 1}`,
      isYoutubeNote: true,
      videoId: '',
      description: "YouTube video description.",
      children: [],
    });

    setPath([...path]);
    setShowMenu(false);
  }

  function handleDeleteFolder() {
    const folder = getCurrentFolder();
    if (folder.children && clickedFolderIndex !== null) {
      folder.children.splice(clickedFolderIndex, 1);
      setClickedFolderIndex(null);
      setShowMenu(false);
      setPath([...path]);
    }
  }

  function handleEditName() {
    setIsEditing(true);
    setEditedName(currentFolderName);
  }

  function handleNameSubmit(e) {
    e.preventDefault();
    let folder = data;
    for (const index of path) {
      folder = folder.children[index];
    }
    folder.name = editedName;
    setIsEditing(false);
    setCurrentFolderName(editedName);
  }

  function handleEditDescription() {
    setIsEditingDescription(true);
    setEditedDescription(currentFolder.description || '');
  }

  function handleDescriptionSubmit(e) {
    e.preventDefault();
    const folder = getCurrentFolder();
    folder.description = editedDescription;
    setIsEditingDescription(false);
    setPath([...path]); // trigger re-render
  }

  function handleLoadVideo() {
    const folder = getCurrentFolder();
    if (folder.isYoutubeNote) {
      const youtubeID = youtubeIDParser(videoURLInput)
      folder.videoId = youtubeID;
      setPath([...path]); // force re-render
      setVideoAdded(true)
    }
  }

  return (
    <div
      className='bg-gray-300 min-h-[calc(100vh-3rem)] pl-18 pr-5 max-w-full'
      onContextMenu={handleRightClick}
      onClick={handleClick}
    >
      {/* Context Menu */}
      {showMenu && (
        <div
          className='absolute w-[15rem] h-auto bg-gray-400 flex flex-col justify-around z-50'
          style={{ top: mousePosition.y, left: mousePosition.x }}
        >
          <button className='hover:bg-gray-500 py-2' onClick={handleCreateFolder}>
            Create New Folder
          </button>
          <button className='hover:bg-gray-500 py-2' onClick={handleCreateYouTubeNote}>
            Create YouTube Note
          </button>
          {didClickOnFolder && (
            <button className='hover:bg-gray-500 py-2' onClick={handleDeleteFolder}>
              Delete Folder
            </button>
          )}
        </div>
      )}

      {/* UI */}
      <div className='p-5 flex flex-col'>
        {/* Breadcrumbs & Back */}
        <div className='flex gap-10 items-center'>
          {path.length > 0 && (
            <button onClick={handleBack}><IoArrowBack /></button>
          )}
          <div>
            {getBreadCrumbs().map((name, index) => (
              <span key={index}>
                {index > 0 && ' / '}
                <span
                  className="cursor-pointer text-gray-500 hover:text-black"
                  onClick={() => setPath(path.slice(0, index))}
                >
                  {name}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-5 grid-rows-5 gap-0 h-full w-full mt-5">
          {/* Left: Folder Content */}
          <div className="col-span-4 row-span-5">
            <div className="flex gap-8 flex-wrap cursor-pointer">
              {currentFolder.children?.map((child, index) => (
                <div
                  key={index}
                  onClick={() => handleFolderClick(index)}
                  onContextMenu={(e) => handleFolderRightClick(e, index)}
                  className='flex items-center gap-2 hover:text-gray-600'
                >
                  {child.isYoutubeNote ? <FaYoutube className='text-red-600' /> : <FaFolder />}
                  {child.name}
                </div>
              ))}
            </div>

 
             {/* YouTube Embed Section */}
            {currentFolder.isYoutubeNote && (
              <div className='flex flex-col mt-10 gap-2'>
                <h2 className='text-xl mb-2'>Enter YouTube Video URL</h2>
                <input
                  type='text'
                  className='border px-2 py-1 rounded mr-2 w-[30rem]'
                  value={videoURLInput}
                  onChange={(e) => setVideoURLInput(e.target.value)}
                  placeholder='e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                />
                <button
                  onClick={handleLoadVideo}
                  className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 w-30'
                >
                  Load Video
                </button>

                {currentFolder.videoId && (
                  <div className='mt-5'>
                    <YouTube videoId={currentFolder.videoId} />
                  </div>
                )}

        {videoAdded && <div className='h-80'>
            <button className='m-2 p-2 bg-green-600 text-white rounded-2xl '>Add timestamp</button>
            </div>}
              </div>
            )}
          </div>

  
   

          {/* Right: Folder Info */}
          <div className="col-span-1 row-span-5 p-4 border-l border-gray-400 flex flex-col
           items-start gap-3 right-18 fixed">
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

            {/* Description Section */}
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
        </div>

        {!currentFolder.children && <p>No items here.</p>}
      </div>
    </div>
  );
}

export default WorkSpace;