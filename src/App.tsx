import { Phases } from "./phases"
import { Timer } from "./timer"

function App() {


  return (
    <div className="w-full h-full grid grid-cols-2 text-center">
      <Timer />
      <Phases />
    </div>
  )
}

export default App
