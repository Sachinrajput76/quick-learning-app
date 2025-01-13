// app/page.tsx
import Header from './component/headers';
import Footer from './component/footer';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      {/* Landing Section */}

      <div className="py-20 container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Quick Learning App</h1>
        <p className="text-xl mb-6">Learn at your own pace with interactive tutorials and resources!</p>
        <Link href="/login" passHref>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg text-xl hover:bg-yellow-400 transition-all duration-200">
            Get Started
          </button>
        </Link>
      </div>

    </>
  );
};

export default LandingPage;
