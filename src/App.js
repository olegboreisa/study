import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar"
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"
import classes from './App.module.css'
import {Provider} from "react-redux";
import store from './store/Store'
import background from "./components/Content/assets/pics/homey.jpg";

function App() {
  return (
      <Provider store={store}>
          <div className={classes.container}>
              <BrowserRouter>

                  <div className={classes.navbar}>
                      <Navbar />
                  </div>

                  <div style={{backgroundImage: `url(${background})`}}className={classes.main}>
                      <Sidebar />
                      <Content />
                  </div>

                  <div className={classes.footer}>
                      <Footer />
                  </div>

              </BrowserRouter>
          </div>
      </Provider>

  );
}

export default App;
