import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/help/Contact';
import Faq from './pages/help/Faq';


//layouts 
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout';

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="help" element={<HelpLayout />}>
          <Route path='faq' element={<Faq />}/>
          <Route path='contact' element={<Contact />}/>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App