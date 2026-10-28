import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="text-center text-2xl text-white">
        <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
        <div className="mt-5">
      <Link className="bg-blue-500 text-lg rounded-xl p-2 mt-2" to="/">Go Back Home</Link>

        </div>
    </div>

  );
}

export default ErrorPage;
