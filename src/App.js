import './App.css';
import Users from './Components/AllUsers/Users';
import Header from './Components/Header/Header';

function App() {

  return (
    <div className="bg-container">
      <div>
      <Header/>
      <Users/>
      </div>
    </div>
  )
}

export default App;