export default function ServiceCard({ title, image, buttonText, bgColor, buttonClass }) {
  return (
    <div
      className={`w-full max-w-md p-6 md:p-8 rounded-3xl shadow-md hover:shadow-lg transition border-b-4 border-black ${bgColor} flex flex-col md:flex-row justify-between items-center gap-6 h-full`}
    >
      <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center justify-center md:justify-start gap-2">
          <img className="w-6 h-6" src="./icon.svg" alt="icon" />
          {buttonText && (
            <button className={`px-2 py-2 rounded ${buttonClass}`}>
              {buttonText}
            </button>
          )}
        </div>
      </div>

      {image && (
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-[80px] h-auto">{image}</div>
        </div>
      )}
    </div>
  );
}
