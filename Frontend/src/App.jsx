import './App.css'
import Home from './components/home'
import AddBook from './components/AddBook'
import ShowBook from './components/showBook'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AddBook/>,
    },
    {
      path: "/ShowBook",
      element: <ShowBook/>,
    }
  ])

  return (
    <>
        
        <RouterProvider router={router} />
        {/* <ShowBook/> */}
      </>
  )
}

export default App
