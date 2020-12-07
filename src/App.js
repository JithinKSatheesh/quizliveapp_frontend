import './bootstrap/bootstrap.min.css'
import './App.css';
import PageContextProvider from './components/context'
import bgHome from './images/bgHome.png'
import Quiz from './components/quiz'
import Home from './components/Home'

function App() {
  return (
    <PageContextProvider>
      <div style={{ backgroundImage: `url(${bgHome})`, backgroundSize: 'cover' }} className="App">
        <Home />
      </div>
    </PageContextProvider>
  );
}


export default App;
