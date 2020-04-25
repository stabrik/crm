import React from 'react';
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="container">
            <main>
                <Navbar/>
                <section>
                    {<Container />}
                </section>
            </main>
        </div>
      </Router>
  );
}

export default App;
