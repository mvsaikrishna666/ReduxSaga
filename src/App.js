import './App.css';
import Counter from './components/Counter'
import UsersList from './components/UsersList'
function App() {
  return (
    <div className="App">
      <Counter/>
      <hr/>
      <UsersList/>
    </div>
  );
}

export default App;
