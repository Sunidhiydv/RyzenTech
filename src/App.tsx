
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home";
import { ContactUs } from "./components/ContactUs";
import AboutMain from "./components/AboutMain";
import ServicesMain from "./components/ServicesMain";
import TestimonalsMain from "./components/TestimonalsMain";
import Blogs from "./components/Blogs";
import Tech from "./components/blogs/Tech";


const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/contact',
    element : <ContactUs/>
  },
  {
    path : '/about',
    element : <AboutMain/>
  },
  {
    path : '/services',
    element : <ServicesMain/>
  },
  {
    path : '/testimonials',
    element : <TestimonalsMain/>
  },
  {
    path : '/blogs',
    element : <Blogs/>
  },
  {
    path : '/tech',
    element : <Tech/>
  },
  
])

function App() {
  return (
    <>
      <RouterProvider router = {appRouter}/>
    </>
  );
}

export default App;
