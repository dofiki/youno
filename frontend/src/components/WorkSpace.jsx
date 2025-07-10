import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { FaEdit, FaFolder, FaYoutube } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const data = {
  name: "root",
  children: [
    {
      name: "maths",
      children: [
        {
          name: "calc",
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
  const [videoIdInput, setVideoIdInput] = useState('');

  const currentFolder = getCurrentFolder();

  function handleRightClick(event) {
    event.preventDefault();
    setMousePosition({ x: event.clientX, y: event.clientY });
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
      children: [],
    });

    setPath([...path]);
    setShowMenu(false);
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

  function handleVideoIdSave() {
    const folder = getCurrentFolder();
    if (folder.isYoutubeNote) {
      folder.videoId = videoIdInput;
      setPath([...path]); // force re-render
    }
  }

  return (
    <div
      className='bg-gray-300 h-[calc(100vh-3rem)]'
      onContextMenu={handleRightClick}
      onClick={handleClick}
    >
      {/* Context Menu */}
      {showMenu && (
        <div
          className='absolute w-[15rem] h-[5rem] bg-gray-400 flex flex-col justify-around z-50'
          style={{ top: mousePosition.y, left: mousePosition.x }}
        >
          <button
            className='hover:bg-gray-500 h-[100%]'
            onClick={handleCreateFolder}
          >
            Create New Folder
          </button>
          <button
            className='hover:bg-gray-500 h-[100%]'
            onClick={handleCreateYouTubeNote}
          >
            Create YouTube Note
          </button>
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
                <div key={index} onClick={() => handleFolderClick(index)} className='flex items-center gap-2 hover:text-gray-600'>
                  {child.isYoutubeNote ? <FaYoutube className='text-red-600' /> : <FaFolder />}
                  {child.name}
                </div>
              ))}
            </div>

            {/* YouTube Embed Section */}
            {currentFolder.isYoutubeNote && (
              <div className='mt-10'>
                <h2 className='text-xl mb-2'>Enter YouTube Video ID</h2>
                <input
                  type='text'
                  className='border px-2 py-1 rounded mr-2'
                  value={videoIdInput}
                  onChange={(e) => setVideoIdInput(e.target.value)}
                  placeholder='e.g. dQw4w9WgXcQ'
                />
                <button
                  onClick={handleVideoIdSave}
                  className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'
                >
                  Load Video
                </button>

                {currentFolder.videoId && (
                  <div className='mt-5'>
                    <YouTube videoId={currentFolder.videoId} />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Folder Info */}
          <div className="col-span-1 row-span-5 p-4 border-l border-gray-400 flex items-center gap-3">
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
              <>
                <span>{currentFolderName}</span>
                <FaEdit className="hover:text-gray-600 cursor-pointer" onClick={handleEditName} />
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
