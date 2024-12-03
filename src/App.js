import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Button from './components/Button';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemContext';



function App() {
   let {Changethime}=useContext(ThemeContext)

  
  return (
    <div className="App">
         <Navbar/>
         <Main/>
         <Button InnerText={"ChangeTheme"} insidefunction={Changethime} />
    </div>
  );
}

export default App;
