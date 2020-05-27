import React from 'react';
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import Autho from "../Login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import {SelectCustom} from '../Select/select';
import ImageUpload from '../Select/select';

function App() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

  return (
      <Router>
        <div>
            <main>
                {/*<Navbar/>*/}
                {/*<section className="container">*/}
                {/*    {<Container />}*/}
                {/*</section>*/}
                {/*<Autho />*/}
                {/*<SelectCustom options={options}/>*/}
                <ImageUpload />
            </main>
        </div>
      </Router>
  );
}

export default App;
