import { useState, useEffect } from 'react';
import youtubeIDParser from '../../utils/youtubeIDParser';
import defaultData from "../../data/defaultFolders.js";

// Components
import ContextMenu from './ContextMenu.jsx';
import BreadCrumbs from './BreadCrumbs.jsx';
import FolderGrid from './FolderGrid.jsx';
import FolderDetails from './FolderDetails.jsx';
import YoutubeSection from './YoutubeSection.jsx';

function WorkSpace() {
  const [foldersData, setFoldersData] = useState(() => structuredClone(defaultData));
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
  const [disabledButtons, setDisabledButtons] = useState(false);

  const currentFolder = getCurrentFolder();

  function getCurrentFolder() {
    let folder = foldersData;
    for (const index of path) {
      folder = folder.children[index];
    }
    return folder;
  }

  function updateCurrentFolder(modifierFn) {
    const newData = structuredClone(foldersData);
    let folder = newData;
    for (const index of path) {
      folder = folder.children[index];
    }
    modifierFn(folder);
    setFoldersData(newData);
  }

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
    updateCurrentFolder(folder => {
      folder.children ??= [];
      folder.children.push({
        name: `new folder ${folder.children.length + 1}`,
        description: "Click to edit description.",
        children: [],
      });
    });
    setShowMenu(false);
  }

  function handleCreateYouTubeNote() {
    updateCurrentFolder(folder => {
      folder.children ??= [];
      folder.children.push({
        name: `YouTube Note ${folder.children.length + 1}`,
        isYoutubeNote: true,
        videoId: '',
        description: "YouTube video description.",
        timestampNotes: [],
        children: [],
      });
    });
    setShowMenu(false);
  }

  function handleDeleteFolder() {
    const newData = structuredClone(foldersData);
    let folder = newData;
    for (const index of path.slice(0, -1)) {
      folder = folder.children[index];
    }
    const parent = folder;
    if (parent.children && clickedFolderIndex !== null) {
      parent.children.splice(clickedFolderIndex, 1);
    }
    setFoldersData(newData);
    setClickedFolderIndex(null);
    setShowMenu(false);
  }

  function handleEditName() {
    setIsEditing(true);
    setEditedName(currentFolderName);
  }

  function handleNameSubmit(e) {
    e.preventDefault();
    updateCurrentFolder(folder => {
      folder.name = editedName;
    });
    setIsEditing(false);
    setCurrentFolderName(editedName);
  }

  function handleEditDescription() {
    setIsEditingDescription(true);
    setEditedDescription(currentFolder.description || '');
  }

  function handleDescriptionSubmit(e) {
    e.preventDefault();
    updateCurrentFolder(folder => {
      folder.description = editedDescription;
    });
    setIsEditingDescription(false);
  }

  function handleLoadVideo() {
    const youtubeID = youtubeIDParser(videoURLInput);
    if (!youtubeID) return;
    updateCurrentFolder(folder => {
      folder.videoId = youtubeID;
      folder.timestampNotes = [];
    });
    setVideoAdded(true);
  }

  function handleAddTimestampNote() {
    if (!player || !currentFolder.isYoutubeNote) return;
    const time = Math.floor(player.getCurrentTime());
    updateCurrentFolder(folder => {
      folder.timestampNotes.push({ time, note: timestampNote });
    });
    setTimestampNote('');
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
    let folder = foldersData;
    const names = [folder.name];
    for (const index of path) {
      folder = folder.children[index];
      names.push(folder.name);
    }
    return names;
  }

  useEffect(() => {
    setCurrentFolderName(currentFolder.name);
    setDisabledButtons(!!currentFolder.isYoutubeNote);
  }, [path, foldersData]);

  return (


    <div
      className='bg-gray-300 min-h-[calc(100vh-3rem)] pl-[2rem] pr-[1rem] xl:pl-[15rem] xl:pr-[15rem]'
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
        disabledButtons={disabledButtons}
      />

      <div className='flex flex-col pt-8'>
        <BreadCrumbs 
          path={path}
          handleBack={handleBack}
          getBreadCrumbs={getBreadCrumbs}
          setPath={setPath}
        />

        <div className="flex flex-col gap-10 md:flex-row justify-around pt-4">
             
          
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
            setDisabledButtons={setDisabledButtons}
          />

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
