import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Properties from "./Pages/Properties";
import PropertyDetails from "./Pages/PropertyDetails";
import TestComp from "./Pages/Test";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route  path ="/Contact"   element={<Contact/>}/>
      <Route  path ="/Properties"  element={<Properties/>}/>
      <Route  path ="/PropertyDetails"  element={<PropertyDetails/>}/>
      <Route  path ="/test"  element={<TestComp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
