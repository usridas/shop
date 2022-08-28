import './App.scss';
import { ItemGrid } from './components/ItemGrid';

function App() {
  return (
    <div>
      <div className='checkout-container'><button className='checkout-button'>Checkout</button></div>
      <ItemGrid />
    </div>
  );
}

export default App;
