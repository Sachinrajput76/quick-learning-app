// app/dashboard/page.tsx
import Header from './headers';
import Footer from './footer';

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block text-gray-300 hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="block text-gray-300 hover:text-white">Profile</a>
            </li>
            <li>
              <a href="#" className="block text-gray-300 hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block text-gray-300 hover:text-white">Logout</a>
            </li>
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <h2 className="text-3xl font-bold mb-6">Welcome to your Dashboard</h2>
          <p className="text-lg">Here is an overview of your account activity.</p>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Total Sales</h3>
              <p className="text-3xl font-bold text-blue-600">$20,000</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">New Orders</h3>
              <p className="text-3xl font-bold text-green-600">120</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Total Users</h3>
              <p className="text-3xl font-bold text-yellow-600">1,500</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-4">
              <li className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-lg">Order #1234 shipped to John Doe.</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </li>
              <li className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-lg">User Jane Smith updated her profile.</p>
                <p className="text-sm text-gray-500">4 hours ago</p>
              </li>
              <li className="p-4 bg-white rounded-lg shadow-md">
                <p className="text-lg">New order #5678 received from Mike Taylor.</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
