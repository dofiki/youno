import { IoArrowBack } from "react-icons/io5";

export default function BreadCrumbs({
    path,
    handleBack,
    getBreadCrumbs,
    setPath
}) {

  return (
    <div className="flex gap-2 items-center pt-4">
      {path.length > 0 && (
        <button onClick={handleBack}>
          <IoArrowBack className="cursor-pointer text-white  hover:text-[#da42ae] transition-colors delay-5 "/>
        </button>
      )}

      <div>
        {getBreadCrumbs().map((name, index) => (
          <span key={index}>
            {index > 0 && ' / '}
            <span
              className="cursor-pointer text-white hover:text-[#da42ae] transition-colors delay-5 "
              onClick={() => setPath(path.slice(0, index))}
            >
              {name}
            </span>
          </span>
        ))}
      </div>
      
    </div>
  );
}
