import './App.css';
import Home from './Pages/Home/Home'
import Login from './Components/AuthForm/Login'
import SignUp from './Components/AuthForm/SignUp'
import logoleftfont from './Assets/images/icon.svg'
import {AuthProvider} from './Context/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
        <Home />
      </AuthProvider>  
    </>
  );
}

export default App;
