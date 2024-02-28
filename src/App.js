
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './app.css'
import HomePage from 'assets/pages/HomePage';
import Page1 from 'assets/pages/Page1';
import Page2 from 'assets/pages/Page2';
import Page3 from 'assets/pages/Page3';
import Page4 from 'assets/pages/Page4';
import Page5 from 'assets/pages/Page5';
import Page6 from 'assets/pages/Page6';
import Page7 from 'assets/pages/Page7';
import Page8 from 'assets/pages/Page8';
import Page9 from 'assets/pages/Page9';
import Page10 from 'assets/pages/Page10';

function App() {
  return (
    <div>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} /> {/* Adjust Route usage to new syntax */}
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Route path="/page5" component={Page5} />
        <Route path="/page6" component={Page6} />
        <Route path="/page7" component={Page7} />
        <Route path="/page8" component={Page8} />
        <Route path="/page9" component={Page9} />
        <Route path="/page10" component={Page10} />
      </Routes>
    </div>
  );
}

export default App;