import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-800 mb-4">
          Reality Check
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          An AI tool that questions you — to help you reflect, grow, and make
          better decisions.
        </p>
        <Link
          to={"/realAI"}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-semibold transition"
        >
          Start Reality Check
        </Link>
      </div>
      <div>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
          <h1 className="text-6xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            Check Yourself
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            An AI-powered tool that nudges you to think deeper, question your
            choices, and find your real ‘why’. No fluff, just facts.
          </p>
          {/* <Link
            to={"/realAI"}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg font-semibold transition"
          >
            Start Reality Check
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;