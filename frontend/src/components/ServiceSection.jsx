import { PiFolderSimpleFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";
import { MdOutlineNoteAdd } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ServiceSection() {
  return (
    <div className=" relative h-[150vh] lg:h-[100vh] flex flex-col pr-6 pl-6 pt-15 pb-20 
        bg-[#6A1E55] text-[#3B1C32] gap-4 justify-center ">

     <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
       <svg id="visual" viewBox="0 0 1300 700" width="1800" height="1150" xmlns="http://www.w3.org/2000/svg" 
       xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path 
       d="M0 25L55 41L109 41L164 41L218 25L273 33L327 41L382 25L436 33L491 41L545 33L600 33L655 33L709 25L764 33L818 25L873 33L927 33L982 25L1036 33L1091 25L1145 41L1200 41L1200 0L1145 0L1091 0L1036 0L982 0L927 0L873 0L818 0L764 0L709 0L655 0L600 0L545 0L491 0L436 0L382 0L327 0L273 0L218 0L164 0L109 0L55 0L0 0Z" fill="#6a1e55"></path><path d="M0 81L55 73L109 73L164 73L218 81L273 89L327 81L382 65L436 89L491 89L545 73L600 81L655 81L709 65L764 81L818 57L873 81L927 65L982 81L1036 65L1091 81L1145 73L1200 81L1200 39L1145 39L1091 23L1036 31L982 23L927 31L873 31L818 23L764 31L709 23L655 31L600 31L545 31L491 39L436 31L382 23L327 39L273 31L218 23L164 39L109 39L55 39L0 23Z" fill="#631d4f"></path><path d="M0 105L55 97L109 113L164 97L218 105L273 113L327 121L382 97L436 121L491 121L545 97L600 105L655 105L709 105L764 113L818 81L873 121L927 105L982 121L1036 97L1091 113L1145 105L1200 105L1200 79L1145 71L1091 79L1036 63L982 79L927 63L873 79L818 55L764 79L709 63L655 79L600 79L545 71L491 87L436 87L382 63L327 79L273 87L218 79L164 71L109 71L55 71L0 79Z" fill="#5b1b49"></path><path d="M0 201L55 201L109 185L164 177L218 185L273 217L327 217L382 217L436 201L491 209L545 185L600 225L655 201L709 177L764 201L818 169L873 209L927 177L982 201L1036 193L1091 225L1145 209L1200 185L1200 103L1145 103L1091 111L1036 95L982 119L927 103L873 119L818 79L764 111L709 103L655 103L600 103L545 95L491 119L436 119L382 95L327 119L273 111L218 103L164 95L109 111L55 95L0 103Z" fill="#541a44"></path><path d="M0 241L55 241L109 225L164 225L218 233L273 257L327 257L382 249L436 241L491 257L545 217L600 265L655 241L709 217L764 241L818 209L873 241L927 217L982 241L1036 241L1091 265L1145 249L1200 217L1200 183L1145 207L1091 223L1036 191L982 199L927 175L873 207L818 167L764 199L709 175L655 199L600 223L545 183L491 207L436 199L382 215L327 215L273 215L218 183L164 175L109 183L55 199L0 199Z" fill="#4d183e"></path><path d="M0 313L55 305L109 281L164 297L218 289L273 329L327 297L382 297L436 313L491 305L545 297L600 337L655 297L709 289L764 305L818 257L873 297L927 273L982 289L1036 305L1091 329L1145 305L1200 289L1200 215L1145 247L1091 263L1036 239L982 239L927 215L873 239L818 207L764 239L709 215L655 239L600 263L545 215L491 255L436 239L382 247L327 255L273 255L218 231L164 223L109 223L55 239L0 239Z" fill="#461739"></path><path d="M0 361L55 345L109 313L164 321L218 321L273 369L327 321L382 321L436 361L491 345L545 329L600 361L655 337L709 321L764 353L818 297L873 337L927 313L982 321L1036 353L1091 353L1145 329L1200 329L1200 287L1145 303L1091 327L1036 303L982 287L927 271L873 295L818 255L764 303L709 287L655 295L600 335L545 295L491 303L436 311L382 295L327 295L273 327L218 287L164 295L109 279L55 303L0 311Z" fill="#401533"></path><path d="M0 425L55 393L109 361L164 369L218 377L273 425L327 369L382 385L436 409L491 385L545 377L600 409L655 401L709 377L764 401L818 345L873 377L927 377L982 385L1036 417L1091 417L1145 369L1200 377L1200 327L1145 327L1091 351L1036 351L982 319L927 311L873 335L818 295L764 351L709 319L655 335L600 359L545 327L491 343L436 359L382 319L327 319L273 367L218 319L164 319L109 311L55 343L0 359Z" fill="#39132e"></path><path d="M0 489L55 465L109 441L164 449L218 465L273 513L327 457L382 449L436 457L491 441L545 449L600 489L655 457L709 457L764 457L818 449L873 441L927 425L982 433L1036 505L1091 481L1145 425L1200 465L1200 375L1145 367L1091 415L1036 415L982 383L927 375L873 375L818 343L764 399L709 375L655 399L600 407L545 375L491 383L436 407L382 383L327 367L273 423L218 375L164 367L109 359L55 391L0 423Z" fill="#321129"></path><path d="M0 601L55 641L109 585L164 561L218 641L273 617L327 633L382 609L436 585L491 625L545 561L600 657L655 577L709 593L764 601L818 633L873 649L927 561L982 609L1036 657L1091 617L1145 569L1200 641L1200 463L1145 423L1091 479L1036 503L982 431L927 423L873 439L818 447L764 455L709 455L655 455L600 487L545 447L491 439L436 455L382 447L327 455L273 511L218 463L164 447L109 439L55 463L0 487Z" fill="#2c1024"></path><path d="M0 777L55 769L109 777L164 769L218 777L273 777L327 769L382 777L436 777L491 777L545 777L600 769L655 769L709 769L764 769L818 777L873 777L927 777L982 777L1036 769L1091 777L1145 777L1200 769L1200 639L1145 567L1091 615L1036 655L982 607L927 559L873 647L818 631L764 599L709 591L655 575L600 655L545 559L491 623L436 583L382 607L327 631L273 615L218 639L164 559L109 583L55 639L0 599Z" fill="#260e1f"></path><path d="M0 801L55 801L109 801L164 801L218 801L273 801L327 801L382 801L436 801L491 801L545 801L600 801L655 801L709 801L764 801L818 801L873 801L927 801L982 801L1036 801L1091 801L1145 801L1200 801L1200 767L1145 775L1091 775L1036 767L982 775L927 775L873 775L818 775L764 767L709 767L655 767L600 767L545 775L491 775L436 775L382 775L327 767L273 775L218 775L164 767L109 775L55 767L0 775Z" fill="#200a1a"></path></svg>
    </div>

      <h1
        className="text-[2.8rem] text-center text-white font-bold z-55"
        style={{ fontFamily: '"Intel One Mono", monospace' }}
      > Our Services </h1>

      <div className="flex  flex-wrap justify-center gap-4 h-full items-center">

        <div className=" relative bg-white opacity-65 p-4 rounded-2xl rounded-tl-none  flex flex-col items-center 
          gap-1 h-[12rem] w-[22rem] justify-center text-black before:content-[''] before:absolute before:-top-[12px]
          before:left-0 before:bg-white before:h-10 before:w-35 before:rounded-tl-2xl after:content-[''] after:absolute 
          after:-top-1 after:left-28 after:bg-white after:h-10 after:w-10 after:-rotate-28 ">
          <PiFolderSimpleFill size={22} className="z-5"/>
          <h1 className="font-bold text-center text-black text-[1.2rem]">Organize Videos</h1>
          <p className="text-center">
            Organize your YouTube videos into folders for easy, focused access.
          </p>
        </div>

        <div className=" relative bg-white opacity-65 p-4 rounded-2xl rounded-tl-none  flex flex-col items-center 
          gap-1 h-[12rem] w-[22rem] justify-center text-black before:content-[''] before:absolute before:-top-[12px]
          before:left-0 before:bg-white before:h-10 before:w-35 before:rounded-tl-2xl after:content-[''] after:absolute 
          after:-top-1 after:left-28 after:bg-white after:h-10 after:w-10 after:-rotate-28 ">
          <IoTime size={22} />
          <h1 className="font-bold text-center text-black text-[1.2rem]">Timestamped Notes</h1>
          <p className="text-center">
            Take notes tied directly to specific video timestamps.
          </p>
        </div>

          <div className=" relative bg-white opacity-65 p-4 rounded-2xl rounded-tl-none  flex flex-col items-center 
          gap-1 h-[12rem] w-[22rem] justify-center text-black before:content-[''] before:absolute before:-top-[12px]
          before:left-0 before:bg-white before:h-10 before:w-35 before:rounded-tl-2xl after:content-[''] after:absolute 
          after:-top-1 after:left-28 after:bg-white after:h-10 after:w-10 after:-rotate-28 ">
          <MdOutlineNoteAdd size={22} />
          <h1 className="font-bold text-center text-black text-[1.2rem]">Note Summaries</h1>
          <p className="text-center">
            Create quick summaries of your notes to review key points.
          </p>
        </div>
      </div>

        <Link to="/container" className="bg-[#561a45] z-5 text-white w-max self-center
         p-3 rounded-2xl font-bold flex align-middle 
        justify-center gap-2 hover:bg-[#3B1C32] transition-all ease-in delay-5 cursor-pointer">
          Start Organizing <FaArrowCircleRight  className=" self-center"/>

        </Link>
        
    </div>
  );
}
