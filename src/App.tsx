import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Router Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-green-400 mb-4 font-mono">&gt; Something went wrong</h1>
            <p className="text-green-300 mb-4 font-mono">Please refresh the page to try again.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-mono"
            >
              &gt; Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-400 mb-4 font-mono">&gt; Page Not Found</h1>
          <p className="text-green-300 mb-4 font-mono">The page you're looking for doesn't exist.</p>
          <a href="/" className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-mono">
            &gt; Go Home
          </a>
        </div>
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;