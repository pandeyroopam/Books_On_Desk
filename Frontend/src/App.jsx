import './App.css'
import AddBook from './pages/AddBook'
import ShowBook from './pages/showBook'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Community from './pages/Community'
// import ScrollToTop from "./components/ScrollToTop";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Community",
        element: <Community/>,
      },
      {
        path: "/ShowBooks/:id",
        element: <ShowBook/>,

      },
      {
        path: "/AddBook",
        element: <AddBook/>,
      },
      {
        path: "/Browse",
        element: <Browse/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },
      {
         path: "Signup",
          element: <Signup/>,
      },
    ])

  return (
    <>
               {/* <ScrollToTop /> */}
       <RouterProvider router={router} />

      </>
  )
}

export default App
