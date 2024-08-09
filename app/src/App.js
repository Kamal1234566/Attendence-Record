// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './Register';
// import Log from './Log';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/Register" element={<Register />} />
//         <Route path="/login" element={<Log />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Role from './Role';
import RegisterUser from './RegisterUser'; // Make sure to create this component
import Registeradmin from './Registeradmin'; // Make sure to create this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Role />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/admin" element={<Registeradmin />} />
      </Routes>
    </Router>
  );
}

export default App;

