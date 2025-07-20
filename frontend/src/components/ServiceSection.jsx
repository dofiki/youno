import { PiFolderSimpleFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";
import { MdOutlineNoteAdd } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

export default function ServiceSection() {
  return (
    <div className="h-[150vh] lg:h-[100vh] flex flex-col pr-6 pl-6 pt-20 pb-20 
    bg-[#123458] text-black gap-4 justify-center ">
      <h1
        className="text-[1.8rem] text-center text-white font-bold"
        style={{ fontFamily: '"Intel One Mono", monospace' }}
      >
        Our Services
      </h1>
      <div className="flex  flex-wrap justify-center gap-4 h-full items-center">

        <div className="bg-[#D4C9BE] p-4 rounded-2xl flex flex-col items-center 
        gap-1 h-[12rem] w-[22rem] justify-center">
          <PiFolderSimpleFill size={22} />
          <h1 className="font-bold text-center">Organize Videos</h1>
          <p className="text-center">
            Organize your YouTube videos into folders for easy, focused access.
          </p>
        </div>

        <div className="bg-[#D4C9BE] p-4 rounded-2xl flex flex-col items-center
         gap-1 h-[12rem] w-[22rem] justify-center">
          <IoTime size={22} />
          <h1 className="font-bold text-center">Timestamped Notes</h1>
          <p className="text-center">
            Take notes tied directly to specific video timestamps.
          </p>
        </div>

        <div className="bg-[#D4C9BE] p-4 rounded-2xl flex flex-col items-center
         gap-1 h-[12rem] w-[22rem] justify-center">
          <MdOutlineNoteAdd size={22} />
          <h1 className="font-bold text-center">Note Summaries</h1>
          <p className="text-center">
            Create quick summaries of your notes to review key points.
          </p>
        </div>

        <div className="bg-[#D4C9BE] p-4 rounded-2xl flex flex-col items-center 
        gap-1 h-[12rem] w-[22rem] justify-center">
          <IoIosNotifications size={22} />
          <h1 className="font-bold text-center">Set Reminders</h1>
          <p className="text-center">
            Set notifications to remind you when to revisit videos or notes.
          </p>
        </div>

      </div>
    </div>
  );
}
