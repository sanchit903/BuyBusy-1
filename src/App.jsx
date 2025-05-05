import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
