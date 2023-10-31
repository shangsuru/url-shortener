export default function Stats() {
  function getStats(shortUrl: string) {
    console.log("TODO");
  }

  return (
    <div className="mt-20 sm:mx-20">
      <div>
        <div className="card max-w-[1500px] text-md md:text-xl lg:text-2xl 2xl:text-4xl">
          <h1 className="font-bold flex justify-center items-center text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl mb-10 lg:mb-20">
            Track your short URLs
          </h1>
          <p className="flex justify-center items-center text-center sm:text-md sm:text-xl lg:text-2xl 2xl:text-4xl mt-5 2xl:mt-10  text-gray-500">
            Enter the URL to find out how many clicks it has received so far,
            and other stuff.
          </p>

          <div className="sm:flex sm:justify-center sm:items-center sm:flex-left mt-10 2xl:mt-20">
            <input
              placeholder="Enter your LinkShrink here"
              className="px-4 py-2 block sm:w-2/3 lg:w-3/4 border border-grey-800 outline-none  focus:border-black mr-3 lg:mr-10"
            />
            <button className="font-bold mt-5 sm:mt-0 px-4 py-2 sm:w-1/3 lg:w-1/4 bg-blue-500 hover:bg-blue-700 text-white border border-blue-700 rounded">
              View Clicks
            </button>
          </div>

          <div className="mt-10 2xl:mt-20 flex justify-center items-center">
            <a href="/" className="link">
              Short another URL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
