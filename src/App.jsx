import { useState } from 'react';//leftover from default, delete maybe?
import './App.css';
import "./index.css";
import { LoadingScreen } from './components/loadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from "./components/sections/Home";
// import { About } from "./components/sections/About";
// import { Projects } from "./components/sections/Blog";
// import { Contact } from "./components/sections/Contact";

function App() {
  //this section is to check if our loading screem schould be shown or not.
  const [isLoaded, setIsLoaded] = useState(false); //setIsLoaded is a function 
  const [menuOpen, setMenuOpen] = useState(false);


return (
   <> 
   {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
    <div
     className={`min-h-screen transition-opacity duration-700 ${
      isLoaded ? "opacity-100" : "opacity-0"}
       bg-black text-gray-500`}
       >

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />

       </div>

   

   </> 
      );
}

export default App;

{/* 
<About />
<Projects />
<Blog /> */}
//THIS lINE IS PROOF GITHUB DIDNT GOOF