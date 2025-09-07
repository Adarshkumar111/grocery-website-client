const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 mt-24 px-6 md:px-14">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
      <p className="md:text-lg text-gray-500/70 pb-6">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </p>

      <form className="flex flex-col sm:flex-row items-center w-full max-w-2xl gap-3">
        <input
          className="border border-gray-300 rounded-md sm:rounded-r-none outline-none w-full px-3 py-3 text-gray-500"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="sm:px-12 px-8 py-3 text-white bg-[#4fbf8b] hover:bg-[#44ae7c] transition-all cursor-pointer rounded-md sm:rounded-l-none w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
