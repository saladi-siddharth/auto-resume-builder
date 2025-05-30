import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Auto Resume Builder</h1>
      <p className="text-lg mb-6">Create professional resumes with AI and download them as PDFs.</p>
      <Link to="/editor" className="bg-blue-500 text-white px-6 py-3 rounded">Start Building</Link>
    </div>
  );
};

export default Home;