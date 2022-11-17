import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import PortfolioContainer from './components/PortfolioControl';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <PortfolioContainer />
            </header>
        </div>
    );
}

export default App;
