"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './component/headers';
import Footer from './component/footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@myapp.com' && password === 'password') {
      router.push('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
