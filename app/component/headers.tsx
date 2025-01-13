import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300">Home</Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-300">Login</Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-blue-300">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
