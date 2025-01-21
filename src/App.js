import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
} from "react-router-dom"

function App() {
  return (
    <Router>

    <Header/>
    <Footer/>
    
    </Router>
  );
}

export default App;
