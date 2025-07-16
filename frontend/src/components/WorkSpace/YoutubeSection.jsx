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
  formatTime
}) {
  if (!currentFolder.isYoutubeNote) return null;

  return (
    <div className='flex flex-col gap-2 w-full pt-3'>
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
  );
}
