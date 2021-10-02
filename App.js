import './App.css';
import CreateTask from './container/CreateTask';
import GoodsList from './container/GoodsList';

function App() {
  return (
    <div className="container">
      <CreateTask></CreateTask>
      <GoodsList></GoodsList>
    </div>
  );
}

export default App;
