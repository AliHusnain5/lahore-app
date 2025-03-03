import logo from './logo.svg';
import './App.css';
import FristPage from './components/FristPage';
import CreateRepositry from './components/CreateRepositry';
import Clone from './components/Clone';
import Pull from './components/Pull';
import JustCodeSend from './JustCodeSend';

function App() {
  return (
    <div className="App">
      <FristPage/>
      <CreateRepositry/>
      <Clone/>
      <Pull/>
      <JustCodeSend/>


    </div>
  );
}

export default App;
