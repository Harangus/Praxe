import './App.css';
import MyProducts from './products';

function App() {
  return (
    <div className="App">
      <MyProducts name="Asus ROG Strix G15" description="Herní notebook" value={90000}></MyProducts>
    </div>
  );
}

export default App;
