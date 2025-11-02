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
        className='border px-2 py-1 rounded mr-2 w-[30rem]'
        value={videoURLInput}
        onChange={(e) => setVideoURLInput(e.target.value)}
        placeholder='e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      />

      <button
        onClick={handleLoadVideo}
        className=" bg-[#561a45] z-5 text-white w-max self-center
         p-3 rounded-2xl font-bold flex align-middle 
        justify-center gap-2 hover:bg-[#2b1424] transition-all ease-in delay-5 cursor-pointer"
      >
        Load Video
      </button>
      </div>

      {currentFolder.videoId && (
        <div className='mt-5'>
         <YouTube
          videoId={currentFolder.videoId}
          key={currentFolder.videoId}
          onReady={(e) => setPlayer(e.target)}
          opts={{ playerVars: { autoplay: 0 } }}
        />

        </div>
      )}

      {videoAdded && (
        <div className='mt-5 flex flex-col gap-3 pb-15'>
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
               className=" bg-[#561a45] z-5 text-white w-max self-center p-3 rounded-2xl font-bold flex align-middle 
        justify-center gap-2 hover:bg-[#2b1424] transition-all ease-in delay-5 cursor-pointer "
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
                  className='cursor-pointer bg-[#561a45] text-white shadow px-3 py-2 rounded hover:bg-[#2b1424]
                  transition-all ease-in delay-5 w-[30vw] overflow-y-auto'
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
