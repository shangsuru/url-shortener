interface CardProps {
  title: string;
  description: string;
  inputPlaceholder: string;
  buttonText: string;
  linkText: string;
  linkHref: "/" | "/stats";
}

export default function Card({
  title,
  description,
  inputPlaceholder,
  buttonText,
  linkText,
  linkHref,
}: CardProps) {
  return (
    <div>
      <div className="bg-[var(--card)] p-5 sm:p-10 shadow-lg max-w-[1500px] text-md md:text-xl lg:text-2xl 2xl:text-4xl">
        <h1 className="font-bold flex justify-center items-center text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl mb-10 lg:mb-20">
          {title}
        </h1>
        <p className="flex justify-center items-center text-center sm:text-md sm:text-xl lg:text-2xl 2xl:text-4xl mt-5 2xl:mt-10  text-gray-500">
          {description}
        </p>

        <div className="sm:flex sm:justify-center sm:items-center sm:flex-left mt-10 2xl:mt-20">
          <input
            placeholder={inputPlaceholder}
            className="px-4 py-2 block sm:w-2/3 lg:w-3/4 border border-grey-800 outline-none  focus:border-black mr-3 lg:mr-10"
          />
          <button className="font-bold mt-5 sm:mt-0 px-4 py-2 sm:w-1/3 lg:w-1/4 bg-blue-500 hover:bg-blue-700 text-white border border-blue-700 rounded">
            {buttonText}
          </button>
        </div>

        <div className="mt-10 2xl:mt-20 flex justify-center items-center">
          <a href={linkHref} className="text-blue-500 hover:text-blue-700">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}
