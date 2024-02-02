import "./App.css";
import { lazy, Suspense } from "react";
const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Services = lazy(() => import("./pages/Services"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Forgotten = lazy(() => import("./pages/Forgotten"));
const Team = lazy(() => import("./pages/Team"));

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="spinner-wrap  100vh  py-[15em] flex items-center justify-center">
            <div className="h-[50%] flex flex-col justify-center items-center ">
              <div className="spinner"></div>
              <p>Hi! This page is Loading...</p>
            </div>
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/team" element={<Team />} />
            <Route path="/forgotten" element={<Forgotten />} />
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/services" element={<Services />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
