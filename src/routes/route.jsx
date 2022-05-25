import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import PagesSearchBooks from '../pages/Search/Search';
  import PagesFormBooks from '../pages/Form/FormBooks';

  const Root = () =>{

    return(
        <Router>
            <Routes>
                  <Route path="/" element={<PagesSearchBooks />} />
                  <Route path="/create" element={<PagesFormBooks />} />
                  <Route path="/edit/:id" element={<PagesFormBooks />} />
            </Routes>
            
        </Router>

    );

  }

  export default Root;