import './App.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router ,Route ,Routes, BrowserRouter } from 'react-router-dom'
import Topbar from './Components/Bars/Topbar';
import Heading from './Components/Heading';
import  Form  from './Components/Maincantents/Form';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Topbar/>
      <Heading/>
      <Routes>
        <Route path='/' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
