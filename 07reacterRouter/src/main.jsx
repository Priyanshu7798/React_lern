import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App />,
//     children:[
//       {
//         path:'',
//         element: <Home />
//       },
//       {
//         path:'About',
//         element: <About />
//       },
//       {
//         path:'Contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

//  other method

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='User/:userId' element={<User />} />
      <Route
        path='Github'
        loader={githubInfoLoader}
        element={<Github />}
       />
    </Route>
  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
