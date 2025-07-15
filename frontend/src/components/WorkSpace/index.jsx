import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { FaEdit, FaFolder, FaYoutube } from "react-icons/fa";
import youtubeIDParser from '../../utils/youtubeIDParser';
import data from "../../data/defaultFolders.js"

// components
import ContextMenu from './ContextMenu.jsx';
import BreadCrumbs from './BreadCrumbs.jsx';

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

  const [timestampNote, setTimestampNote] = useState('');
  const [player, setPlayer] = useState(null);

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
      timestampNotes: [],
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
      const youtubeID = youtubeIDParser(videoURLInput);
      folder.videoId = youtubeID;
      folder.timestampNotes = [];
      setPath([...path]);
      setVideoAdded(true);
    }
  }

  function handleAddTimestampNote() {
    if (!player || !currentFolder.isYoutubeNote) return;
    const time = Math.floor(player.getCurrentTime());
    currentFolder.timestampNotes.push({ time, note: timestampNote });
    setTimestampNote('');
    setPath([...path]);
  }

  function handleJumpToTime(time) {
    if (player) {
      player.seekTo(time, true);
      player.playVideo();
    }
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  return (
    <div
      className='bg-gray-300 min-h-[calc(100vh-3rem)] pl-18 pr-5 max-w-full'
      onContextMenu={handleRightClick}
      onClick={handleClick}
    >

      <ContextMenu 
        showMenu={showMenu}
        mousePosition={mousePosition}
        handleCreateFolder={handleCreateFolder}
        handleCreateYouTubeNote={handleCreateYouTubeNote}
        didClickOnFolder={didClickOnFolder}
        handleDeleteFolder={handleDeleteFolder}
      />
     
      <div className='p-5 flex flex-col w-[80vw]'>

        <BreadCrumbs 
          path={path}
          handleBack={handleBack}
          getBreadCrumbs={getBreadCrumbs}
          setPath={setPath}
        />

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
                <h2 className='text-xl mb-2'>
                  Enter YouTube Video URL</h2>
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
                    <YouTube videoId={currentFolder.videoId} onReady={(e) => setPlayer(e.target)} />
                  </div>
                )}

                {videoAdded && (
                  <div className='mt-5 flex flex-col gap-3'>
                    <h3 className='text-lg font-semibold'>Add Timestamped Note</h3>
                    <div className='flex gap-2'>
                      <input
                        className='border px-2 py-1 rounded w-[25rem]'
                        value={timestampNote}
                        onChange={(e) => setTimestampNote(e.target.value)}
                        placeholder='Note at current time...'
                      />
                      <button
                        onClick={handleAddTimestampNote}
                        className='bg-green-600 text-white rounded px-4 hover:bg-green-700'
                      >
                        Add Timestamp
                      </button>
                    </div>

                    <div className='mt-4'>
                      <h4 className='font-semibold mb-2'>Timestamped Notes:</h4>
                      <ul className='space-y-2'>
                        {currentFolder.timestampNotes?.map((note, idx) => (
                          <li
                            key={idx}
                            className='cursor-pointer bg-white shadow px-3 py-2 rounded hover:bg-gray-100'
                            onClick={() => handleJumpToTime(note.time)}
                          >
                            <span className='text-blue-600 font-mono mr-2'>
                              [{formatTime(note.time)}]
                            </span>
                            {note.note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
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
      </div>
    </div>
  );
}

export default WorkSpace;
