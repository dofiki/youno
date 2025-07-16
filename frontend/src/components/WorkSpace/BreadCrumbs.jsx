import { IoArrowBack } from "react-icons/io5";

export default function BreadCrumbs({
    path,
    handleBack,
    getBreadCrumbs,
    setPath
}) {

  return (
    <div className="flex gap-2 items-center">
      {path.length > 0 && (
        <button onClick={handleBack}>
          <IoArrowBack className="cursor-pointer text-gray-500 hover:text-black"/>
        </button>
      )}

      <div>
        {getBreadCrumbs().map((name, index) => (
          <span key={index}>
            {index > 0 && ' / '}
            <span
              className="cursor-pointer text-gray-500 hover:text-black"
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
