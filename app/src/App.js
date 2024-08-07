import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import About from './pages/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content" style={{ paddingTop: '70px' }}>
                <Catalog />
                <About />
            </div>
            <Footer />
        </div>
    );
}

export default App;
