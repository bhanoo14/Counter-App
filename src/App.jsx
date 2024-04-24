import { useState } from "react"


function App() {
  let [count, setCount] = useState(2);

  const addValue = () =>{
    // count += 1;
    setCount((count)<20 ? count++: count);
  }

  const revValue = () =>{
    // count -= 1;
    setCount((count)> 0 ? count--: count);
  }
  
  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value :{count}</h2>

      <button onClick={addValue}>Add : {count}</button>

      <button onClick={revValue}>Remove : {count}</button>
    </>
  )
}

export default App