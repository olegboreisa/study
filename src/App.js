import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar"
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"


function App() {
  return (
      <BrowserRouter>
          <div>
              <Navbar />
              <Sidebar />
              <Content />
              <Footer />
          </div>
      </BrowserRouter>
  );
}



export default App;
