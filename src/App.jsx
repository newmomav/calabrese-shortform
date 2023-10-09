import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Layout from './pages/Layout';
import DarkMode from './components/DarkMode/DarkMode';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className={`fixed top-0 left-0 h-screen w-screen z-50 `}>
          <Loader />
        </div>
      )}

      <div
        className={`transition-opacity ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Layout />
        <DarkMode />
      </div>
    </>
  );
}

export default App;
