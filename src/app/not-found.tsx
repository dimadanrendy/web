import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        {/* 404 SVG Illustration */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="150"
          viewBox="0 0 24 24"
          className="mx-auto mb-6"
        >
          <path
            fill="none"
            d="M0 0h24v24H0z"
          />
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
          />
        </svg>

        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>

        <p className="text-gray-500 mb-4">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button to go home */}
        <Link
          href="/home"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}