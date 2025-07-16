import { useState, useEffect } from 'react';

import youtubeIDParser from '../../utils/youtubeIDParser';
import data from "../../data/defaultFolders.js";

// Components
import ContextMenu from './ContextMenu.jsx';
import BreadCrumbs from './BreadCrumbs.jsx';
import FolderGrid from './FolderGrid.jsx';
import FolderDetails from './FolderDetails.jsx';
import YoutubeSection from './YoutubeSection.jsx';

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

  // Event Handlers
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
    setPath([...path, index]);
  }

  function handleBack() {
    setPath(path.slice(0, -1));
  }

  function handleCreateFolder() {
    const folder = getCurrentFolder();
    folder.children ??= [];

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
    folder.children ??= [];

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

  function getBreadCrumbs() {
    let folder = data;
    const names = [folder.name];
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

  // Render
  return (
    <div
      className='bg-gray-300 min-h-[calc(100vh-3rem)] pl-[15rem] pr-[15rem]'
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

      <div className=' flex flex-col pt-8'>

        {/* Top*/}
        <BreadCrumbs 
          path={path}
          handleBack={handleBack}
          getBreadCrumbs={getBreadCrumbs}
          setPath={setPath}
        />

       {/* Bottom*/}
        <div className="flex justify-around pt-4">

        { /* Bottom-Left */}
          <FolderGrid 
            currentFolder={currentFolder}
            handleFolderClick={handleFolderClick}
            handleFolderRightClick={handleFolderRightClick}
          />

          <YoutubeSection 
            currentFolder={currentFolder}
            videoURLInput={videoURLInput}
            setVideoURLInput={setVideoURLInput}
            handleLoadVideo={handleLoadVideo}
            videoAdded={videoAdded}
            setVideoAdded={setVideoAdded}
            timestampNote={timestampNote}
            setTimestampNote={setTimestampNote}
            handleAddTimestampNote={handleAddTimestampNote}
            handleJumpToTime={handleJumpToTime}
            player={player}
            setPlayer={setPlayer}
            formatTime={formatTime}
          />

        { /* Bottom-Right */}
          <FolderDetails 
            isEditing={isEditing}
            handleNameSubmit={handleNameSubmit}
            editedName={editedName}
            setEditedName={setEditedName}
            currentFolderName={currentFolderName}
            handleEditName={handleEditName}
            isEditingDescription={isEditingDescription}
            handleDescriptionSubmit={handleDescriptionSubmit}
            editedDescription={editedDescription}
            setEditedDescription={setEditedDescription}
            handleEditDescription={handleEditDescription}
            currentFolder={currentFolder}
          />

        </div>

      </div>

    </div>
  );
}

export default WorkSpace;