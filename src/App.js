import Reatc, { useState } from './Reatc'
/** @jsx Reatc.createElement */

export default function App() {
  const [state, setState] = useState(1)
  return (
    <h1 onClick={() => setState(c => c + 1)}>
      Count: {state}
    </h1>
  )
}