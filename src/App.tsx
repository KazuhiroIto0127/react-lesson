import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Counter from "./components/Counter"
import Layout from "./layout/default"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />}/>
        <Route path="/counters" element={<Counter />}/>
      </Route>
    </Routes>
  )
}

export default App
