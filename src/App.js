import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar"
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"
import classes from './App.module.css'

function App() {
  return (
      <div className={classes.container}>
          <BrowserRouter>

              <div className={classes.navbar}>
                  <Navbar />
              </div>

              <div className={classes.main}>
                  <Sidebar />
                  <Content />
              </div>

               <div className={classes.footer}>
                   <Footer />
               </div>

        </BrowserRouter>
      </div>
  );
}



export default App;
