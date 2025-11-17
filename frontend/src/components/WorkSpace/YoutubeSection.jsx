import YouTube from 'react-youtube';

export default function YoutubeSection({
  currentFolder,
  videoURLInput,
  setVideoURLInput,
  handleLoadVideo,
  videoAdded,
  timestampNote,
  setTimestampNote,
  handleAddTimestampNote,
  handleJumpToTime,
  setPlayer,
  formatTime,
}) {
  if (!currentFolder.isYoutubeNote) return null;

  return (
    <div className='flex flex-col gap-2 w-full pt-3'>
      <h2 className='text-xl mb-2'>Enter YouTube Video URL</h2>
      
      <div className='flex'>
            <input
        type='text'
        className='border h-full p-2 rounded-xl mr-2 w-[30rem] '
        value={videoURLInput}
        onChange={(e) => setVideoURLInput(e.target.value)}
        placeholder='e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      />

      <button
        onClick={handleLoadVideo}
        className=" bg-[#561a45] z-5 text-1rem] text-white w-max self-center
         pl-4 pr-4 pt-2 pb-2 rounded-2xl font-bold flex align-middle 
        justify-center gap-2 hover:bg-[#2b1424] transition-all ease-in delay-5 cursor-pointer"
      >
        Load
      </button>
      </div>

      {currentFolder.videoId && (
        <div className="relative w-full pb-[56.25%]"> 
        <YouTube
          videoId={currentFolder.videoId}
          key={currentFolder.videoId}
          onReady={(e) => setPlayer(e.target)}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: { autoplay: 0 },
          }}
          className="absolute top-0 left-0 w-full h-full"
        />
</div>

      )}

      {videoAdded && (
        <div className='mt-5 flex flex-col gap-3 pb-15'>
          <h3 className='text-lg font-semibold'>Add Timestamped Note</h3>

          <div className='flex gap-2'>
            <input
              className='border p-2 rounded-xl h-full p w-[25rem] '
              value={timestampNote}
              onChange={(e) => setTimestampNote(e.target.value)}
              placeholder='Note at current time...'
            />
            <button
              onClick={handleAddTimestampNote}
               className=" bg-[#561a45] z-5 text-white w-max self-center pl-4 pr-4 pt-2 pb-2 rounded-2xl font-bold flex align-middle 
        justify-center gap-2 hover:bg-[#2b1424] transition-all ease-in delay-5 cursor-pointer "
            >
              Add 
            </button>
          </div>

          <div className='mt-4'>
            <h4 className='font-semibold mb-2'>Timestamped Notes:</h4>
            <ul className='space-y-2'>
              {currentFolder.timestampNotes?.map((note, idx) => (
                <li
                  key={idx}
                  className='cursor-pointer bg-[#561a45] text-white shadow w-full rounded hover:bg-[#2b1424]
                  transition-all ease-in delay-5  overflow-y-auto'
                  onClick={() => handleJumpToTime(note.time)}
                >
                  <span className='text-white font-mono mr-2'>
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
  );
}
