import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";


function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>

      {isLogged ? <h3>Valuable information I shouldn't see</h3> : null}
    </div>
  );
}

export default App;
