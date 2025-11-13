import { PiFolderSimpleFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";
import { MdOutlineNoteAdd } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServiceSection() {

  const cardVariants = {
    hidden: { opacity: 0, x: -120 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        delay: i * 0.2, // stagger effect
      },
    }),
  };

  const services = [
    {
      icon: <PiFolderSimpleFill size={22}  className="z-1000"/>,
      title: "Organize Videos",
      text: "Organize your YouTube videos into folders for easy, focused access.",
    },
    {
      icon: <IoTime size={22} className="z-1000" />,
      title: "Timestamped Notes",
      text: "Take notes tied directly to specific video timestamps.",
    },
    {
      icon: <MdOutlineNoteAdd size={22} className="z-1000" />,
      title: "Note Summaries",
      text: "Create quick summaries of your notes to review key points.",
    },
  ];

  return (
    <div className=" relative h-[150vh] lg:h-[100vh] flex flex-col pr-6 pl-6 pt-15 pb-20 
        bg-[#791b5e] text-[#3B1C32] gap-4 justify-center ">

     <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <svg id="visual" viewBox="0 6 2260 1000" width="2260" height="1800" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
          <path d="M0 185L160 87L320 163L480 217L640 260L800 217L960 109L1120 239L1280 141L1440 303L1600 336L1760 239L1920 217L2080 163L2240 325L2400 217L2560 293L2560 0L2400 0L2240 0L2080 0L1920 0L1760 0L1600 0L1440 0L1280 0L1120 0L960 0L800 0L640 0L480 0L320 0L160 0L0 0Z" fill="#791b5e"></path><path d="M0 249L160 131L320 217L480 282L640 293L800 260L960 131L1120 282L1280 185L1440 325L1600 401L1760 271L1920 282L2080 206L2240 357L2400 282L2560 314L2560 291L2400 215L2240 323L2080 161L1920 215L1760 237L1600 334L1440 301L1280 139L1120 237L960 107L800 215L640 258L480 215L320 161L160 85L0 183Z" fill="#711a58"></path><path d="M0 293L160 249L320 260L480 411L640 368L800 325L960 185L1120 336L1280 249L1440 379L1600 476L1760 390L1920 347L2080 303L2240 422L2400 401L2560 368L2560 312L2400 280L2240 355L2080 204L1920 280L1760 269L1600 399L1440 323L1280 183L1120 280L960 129L800 258L640 291L480 280L320 215L160 129L0 247Z" fill="#6a1852"></path><path d="M0 325L160 293L320 314L480 444L640 422L800 401L960 271L1120 390L1280 293L1440 476L1600 519L1760 455L1920 422L2080 379L2240 455L2400 433L2560 411L2560 366L2400 399L2240 420L2080 301L1920 345L1760 388L1600 474L1440 377L1280 247L1120 334L960 183L800 323L640 366L480 409L320 258L160 247L0 291Z" fill="#62174c"></path><path d="M0 509L160 465L320 519L480 573L640 627L800 552L960 455L1120 541L1280 411L1440 573L1600 692L1760 638L1920 487L2080 530L2240 595L2400 649L2560 584L2560 409L2400 431L2240 453L2080 377L1920 420L1760 453L1600 517L1440 474L1280 291L1120 388L960 269L800 399L640 420L480 442L320 312L160 291L0 323Z" fill="#5b1547"></path><path d="M0 530L160 487L320 552L480 606L640 660L800 573L960 519L1120 573L1280 476L1440 606L1600 714L1760 671L1920 552L2080 563L2240 638L2400 692L2560 617L2560 582L2400 647L2240 593L2080 528L1920 485L1760 636L1600 690L1440 571L1280 409L1120 539L960 453L800 550L640 625L480 571L320 517L160 463L0 507Z" fill="#541441"></path><path d="M0 671L160 573L320 606L480 681L640 822L800 671L960 563L1120 627L1280 584L1440 725L1600 779L1760 735L1920 703L2080 617L2240 779L2400 779L2560 725L2560 615L2400 690L2240 636L2080 561L1920 550L1760 669L1600 712L1440 604L1280 474L1120 571L960 517L800 571L640 658L480 604L320 550L160 485L0 528Z" fill="#4c123b"></path><path d="M0 757L160 671L320 660L480 725L640 854L800 768L960 627L1120 725L1280 649L1440 789L1600 811L1760 768L1920 746L2080 703L2240 811L2400 822L2560 768L2560 723L2400 777L2240 777L2080 615L1920 701L1760 733L1600 777L1440 723L1280 582L1120 625L960 561L800 669L640 820L480 679L320 604L160 571L0 669Z" fill="#461136"></path><path d="M0 930L160 930L320 941L480 930L640 973L800 897L960 908L1120 973L1280 941L1440 973L1600 973L1760 951L1920 1005L2080 919L2240 941L2400 995L2560 908L2560 766L2400 820L2240 809L2080 701L1920 744L1760 766L1600 809L1440 787L1280 647L1120 723L960 625L800 766L640 852L480 723L320 658L160 669L0 755Z" fill="#3f0f31"></path><path d="M0 984L160 951L320 995L480 951L640 1005L800 951L960 941L1120 1016L1280 984L1440 1005L1600 1005L1760 973L1920 1038L2080 973L2240 973L2400 1016L2560 930L2560 906L2400 993L2240 939L2080 917L1920 1003L1760 949L1600 971L1440 971L1280 939L1120 971L960 906L800 895L640 971L480 928L320 939L160 928L0 928Z" fill="#380d2b"></path><path d="M0 1005L160 1038L320 1016L480 1038L640 1049L800 1027L960 1027L1120 1059L1280 1005L1440 1049L1600 1049L1760 1027L1920 1059L2080 1038L2240 1016L2400 1049L2560 1016L2560 928L2400 1014L2240 971L2080 971L1920 1036L1760 971L1600 1003L1440 1003L1280 982L1120 1014L960 939L800 949L640 1003L480 949L320 993L160 949L0 982Z" fill="#310c26"></path><path d="M0 1081L160 1081L320 1081L480 1081L640 1081L800 1081L960 1081L1120 1081L1280 1081L1440 1081L1600 1081L1760 1081L1920 1081L2080 1081L2240 1081L2400 1081L2560 1081L2560 1014L2400 1047L2240 1014L2080 1036L1920 1057L1760 1025L1600 1047L1440 1047L1280 1003L1120 1057L960 1025L800 1025L640 1047L480 1036L320 1014L160 1036L0 1003Z" fill="#2b0a21"></path></svg>
    </div>

      <h1
        className="text-[2.8rem] text-center text-white font-bold z-55"
        style={{ fontFamily: '"Intel One Mono", monospace' }}
      > Our Services </h1>

       <div className="flex flex-wrap justify-center gap-4 h-full items-center z-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative bg-white opacity-65 p-4 rounded-2xl rounded-tl-none 
              flex flex-col items-center gap-1 h-[12rem] w-[22rem] justify-center text-black 
              before:content-[''] before:absolute before:-top-[12px] before:left-0 before:bg-white 
              before:h-10 before:w-35 before:rounded-tl-2xl after:content-[''] after:absolute 
              after:-top-1 after:left-28 after:bg-white after:h-10 after:w-10 after:-rotate-28"
          >
            {service.icon}
            <h1 className="font-bold text-center text-black text-[1.2rem]">
              {service.title}
            </h1>
            <p className="text-center">{service.text}</p>
          </motion.div>
        ))}
      </div>

        <Link to="/container" className="bg-[#561a45] z-5 text-white w-max self-center
         p-3 rounded-2xl font-bold flex align-middle 
        justify-center gap-2 hover:bg-[#3B1C32] transition-all ease-in delay-5 cursor-pointer">
          Start Organizing <FaArrowCircleRight  className=" self-center"/>

        </Link>
        
    </div>
  );
}