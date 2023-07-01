import logo from './logo.svg';
import './components/css/App.css';
import Notes from './components/NoteComponents/Notes';
import Header from './components/NoteComponents/Header';

function App() {
  return (
    <div className="main">
      <Header/>
      <Notes/>
    </div>
  );
}

export default App;
