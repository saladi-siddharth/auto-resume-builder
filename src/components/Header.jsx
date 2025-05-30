import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/assets/images/logo.png" alt="Auto Resume Logo" className="w-12 h-12 mr-4" />
        <h1 className="text-2xl font-bold text-blue-600">Auto Resume Builder</h1>
      </div>
      <nav className="flex gap-4">
        <Link
          to="/"
          className={`text-lg ${location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className={`text-lg ${location.pathname === '/dashboard' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
        >
          Dashboard
        </Link>
        <Link
          to="/editor"
          className={`text-lg ${location.pathname === '/editor' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
        >
          Editor
        </Link>
      </nav>
    </header>
  );
};

export default Header;