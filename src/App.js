import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';
function App() {
  //const [count, setCount] = useState(0);
  //const { count } = useSelector(state => state.counter)
  const count = useSelector(state => state.counter.count);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The Count is: { count }</h1>
      <button onClick={()=> dispatch(increment())}>increment</button>
      <button onClick={()=> dispatch(decrement())}>decrement</button> 
      <button onClick={()=> dispatch(incrementByAmount(33))}>Increment By 33</button> 
    </div>
  );
}

export default App;
