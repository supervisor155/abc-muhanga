import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
    <h1 className="text-9xl font-black text-slate-200">404</h1>
    <p className="text-2xl font-bold mt-4">Page Not Found</p>
    <p className="text-slate-500 mt-2 text-center">The page you're looking for doesn't exist or has been moved.</p>
    <Link to="/" className="mt-8 bg-accent text-white px-6 py-2 rounded-full font-medium">Go Home</Link>
  </div>
);
export default NotFound;