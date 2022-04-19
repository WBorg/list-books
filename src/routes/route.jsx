import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import PagesListBook from '../pages/List/ListBooks';

  const Root = () =>{

    return(
        <Router>
            <Routes>
                  <Route path="/" element={<PagesListBook />} />
            </Routes>
            
        </Router>

    );

  }

  export default Root;